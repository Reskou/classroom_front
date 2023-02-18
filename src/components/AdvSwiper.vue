<template>
  <div>
    <div class="top-side-left" style=" float: left" >
      <ul class="side-left">
        <li class="side-item"
            v-for="item in sideItems">
          {{ item.content }}
          <img src="../../static/image/nav/右箭头.png" class="imgright" @click="">
        </li>
      </ul>
    </div>
    <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="item in list_img" :key="item">
        <img :src="item.url" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style>
.el-carousel{
  margin-top: 10px;
  height: 100%;
  width: 80%;
}
.el-carousel__item img {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  height: 100%;
  width: 100%;
  margin: 0 auto;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.side-left {
  /*margin-left: 100px;*/
  padding: 0;
  font-size: 20px;
  width: 276px;
  height: 365px;
  list-style: none;
  background-color: rgb(64, 158, 255);
  display: inline-block;
  /*border: solid 1px;*/
  border-radius: 10px;
  /*opacity: 0.8*/
}

.side-item {

  height: 33.3333333333333333333%;
  text-align: center;
  line-height: 120px;
  /*border: solid 1px;*/
  border-bottom: 1px solid #ffffff;

}

.side-item:hover {
  background-color: rgb(232, 242, 254);
}

.imgright{
  float: right;
  margin-top: 48px;
  margin-right: 30px;
  height: 25px;
  width: 25px;
}


</style>

<script>
  import Swiper from "swiper"

  export default {
    data(){
      return{
        list_img: [
          { url: '/static/image/swiper/swiper1.jpg' },
          { url: '/static/image/swiper/swiper2.jpg' },
          { url: '/static/image/swiper/swiper3.jpg' },
        ],
        sideItems: [
          {type: 'java', content: 'Java学科'},
          {type: 'front', content: '前端学科'},
          {type: 'bigdata', content: '大数据学科'},
        ]
      }
    },
    mounted() {
      this.swiper = new Swiper(".swiper-container", {
        loop: true, // 循环模式选项
        autoplay: {
          delay: 3000, //3秒切换一次
          disableOnInteraction: false
        },
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        },
        observer: true,
        observeParents: true,
        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      })
    },
  }
</script>
