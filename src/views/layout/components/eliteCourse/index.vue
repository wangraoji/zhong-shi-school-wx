<template>
  <div class="eliteCourse">
    <div v-for="(item,i) of courseData" :key="i" class="itemBox" @click="toPath(item)">
      <el-row class="mb-10 e-img">
        <img :src="item.imgSrc" alt="0" class="w100">
      </el-row>
      <el-row class="mb-10">
        <span class="e-tag">{{ item.tag }}</span>
        <span class="e-title">{{ item.title }}</span>
      </el-row>
      <el-row class="mb-10">
        <el-col :span="24" class="e-start-time">
          {{ item.startTime }}
          <span class="e-school-hour">{{ item.schoolHur }}</span>
        </el-col>
      </el-row>
      <el-row class="price">{{ item.price }}</el-row>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class EliteCourse extends Vue {
  courseData: any = [
    {
      imgSrc: require("@/assets/test1.jpg"),
      tag: "备考",
      title: "2019河南三支一扶公基备考指导",
      startTime: "开课时间：2019.05.11",
      schoolHur: "20课时",
      price: "免费",
      uid: "1"
    },
    {
      imgSrc: require("@/assets/test1.jpg"),
      tag: "备考",
      title: "2019河南三支一扶公基备考指导",
      startTime: "开课时间：2019.05.11",
      schoolHur: "20课时",
      price: "免费",
      uid: "1"
    },
    {
      imgSrc: require("@/assets/test1.jpg"),
      tag: "备考",
      title: "2019河南三支一扶公基备考指导",
      startTime: "开课时间：2019.05.11",
      schoolHur: "20课时",
      price: "免费",
      uid: "1"
    },
    {
      imgSrc: require("@/assets/test1.jpg"),
      tag: "备考",
      title: "2019河南三支一扶公基备考指导",
      startTime: "开课时间：2019.05.11",
      schoolHur: "20课时",
      price: "免费",
      uid: "1"
    },
    {
      imgSrc: require("@/assets/test1.jpg"),
      tag: "备考",
      title: "2019河南三支一扶公基备考指导",
      startTime: "开课时间：2019.05.11",
      schoolHur: "20课时",
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
}
</script>
<style lang="scss" scoped>
.eliteCourse {
  padding: 0 20px;
  .itemBox {
    padding-bottom: 10px;
    border-bottom: 1px solid #ebeef5;
    margin-top: 15px;
    .e-img {
      img {
        border-radius: 3px;
      }
    }
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
    .e-title {
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
