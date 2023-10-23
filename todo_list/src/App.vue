<script setup>
import { ref } from 'vue';
import TaskForm from './components/TaskForm.vue';
import TaskList from './components/TaskList.vue';

const Tasks = ref([]);

const addTask = (task) => {
  Tasks.value.push(task);
  console.log(Tasks.value)
};

const removeTask = (id) => {
  Tasks.value.filter((task) => task.id !== id);
};

</script>

<template>
  <TaskForm @add-task='addTask' />
  <TaskList v-bind:Tasks='Tasks' @remove-task='removeTask' />
</template>

<style scoped>
</style>
