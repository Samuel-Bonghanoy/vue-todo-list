import { createRouter, createWebHistory } from "vue-router";

import TaskList from "../components/TaskList.vue";
import ListItem from "../components/ListItem.vue";

const TaskListView = {
  path: "/",
  name: "TaskList",
  component: TaskList,
};

const TaskItemView = {
  path: "/task/:id",
  name: "TaskItem",
  component: ListItem,
};

const routes = [TaskListView, TaskItemView];

const router = createRouter({
  mode: "hash",
  history: createWebHistory(),
  routes,
});

export default router;
