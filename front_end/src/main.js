import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

async function mpurse_test() {
  var address = await window.mpurse.getAddress()

  window.mpurse.sendAsset('MWUKwMmfBZ8ZgaLxwUCgb14huzvbZNn87c', "MONA", 1.14514, 'plain', 'tamami-chan kawaii!')
}

// mpurse_test()

new Vue({
  render: h => h(App),
}).$mount('#app')
