<template>

  <div class="mt-10" align="center" justify="center" style="padding-top: 125px">
      <v-tabs v-model="tab"
              class="mb-6" >
              <v-spacer/>
        <v-tab v-for="item in items"
               :key="item" style="font-size: 20px; color:black">
          {{ item }}
        </v-tab>
        <v-spacer/>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-card color="basil" flat>
            <AboutUs :allowAnimation="false"></AboutUs>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card color="basil" flat width="70%">
            <TimeLine></TimeLine>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
      <v-row style="font-size: 20px;text-align:center; padding-top: 6vh">
        <v-col>
          <v-tabs 
                  class="mb-6" >
                  <v-spacer/>
            <v-tab
                   style="font-size: 20px; color:black">
              典型客户
            </v-tab>
            <v-spacer/>
          </v-tabs>
        </v-col>
      </v-row>
      <v-row style="padding-bottom: 5vh">
        <v-col/>
        <v-col class="col-lg-8 col-sm-10">
          <Achievements></Achievements>
      </v-col>
      <v-col/>

      </v-row>

  </div>

</template>

<script>
import AboutUs from '@/component/views/aboutus.vue'
import TimeLine from '@/component/views/timeline.vue'
import Achievements from '@/component/views/achievements.vue'

  export default {
    name: 'AboutUsPage',
    components:{
      AboutUs,
      TimeLine,
      Achievements
    },
    data() {
      return {
        tab: null,
        items: ['律所简介', '律所经历'],
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    }
  }

</script>

<style>
.v-tabs-slider{
  background-color: black !important
}
</style>
