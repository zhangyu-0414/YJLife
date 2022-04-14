<template>
  <div class="about">
    <section class="banner-about">
            <h1>关于我</h1>
        </section>
		<section class="container container-about">
		        <div class="col-xs-12 col-md-8 col-md-offset-2 text-center">
		            <p>此博客于2022年1月22日正式上线。</p>
		            <header class="title-block text-center mt50">
		                <h2 class="title-underblock dark">
		                    <span class="light color-red">个人</span>简介
		                </h2>
		            </header>
		            <p class="mt30">
		                请叫我小陶，1999年出生于江西省南昌市，2021年毕业于<a rel="nofollow" target="_blank" href="http://www.jxxdxy.edu.cn/">江西现代职业技术学院</a>，所学专业软件技术，致力成为一名优异的<a rel="nofollow" target="_blank" href="http://baike.baidu.com/link?url=WiuEF85BN0Z1_fSZivdy-iiDIH5E_PoE54To6o4WYgigUVMvqkxKUrlW_e7il8XZww5dE2sSWIwT4Zjkx7pwDq">全栈开发工程师</a>。
		            </p>
		            <header class="title-block text-center mt50">
		                <h2 class="title-underblock dark">
		                    <span class="light color-red">职业</span>技能
		                </h2>
		            </header>
		            <p class="mt30">
		                编程语言：javascript，php，nodejs，python，jsp<br>
		                web框架：vue，express，bootstrap，jquery，html，css，uniapp等<br>
						开发工具：hbuildx，微信开发者工具，IntelliJ IDEA，webstorm，eclipse，postman等<br>
		                数据库：mysql，mongodb<br>
						小程序：微信小程序
		            </p>
		            <header class="title-block text-center mt50">
		                <h2 class="title-underblock dark">
		                    <span class="light color-red">项目</span>经验
		                </h2>
		            </header>
		            <p class="mt30">
		                2022初-至今&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://www.taogeshuai.cn" alt="个人博客" target="_blank">小陶的博客（新）</a>，作者
		               <span>前端vue全家桶+axios 后端node.js+express+mysql 功能：登录，注册，写文章，修改用户信息，注册发送验证码等 老版本使用前端使用html+jq+ajax 后端使用php</span> 
		                2020.07-至今&nbsp;&nbsp;&nbsp;&nbsp;<a rel="nofollow" href="http://taogeshuai.cn:5000"  target="_blank">uniapp小商城开发</a>，后端开发
		                <span>基于vue开发的图书商城手机端h5页面可转微信小程序或安卓，后端使用php（项目仍在独立开发中）</span>
		                2020.07-2021.9&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://taogeshuai.cn/dist/index.html#/login" alt="vue后台项目">vue后台项目</a>
		                <span>基于vue开发的完整后台，后端为node.js+koa+mysql，使用vue脚手架开发，axios发送请求，vue-router页面跳转同时设置路由守卫，进行跳转拦截，vuex全局数据处理等。项目已上线gitee和github</span>
		                2020.09-2021.06&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://taogeshuai.cn:5000/jxambb/admin/login.jsp" alt="艾米巴巴平台" target="_blank">艾米巴巴平台</a>，后台开发
		                <span>实现图片文件上传下载，导航栏管理，管理员登陆权限，公告栏信息更换等。javaEE,springboot,jsp</span>
		                2019.09~2021.08&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://www.taogeshuai.cn:5000/yfzx/admin/login.jsp" alt="江西意风在线" target="_blank">江西意风在线</a>，网站建设者之一
		<br>
		                <span>实现登陆，修改以及用户账户注销，账户管理，查看用户资料，文档转换，echart图表，题目创建等。（该项目为江西意风公司项目）</span>
		            </p>
		            <header class="title-block text-center mt50">
		                <h2 class="title-underblock dark">
		                    <span class="light color-red">联系</span>方式
		                </h2>
		            </header>
		            <p class="mt30">QQ：1933257661&nbsp;&nbsp;&nbsp;&nbsp;邮箱：1933257661@qq.com</p>
		
		        </div>
		    </section>
  </div>
</template>
<script type="text/javascript">
	
</script>

<style type="text/css" lang="less" scoped="scoped">
	.banner-about {
	    background-position: top;
	    background-size: cover!important;
	    background-repeat: no-repeat;
	    background-attachment: fixed !important;
	    height: 200px;
	    width: 100%;
	    color: #fff;
	    position: relative;
	    text-align: center;
	    background: url(../images/banner.jpg);
		h1 {
		    top: 50px;
		    position: relative;
		    z-index: 2;
		    font-size: 25px;
		    background: transparent!important;
		    line-height: 100%;
		    display: inline-block;
		    padding: 11px 35px;
		    border: 2px solid #fff;
		}
	}
	.banner-about:before {
	    content: "";
	    background: url(../images/overlay.png) repeat;
	    position: absolute;
	    width: 100%;
	    height: 100%;
	    z-index: 0;
	    top: 0;
	    left: 0;
	}
	.container-about {
	    text-align: justify;
	    font-size: 18px;
	    margin-top: 30px;
	    margin-bottom: 30px;
	    line-height: 32px;
	}
	.container {
		width: 60%;
	    padding-right: 15px;
	    padding-left: 15px;
	    margin-right: auto;
	    margin-left: auto;
		.col-xs-12 {
		    width: 100%;
		}
		.text-center {
		    text-align: center;
		}
		.col-md-8, .col-xs-12 {
		    position: relative;
		    min-height: 1px;
		    padding-right: 15px;
		    padding-left: 15px;
		}
		.text-center {
		    text-align: center;
		}
		.col-xs-12 {
		    width: 100%;
		}
		.mt30 {
		    margin-top: 30px!important;
			// width: 50%;
			text-align: center;
		}
		p {
		    margin: 0 0 10px;
		}
	}
	.container-about p>span {
	    font-size: 16px;
	    color: #aaa;
	    display: block;
	    margin-bottom: 20px;
	}
	a {
	    cursor: pointer;
	    text-decoration: none;
		color: #337ab7;
	}
</style>
