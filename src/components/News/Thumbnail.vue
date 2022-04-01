<template>
    <figure class="news__thumbnail">
        <a :href="link">
            <clazy-load :src="image" tag="span">
                <transition name="fade">
                    <img :src="image">
                </transition>
                <transition name="fade" slot="placeholder">
                    <img :src="require('@/assets/placeholder.svg')">
                </transition>
            </clazy-load>
        </a>
    </figure>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
        link: {
            type: String,
            default: '',
        }
    },
    name: 'NewsThumbnail',
}
</script>

<style lang="scss">
    .news__thumbnail {
        width: 100%;
        margin: 0;
        padding: 0;
        border-radius: 8px;
        overflow: hidden;
        transition: 200ms ease-in-out;

        @include respond('small') {
            height: 96px;
        }

        @include respond('medium') {
            height: 128px;
        }

        @include respond('large') {
            height: 176px;
        }

        &:hover {
            opacity: .75;
        }

        a {
            display: block;
            width: 100%;
            height: 100%;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }

    .fade {

        &-enter,
        &-leave-to {
            opacity: 0;
        }
    }
</style>