<template>
  <content id="content">
    <Nav/>
    <div id="banner">

      <AdvSwiper />
    </div>


    <div id="recommend" >
      <Recommend />
    </div>
  </content>
</template>

<script>
import AdvSwiper from '../../components/AdvSwiper.vue'
import Recommend from '../../components/Recommend.vue'
import aside from "../../components/Aside";

export default {
  components: {
    AdvSwiper,
    Recommend,
    aside
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
#content
  //display: flex
  justify-content: center
  flex-wrap: wrap
  width: 100%
  background-color: firebrick;

  #banner
    width 1600px
    height 375px
    margin 0 auto

  #recommend
    margin: 0 auto
    width 1600px


.side-left {
  margin: 0;
  padding: 0;
  width: 235px;
  height: 220px;
  list-style: none;
  background-color: firebrick
  display: inline-block
}

</style>
