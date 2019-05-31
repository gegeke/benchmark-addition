<template>
  <v-card>
    <v-card-title>
      <div>
        <h2>With {{name}}</h2>
        <h3>Number of runs: {{getRunData.noRuns}}</h3>
        <h3>Number of items: {{getItemDataLength}}</h3>
      </div>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-title>
      <div>
        Average time: <strong>{{ averageTime }}</strong><br />
        Total time: {{ totalTime }}<br />
        Minimum time: {{ minTime }}<br />
        Maximum time: {{ maxTime }}<br />
        SUM: {{data1}}<br />
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn
        block
        color="primary"
        dark
        @click="runMultiple(true)"
      >RUN {{name}} TESTS</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    name: {
      type: String,
      default: 'additionType'
    },
    noruns: {
      type: Number,
      default: 1
    },
    noitems: {
      type: Number,
      default: 1
    },
    averageTime: {
      type: Number,
      default: 0
    },
    totalTime: {
      type: Number,
      default: 0
    },
    minTime: {
      type: Number,
      default: 0
    },
    maxTime: {
      type: Number,
      default: 0
    },
    data1: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapGetters([
      'getRunData',
      'getItemDataLength'
    ]),
  },
  methods: {
    runMultiple(val) {
      this.$emit('multiple', val)
    }
  }
}
</script>
