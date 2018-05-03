<template>
    <div>
        <yd-cell-group>
            <yd-navbar title="登录"></yd-navbar>
            <yd-cell-item>
                <span slot="left">用户名：</span>
                <yd-input slot="right" required v-model="input1" max="20" placeholder="请输入用户名"></yd-input>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">密码：</span>
                <yd-input slot="right" type="password" v-model="input2" placeholder="请输入密码"></yd-input>
            </yd-cell-item>
       </yd-cell-group>
       <yd-button size="large" type="primary">primary</yd-button>
    </div>
</template>
// 登录
<script type="text/babel">
    export default {
        name: "Login",
        data() {
            return {
                input1: '',
                input2: ''
            }
        }
    }
</script>

<style scoped>

</style>

