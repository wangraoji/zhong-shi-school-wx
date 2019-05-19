<template>
  <div class="courseReg">
    <el-row :gutter="10">
      <el-col :span="12" v-for="(item,i) of courseData" :key="i" class="mb-10">
        <el-row class="item">
          <el-row class="c-img mb-10">
            <!-- 如果img 存在 并且 不等于 “” 读传入 -->
            <img :src="item.listimg" class="w100" v-if="item.listimg && item.listimg !== ''">
            <!-- 如果img 存在 且 等于 “” 读默认 -->
            <img :src="defaultImg" class="w100" v-if="item.listimg && item.listimg === ''">
            <!-- 如果img 不存在 直接读默认 -->
            <img :src="defaultImg" class="w100" v-if="!item.listimg">
          </el-row>
          <p class="t mb-5">{{ item.title}}</p>
          <p class="t mb-5">{{ item.stitle}}</p>
          <p class="t mb-10 info">{{ item.info}}</p>
          <el-row class="text-center">
            <el-button type="warning" round @click="toPath(item)">点击报名</el-button>
          </el-row>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getSignList } from "@/api/signApi";
import _ from "lodash";
@Component
export default class CourseReg extends Vue {
  log:any;
  defaultImg: any = require("@/assets/xueyuan.jpg");
  courseData: any = [
    {
      listimg: require("@/assets/xueyuan.jpg"),
      title: "主考院校：复旦大学",
      stitle: "主考专业：行政管理",
      info:
        "根据全民读书月和上级部门的要求，慈溪新华书店承办的“好书伴成长”暑期征文活动自活动启动以来，今年已经是第三年了。《好书伴成长----2015-2016年获奖优秀作品集》的成功出版，",
      uid: "1"
    },
    {
      listimg: require("@/assets/xueyuan.jpg"),
      title: "主考院校：复旦大学",
      stitle: "主考专业：行政管理",
      info:
        "根据全民读书月和上级部门的要求，慈溪新华书店承办的“好书伴成长”暑期征文活动自活动启动以来，今年已经是第三年了。《好书伴成长----2015-2016年获奖优秀作品集》的成功出版，",
      uid: "1"
    },
    {
      listimg: require("@/assets/xueyuan.jpg"),
      title: "主考院校：复旦大学",
      stitle: "主考专业：行政管理",
      info:
        "根据全民读书月和上级部门的要求，慈溪新华书店承办的“好书伴成长”暑期征文活动自活动启动以来，今年已经是第三年了。《好书伴成长----2015-2016年获奖优秀作品集》的成功出版，",
      uid: "1"
    },
    {
      listimg: require("@/assets/xueyuan.jpg"),
      title: "主考院校：复旦大学",
      stitle: "主考专业：行政管理",
      info:
        "根据全民读书月和上级部门的要求，慈溪新华书店承办的“好书伴成长”暑期征文活动自活动启动以来，今年已经是第三年了。《好书伴成长----2015-2016年获奖优秀作品集》的成功出版，",
      uid: "1"
    },
    {
      listimg: require("@/assets/xueyuan.jpg"),
      title: "主考院校：复旦大学",
      stitle: "主考专业：行政管理",
      info:
        "根据全民读书月和上级部门的要求，慈溪新华书店承办的“好书伴成长”暑期征文活动自活动启动以来，今年已经是第三年了。《好书伴成长----2015-2016年获奖优秀作品集》的成功出版，",
      uid: "1"
    }
  ];
  toPath(item: any) {
    this.$router.push({
      name: "courseDetail",
      query: { id: item.id, reg: "true" }
    });
  }
  mounted(){
    this.getSignListFn();
  }
  async getSignListFn() {
    let res: any =await getSignList();
    if (res.ok) {
      this.courseData = _.cloneDeep(res.data);
    } else {
      alert(res.msg);
    }
  }
}
</script>
<style lang="scss" scoped>
.courseReg {
  padding: 15px 20px;
  .item {
    border: 1px solid #ebeef5;
    border-radius: 3px;
    padding: 1px;
    padding-bottom: 15px;
    height: 230px;
    .c-img {
      height: 105px;
    }
    .t {
      padding: 0 10px;
      &.info {
        font-size: 12px;
        color: #c9c9c9;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
