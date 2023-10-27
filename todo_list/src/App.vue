<script setup lang='ts' >
import { ref, provide, type Ref } from 'vue';
import { Task } from './models/Task';
import { RemoveTaskKey } from './types/symbols';
import type { RemoveTask } from './types/types';
import TaskForm from './components/TaskForm.vue';
import TaskList from './components/TaskList.vue';

const Tasks: Ref<Task[]> = ref([]);

const addTask = (task: Task): void => {
  Tasks.value.push(task);
};

const removeTask: RemoveTask = (id: string ): void => {
  Tasks.value = Tasks.value.filter((task) => task.id !== id);
};

provide(RemoveTaskKey, removeTask);

</script>

<template>
  <TaskForm @add-task='addTask' />
  <TaskList v-bind:Tasks='Tasks' />
</template>

<style scoped>
</style>
