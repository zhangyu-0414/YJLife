<template>
  <div>
    <div class="container">
      <el-row :gutter="20">
        <el-col :span="12" :offset="3"
          ><div class="collection-title">
            <h1 class="collection-header">{{ datas.title }}</h1>
            <div class="collection-info">
              <span class="meta-info">
                <i class="el-icon-paperclip"></i>
                {{ datas.biaoqian }}
                &nbsp;&nbsp;
                <i class="el-icon-date"></i> {{ datas.time }}
                &nbsp;&nbsp;
                <i class="el-icon-view"></i> {{ datas.looknum }}
              </span>
            </div>
            <div class="collection-info">
              <span class="meta-info"> </span>
            </div></div
        ></el-col>
        <el-col :span="6"></el-col>
      </el-row>
    </div>
    <el-row :gutter="20">
      <el-col :span="12" :offset="3"
        ><div class="contents" v-html="datas.content"></div
      ></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>
<script>
import qs from "qs";
export default {
  data() {
    return {
      id: "",
      datas: [],
    };
  },
  mounted() {
    this.id = this.$route.query.id;
    this.huoqu();
    this.numberV();
  },
  methods: {
    huoqu() {
      axios
        .post(
          "/api/articleG",
          qs.stringify({
            id: this.id,
          })
        )
        .then((res) => {
          this.datas = res.data.data[0];
          var time = res.data.data[0].pub_date.split(" ")[0];
          this.datas.time = time;
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    numberV() {
      axios
        .post(
          "/api/lookV",
          qs.stringify({
            id: this.id,
          })
        )
        .then((res) => {
          // console.log(res)
        })
        .catch(function (err) {
          console.log(err);
        });
    },
  },
};
</script>
<style lang="less" scoped="scoped">
.el-row {
  // margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.contents {
  margin-left: 30px;
  text-align: left;
  min-height: 550px !important;
}
.container {
  width: 100%;
  text-align: left;
  // margin-left: auto;
  background-color: #2a2a2a;

  color: #8a8a8a;
  min-height: 128px;
  .collection-title {
    padding: 20px 30px 30px;
  }
  .home .banner div.collection-head {
    background-color: #2a2a2a;
    margin-top: 0px;
    color: #8a8a8a;
    min-height: 128px;
  }
  h1 {
    margin-bottom: 10px;
  }
  .collection-header {
    color: #bebebe;
    font-size: 30px;
  }
}
</style>
