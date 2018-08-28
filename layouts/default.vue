<template>
  <div>
    <nuxt/>
    <Login/>
    <!-- <Toolbar/> -->
  </div>
</template>

<script>
  import Login from '~/components/Login/index.vue'

  export default {
    name: 'default-layout',
    data() {
      return {}
    },
    components: {
      Login
    }
  }
</script>
