<template>
  <div class="video">
    <d-player ref="player" :options="dplayerOptions"></d-player>
    <aside></aside>
  </div>
</template>

<script>
import AdvSwiper from "./AdvSwiper";
import Recommend from "./Recommend";
import aside from "./Aside";

export default {
  components: {
    AdvSwiper,
    Recommend,
    aside
  },
  data() {
    return {
// 针对部分options属性进行配置
      dplayerOptions: {
        theme: '#b7daff',  // 风格颜色，例如播放条，音量条的颜色
        loop: false,  // 是否自动循环
        lang: 'zh-cn',  // 语言，'en', 'zh-cn', 'zh-tw'
        screenshot: true,  // 是否允许截图（按钮），点击可以自动将截图下载到本地
        hotkey: true,  // 是否支持热键，调节音量，播放，暂停等
        preload: 'auto',  // 自动预加载
        volume: 0.7,  // 初始化音量
        // logo: '/static/',  // 在视频左脚上打一个logo
        video: {
          url: '../../static/video/[阳光电影-www.ygdy8.com]尼尔机械纪元-01.mp4', // 播放视频的路径
          defaultQuality: 0,  // 默认是HD
          pic: "https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png",  // 视频封面图片
          // thumbnails: ''  // 进度条上的缩略图,需要通过dplayer-thumbnails来生成
        },
        subtitle: {
          url: 'http://www.baidu.com',
          fontSize: '20px',
          bottom: '50%',
        },
        contextmenu: [  // 右键菜单
          {
            text: 'custom1',
            link: 'https://www.bilibili.com'
          },
          {
            text: 'custom2',
            click: (player) => {
              console.log(player);
            }
          }
        ],
        highlight: [  // 进度条时间点高亮
          {
            text: '10M',
            time: 600,
          },
          {
            text: '20M',
            time: 1200,
          },
        ],
      }
    }
  },
  methods: {},
}
</script>

<style>
  .video {
    text-align: center;
    margin: 0 auto;
    height: 1000px;
    width: 1200px;
  }
</style>
