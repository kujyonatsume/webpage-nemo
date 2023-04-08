import { createRouter, createWebHistory } from "vue-router";
import intro from "../views/intro.vue";
import message from "../views/message.vue";
import action from "../views/action.vue";
import about from "../views/about.vue";
import Nemo from "../views/Nemo.vue";
export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/nemo",
      name: "nemo",
      component: Nemo,
      children: [
        { path: "/nemo/intro", name: "intro", component: intro },
        { path: "/nemo/message", name: "message", component: message },
        { path: "/nemo/action", name: "action", component: action },
        { path: "/nemo/about", name: "about", component: about },
        { path: "/nemo/:x", redirect: "/nemo" }
      ]
    }
  ]
})