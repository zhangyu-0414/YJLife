<template>
  <div>
    <div class="mainBody">
      <div class="leftMain">
        <ul>
          <li>
            <div>
              <div class="topLeft">
                <div class="leftTo">
                  <img
                    src="../assets/logo.png"
                    alt=""
                    width="65px"
                    height="70px"
                  />
                </div>
                <div class="rightTo">
                  <p>uniapp云开发获取手机号标题</p>
                  <p>1、内容。。。。。。。。</p>
                </div>
              </div>
              <div class="bottomLeft">
                <div class="leftBo">
                  <img
                    src="../assets/logo.png"
                    alt=""
                    width="65px"
                    height="70px"
                  />
                </div>
                <div class="rightBo">
                  <div class="rightTo">
                    <p>uniapp云开发获取手机号标题</p>
                    <p>1、内容。。。。。。。。</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="rightMain">
        <p>公示栏</p>
        <p>全新博客上线</p>
        <p>下次更新将优化用户设置</p>
      </div>
    </div>
    <el-pagination background layout="prev, pager ,next" :total="1000">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "mainBody",
  data() {
    return {};
  },
};
</script>

<style lang="less">
.mainBody {
  display: flex;
  justify-content: space-around;
  align-items: center;
  .leftMain {
    ul {
      list-style: none;
      li {
        border-left: 1px solid skyblue;
        padding-left: 20px;
        margin: 20px 0;
        .topLeft {
          display: flex;
          justify-content: center;
          align-items: center;
          .rightTo {
            margin-left: 10px;
            border-bottom: 1px solid grey;
          }
        }
        .bottomLeft {
          display: flex;
          justify-content: center;
          align-items: center;
          .rightBo {
            margin-left: 10px;
            border-bottom: 1px solid grey;
          }
        }
      }
    }
  }
  .rightMain {
    align-self: flex-start;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 1);
    p {
      margin: 10px;
    }
  }
}
</style>
