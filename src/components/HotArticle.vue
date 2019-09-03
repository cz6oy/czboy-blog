<template>
  <div class="hot-article-box">
    <div class="content">
      <div class="media" v-for="item in psMsg">
        <div class="media-left media-middle">
          <img class="media-object img-size" @click="goPage(item.id)" src="../assets/image/hotArticle/blog-post-thumb-1.jpg" alt="封面"/>
        </div>
        <div class="media-body">
          <h4 class="media-heading font-size" @click="goPage(item.id)">{{item.title}}</h4>
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
    goPage:function(id){
      this.$emit('change',id);
    }
  },
  props:['psMsg']
};
</script>
<style lang="less">
@import "../assets/css/hotArticle.less";
</style>