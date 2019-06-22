<template>
  <div class="brand">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <img class="img-fluid p-3" width="300px" src="../assets/logo.png" alt="Josh Ace Text Logo">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Brand',
  props: {
    tagline: String,
    image: Object,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
