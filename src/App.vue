<template>
  <div id="app">
    <!-- <router-view/> -->
    <div class="left-box" :style="{backgroundColor:activeColor}">
      <div class="left-box-title">Czboy's Blog</div>
      <div class="my-head">
        <img src="./assets/image/app/mehead.jpg" alt="我的自拍" />
        <!-- <img src="./assets/image/app/psb.jpg" alt /> -->
      </div>
      <div class="my-desc">
        <p>
          czboy（长治男孩）、95后一枚
          <br />&nbsp;&nbsp;&nbsp;非科班程序员，专注java、
          python、web前端、大数据方向
        </p>
      </div>
      <!-- icon -->
      <div class="my-blog">
        <ul>
          <li>
            <a href="#">
              <img src="./assets/image/app/twitter43.png" alt="推特" title="推特" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./assets/image/app/facebook.png" alt="脸书" title="脸书" />
            </a>
          </li>
          <li>
            <a href="https://blog.csdn.net/qq_37504376" target="_blank">
              <img src="./assets/image/app/csdn.png" alt="CSDN" title="CSDN" />
            </a>
          </li>
          <li>
            <a href="https://github.com/cz6oy" target="_blank">
              <img src="./assets/image/app/githubb.png" alt="github" title="github" />
            </a>
          </li>
          <li>
            <a href="https://weibo.com/6226694438" target="_blank">
              <img src="./assets/image/app/weibo.png" alt="微博" title="微博" />
            </a>
          </li>
        </ul>
      </div>
      <!-- 左侧导航栏 -->
      <div class="my-nav">
        <ul>
          <li>
            <a href="#" @click="goPage('home')" :style="{color:active}">
              <span class="glyphicon glyphicon-home"></span>&nbsp;
              <strong>Blog Home</strong>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="glyphicon glyphicon-bookmark"></span>&nbsp;
              <strong>Blog Post</strong>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="glyphicon glyphicon-user"></span>&nbsp;
              <strong>About Me</strong>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 右边上部盒子 -->
    <div class="right-top-box" v-show="isShowHomePage">
      <div class="title">Hello！ Guys Welcome To Czboy's Personal Blog</div>
      <p>Welcome to my blog. Subscribe and get my latest blog post in your inbox.</p>
      <form>
        <div class="form-group">
          <input type="text" placeholder="Enter email" />
        </div>
        <button
          type="button"
          :style="{backgroundColor:activeColor,borderColor:activeColor}"
          @click="btnEmail()"
        >Subscribe</button>
      </form>
    </div>

    <!-- 右边下部盒子 -->
    <div class="right-bottom-box" v-if="isShowHomePage"></div>

    <!-- 展示六条信息 -->
    <hotArticle v-if="isShowHomePage"></hotArticle>

    <!-- 右侧悬浮导航栏 -->
    <div class="slide" :style="{backgroundColor:activeColor}">
      <ul class="icon">
        <li>
          <a href="#" @click="goPage('web')">
            <img src="./assets/image/app/h5.png" alt="Web前端" title="Web前端" />
          </a>
        </li>
        <li>
          <a href="#" @click="goPage('java')">
            <img src="./assets/image/app/java (1).png" alt="Java" title="Java" />
          </a>
        </li>
        <li>
          <a href="#" @click="goPage('python')">
            <img src="./assets/image/app/python (1).png" alt="Python" title="Python" />
          </a>
        </li>
        <li>
          <a href="#" @click="goPage('bigdata')">
            <img src="./assets/image/app/bigdata.png" alt="大数据" title="大数据" />
          </a>
        </li>
      </ul>
    </div>

    <!-- 路由页面 -->
    <router-view class="router-view" />

    <!-- 尾部盒子 -->
    <div class="footer">
      <div>Copyright © 2019.Company name All rights reserved</div>
    </div>
  </div>
</template>



<script>
import hotArticle from "./components/HotArticle.vue";

export default {
  data() {
    return {
      activeColor: "",
      active: "rgba(0,0,0,0.5)",
      isShowHomePage: true
    };
  },
  components: {
    hotArticle
  },
  methods: {
    goPage: function(val) {
      console.log(val);
      if (val == "home") {
        window.location = "http://localhost:8080/";
        this.isShowHomePage = true;
        this.active = "rgba(0,0,0,0.5)";
        return;
      } else if (val == "python") {
        this.$router.push({ name: "python" });
      } else if (val == "web") {
        this.$router.push({ name: "web" });
      } else if (val == "bigdata") {
        this.$router.push({ name: "bigdata" });
      } else if (val == "java") {
        this.$router.push({ name: "java" });
      }
      this.isShowHomePage = false;
      this.active = "rgba(255, 255, 255, 0.8)";
    },
    btnEmail: function() {
      alert("暂未开通邮箱订阅，敬请期待！");
    },
    // 随机背景颜色
    randomBgColor: function() {
      var arr = [
        "#5D6BA7",
        "#6C51A4",
        "#5469C9",
        "#5ECCA9",
        "#3B7EEB",
        "#5BC3D5",
        "#5FCB71",
        "rgb(238, 167, 59)"
      ];
      var random = Math.floor(Math.random() * arr.length);
      this.activeColor = arr[random];
    },
    initLoadData: function() {
      axios({
        method: "GET",
        url: "http://localhost:8080/czboy/article/",
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    },
    //初始化
    init: function() {
      this.randomBgColor();
      this.initLoadData();
    }
  },
  mounted: function() {
    this.init();
  }
};
</script>

<style lang="less">
@import "./assets/css/app.less";
</style>
