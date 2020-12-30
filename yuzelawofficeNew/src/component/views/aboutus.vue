<template>

  <div >
    <v-row class="pa-3" align="center" justify="center" style="height: 400px" >
      <v-col class="col-lg-3"></v-col>
      <v-col  class="col-lg-3 col-sm-5" v-animateOnScroll="allowAnimation ? 'fadeInLeft' : false">
        <v-img :src="require('@/assets/phone-02_copy.png')"
               contain
               class="mr-4" style="height: 250px"></v-img>
      </v-col>
      <v-col class="col-lg-3 col-sm-5"  v-animateOnScroll="allowAnimation ? 'fadeInRight' : false" >
甘肃玉泽律师事务所成立于2017年7月15日，是以城乡规划、国土及城市管理政策研究、房地产项目疑难事务处理、房地产开发与物业销售、商铺租赁、工程建设、施工管理、后期物业管理服务及相关领域法律服务为主的律师事务所。作为以专业律师事务所为发展方向和业务要求的律所，凭借不断积累的业务经验，秉承诚信为本、专业至上、勤勉尽责、以客户为中心的服务理念，本所已为房地产行业的几十家政府、企业提供了常年或专项法律服务。
      </v-col>
      <v-col class="col-lg-3"></v-col>

    </v-row>

  </div>

</template>

<script>

import { animateOnScroll } from "mdbvue";
  export default {
    name: 'AboutUs',
    components: {

    },
    directives: {
      animateOnScroll
    },
    data(){
      return {
        animation: 'fadeInRight'
      }
    },
    props:{
      allowAnimation:{
        type: Boolean,
        default: true
      }
    }
  }

</script>
