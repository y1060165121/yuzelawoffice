<template>

  <div class="py-10" style=" margin: auto;">
    <v-slide-group show-arrows center-active v-model="model">

      <v-slide-item v-for="(n, idx) in companyName"
                    :key="idx"
                    v-slot="{ active, toggle }"
                  >

        <v-btn class="mx-2"
               :input-value="active"
               active-class="lightgrey"
               depressed
               @click="toggle">
          {{ n }}
        </v-btn>
      </v-slide-item>
    </v-slide-group>
    <v-expand-transition>
      <v-sheet
        v-if="model != null"

        tile
        class="mt-3"

        style="padding-top:3vh;background-color:rgba(250, 250, 247,0.9)"

      >
        <v-row
          class="fill-height"
          justify="center"
          align="center"
        >

          <div style="font-size:2vh;padding-top:4vh;padding-bottom:5vh;">
              {{achievementDetail[model]}}
          </div>

        </v-row>
      </v-sheet>

    </v-expand-transition>
  </div>

</template>

<script>

  export default {
    name: 'Achievements',
    data() {
      return {
        companyName: [
          '兰州乾祥房地产开发有限公司',
          '兰州永新房地产开发有限公司',
          '兰州新胜利宾馆有限责任公司',
          '甘肃兰海物流股份有限公司',
          '甘肃艾黎房地产开发有限责任公司',
          '甘肃亿博投资有限公司',
          '甘肃川兰北晨房地产开发有限公司',
          '兰州国芳置业有限公司',
          '甘肃第七建设集团股份有限公司第六分公司',
          '兰州友信置业有限公司',
          '兰州艾黎物业管理有限公司',
          '甘肃天鸿金运置业有限公司'


        ],
        achievementDetail:[
          '兰州乾祥房地产开发有限公司“乾祥大厦”项目专项法律服务',
          '兰州永新房地产开发有限公司“东瓯世贸广场”项目前期拆迁等专项法律服务',
          '兰州新胜利宾馆有限责任公司“胜利广场.城市综合体项目一期”土地出让、物业等专项法律服务',
          '甘肃兰海物流股份有限公司自有土地的“出城入园”、土地使用权出让专项法律服务',
          '甘肃艾黎房地产开发有限责任公司“艾黎大厦”、城关区麦积山路“煤炭大院”棚户区改造项目专项法律服务',
          '甘肃亿博投资有限公司“城关区农民巷32号棚户区改造项目”专项法律服务',
          '甘肃川兰北晨房地产开发有限公司“金城.文萃园”棚户区改造项目专项法律服务',
          '兰州国芳置业有限公司“曦华源四期”项目规划事宜常年法律服务',
          '甘肃第七建设集团股份有限公司第六分公司承建的“兰电小区”项目后期工程建设常年法律服务',
          '兰州友信置业有限公司“建兰大厦”项目常年法律服务',
          '兰州艾黎物业管理有限公司“艾黎大厦”、西固区“八街坊”住宅小区物业管理常年法律服务',
          '甘肃天鸿金运置业有限公司“鸿运.金茂”项目专项法律服务'
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
