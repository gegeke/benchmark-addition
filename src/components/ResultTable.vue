<template>
  <div :key="componentKey">
    <v-data-table
      :headers="headers"
      :items="results"
      :loading="isRunning"
      class="elevation-1 my-3"
    >
      <v-progress-linear
        v-slot:progress
        color="success"
        indeterminate
      ></v-progress-linear>
      <template v-slot:items="results">
        <td>{{ results.item.noItems }}</td>
        <td class="text-xs-right">{{ results.item['addWithForEach'] }}</td>
        <td class="text-xs-right">{{ results.item['addWithForI'] }}</td>
        <td class="text-xs-right">{{ results.item['addWithForIOther'] }}</td>
        <td class="text-xs-right">{{ results.item['addWithForOf'] }}</td>
        <td class="text-xs-right">{{ results.item['addWithLodashForEach'] }}</td>
        <td class="text-xs-right">{{ results.item['addWithLodashSumBy'] }}</td>
        <td class="text-xs-right">{{ results.item['addWithReducer'] }}</td>
        <td class="text-xs-right">{{ results.item['addWithWhile'] }}</td>
      </template>
    </v-data-table>
    <div class="text-xs-center pt-2">
      <v-btn
        color="primary"
        @click="runTests"
      >Run Tests</v-btn>
    </div>
  </div>
</template>

<script>
import { addSingle as addWithForEach } from '../functions/WithForEach'
import { addSingle as addWithForI } from '../functions/WithForI'
import { addSingle as addWithForIOther } from '../functions/WithForIOther'
import { addSingle as addWithForOf } from '../functions/WithForOf'
import { addSingle as addWithLodashForEach } from '../functions/WithLodashForEach'
import { addSingle as addWithLodashSumBy } from '../functions/WithLodashSumBy'
import { addSingle as addWithReducer } from '../functions/WithReducer'
import { addSingle as addWithWhile } from '../functions/WithWhile'


export default {
  data () {
    return {
      isRunning: false,
      noItemsVector: [
        50000,
        75000,
        100000,
        125000,
        150000,
        175000,
        200000,
        225000,
        250000,
        275000,
        300000,
        325000,
        350000,
        375000,
        400000,
        425000,
        450000,
        475000,
        500000,

        525000,
        550000,
        575000,
        600000,
        625000,
        650000,
        675000,
        700000,

        725000,
        750000,
        775000,
        800000,
        825000,
        850000,
        875000,
        900000,
        925000,
        950000,
        975000,
        1000000
      ],
      noRuns: 90,
      headers: [
        {
          text: 'Number Of Items',
          align: 'left',
          sortable: true,
          value: 'noItems'
        },
        { text: 'forEach', value: 'addWithForEach' },
        { text: 'For I++', value: 'addWithForI' },
        { text: 'For I--', value: 'addWithForIOther' },
        { text: 'For Of', value: 'addWithForOf' },
        { text: '_.forEach()', value: 'addWithLodashForEach' },
        { text: '_.sumBy()', value: 'addWithLodashSumBy' },
        { text: 'Reducer', value: 'addWithReducer' },
        { text: 'While I--', value: 'addWithWhile' }
      ],
      results: [
        // {
        //   'noItems': 50000,
        //   'addWithForI': 159,
        //   'addWithForIOther': 160,
        //   'addWithForOf': 161,
        //   'addWithLodashForEach': 162,
        //   'addWithLodashSumBy': 163,
        //   'addWithReducer': 164,
        //   'addWithWhile': 165,
        // }
      ],
      functionNames: [
        'addWithForEach',
        'addWithForI',
        'addWithForIOther',
        'addWithForOf',
        'addWithLodashForEach',
        'addWithLodashSumBy',
        'addWithReducer',
        'addWithWhile'
      ],
      componentKey: 'startKey'
    }
  },
  methods: {
    addWithForI,
    addWithForIOther,
    addWithForOf,
    addWithLodashForEach,
    addWithLodashSumBy,
    addWithReducer,
    addWithWhile,
    async runTests() {
      this.isRunning = true

      this.results = []

      const self = this
      const noItemsVector = this.noItemsVector

      this.$store.dispatch('setNoRuns', this.noRuns)

      // loop over the item numbers
      for (let i in noItemsVector) {

        const tableRow = {}
        // set the name of the current row in the table
        tableRow.noItems = noItemsVector[i]

        // set the number of items in the store (doesn't set itemsData itself!)
        this.$store.dispatch('setNoItems', noItemsVector[i])

        // set the items to iterate over
        await this.$store.dispatch('setAdditionalItems')

        // pick functions from the function list
        for (let func in this.functionNames) {

          const funcName = this.functionNames[func]

          if (!this.evalSumFunction(funcName)) {
            return false
          }

          const avgTime = await this.runCaclulation(funcName, this.$store.state.itemData, this.noRuns)

          console.log(funcName + ' ' + noItemsVector[i] + ':', avgTime)
          tableRow[funcName] = avgTime

        }

        this.results.push(tableRow)
      }
    },
    runCalculation(funcName, items, noRuns) {
      return new Promise(async resolve => {
        const calcTimes = []
        const itemsLength = items.length

        for(let i = 0; i < noRuns; i++) {
          const startTime = Date.now()
          const sum = await this[funcName](items, itemsLength)
          const endTime = Date.now()
          calcTimes.push(endTime - startTime)
        }

        resolve(Number(calcTimes.reduce((acc, curr) => {return acc + curr})/calcTimes.length).toFixed(2))
      })
    }
    // injecting functions by name (string)
    // source: https://stackoverflow.com/questions/912596/how-to-turn-a-string-into-a-javascript-function-call
    evalSumFunction(str) {
      const fn = this[str]
      if (typeof fn === 'function') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
