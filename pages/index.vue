<template>
  <div class="uk-container">
    <div class="uk-grid">
      <div class="uk-width-1-4 uk-invisible@s"></div>
      <div class="uk-width-1-2@m uk-width-1-1@s">
        <h1>Hi, my name is Aleksander</h1>
        <div class="social-menu uk-width-1-1 uk-flex uk-flex-center">
          <a target="_blank" rel="noopener noreffer" href="https://twitter.com/uhsoory"><i class="fab fa-twitter-square"></i></a>
          <a target="_blank" rel="noopener noreffer" href="https://instagram.com/uhsoory/"><i class="fab fa-instagram"></i></a>
          <a target="_blank" rel="noopener noreffer" href="https://medium.com/@aleksbatista"><i class="fab fa-medium-m"></i></a>
        </div>
        <p class="sub-main" style="margin-bottom: 100px;">
          — and I've been a part of the twitch community for years. In this time, I have grown quite familiar to the environment of streamers and viewers. Through my designs, I aim to create a closer connection between said viewers and the channel broadcasters. I believe that each is unique, and deserves to show off exactly how special and great it is. My goal is to create and curate viable branding for any broadcaster, no matter big or small.
        </p>
      </div>
    </div>

    <h2 class="uk-heading-primary">Broadcasting Packages</h2>
    <p class="sub-heading uk-margin-large-bottom">
      List of streamers and twitch-related projects i've worked with
    </p>

    <div class="uk-grid uk-grid-match work-pieces">
      <div class="uk-width-1-3">
        <nuxt-link :to="'/work/netflix-redesign'">
          <img src="/images/proj1.png">
        </nuxt-link>
      </div>
      <div class="uk-width-2-3">
        <a href="https://medium.com/@aleksbatista/standing-out-a98b3423ce05">
          <img src="/images/proj2.png">
        </a>
      </div>
    </div>
    <div class="uk-grid uk-grid-match work-pieces uk-margin-large-bottom">
      <div class="uk-width-2-3">
        <nuxt-link :to="'/work/broadcaster-branding'">
          <img src="/images/proj3.png">
        </nuxt-link>
      </div>
      <div class="uk-width-1-3">
        <nuxt-link :to="'/work/business-cards'">
          <img src="/images/proj4.png">
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
  .uk-container {
    position: relative;
  }
  h1 {
    margin-top: 10rem;
    margin-bottom: 3rem;
    line-height: 0.8;
    font-size: 3rem;
    text-align: center;
    color: #ffffff;
  }
  h2 {
    color: #ddd;
  }
  .sub-main {
    color: #999;
    font-weight: 200;
    font-size: 1.5rem;
    line-height: 1.6;
  }
  .sub-heading {
    color: #817490;
    font-size: 1.2rem;
  }
  .social-menu {
    a {
      margin-left: .6rem;
      font-size: 1.8rem;
      color: #555;
      text-decoration: none;

      &:hover {
        color: #333;
      }
    }
  }
  img {
    border-radius: 9px;
    box-shadow: 0 2px 6px 0 rgba(0,0,0,.2);
  }
  .work-pieces img {
    height: 100%;
    transition: filter 200ms;
    filter: grayscale(100%);

    &:hover {
      filter: grayscale(0%);
    }
  }
  .contact {
    margin-top: 300px;
    margin-bottom: 40px;
    font-size: 3rem;
    text-align: center;
  }
</style>
