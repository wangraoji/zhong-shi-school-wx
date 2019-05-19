<template>
  <div class="exclusiveView">
    <el-row v-for="(item,inx) of iData" :key="inx">
      <el-row class="i-t">{{ item.title}}</el-row>
      <div @click="toPath(item)">
        <el-row class="i-r mb-10" :gutter="10">
          <el-col :span="10" class="i-img">
            <!-- 如果img 存在 并且 不等于 “” 读传入 -->
            <img :src="item.listimg" class="w100" v-if="item.listimg && item.listimg !== ''">
            <!-- 如果img 存在 且 等于 “” 读默认 -->
            <img :src="defaultImg" class="w100" v-if="item.listimg && item.listimg === ''">
            <!-- 如果img 不存在 直接读默认 -->
            <img :src="defaultImg" class="w100" v-if="!item.listimg">
          </el-col>
          <el-col :span="14" class="i-cont">{{ item.content }}</el-col>
        </el-row>
      </div>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getContentsList } from "@/api/contentsApi";
@Component
export default class ExclusiveView extends Vue {
  log: any;
  defaultImg: any = require("@/assets/test.jpg");
  iData: any = [];
  mounted() {
    this.getContentsListFn();
  }
  async getContentsListFn() {
    let res: any = await getContentsList();
    if (res.ok) {
      this.iData = res.data;
    } else {
    }
  }
  toPath(item: any) {
    this.$router.push({
      name: "viewDetail",
      query: { id: item.id }
    });
  }
}
</script>
<style lang="scss" scoped>
.exclusiveView {
  padding: 0 20px;
  .i-t {
    font-size: 18px;
    margin-bottom: 15px;
    margin-top: 15px;
    .i-t-h {
      color: red;
    }
  }
  .i-r {
    padding-bottom: 10px;
    border-bottom: 1px solid #ebeef5;
    .i-img {
      img {
        width: 100%;
        border-radius: 3px;
      }
    }
    .i-cont {
      font-size: 16px;
    }
  }
}
</style>
