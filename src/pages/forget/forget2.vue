<template>
    <div class="loginwrap">
        <baseHeader :headObj='headObj'/>
        <yd-cell-group class="noneB">
            <yd-cell-item class="checkNum">
                <yd-input slot="left" required class="inputS" :show-success-icon="false" :show-error-icon="false"  v-model="input1" max="20" placeholder="请输入密码"></yd-input>
            </yd-cell-item>
            <yd-cell-item class="checkNum">
                <yd-input slot="left" required class="inputS" v-model="input2" :show-success-icon="false" :show-error-icon="false" placeholder="请再次输入密码"></yd-input>
            </yd-cell-item>
       </yd-cell-group>
       <p class="tips">6-16位密码、数字或字母</p>
        <yd-button-group class="butPad">
            <yd-button size="large" type="primary" class="nextBut">确定</yd-button>
        </yd-button-group>
    </div>
</template>
<script type="text/babel">
// 登录
import baseHeader from '@/components/header'
export default {
  name: 'Login',
  data () {
    return {
      input1: '',
      input2: '',
      headObj: {
        show: false,
        rightTo: '',
        rightText: '',
        title: '找回密码',
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
.loginwrap{
    background: #fff;
}
.getCheck{
  border: .5px solid #7636FC;
  color: #7636FC;
  border-radius: 3px;
}
.tips{
  font-family: "PingFang-SC";
  font-size: 0.2rem;
  padding-left: .24rem;
  color:#B4B4B4;
  text-indent: 7px;
}
</style>
