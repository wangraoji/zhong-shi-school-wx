<template>
  <div class="bookClubDetail">
    <el-row class="b-title mb-10">{{ item.title }}</el-row>
    <el-row class="b-stitle mb-10">{{ item.stitle }}</el-row>
    <el-form ref="form" :model="item" label-position="left" label-width="100px">
      <el-form-item label="作者　　：">{{ item.anthor }}</el-form-item>
      <el-form-item label="负责人　：">{{ item.contact }}</el-form-item>
      <el-form-item label="举办时间：">{{ item.stime }}</el-form-item>
      <el-form-item label="举办方式：">
        <span
          v-if="item.byinter.do && item.byoutline.do"
        >{{ item.byinter.label + ' + ' + item.byoutline.label}}</span>
        <span v-if="item.byinter.do && !item.byoutline.do">{{ item.byinter.label }}</span>
        <span v-if="!item.byinter.do && item.byoutline.do">{{ item.byoutline.label }}</span>
      </el-form-item>
      <el-form-item label="发布时间：">{{ item.ptime }}</el-form-item>
    </el-form>
    <el-row class="mb-5">
      <el-form ref="form" :model="item" label-position="left" label-width="100px">
        <el-form-item label="志愿者　："></el-form-item>
      </el-form>
      <el-table :data="item.helper" border>
        <el-table-column label="姓名">
          <template slot-scope="scope">{{ scope.row.name }}</template>
        </el-table-column>
        <el-table-column label="电话">
          <template slot-scope="scope">{{ scope.row.phone }}</template>
        </el-table-column>
        <el-table-column label="邮箱">
          <template slot-scope="scope">{{ scope.row.mail }}</template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-row class="mb-10">
      <el-form ref="form" :model="item" label-position="left" label-width="100px">
        <el-form-item label="听众　　："></el-form-item>
      </el-form>
      <el-table :data="item.listener" border>
        <el-table-column label="姓名">
          <template slot-scope="scope">{{ scope.row.name }}</template>
        </el-table-column>
        <el-table-column label="电话">
          <template slot-scope="scope">{{ scope.row.phone }}</template>
        </el-table-column>
        <el-table-column label="邮箱">
          <template slot-scope="scope">{{ scope.row.mail }}</template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-row class="b-intro mb-10">
      简介：
      <br>
      {{ item.intro }}
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getReading } from "@/api/readingApi";
import _ from "lodash";
@Component
export default class BookClubDetail extends Vue {
  log: any;
  item: any = {
    title: "读书会详情",
    stitle: "子标题",
    intro: "简介阿萨德萨达撒多撒阿萨德撒的萨达阿斯顿阿斯顿按时的",
    anthor: "王小虎",
    contact: "王小虎",
    stime: "2019-07-01",
    ptime: "2019/9/9 00:00:00",
    byinter:{},
    byoutline:{},
  };
  mounted() {
    this.getReadingFn(this.$route.query.id);
  }
  async getReadingFn(id: any) {
    let res: any = await getReading(id);
    if (res.ok) {
      this.item = _.cloneDeep(res.data);
    } else {
      alert(res.msg);
    }
  }
}
</script>
<style lang="scss" scoped>
.bookClubDetail {
  color: #606266;
  padding: 10px 20px;
  .b-title {
    font-size: 18px;
  }
  .b-stitle {
    font-size: 16px;
  }
  /deep/ .el-form-item {
    margin-bottom: 0px !important;
  }
}
</style>
