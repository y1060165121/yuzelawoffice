<template>

  <div style="background-color: transparent">

    <v-carousel :v-model="model" cycle hide-delimiter-background show-arrows-on-hover height="100vh">
      <v-carousel-item v-for="(item, i) in carouselItems"
                       :key="i"
                       :src="item.src">
        <div class="carousel_gradient"
             style="font-size: 3vw;  margin-left: 10vw; margin-top: 45vh;display:inline-block"
             align="center"
             justify="center">
          <span>{{item.word}}</span>
        </div>
      </v-carousel-item>
    </v-carousel>
    <v-divider dark />

    <section>

      <div dark
           :style="{'height': '100vh', 'background-image' : 'url(' + require('@/assets/white_background.jpg') + ')'}"
           class="fill-height">
        <v-row style="font-size: 36px;text-align:center;  padding-top: 6vh;">
          <v-col>
            <span style="font-weight: 600; display: block">新闻资讯</span>
            <span style="font-size: 17px; display: block;">
                  <svg height="5" width="100" class="mr-2">
                    <line x1="0" y1="0" x2="100" y2="0.1" style="stroke:black;stroke-width:2" />
                  </svg>
                  <span style="letter-spacing: 3px">News</span>
            <svg height="5" width="100" class="ml-2">
                    <line x1="0" y1="0" x2="100" y2="0.1" style="stroke:black;stroke-width:2" />
                  </svg>
            </span>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
          <News></News>
        </v-col>
        </v-row>

      </div>
    </section>
    <!-- <section>
                    <div style="background-color: #1C2634; " class="fill-height repeating-gradient">
                      <achievements></achievements>
                    </div>
                  </section> -->
    <section>
      <v-parallax dark :src="require('@/assets/lanzhou_1_blur_light.jpg')" jumbotron style="height: 100vh; text-align: center">
        <v-row style="font-size: 36px;text-align:center; padding-top: 6vh;">
          <v-col>
            <span style="font-weight: 600; display: block">专业领域</span>
            <span style="font-size: 17px; display: block;">
                  <svg height="5" width="100" class="mr-2">
                    <line x1="0" y1="0" x2="100" y2="0.1" style="stroke:white;stroke-width:2" />
                  </svg>
                  <span style="letter-spacing: 3px">Practice Areas</span>
            <svg height="5" width="100" class="ml-2">
                    <line x1="0" y1="0" x2="100" y2="0.1" style="stroke:white;stroke-width:2" />
                  </svg>
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
          <Fields style="width: 70%;"></Fields>
        </v-col>
        </v-row>
      </v-parallax>
    </section>

    <section>

      <div dark
           :style="{'min-height': '100vh', 'background-image' : 'url(' + require('@/assets/white_background2.jpg') + ')', 'background-size': 'cover', 'position': 'relative'}"
           class="fill-height">
        <v-row style="font-size: 36px;text-align:center; padding-top: 6vh; padding-bottom: 3vh">
          <v-col>
            <span style="font-weight: 600; display: block">专业人员</span>
            <span style="font-size: 17px; display: block;">
                  <svg height="5" width="100" class="mr-2">
                    <line x1="0" y1="0" x2="100" y2="0.1" style="stroke:black;stroke-width:2" />
                  </svg>
                  <span style="letter-spacing: 3px">Attorneys</span>
            <svg height="5" width="100" class="ml-2">
                    <line x1="0" y1="0" x2="100" y2="0.1" style="stroke:black;stroke-width:2" />
                  </svg>
            </span>
          </v-col>
        </v-row>

        <v-row style="font-size: 36px;">
          <v-col>
          <Professionals></Professionals>
        </v-col>
        </v-row>

      </div>
    </section>

    <section>

      <div dark
           :style="{'min-height': '100vh', 'background-image' : 'url(' + require('@/assets/mp-3.png') + ')', 'background-size': 'cover', 'position': 'relative'}"
           class="fill-height">
        <v-row style="font-size: 36px;text-align:center; padding-top: 6vh; padding-bottom: 3vh">
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
  import Professionals from '@/component/views/professionals.vue'
  import Fields from '@/component/views/fields.vue'
  import News from '@/component/views/news.vue'
  import ContactUs from '@/component/views/contactus.vue'
  // import Achievements from '@/component/views/achievements.vue'

  export default {
    name: 'HomePage',
    components: {
      // AboutUs,
      Professionals,
      Fields,
      News,
      ContactUs
      // Achievements
    },
    data() {
      return {
        model: 0,
        carouselItems: [
          {
            src: require('@/assets/homepage_1.jpg'),
            word: '诚信为本'
          },
          {
            src: require('@/assets/homepage_2.jpg'),
            word: '专业至上'
          },
          {
            src: require('@/assets/homepage_3.jpg'),
            word: '勤勉尽责'
          },
          {
            src: require('@/assets/homepage_4.jpg'),
            word: '以客户为中心'
          }
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
    background-image: linear-gradient(-45deg, #e6f7ff, #e6f7ff 5px, #e6f7ff 5px, #e6f7ff 10px);
  }

  .carousel_gradient {
    background-image: linear-gradient(to right, grey, transparent);
  }

  .news-background {
    background-image: require('@/assets/white_background.jpg');
  }

</style>
