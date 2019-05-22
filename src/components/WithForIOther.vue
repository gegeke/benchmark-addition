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
      let sumViews = 0
      let sumUnique = 0
      const itemsLength = this.items.length
      const sumItems = this.items
      for(let i = 0;  i < itemsLength; i++) {
        sumViews += sumItems[i].view
        sumUnique += sumItems[i].unique
      }
      this.views = sumViews
      this.unique = sumUnique
    },
    addUpSingle() {
      let sumViews = 0
      const itemsLength = this.items.length
      const sumItems = this.items
      for(let i = 0;  i < itemsLength; i++) {
        sumViews += sumItems[i].view
      }
      this.views = sumViews
    }
  }
}
</script>

<style lang="css" scoped>
</style>
