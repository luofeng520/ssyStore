<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url("./assets/styles/custom.css");
#app {
  font-family: 'PingFang-SC', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body{
  background: #fff
}
@font-face {
  font-family: "iconfont";
  src: url("./assets/fonts/iconfont.eot");
  src: url("./assets/fonts/iconfont.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/iconfont.woff") format("woff"),
    url("./assets/fonts/iconfont.ttf") format("truetype");
}
</style>
