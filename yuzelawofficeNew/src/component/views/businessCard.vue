<template>

  <div>
    <v-card class="mr-4"
            >
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

            <br>{{Area}}
            <br>{{PhoneNumber}}
            <br>{{Email}}

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
      default: '律师事务所主任'
    },
    PhoneNumber:{
      type: String,
      default: '联系电话：13893191313'
    },
    Email:{
      type: String,
      default: '邮箱：3177837018@qq.com'
    },
    Area:{
      type: String,
      default: '擅长领域：待补充'
    },
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
