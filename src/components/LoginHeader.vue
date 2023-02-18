<template>
  <div id="lh">
    <ul class="login" v-show="isNotLogin">
      <li>
        <router-link to="/Login">登录</router-link>
      </li>
      <li>
        <router-link to="/Register">注册</router-link>
      </li>
    </ul>

        <ul class="login" v-if="!isNotLogin">
          <li>{{ this.$store.state.username }}</li>
        </ul>

  </div>
</template>

<script>
export default {

  data() {
    return {
      isNotLogin: this.$store.state.isNotLogin
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#lh
  .user
    width: 120px
    height: 40px
    line-height 40px
    font-size 12px
    text-align: center
    position relative

    &:hover
      .username
        color: #ff6700
        background-color: #fff

      .selector
        padding: 7px 0
        height 120px

    .username
      display: block
      width: 100%
      height: 100%
      line-height: 40px
      color: #b0b0b0
      position relative
      z-index 201

    .selector
      position absolute
      left 0
      top 40px
      width: 100%
      z-index 200
      box-shadow 0 2px 10px rgba(0, 0, 0, 0.15)
      height: 0
      background-color: #fff;
      overflow hidden
      transition all 0.2s

      li
        width 100%
        height 30px

        &:hover
          a
            color: #ff6700
            background-color: #fafafa

        a
          display: block
          width 100%
          height 100%
          line-height: 30px
          padding: 0
          border 0

  .login
    display: flex
    align-items: center
    width: 160px
    height: 60px

    li
        display: flex
        align-items: center
        height: 24px
        font-size: 20px
        color: #b0b0b0
        padding: 0 8px
        border-right: 2px solid #b0b0b0
        &:last-of-type
          border-right: none


</style>
