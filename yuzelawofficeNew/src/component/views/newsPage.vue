<template>

  <div style=" margin: auto;">
    <v-parallax dark :src="require('@/assets/white_background_6.png')" jumbotron style="height: 115vh; width: 100vw;">
    <News style="padding-bottom:15vh;">
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
