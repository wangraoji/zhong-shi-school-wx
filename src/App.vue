<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class App extends Vue {
  log: any;
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  }
  handleScroll() {
    // let scrollTop = document.body.scrollTop;
    // let clientHeight = document.body.clientHeight;
    // console.log(
    //   "shoplist scrollTop %d, clientHeight %d",
    //   scrollTop,
    //   clientHeight
    // );
    // 屏幕高度
    let clientHeight =
      document.documentElement.clientHeight || document.body.clientHeight;
      // this.log(clientHeight);
    // // 设备/屏幕高度
    let scrollObj:any = document.getElementById('app'); // 滚动区域
    let scrollTop = scrollObj.scrollTop; // div 到头部的距离
    console.log(scrollTop);
    // let scrollHeight = scrollObj.scrollHeight; // 滚动条的总高度
    // //滚动条到底部的条件
    // if (scrollTop + clientHeight == scrollHeight) {
    //   // div 到头部的距离 + 屏幕高度 = 可滚动的总高度
    // }
    // console.log(scrollTop);
    // console.log(e.target.scrollTop);
    // let tempDocument: any = this.$refs.main;
    // console.log(tempDocument.$el.scrollTop);
    // let cuttent: any = document.activeElement;
    // console.log(cuttent.scrollTop);
  }
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll); //  离开页面清除（移除）滚轮滚动事件
  }
}
</script>
