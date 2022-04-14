<template>
  <div class="home">
    <!-- 头部信息 -->

    <el-header background-color="#545c64"
      ><div>
        <el-menu
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          style="width: 100%"
          router
        >
          <div style="float: left">
            <el-menu-item index="/main">首页</el-menu-item>
          </div>
          <el-submenu index>
            <template slot="title" style="float: left; width: 80px"
              >功能中心</template
            >
            <el-menu-item index="/article">发布文章</el-menu-item>
            <el-menu-item index="/setuser">用户设置</el-menu-item>
            <el-menu-item index="/about">关于</el-menu-item>
          </el-submenu>
          <div style="float: right">
            <el-menu-item class="rights" v-show="shows ? false : true"
              ><a @click="tuichu">退出登录</a></el-menu-item
            >
          </div>
          <div>
            <el-menu-item class="rights" v-show="shows ? false : true"
              >用户:{{ userdata.username }}</el-menu-item
            >
          </div>
          <div class="buttons">
            <el-button
              type="primary"
              class="rights"
              v-show="shows"
              @click="zhuce"
              >注册</el-button
            >
            <el-button
              type="primary"
              class="rights"
              v-show="shows"
              @click="denglu"
              >登录</el-button
            >
          </div>
        </el-menu>
      </div>
    </el-header>

    <!-- 内容所在区域 -->
    <el-container>
      <el-main><router-view></router-view></el-main>

      <!-- footer数据区域 -->

      <el-footer><Footer /></el-footer>
    </el-container>

    <!-- 登录注册表单 -->

    <!-- 登录 -->
    <div class="forms" v-show="show">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        style="width: 400px"
        v-show="show"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            type="text"
            v-model="ruleForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :plain="true" id="logins" @click="logins"
            >登录</el-button
          >
          <el-button @click="zuce">注册</el-button>
          <el-button @click="guanbi">关闭</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 注册 -->
    <div class="zuceform" v-show="show1">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        style="top: -500px"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            type="text"
            v-model="ruleForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input
            type="text"
            v-model="ruleForm.email"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="重复密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="getCode">
          <el-input
            type="text"
            v-model="ruleForm.getCode"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="yanz" :loading="loads">{{
            codes ? "验证" : timed + "s"
          }}</el-button>
          <el-button @click="zhuces">注册</el-button>
          <el-button @click="guanbi">关闭</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 登录后的背景 -->

    <div class="bgd" v-show="bgshow"></div>
  </div>
</template>

<script>
import Header from "../components/header/index.vue";
import Main from "../components/main/index.vue";
import Footer from "../components/footer/index.vue";
import qs from "qs";
export default {
  name: "Home",
  components: {
    Header,
    Main,
    Footer,
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var getCodes = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else {
        callback();
      }
    };
    var emails = (rule, value, callback) => {
      var str = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (value === "") {
        callback(new Error("请输入邮箱"));
      }
      if (!str.test(value)) {
        callback(new Error("邮箱输入有误,请检查邮箱是否正确"));
      } else {
        callback();
      }
    };
    return {
      show: false,
      ruleForm: {
        username: "",
        checkPass: "",
        getCode: "",
        email: "",
      },
      rules: {
        username: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        getCode: [{ validator: getCodes, trigger: "blur" }],
        email: [{ validator: emails, trigger: "blur" }],
      },
      msgs: "",
      shows: true,
      userdata: {},
      show1: false,
      bgshow: false,
      codes: true,
      timed: 15,
      loads: false,
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  beforeMount() {
    this.logind();
  },
  methods: {
    zhuces() {
      const data = this.ruleForm;
      if (
        data.username != "" &&
        data.email != "" &&
        data.checkPass != "" &&
        data.getCode != "" &&
        data.username != ""
      ) {
        axios
          .post(
            "/api/rest/",
            qs.stringify({
              username: this.ruleForm.username,
              password: this.ruleForm.checkPass,
              email: this.ruleForm.email,
              code: this.ruleForm.getCode,
            })
          )
          .then((res) => {
            this.open(res.data.msg);
          })
          .catch(function (err) {
            console.log(err);
          });
      } else {
        this.open("请认真填写账号，不要漏填信息");
      }
    },
    async yanz() {
      if (this.ruleForm.email != "") {
        axios
          .post(
            "/api/getcode/",
            qs.stringify({
              email: this.ruleForm.email,
            })
          )
          .then(function (res) {})
          .catch(function (err) {
            console.log(err);
          });
        this.loads = true;
        this.codes = false;
        var setsm = setInterval(() => {
          this.timed--;
          if (this.timed === 0) {
            clearInterval(setsm);
            this.codes = true;
            this.loads = false;
            this.timed = 15;
          }
        }, 1000); //反复执行函数本身
      } else {
        this.open("email不能为空");
      }
    },
    logins() {
      if (this.ruleForm.username != "" && this.ruleForm.checkPass != "") {
        axios
          .post(
            "/api/login/",
            qs.stringify({
              username: this.ruleForm.username,
              password: this.ruleForm.checkPass,
            })
          )
          .then((res) => {
            if (res.data.status === 0) {
              window.sessionStorage.setItem("username", this.ruleForm.username);
              window.sessionStorage.setItem(
                "checkPass",
                this.ruleForm.checkPass
              );
              // window.sessionStorage.setItem('token', res.data.token)
              window.localStorage.setItem("token", res.data.token);
              this.xianshi(this.ruleForm.username, res.data.token);
              this.bgds();
              this.msgs = res.data.msg;
              this.open(this.msgs);
            } else {
              this.open("账号或密码有误，请重新登录");
            }
          })
          .catch(function (err) {
            console.log(err);
          });
      } else {
        this.open("账号名或密码不能为空");
      }
    },
    bgds(res) {
      this.bgshow = false;
      this.show = false;
      this.shows = false;
    },
    guanbi() {
      this.show = false;
      this.show1 = false;
      this.bgshow = false;
    },
    zuce() {
      this.show1 = true;
      this.show = false;
    },
    open(msgs) {
      this.$message(msgs);
    },
    async xianshi(name, token) {
      axios
        .get(
          "/my/userinfo/",
          qs.stringify({
            username: name,
          }),
          { headers: { Authorization: token } }
        )
        .then((res) => {
          this.$store.state.userdata = res.data.data;
          this.userdata = res.data.data;
          this.$store.state.userdata = res.data.data;
          var value = JSON.stringify(res.data.data);
          var taoge = window.sessionStorage.setItem("userdata", value);
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    handleSelect(key, keyPath) {},
    denglu() {
      this.show = true;
      this.bgshow = true;
    },
    tuichu() {
      this.shows = true;
      // 从 sessionStorage 删除所有保存的数据
      sessionStorage.clear();
      localStorage.removeItem("token");
    },
    zhuce() {
      this.bgshow = true;
      this.show1 = true;
    },
    submitForm(formName) {},
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 自动登录
    logind() {
      axios
        .post(
          "/api/login/",
          qs.stringify({
            username: window.sessionStorage.username,
            password: window.sessionStorage.checkPass,
          })
        )
        .then((res) => {
          if (res.data.status === 0) {
            window.localStorage.setItem("token", res.data.token);
            this.xianshi(window.sessionStorage.username);
            this.bgds();
            this.msgs = res.data.msg;
            this.open(this.msgs);
          }
        })
        .catch(function (err) {});
    },
  },
};
</script>

<style lang="less" scoped>
.el-header {
  width: 100%;
  background-color: #545c64;
  color: #333;
  text-align: center;
}
.el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
  background-color: #2a2a2a;
}
.el-main {
  margin: 0;
  padding: 0;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  overflow-x: hidden;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.forms {
  position: fixed;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  top: 50px;
  z-index: 666;
  top: 150px;
  .demo-ruleForm {
    margin: 0 auto;
  }
}
.zuceform {
  position: fixed;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  top: 50px;
  z-index: 666;
  top: 100px;
  .demo-ruleForm {
    margin: 0 auto;
    width: 400px;
  }
}
.bgd {
  position: fixed;
  background-color: #f0f7ff;
  opacity: 0.8;
  width: 100%;
  height: 999px;
  top: 0px;
  z-index: 333;
}
.el-menu-demo {
  width: 100%;
}
.rights {
  float: right;
}
.buttons {
  margin-top: 10px;
}
el-button {
  .rights {
    line-height: 80px;
  }
}
div {
  .rights {
    margin-right: 10px;
    cursor: pointer;
  }
  .right {
    cursor: pointer;
  }
}
.el-menu-item {
  padding: 0 0;
}
</style>
