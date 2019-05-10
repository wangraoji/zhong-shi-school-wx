<template>
  <div class="home h100">
    <my-row class="main">
      <div>beg</div>
      <el-button>测试</el-button>
      <div class="aaa" id="aaa">nnn</div>
      <div>end</div>
    </my-row>
    <my-row class="footer-tab">
      <footer-tab/>
    </my-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { footerTab } from "@/components";
@Component({
  components: {
    footerTab
  }
})
export default class Home extends Vue {

}
</script>
<style lang="scss" scoped>
$bdc: 1px solid #ebeef5;
.home {
  // background: #F5F5F5;
  .main {
    margin-bottom: 30px;
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
    // .f-t-c {
    //   border-right: $bdc;
    //   border-radius: 5px;
    //   :last-child {
    //     border-right: 0;
    //   }
    // }
  }
}
</style>

