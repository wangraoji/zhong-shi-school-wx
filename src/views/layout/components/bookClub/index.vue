<template>
  <div class="bookClub">
    <div v-for="(item,i) of bookClubData" :key="i" class="bookClubBox" @click="toPath(item)">
      <el-row class="b-title mb-10">{{ item.title }}</el-row>
      <el-form ref="form" :model="item" label-position="right" label-width="100px">
        <el-form-item label="举办方式：">{{ item.kind }}</el-form-item>
        <el-form-item label="举办时间：">{{ item.stime }}</el-form-item>
        <el-form-item label="负责人：">{{ item.contact }}</el-form-item>
        <el-form-item label="志愿者人数：">{{ item.hcount }}</el-form-item>
        <el-form-item label="听众：">{{ item.lcount }}</el-form-item>
        <el-form-item label="发布时间：">{{ item.ptime }}</el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getReadingList } from "@/api/readingApi";
import _ from "lodash";
@Component
export default class BookClub extends Vue {
  bookClubData: any = [
    {
      title: "全民读书活动之新华书店篇",
      stime: "2019-06-01",
      kind: "线上",
      uid: "1"
    }
  ];

  toPath(item: any) {
    this.$router.push({
      name: "bookClubDetail",
      query: { uid: item.uid }
    });
  }
  async getReadingListFn() {
    let res: any = await getReadingList();
    if (res.ok) {
      this.bookClubData = _.cloneDeep(res.data);
    } else {
      alert(res.msg);
    }
  }
}
</script>
<style lang="scss" scoped>
.bookClub {
  padding: 0 20px;
  .bookClubBox {
    padding-bottom: 10px;
    margin: 15px 0;
    border-bottom: 1px solid #ebeef5;
    .b-title {
      font-size: 18px;
    }
  }
  /deep/ .el-form-item {
    margin-bottom: 0px !important;
  }
}
</style>
