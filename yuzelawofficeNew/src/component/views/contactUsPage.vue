<template>
  <div dark
       :style="{'min-height': '100vh', 'background-image' : 'url(' + require('@/assets/mp-3.png') + ')', 'background-size': 'cover', 'position': 'relative', 'margin-top': '100px'}"
       class="fill-height">
    <v-row style="font-size: 36px;text-align:center; padding-top: 6vh; padding-bottom: 3vh" class="ma-0">
      <v-col>
        <span style="font-weight: 600; display: block">联系我们</span>
        <span style="font-size: 17px; display: block;">
              <svg height="5" width="100" class="mr-2">
                <line x1="0" y1="0" x2="100" y2="0.1" style="stroke:black;stroke-width:2" />
              </svg>
              <span style="letter-spacing: 3px">Contact Us</span>
        <svg height="5" width="100" class="ml-2">
                <line x1="0" y1="0" x2="100" y2="0.1" style="stroke:black;stroke-width:2" />
              </svg>
        </span>
      </v-col>
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
