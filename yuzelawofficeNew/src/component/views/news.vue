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
       :height="active ? '30vh' : '25vh'"
       :width="active ? '30vh' : '25vh'"
       @click="toggle"
     >
     <v-img :src="item.src" :height="active ? '30vh' : '25vh'"
      :width="active ? '30vh' : '25vh'">

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
     height="30vh"
     tile
     class="mt-3 rounded-xl"

     style="border-style: inset;border-width: 2px; border-color:rgba(88, 82, 48, 0.07);background-color:rgba(88, 82, 48, 0.07)"

   >
     <v-row
       class="fill-height"
       align="left"
       justify="left"

     >

       <div style="font-size:2.3vh;margin-left:7%;margin-right:90%;padding-top:4vh;color:grey">
           {{newsDetail[model].time}}
       </div>

       <div style="font-size:2.7vh;margin-left:7%;margin-right:30%; color:#292929;" >
           {{newsDetail[model].title}}
       </div>
       <div style="font-size:2.3vh;text-align:left;padding-top:3vh;margin-bottom:2vh;margin-right:10%;margin-left:7%;color:#292929;border-top: 1px solid grey;">
            {{newsDetail[model].detail}}
         <a :href="newsDetail[model].link">了解更多>></a>
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

      ],
      newsDetail: [
        {
          time: '2020/11/28',
          title:  '汪永海主任对艾黎投资集团相关员工进行房地产开发全流程培训',
          detail: '2020年11月27日，甘肃玉泽律师事务所汪永海主任前往甘肃艾黎投资集团有限公司，针对房地产项目整体开发流程对相关员工进行了培训。',
          link: 'https://mp.weixin.qq.com/s/YEHLMueaClWJXgYuMfGs_g'
        },
        {
          time: '2020/10/9',
          title:  '汪永海主任参加安宁城发集团项目竣工验收前自检自验现场会',
          detail: '2020年10月7日，甘肃玉泽律师事务所汪永海主任一行接受邀请，前往安宁区安宁堡街道棚户区改造安置项目施工工地，参加安宁城市发展集团有限公司组织的项目竣工验收前的自检自验现场会。',
          link: 'https://mp.weixin.qq.com/s/rs5NZN2RLyw4ytTl4JaGhg'
        },
        {
          time: '2020/9/28',
          title:  '玉泽搬新家啦！',
          detail: '2020年9月11日，甘肃玉泽律师事务所正式由之前西关什字静安小区内，搬迁至位于雁滩高科·高新大厦B座10楼。',
          link: 'https://mp.weixin.qq.com/s/CxCY8mohYrxj59ITLeqnXg'
        },
        {
          time: '2020/10/9',
          title:  '玉泽所主任汪永海应邀赴安宁城市发展集团进行法律讲座',
          detail: '2020年9月25日，甘肃玉泽律师事务所主任汪永海应邀来到兰州市安宁城市发展集团有限公司，对公司的业务骨干进行了一场精彩的法律讲座。',
          link: 'https://mp.weixin.qq.com/s/hHnsA-BpEYNK_l7F_7rz5w'
        },
        {
          time: '2020/1/13',
          title:  '玉泽所参与七里河区八里镇“法律服务进宗教活动场所”宣讲活动',
          detail: '2019年12月31日上午，甘肃玉泽律师事务所汪永海主任来到八里镇五里埔村土主庙，进行了两场关于宪法基础知识和宗教实务管理知识的宣传讲座。',
          link: 'https://mp.weixin.qq.com/s/49XYXWYk3dsnEpMehK63Qw'
        },

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
