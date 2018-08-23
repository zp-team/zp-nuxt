<template>
  <div>
    <div class="container">
      <section class="error">
        <div class="layout error-page">
          <div class="error-info">
            <img src="~/assets/img/404.png"/>
            <h2>404 ERROR！</h2>
            <h4>很不幸，你探索到了一个未知领域！</h4>
            <p>系统将会在 <span class="color-da3130">{{second}}</span> 秒后自动跳转至
              <nuxt-link to="/">聚贸农产品首页</nuxt-link>
            </p>
          </div>

          <div class="error-cause">
            <div>
              <span class="cause-left">可能是因为：</span>
              <div class="cause-right">
                您要查找的页面可能已被转移、更新或删除.<br/>
                您检查您输入的地址是否正确。<br/>
                过期的书签或搜索引擎链接
              </div>
            </div>
            <p>感谢您使用本站，如有疑问 请联系客服：<span class="phone">{{ localPhone }}</span></p>
          </div>
        </div>
      </section>
    </div>

  </div>
</template>

<script>
  import website from '~/config/website'

  export default {
  	data () {
  		return {
  			second: 5,
  			localPhone: website.localPhone
  		}
  	},
  	components: {
  	},
  	mounted () {
  		let showTime = () => {
  			if (this.second > 0) {
  				this.second--
  			} else {
  				clearTimeout(showTime)
  				this.$router.push({path: '/'})
  				return
  			}
  			setTimeout(showTime, 1000)
  		}
  		showTime()
  	},
  	destroyed () {

  	},
  	methods: {}
  }
</script>

<style lang="scss" type="text/scss" rel="stylesheed/scss" scoped>
  .container {
    background-color: #fff;
    margin-top: 20px;
  }

  .error-page {
    text-align: center;
    padding-bottom: 40px;
    .error-info {
      width: 660px;
      margin: 0 auto;
      padding: 20px 0;
      border-bottom: 1px solid #dedede;

      h2 {
        font-size: 36px;
        letter-spacing: 0;
        line-height: 36px;
        color: #f5a623;
        font-weight: normal;
      }
      h4 {
        font-size: 30px;
        color: #bcbcbc;
        margin: 15px 0;
        font-weight: normal;
      }
      p {
        font-size: 14px;
        color: #9e9e9e;
        a {
          color: #02a01b;
          &:hover {
            text-decoration: underline;
          }
        }
      }

    }
    .phone {
      color: #02a01b;
    }
    .error-cause {
      width: 660px;
      margin: 30px auto 0;
      text-align: left;
      color: #9e9e9e;
      .cause-left {
        width: 245px;
        text-align: right;
        vertical-align: top;
        display: inline-block;
        color: #6e6e6e;
      }
      .cause-right {
        width: 320px;
        text-align: left;
        display: inline-block;
      }
      p {
        margin: 15px 0;
        font-size: 16px;
        text-align: center;
      }
    }

    .color-da3130 {
      color: #f5a623
    }

  }

</style>
