<template>
  <div class="blog__list">
    <news-post
      v-for="post in articles"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<script>
import Post from './Post.vue';

export default {
  props: {
    articles: {
      type: Array,
      default: () => [],
    }
  },
  name: 'NewsList',
  components: {
    'news-post': Post,
  }
}
</script>

<style lang="scss">
  .blog__list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;

    @include respond('small') {
      margin-bottom: -32px;
    }

    @include respond('medium') {
      margin-bottom: -48px;
    }

    @include respond('large') {
      margin-bottom: -72px;
    }
  }
</style>
