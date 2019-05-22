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
  props: ['items', 'name', 'noruns'],
  mixins: [multipleRun],
  data: () => {
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
      let thisViews = 0
      let thisUnique = 0
      _.forEach(this.items, el => {
        thisViews += el.view
        thisUnique += el.unique
      })
      this.views = thisViews
      this.unique = thisUnique
    },
    addUpSingle() {
      let thisViews = 0
      _.forEach(this.items, el => {
        thisViews += el.view
      })
      this.views = thisViews
    }
  }
}
</script>
