<template>
  <div class="viewDetail">
    <el-row class="n-img mb-10">
      <!-- 如果img 存在 并且 不等于 “” 读传入 -->
      <img :src="item.listimg" class="w100" v-if="item.listimg && item.listimg !== ''">
      <!-- 如果img 存在 且 等于 “” 读默认 -->
      <img :src="defaultImg" class="w100" v-if="item.listimg && item.listimg === ''">
      <!-- 如果img 不存在 直接读默认 -->
      <img :src="defaultImg" class="w100" v-if="!item.listimg">
    </el-row>
    <el-row class="mb-10">
      <h3>{{ item.title }}</h3>
    </el-row>
    <el-row class="n-content">{{item.content}}</el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getContents } from "@/api/contentsApi";
@Component
export default class viewDetail extends Vue {
  log: any;
  defaultImg: any = require("@/assets/test.jpg");
  item: any = {};
  mounted() {
    this.getContentsFn(this.$route.query.id);
  }
  async getContentsFn(id: any) {
    let res: any = await getContents(id);
    if (res.ok) {
      this.item = res.data.Model;
    } else {
    }
  }
}
</script>
<style lang="scss" scoped>
.viewDetail {
  padding: 10px 20px;
  font-size: 16px;
}
</style>
