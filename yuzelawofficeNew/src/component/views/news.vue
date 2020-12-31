<template>

<div style="width: 80%; margin: auto" class="mb-5" >
 <v-slide-group
   v-model="model"
   class="pa-4"
   show-arrows
   cycle
   center-active
 >
   <v-slide-item
   v-for="(item, i) in carouselItems"
     :key="i"
     v-slot="{ active, toggle }"
   >
     <v-card
       class="ma-6"
       :height="active ? '300' : '200'"
       :width="active ? '300' : '200'"
       @click="toggle"
     >
     <v-img :src="item.src" :height="active ? '300' : '200'"
      :width="active ? '300' : '200'">

     </v-img>
       <v-row
         class="fill-height"
         align="center"
         justify="center"
       >
         <v-scale-transition>

         </v-scale-transition>
       </v-row>
     </v-card>
   </v-slide-item>
 </v-slide-group>

 <v-expand-transition>
   <v-sheet
     v-if="model != null"
     height="200"
     tile
     class="mt-3"
     color="rgba(255,255,255, 0.4)"
   >
     <v-row
       class="fill-height"
       align="center"
       justify="center"
     >
     <div>
         甘肃玉泽律师事务所成立于2017年7月15日，是以城乡规划、国土及城市管理政策研究、房地产项目疑难事务处理、房地产开发与物业销售、商铺租赁、工程建设、施工管理、后期物业管理服务及相关领域法律服务为主的律师事务所。作为以专业律师事务所为发展方向和业务要求的律所，凭借不断积累的业务经验，秉承诚信为本、专业至上、勤勉尽责、以客户为中心的服务理念，本所已为房地产行业的几十家政府、企业提供了常年或专项法律服务
     </div>
     </v-row>
   </v-sheet>
 </v-expand-transition>
</div>
</template>

<script>
export default {
  name: 'News',
  data(){
    return{
      model: 0,
      carouselItems: [
        {
          src: require('@/assets/mp-1_copy.png')
        },
        {
          src: require('@/assets/phone-01.png')
        },
        {
          src: require('@/assets/phone-02.png')
        },
        {
          src: require('@/assets/phone-03.png')
        },
        {
          src: require('@/assets/phone-04.png')
        },
        {
          src: require('@/assets/mp-1_copy.png')
        }
      ]
    }
  },
  mounted: function () {
        this.$nextTick(function () {
            window.setInterval(() => {
              if (this.model == null){
                this.model = null
              }
            else if (this.model == this.carouselItems.length - 1) {
                 this.model = 0
               }
            else{this.model = this.model + 1}
          },8000);
        })
    }
}
</script>
