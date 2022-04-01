<template>
    <div class="blog">
        <div class="blog__header">
            <h1 class="title title--h1">Latest News</h1>
            <news-sort :date="dateFrom" />
        </div>

        <news-list :articles="news" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import List from './List.vue';
import Sort from './Sort.vue';

export default {
    name: 'BlogPage',
    components: {
        'news-list': List,
        'news-sort': Sort,
    },
    computed: {
        ...mapGetters({
            dateFrom: 'news/getDateFrom',
            news: 'news/getNews'
        }),
    }
}
</script>

<style lang="scss">
    .blog {
        @include respond('small') {
            margin: 0 0 62px 0;
        }

        @include respond('medium-large') {
            margin: 0 0 93px 0;
        }

        &__header {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;

            @include respond('small') {
                margin: 0 0 16px 0;
            }

            @include respond('medium-large') {
                margin: 0 0 24px 0;
            }
        }
    }
</style>
