<template>
    <div class="regwrap">
        <baseHeader :headObj='headObj'/>
        <yd-cell-group class="noneB">
            <yd-cell-item class="checkNum">
                <yd-input slot="left" required class="inputS" v-model="input1" :show-success-icon="false" :show-error-icon="false" regex="mobile"  placeholder="请输入密码"></yd-input>
            </yd-cell-item>
            <yd-cell-item class="checkNum">
                <yd-input slot="left" required class="inputS" v-model="input2" :show-success-icon="false" :show-error-icon="false" placeholder="请再次输入密码"></yd-input>
            </yd-cell-item>
        </yd-cell-group>
        <p class="tips">6-16位密码、数字或字母</p>
        <yd-button-group class="butPad">
            <yd-button size="large" type="primary" class="nextBut">完成</yd-button>
        </yd-button-group>
        <p class="agreeTitle">
            用户注册代表同意 <a href=""> 《服务条款》</a> 和 <a href="">《蜀桑源隐私条款》</a>
        </p>
    </div>
</template>
<script type="text/babel">
// 注册2
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
<style>
.checkNum > .yd-cell-left {
  width: 100%;
}
.noneB{
  margin-bottom: 0.1rem;
}
.noneB > .yd-cell::after {
  border-bottom: none;
}
.butPad {
  padding: 0 0.54rem;
}
</style>

<style scoped>
.regwrap {
  font-family: "PingFang-SC";
  background: #fff;
}

.yd-cell:after {
  border: none;
}
.inputS{
  font-family: "PingFang-SC";
  font-size: .28rem;
}
.nextBut {
  background: linear-gradient(#a945ff, #7636fc);
  width: 100%;
  height: 1rem;
  margin: 0 auto;
  font-family: "PingFang-SC";
  font-size: 0.36rem;
  margin-top: 1.9rem;
}
.agreeTitle {
  text-align: center;
  margin-top: 10px;
  color: #666;
}
.agreeTitle a {
  color: #7636fc;
}
</style>
