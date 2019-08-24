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
            <a href="https://blog.csdn.net/qq_37504376">
              <img src="./assets/image/app/csdn.png" alt />
            </a>
          </li>
          <li>
            <a href="https://github.com/cz6oy">
              <img src="./assets/image/app/githubb.png" alt />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./assets/image/app/weibo.png" alt />
            </a>
          </li>
        </ul>
      </div>
      <!-- 导航栏 -->
      <div class="my-nav">
        <ul>
          <li :style="{color:active}">
            <span class="glyphicon glyphicon-home"></span>&nbsp;
            Blog Home
          </li>
          <li>
            <span class="glyphicon glyphicon-bookmark"></span>&nbsp;
            Blog Post
          </li>
          <li>
            <span class="glyphicon glyphicon-user"></span>&nbsp;
            About Me
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeColor: '',
      active:'#fff'
    };
  },
  methods: {
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
      this.active = "rgba(0,0,0,0.5)";
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
    background-color: #fff;
    border-radius: 50%;

    img {
      position:absolute;
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
    margin:30px 0px 100px 0px;
    // height: 30px;
    background-color: #fff;
    ul li {
      float: left;
      width: 20%;
      height: 31px;
      a > img {
        margin: 0px auto;
        display: inline-block;
        width: 35px;
        height: 35px;
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
        padding-top: 10px;
        padding-left: 70px;
        width: 100%;
        height: 45px;
        font-size: 17px;
        font-weight: bold;
        line-height: 45px;
        text-align: left;
        color:#fff;
        cursor: pointer;
      }
      li:hover{
        color: rgba(0,0,0,0.5);
        text-decoration: underline;
      }
    }
  }
}
</style>
