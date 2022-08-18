

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "dashboard",
        component:  () => import("../pages/dashboard/MainDashboard.vue"),
      },
      {
        path: "tasks",
        component:  () => import("../pages/task/MainTaskManagement.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
