import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "one",
      component: () => import("@/views/router1/RouterOne.vue"),
      children: [
        {
          path: "two",
          name: "two",
          component: () => import("@/views/router1/RouterTwo.vue"),
          children: [
            {
              path: "three",
              name: "three",
              component: () => import("@/views/router1/RouterThree.vue"),
              children: [
                {
                  path: "four",
                  name: "four",
                  component: () => import("@/views/router1/RouterFour.vue"),
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});

export default router;
