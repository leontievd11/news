import { NEWS_SORT, NEWS_SEARCH } from '../mutations-types';
import json from '@/assets/news.json';

const state = () => ({
    _posts: json.articles,
    _sort: false,
    posts: json.articles,
    dateFrom: json.articles[0].publishedAt,
});

const getters = {
    getNews: (state) => state.posts,
    getDateFrom: (state) => state.dateFrom,
};

const mutations = {
    [NEWS_SORT](state) {
        state._sort = !state._sort;
        state.posts.reverse();
        state.dateFrom = state.posts[0].publishedAt;
    },
    [NEWS_SEARCH](state, payload) {
        const filterData = state._posts.filter(i => {
            return ~i.title.toLowerCase().indexOf(payload)
                || ~i.author.toLowerCase().indexOf(payload)
                || ~i.description.toLowerCase().indexOf(payload);
        });
        state.posts = state._sort ? filterData.reverse() : filterData;
    }
};

const actions = {};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}