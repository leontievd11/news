<template>
    <footer class="footer">
        Copyright {{ year }} News Portal
    </footer>
</template>

<script>
export default {
    name: 'AppFooter',
    computed: {
        year: () => new Date().getFullYear(),
    }
}
</script>

<style lang="scss">
    .footer {
        margin: auto 0 0 0;
        padding: 31px 15px;
        background-color: $whitePrimary;
        font-size: 16px;
        font-weight: 700;
        text-align: center;
        color: $graySecondary;
    }
</style>