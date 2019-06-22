<template>
  <div id="app">
    <Brand />
    <Social />
    <Album />
    <Youtube />
    <BandsInTown />
    <Footer />
  </div>
</template>

<script>
import Album from './components/Album.vue';
import BandsInTown from './components/BandsInTown.vue';
import Brand from './components/Brand.vue';
import Footer from './components/Footer.vue';
import Social from './components/Social.vue';
import Youtube from './components/Youtube.vue';

import './assets/bandsintown.min.js';

export default {
  name: 'app',
  components: {
    Album,
    Brand,
    BandsInTown,
    Footer,
    Social,
    Youtube,
  },
  props: {
    show: String,
  },
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin-top: 0px;
  background-image: url('./assets/hero.jpeg');
  background-size: cover;
}
.btn {
  border-radius: 0%;
}
</style>
