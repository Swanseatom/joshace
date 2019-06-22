<template>
  <div class="hero">
    <div class="jumbotron text-center">
      <img class="img-fluid rounded-circle" src="../assets/profile.jpg" alt="Tom Riley's profile picture">
      <h1>Tom Riley</h1>
      <p class="lead">Software & Dev Ops Engineer</p>
      <ul class="list-inline">
        <li class="btn btn-transparent list-inline-item">
        Skills
        </li>
        <li class="btn btn-primary list-inline-item">
          Work
        </li>
        <li class="btn btn-primary list-inline-item">
          Projects
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Hero',
  props: {
    tagline: String,
    image: Object,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron {
  background: transparent;
}
</style>
