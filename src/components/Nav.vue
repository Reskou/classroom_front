<template>
  <nav id="nav">
    <div class="banner_x center">
      <a href="javascript:;" class="logo"></a>
      <div class="fr">
        <LoginHeader/>
      </div>
    </div>
  </nav>
</template>
<script>
  import {mapState} from 'vuex';
  export default {
    computed:{
      ...mapState(["hotSearch"])
    },
    mounted(){
      this.$store.dispatch('getHotSearch');
    }
  };
</script>
<style lang="stylus" scoped>
  #nav
    width: 100%
    height: 100px
    flex-shrink: 0
    position relative
    background-color: rgb(93, 178, 208);
    //border-bottom 1px solid
    .banner_x
      width: 1600px
      height: 100%
      display flex
      & > a
        display: block
        height: 100%
      .logo
        width: 75px
        margin-left 80px
        text-indent: -10000px
        background: url("/static/image/nav/logo_top.jpg") no-repeat
        background-size: 100%
        background-position: center

      .list
        display: flex
        height: 100%
        & > li
          display: flex
          align-items: center
          margin: 0 10px
          font-size: 16px
          &:hover
            a
              color: #ff6700

      .fr
        display: flex
        justify-content flex-end
        align-items: center
        height: 100%
        flex-grow 1
        .button
          box-sizing: border-box
          width: 50px
          height: 50px
          background-color: #fff
          border: 1px solid #ccc
          text-align: center
          line-height: 50px
          font-size: 18px
          font-weight: bold
          cursor: pointer
          &:active
            background-color: #ff6700
            color: #fff
        .search
          position relative
          .text
            box-sizing: border-box
            width: 250px
            height: 50px
            border: 1px solid #ccc
            padding: 0 10px
            &:focus
              outline: none
              border 1px solid #ff6700
              ~ .keyword_list
                display: block
          .search_hot
            position absolute
            top: 16px
            right: 12px
            a
              float left
              display block
              font-size 12px
              height 18px
              line-height 18px
              margin-left 5px
              padding 0 5px
              background-color: #eee
              color #757575
              transition all .2s
              &:hover
                color #fff
                background-color: #ff6700
          .keyword_list
            display none
            position absolute
            top: 50px
            left: 0
            z-index 100
            width 250px
            box-sizing border-box
            border 1px solid #ff6700
            li
              position relative
              box-sizing border-box
              width: 100%
              height 30px
              padding 6px 15px
              background-color: #fff
              &:hover
                background-color: #fafafa
              a
                display block
                width 100%
                height 100%
                font-size 12px
                .result
                  float: right
                  color: #b0b0b0

</style>
