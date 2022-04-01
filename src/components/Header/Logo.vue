<template>
    <div class="header__logo">
        <img :src="require('@/assets/logo.svg')" alt="News Portal">
    </div>
</template>

<script>
export default {
    name: 'HeaderLogo'
}
</script>

<style lang="scss">
    .header__logo {
        height: 37px;

        img {
            height: 100%;
        }
    }
</style>