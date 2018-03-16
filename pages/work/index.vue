<template>
  <div class="uk-container uk-margin-large-top">
    <h2 class="uk-heading-primary">Work</h2>
    <p class="uk-text-lead">Projects and Ideas</p>
    <p></p>
    <div class="uk-grid uk-grid-match work-pieces">
      <div class="uk-width-1-3">
        <nuxt-link :to="'/work/netflix-redesign'">
          <img src="~/assets/images/proj1.png">
        </nuxt-link>
      </div>
      <div class="uk-width-2-3">
        <a href="https://medium.com/@aleksbatista/standing-out-a98b3423ce05">
          <img src="~/assets/images/proj2.png">
        </a>
      </div>
    </div>
    <div class="uk-grid uk-grid-match work-pieces uk-margin-large-bottom">
      <div class="uk-width-2-3">
        <nuxt-link :to="'/work/broadcaster-branding'">
          <img src="~/assets/images/proj3.png">
        </nuxt-link>
      </div>
      <div class="uk-width-1-3">
        <nuxt-link :to="'/work/business-cards'">
          <img src="~/assets/images/proj4.png">
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
  .work-pieces img {
    height: 100%;
    border-radius: 9px;
  }
</style>
