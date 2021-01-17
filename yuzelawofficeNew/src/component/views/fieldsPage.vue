<template>
  <div dark
       :style="{'min-height': '100vh', 'background-image' : 'url(' + require('@/assets/mountain_1_blur_light.jpg') + ')', 'background-size': 'cover', 'position': 'relative', 'padding-top': '90px'}"
       class="fill-height">

    <div style="width: 80%; margin: auto; margin-top: 7vh; padding-top: 125px; position: relative;">
      <v-tabs vertical style="background-color: rgba(128,128,128,0.3) !important">
        <div style="margin-top: 180px; font-weight: bold">
          <v-tab>
            <v-icon left>
              mdi-account
            </v-icon>
              专业领域
          </v-tab>
          <v-tab>
            <v-icon left>
              mdi-home
            </v-icon>
            服务范围
          </v-tab>
        </div>

        <v-tab-item >
          <v-card flat>
            <v-card-text>
              <Fields style="width: 100%; margin-bottom: 10%; text-align: center" :showAnimation="showAnimation" ></Fields>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text >
            <ContentTreeView></ContentTreeView>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </div>
  </div>

</template>

<script>

  import Fields from '@/component/views/fields.vue'
  import ContentTreeView from '@/component/views/contentTreeView.vue'
  export default {
    name: 'FieldsPage',
    components: {
      Fields,
      ContentTreeView
    },
    data (){
      return{
        showAnimation: false
      }
    }
  }

</script>

<style>

</style>
