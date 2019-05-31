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
import _ from "lodash"
export default {
  components: {
    CardDisplay
  },
  props: ['name', 'noruns'],
  mixins: [multipleRun],
  data: () => {
    return {
      views: 0,
      unique: 0,
      start: 0,
      end: 0
    }
  },
  computed: {
    items() {
      return this.$store.state.itemData
    }
  },
  methods: {
    runAddition(isSingle) {
      this.runMultiple(isSingle)
      .then(res => {
        console.log(res)
      })
    },
    addUpMultiple() {
      this.views = _.sumBy(this.items, el => {return el.data1})
      this.unique = _.sumBy(this.items, el => {return el.unique})
    },
    addUpSingle() {
      this.views = _.sumBy(this.items, el => {return el.data1})
    }
  }
}
</script>
