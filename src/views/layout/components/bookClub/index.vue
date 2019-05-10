<template>
  <div class="bookClub">
    <div v-for="(item,i) of bookClubData" :key="i" class="bookClubBox" @click="toPath(item)">
      <el-row class="b-title mb-10">{{ item.title }}</el-row>
      <el-row class="b-content mb-10">{{ item.content }}</el-row>
      <el-row :gutter="10">
        <el-col :span="8" v-for="(img,i1) of item.imgSrcs" :key="i1">
          <img :src="img.src" alt class="w100 h100">
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class BookClub extends Vue {
  bookClubData: any = [
    {
      title: "全民读书活动之新华书店篇",
      content:
        "根据全民读书月和上级部门的要求，慈溪新华书店承办的“好书伴成长”暑期征文活动自活动启动以来，今年已经是第三年了。《好书伴成长----2015-2016年获奖优秀作品集》的成功出版，激发了全市师生活动参与的热情。",
      imgSrcs: [
        {
          src: require("@/assets/d1.jpeg")
        },
        {
          src: require("@/assets/d2.jpeg")
        },
        {
          src: require("@/assets/d3.jpeg")
        }
      ],
      uid: "1"
    },
    {
      title: "全民读书活动之新华书店篇",
      content:
        "根据全民读书月和上级部门的要求，慈溪新华书店承办的“好书伴成长”暑期征文活动自活动启动以来，今年已经是第三年了。《好书伴成长----2015-2016年获奖优秀作品集》的成功出版，激发了全市师生活动参与的热情。",
      imgSrcs: [
        {
          src: require("@/assets/d1.jpeg")
        },
        {
          src: require("@/assets/d2.jpeg")
        },
        {
          src: require("@/assets/d3.jpeg")
        }
      ],
      uid: "1"
    },
    {
      title: "全民读书活动之新华书店篇",
      content:
        "根据全民读书月和上级部门的要求，慈溪新华书店承办的“好书伴成长”暑期征文活动自活动启动以来，今年已经是第三年了。《好书伴成长----2015-2016年获奖优秀作品集》的成功出版，激发了全市师生活动参与的热情。",
      imgSrcs: [
        {
          src: require("@/assets/d1.jpeg")
        },
        {
          src: require("@/assets/d2.jpeg")
        },
        {
          src: require("@/assets/d3.jpeg")
        }
      ],
      uid: "1"
    },
    {
      title: "全民读书活动之新华书店篇",
      content:
        "根据全民读书月和上级部门的要求，慈溪新华书店承办的“好书伴成长”暑期征文活动自活动启动以来，今年已经是第三年了。《好书伴成长----2015-2016年获奖优秀作品集》的成功出版，激发了全市师生活动参与的热情。",
      imgSrcs: [
        {
          src: require("@/assets/d1.jpeg")
        },
        {
          src: require("@/assets/d2.jpeg")
        },
        {
          src: require("@/assets/d3.jpeg")
        }
      ],
      uid: "1"
    }
  ];

  toPath(item: any) {
    this.$router.push({
      name: "bookClubDetail",
      query: { uid: item.uid }
    });
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
    .b-content {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
