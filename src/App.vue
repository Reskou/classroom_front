<template>
  <div id="app">
    <router-view></router-view>
    <Footer v-show="!$route.meta.notFooter"/>
  </div>
</template>

<script>
  import Footer from './components/Footer.vue'

  export default {
    components: {
      Footer
    }
  }
</script>

<style lang="stylus">
  #app
    width: 100%
    height: 100%
</style>
