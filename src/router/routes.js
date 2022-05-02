const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "todos", component: () => import("src/pages/PageTodos.vue") },
      { path: "counter", component: () => import("src/pages/PageCounter.vue") },
      { path: "2wb", component: () => import("src/pages/PageTwoWayBinding.vue") },
      { path: "quasar-store", component: () => import("src/pages/PageDefaultQuasarStores.vue") },
      { path: "use-refs", component: () => import("pages/PageUseRefs.vue") },
      { path: "wrapper", component: () => import("src/pages/PageWrapper.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
