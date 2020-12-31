<template>

  <v-footer color="rgba(46, 49, 49, 0.6)" padless>
    <v-row justify="center" no-gutters>
      <v-btn v-for="link in links"
             :key="link"
             color="white"
             text
             rounded
             class="my-2 ml-4">
        {{ link }}

      </v-btn>
      <v-col class="py-4 text-center white--text"
             cols="12"
             style="background-color: #263242">
        {{ new Date().getFullYear() }} — <strong>甘肃玉泽律师事务所</strong>
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
