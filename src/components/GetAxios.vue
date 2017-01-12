<template>
  <div id="app">
    <p>{{ msg.body }}</p>
  </div>
</template>

<script>
const axios = require('axios')

export default {
  data () {
    return {msg:          "Axios get failed!",
            exchangerate: "No Data"
          }
  },
  created () {
    // We can return a Promise instead of calling the callback
    return axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then((res) => {
      this.msg = res.data;
    })
  }
}
</script>

<style>

</style>
