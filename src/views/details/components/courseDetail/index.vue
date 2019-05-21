<template>
  <div class="courseDetail">
    <el-row class="c-img mb-10">
      <!-- 如果img 存在 并且 不等于 “” 读传入 -->
      <img :src="item.listimg" class="w100" v-if="item.listimg && item.listimg !== ''">
      <!-- 如果img 存在 且 等于 “” 读默认 -->
      <img :src="defaultImg" class="w100" v-if="item.listimg && item.listimg === ''">
      <!-- 如果img 不存在 直接读默认 -->
      <img :src="defaultImg" class="w100" v-if="!item.listimg">
    </el-row>
    <el-row class="c-name mb-10">{{ item.name }}</el-row>
    <el-row class="c-price mb-10">￥{{ item.price }}</el-row>
    <el-row class="mb-10">报名时间： {{ item.rbegin }} 至 {{ item.rend }}</el-row>
    <el-row class="mb-10">&nbsp;&nbsp;&nbsp;&nbsp;有效期： {{item.terml}}</el-row>
    <el-row class="mb-10">
      上课形式：
      <span
        v-if="item.bylive.do && item.byface.do"
      >{{ item.bylive.label + ' + ' + item.byface.label}}</span>
      <span v-if="item.bylive.do && !item.byface.do">{{ item.bylive.label }}</span>
      <span v-if="!item.bylive.do && item.byface.do">{{ item.byface.label }}</span>
    </el-row>
    <el-row class="mb-10">课程时长： {{item.along}}</el-row>
    <el-row class="mb-10">授课老师： {{item.tname}}</el-row>
    <el-tabs v-model="activeName">
      <el-tab-pane label="课程介绍" name="first">{{item.subint}}</el-tab-pane>
      <el-tab-pane label="课程大纲" name="second">{{item.subline}}</el-tab-pane>
      <el-tab-pane label="师资展示" name="third">{{item.tecint}}</el-tab-pane>
      <el-tab-pane label="听课指导" name="fourth">{{item.lisint}}</el-tab-pane>
    </el-tabs>
    <el-dialog
      width="90%"
      :title="dialogCfg.title"
      v-loading="dialogLoading"
      :visible.sync="dialogCfg.isShow"
      :close-on-click-modal="false"
    >
      <el-form
        ref="ruleForm"
        :model="dialogCfg.data"
        status-icon
        :rules="rules"
        label-position="left"
        label-width="100px"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="dialogCfg.data.name" placeholder="请输入姓名" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="phone">
          <el-input v-model="dialogCfg.data.phone" placeholder="请输入联系电话" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" prop="idcard">
          <el-input v-model="dialogCfg.data.idcard" placeholder="请输入身份证号" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="mail">
          <el-input v-model="dialogCfg.data.mail" placeholder="请输入邮箱" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="dialogCfg.data.sex">
            <el-radio label="1">男</el-radio>
            <el-radio label="0">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Message } from "element-ui";
import { getSubjects } from "@/api/subjectsApi";
import { signAdd } from "@/api/signApi";
import _ from "lodash";
@Component
export default class CourseDetail extends Vue {
  log: any;
  message: any = Message;
  defaultImg: any = require("@/assets/courseDetail.jpg");
  item: any = {
    listimg: require("@/assets/courseDetail.jpg"),
    name: "2020年国考面试笔试OAO小班直播特训协议B班（国庆强化版）",
    price: "1566",
    rbegin: "2019-05-01",
    rend: "2019-07-01",
    byface: {
      do: true,
      label: "面授"
    },
    bylive: {
      do: true,
      label: "直播"
    },
    terml: "一年",
    along: "70课时",
    tname: "王小虎"
  };
  activeName: any = "first";
  dialogCfg: any = {
    isShow: false,
    title: "报名",
    data: {}
  };
  dialogLoading: boolean = false;
  rules: any = {
    name: [{ required: true, validator: this.validateName, trigger: "blur" }],
    phone: [{ required: true, validator: this.validateName, trigger: "blur" }],
    idcard: [{ required: true, validator: this.validateName, trigger: "blur" }],
    mail: [{ required: true, validator: this.validateName, trigger: "blur" }],
    sex: [{ required: true, message: "请选性别", trigger: "change" }]
  };
  validateName(rule: any, value: any, callback: any) {
    if (!value || value === "") {
      let msg;
      if (rule.field === "name") {
        msg = "请输入姓名";
      }
      if (rule.field === "idcard") {
        msg = "请输入身份证号";
      }
      if (rule.field === "phone") {
        msg = "请输入联系电话";
      }
      if (rule.field === "mail") {
        msg = "请输入邮箱";
      }
      callback(new Error(msg));
    } else {
      callback();
    }
  }
  mounted() {
    if (this.$route.query.reg && !!this.$route.query.reg) {
      this.dialogCfg.isShow = true;
    }
    this.getSubjectsFn(this.$route.query.id);
  }
  // 报名
  submitForm(formName: any) {
    let tempForm: any = this.$refs[formName];
    tempForm.validate(async (valid: any) => {
      if (valid) {
        this.dialogLoading = true;
        let res: any = await signAdd(this.dialogCfg.data);
        if (res.ok) {
          this.message({
            message: `该课程已经成功报名，报名进度可以在个人中心查询，请耐心等待工作人员联系。`,
            type: "success",
            duration: "3000"
          });

          this.dialogLoading = false;
          this.dialogCfg.isShow = false;
        } else {
          alert(res.msg);
        }
      } else {
        return false;
      }
    });
  }
  resetForm(formName: any) {
    let tempForm: any = this.$refs[formName];
    if (tempForm) {
      tempForm.resetFields();
    }
  }

  async getSubjectsFn(id: any) {
    let res: any = await getSubjects(id);
    this.log(res);
    if (res.ok) {
      this.item = _.cloneDeep(res.data);
    } else {
      alert(res.msg);
    }
  }
}
</script>
<style lang="scss" scoped>
.courseDetail {
  padding: 10px 20px;
  .c-name {
    font-size: 16px;
  }
  .c-price {
    font-size: 20px;
    color: red;
  }
}
</style>
