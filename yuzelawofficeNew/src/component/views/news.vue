<template>

<div style="width: 80%; margin: auto" class="mb-5" >
 <v-slide-group
   v-model="model"
   class="pa-4"
   show-arrows
   cycle
   center-active
 >
   <v-slide-item
   v-for="(item, i) in carouselItems"
     :key="i"
     v-slot="{ active, toggle }"
   >
     <v-card
       class="ma-6"
       :height="active ? '400' : '300'"
       :width="active ? '400' : '300'"
       @click="toggle"
     >
     <v-img :src="item.src"  :height="active ? '400' : '300'"
      :width="active ? '400' : '300'">

     </v-img>
       <v-row
         class="fill-height"
         align="center"
         justify="center"
       >
         <v-scale-transition>

         </v-scale-transition>
       </v-row>
     </v-card>
   </v-slide-item>
 </v-slide-group>

 <v-expand-transition>
   <v-sheet
     v-if="model != null"
     height="200"
     tile
     class="mt-3"
   >
     <v-row
       class="fill-height"
       align="center"
       justify="center"
     >
       <h3 class="title">
         Selected {{ model }}
       </h3>
     </v-row>
   </v-sheet>
 </v-expand-transition>
</div>
</template>

<script>
export default {
  name: 'News',
  data(){
    return{
      model: 0,
      carouselItems: [
        {
          src: require('@/assets/mp-1_copy.png')
        },
        {
          src: require('@/assets/phone-01.png')
        },
        {
          src: require('@/assets/phone-02.png')
        },
        {
          src: require('@/assets/phone-03.png')
        },
        {
          src: require('@/assets/phone-04.png')
        },
        {
          src: require('@/assets/mp-1_copy.png')
        }
      ]
    }
  },
  mounted: function () {
        this.$nextTick(function () {
            window.setInterval(() => {
              if (this.model == null){
                this.model = null
              }
            else if (this.model == this.carouselItems.length - 1) {
                 this.model = 0
               }
            else{this.model = this.model + 1}
          },8000);
        })
    }
}
</script>
