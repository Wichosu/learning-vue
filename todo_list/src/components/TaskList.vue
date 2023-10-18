<script setup>
import { defineProps } from 'vue';

const props = defineProps(['Tasks']);

</script>
<template>
  <div class='task-container'>
    <h1>My Tasks</h1>
    <div class='task-list'>
      <div class='task-item' v-for='task in props.Tasks'>
        <li>
          {{ task }}
        </li>
        <div class='task-icons'>
          <span class='task-done'>✔</span>
          <span class='task-delete'>✘</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .task-container {
    border: 1px solid #666;
    border-radius: 4px;
    margin: 2rem auto;
    max-width: 600px;
    padding: 2rem 4rem;
  }

  h1 {
    text-align: center;
    margin: 0;
  }

  .task-list {
    margin-top: 20px;
    display: grid;
    gap: 1rem;
  }

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