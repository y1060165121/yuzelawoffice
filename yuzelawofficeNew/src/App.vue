<template>
  <v-app >

    <v-main style="min-height: 100vh; position: relative"  >
      <YuzeNav app style="padding-bottom: 110px"></YuzeNav>


      <YuzeFooter app style="position: absolute; bottom: 0; width: 100%; height: 110px"></YuzeFooter>

    </v-main>
  </v-app>
</template>

<script>

import YuzeNav from "@/component/common/YuzeNav.vue"
import YuzeFooter from "@/component/common/YuzeFooter.vue"
import { animateOnScroll } from "mdbvue";

export default {
  name: 'app',
  data () {
    return {

    }
  },
  components:{
    YuzeNav,
    YuzeFooter,
  },
  methods: {
    onScroll(e) {
      console.log('here')
      console.log(e.target.scrollTop)
    }
  },
  directives:{
    animateOnScroll
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900");
@import url("https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css");

.v-application {
}
.container{
  max-width: 100% !important;
  padding: 0px !important
}
</style>
