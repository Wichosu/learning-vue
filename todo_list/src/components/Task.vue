<script setup lang='ts'>
import { defineProps, inject } from 'vue';
import { RemoveTaskKey } from '../types/symbols';
import { Task } from '../models/Task';
import { State } from '../types/enums';

const props = defineProps<{
  task: Task
}>();

const removeTask = inject(RemoveTaskKey);

const markAsDone = (): void => {
  props.task.state = State.Done;
};

</script>

<template>
  <div class='task-item' :class="{ 'opacity': props.task.isDone() }">
    <li :class="{ 'linethrough': props.task.isDone() }">
      {{ props.task.value }}
    </li>
    <div class='task-icons'>
      <span 
        :class="{
          'task-done': props.task.isPending(),
          'task-reset': props.task.isDone() 
        }" 
        @click=markAsDone
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
    --yellow:  #385399;
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

</style>