<template>

  <div style=" margin: auto; ">
    <v-parallax dark :src="require('@/assets/white_background_1.jpg')" jumbotron style="height: 120vh; width: 100vw; ">
    <News style="margin-top: 10vh">
    </News>
    </v-parallax>
  </div>

</template>

<script>

  import News from '@/component/views/news.vue'
  export default {
    name: 'NewsPage',
    components: {
      News
    }
  }

</script>
