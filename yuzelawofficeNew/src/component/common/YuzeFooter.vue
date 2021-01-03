<template>

  <v-footer class="footer-gradient" padless>
    <v-row justify="center" no-gutters style="font-size: 14px">

      <v-col class=" text-center white--text mb-1"
             height="55px"
             cols="12"
             style="border-bottom: 1px solid lightgrey; padding-bottom: 10px; ">
        <span class="mr-3">Copyright © 2017-{{ new Date().getFullYear() }}</span> <strong>甘肃玉泽律师事务所 版权所有</strong>
      </v-col>
      <v-col class=" text-center white--text pt-2"
             height="55px"
             cols="12">
        <span style="opacity: 0">:::::::::::</span>
        <router-link to='/about'
                     class='white--text'
                     style="text-decoration: none">免责声明 </router-link>
        <span style="opacity: 0">:::::::::::</span>
        <router-link to='/'
                     class='white--text'
                     style="text-decoration: none">隐私条款 </router-link>
        <span style="opacity: 0">:::::::::::</span> Design By: P&A
      </v-col>
    </v-row>
  </v-footer>

</template>
<script>

  export default {
    name: 'YuzeFooter',
    data: () => ({
      links: ['首页', '关于我们', '专业人员', '新闻资讯', '联系我们']
    })
  }

</script>
<style>

  .footer-gradient {
    background-color: rgba(46, 49, 49, 0.5) !important;
  }

</style>
