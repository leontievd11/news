<template>
    <div
        class="search"
        v-click-outside="clear"
    >
        <input
            ref="searchField"
            v-show="showField"
            v-model="search"
            class="search__field"
            type="text"
            placeholder="Search"
        >

        <button
            class="search__button"
            @click.prevent="searchClick"
        >
            <img v-show="!showField" :src="require('@/assets/search.svg')" alt="Search Button">
            <img v-show="showField" :src="require('@/assets/delete.svg')" alt="Search Button">
        </button>
    </div>
</template>

<script>
import { NEWS_SEARCH } from '@/store/mutations-types';
import { mapMutations } from 'vuex';

export default {
    name: 'HeaderSearch',
    data: () => ({
        showField: false,
        search: '',
        week: null,
    }),
    watch: {
        search(val) {
            if (this.week) clearTimeout(this.week);
            this.week = setTimeout(() => {
                this.searchQuery(String(val).toLowerCase());
            }, 300);
        }
    },
    methods: {
        ...mapMutations({
            searchQuery: `news/${NEWS_SEARCH}`,
        }),

        searchClick() {
            if (!this.search) {
                this.showField = !this.showField;
                this.$nextTick(() => {
                    this.showField && this.$refs.searchField.focus();
                });
            } else this.search = '';
        },

        clear() {
            this.search = '';
            this.showField = false;
        }
    }
}
</script>

<style lang="scss">
    .search {
        position: relative;
        display: flex;
        align-items: center;
        height: 100%;

        &__field {
            display: inline-block;
            height: 34px;
            margin: 0 12px;
            padding: 0 8px;
            border: 1px solid $blackPrimary;
            border-radius: 4px;

            @include respond('small') {
                width: 108px;
            }

            @include respond('medium-large') {
                width: 220px;
            }
        }

        &__button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 34px;
            height: 34px;
            margin: 0;
            padding: 0;
            border: none;
            background-color: transparent;
            cursor: pointer;

            transition: 200ms ease-in-out;

            &:hover {
                opacity: .45;
            }
        }
    }
</style>