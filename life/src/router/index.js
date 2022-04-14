import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("../views/Home.vue");
// 关于
const About = () => import("../views/About.vue");
// 主页内容
const Main = () => import("../components/main/index.vue");
// 编辑文章
const Article = () => import("../components/other/article.vue");
//编辑用户信息
const Setuser = () => import("../components/other/setuser.vue");
//文章详情
const Articles = () => import("../components/main/article.vue");
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/main",
    children: [
      {
        path: "/about",
        component: About,
      },
      {
        path: "/main",
        component: Main,
      },
      {
        path: "/article",
        component: Article,
      },
      {
        path: "/setuser",
        component: Setuser,
      },
      {
        name: "Articles",
        path: "/articles",
        component: Articles,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
