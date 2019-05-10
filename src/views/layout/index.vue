<template>
  <div class="layout h100" id="layout">
    <my-row class="top-nav" v-if="showTopNav">
      <el-col :span="6">
        <span @click="()=>$router.push({path:'/home'})">
          <svg-icon icon-class="home"/>
        </span>
      </el-col>
      <el-col :span="10">
        <input type="text" class="search-input w100" placeholder="请输入内容">
      </el-col>
      <el-col :span="2">
        <span @click="toSearch">
          <svg-icon icon-class="search"/>
        </span>
      </el-col>
      <el-col :span="6" class="text-right">
        <span>
          <svg-icon icon-class="menu"/>
        </span>
      </el-col>
    </my-row>
    <my-row class="main">
      <router-view/>
    </my-row>
    <my-row class="footer-tab" v-if="showFooterNav">
      <footer-tab/>
    </my-row>
    <div class="backTop" v-if="toTopIsShow" @click="backTop">
      <svg-icon icon-class="backTop"/>
      <br>顶部
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { footerTab } from "@/components";
@Component({
  components: {
    footerTab
  }
})
export default class Layout extends Vue {
  log: any;
  toTopIsShow: boolean = false; //控制回到顶部按钮是否显示
  showTopNav: boolean = false;
  showFooterNav: boolean = true;
  input: string = ""; // 搜索内容
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
    this.showNav(this.$route.matched[0].path);
  }
  // 监视路由
  @Watch("$route")
  onChildChanged(val: any, oldVal: any) {
    this.showNav(val.matched[0].path);
  }
  showNav(path: any) {
    // 表示显示底部
    if (path === "") {
      this.showTopNav = false;
      this.showFooterNav = true;
    }
    // 表示显示头部
    else {
      this.showTopNav = true;
      this.showFooterNav = false;
    }
  }
  handleScroll() {
    let clientHeight =
      document.documentElement.clientHeight || document.body.clientHeight;
    let layout: any = window.document.getElementById("layout");
    let scrollHeight = layout.scrollHeight;
    let scrollTop = layout.scrollTop; // div 到头部的距离
    this.toTopIsShow = false;
    // div 到头部的距离 + 屏幕高度 = 可滚动的总高度
    if (scrollTop + clientHeight > scrollHeight - 50) {
      this.toTopIsShow = true;
    }
  }
  // 搜索按钮
  toSearch() {
    alert(`搜索按钮`);
  }
  // 返回顶部
  backTop() {
    window.document.body.scrollTop = 0;
    let layout: any = window.document.getElementById("layout");
    let inx = 30;
    let tempScroll = setInterval(() => {
      if (layout.scrollTop > 0) {
        layout.scrollTop = layout.scrollTop - inx;
      }
      if (layout.scrollTop === 0) {
        clearInterval(tempScroll);
      }
    }, 10);
  }

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll); //  离开页面清除（移除）滚轮滚动事件
  }
}
</script>
<style lang="scss" scoped>
$bdc: 1px solid #ebeef5;
.layout {
  // background: #F5F5F5;
  overflow: auto;
  .top-nav {
    position: sticky;
    top: 0;
    z-index: 1;
    background: #fff;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    border-bottom: 1px solid #ebeef5;
    padding: 0 20px;
    .search-input {
      box-sizing: border-box;
      outline: none;
      border: 0;
      border-bottom: $bdc;
      padding: 0 10px;
    }
  }
  .main {
    margin-bottom: 32px;
    .aaa {
      height: 1000px;
    }
  }
  .footer-tab {
    position: fixed;
    bottom: 0;
    background: #fff;
    height: 30px;
    line-height: 30px;
    text-align: center;
    z-index: 2;
    border-top: $bdc;
  }
  .backTop {
    position: fixed;
    width: 40px;
    height: 40px;
    bottom: 100px;
    right: 10px;
    text-align: center;
    font-size: 14px;
    border: 1px solid #c9c9c9;
    background: #fff;
    border-radius: 50%;
    z-index: 30;
  }
}
</style>

