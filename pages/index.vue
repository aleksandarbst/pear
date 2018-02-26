<template>
  <div class="uk-container">
    <div class="flex">
      <h1>Aleksander Batista</h1>
      <div class="spacer"></div>
    </div>
    <p>
      Upcoming graphic design student with a passion for the creative world. <br>
      If not buried in dribbble shots, I'll likely be found working with twitch.tv broadcasters, or tinkering <br>
      with concepts and mockups.
    </p>
  </div>
</template>

<script>
  export default {
    layout: 'default',
    head () {
      return {
        title: 'home'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .uk-container {
    position: relative;
  }
  .flex {
    display: flex;
  }
  .spacer {
    flex: 1;
    flex-basis: 1000px;
    content: ''
  }
  h1 {
    margin-top: 5rem;
    margin-bottom: 3rem;
    line-height: 0.8;
    font-size: 8rem;
    font-weight: 900;
    text-transform: uppercase;
    position: relative;

    &::after {
      position: absolute;
      display: block;
      content: '';
      background: #FF5845;
      border-radius: 50%;
      width: 132px;
      height: 132px;
      right: 0;
      top: 0;
      z-index: -1;
      transform: translate(40%, -40%)
    }
  }
  p {
    font-weight: 200;
  }
</style>
