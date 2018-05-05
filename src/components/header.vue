<template>
    <div class="baseHead">
        <yd-navbar slot="navbar"  :fontsize='headObj.fontsize' :color='headObj.color' :title='headObj.title' class="htitle">
            <router-link to="#" slot="left">
                <yd-navbar-back-icon></yd-navbar-back-icon>
            </router-link>
            <router-link :to='headObj.rightTo' slot="right" v-show='headObj.show'>
                <span>{{headObj.righttext}}</span>
            </router-link>
        </yd-navbar>
    </div>
</template>

<script>
//这是公共的头部，父级要传对象过来
export default {
  props: {
    headObj: {
      show: {
        type: Boolean
      },
      fontsize: {
        type: String
      },
      title: {
        type: String
      },
      color: {
        type: String
      },
      righttext: {
        type: String
      },
      rightTo: {
        type: String,
        default: '#'
      }
    }
  }
}
</script>

<style>
.baseHead {
  width: 100%;
  height: 1.28rem;
}
.yd-navbar-item a span i::before {
  font-size: 0.26rem;
}
.yd-navbar-item a {
  font-size: 14px;
  color: #666;
  font-family: "PingFang-SC";
  font-weight: normal;
}
.yd-navbar-center-title {
  font-weight: bold;
  font-family: "PingFang-SC";
}
</style>
