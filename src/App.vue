<template>
  <div class="container">
    <Navbar></Navbar>
    <GetAxios></GetAxios>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import GetAxios from './components/GetAxios.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Navbar,
    GetAxios
  },
  mounted () {
  this.$vuetify.init()
  }
}
</script>

<style scoped>
.container {
  margin: 0px auto;
  content: '';
  font-family: 'Times New Roman'
}
</style>
