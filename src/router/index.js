import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    route("intro"),
    route("message"),
    route("action"),
    route("about")
  ]
})

function route(name = "home") {
  return {
    name,
    path: '/' + name,
    component: import(`../views/${name}.vue`)
  }
}