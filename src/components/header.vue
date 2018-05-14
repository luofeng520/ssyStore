<template>
    <div class="baseHead">
        <yd-navbar slot="navbar"  :fontsize='headObj.fontsize' :color='headObj.color' :title='headObj.title' class="htitle">
            <router-link to="#" slot="left">
                <yd-navbar-back-icon></yd-navbar-back-icon>
            </router-link>
            <router-link :to='headObj.rightTo' slot="right" v-show='headObj.show'>
                <span class="rtext">{{headObj.rightText}}</span>
            </router-link>
        </yd-navbar>
    </div>
</template>

<script>
export default {
  props: {
    headObj: {
      show: {
        type: Boolean
      },
      fontsize: {
        type: String,
        default: '0.3rem'
      },
      title: {
        type: String
      },
      color: {
        type: String
      },
      rightText: {
        type: String
      },
      rightTo: {
        type: String,
        default: ''
      }
    }
  }
}
</script>

<style>
.baseHead {
  width: 100%;
  height: 1rem;
  margin-bottom: 10px;
}
.yd-navbar-item a span i::before {
  font-size: 0.24rem;
}
.yd-navbar-item a {
  font-size: 0.14rem;
  color: #666;
  font-family: "PingFang-SC";
  font-weight: normal;
}
.yd-navbar-center-title {
  font-weight: bold;
  font-family: "PingFang-SC";
}
.navbar-bottom-line-color:after {
  box-shadow: 0px 0px 5px #1f1f20!important;
}
.rtext{
  font-size: 0.26rem;
}
</style>
