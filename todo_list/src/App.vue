<script setup>
import { ref, provide } from 'vue';
import TaskForm from './components/TaskForm.vue';
import TaskList from './components/TaskList.vue';

const Tasks = ref([]);

const addTask = (task) => {
  Tasks.value.push(task);
};

const removeTask = (id) => {
  Tasks.value = Tasks.value.filter((task) => task.id !== id);
};

provide('removeTask', removeTask);

</script>

<template>
  <TaskForm @add-task='addTask' />
  <TaskList v-bind:Tasks='Tasks' @remove-task='removeTask' />
</template>

<style scoped>
</style>
