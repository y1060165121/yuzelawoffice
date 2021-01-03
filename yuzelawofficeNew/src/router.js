import Vue from 'vue'
import Router from 'vue-router'
import HomePage from "@/component/HomePage.vue"
import AboutUsPage from "@/component/views/aboutUsPage.vue"
import ProfessionalsPage from "@/component/views/professionalsPage.vue"
import FieldsPage from "@/component/views/fieldsPage.vue"
import NewsPage from "@/component/views/newsPage.vue"
import ContactUs from "@/component/views/contactUsPage.vue"


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
    component: ProfessionalsPage
  },
  {
    path: "/fields",
    name: 'fields ',
    component: FieldsPage
  },
  {
    path: "/news",
    name: 'news ',
    component: NewsPage
  },
  {
    path: "/contactus",
    name: 'contact us ',
    component: ContactUs
  }


  ]
})
