<template>
    <div class="loginwrap">
        <baseHeader :headObj='headObj'/>
        <yd-cell-group class="noneB">
            <yd-cell-item class="checkNum">
                <yd-input slot="left" required class="inputS" :show-success-icon="false" :show-error-icon="false"  v-model="input1" max="20" placeholder="请输入用户名"></yd-input>
            </yd-cell-item>
            <yd-cell-item class="checkNum">
                <yd-input slot="left" required type="password" class="inputS" v-model="input2" :show-success-icon="false" :show-error-icon="false" placeholder="请输入验证码"></yd-input>
            </yd-cell-item>
       </yd-cell-group>
       <p class='ver'>
           <router-link to="">使用短信验证码登录</router-link>
       </p>
        <yd-button-group class="butPad">
            <yd-button size="large" type="primary" class="nextBut">登录</yd-button>
        </yd-button-group>
       <p class="forgetpa">忘记密码</p>
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
        show: true,
        rightTo: '/reg1',
        rightText: '注册',
        title: '登录',
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
.forgetpa {
  position: absolute;
  text-align: center;
  bottom: 30px;
  width: 100%;
}
.ver {
  text-align: right;
  margin-right: 0.3rem;
}
</style>
