<template>

  <v-timeline>
    <v-timeline-item v-for="(year, i) in years"
                     :key="i"
                     :color="year.color"
                     small>
      <template v-slot:opposite>
            <span
              :class="`headline font-weight-bold ${year.color}--text`"
              v-text="year.year"
            ></span>
          </template>
      <div class="py-4">
        <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
          资料正在整理中...
        </h2>
        <div>

        </div>
      </div>
    </v-timeline-item>
  </v-timeline>

</template>

<script>

  export default {
    name: 'TimeLine',
    data() {
      return {
        years: [
          {
            color: 'grey',
            year: ''
          },
          {
            color: 'grey',
            year: ''
          },
          {
            color: 'grey',
            year: ''
          },
          {
            color: 'grey',
            year: ''
          },
          {
            color: 'grey',
            year: ''
          }
        ]
      }
    }
  }

</script>
