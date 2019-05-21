<template>
  <div class="industryNews">
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
export default class IndustryNews extends Vue {
  log: any;
  defaultImg: any = require("@/assets/test.jpg");
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
      name: "newsDetail",
      query: { id: item.id }
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
