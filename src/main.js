import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import GetAxios from './GetAxios.vue'

Vue.use(VueAxios, axios)

new Vue({
  el: '#app',
  render: h => h(GetAxios)
})
