<template>
  <div class="spotify p-3">
    <h3 class="text-white">New Album Out Now</h3>
    <iframe src="https://open.spotify.com/embed/album/551PYm0PjotyC9uHd2rDfr" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
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


