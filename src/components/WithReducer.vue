<template>
  <card-display
    :name="name"
    :noruns="parseInt(noruns, 10)"
    :noitems="items.length"
    :averageTime="averageTime"
    :totalTime="totalTime"
    :minTime="minTime"
    :maxTime="maxTime"
    :views="views"
    :unique="unique"
    @multiple="runAddition"
  />
</template>

<script>
import { multipleRun } from "../mixins/multipleRun"
import CardDisplay from "../components/CardDisplay"

export default {
  components: {
    CardDisplay
  },
  props: ['items', 'name', 'noruns'],
  mixins: [multipleRun],
  data() {
    return {
      views: 0,
      unique: 0,
      start: 0,
      end: 0
    }
  },
  methods: {
    runAddition(val) {
      this.runMultiple(val)
    },
    addUpMultiple() {
      this.views = this.items.reduce((acc, curr) => {return acc + curr.view}, 0)
      this.unique = this.items.reduce((acc, curr) => {return acc + curr.unique}, 0)
    },
    addUpSingle() {
      this.views = this.items.reduce((acc, curr) => {return acc + curr.view}, 0)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
