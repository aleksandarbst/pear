<template>
    <div :class="['network', online ? 'online' : 'offline']" v-cloak>
      <div class="rp-wrapper">
        <div class="uk-container rp-main">
          <nav>
            <ul class="uk-subnav uk-float-right">
              <li
                v-for="(page, index) in pages"
                :key="index"
                :class="{'uk-active': page.url === $route.path}"
              >
                <nuxt-link :to="page.url">
                  {{ page.name }}
                </nuxt-link>
              </li>
            </ul>
          </nav>
        </div>

        <nuxt/>

      </div>

      <div class="rp-footer">
        <div class="uk-container">
          <p class="uk-text-muted uk-text-center">
            &copy; {{ currentYear }} Aleksander Batista &mdash; All Rights Reserved
          </p>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        online: true,
        pages: [
          {
            name: 'About',
            url: '/'
          },
          {
            name: 'Work',
            url: '/work'
          }
        ],
        currentYear: (new Date()).getFullYear()
      }
    },
    mounted () {
      if (!window.navigator) {
        this.online = false
        return
      }
      this.online = Boolean(window.navigator.onLine)
      window.addEventListener('offline', this._toggleNetworkStatus)
      window.addEventListener('online', this._toggleNetworkStatus)
    },
    methods: {
      _toggleNetworkStatus ({type}) {
        this.online = type === 'online'
      }
    },
    destroyed () {
      window.removeEventListener('offline', this._toggleNetworkStatus)
      window.removeEventListener('online', this._toggleNetworkStatus)
    }
  }
</script>

<style lang="scss" scoped>
  [v-cloak] {
    display: none;
  }
  .rp-wrapper {
    min-height: 100vh
  }
  .rp-main {
    padding-top: 10rem;
  }
  .uk-subnav {
    a {
      text-transform: none;
      color: #333;
    }

    li:not(:first-of-type) {
      margin-left: 40px;
    }

    li.uk-active a::after {
      position: absolute;
      display: block;
      content: '';
      background: #FF5845;
      border-radius: 50%;
      width: 8px;
      height: 8px;
      left: 0;
      bottom: 0;
      top: 0;
      margin: auto;
    }
  }
  .rp-footer {
    background: #0C0B0B;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
</style>
