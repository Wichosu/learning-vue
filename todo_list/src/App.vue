<script setup>
import { ref } from 'vue';
import TaskForm from './components/TaskForm.vue';
import TaskList from './components/TaskList.vue';

const Tasks = ref([]);

const addTask = (task) => {
  Tasks.value.push(task);
}

</script>

<template>
  <TaskForm :add-task='addTask' />
  <TaskList :tasksList='Tasks' />
  
</template>

<style scoped>
</style>
