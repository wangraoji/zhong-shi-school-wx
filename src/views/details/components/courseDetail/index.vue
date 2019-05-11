<template>
  <div class="courseDetail">
    <el-row class="c-img mb-10">
      <img :src="item.imgSrc" alt class="w100">
    </el-row>
    <el-row class="c-name mb-10">{{ item.name }}</el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class CourseDetail extends Vue {
  item: any = {
    imgSrc: require("@/assets/courseDetail.jpg"),
    name: "2020年国考面试笔试OAO小班直播特训协议B班（国庆强化版）"
  };
  mounted() {
    console.log(this.$route.query.uid);
  }
}
</script>
<style lang="scss" scoped>
.courseDetail {
  padding: 10px 20px;
  .c-img {
    img {
      border-radius: 3px;
    }
  }
  .c-name {
    font-size: 16px;
  }
}
</style>
