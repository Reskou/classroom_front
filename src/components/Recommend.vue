<template>
  <div id="recommend">
    <h2>为你推荐</h2>
    <ul>
      <RecommendCard :picture="des.address" :name="des.name" :description="des.description" :price="des.price" :evaluation-num="des.evaluationNum"  v-for="des in descriptionList" @click.native="goToVideo"></RecommendCard>
    </ul>
  </div>
</template>

<script>
import RecommendCard from './RecommendCard.vue'

export default {
  components: {
    RecommendCard
  },
  data() {

    return {
      descriptionList: [
        {
          address: '/static/image/recommend/HBase课程.jpg',
          name: 'HBase2.x教程',
          price: '500',
          description: 'HBase是一个面向列式存储的分布式数据库，底层存储基于 HDFS 实现，集群管理基于 ZooKeeper实现。',
          evaluationNum: '11'
        },
        {
          address: '/static/image/recommend/HTML课程.jpg',
          name: 'HTML5实战',
          price: '700',
          description: '本套视频是HTML5的实战视频，我们将综合HTML5的各个方面来构建一个fullpage（全屏滚动）的应用。',
          evaluationNum: '11'
        },
        {
          address: '/static/image/recommend/Java课程.jpg',
          name: 'Java基础2023',
          price: '100',
          description: '2023新版Java视频教程震撼来袭！',
          evaluationNum: '11'
        },
        {
          address: '/static/image/recommend/Kafka课程.jpg',
          name: 'Kafka3.x教程',
          price: '344',
          description: '！Kafka是一种高吞吐量的分布式发布订阅消息系统，它可以处理消费者在网站中的各种动作流数据。',
          evaluationNum: '11'
        },
        {
          address: '/static/image/recommend/Mysql课程.jpg',
          name: 'MySQL经典教程',
          price: '122',
          description: '数据库就像一棵常青的技能树，无论是初级程序员还是CTO、首席架构师都能从中汲取足够的技术养料。',
          evaluationNum: '11'
        }, {
          address: '/static/image/recommend/Scala课程.jpg',
          name: 'Scala教程',
          price: '3213',
          description: 'Scala是一门基于JVM的静态类型高级语言，兼有面向对象和函数式编程两大特点，可视作Java的扩展和延申，不仅运行效率高且语法简洁高效，对程序员更为友好。',
          evaluationNum: '11'
        },
        {
          address: '/static/image/recommend/Spark课程.jpg',
          name: 'Spark教程',
          price: '2132',
          description: '大数据领域中杀手级的应用计算框架：Spark视频教程。',
          evaluationNum: '11'
        },
        {
          address: '/static/image/recommend/SpringMVC课程.png',
          name:'SpringMVC教程',
          price:'232',
          description:'本套视频教程从数据仓库的架构搭建入手，穿插数据仓库的重要理论知识，包括数仓建模、范式理论和同步策略等，让你知其然更知其所以然。',
          evaluationNum:'11'
        },
        {
          address: '/static/image/recommend/Superset.png',
          name:'Superset教程',
          price:'333',
          description:'Superset是一款优秀易用的开源数据可视化平台，功能强大且兼容性强，可对接多种数据源，图标展示形式丰富多样，支持自定义仪表盘。',
          evaluationNum:'11'
        },
        {
          address: '/static/image/recommend/电商数仓.jpg',
          name:'电商数仓2.0',
          price:'222',
          description:'本套视频教程从数据仓库的架构搭建入手，穿插数据仓库的重要理论知识，包括数仓建模、范式理论和同步策略等，让你知其然更知其所以然。',
          evaluationNum:'11'
        },


      ]


    }

  },
  methods:{
    goToVideo(){
      this.$router.push('/videoShow')
    }


  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#recommend
  width: 1226px
  position relative
  flex-shrink: 0
  height: 672px
  margin-top: 20px
  background-color: #f5f5f5

  & > h2
    height: 58px
    line-height: 58px

  .more
    position absolute
    top 18px
    right 30px

    &:hover
      color red

  ul
    display: flex
    height: 614px
    justify-content: space-between
    align-content: space-between
    flex-wrap: wrap
</style>
