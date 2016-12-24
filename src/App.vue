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
      msg: 'App main Page'
    }
  },
  components: {
    Navbar,
    GetAxios
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
