<template>
  <div class="album container">
    <div class="row text-center">
      <div class="col-12">
        <img
          class="img-fluid"
          src="../assets/joshacesearching.jpg"
          alt="Josh Ace Seaching Album Cover"
        >
      </div>
      <div class="col-12 align-self-center">
        <Spotify />
      </div>
    </div>
  </div>
</template>

<script>
import Spotify from './Spotify.vue';

export default {
  name: "Album",
  components: {
    Spotify,
  },
  props: {
    tagline: String,
    image: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.album {
  padding-top: 15px;
}
img {
  width: 560px;
}
</style>
