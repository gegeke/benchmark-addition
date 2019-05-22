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
      let sumView = 0
      let sumUnique = 0
      const sumItems = this.items
      let i = sumItems.length
      while(i--) {
        let thisItem = sumItems[i]
        sumView += thisItem.view
        sumUnique += thisItem.unique
      }
      this.views = sumView
      this.unique = sumUnique
    },
    addUpSingle() {
      let sumView = 0
      const sumItems = this.items
      let i = sumItems.length
      while(i--) {
        let thisItem = sumItems[i]
        sumView += thisItem.view
      }
      this.views = sumView
    }
  }
}
</script>

<style lang="css" scoped>
</style>
