<template>
<div>
  <v-row>
    <v-col class="col-5">

    </v-col>
    <v-col class="col-lg-6 background-gradient py-15 px-10 rounded-xl" style="font-size: 2.5vh; margin-top: 10vh; margin-left: 0vw">
      <v-row class="pb-10"><v-icon  class="mr-3">mdi-map-marker</v-icon>地址:<span style="opacity: 0">:::</span> <a href="https://j.map.baidu.com/4a/jBY" target="_blank" style="color: black">甘肃省兰州市城关区南河北路956号高科·高新大厦B座10楼</a> </v-row>
      <v-row class="pb-3" ><v-icon  class="mr-3">mdi-phone</v-icon>电话:<span style="opacity: 0">:::</span>0931-8428395</v-row>
      <v-row class="pb-10"><span style="opacity: 0">电话:::::::::::</span>13893191313 汪律师</v-row>
      <v-row  class="pb-10"><v-icon  class="mr-3">mdi-email</v-icon>邮箱:<span style="opacity: 0">:::</span>3177837018@qq.com</v-row>
      <v-row ><v-icon class="mr-10">mdi-wechat</v-icon><v-img max-width="15vh" max-height="15vh" :src="require('@/assets/qrcode.jpg')"

             contain

             class="mr-4 ml-10"></v-img>
           <span style="font-size: 15px; margin-top: 12vh">扫一扫，关注我们！</span></v-row>


    </v-col>
  </v-row>
</div>
</template>
<script>

export default{
  name: 'ContactUs',
  props:{
    allowAnimation:{
      type: Boolean,
      default: true
    }
  },

  data(){
    return{
      yuzeLocationURL: 'https://j.map.baidu.com/4a/jBY'
    }
  }
}
</script>

<style>
.background-gradient{
  background-color: rgba(211,211,211, 0.5);
}
</style>
