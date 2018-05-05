<template>
    <div>
        <yd-cell-group>
           <!--  <baseHeader :rightObj='rightObj'/> -->
            <yd-cell-item>
                <span slot="left">用户名：</span>
                <yd-input slot="right" required v-model="input1" max="20" placeholder="请输入用户名"></yd-input>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">密码：</span>
                <yd-input slot="right" type="password" v-model="input2" placeholder="请输入密码"></yd-input>
            </yd-cell-item>
       </yd-cell-group>
       <p class='ver'>
           <router-link to="">验证码登录</router-link>
       </p>
       <yd-button size="large" type="primary">登录</yd-button>
       <p class="forgetpa">忘记密码</p>
    </div>
</template>
<script type="text/babel">
// 登录
    // import baseHeader from '@/components/header'
    export default {
        name: "Login",
        data() {
            return {
                input1: '', 
                input2: '',
                rightObj:{
                    show:true,
                    rightTo:"/Rep",
                    rightText:'注册'
                }
            }
        },
        // components:{
        //     baseHeader
        // }
    }
</script>

<style scoped>
    .forgetpa{
        position:absolute;
        text-align:center;
        bottom:30px;
        width:100%;

    }
    .ver{
        text-align:right;
        margin-right: 0.3em;
    }
</style>

