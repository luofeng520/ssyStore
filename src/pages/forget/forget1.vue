<template>
    <div class="loginwrap">
        <baseHeader :headObj='headObj'/>
        <yd-cell-group class="noneB">
            <yd-cell-item class="checkNum">
                <yd-input slot="left" required class="inputS" :show-success-icon="false" :show-error-icon="false"  v-model="input1" max="20" placeholder="请输入手机号"></yd-input>
            </yd-cell-item>
            <yd-cell-item class="checkNum">
                <yd-input slot="left" required class="inputS" v-model="input2" :show-success-icon="false" :show-error-icon="false" placeholder="请输入短信验证码"></yd-input>
                <yd-button  type="hollow" class="getCheck" slot="right">获取验证码</yd-button>
            </yd-cell-item>
       </yd-cell-group>
        <yd-button-group class="butPad">
            <yd-button size="large" type="primary" class="nextBut forgetNext">下一步</yd-button>
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
.forgetNext{
  background: #EAEAEA;
  color: #B4B4B4
}
</style>
