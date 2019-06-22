<template>
  <div class="social text-center">
    <a href="https://twitter.com/JoshAceOfficial" target="_blank">
    <font-awesome-icon class="social-icon" :icon="{ prefix: 'fab', iconName: 'twitter' }"/>
    </a>
    <a href="https://www.facebook.com/joshacemusic/" target="_blank">
    <font-awesome-icon class="social-icon" :icon="{ prefix: 'fab', iconName: 'facebook' }"/>  
    </a>
    <a href="https://soundcloud.com/josh-ace-official" target="_blank">
      <font-awesome-icon class="social-icon" :icon="{ prefix: 'fab', iconName: 'soundcloud' }"/>
    </a>
    <a href="https://www.instagram.com/joshaceofficial/" target="_blank">
    <font-awesome-icon class="social-icon" :icon="{ prefix: 'fab', iconName: 'instagram' }"/>
    </a>
    <a href="https://www.youtube.com/channel/UCQszkLEFHSXuUe0kr2mpCMQ" target="_blank">
    <font-awesome-icon class="social-icon" :icon="{ prefix: 'fab', iconName: 'youtube' }"/>
    </a>
    <a href="mailto:joshace20@hotmail.com">
    <font-awesome-icon class="social-icon" icon="envelope"/>
    </a>
  </div>
</template>

<script>
export default {
  name: "Social"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.social a {
  color: black;
}
.social-icon {
  margin: 10px;
}
</style>
