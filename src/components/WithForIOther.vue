<template>
  <card-display
    :name="name"
    :noruns="parseInt(noruns, 10)"
    :noitems="items.length"
    :averageTime="averageTime"
    :totalTime="totalTime"
    :minTime="minTime"
    :maxTime="maxTime"
    :data1="data1"
    :unique="unique"
    @multiple="runAddition"
  />
</template>

<script>
import { addSingle } from "../functions/WithForIOther"
import { multipleRun } from "../mixins/multipleRun"
import CardDisplay from "../components/CardDisplay"

export default {
  components: {
    CardDisplay
  },
  props: ['name', 'noruns'],
  mixins: [multipleRun],
  computed: {
    items() {
      return this.$store.state.itemData
    }
  },
  data: () => {
    return {
      data1: 0,
      unique: 0,
      start: 0,
      end: 0
    }
  },
  methods: {
    runAddition(val) {
      this.runMultiple(val)
    },
    addUpSingle() {
      const self = this
      addSingle(this.$store.state.itemData, this.$store.state.itemData.length)
      .then(result => {
        this.data1 = result
      })
    }
  }
}
</script>
