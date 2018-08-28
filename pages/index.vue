<template>
	<section class="test">
			test
      <button @click.prevent="showLogin()">登录</button>
      {{'125454878787'|moment('YYYY-MM-DD')}}
      {{'125454878787'|cutstr(5)}}

	</section>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      showLogin (url) {
        this.$store.commit('SET_DIALOGSTATUS', true)
        
      }
    }
  }
</script>
<style scoped>
  @import './index.scss';
</style>
