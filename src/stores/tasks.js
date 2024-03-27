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
    markAsDone(task) {
      this.taskList = this.taskList.filter((t) => t !== task);
      console.log(this);
    },
    findTaskById(id) {
      return this.taskList.find((el) => el.id === id);
    },
  },
});
