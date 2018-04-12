<template>
  <div class="uk-container">
    <h1>Hi, my name is Aleksander</h1>
    <p style="margin-bottom: 100px;">
      — And here is a bunch of text i dont really want to type :o
    </p>
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
  #dot {
    position: absolute;
    display: block;
    background: #ff5845;
    border-radius: 50%;
    width: 125px;
    height: 125px;
    right: 0;
    top: 0;
    z-index: 5;
    transform: translate(40%, -40%);
  }
  p {
    font-weight: 200;
    font-size: 1.5rem;
    line-height: 1.6;
  }
</style>
