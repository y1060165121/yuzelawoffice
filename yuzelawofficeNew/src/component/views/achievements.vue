<template>

  <div class="py-10" style="width: 60%; margin: auto;">
    <v-slide-group show-arrows dark  center-active v-model="model">

      <v-slide-item v-for="(n, idx) in companyName"
                    :key="idx"
                    v-slot="{ active, toggle }"
                  >

        <v-btn class="mx-2"
               :input-value="active"
               active-class="purple white--text"
               depressed
               rounded
               @click="toggle">
          {{ n }}
        </v-btn>
      </v-slide-item>
    </v-slide-group>
  </div>

</template>

<script>

  export default {
    name: 'Achievements',
    data() {
      return {
        companyName: [
          '兰州市城乡规划局',
          '兰州市棚户区（城中村）改造工作办公室',
          '兰州市城关区房产保障中心',
          '兰州市城关区青白石街道办事处',
          '定西市岷县住房和城乡建设局',
          '临夏州康乐县住房和城乡建设局',
          '甘肃第七建设集团股份有限公司第六分公司',
          '甘肃省艾黎投资集团有限公司',
          '甘肃艾黎房地产开发有限责任公司',
          '甘肃民泰工程建设监理有限责任公司',
          '甘肃明居房地产开发有限公司',
          '甘肃荣成房地产开发有限公司',
          '甘肃亿博投资有限公司',
          '甘肃川兰北晨房地产开发有限公司',
          '兰州乾祥房地产开发有限公司',
          '兰州中富房地产开发有限公司',
          '兰州富翔置业发展有限公司',
          '兰州殿稳医疗制品有限公司',
          '兰州民百艺族家居有限公司',
          '兰州艾黎物业管理有限公司',
          '兰州友信置业有限公司',
          '兰州国芳置业有限公司',
          '甘肃金运投资控股（集团）有限公司'
        ],
        model: 0
      }
    },
    mounted: function() {
      this.$nextTick(function() {
        window.setInterval(() => {
          if (this.model == null) {
            this.model = null
          } else if (this.model == this.companyName.length - 1) {
            this.model = 0
          } else {
            this.model = this.model + 1
          }
        }, 8000)
      })
    }
  }

</script>
