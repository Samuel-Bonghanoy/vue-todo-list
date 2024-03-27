import { defineStore } from "pinia";

export const useTasksStore = defineStore("tasks", {
  state: () => {
    return {
      taskList: [
        { id: 1, task: "do this" },
        { id: 2, task: "do that" },
      ],
    };
  },

  actions: {
    markAsDone(task) {
      this.taskList = this.taskList.filter((t) => t !== task);
    },
    findTaskById(id) {
      const task = this.taskList.find((el) => el.id === parseInt(id));
      console.log(id, typeof id);
      console.log(task);
      return task;
    },
  },
});
