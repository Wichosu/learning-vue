<script setup>
const props = defineProps(['tasksList']);

console.log(props.tasksList);

</script>
<template>
  <div class='task-container'>
    <h1>My Tasks</h1>
    <li>Demo Task</li>
    <li v-for='task in props.tasksList'>
      {{ task }}
    </li>
  </div>
</template>

<style scoped>
  .task-container {
    border: 1px solid #666;
    border-radius: 4px;
    margin: 2rem auto;
    width: fit-content;
    max-width: 600px;
    padding: 2rem 4rem;
  }

  h1 {
    margin: 0;
  }

  li {
    margin: 20px 0;
  }
</style>