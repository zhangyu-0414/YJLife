<template>
  <div>
    <el-row :gutter="gutter">
      <el-col :span="span" :offset="3">
        <div class="blog-timeline" v-for="(item, value) in forms" :key="value">
          <article class="entry">
            <span class="entry-date"
              >{{ item.months }}
              <span>{{ item.day }}月</span>
            </span>
            <span class="entry-format">
              <i class="el-icon-document"></i>
            </span>
            <h1 class="entry-title">
              <a :title="item.title"
                ><router-link
                  :to="{ name: 'Articles', query: { id: item.id } }"
                  >{{ item.title }}</router-link
                ></a
              >
            </h1>
            <div class="entry-content">
              <p>{{ item.contents }}...</p>
            </div>
            <footer class="entry-footer clearfix">
              <span class="entry-label">
                <i class="el-icon-paperclip"></i>
                &nbsp;标签:&nbsp;
                <a title="layui">{{ item.biaoqian }}</a>
              </span>
              <span class="entry-separator">/</span>
              <span class="">
                <i class="el-icon-view"></i>
                &nbsp;浏览:&nbsp;
                <a>{{ item.looknum }}</a>
              </span>
              <a class="entry-readmore text-right pull-right">
                <router-link
                  :to="{ name: 'Articles', query: { id: item.id } }"
                  id="item.id"
                >
                  阅读全文</router-link
                >
                <i class="el-icon-arrow-right"></i>
              </a>
            </footer>
          </article>
        </div>

        <el-pagination
          background
          layout="prev, pager, next"
          :total="pagenumber"
          @current-change="handleSizeChange"
        >
        </el-pagination>
      </el-col>
      <el-col :span="6" v-show="shows"
        ><div class="widget">
          <h3>公示栏</h3>
          <ul class="hotest-posts-list">
            <li class="clearfix">
              <div class="entry-content">
                <h5>全新博客上线，功能正在逐步开发中</h5>
                <p
                  class="text-right"
                  style="margin-top: 20px; line-height: 20px"
                >
                  下次更新将优化用户设置，文章的删除和修
                </p>
                <p>改以及评论等功能也将在后续逐步完成。</p>
              </div>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
    <el-backtop></el-backtop>
  </div>
</template>

<script>
import qs from "qs";
export default {
  name: "Main",
  data() {
    return {
      forms: {
        day: "",
        months: "",
        contents: "",
      },
      shows: true,
      gutter: 20,
      span: 12,
      pagenumber: 10,
    };
  },
  beforeMount() {},
  mounted() {
    this.search();
    this.ChangWidth();
    window.onresize = () => {
      this.ChangWidth();
    };
  },
  methods: {
    search() {
      axios
        .post(
          "/api/serach",
          qs.stringify({
            pagenumber: this.pagenumber / 10,
          })
        )
        .then((res) => {
          // console.log(res)
          this.forms = res.data.data;
          this.pagenumber = Math.ceil(res.data.pagesum / 10) * 10;
          // console.log(this.pagenumber)

          for (let i = 0; i < this.forms.length; i++) {
            var string = res.data.data[i].content;
            var ls = string.replace(/<[^>]+>/gim, "");
            this.forms[i].contents = ls.replace(/&[a-z]+;/gim, "").slice(0, 60);
            var time = this.forms[i].pub_date.split("-");
            var timeday = time[2].split(" ");
            this.forms[i].months = time[1];
            this.forms[i].day = timeday[0];
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    handleSizeChange(val) {
      axios
        .post(
          "/api/serach",
          qs.stringify({
            pagenumber: val,
          })
        )
        .then((res) => {
          this.forms = res.data.data;
          for (let i = 0; i < this.forms.length; i++) {
            var string = res.data.data[i].content;
            var ls = string.replace(/<[^>]+>/gim, "");
            this.forms[i].contents = ls.replace(/&[a-z]+;/gim, "").slice(0, 60);
            var time = this.forms[i].pub_date.split("-");
            var timeday = time[2].split(" ");
            this.forms[i].months = time[1];
            this.forms[i].day = timeday[0];
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    ChangWidth() {
      const width = document.body.clientWidth;
      if (width <= 1000) {
        this.shows = false;
        this.span = this.gutter;
      } else {
        this.shows = true;
        this.span = 12;
      }
    },
  },
};
</script>

<style lang="less" scoped="scoped">
.el-row {
  margin-top: 30px;
  &:last-child {
    margin-bottom: 0;
  }
}

.grid-content {
  border-radius: 4px;
  height: auto;
  vertical-align: center;
}
.row-bg {
  padding: 0 0;
}
.blog-timeline {
  padding-left: 20px;
  border-left: 1px solid #eaeaea;
  position: relative;
}
.entry {
  min-height: 170px;
  position: relative;
  margin-bottom: 50px;
  padding-left: 75px;
  .entry-date {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 60px;
    text-align: center;
    padding: 13px 0 0;
    font: 700 20px/1 "Raleway", Verdana;
    background-color: #eaeaea;
    text-transform: uppercase;
    z-index: 15;
  }
  .entry-date > span {
    display: block;
    background-color: #3a3a3a;
    color: #f1f1f1;
    font-size: 14px;
    margin-top: 11px;
    padding: 6px 5px;
  }
  .entry-format {
    background-color: #009688;
    position: absolute;
    left: 0;
    top: 85px;
    display: block;
    width: 60px;
    color: #fff;
    font-size: 24px;
    line-height: 60px;
    z-index: 16;
  }
  .entry-title {
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: 1px;
    margin-bottom: 15px;
    text-align: left;
    a {
      color: #444;
      cursor: pointer;
      text-decoration: none;
    }
  }
  p {
    text-align: left;
    font-size: 14px;
    margin: 0 0 10px;
  }

  .entry-footer {
    text-align: left;
    font-size: 13px;
    line-height: 42px;
    color: #6a6a6a;
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
    a {
      color: #505050;
      font-weight: 700;
      cursor: pointer;
      text-decoration: none;
    }
    .pull-right {
      float: right;
    }
  }
  .entry-separator {
    margin: 0 5px;
    color: #888;
  }
}

.widget h3 {
  font-size: 18px;
  margin-bottom: 25px;
  color: #555;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 14px;
}
.el-pagination {
  margin-bottom: 30px;
}
</style>
