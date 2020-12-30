<template>

  <v-treeview v-model="tree"
              :open="initiallyOpen"
              :items="items"
              activatable
              item-key="name"
              open-on-click>
    <template v-slot:prepend="{ item, open }">
                    <v-icon v-if="!item.file">
                      {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
                    </v-icon>
                    <v-icon v-else>
                      {{ files[item.file] }}
                    </v-icon>
                  </template>
  </v-treeview>

</template>

<script>

  export default {
    name: 'ContentTreeView',
    data() {
      return {
        initiallyOpen: ['public'],
        files: {
          html: 'mdi-language-html5',
          js: 'mdi-nodejs',
          json: 'mdi-code-json',
          md: 'mdi-language-markdown',
          pdf: 'mdi-file-pdf',
          png: 'mdi-file-image',
          txt: 'mdi-file-document-outline',
          xls: 'mdi-file-excel'
        },
        tree: [],
        items: [
          {
            name: '1.项目筹备阶段的法律服务',
            children: [
              { name: '1.1起草项目文件、合同，参与谈判；起草项目公司的合作协议书、公司章程' },
              { name: '1.2审查项目建筑方案设计和建筑施工图设计的有关合同文件' },
              { name: '1.3审查企业项目融资的有关合同文件。' }
            ]
          },
          {
            name: '2．参与客户所属项目在推进过程中遇到的规划、土地、建设等疑难问题的处理',
            children: [
              {name: '2.1起草项目相关文件'},
              { name: '2.2对疑难问题进行法律论证，向客户出具《法律意见书》' },
              { name: '2.3参与客户参加的相关政府部门召开的项目会议，并发表法律意见' },
              { name: '2.4根据工作需要，向有关部门发《律师函》' }
            ]
          },
          {
            name: '3.项目报建阶段的法律服务',
            children: [
              {name: '3.1审查项目取得立项、规划、土地、消防、施工、预售等行政许可和审批的前置条件'},
              { name: '3.2参与项目规划设计方案审查会议，依照法律、法规、规章及政府规范性文件提出修改意见' },
              { name: '3.3对项目报建过程中疑难问题开展法律论证，向委托方提出法律意见；如需要，协助委托方向有关部门沟通衔接' },
            ]
          },
          {
            name: '4.项目建设阶段法律服务',
            children: [
              {name: '4.1审查各类建设工程施工合同，安装工程合同，设备、材料采购合同，监理合同的合法性，监督合同的履行'},
              { name: '4.2协助委托方在项目施工工程中的鉴证管理，建立、设计完整的工作流程和工作制度' },
              { name: '4.3在项目建设过程中，对项目停建、缓建、逾期竣工、设计变更、工程量增减、质量事故理赔等，协调处理' },
              { name: '4.4项目竣工验收阶段，就有关法律责任问题和程序问题提供法律意见' },

            ]
          },
          {
            name: '5．项目租售阶段的法律服务',
            children: [
              {name: '5.1协助企业完善预售、销售条件，提出相应的法律意见'},
              { name: '5.2如果甲方委托专业代理机构代为销售，审查《商品房销售代理协议》，协助企业和代理机构确定销售计划，确定权利义务' },
              { name: '5.3在预售阶段，起草《商品房认购书》、《商品房买卖合同》及补充协议等法律文件。根据项目实施情况，对特别事项在合同中作特别约定' },
              { name: '5.4起草和审查企业与金融机构之间的有关合作协议、融资协议，对企业有关担保责任进行审查把关，对客户按揭合同中涉及企业保证责任的有关合同安全性、合法性进行审查把关' },
              { name: '5.5起草商铺租赁协议以及相关法律文件' },


            ]
          },
          {
            name: '6．项目交付阶段的法律服务',
            children: [
              {name: '6.1审查《商品房使用说明书》、《住宅质量保证书》、《房屋移交证明书》'},
              { name: '6.2审查业主入住手册、业主临时公约等文件' },
              { name: '6.3协助处理交房时发生的争议' },

            ]
          },
          {
            name: '7.委托方要求的其他有关规划、建筑施工、房地产开发、土地等相关领域的法律服务',
          }
        ]
      }
    }
  }

</script>
