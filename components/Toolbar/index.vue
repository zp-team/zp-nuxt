<template>
  <section class="tool-bar">
    <ul>
      <li>
        <div class="trige">
          <i class="icon iconfont icon-cascades"></i>
          <p class="text">订阅号</p>
        </div>

        <div class="code pop">
          <img src="~assets/img/icons/code.png" alt=""/>
        </div>
      </li>
      <li>
        <div class="trige">
          <i class="icon iconfont icon-phone"></i>
          <p class="text">热线</p>
        </div>

        <div class="concat pop">
          <p>客服热线：</p>
          <p>400-xxx-xxxx</p>
        </div>
      </li>
      <li >
        <div class="trige backTop" @click="backTop()">
          <i class="icon iconfont icon-fold"></i>
          <p class="text">顶部</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        scrollTag: false,
        timer: null,
        scroll: '',
        speed: 100
      }
    },
    mounted () {
      this.scrollTop()
      window.addEventListener('scroll', this.scrollTop, false)
    },

    destroyed () {
      window.removeEventListener('scroll', this.scrollTop, false)
    },

    methods: {
      backTop () {
        clearInterval(this.timer)
        this.scroll = document.body.scrollTop || document.documentElement.scrollTop
        this.timer = setInterval(() => {
          if (this.scroll < 0) {
            clearInterval(this.timer)
            return false
          }
          this.scroll -= this.speed
          window.scrollTo(0, this.scroll)
        }, 16)
      },
      scrollTop () {
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        if (scrollTop > 500) {
          this.scrollTag = true
        } else {
          this.scrollTag = false
        }
      }
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../../assets/scss/element-variables";
  @import './index';
</style>
