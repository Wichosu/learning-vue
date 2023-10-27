<script setup lang='ts'>
import { ref } from 'vue';
import type { Ref } from 'vue';
import { Task } from '../models/Task.ts';

//const emit = defineEmits(['addTask']);

const emit = defineEmits<{
  (e: 'addTask', task: Task): void
}>()

const input: Ref<string> = ref("");

const updateTask = (e: Event): void => {
  const target = (<HTMLInputElement>e.target);

  input.value = target.value;
}

const submit = (): void => {
  emit('addTask', new Task(input.value));
};

</script>

<template>
  <form @submit.prevent='submit'>
    <div class='input-task'>
      <label>Your task</label>
      <input type='text' placeholder='Your Task' @input='updateTask' />
    </div>
    <button>Add Task</button>
  </form>
</template>

<style scoped>
  .input-task {
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
    gap: 0.5rem;
  }

  input {
    width: fit-content;
  }

  button {
    background-color: rgb(0, 122, 179);
    color: #E8E8E8;
    border: none;
    border-radius: 3px;
    padding: 8px 12px;
    cursor: pointer;
    transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 500ms;
  }

  button:hover {
    transform: translateY(-3px);
    box-shadow: 0px 2px 5px #333;
  }

  button:active {
    transform: translateY(0px);
  }
</style>