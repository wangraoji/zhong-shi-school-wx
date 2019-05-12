<template>
  <div class="eliteCourse">
    <div v-for="(item,i) of courseData" :key="i" class="itemBox" @click="toPath(item)">
      <el-row class="mb-10 c-img">
        <!-- 如果img 存在 并且 不等于 “” 读传入 -->
        <img :src="item.listimg" class="w100" v-if="item.listimg && item.listimg !== ''">
        <!-- 如果img 存在 且 等于 “” 读默认 -->
        <img :src="defaultImg" class="w100" v-if="item.listimg && item.listimg === ''">
        <!-- 如果img 不存在 直接读默认 -->
        <img :src="defaultImg" class="w100" v-if="!item.listimg">
      </el-row>
      <el-row class="mb-10">
        <span class="e-tag">{{ item.tag }}</span>
        <span class="e-name">{{ item.name }}</span>
      </el-row>
      <el-row class="mb-10">
        <el-col :span="24" class="e-start-time">
          {{ item.startTime }}
          <span class="e-school-hour">{{ item.along }}</span>
        </el-col>
      </el-row>
      <el-row class="price">{{ item.price }}</el-row>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getSubjectsList } from "@/api/subjectsApi";
import _ from 'lodash';
@Component
export default class EliteCourse extends Vue {
  defaultImg: any = require("@/assets/xueyuan.jpg");
  courseData: any = [
    {
      listimg: require("@/assets/test1.jpg"),
      tag: "备考",
      name: "2019河南三支一扶公基备考指导",
      startTime: "开课时间：2019.05.11",
      along: "20课时",
      price: "免费",
      uid: "1"
    },
    {
      listimg: require("@/assets/test1.jpg"),
      tag: "备考",
      name: "2019河南三支一扶公基备考指导",
      startTime: "开课时间：2019.05.11",
      along: "20课时",
      price: "免费",
      uid: "1"
    },
    {
      listimg: require("@/assets/test1.jpg"),
      tag: "备考",
      name: "2019河南三支一扶公基备考指导",
      startTime: "开课时间：2019.05.11",
      along: "20课时",
      price: "免费",
      uid: "1"
    },
    {
      listimg: require("@/assets/test1.jpg"),
      tag: "备考",
      name: "2019河南三支一扶公基备考指导",
      startTime: "开课时间：2019.05.11",
      along: "20课时",
      price: "免费",
      uid: "1"
    },
    {
      listimg: require("@/assets/test1.jpg"),
      tag: "备考",
      name: "2019河南三支一扶公基备考指导",
      startTime: "开课时间：2019.05.11",
      along: "20课时",
      price: "免费",
      uid: "1"
    }
  ];

  toPath(item: any) {
    this.$router.push({
      name: "courseDetail",
      query: { uid: item.uid }
    });
  }

  async getSubjectsListFn() {
    let res: any = await getSubjectsList();
    if (res.ok) {
      this.courseData = _.cloneDeep(res.data);
    } else {
      alert(res.msg);
    }
  }
}
</script>
<style lang="scss" scoped>
.eliteCourse {
  padding: 0 20px;
  .itemBox {
    padding-bottom: 10px;
    border-bottom: 1px solid #ebeef5;
    margin-top: 15px;
    .e-tag {
      display: inline-block;
      padding: 0 4px;
      height: 16px;
      line-height: 16px;
      font-size: 12px;
      border-radius: 3px;
      border: 1px solid #1ac54b;
      color: #1ac54b;
      margin-right: 10px;
    }
    .e-name {
      font-size: 16px;
      line-height: 24px;
    }
    .e-start-time {
      font-size: 14px;
      color: #999;
      line-height: 26px;
      height: 26px;
      .e-school-hour {
        float: right;
        color: #303133;
      }
    }
    .price {
      color: #ee5023;
    }
  }
}
</style>
