<template>

  <v-container>
    <v-row>
      <v-col cols="6" v-animateOnScroll="allowAnimation ? 'fadeInLeft' : false" class="left-item">
        <vue-flip :active-hover="true" width="30vw" height="32vh" transition="1.5s" >
          <template v-slot:front class="front">
            <v-card style="background-color:rgb(242, 236, 227,0.5);border-style: outset; border-width: 2px; border-color:rgba(210, 201, 156, 0.61)"
                    height="32vh"
                    width="30vw"
                    class="rounded-xl"
                    >
                    <v-icon style="padding-top:5vh;font-size:10vh">mdi-bookshelf</v-icon>
                    <div style="font-size:2.5vh;padding-top:4vh">城乡规划、国土及城市管理政策研究</div>
            </v-card>
          </template>
          <template v-slot:back class="back">
            <v-card style="background-color:rgb(242, 236, 227,0.5);border-style: outset; border-width: 2px; border-color:rgba(210, 201, 156, 0.61)"
                    height="32vh"
                    width="30vw"
                    class="rounded-xl"
                    >
                    <div style="font-size:2.5vh;padding-top:5vh">城乡规划、国土及城市管理政策研究 back</div>
            </v-card>
          </template>
        </vue-flip>

      </v-col>
      <v-col cols="6" v-animateOnScroll="allowAnimation ? 'fadeInRight' : false" class="right-item">
        <vue-flip :active-hover="true" width="30vw" height="32vh" transition="1s" >
          <template v-slot:front class="front">
            <v-card style="background-color:rgb(242, 236, 227,0.5);border-style: outset; border-width: 2px; border-color:rgba(210, 201, 156, 0.61)"
                    height="32vh"
                    width="30vw"
                    class="rounded-xl"
                    >
                    <v-icon style="padding-top:5vh;font-size:10vh">mdi-check-network</v-icon>
                    <div style="font-size:2.5vh;padding-top:4vh">房地产项目疑难事务处理</div>
            </v-card>
          </template>

          <template v-slot:back class="back">
            <v-card style="background-color:rgb(242, 236, 227,0.5);border-style: outset; border-width: 2px; border-color:rgba(210, 201, 156, 0.61)"
                    height="32vh"
                    width="30vw"
                    class="rounded-xl"
                    >
                    <div style="font-size:2.5vh;padding-top:5vh">房地产项目疑难事务处理 back</div>
            </v-card>
          </template>
        </vue-flip>

      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" v-animateOnScroll="allowAnimation ? 'fadeInLeft' : false" class="left-item" >
        <vue-flip :active-hover="true" width="30vw" height="32vh" transition="1s" >
          <template v-slot:front class="front">
            <v-card style="background-color:rgb(242, 236, 227,0.5);border-style: outset; border-width: 2px; border-color:rgba(210, 201, 156, 0.61)"
                    height="32vh"
                    width="30vw"
                    class="rounded-xl"
                    >
                    <v-icon style="padding-top:5vh;font-size:10vh">mdi-domain</v-icon>
                    <div style="font-size:2.5vh;padding-top:4vh">房地产开发与物业管理</div>
            </v-card>
          </template>
          <template v-slot:back class="back">
            <v-card style="background-color:rgb(242, 236, 227,0.5);border-style: outset; border-width: 2px; border-color:rgba(210, 201, 156, 0.61)"
                    height="32vh"
                    width="30vw"
                    class="rounded-xl"
                    >
                    <div style="font-size:2.5vh;padding-top:5vh">房地产开发与物业管理 back</div>
            </v-card>
          </template>
        </vue-flip>

      </v-col>
      <v-col cols="6" v-animateOnScroll="allowAnimation ? 'fadeInRight' : false" class="right-item" >
        <vue-flip :active-hover="true" width="30vw" height="32vh" transition="1s" >
          <template v-slot:front class="front">
            <v-card style="background-color:rgb(242, 236, 227,0.5);border-style: outset; border-width: 2px; border-color:rgba(210, 201, 156, 0.61)"
                    height="32vh"
                    width="30vw"
                    class="rounded-xl"
                    >
                    <v-icon style="padding-top:5vh;font-size:10vh">mdi-boom-gate</v-icon>
                    <div style="font-size:2.5vh;padding-top:4vh">商铺租赁、工程建设、施工管理服务</div>
        </v-card>
          </template>
          <template v-slot:back class="back">
            <v-card style="background-color:rgb(242, 236, 227,0.5);border-style: outset; border-width: 2px; border-color:rgba(210, 201, 156, 0.61)"
                    height="32vh"
                    width="30vw"
                    class="rounded-xl"
                    >
                    <div style="font-size:2.5vh;padding-top:5vh">商铺租赁、工程建设、施工管理服务 back</div>
            </v-card>
          </template>
        </vue-flip>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import { animateOnScroll } from "mdbvue";
import VueFlip from 'vue-flip';

  export default {
    name: 'Fields',
    components: {
      'vue-flip': VueFlip
    },
    directives:{
      animateOnScroll
    },
    props:{
      allowAnimation:{
        type: Boolean,
        default: false
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
<style>
.left-item {
  padding-left:5% !important
}
.right-item {
  padding-right:5% !important
}

</style>
