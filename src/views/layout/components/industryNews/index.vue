<template>
  <div class="industryNews">
    <el-row v-for="(item,inx) of iData" :key="inx">
      <el-row class="i-t">
        {{ item.title}}
      </el-row>
      <div v-for="(children,inx1) of item.children" :key="inx1" @click="toPath(children)">
        <el-row class="i-r mb-10" :gutter="10">
          <el-col :span="10" class="i-img">
            <img :src="children.imgSrc" alt="1">
          </el-col>
          <el-col :span="14" class="i-cont">{{ children.content }}</el-col>
        </el-row>
      </div>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class IndustryNews extends Vue {
  log: any;
  iData: any = [
    {
      title: "教育 - 咨询",
      children: [
        {
          imgSrc: require("@/assets/test.jpg"),
          content: "孙女眼中的人民教育家于漪:人的高贵不在于头衔,而在于灵魂",
          uid: "1"
        },
        {
          imgSrc: require("@/assets/test.jpg"),
          content: "孙女眼中的人民教育家于漪:人的高贵不在于头衔,而在于灵魂",
          uid: "2"
        },
        {
          imgSrc: require("@/assets/test.jpg"),
          content: "孙女眼中的人民教育家于漪:人的高贵不在于头衔,而在于灵魂",
          uid: "3"
        }
      ]
    },
    {
      title: "xx - 咨询",
      children: [
        {
          imgSrc: require("@/assets/test.jpg"),
          content: "孙女眼中的人民教育家于漪:人的高贵不在于头衔,而在于灵魂",
          uid: "1"
        },
        {
          imgSrc: require("@/assets/test.jpg"),
          content: "孙女眼中的人民教育家于漪:人的高贵不在于头衔,而在于灵魂",
          uid: "2"
        },
        {
          imgSrc: require("@/assets/test.jpg"),
          content: "孙女眼中的人民教育家于漪:人的高贵不在于头衔,而在于灵魂",
          uid: "3"
        },
        {
          imgSrc: require("@/assets/test.jpg"),
          content: "孙女眼中的人民教育家于漪:人的高贵不在于头衔,而在于灵魂",
          uid: "4"
        }
      ]
    }
  ];
  toPath(item: any) {
    this.$router.push({
      name: "newsDetail",
      query: { uid: item.uid }
    });
  }
}
</script>
<style lang="scss" scoped>
.industryNews {
  padding: 0 20px;
  .i-t {
    font-size: 18px;
    margin-bottom: 15px;
    margin-top: 15px;
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
