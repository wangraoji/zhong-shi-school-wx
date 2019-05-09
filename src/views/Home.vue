<template>
  <div class="home">
    <el-row class="main">
      <div>beg</div>
      <div class="aaa">nnn</div>
      <div>end</div>
    </el-row>
    <el-row class="footer-tab w100">111</el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
.home {
  .main {
    margin-bottom: 30px;
    .aaa {
      height: 1000px;
    }
  }
  .footer-tab {
    height: 30px;
    position: fixed;
    bottom: 0;
    background: red;
  }
}
</style>

