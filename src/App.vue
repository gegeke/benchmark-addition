<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>JAVASCRIPT ADDITION</span>
        <span class="font-weight-light">OPTIMAL METHOD</span>
      </v-toolbar-title>
      <template
        v-slot:extension
      >
          <v-layout row>
            <v-flex xs6 sm5>
              <v-text-field
                label="Number of items"
                value="10000"
                hint="Click on the icon to set number of items"
                type="number"
                v-model="noDataItems"
                append-outer-icon="note_add"
                @click:append-outer="setNoItems"
              ></v-text-field>
            </v-flex>
            <v-flex sm2></v-flex>
            <v-flex xs6 sm5>
              <v-text-field
                label="Number of runs"
                value="15"
                type="number"
                hint="How many times does the algorithm run"
                v-model="noRuns"
              ></v-text-field>
            </v-flex>
          </v-layout>

      </template>
    </v-toolbar>

    <v-content>
      <v-container
        grid-list-md
      >
        <v-layout row wrap>
          <v-flex
            v-for="(card, index) in sumTechniques"
            :key="card.name + index"
            v-bind="{ [`xs${card.flexxs} sm${card.flexsm} md${card.flexmd} lg${card.flexlg}`]: true }"
          >
            <custom-component
              :is="sumTechniques[index].comp"
              :items="sumTechniques[index].items"
              :name="sumTechniques[index].name"
              :noruns="sumTechniques[index].noruns"
            ></custom-component>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import WithLodash from './components/WithLodash'
import WithLodashForEach from './components/WithLodashForEach'
import WithReducer from './components/WithReducer'
import WithWhile from './components/WithWhile'
import WithForOf from './components/WithForOf'
import WithForI from './components/WithForI'
import WithForIOther from './components/WithForIOther'

export default {
  name: 'App',
  components: {
    WithLodash,
    WithLodashForEach,
    WithReducer,
    WithWhile,
    WithForOf,
    WithForI,
    WithForIOther
  },
  computed: {
    sumTechniques() {
      return [
        {
          comp: 'with-lodash',
          name: 'Lodash _.sumBy',
          items: this.jsonData,
          noruns: this.noRuns,
          flexxs: 12,
          flexsm: 6,
          flexmd: 4,
          flexlg: 3
        },
        {
          comp: 'with-lodash-for-each',
          name: 'Lodash _.forEach',
          items: this.jsonData,
          noruns: this.noRuns,
          flexxs: 12,
          flexsm: 6,
          flexmd: 4,
          flexlg: 3
        },
        {
          comp: 'with-reducer',
          name: 'Reducer',
          items: this.jsonData,
          noruns: this.noRuns,
          flexxs: 12,
          flexsm: 6,
          flexmd: 4,
          flexlg: 3
        },
        {
          comp: 'with-for-i-other',
          name: 'For...i++',
          items: this.jsonData,
          noruns: this.noRuns,
          flexxs: 12,
          flexsm: 6,
          flexmd: 4,
          flexlg: 3
        },
        {
          comp: 'with-for-i',
          name: 'For...i--',
          items: this.jsonData,
          noruns: this.noRuns,
          flexxs: 12,
          flexsm: 6,
          flexmd: 4,
          flexlg: 3
        },
        {
          comp: 'with-for-of',
          name: 'For...Of',
          items: this.jsonData,
          noruns: this.noRuns,
          flexxs: 12,
          flexsm: 6,
          flexmd: 4,
          flexlg: 3
        },
        {
          comp: 'with-while',
          name: 'While--',
          items: this.jsonData,
          noruns: this.noRuns,
          flexxs: 12,
          flexsm: 6,
          flexmd: 4,
          flexlg: 3
        }
      ]
    }
  },
  data: () => ({
      noDataItems: 10000,
      noRuns: 15,
      jsonData: []
    }),
  methods: {
    setNoItems() {
      let newNoItems = []
      for (let i = 0; i < this.noDataItems; i++) {
        newNoItems.push({ "id": i + 1, "view": 1001 + i, "unique": 101 + i })
      }
      this.jsonData = newNoItems
    },
    setNoRuns() {
      this.noRuns = this.noRuns
    }
  },
  mounted() {
    this.setNoItems()
  }
}
</script>
