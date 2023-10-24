<script setup>
import { defineProps, inject } from 'vue';

const props = defineProps(['task']);

const removeTask = inject('removeTask');

</script>

<template>
  <div class='task-item'>
    <li>
      {{ props.task.value }}
    </li>
    <div class='task-icons'>
      <span class='task-done'>✔</span>
      <span class='task-delete' @click='() => removeTask(props.task.id)'>✘</span>
    </div>
  </div>
</template>

<style>
  .task-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    border-radius: 4px;
    padding: 10px 40px;
    max-width: 600px;
    background-color: #f9fafb;
  }

  .task-item:nth-child(even) {
    background-color: #dbeafe; 
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
    color: #16a34a;
  }

  .task-done:hover {
    color: #f9fafb ;
    background-color: #22c55e;
  }

  .task-delete {
    color: #dc2626;
  }

  .task-delete:hover {
    color: #f9fafb;
    background-color: #dc2626;
  }

</style>