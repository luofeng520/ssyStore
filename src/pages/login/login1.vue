<template>
    <div class="loginwrap">
        <baseHeader :headObj='headObj'/>
        <yd-cell-group class="noneB">
            <yd-cell-item class="checkNum">
                <yd-input slot="left" required class="inputS" :show-success-icon="false" :show-error-icon="false"  v-model="input1" max="20" placeholder="请输入用户名"></yd-input>
            </yd-cell-item>
            <yd-cell-item class="checkNum">
                <yd-input slot="left" required class="inputS" v-model="input2" :show-success-icon="false" :show-error-icon="false" placeholder="请输入验证码"></yd-input>
                <yd-button  type="hollow" class="getCheck" slot="right">获取验证码</yd-button>
            </yd-cell-item>
       </yd-cell-group>
       <p class='ver'>
           <router-link to="">使用密码登录</router-link>
       </p>
        <yd-button-group class="butPad">
            <yd-button size="large" type="primary" class="nextBut">登录</yd-button>
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
.ver {
  text-align: right;
  margin-right: 0.3rem;
}
.ver a{
  color: #333
}
.getCheck{
  border: .5px solid #7636FC;
  color: #7636FC;
  border-radius: 3px;
}
</style>
