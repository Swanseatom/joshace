<template>
  <div class="spotify p-3">
    <h3 class="text-white">Out Now</h3>
    <iframe src="https://open.spotify.com/embed/track/6bhAAf37GmipOhbTjRyB4I" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
  </div>
</template>

<script>
export default {
  name: "Spotify",
};
</script>

<style scoped>
.spotify iframe {
  max-width: 100%;
}
</style>


