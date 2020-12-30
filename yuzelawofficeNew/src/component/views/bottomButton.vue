<template>

  <v-card>
    <v-speed-dial v-model="fab"
                  :top="top"
                  :bottom="bottom"
                  :right="right"
                  :left="left"
                  :direction="direction"
                  :open-on-hover="hover"
                  :transition="transition"
                  fixed>
      <template v-slot:activator>
          <v-btn
            v-model="fab"
            color="blue darken-2"
            dark
            fab
            elevation="8"
          >
            <v-icon v-if="fab">
              mdi-close
            </v-icon>
            <v-icon v-else>
              mdi-plus
            </v-icon>
          </v-btn>
        </template>
      <v-btn fab dark small color="green" @click="wechatDialog = !wechatDialog">
        <v-icon>mdi-wechat</v-icon>
      </v-btn>
      <v-btn fab dark small color="indigo" @click="emailDialog = !emailDialog">
        <v-icon>mdi-email</v-icon>
      </v-btn>
      <v-btn fab dark small color="red" @click="phoneDialog = !phoneDialog">
        <v-icon>mdi-phone</v-icon>
      </v-btn>
    </v-speed-dial>
    <v-dialog v-model="wechatDialog"
              max-width="500px">
      <v-card>
        <v-card-text>

        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text
                 color="primary"
                 @click="wechatDialog = false">
            <v-icon>mdi-check</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="phoneDialog"
              max-width="500px">
      <v-card>
        <v-card-text>

        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text
                 color="primary"
                 @click="phoneDialog = false">
            <v-icon>mdi-check</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="emailDialog"
              max-width="500px">
      <v-card>
        <v-card-text>

        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text
                 color="primary"
                 @click="emailDialog = false">
            <v-icon>mdi-check</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>


<script>

  export default {
    name: 'BottomButton',
    components: {},
    data() {
      return {
        direction: 'top',
        fab: false,
        fling: false,
        hover: false,
        tabs: null,
        top: false,
        right: true,
        bottom: true,
        left: false,
        transition: 'slide-y-reverse-transition',
        wechatDialog: false,
        emailDialog: false,
        phoneDialog: false
      }
    }
  }

</script>
