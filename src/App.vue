<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>JAVASCRIPT ADDITION</span>
        <span class="font-weight-light">OPTIMAL METHOD</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-container
      fluid
        grid-list-md
      >
        <result-table />
      </v-container>

    </v-content>
    <app-footer />
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AppFooter from './components/AppFooter'
import ResultTable from './components/ResultTable'

export default {
  name: 'App',
  components: {
    AppFooter,
    ResultTable,
  }
}
</script>
