<template>
  <div class="layout">
    <div class="content">
      <h1 v-text="title"></h1>
      <div class="article-info-box">
        <span v-text="createTime"></span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span>阅读数 198</span>
      </div>
      <div id="id">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title:null,
      createTime:null,
      hotValue:null
    };
  },
  props:['psMsg'],
  mounted: function() {
    var that = this;
   console.log(localStorage.getItem("title"));
    let converter = new showdown.Converter();
    let html = converter.makeHtml(that.psMsg.content);
    document.getElementById('id').innerHTML = html;
  }
};
</script>

<style lang="less">
.layout {
  padding-left: 280px;
  .content {
    padding-top: 50px;
    margin: 0px auto;
    width: 820px;
    h1 {
      font-size: 24px;
      font-weight: 700;
      word-wrap: break-word;
      font-family: "Microsoft YaHei", "SF Pro Display", Roboto, Noto, Arial,
        "PingFang SC", sans-serif;
    }
    .article-info-box {
      padding-top: 10px;
      padding-bottom: 20px;
      font-size: 14px;
      font-family: "Microsoft YaHei", "SF Pro Display", Roboto, Noto, Arial,
        "PingFang SC", sans-serif;
      color: #858585;
      border-bottom: 1px solid #e0e0e0;
    }
  }
}
</style>