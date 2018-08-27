<template>
  <div>
    <div class="container">

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

</style>
