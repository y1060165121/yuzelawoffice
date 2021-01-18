<template>

  <v-container>
    <v-row>
      <v-col v-animateOnScroll="allowAnimation ? 'fadeInLeft' : false" class="col-lg-6 col-md-6 col-sm-6 removeBottomPadding" cols="12">
        <vue-flip :active-hover="true" width="100%" :height="vFlitpHeight" transition="1.5s" >
          <template v-slot:front class="front">
            <v-card style="background-color:rgb(242, 236, 227,0.5);border-style: outset; border-width: 2px; border-color:rgba(210, 201, 156, 0.61)"
                    :height="vFlitpHeight"
                    width="100%"
                    class="rounded-xl"
                    >
                    <v-icon :style="{'padding-top':vFlipPadding,'font-size':vFlipFontSize}">mdi-bookshelf</v-icon>
                    <div :style="{'padding-top':vFlipWordsPadding,'font-size':vFlipWordsFontSize}">城乡规划、国土及城市管理政策研究</div>
            </v-card>
          </template>
          <template v-slot:back class="back">
            <v-card style="background-color:rgb(242, 236, 227,0.5);border-style: outset; border-width: 2px; border-color:rgba(210, 201, 156, 0.61)"
                    :height="vFlitpHeight"
                    width="100%"
                    class="rounded-xl"
                    >
                    <div :style="{'padding-top':vFlipWordsPadding,'font-size':vFlipWordsFontSize}">城乡规划、国土及城市管理政策研究 back</div>
            </v-card>
          </template>
        </vue-flip>

      </v-col>
      <v-col  v-animateOnScroll="allowAnimation ? 'fadeInRight' : false" class="col-lg-6 col-md-6 col-sm-6" cols="12">
        <vue-flip :active-hover="true" width="100%" :height="vFlitpHeight" transition="1s" >
          <template v-slot:front class="front">
            <v-card style="background-color:rgb(242, 236, 227,0.5);border-style: outset; border-width: 2px; border-color:rgba(210, 201, 156, 0.61)"
                    :height="vFlitpHeight"
                    width="100%"
                    class="rounded-xl"
                    >
                    <v-icon :style="{'padding-top':vFlipPadding,'font-size':vFlipFontSize}">mdi-check-network</v-icon>
                    <div :style="{'padding-top':vFlipWordsPadding,'font-size':vFlipWordsFontSize}">房地产项目疑难事务处理</div>
            </v-card>
          </template>

          <template v-slot:back class="back">
            <v-card style="background-color:rgb(242, 236, 227,0.5);border-style: outset; border-width: 2px; border-color:rgba(210, 201, 156, 0.61)"
                    :height="vFlitpHeight"
                    width="100%"
                    class="rounded-xl"
                    >
                    <div :style="{'padding-top':vFlipWordsPadding,'font-size':vFlipWordsFontSize}">房地产项目疑难事务处理 back</div>
            </v-card>
          </template>
        </vue-flip>

      </v-col>
    </v-row>
    <v-row>
      <v-col v-animateOnScroll="allowAnimation ? 'fadeInLeft' : false" class="col-lg-6 col-md-6 col-sm-6  removeBottomPadding" cols="12">
        <vue-flip :active-hover="true" width="100%" :height="vFlitpHeight" transition="1s" >
          <template v-slot:front class="front">
            <v-card style="background-color:rgb(242, 236, 227,0.5);border-style: outset; border-width: 2px; border-color:rgba(210, 201, 156, 0.61)"
                    :height="vFlitpHeight"
                    width="100%"
                    class="rounded-xl"
                    >
                    <v-icon :style="{'padding-top':vFlipPadding,'font-size':vFlipFontSize}">mdi-domain</v-icon>
                    <div :style="{'padding-top':vFlipWordsPadding,'font-size':vFlipWordsFontSize}">房地产开发与物业管理</div>
            </v-card>
          </template>
          <template v-slot:back class="back">
            <v-card style="background-color:rgb(242, 236, 227,0.5);border-style: outset; border-width: 2px; border-color:rgba(210, 201, 156, 0.61)"
                    :height="vFlitpHeight"
                    width="100%"
                    class="rounded-xl"
                    >
                    <div :style="{'padding-top':vFlipWordsPadding,'font-size':vFlipWordsFontSize}">房地产开发与物业管理 back</div>
            </v-card>
          </template>
        </vue-flip>

      </v-col>
      <v-col  v-animateOnScroll="allowAnimation ? 'fadeInRight' : false" class="col-lg-6 col-md-6 col-sm-6" cols="12" >
        <vue-flip :active-hover="true" width="100%" :height="vFlitpHeight" transition="1s" >
          <template v-slot:front class="front">
            <v-card style="background-color:rgb(242, 236, 227,0.5);border-style: outset; border-width: 2px; border-color:rgba(210, 201, 156, 0.61)"
                    :height="vFlitpHeight"
                    width="100%"
                    class="rounded-xl"
                    >
                    <v-icon :style="{'padding-top':vFlipPadding,'font-size':vFlipFontSize}">mdi-boom-gate</v-icon>
                    <div :style="{'padding-top':vFlipWordsPadding,'font-size':vFlipWordsFontSize}">商铺租赁、工程建设、施工管理服务</div>
        </v-card>
          </template>
          <template v-slot:back class="back">
            <v-card style="background-color:rgb(242, 236, 227,0.5);border-style: outset; border-width: 2px; border-color:rgba(210, 201, 156, 0.61)"
                    :height="vFlitpHeight"
                    width="100%"
                    class="rounded-xl"
                    >
                    <div :style="{'padding-top':vFlipWordsPadding,'font-size':vFlipWordsFontSize}">商铺租赁、工程建设、施工管理服务 back</div>
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
    computed: {
      vFlitpHeight: function() {
        console.log(this.$vuetify.breakpoint.name)
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return '18vh'
          case 'sm': return '32vh'
          case 'md': return '32vh'
          case 'lg': return '32vh'
          case 'xl': return '32vh'
        }
        return 100
      },
      vFlipPadding: function() {
        console.log(this.$vuetify.breakpoint.name)
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return '2vh'
          case 'sm': return '5vh'
          case 'md': return '5vh'
          case 'lg': return '5vh'
          case 'xl': return '5vh'
        }
        return 100
      },
      vFlipFontSize: function() {
        console.log(this.$vuetify.breakpoint.name)
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return '7vh'
          case 'sm': return '10vh'
          case 'md': return '10vh'
          case 'lg': return '10vh'
          case 'xl': return '10vh'
        }
        return 100
      },
      vFlipWordsPadding: function() {
        console.log(this.$vuetify.breakpoint.name)
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return '2vh'
          case 'sm': return '5vh'
          case 'md': return '5vh'
          case 'lg': return '5vh'
          case 'xl': return '5vh'
        }
        return 100
      },
      vFlipWordsFontSize: function() {
        console.log(this.$vuetify.breakpoint.name)
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return '2vh'
          case 'sm': return '2.5vh'
          case 'md': return '2.5vh'
          case 'lg': return '2.5vh'
          case 'xl': return '2.5vh'
        }
        return 100
      },
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
.front {
  width: 100%
}
.back{
  width: 100%
}

.removeBottomPadding{
  padding-bottom: 0px !important
}
</style>
