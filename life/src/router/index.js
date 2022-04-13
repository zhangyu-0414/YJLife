import Vue from "vue";
import VueRouter from "vue-router";
import mainBody from "../components/mainBody.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "mainBody",
    component: mainBody,
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
