<template>
  <div class="uk-container">
    <div class="flex">
      <div class="title-wrapper">
        <h1>Aleksander Batista</h1>
        <div id="dot" :style="dotStyle"></div>
      </div>
      <div class="spacer"></div>
    </div>
    <p style="margin-bottom: 100px;">
      Upcoming graphic design student looking for an entrance to the creative world. <br>
      I occasionally post little quote cards and album art on instagram @uhsoory
    </p>
  </div>
  <meta content="Discord - Free Voice and Text Chat" property="og:title">

  <meta content="Step up your game with a modern voice & text chat app. Crystal clear voice, multiple server and channel support, mobile apps, and more." property="og:description">

  <meta content="Discord" property="og:site_name">

  <meta content='https://discordapp.com/assets/ba74954dde74ff40a32ff58069e78c36.png' property='og:image'>
</template>

<script>
  export default {
    layout: 'default',
    data () {
      return {
        mousePos: {
          x: 0,
          y: 0
        },
        mouseX: 0,
        mouseY: 0
      }
    },
    head () {
      return {
        title: 'home'
      }
    },
    mounted () {
      if (process.browser) {
        document.onmousemove = (event) => {
          this.mousePos.x = event.clientX
          this.mousePos.y = event.clientY
        }
      }
    },
    computed: {
      dotStyle () {
        if (process.browser) {
          let inner = {
            x: window.innerHeight,
            y: window.innerWidth
          }
          let center = {
            x: Math.floor(inner.x / 2),
            y: Math.floor(inner.y / 2)
          }

          let posToCenter = { // eslint-disable-line
            x: this.mousePos.x - center.x,
            y: this.mousePos.y - center.y
          }

          return {
            '': ''
          }
        }
      }
    },
    beforeDestroy () {
      if (process.browser) {
        document.onmousemove = null
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
    content: '';
  }
  .title-wrapper {
    margin-top: 10rem;
    margin-bottom: 3rem;
    position: relative;
  }
  h1 {
    line-height: 0.8;
    font-size: 9.5rem;
    font-weight: 900;
    text-transform: uppercase;
    color: #131315;
    position: relative;
    z-index: 10;
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
