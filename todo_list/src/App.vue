<script setup lang='ts' >
import { ref, provide, type Ref } from 'vue';
import { Task } from './models/Task';
import { RemoveTaskKey, SendToEndOfListKey, SendToStartOfListKey } from './types/symbols';
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

const sendToEndOfList = (id: string): void => {
//  const index = Tasks.value.findIndex((task) => task.id === id);
  Tasks.value.push(Tasks.value.splice(Tasks.value.findIndex((task) => task.id === id), 1)[0])

};

const sendToStartOfList = (id:string): void => {
  const Task = Tasks.value.splice(Tasks.value.findIndex((task) => task.id === id), 1)[0];
  Tasks.value.reverse();
  Tasks.value.push(Task);
  Tasks.value.reverse();

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
