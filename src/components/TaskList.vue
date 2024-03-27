<script setup>
import { reactive } from "vue";
import Task from "./Task.vue";
import { useTasksStore } from "../stores/tasks";

const taskListState = reactive({
  taskList: [
    { id: 1, task: "do this" },
    { id: 2, task: "do this" },
  ],
});

const tasks = useTasksStore();

const markTaskDone = (task) => {
  tasks.markAsDone(task);
};
</script>

<template>
  <ul>
    <li v-for="task in tasks.taskList" :key="task">
      <Task :task="task" :finishTask="markTaskDone" />
    </li>
  </ul>
</template>
