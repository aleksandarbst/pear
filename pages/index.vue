<template>
  <div class="uk-container">
    <div class="uk-grid">
      <div class="uk-width-1-4 uk-invisible@s"></div>
      <div class="uk-width-1-2@m uk-width-1-1@s">
        <h1>Hi, my name is Aleksander</h1>
        <div class="social-menu uk-width-1-1 uk-flex uk-flex-center">
          <a target="_blank" rel="noopener noreffer" href="https://instagram.com/uhsoory"><i class="fab fa-instagram"></i></a>
          <a target="_blank" rel="noopener noreffer" href="https://dribbble.com/aleksbatista"><i class="fab fa-dribbble"></i></a>
          <a target="_blank" rel="noopener noreffer" href="https://twitter.com/baffledbatista"><i class="fab fa-twitter"></i></a>
          <a target="_blank" rel="noopener noreffer" href="https://medium.com/@aleksbatista"><i class="fab fa-medium-m"></i></a>
        </div>
        <p class="sub-main" style="margin-bottom: 100px;">
          — and over the past years I have grown quite familiar with the twitch community, and the environment of streamers and viewers. Through my designs, I aim to create a closer connection between said viewers and the channel broadcasters. I believe that each channel is unique, and deserves to show off exactly how special and great it is. My goal is to create and curate viable branding for any broadcaster, no matter big or small.
        </p>
      </div>
    </div>

    <h2 class="uk-heading-primary">Broadcasting Packages</h2>
    <p class="sub-heading uk-margin-large-bottom">
      Streamers and Projects
    </p>

    <div class="uk-grid uk-grid-match work-pieces">
      <div class="uk-width-1-3">
        <nuxt-link :to="'/work/netflix-redesign'">
          <img src="/images/staiy/staiy_box.png">
        </nuxt-link>
      </div>
      <div class="uk-width-2-3">
        <a href="https://medium.com/@aleksbatista/standing-out-a98b3423ce05">
          <img src="/images/urban/urban_banner.png">
        </a>
      </div>
    </div>
    <div class="uk-grid uk-grid-match work-pieces uk-margin-large-bottom">
      <div class="uk-width-2-3">
        <nuxt-link :to="'/work/broadcaster-branding'">
          <img src="/images/prox/prox_banner.png">
        </nuxt-link>
      </div>
      <div class="uk-width-1-3">
        <nuxt-link :to="'/work/business-cards'">
          <img src="/images/podcast/pod_box.png">
        </nuxt-link>
      </div>
    </div>

    <div class="contact">
      Get in touch with me to talk prices
      <a class="link-underline" href="mailto:aleksbatista@icloud.com">
        aleksbatista@icloud.com
      </a>
    </div>

  </div>
</template>

<script>
  export default {
    layout: 'default',
    head () {
      return {
        title: 'twitch'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .social-menu {
    margin: 30px 0 60px;
  }
</style>
