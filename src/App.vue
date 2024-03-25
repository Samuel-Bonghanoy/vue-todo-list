<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div className="w-screen h-screen bg-midnight">
    <div className="bg-midnight w-6/12 flex flex-col font-sans mx-auto pt-10 ">
      <h1 className="text-3xl font-black pb-3 text-slate-100">📃 TO-DO LIST</h1>
      <router-view />
    </div>
  </div>
</template>
