<template>

  <div>
    <v-row style="margin-left: 15%; margin-right: 15%">
      <v-col class="col-lg-4 col-md-4 col-sm-5">
        <BusinessCard :photo="require('@/assets/wangyonghai_1.jpeg')"></BusinessCard>
      </v-col>
      <v-col class="col-lg-4 col-md-4 col-sm-5">
        <BusinessCard :photo="require('@/assets/gengxiaohui_2.jpeg')"
                      :name="'耿晓慧'"
                      :introduce="'专职律师'"
                      :fullIntro="'甘肃玉泽律师事务所专职律师，法学本科学历，2008年通过全国统一司法资格考试，2016年考取国家二级心理咨询师资格，法律基本功扎实。执业十余年来办理了大量诉讼案件，积累了丰富的诉讼实践经验，形成了自己独特的办案风格和对法律适用的独到见解，并逐步确定了以公司、房地产、刑事辩护、商事合同为专业的服务领域。'"
                      :PhoneNumber="'联系电话：13909313613'"
                      :Email="'邮箱：383382887@qq.com'"
                      :Area="'擅长领域：房地产公司对内对外非诉法律事务及政府法律顾问的承办工作及民事、行政、刑事等诉讼业务办理。'"></BusinessCard>
      </v-col>
      <v-col class="col-lg-4 col-md-4 col-sm-5">
        <BusinessCard :photo="require('@/assets/wangxiaonan_1.jpeg')"
                      :name="'王潇楠'"
                      :introduce="'专职律师'"
                      :fullIntro="'甘肃玉泽律师事务所专职律师，执业近8年，负责多家房地产公司、造价咨询公司、各类商业公司的法律顾问工作及相关诉讼与执行案件。'"
                      :PhoneNumber="'联系电话：13359471356'"
                      :Email="'邮箱：1006543719@qq.com'"
                      :Area="'擅长领域：熟悉建设工程房地产、招投标、公司、合同等专业领域的法律事务。'"></BusinessCard>
      </v-col>
      <v-col class="col-lg-4 col-md-4 col-sm-5">
        <BusinessCard :photo="require('@/assets/lingxue_1.jpg')"
                      :name="'凌雪'"
                      :introduce="'专职律师'"
                      :fullIntro="'甘肃玉泽律师事务所专职律师，四级律师，2016年执业至今。2008年政法学院经济法系，2016年开始执业现任甘肃省律师协会政府法律顾问专业委员会委员,兰州市律师协会青年律师工作委员会委员。专业能力及项目经验：建筑房地产诉讼类、刑事诉讼、劳动争议解决类、民商事诉讼类。'"
                      :PhoneNumber="'联系电话：18152083699'"
                      :Email="'邮箱：531470500@qq.com'"
                      :Area="'擅长领域：建筑房地产诉讼类、刑事诉讼、劳动争议解决类、民商事诉讼类。'"></BusinessCard>
      </v-col>

      <v-col class="col-lg-4 col-md-4 col-sm-5">
        <BusinessCard :photo="require('@/assets/gexunde_1.jpeg')"
                      :name="'葛逊德'"
                      :introduce="'专职律师'"
                      :fullIntro="'甘肃玉泽律师事务所专职律师，毕业于甘肃政法学院，2013年通过国家司法考试A证，2014年从业专职律师。自2014年执业以来，成功办理了大量民事、经济类案件和行政案件，接受委托两起渎职犯罪刑事案件，均受到当事人及家属的肯定和认可。自2016年起被聘任为兰州市城关区城市管理行政执法局法律顾问，参与了很多行政案件，对行政案件有深厚的理论功底和丰富的实践经验。擅长民事合同纠纷、交通肇事、公司法务、土地纠纷和房地产纠纷、行政诉讼。刑事领域内对渎职犯罪有浓厚的兴趣，并努力钻研于对渎职犯罪的睿智辩法。擅长民事合同纠纷、交通肇事、公司法务、土地纠纷和房地产纠纷、行政诉讼。刑事领域内对渎职犯罪有浓厚的兴趣，并努力钻研于对渎职犯罪的睿智辩法。'"
                      :PhoneNumber="'联系电话：18152089077'"
                      :Email="'邮箱：gexunde@163.com'"
                      :Area="'擅长领域：擅长民事合同纠纷、交通肇事、公司法务、土地纠纷和房地产纠纷、行政诉讼。刑事领域内对渎职犯罪有浓厚的兴趣，并努力钻研于对渎职犯罪的睿智辩法。'"></BusinessCard>
      </v-col>
      
      <v-col class="col-lg-4 col-md-4 col-sm-5">
        <BusinessCard
                      :name="'唐云霞'"
                      :introduce="'专职律师'"
                      :fullIntro="''"
                      :PhoneNumber="'联系电话：'"
                      :Email="'邮箱：'"
                      :Area="'擅长领域： '"></BusinessCard>
      </v-col>

      <v-col class="col-lg-4 col-md-4 col-sm-5">
        <BusinessCard :photo="require('@/assets/zhanghuiliang_1.jpeg')"
                      :name="'张惠亮'"
                      :introduce="'专职律师'"
                      :fullIntro="'甘肃玉泽律师事务所专职律师。自执业以来长期专注于企业不良资产的收购与处置；房地产开发项目的专项法律服务；合同类的诉讼与非诉讼法律业务；民事案件的执行法律服务。并为多家企、事业单位提供法律顾问。'"
                      :PhoneNumber="'联系电话：18693112225'"
                      :Email="'邮箱：Zhanghl1982@yeah.com'"
                      :Area="'擅长领域：债权的变更转让；房地产开发项目的专项法务；合同类的诉讼业务；公司法人治理业务。'"></BusinessCard>
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
