<template>

  <div>
    <v-card class="mr-4"
             v-animateOnScroll="{animation: 'fadeInRight', delay: 200}">
      <v-img :src="photoURL"
              height="60vh"></v-img>

      <v-card-title class="font-weight-black">
        {{name}}
      </v-card-title>

      <v-card-subtitle>
        {{introduce}}
      </v-card-subtitle>

      <v-card-actions>
        <v-btn text @click="show = !show" style="color: #C0AA7A">
          了解更多
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon
               @click="show = !show">
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            {{fullIntro}}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>

</template>

<script>
import { animateOnScroll } from "mdbvue";
export default{
  name: 'BusinessCard',
  props: {
    photo: {
      type: String,
      default: require('@/assets/Rick.png')
    },
    name:{
      type: String,
      default: '汪永海'
    },
    introduce:{
      type: String,
      default: '律师事务所主任'
    },
    fullIntro:{
      type: String,
      default: '甘肃玉泽律师事务所主任，业务专长：城乡规划、国土及城市管理政策研究、房地产项目开发与经营、工程建设及相关领域法律服务。曾在政府部门法制及执法部门工作十余年，受甘肃省建设厅委托起草《甘肃省村镇规划建设管理条例》（草案）；起草《兰州市城乡规划条例》（草案）；《兰州市城市地下空间开发建设管理办法》（草案）；曾参与兰州市人大常委会及市政府法制办组织的兰州市城建、国土、房产等领域地方性配套法规、规章立法论证会百余次。先后担任过十余家房地产企业常年或专项法律顾问。在提供法律服务期间，协助多家公司进行重大项目商务谈判、处理诸多房地产项目疑难问题法律事务、审查相关业务合同文本、受托代理诉讼案件，最大限度地维护了客户的合法权益。'
    }
  },
  data(){
    return {
      photoURL: this.photo,
      show: false

    }
  },
  directives: {
    animateOnScroll
  }

}
</script>
