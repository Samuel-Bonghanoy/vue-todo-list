<script setup>
defineProps({
  task: String,
});
</script>

<template>
  <div
    className="flex flex-col text-slate-800 bg-slate-300 my-2 px-3 py-3 w-full rounded-md"
  >
    <p className="ml-2 font-semibold text-[1.1rem]">{{ task }}</p>
    <p className="ml-2 text-[0.75rem] text-green-800 font-thin">due Monday</p>
  </div>
  <button
    className="bg-red-300  hover:bg-red-500 hover:scale-[1.01] hover:shadow-slate-400 transition-all rounded-md"
  >
    Back
  </button>
</template>
