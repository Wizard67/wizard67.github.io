<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  created(){
    console.log(this.$router)
  }
}
</script>

<style src="@/assets/css/base.scss" lang="scss"></style>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  outline: 1px red solid;
}
</style>
