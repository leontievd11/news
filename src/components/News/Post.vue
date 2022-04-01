<template>
    <article class="news__post">
        <news-thumbnail 
            :image="post.urlToImage"
            :title="post.title"
            :link="post.url"
        />

        <h2 class="title title--h2">
            <a class="news__title" :href="post.url">
                {{ post.title }}
            </a>
        </h2>

        <div class="news__options">
            <time class="news__date" pubdate :datetime="post.publishedAt">{{ date }}</time>
            <div class="news__author" rel="author">{{ post.author }}</div>
        </div>

        <div class="news__description" v-html="post.description"></div>
    </article>
</template>

<script>
import Thumbnail from './Thumbnail.vue';

export default {
    props: {
        post: {
            type: Object,
            default: () => ({
                urlToImage: '',
                title: '',
                description: '',
                publishedAt: '',
                author: '',
                url: '',
            }),
        }
    },
    name: 'NewsPost',
    components: {
        'news-thumbnail': Thumbnail,
    },
    computed: {
        date() {
            const parsedDate = new Date(this.post.publishedAt);
            const date = parsedDate.getDate();
            const month = parsedDate.getMonth() + 1;
            const year = parsedDate.getFullYear();

            return `${this.dateNumber(date)}.${this.dateNumber(month)}.${year}`;
        }
    },
    methods: {
        dateNumber(number) {
            return String(number).padStart(2, '0')
        }
    }
}
</script>

<style lang="scss">
    .news {

        &__post {
            @include respond('small') {
                width: 50%;
                margin: 0 0 32px 0;
            }

            @include respond('medium') {
                width: calc(100% / 3);
                margin: 0 0 48px 0;
            }

            @include respond('large') {
                width: 25%;
                margin: 0 0 72px 0;
            }

            padding: 0 15px;
        }

        &__title {
            text-decoration: none;
            color: inherit;
            transition: 200ms ease-in-out;

            &:hover {
                opacity: .45;
            }
        }

        &__options {
            display: flex;
            flex-wrap: wrap;
            font-family: $fontSecondary;
            line-height: 116%;
            color: $graySecondary;

            @include respond('small') {
                font-size: 8px;
            }

            @include respond('medium-large') {
                font-size: 12px;
            }
        }

        &__date {
            margin: 0 16px 8px 0;
        }

        &__author {
            margin: 0 0 8px 0;
        }
    }
</style>