<script setup>
import { CheckCircleIcon } from "@heroicons/vue/24/solid";
import router from "../router";

const directToTaskView = (id) => router.push(`/task/${id}`);

defineProps({
  task: String,
  finishTask: {
    type: Function,
  },
});
</script>

<template>
  <div
    @click="directToTaskView(task.id)"
    class="flex text-slate-800 bg-slate-300 items-center my-2 px-3 py-3 w-full hover:bg-slate-400 hover:scale-[1.03] hover:shadow-slate-400 transition-all rounded-md"
  >
    <button
      v-on:click="finishTask(task)"
      type="checkbox"
      className="h-9 rounded-full border-1 border-green-900 focus:ring-1 focus:ring-gray-600"
    >
      <check-circle-icon class="w-8" />
    </button>

    <div className="flex flex-col">
      <p className="ml-2 font-semibold text-[1.1rem]">{{ task.task }}</p>
      <p className="ml-2 text-[0.75rem] text-green-800 font-thin">due Monday</p>
    </div>
  </div>
</template>
