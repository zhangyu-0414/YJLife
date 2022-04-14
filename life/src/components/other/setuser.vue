<template>
  <div>
    <div class="mains">
      <div class="security-right">
        <div data-v-d88496a2="" class="security-right-title">
          <span data-v-d88496a2="" class="security-right-title-text"
            >我的信息</span
          >
        </div>
        <div class="user-setting-warp">
          <div>
            <form class="el-form clearfix" mode="[object Object]">
              <div class="el-form-item user-nick-name">
                <label class="el-form-item__label">昵称:</label>
                <div class="el-form-item__content">
                  <div class="el-input">
                    <input
                      autocomplete="off"
                      placeholder="你的昵称"
                      type="text"
                      rows="2"
                      maxlength="16"
                      v-model="nickname"
                      validateevent="true"
                      class="el-input__inner"
                    />
                  </div>
                  <span class="nick-name-not">注：请谨慎修改</span>
                </div>
              </div>
              <div class="el-form-item user-nick-rel-name">
                <label class="el-form-item__label">用户名:</label>
                <div class="el-form-item__content">
                  <span class="userinfo-descript">{{ userdata.username }}</span>
                </div>
              </div>
              <div class="el-form-item user-my-sign">
                <label class="el-form-item__label">email:</label>
                <div class="el-form-item__content">
                  <div class="el-textarea">
                    <span class="userinfo-descript">{{ userdata.email }}</span>
                  </div>
                </div>
              </div>
              <div class="el-form-item user-my-sex">
                <label class="el-form-item__label">名次:</label>
                <div class="el-form-item__content">
                  <div
                    class="el-radio-group"
                    style="float: left; line-height: 36px"
                  >
                    <span class="userinfo-descript"
                      >您是第{{ userdata.id }}名用户</span
                    >
                  </div>
                </div>
              </div>
              <div class="el-form-item user-my-date">
                <label class="el-form-item__label">提示:</label>
                <div class="el-form-item__content">
                  <div
                    class="el-radio-group"
                    style="float: left; line-height: 36px"
                  >
                    <span class="userinfo-descript"
                      >目前功能尚未完善，如需更改其他的内容请发送邮件到email:1933257661@qq.com</span
                    >
                  </div>
                </div>
              </div>
              <div class="el-form-item user-my-btn">
                <div class="el-form-item__content">
                  <div class="padding-dom"></div>
                  <div class="user-my-btn-warp" style="margin-top: 30px">
                    <button
                      type="button"
                      class="el-button el-button--primary"
                      @click="submit"
                    >
                      <span>保存</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import qs from "qs";
export default {
  data() {
    return {
      userdata: {},
      nickname: "",
    };
  },
  mounted() {
    if (window.sessionStorage.userdata !== undefined) {
      this.userdata = JSON.parse(window.sessionStorage.userdata);
    }
    if (this.userdata !== "") {
      this.nickname = this.userdata.nickname;
    }
  },
  methods: {
    submit() {
      axios
        .post(
          "/my/userinfo",
          qs.stringify({
            id: this.userdata.id,
            nickname: this.nickname,
          })
        )
        .then((res) => {
          if (res.data.status === 0) {
            alert("更新成功");
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="less" scoped="scoped">
.mains {
  width: 830px;
  margin: 0 auto;
}
.security-right {
  float: left;
  width: 829px;
  border: 1px solid #ddd;
  background: #fff;
  min-height: 599px !important;
  .security-right-title[data-v-d88496a2] {
    height: 50px;
    padding-left: 30px;
    border-bottom: 1px solid #ddd;
  }
  .el-form-item__label {
    width: 95px;
    text-align: right;
    margin-right: 20px;
    float: left;
    line-height: 30px;
    padding: 0;
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #48576a;
    line-height: 1;
    padding: 11px 12px 11px 0;
    box-sizing: border-box;
  }
  .user-setting-warp {
    padding: 20px 20px 0;
    position: relative;
  }
  .user-nick-name .el-input,
  .user-nick-name .el-input__inner {
    float: left;
    width: 225px;
    height: 30px;
    margin-right: 40px;
  }
  .el-form-item__content {
    line-height: 30px;
    position: relative;
    font-size: 14px;

    .el-input {
      position: relative;
      font-size: 14px;
      display: inline-block;
    }
    .nick-name-not {
      color: #aaa;
    }
    .el-input__inner {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background-color: #fff;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #bfcbd9;
      box-sizing: border-box;
      color: #1f2d3d;
      font-size: inherit;
      height: 36px;
      line-height: 1;
      outline: 0;
      padding: 3px 10px;
      transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .userinfo-descript {
      font-size: 14px;
      color: #898989;
      float: left;
    }
    .user-my-sign .el-textarea,
    .user-my-sign .el-textarea .el-textarea__inner {
      float: left;
      width: 500px;
      height: 88px;
      resize: none;
    }
    .el-textarea__inner {
      display: block;
      resize: vertical;
      padding: 5px 7px;
      line-height: 1.5;
      width: 100%;
      color: #1f2d3d;
      background-color: #fff;
      background-image: none;
      border: 1px solid #bfcbd9;
      border-radius: 4px;
      transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .el-button,
    .el-textarea__inner {
      font-size: 14px;
      box-sizing: border-box;
    }
    .el-textarea {
      float: left;
      display: inline-block;
      width: 60%;
      vertical-align: bottom;
      position: static;
    }
  }
}
</style>
