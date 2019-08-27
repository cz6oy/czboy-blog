<template>
  <div class="hot-article-box">
    <div class="content">
      <div class="media" v-for="item in items">
        <div class="media-left media-middle">
          <a href="#">
            <img
              class="media-object img-size"
              src="../assets/image/hotArticle/blog-post-thumb-1.jpg"
              alt
            />
          </a>
        </div>
        <div class="media-body">
          <h4 class="media-heading font-size">{{item.title}}</h4>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {title:"Middle aligned media2"},
        {title:"Middle aligned media2"},
        {title:"Middle aligned media2"},
        {title:"Middle aligned media2"},
        {title:"Middle aligned media2"},
        {title:"Middle aligned media1"} 
      ]
    };
  }
};
</script>
<style lang="less">
@import "../assets/css/hotArticle.less";
</style>