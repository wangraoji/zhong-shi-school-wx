<template>
  <div class="viewDetail">
    <el-row class="n-img mb-10">
      <img :src="newsData.imgSrc" alt class="w100">
    </el-row>
    <el-row class="mb-10">
      <h3>{{ newsData.title }}</h3>
    </el-row>
    <el-row class="n-content">{{newsData.content}}</el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class ViewDetail extends Vue {
  newsData: any = {
    imgSrc: require("@/assets/test.jpg"),
    title: "XX观点",
    content: `
    “人的高贵不在于头衔，也不在于职务，而在于灵魂。”谈及奶奶对自己的影响，黄音说道。

黄音是上海市杨浦区教育学院的一名老师，出生在典型的书香世家。黄音的爷爷，是西南联大毕业生、复旦大学原历史系主任黄世晔；黄音的奶奶，更是基础教育领域无人不知的改革先锋、“人民教育家”于漪；黄音的父母也都是教育工作者。

5月8日，“阅读瞬间”杨浦职工庆祝中华人民共和国成立70周年暨读书分享会举行，黄音在“读书启迪人生”的专题访谈上，首度从孙女的角度讲述了她眼中的奶奶。5月9日，澎湃新闻（www.thepaper.cn）记者对话黄音，听她讲述了这个教师世家很少为外人道的师者匠心往事。
    `
  };
  mounted() {
    console.log(`接口uid`,this.$route.query.uid);
  }
}
</script>
<style lang="scss" scoped>
.viewDetail {
  padding: 10px 20px;
  font-size: 16px;
}
</style>
