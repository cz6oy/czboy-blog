<template>
  <div id="app">
    <!-- <router-view/> -->
    <div class="left-box" :style="{backgroundColor:activeColor}">
      <div class="left-box-title">Czboy's Blog</div>
      <div class="my-head">
        <img src="./assets/image/app/mehead.jpg" alt />
        <!-- <img src="./assets/image/app/psb.jpg" alt /> -->
      </div>
      <div class="my-desc">
        <p>
          czboy（长治男孩）、95后一枚、
          <br />&nbsp;&nbsp;&nbsp;非科班程序员，专注java、
          Go、python、web前端、大数据方向。
        </p>
      </div>
      <!-- icon -->
      <div class="my-blog">
        <ul>
          <li>
            <a href="#">
              <img src="./assets/image/app/twitter43.png" alt />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./assets/image/app/facebook.png" alt />
            </a>
          </li>
          <li>
            <a href="https://blog.csdn.net/qq_37504376" target="_blank">
              <img src="./assets/image/app/csdn.png" alt />
            </a>
          </li>
          <li>
            <a href="https://github.com/cz6oy" target="_blank">
              <img src="./assets/image/app/githubb.png" alt />
            </a>
          </li>
          <li>
            <a href="https://weibo.com/6226694438" target="_blank">
              <img src="./assets/image/app/weibo.png" alt />
            </a>
          </li>
        </ul>
      </div>
      <!-- 左侧导航栏 -->
      <div class="my-nav">
        <ul>
          <li>
            <router-link to :style="{color:active}">
              <span class="glyphicon glyphicon-home"></span>&nbsp;
              <strong>Blog Home</strong>
            </router-link>
          </li>
          <li>
            <router-link to>
              <span class="glyphicon glyphicon-bookmark"></span>&nbsp;
              <strong>Blog Post</strong>
            </router-link>
          </li>
          <li>
            <router-link to>
              <span class="glyphicon glyphicon-user"></span>&nbsp;
              <strong>My Journal</strong>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- 右边上部盒子 -->
    <div class="right-top-box">
      <div class="title">Hello！ Guys Welcome To Czboy's Personal Blog</div>
      <p>Welcome to my blog. Subscribe and get my latest blog post in your inbox.</p>
      <form>
        <div class="form-group">
          <input type="text" placeholder="Enter email" />
        </div>
        <button type="button" :style="{backgroundColor:activeColor,borderColor:activeColor}" @click="btnEmail()">Subscribe</button>
      </form>
    </div>
    <!-- 右边下部盒子 -->
    <div class="right-bottom-box"></div>
    <!-- 路由页面 -->
    <router-view class="router-view" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeColor: "",
      active: "rgba(0,0,0,0.5)"
    };
  },
  methods: {
    btnEmail:function(){
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
    }
  },
  mounted: function() {
    this.randomBgColor();
  }
};
</script>

<style lang="less">
* {
  margin: 0px;
  padding: 0px;
}
ul li {
  list-style: none;
}
.left-box {
  float: left;
  width: 307px;
  height: 100vh;
  background-color: #5bc3d5;
  .left-box-title {
    padding-top: 28px;
    font-weight: bold;
    font-size: 25px;
    line-height: 30px;
    height: 30px;
    text-align: center;
    color: rgb(255, 255, 255);
  }
  .my-head {
    position: relative;
    margin: 60px auto 0px auto;
    width: 170px;
    height: 170px;
    // background-color: #fff;
    border-radius: 50%;

    img {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 165px;
      height: 165px;
      border-radius: 50%;
    }
  }
  .my-desc {
    padding: 25px 20px;
    height: 100px;
    text-align: center;
    color: #fff;
    font-size: 13px;
    p {
      line-height: 20px;
    }
  }
  .my-blog {
    padding: 0px 30px;
    margin: 30px 0px 100px 0px;
    // height: 30px;
    background-color: #fff;
    ul li {
      float: left;
      width: 20%;
      height: 31px;
      a > img {
        margin: 0px auto;
        display: inline-block;
        width: 32px;
        height: 32px;
      }
    }
  }
  .my-nav {
    width: 100%;
    // height: 100px;
    padding: 0px 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    ul {
      li {
        padding-top: 15px;
        padding-left: 70px;
        width: 100%;
        height: 45px;
        font-weight: bold;
        line-height: 45px;
        text-align: left;
        a {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.8);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            "Helvetica Neue", Arial, "Noto Sans", sans-serif,
            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
            "Noto Color Emoji";
        }
        a:hover {
          color: rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
}
.right-top-box {
  padding-left: 307px;
  height: 230px;
  background-color: #fafafa !important;
  .title {
    padding-top: 47px;
    width: 100%;
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }
  p {
    padding-top: 5px;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #4f4f4f;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }
  form {
    margin: 0px auto;
    padding-top: 5px;
    width: 700px;
    .form-group {
      margin-left: 113px;
      display: inline-block;
      width: 360px;
      height: 44px;
      border: 1px solid #c2c2c2;
      border-radius: 5px;
      background-color: #fff;
      input {
        margin-left: 1px;
        padding-left: 13px;
        width: 98%;
        height: 98%;
        border: 0px;
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
          "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        border-radius: 2%;
        outline: none;
      }
    }
    button {
      display: inline-block;
      margin-left: 4px;
      width: 107px;
      height: 44px;
      color: #fff;
      font-size: 16px;
      font-weight: 700;
      border-radius: 5px;
      border: 0px;
    }
  }
}
</style>
