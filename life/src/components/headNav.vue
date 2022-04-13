<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">更多</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <div class="sign">
        <el-button
          type="primary"
          class="signIn"
          @click="dialogFormSignIn = true"
          >登录</el-button
        >
        <el-button
          type="primary"
          class="signUp"
          @click="dialogFormSignUp = true"
          >注册</el-button
        >
      </div>
    </el-menu>
    <el-dialog title="登录" :visible.sync="dialogFormSignIn">
      <el-form :model="formIn">
        <el-form-item label="用户名:" :label-width="formLabelWidth">
          <el-input v-model="formIn.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码:" :label-width="formLabelWidth">
          <el-input v-model="formIn.password" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormSignIn = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormSignIn = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <el-dialog title="注册" :visible.sync="dialogFormSignUp">
      <el-form :model="formUp">
        <el-form-item label="用户名：" :label-width="formLabelWidth">
          <el-input v-model="formUp.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码：" :label-width="formLabelWidth">
          <el-input v-model="formUp.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码：" :label-width="formLabelWidth">
          <el-input
            v-model="formUp.confirmPassword"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormSignUp = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormSignUp = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "headNav",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      dialogFormSignIn: false,
      dialogFormSignUp: false,
      formIn: {
        name: "",
        pasword: "",
      },
      formUp: {
        name: "",
        pasword: "",
        confirmPassword: "",
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    signIn() {},
    signUp() {},
  },
};
</script>

<style lang="less">
.sign {
  height: 60px;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  .signIn {
    margin-right: 10px;
  }
}
</style>
