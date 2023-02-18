<template>
  <div class="top-side-left">
    <ul class="side-left">
      <li class="side-item"
          v-for="item in sideItems">
        {{ item.content }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Aside",
  data() {

    return {

      sideItems: [
        {type: 'phones', content: '手机 电话卡'},
        {type: 'computer', content: '笔记本 平板'},
        {type: 'box', content: '电视 盒子'},
        {type: 'router', content: '路由器 智能硬件'},
        {type: 'power', content: '移动电源 电池 插线板'},
        {type: 'headset', content: '耳机 音响'},
        {type: 'foil', content: '保护套 贴膜'},
        {type: 'line', content: '线材 支架 存储卡'},
        {type: 'bags', content: '箱包 服饰'},
        {type: 'rabbit', content: '兔米 生活周边'}],
    }

  }
}
</script>

<style scoped>
.side-left {
  margin: 0;
  padding: 0;
  width: 235px;
  height: 420px;
  list-style: none;}

.side-item {
  width: 100%;
  height: 42px;
  line-height: 42px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  cursor: pointer;
}

</style>
