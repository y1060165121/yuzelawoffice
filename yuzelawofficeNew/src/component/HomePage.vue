<template>

  <div style="background-color: transparent">

    <v-carousel :v-model="model" cycle hide-delimiter-background show-arrows-on-hover height="100vh">
      <v-carousel-item v-for="(item, i) in carouselItems"
                       :key="i"
                       :src="item.src" >
      </v-carousel-item>
    </v-carousel>
    <v-divider dark />

    <section>
      <!-- <v-parallax dark
                  :src="require('@/assets/lanzhou_1_blur_light.jpg')"
                  style="height: 100%; "
                  class="pa-0"
                  gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)">
        <Professionals></Professionals>
        <v-divider dark />
        <div style="background-color: #1C2634;height: 550px" align="center" justify="center" class="pa-10">
          <AboutUs></AboutUs>
        </div>
      </v-parallax> -->
      <v-parallax dark
                  :src="require('@/assets/lanzhou_1_blur_light.jpg')"
                  style="height: 100%; "
                  class="pa-0">

        <v-divider dark />
        <News></News>
      </v-parallax>
    </section>
    <!-- <section>
      <div style="background-color: #1C2634; " class="fill-height repeating-gradient">
        <achievements></achievements>
      </div>
    </section> -->
    <section>
      <v-parallax dark :src="require('@/assets/mountain_1_blur_light.jpg')" jumbotron style="height: 100%; text-align: center">
        <Fields style="width: 70%; margin: auto"></Fields>
        <v-divider dark />
      </v-parallax>
    </section>

    <!-- <v-card>
            <v-card-text style="height: 100px;">
              <v-fab-transition>
                <v-btn v-show="!hidden"
                       color="pink"
                       dark
                       fixed
                       bottom
                       right
                       fab>
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-fab-transition>
            </v-card-text>
          </v-card> -->

  </div>

</template>

<script>

  // import AboutUs from '@/component/views/aboutus.vue'
  // import Professionals from '@/component/views/professionals.vue'
  import Fields from '@/component/views/fields.vue'
  import News from '@/component/views/news.vue'
  // import Achievements from '@/component/views/achievements.vue'

  export default {
    name: 'HomePage',
    components: {
      // AboutUs,
      // Professionals,
      Fields,
      News,
      // Achievements
    },
    data() {
      return {
        model: 0,
        carouselItems: [
          {
            src: require('@/assets/homepage_1.jpg')
          },
          {
            src: require('@/assets/homepage_2.jpg')
          },

        ],
        direction: 'top',
        fab: false,
        fling: false,
        hover: false,
        tabs: null,
        top: false,
        right: true,
        bottom: true,
        left: false,
        transition: 'slide-y-reverse-transition'
      }
    }
  }

</script>

<style>

  .v-parallax__content {
    padding-right: 0px !important;
    padding-left: 0px !important;
  }

  .repeating-gradient {
    background-image: repeating-linear-gradient(-45deg,
                        #1C2634,
                        #1C2634 20px,
                        #263242 20px,
                        #263242 40px
                      );
  }
</style>
