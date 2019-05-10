<template>
  <div class="footer-box">
    <el-col :span="6" class="f-t-c" v-for="(tab,inx) of tabs" :key="inx">
      <div class="tab" @click="tabClick(tab,inx)" tabindex="-1" @blur="onblur()">{{ tab.tabName }}</div>
      <div
        class="upModal"
        :style="{bottom:-(30*tab.children.length) + 'px'}"
        :class="{show:tab.show,last:inx===tabs.length-1,first:inx===0}"
      >
        <ul>
          <li
            v-for="(child,inx1) of tab.children"
            :key="inx1"
            @click="toPath(child)"
          >{{ child.name }}</li>
        </ul>
      </div>
    </el-col>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class FooterTab extends Vue {
  log: any;
  $ref: any;
  tabs: any = [
    {
      tabName: "新闻资讯",
      show: false,
      focus: false,
      children: [
        {
          name: "行业动态",
          path: "/industryNews"
        },
        {
          name: "独家观点",
          path: "/exclusiveView"
        }
      ]
    },
    {
      tabName: "仲仕学院",
      show: false,
      focus: false,
      children: [
        {
          name: "经营课程",
          path: "/eliteCourse"
        },
        {
          name: "读书会",
          path: "/bookClub"
        }
      ]
    },
    {
      tabName: "联系我们",
      show: false,
      focus: false,
      children: [
        {
          name: "课程报名",
          path: "/courseReg"
        },
        {
          name: "联系方式",
          path: "/contactInfo"
        }
      ]
    },
    {
      tabName: "我的",
      show: false,
      focus: false,
      children: [
        {
          name: "会员信息",
          path: "/vipInfo"
        }
      ]
    }
  ];
  currentTab: any;
  tabClick(tab: any, inx: any) {
    this.tabs.forEach((el: any) => {
      if (tab.tabName !== el.tabName) {
        el.show = false;
      }
    });
    tab.show = !tab.show;
  }
  onblur() {
    this.tabs.forEach((el: any) => {
      el.show = false;
    });
  }
  toPath(tab: any) {
    if (tab.path && tab.path !== "") {
      this.$router.push({ path: tab.path });
    }
    if (tab.url && tab.url !== "") {
      window.open(tab.url, "_blank");
    }
  }
}
</script>
<style lang="scss" scoped>
$bdc: 1px solid #ebeef5;
.footer-box {
  .f-t-c {
    border-right: $bdc;
    position: relative;
    :last-child {
      border-right: 0;
    }
    .tab {
      background: #fff;
      position: relative;
      z-index: 3;
      outline: none;
    }
    .upModal {
      position: absolute;
      background: #fff;
      border: $bdc;
      width: 100%;
      transition: all 0.5s;
      ul {
        outline: none;
        li {
          border-bottom: $bdc;
          :last-child {
            border-bottom: 0;
          }
        }
      }

      &.first {
        left: 1px;
      }
      &.last {
        right: 1px;
      }
      &.show {
        bottom: 30px !important;
      }
    }
  }
}
</style>