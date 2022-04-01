<template>
    <header class="header">
        <logotype />
        <search />
    </header>
</template>

<script>
import Logo from './Logo.vue';
import Search from './Search.vue';

export default {
    name: 'AppHeader',
    components: {
        'logotype': Logo,
        'search': Search
    }
}
</script>

<style lang="scss">
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 32px;

        @include respond('small') {
            padding-bottom: 40px;
        }

        @include respond('medium') {
            padding-bottom: 48px;
        }

        @include respond('large') {
            padding-bottom: 72px;
        }
    }
</style>