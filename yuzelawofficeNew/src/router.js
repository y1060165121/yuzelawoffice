import Vue from 'vue'
import Router from 'vue-router'
import HomePage from "@/component/HomePage.vue"
import AboutUsPage from "@/component/views/aboutUsPage.vue"
import Professionals from "@/component/views/professionals.vue"
import FieldsPage from "@/component/views/fieldsPage.vue"
import News from "@/component/views/news.vue"


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'root',
    component: HomePage
  },
  {
    path: "/about",
    name: 'about us',
    component: AboutUsPage
  },
  {
    path: "/professionals",
    name: 'professionals ',
    component: Professionals
  },
  {
    path: "/fields",
    name: 'fields ',
    component: FieldsPage
  },
  {
    path: "/news",
    name: 'news ',
    component: News
  }

  ]
})
