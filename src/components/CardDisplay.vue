<template>
  <v-card>
    <v-card-title>
      <div>
        <h2>With {{name}}</h2>
        <h3>Number of runs: {{noruns}}</h3>
        <h3>Number of items: {{noitems}}</h3>
      </div>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-title>
      <div>
        Average time: <strong>{{ averageTime }}</strong><br />
        Total time: {{ totalTime }}<br />
        Minimum time: {{ minTime }}<br />
        Maximum time: {{ maxTime }}<br />
        Views: {{views}}<br />
        Unique: {{unique}}
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn
        block
        color="secondary"
        dark
        @click="runMultiple(false)"
      >RUN {{name}} TESTS: MULTIPLE</v-btn>
    </v-card-actions>
    <v-card-actions>
      <v-btn
        block
        color="primary"
        dark
        @click="runMultiple(true)"
      >RUN {{name}} TESTS: SINGLE</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
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
      views: {
        type: Number,
        default: 0
      },
      unique: {
        type: Number,
        default: 0
      }
    },
    methods: {
      runMultiple(val) {
        this.$emit('multiple', val)
      }
    }
  }
</script>
