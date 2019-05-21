<template>
  <div class="vipInfo">
    <el-form ref="form" :model="form" label-position="left" label-width="70px">
      <el-form-item label="微信号">
        <el-col :span="12">{{ form.wxnick || "暂未登陆" }}</el-col>
        <el-col :span="12" class="text-right">
          <el-button @click="openDialog('singup')">注册</el-button>
          <el-button @click="openDialog('login')">登陆</el-button>
        </el-col>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="常用邮箱">
        <el-input v-model="form.mail"></el-input>
      </el-form-item>
      <el-form-item label="我的报名">
        <el-table :data="form.report" class="w100" border :show-header="false">
          <el-table-column prop="name"></el-table-column>
          <el-table-column prop="state">
            <template slot-scope="scope">
              <span v-if="column.code==='state'">
                {{
                scope.row.scope === 0 ? '待审核' :
                scope.row.scope === 20 ? '可发布' : '已发布'
                }}
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item label="我的课程">
        <el-table :data="form.class" class="w100" border :show-header="false">
          <el-table-column prop="name"></el-table-column>
          <el-table-column prop="msg"></el-table-column>
        </el-table>
      </el-form-item>
    </el-form>
    <el-row class="mb-10">
      <el-button class="w100" :disabled="!userId" @click="editInfoFn">修改资料</el-button>
    </el-row>
    <el-row class="mb-10">
      <el-button class="w100" @click="openDialog('editPwd')" :disabled="!userId">修改密码</el-button>
    </el-row>
    <el-row class="mb-10">
      <el-button class="w100">注销登陆</el-button>
    </el-row>
    <el-dialog
      width="90%"
      :title="dialogCfg.title"
      v-loading="dialogLoading"
      :visible.sync="dialogCfg.isShow"
      :close-on-click-modal="false"
    >
      <!-- :before-close="resetForm('ruleForm')" -->
      <el-form
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-position="left"
        label-width="80px"
        :model="dialogCfg.data"
      >
        <el-row v-if="dialogCfg.action ==='singup'">
          <el-form-item label="手机号码" prop="phone">
            <el-input v-model="dialogCfg.data.phone" placeholder="请输入手机号码" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pwd">
            <el-input
              type="password"
              v-model="dialogCfg.data.pwd"
              placeholder="请输入密码"
              auto-complete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkpwd">
            <el-input
              type="password"
              v-model="dialogCfg.data.checkpwd"
              placeholder="请再次输入密码"
              auto-complete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="常用邮箱" prop="mail">
            <el-row class="mb-5">
              <el-input v-model="dialogCfg.data.mail" placeholder="请输入常用邮箱" auto-complete="off"></el-input>
            </el-row>
            <el-row>
              <el-button class="w100" @click="userRegmailFn">点击发送邮箱验证码</el-button>
            </el-row>
          </el-form-item>
          <el-form-item label="验证码" prop="vcode">
            <el-input v-model="dialogCfg.data.vcode" placeholder="请输入验证码" auto-complete="off"></el-input>
          </el-form-item>
        </el-row>
        <el-row v-if="dialogCfg.action ==='login'">
          <el-form-item label="登陆账号" prop="uname">
            <el-input v-model="dialogCfg.data.uname" placeholder="请输入手机号/邮箱" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="登陆密码" prop="loginpwd">
            <el-input
              type="password"
              v-model="dialogCfg.data.loginpwd"
              placeholder="请输入登陆"
              auto-complete="off"
            ></el-input>
          </el-form-item>
        </el-row>
        <el-row v-if="dialogCfg.action ==='editPwd'">
          <el-form-item label="历史密码" prop="oldpwd">
            <el-input
              type="password"
              v-model="dialogCfg.data.oldpwd"
              placeholder="请输入历史密码"
              auto-complete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="newpwd">
            <el-input
              type="password"
              v-model="dialogCfg.data.newpwd"
              placeholder="请输入新密码"
              auto-complete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checknewpwd">
            <el-input
              type="password"
              v-model="dialogCfg.data.checknewpwd"
              placeholder="请再次输入密码"
              auto-complete="off"
            ></el-input>
          </el-form-item>
        </el-row>
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
import { login, singup, editPwd, editInfo, userRegmail } from "@/api/userApi";
@Component
export default class VipInfo extends Vue {
  log: any;
  message: any = Message;
  form: any = {};
  dialogCfg: any = {
    isShow: false,
    title: "",
    data: {},
    action: "" // singup --- 注册 login --- 登陆 editPwd --- 修改密码
  };
  // 弹框用户表单验证
  rules: any = {
    // 登陆
    uname: [{ required: true, validator: this.validateUname, trigger: "blur" }],
    loginpwd: [
      { required: true, validator: this.validateLoginpwd, trigger: "blur" }
    ],
    // 修改密码
    oldpwd: [
      { required: true, validator: this.validateOldpwd, trigger: "blur" }
    ],
    newpwd: [
      { required: true, validator: this.validateNewpwd, trigger: "blur" }
    ],
    checknewpwd: [
      { required: true, validator: this.validateChecknewpwd, trigger: "blur" }
    ],
    // 注册
    phone: [{ required: true, validator: this.validatePhone, trigger: "blur" }],
    pwd: [{ required: true, validator: this.validatepwd, trigger: "blur" }],
    checkpwd: [
      { required: true, validator: this.validatepwd2, trigger: "blur" }
    ],
    mail: [{ required: true, validator: this.validateMail, trigger: "blur" }],
    vcode: [{ required: true, validator: this.validateVcode, trigger: "blur" }]
  };
  dialogLoading: any = false;

  // 当前用户id
  userId: any = null;
  mounted() {
    this.message = Message;
  }

  // 表单验证规则
  // 登陆账号验证
  validateUname(rule: any, value: any, callback: any) {
    if (!value || value === "") {
      callback(new Error("请输入手机号/邮箱"));
    } else {
      callback();
    }
  }
  // 登陆密码验证
  validateLoginpwd(rule: any, value: any, callback: any) {
    if (!value || value === "") {
      callback(new Error("请输入登陆密码"));
    } else {
      callback();
    }
  }
  // 历史密码
  validateOldpwd(rule: any, value: any, callback: any) {
    if (!value || value === "") {
      callback(new Error("请输入历史密码"));
    } else {
      callback();
    }
  }
  // 新密码
  validateNewpwd(rule: any, value: any, callback: any) {
    if (!value || value === "") {
      callback(new Error("请输入新密码"));
    } else if (value === this.dialogCfg.data.oldpwd) {
      callback(new Error("新密码不能和原始密码一样"));
    } else if (value.length < 5) {
      callback(new Error("密码需要大于等于6位"));
    } else {
      if (this.dialogCfg.data.checknewpwd !== "") {
        let ruleForm: any = this.$refs.ruleForm;
        ruleForm.validateField("checknewpwd");
      }
      callback();
    }
  }
  // 确认新密码
  validateChecknewpwd(rule: any, value: any, callback: any) {
    if (!value || value === "") {
      callback(new Error("请再次输入密码"));
    } else if (value !== this.dialogCfg.data.newpwd) {
      callback(new Error("两次输入密码不一致!"));
    } else {
      callback();
    }
  }
  // 手机号码验证
  validatePhone(rule: any, value: any, callback: any) {
    let re = /^1\d{10}$/;
    if (!value || value === "") {
      callback(new Error("请输入手机号码"));
    } else if (!re.test(value)) {
      callback(new Error("请输入正确手机号码!"));
    } else {
      callback();
    }
  }
  // 密码验证
  validatepwd(rule: any, value: any, callback: any) {
    if (!value || value === "") {
      callback(new Error("请输入密码"));
    } else if (value.length < 5) {
      callback(new Error("密码需要大于等于6位"));
    } else {
      if (this.dialogCfg.data.checkpwd !== "") {
        let ruleForm: any = this.$refs.ruleForm;
        ruleForm.validateField("checkpwd");
      }
      callback();
    }
  }
  // 确认密码验证
  validatepwd2(rule: any, value: any, callback: any) {
    if (!value || value === "") {
      callback(new Error("请再次输入密码"));
    } else if (value !== this.dialogCfg.data.pwd) {
      callback(new Error("两次输入密码不一致!"));
    } else {
      callback();
    }
  }
  // 邮箱认证
  validateMail(rule: any, value: any, callback: any) {
    let re = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
    if (!value || value === "") {
      callback(new Error("请输入常用邮箱"));
    } else if (!re.test(value)) {
      callback(new Error("请输入正确邮箱！"));
    } else {
      callback();
    }
  }
  // 验证码
  validateVcode(rule: any, value: any, callback: any) {
    if (!value || value === "") {
      callback(new Error("请输入验证码"));
    } else {
      callback();
    }
  }
  // 发送邮箱验证码
  async userRegmailFn() {
    let re = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
    let value = this.dialogCfg.data.mail;
    if (re.test(value)) {
      let res: any = await userRegmail(value);
      console.log(res);
    }
  }

  // 登陆
  submitForm(formName: any) {
    let tempForm: any = this.$refs[formName];
    tempForm.validate((valid: any) => {
      if (valid) {
        this.dialogLoading = true;
        // 注册
        if (this.dialogCfg.action === "singup") {
          this.singupFn(this.dialogCfg.data);
        }
        // 登录
        else if (this.dialogCfg.action === "login") {
          let param = {
            uname: this.dialogCfg.data.uname,
            pwd: this.dialogCfg.data.loginpwd
          };
          this.loginFn(param);
          alert(`登录`);
        }
        // 修改密码
        else {
          this.editPwdFn({
            id: this.userId,
            newpwd: this.dialogCfg.data.newpwd
          });
          alert(`修改密码`);
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
      this.dialogCfg.data = {};
    }
  }
  openDialog(action: any) {
    this.dialogCfg.isShow = true;
    this.dialogCfg.action = action;
    this.dialogCfg.data = {};
    this.dialogCfg.title =
      action === "singup"
        ? "注册用户"
        : action === "login"
        ? "登陆用户"
        : "修改密码";

    this.resetForm("ruleForm");
  }

  // 登录请求
  async loginFn(param: any) {
    let res: any = await login(param);
    console.log(res);
    // this.log(`登陆`);
    // this.log(param);
    this.msgFn(`登录成功`, "success");
  }
  // 注册请求
  async singupFn(param: any) {
    this.$delete(param, "checkpwd");
    let res: any = await singup(param);
    if (res.ok) {
    } else {
      this.message({
        message: res.msg,
        type: "error",
        duration: "2000"
      });
      this.dialogLoading = false;
    }
  }
  // 修改密码请求
  async editPwdFn(param: any) {
    // let res:any = editPwd(param);
    this.log(param);
    this.msgFn(`修改成功`, "success");
  }

  // 修改资料
  async editInfoFn() {
    let param = {
      phone: this.form.phone,
      mail: this.form.mail
    };
    // let res: any = editInfo(param);
  }

  msgFn(msg: any, type: any) {
    this.log(msg);
    setTimeout(() => {
      this.dialogLoading = false;
      this.dialogCfg.isShow = false;
      this.message({
        message: msg,
        type: type,
        duration: "2000"
      });
    }, 3000);
  }
}
</script>
<style lang="scss" scoped>
.vipInfo {
  padding: 15px;
}
</style>
