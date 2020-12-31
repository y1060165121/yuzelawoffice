<template>

  <div>
    <v-row class="mb-3 mt-3" align="center" justify="center" >
      <v-col class="col-lg-3 col-md-3 col-sm-4">
        <BusinessCard :photo="require('@/assets/lawyer_1.jpg')"></BusinessCard>
      </v-col>
      <v-col class="col-lg-3 col-md-3 col-sm-4">
        <BusinessCard :photo="require('@/assets/lawyer_1.jpg')"
                      :name="'耿晓慧'"
                      :introduce="'专职律师'"
                      :fullIntro="'甘肃玉泽律师事务所专职律师，涉及的业务领域主要有房地产公司日常对内对外非诉法律事务及民事、行政、刑事等诉讼业务办理等，法律基本功扎实，诉讼经验丰富。执业近10年，负责本所多家房地产及政府法律顾问的承办律师工作。在团队中负责项目所涉合同、公司股权事宜等法律文件起草与审核，处理诉讼业务。'"></BusinessCard>
      </v-col>
      <v-col class="col-lg-3 col-md-3 col-sm-4">
        <BusinessCard :photo="require('@/assets/lawyer_1.jpg')"
                      :name="'王潇楠'"
                      :introduce="'专职律师'"
                      :fullIntro="'甘肃玉泽律师事务所专职律师，执业近7年，法律基本功扎实，熟悉房地产、房屋征收补偿、公司、合同等专业领域的法律事务，负责多家房地产公司、造价咨询公司法律顾问的承办律师工作。在法律文书的起草、审核、法律意见的出具等方面较为专业。在团队中负责项目所涉合同、意见书等法律文件起草与审核。'"></BusinessCard>
      </v-col>
    </v-row>
  </div>

</template>

<script>

  import BusinessCard from '@/component/views/businessCard.vue'

  export default {
    name: 'Professionals',
    components: {
      BusinessCard
    }
  }

</script>
