<template>
  <div
    class="blog__sort"
    role="button"
    @click.prevent="sort"
  >
    {{ label }}
    <img :src="require('@/assets/sort.svg')" alt="Sorting">
  </div>
</template>

<script>
import { NEWS_SORT } from '@/store/mutations-types';
import { mapMutations } from 'vuex';

export default {
  props: {
    date: {
      type: String,
      default: '',
    }
  },
  name: 'NewsSort',
  computed: {
    label() {
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };

      return new Date(this.date).toLocaleString('en-US', options);
    }
  },
  methods: {
    ...mapMutations({
      sort: `news/${NEWS_SORT}`
    })
  }
}
</script>

<style lang="scss">
  .blog__sort {
    display: flex;
    align-items: flex-end;
    align-items: center;
    margin-left: 24px;
    text-align: right;
    font-family: $fontPrimary;
    font-weight: 700;
    line-height: 150%;
    color: #000;
    cursor: pointer;
    transition: 200ms ease-in-out;

    @include respond('small') {
      font-size: 12px;
    }

    @include respond('medium-large') {
      font-size: 16px;
    }


    &:hover {
      opacity : .45;
    }

    img {
      flex-shrink: 0;
      width: 24px;
      height: 24px;
      margin: 0 0 0 8px;
    }
  }
</style>
