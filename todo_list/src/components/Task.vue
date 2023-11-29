<script setup lang='ts'>
import { defineProps, inject } from 'vue';
import { RemoveTaskKey, SendToEndOfListKey, SendToStartOfListKey } from '../types/symbols';
import { Task } from '../models/Task';
import { State } from '../types/enums';

const props = defineProps<{
  task: Task
}>();

const removeTask = inject(RemoveTaskKey);
const sendToEndOfList = inject(SendToEndOfListKey);
const sendToStartOfList = inject(SendToStartOfListKey);

const toggleState = (): void => {
  if(props.task.isDone()) {
    props.task.state = State.Pending;
    sendToStartOfList(props.task.id);
    return
  }

  if(props.task.isPending()) {
    props.task.state = State.Done;
    sendToEndOfList(props.task.id);
    return
  }
};

const dragStart = (e: DragEvent) => {
  e.dataTransfer.effectAllowed = "move";

  const taskDiv = (<HTMLDivElement>e.target);

  e.dataTransfer.setData("text/taskId", props.task.id);

};

const dragEnter = (e: DragEvent) => {
  const divElement = (<HTMLDivElement>e.target);

  if(e.dataTransfer.getData("text/taskId") !== props.task.id) {
    divElement.classList.add("onDragEnter");
  };
};

const dragLeave = (e: DragEvent) => {
  const divElement = (<HTMLDivElement>e.target);

  divElement.classList.remove("onDragEnter");
};

const dragOver = (e: DragEvent) => {
  console.log(e.dataTransfer.getData("text/taskId"));

  //swap task places on array
};

</script>

<template>
  <div 
    v-on:dragstart='dragStart'
    v-on:dragenter='dragEnter'
    v-on:dragover='dragOver'
    v-on:dragleave='dragLeave'
    draggable='true' 
    class='task-item' 
    :class="{ 'opacity': props.task.isDone() }"
  >
    <li :class="{ 'linethrough': props.task.isDone() }">
      {{ props.task.value }}
    </li>
    <div class='task-icons'>
      <span 
        :class="{
          'task-done': props.task.isPending(),
          'task-reset': props.task.isDone() 
        }" 
        @click=toggleState
      >
        {{ props.task.isDone()? '↺' : '✔'}}
      </span>
      <span class='task-delete' @click='() => removeTask(props.task.id)'>✘</span>
    </div>
  </div>
</template>

<style>
  :root {
    --green: #16a34a;
    --yellow:  #d97706;
    --red: #dc2626;
    --white: #f9fafb;
    --gray: #dbeafe;
  }

  .task-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    border-radius: 4px;
    padding: 10px 40px;
    max-width: 600px;
    background-color: var(--white);
  }

  .linethrough {
    text-decoration: line-through;
  }

  .opacity {
    opacity: 0.6;
  }

  .task-item:nth-child(even) {
    background-color: var(--gray); 
  }

  .task-item li {
    list-style: none;
  }

  .task-item span {
    justify-self: flex-end;
    cursor: pointer;
  }

  .task-icons {
    display: flex;
    gap: 20px;
  }

  .task-icons span {
    padding: 5px;
    border-radius: 8px;
    transition: all ease 250ms;
  }

  .task-done {
    color: var(--green);
  }

  .task-done:hover {
    color: var(--white);
    background-color: var(--green);
  }

  .task-reset {
    color: var(--yellow);
  }

  .task-reset:hover {
    color: var(--white);
    background-color: var(--yellow);
  }

  .task-delete {
    color: var(--red);
  }

  .task-delete:hover {
    color: var(--white);
    background-color: var(--red);
  }

  .onDragEnter {
    background-color: red !important;
  }

</style>