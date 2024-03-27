<script setup>
import { reactive } from "vue";
import Task from "./Task.vue";

const tasks = reactive({
  taskList: [
    { id: 1, task: "do this" },
    { id: 2, task: "do this" },
  ],
});

const markTaskDone = (task) => {
  tasks.taskList = tasks.taskList.filter((t) => t !== task);
};
</script>

<template>
  <ul>
    <li v-for="task in tasks.taskList" :key="task">
      <Task :task="task" :finishTask="markTaskDone" />
    </li>
  </ul>
</template>
