<template>

  <v-container  class="my-5">
    <v-row>
      <v-col cols="6" v-animateOnScroll="allowAnimation ? 'fadeInLeft' : false" >
        <v-card  dark
                height="300"
                >
                城乡规划、国土及城市管理政策研究
        </v-card>
      </v-col>
      <v-col cols="6" v-animateOnScroll="allowAnimation ? 'fadeInRight' : false" >
        <v-card class="" dark
                height="300"
                >
                房地产项目疑难事务处理
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" v-animateOnScroll="allowAnimation ? 'fadeInLeft' : false" >
        <v-card class="" dark
                height="300"
                >
                房地产开发与物业管理
        </v-card>
      </v-col>
      <v-col cols="6" v-animateOnScroll="allowAnimation ? 'fadeInRight' : false" >
        <v-card class="" dark
                height="300"
                >
                商铺租赁、工程建设、施工管理服务及相关领域法律服务
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import { animateOnScroll } from "mdbvue";

  export default {
    name: 'Fields',
    components: {},
    directives:{
      animateOnScroll
    },
    props:{
      allowAnimation:{
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        fields: [
          {
            name: '城乡规划'
          },
          {
            name: '国土及城市管理政策研究'
          },
          {
            name: '房地产项目疑难事务处理'
          },
          {
            name: '房地产开发与物业销售'
          },
          {
            name: '商铺租赁'
          },
          {
            name: '工程建设'
          },
          {
            name: '施工管理'
          },
          {
            name: '后期物业管理服务'
          }
        ]
      }
    }
  }

</script>
