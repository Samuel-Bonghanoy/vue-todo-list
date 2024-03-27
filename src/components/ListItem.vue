<script setup>
import router from "../router";
import { useRoute } from "vue-router";
import { useTasksStore } from "../stores/tasks";

const route = useRoute();

const tasks = useTasksStore();

const task = tasks.findTaskById(route.params.id);

const directToHome = () => router.push(`/`);
</script>

<template>
  <div
    className="flex flex-col text-slate-800 bg-slate-300 my-2 px-3 py-3 w-full rounded-md"
  >
    <p className="ml-2 font-semibold text-[1.1rem]">{{ task.task }}</p>
    <p className="ml-2 text-[0.75rem] text-green-800 font-thin">due Monday</p>
  </div>
  <button
    @click="directToHome()"
    className="bg-red-300  hover:bg-red-500 hover:scale-[1.01] hover:shadow-slate-400 transition-all rounded-md"
  >
    Back
  </button>
  <!-- <button
    v-on:click="finishTask(task)"
    type="checkbox"
    className="h-9 rounded-full border-1 border-green-900 focus:ring-1 focus:ring-gray-600"
  >
    <check-circle-icon class="w-8" />
  </button> -->
</template>
