<template>
    <div class="regwrap">
        <baseHeader :headObj='headObj'/>
        <yd-cell-group class="noneB">
            <yd-cell-item class="checkNum">
                <yd-input slot="left" required class="inputS"  v-model="input1" :show-success-icon="false" :show-error-icon="false" regex="mobile"  placeholder="请输入手机号"></yd-input>
            </yd-cell-item>
            <yd-cell-item class="checkNum">
                <yd-input slot="left" required class="inputS" v-model="input2" :show-success-icon="false" :show-error-icon="false" placeholder="请输入验证码"></yd-input>
                <yd-button slot="right">获取验证码</yd-button>
            </yd-cell-item>
        </yd-cell-group>
        <yd-button-group class="butPad">
            <yd-button size="large" type="primary" class="nextBut">下一步</yd-button>
        </yd-button-group>
        <p class="agreeTitle">
            用户注册代表同意 <a href=""> 《服务条款》</a> 和 <a href="">《蜀桑源隐私条款》</a>
        </p>
    </div>
</template>
<script type="text/babel">
// 注册
import baseHeader from '@/components/header'
export default {
  name: 'Login',
  data () {
    return {
      input1: '',
      input2: '',
      input7: '',
      headObj: {
        show: false,
        rightTo: '',
        rightText: '',
        title: '注册',
        fontsize: '0.34rem'
      }
    }
  },
  components: {
    baseHeader
  }
}
</script>
<style scoped>
.regwrap{
    font-family:  "PingFang-SC";
    background: #fff;
}
.yd-cell-item:after {
    margin-left: .24rem;
    content: "";
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid #d9d9d9;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
}

.agreeTitle{
  text-align: center;
  margin-top: 10px;
  color: #666
}
.agreeTitle a{
  color: #7636FC
}
</style>
