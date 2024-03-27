import { defineStore } from "pinia";

export const useTasksStore = defineStore("tasks", {
  state: () => {
    return {
      taskList: [
        { id: 1, task: "do this" },
        { id: 2, task: "do this" },
      ],
    };
  },

  actions: {
    markAsDone() {
      this.taskList = tasks.taskList.filter((t) => t !== task);
    },
  },
});
