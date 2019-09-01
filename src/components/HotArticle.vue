<template>
  <div class="hot-article-box">
    <ol class="breadcrumb">
  <li><a href="#">Home</a></li>
  <li><a href="#">Library</a></li>
  <li class="active">Data</li>
</ol>
    <div class="content">
      <div class="media" v-for="item in psMsg">
        <div class="media-left media-middle">
         
            <img class="media-object img-size" src="../assets/image/hotArticle/blog-post-thumb-1.jpg" alt="封面"/>
          <!-- </a> -->
        </div>
        <div class="media-body">
          <h4 class="media-heading font-size" @click="goPag2e()">{{item.title}}</h4>
          {{item.description}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
   data() {
    return {
      activeColor: "",
      active: "rgba(0,0,0,0.5)",
      isShowHomePage: true,
      items:[]
    };
  },
  methods: {
    goPag2e:function(){
      console.log("11111111111");
    }
  },
  props:['psMsg']
};
</script>
<style lang="less">
@import "../assets/css/hotArticle.less";
</style>