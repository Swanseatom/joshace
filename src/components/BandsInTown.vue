<template>
  <div class="bandsintown container">
    <div class="row">
      <div class="col-12">
        <div class="bands-in-town-box mx-auto">
          <a
            class="bit-widget-initializer"
            data-artist-name="joshace"
            data-display-local-dates="false"
            data-display-past-dates="true"
            data-auto-style="false"
            data-text-color="#FFFFFF"
            data-link-color="#cacaca"
            data-background-color="#000000"
            data-display-limit="15"
            data-link-text-color="#FFFFFF"
            data-display-lineup="false"
            data-display-play-my-city="false"
            data-separator-color="rgba(124,124,124,0.25)"
          ></a>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "BandsInTown",
  props: {
    tagline: String,
    image: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bandsintown {
  padding-top: 30px;
}
.bands-in-town-box {
  max-width: 600px;
}
</style>
