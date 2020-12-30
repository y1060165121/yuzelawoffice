import Vue from 'vue'
import App from './App.vue'
import router from '@/router.js'
import vuetify from '@/plugins/vuetify'
import * as mdbvue from 'mdbvue'
require("mdbvue/lib/css/mdb.min.css")
for (const component in mdbvue) {
  Vue.component(component, mdbvue[component])
}

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  mdbvue,
  render: h => h(App),
}).$mount('#app')
