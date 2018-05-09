<template>
  <div>
    <yd-navbar class="aftNb">
        <router-link to="#" slot="left">
            <i class="closeFt icon">&#xe64d;</i>
        </router-link>
    </yd-navbar>
    <p class="stBot">
      <span class="le bttext">
        <i class="weixin icon">&#xe61a;</i>
        微信
      </span>
      <span class="ri bttext">
        <i class="qq icon">&#xe752;</i>
        QQ
      </span>
      <!-- 使用 -->
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style  scoped>
.aftNb:after {
  border-bottom: none;
}
.stBot {
  position: absolute;
  width: 100%;
  bottom: 0.47rem;
  text-align: center;
}
.icon{
  font-family: "iconfont" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.closeFt {
  font-size: 0.28rem;
}
.weixin {
  font-size: 0.29rem;
}
.qq {
  font-size: 0.29rem;
}
.le{
  border-right:1px solid #EEE;
  margin-right: 0.3rem;
  padding-right: 0.3rem;
}
.bttext{
  color: #666;
  font-size: 0.26rem;
  font-family: 'PingFang-SC';
  font-weight: normal;
}
</style>
