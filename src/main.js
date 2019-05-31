import Vue from 'vue'
import './plugins/router'
import './plugins/vuetify'
import routes from './routes'
import store from './store'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  store,
  routes,
  render: h => h(App),
}).$mount('#app')
