<template>
  <div class="youtube container">
    <div class="row text-center justify-content-center align-items-center">
      <div class="col-12 align-self-center">
        <div class="iframe-box">
          <iframe height="315" src="https://www.youtube.com/embed/EVJet2r8IRs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Youtube",
  props: {
    tagline: String,
    image: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.youtube {
  padding-top: 30px;
}
.iframe-box iframe {
 width: 560px;
 max-width: 80vw;
}
</style>
