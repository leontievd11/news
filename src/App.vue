<template>
  <div id="app">

    <div class="container">
      <app-header />
      <app-news />
    </div>

    <app-footer />

  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import News from './components/News';

export default {
  name: 'App',
  components: {
    'app-news': News,
    'app-header': Header,
    'app-footer': Footer,
  }
}
</script>

<style lang="scss">
  @import 'normalize-scss';
  @include normalize();

  @import './scss/base/base';

  * {
    box-sizing: border-box;
    outline: none;
  }

  html {
    font-family: $fontRegular;
    color: $blackRegular;

    @include respond('small') {
      font-size: 12px;
      line-height: 150%;
    }

    @include respond('medium-large') {
      font-size: 14px;
      line-height: 180%;
    }
  }

  #app {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - env(safe-area-inset-bottom));
  }
</style>
