<template>

  <div style=" margin:auto" >
    <Professionals :style="{'background-image' : 'url(' + require('@/assets/blue_background_2.jpg') + ')', 'background-position': 'center', 'height': '100%','padding-top': '27vh','padding-bottom': '10vh'}"></Professionals>

  </div>

</template>

<script>

  import Professionals from '@/component/views/professionals.vue'
  export default {
    name: 'professionalsPage',
    components: {
      Professionals
    }
  }

</script>

<style>

</style>
