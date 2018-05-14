<template>
  <div>
    <yd-navbar class="aftNb">
        <router-link to="#" slot="left">
            <i class="closeFt icon">&#xe64d;</i>
        </router-link>
    </yd-navbar>
    <div class="logo-img">
        <img src="../../assets/images/logo.png">
    </div>
    <yd-button-group class="butPad">
      <yd-button size="large" type="primary" class="nextBut">登录</yd-button>
    </yd-button-group>
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
.logo-img{
  width: 100%;
  text-align: center;
  margin-top: 0.54rem;
}
.logo-img img{
  width: 1.53rem;
  height: 0.78rem;
  margin-top: 0.2rem;
    margin-left: 0.3rem;    
}
</style>
