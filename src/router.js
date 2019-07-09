import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Work from "@/components/Work.vue";
import Contact from "@/components/Contact.vue";

Vue.use(Router);

export default new Router({
  //mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/work",
      name: "work",
      component: Work
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    }
  ]
});
