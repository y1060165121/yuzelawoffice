<template>

  <v-card class="overflow-hidden rounded-0" flat>

    <v-app-bar fixed shrink-on-scroll
               color="rgba(46, 49, 49, 0.6)"
               elevate-on-scroll
               dark
               prominent
               scroll-threshold="40" style="max-height:13vh">

      <!-- <a title='Home' class="mr-4" style="height: 100%; width:120px"> -->
      <v-img :src="require('@/assets/yuzelogo_2.jpg')"
             :max-height="5 + marginBottom*0.5 + 'vh'"
             :max-width="5 + marginBottom*0.5 + 'vh'"
             contain
             min-height="47px"
             min-width="47px"

             class="mr-4 ml-10"
             ></v-img>
      <!-- </a> -->

      <v-toolbar-title :style="{'fontSize': '16px', 'marginBottom': marginBottom + 'px'}" >
        <!-- <a href="https://edge.ivideo.sina.com.cn/35505435402.mp4?KID=sina,viask&Expires=1609344000&ssig=cJUnC88psu&reqid=&r=video.sina.com.cn%2Fview%2F355054354.html">here</a> -->
        <router-link to='/' class='white--text mr-10 ml-10' style="text-decoration: none">首页</router-link>
        <router-link to='/about' class='white--text  mr-10' style="text-decoration: none">关于我们</router-link>

        <router-link to='/fields' class='white--text  mr-10' style="text-decoration: none">专业领域</router-link>

        <router-link to='/news' class='white--text  mr-10' style="text-decoration: none">新闻资讯</router-link>

        <router-link to='/professionals' class='white--text  mr-10' style="text-decoration: none">专业人员</router-link>

        <router-link to='/' class='white--text  mr-10' style="text-decoration: none">联系我们</router-link>

      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- <v-btn icon>
        <v-img :src="require('@/assets/wechat_new.jpg')"
               width="20px"
               align="center"
               justify="center"
               contain
               class="mr-2 ml-2"></v-img>
      </v-btn>

      <v-btn icon>
        <v-img :src="require('@/assets/weibo_latest.png')"
               width="20px"
               align="center"
               justify="center"
               contain
               class="mr-2 ml-2"></v-img>
      </v-btn>-->

      <v-btn icon >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

    </v-app-bar>
    <v-sheet id="scrolling-techniques-7">
      <v-container  >
        <BottomButton></BottomButton>

        <router-view></router-view>

      </v-container>
    </v-sheet>
  </v-card>

</template>

<script>

  import BottomButton from '@/component/views/bottomButton.vue'
  export default {
    name: 'YuzeNav',
    components: {
      BottomButton
    },
    data(){
      return{
        marginBottom: 40
      }
    },
    mounted() {
      console.log(window.innerHeight)
    },
    created(){
      window.addEventListener('scroll', this.onScroll);
    },
    methods: {
      onScroll() {
          if (window.scrollY <= 40){
            this.marginBottom = (40 - window.scrollY)
          }
          else if (window.scrollY > 40){
            this.marginBottom = 0
          }
      }
    }
  }

</script>
