<script setup>
import { reactive } from "vue";
import Task from "./Task.vue";

const tasks = reactive(["do this", "do that"]);
</script>

<template>
  <ul>
    <li v-for="task in tasks" :key="task">
      <Task :task="task" />
    </li>
  </ul>
</template>
