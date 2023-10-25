<script lang='ts' setup>
import { defineProps } from 'vue';
import Task from './Task.vue';
import { Task as TaskType}from '../models/Task';

//const props = defineProps(['Tasks']);

const props = defineProps(
  {
    Tasks: { type: Array<TaskType> },
  }
)

//const Tasks: TaskType[] = props.Tasks

</script>
<template>
  <div class='task-container'>
    <h1>My Tasks</h1>
    <div class='task-list'>
      <Task v-for='task in props.Tasks' v-bind:task='task' />
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

</style>