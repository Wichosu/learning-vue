<script setup lang='ts' >
import { ref, provide, type Ref } from 'vue';
import { Task } from './models/Task';
import { RemoveTaskKey, SendToEndOfListKey, SendToStartOfListKey } from './types/symbols';
import type { RemoveTask, SendToEndOfList, SendToStartOfList, SwapTasks } from './types/types';
import TaskForm from './components/TaskForm.vue';
import TaskList from './components/TaskList.vue';

const Tasks: Ref<Task[]> = ref([]);

const addTask = (task: Task): void => {
  Tasks.value.push(task);
};

const removeTask: RemoveTask = (id: string ): void => {
  Tasks.value = Tasks.value.filter((task) => task.id !== id);
};

const sendToEndOfList: SendToEndOfList = (id: string): void => {
  Tasks.value.push(Tasks.value.splice(Tasks.value.findIndex((task) => task.id === id), 1)[0])

};

const sendToStartOfList: SendToStartOfList = (id: string): void => {
  const Task = Tasks.value.splice(Tasks.value.findIndex((task) => task.id === id), 1)[0];
  Tasks.value.reverse();
  Tasks.value.push(Task);
  Tasks.value.reverse();
};

const swapTasks: SwapTasks = (idA: string, idB: string): void => {

}


provide(RemoveTaskKey, removeTask);
provide(SendToEndOfListKey, sendToEndOfList);
provide(SendToStartOfListKey, sendToStartOfList);

</script>

<template>
  <TaskForm @add-task='addTask' />
  <TaskList v-bind:Tasks='Tasks' />
</template>

<style scoped>
</style>
