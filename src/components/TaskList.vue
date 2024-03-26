<script setup>
import { reactive } from "vue";
import Task from "./Task.vue";

const tasks = reactive({ taskList: ["do this", "do that"] });

console.log(tasks);

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
