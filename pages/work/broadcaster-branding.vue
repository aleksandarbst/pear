<template>
  <div class="uk-container uk-margin-large-top">

    <h1>Broadcaster Branding</h1>
    <p class="uk-margin-large-bottom">Creating a twitch.tv channel layout and design</p>

    <div class="uk-margin-large-bottom">
      <a class="button-medium" href="https://medium.com/@aleksbatista/exploring-broadcaster-branding-4d3074e532bd">
          <i class="fab fa-medium"></i> &nbsp;
          Read article on medium.com  →
      </a>
    </div>

    <span class="uk-text-uppercase uk-text-bold">Key features</span>
    <p class="uk-width-1-2 uk-margin-large-bottom">
      Clean and cozy care-package of channel branding and design that fits any use-case or scenario.
      Extra emphasis on simplicity and a dark, moody vibe for those late evening sessions.
    </p>

    <div class="uk-grid uk-child-width-1-3 uk-margin-large-bottom" uk-lightbox="animation: slide">
      <div>
        <a href="/images/proj3_1.png">
          <img src="/images/proj3_1.png">
        </a>
        <span>On-Screen Notifications</span>
      </div>
      <div>
        <a href="/images/proj3_2.png">
          <img src="/images/proj3_2.png">
        </a>
        <span>Information Banners</span>
      </div>
      <div>
        <a href="/images/proj3_3.gif">
          <img src="/images/proj3_3.gif">
        </a>
        <span>Transition Screen</span>
      </div>
    </div>

    <span class="uk-text-uppercase uk-text-bold">ABOUT</span>
    <p class="uk-width-1-2 uk-margin-large-bottom">
      This is a content pack with simplistic branding for a twitch.tv streamer. I built this with purpose of showing that anyone can get a hold of a minimalistic and memorable identity suite for their broadcasts.
    </p>

  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'broadcaster branding'
    }
  }
}
</script>

<style lang="scss" scoped>
  .button-medium {
    text-decoration: none;
    color: #333;
    background: #f3f4f5;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 6px 0 rgba(0,0,0,.2);
  }
</style>
