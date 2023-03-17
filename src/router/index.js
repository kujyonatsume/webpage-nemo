import { createRouter, createWebHistory } from "vue-router";
import intro from "../views/intro.vue";
import message from "../views/message.vue";
import action from "../views/action.vue";
import about from "../views/about.vue";
export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: "/intro", name: "intro", component: intro },
    { path: "/message", name: "message", component: message },
    { path: "/action", name: "action", component: action },
    { path: "/about", name: "about", component: about }
  ]
})