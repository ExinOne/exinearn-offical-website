import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Contact from "@/views/Contact";
import Activities from "@/views/Activities";
import ActivityDetail from "@/views/ActivityDetail";
import About from "@/views/About";
import Error from "@/views/Error";
import DownloadAndroid from "@/views/Download-android";
import DownloadIos from "@/views/Download-ios";
import Privacy from "@/views/Privacy";
import Service from "@/views/Service";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/contact",
    component: Contact
  },
  {
    path: "/activities",
    component: Activities
  },
  {
    path: "/activities/:id",
    component: ActivityDetail,
    props: true
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/download-android",
    component: DownloadAndroid
  },
  {
    path: "/download-ios",
    component: DownloadIos
  },
  {
    path: "/service",
    component: Service
  },
  {
    path: "/privacy",
    component: Privacy
  },
  {
    path: "*",
    component: Error
  }
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "active",
  linkActiveClass: "active",
  routes,
  scrollBehavior() {
    return new Promise(resolve => {
      resolve({ x: 0, y: 0 });
    });
  }
});

export default router;
