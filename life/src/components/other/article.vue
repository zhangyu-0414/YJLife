<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="文章标题" prop="title">
        <el-radio-group v-model="ruleForm.title">
          <el-input v-model="ruleForm.title" style="width: 300px"></el-input>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否发布" prop="state">
        <el-select v-model="ruleForm.state" placeholder="请选择活动区域">
          <el-option label="草稿" value="草稿"></el-option>
          <el-option label="发布" value="发布"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="文章标签" prop="biaoqian">
        <el-radio-group v-model="ruleForm.biaoqian" style="width: 300px">
          <el-input v-model="ruleForm.biaoqian"></el-input>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式" prop="content">
        <div
          id="myWangEditor"
          class="editorgood"
          ref="myWangEditor"
          v-show="true"
        ></div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import hljs from "highlight.js";
import wangEditor from "wangeditor";
import "highlight.js/styles/monokai-sublime.css";
import qs from "qs";

var editor = null;
export default {
  data() {
    return {
      editorContent: "", //内容
      data: [],
      ruleForm: {
        title: "",
        state: "",
        delivery: false,
        biaoqian: "",
        file: null,
        content: "",
      },
      rules: {
        title: [{ required: true, message: "请输入标题", trigger: "blur" }],
        state: [
          { required: true, message: "请选择草稿或是发布", trigger: "change" },
        ],
        biaoqian: [
          { required: true, message: "请填写标签信息", trigger: "blur" },
          {
            min: 1,
            max: 15,
            message: "长度在 1 到 15 个字符",
            trigger: "blur",
          },
        ],
        desc: [{ required: true, message: "请填写内容", trigger: "blur" }],
      },
    };
  },
  created() {},
  mounted() {
    this.data = this.$store.state.userdata;
    // var _this = this;
    editor = new wangEditor(".editorgood"); //实例化wangeditor

    editor.config.showLinkVideo = false;
    // 配置菜单栏，设置不需要的菜单
    editor.config.excludeMenus = ["emoticon", "video"];

    // 如需图片上传请修改如下代码：

    editor.customConfig = {
      onchange: (html) => {
        this.editorContent = html;
      },
      uploadImgMaxSize: 1 * 1024 * 1024, // 将图片大小限制为 3M
      uploadFileName: "myFileName", //设置上传图片文件的时候，后台接受的文件名，files.myFileName;
      withCredentials: true, //跨域上传中如果需要传递 cookie 需设置 withCredentials
      uploadImgTimeout: 3000, //自定义 timeout 时间，这里是设置的3秒
      // 　　　　　　　　　　　　uploadImgServer : 'http://127.0.0.1/api/upload' , //上传到后台的接口
    };

    // 配置 server 接口地址
    (editor.config.uploadFileName = "myFileName"),
      (editor.config.uploadImgParams = {});
    editor.config.uploadImgServer = "http://www.taogeshuai.cn:8088/api/upload";
    editor.config.pasteFilterStyle = false;
    editor.config.uploadImgMaxLength = 1; // 限制一次最多上传 1 张图片
    editor.config.uploadImgHooks = {
      // 上传图片之前
      before: function (xhr, editor, res) {
        // // 可阻止图片上传
        // return {
        //     prevent: true,
        //     msg: '需要提示给用户的错误信息'
        // }
      },
      // 图片上传并返回了结果，图片插入已成功
      success: function (xhr, editor, res) {
        console.log("success", res.data);
      },
      // 图片上传并返回了结果，但图片插入时出错了
      fail: function (xhr, editor, resData) {
        console.log("fail", resData);
      },
      // 上传图片出错，一般为 http 请求的错误
      error: function (xhr, editor, resData) {
        console.log("error", xhr, resData);
      },
      // 上传图片超时
      timeout: function (xhr) {
        console.log("timeout");
      },
    };
    this.toListenUp(editor); //监听上传的各个阶段
    // 挂载highlight插件
    editor.highlight = hljs;
    editor.create();
  },
  methods: {
    tijiao() {
      alert();
    },
    submitForm(formName) {
      this.ruleForm.content = editor.txt.html();
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
          axios
            .post("/my/article/add", qs.stringify(this.ruleForm))
            .then((res) => {
              if (res.data.status === 0) {
                alert("添加文章成功");
              } else {
                alert("请登录后再尝试");
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    toListenUp: function (editor) {
      //监听上传图片的几个阶段，和做相应的处理
      var _this = this;
      editor.customConfig.uploadImgHooks = {
        before: function (xhr, editor, files) {
          // 图片上传之前触发
          // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，files 是选择的图片文件
          // 如果返回的结果是 {prevent: true, msg: 'xxxx'} 则表示用户放弃上传
          // return {
          //     prevent: true,
          //     msg: '放弃上传'
          // }
        },
        success: function (xhr, editor, result) {
          // 图片上传并返回结果，图片插入成功之后触发
          // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
          console.log(result);
        },
        fail: function (xhr, editor, result) {
          // 图片上传并返回结果，但图片插入错误时触发
          // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
        },
        error: function (xhr, editor) {
          // 图片上传出错时触发
          // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
        },
        timeout: function (xhr, editor) {
          // 图片上传超时时触发
          // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
        },

        // 如果服务器端返回的不是 {errno:0, data: [...]} 这种格式，可使用该配置
        // （但是，服务器端返回的必须是一个 JSON 格式字符串！！！否则会报错）
        customInsert: function (insertImg, result, editor) {
          // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
          // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果// 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
          var url = result.data[0]; //获取后台返回的图片路径
          insertImg(url); //把图片路径展示在编辑器里面
          // result 必须是一个 JSON 格式字符串！！！否则报错
        },
      };
    },
  },
};
</script>

<style lang="less" scoped="scoped">
.demo-ruleForm {
  position: static;
  padding-top: 30px;
  width: 650px;
  margin: 0 auto;
  height: 100%;
}
.editorgood {
  margin-top: 10px;
  position: relative;
  text-align: left;
  width: 100%;
  z-index: 1;
}
</style>
