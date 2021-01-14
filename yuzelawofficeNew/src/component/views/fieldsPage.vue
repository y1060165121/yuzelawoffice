<template>

  <div style="width: 80%; margin: auto; margin-top: 80px; padding-top: 125px">
    <v-tabs vertical>
      <div style="margin-top: 200px">
        <v-tab>
          <v-icon left>
            mdi-account
          </v-icon>
            专业领域
        </v-tab>
        <v-tab>
          <v-icon left>
            mdi-home
          </v-icon>
          服务范围
        </v-tab>
      </div>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <Fields style="width: 90%; margin: auto" :showAnimation="showAnimation"></Fields>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text >
          <ContentTreeView></ContentTreeView>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>

</template>

<script>

  import Fields from '@/component/views/fields.vue'
  import ContentTreeView from '@/component/views/contentTreeView.vue'
  export default {
    name: 'FieldsPage',
    components: {
      Fields,
      ContentTreeView
    },
    data (){
      return{
        showAnimation: false
      }
    }
  }

</script>
