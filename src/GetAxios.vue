<template>
  <div id="app">
    <p>
      {{ msg }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    // this.axios.get(http://op.juhe.cn/onebox/weather/query?cityname=%E6%B7%B1%E5%9C%B3&dtype=json&key=9ff894565b4c05721ccac60d907eb26c).then((response) => {
    //   this.msg = response.data.result;
    //   console.log(response.data);
    // })
    this.msg = 'Changed by Created lifycircle!'
   }
}
</script>

<style>

</style>
