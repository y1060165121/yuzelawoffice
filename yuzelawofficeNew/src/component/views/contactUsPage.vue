<template>
  <div dark
       :style="{'min-height': '100vh', 'background-image' : 'url(' + require('@/assets/mp-3.png') + ')', 'background-size': 'cover', 'position': 'relative', 'padding-top': '90px'}"
       class="fill-height">
    <v-row style="font-size: 36px;text-align:center; padding-top: 6vh; padding-bottom: 3vh" class="ma-0">

    </v-row>

    <v-row style="font-size: 36px;">
      <v-col>
      <ContactUs></ContactUs>
    </v-col>
    </v-row>

  </div>
</template>

<script>

  import ContactUs from '@/component/views/contactus.vue'
  export default {
    name: 'ContactUsPage',
    components: {
      ContactUs
    }
  }

</script>
