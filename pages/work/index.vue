<template>
  <div class="uk-container uk-margin-large-top">
    <h2 class="uk-heading-primary">Work</h2>
    <p class="uk-text-lead">Completed projects, articles and case studies</p>
    <p></p>
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

    <h2 class="uk-heading-primary">Projects</h2>
    <p class="uk-text-lead uk-margin-large-bottom">Experimental</p>

    <div class="uk-grid uk-child-width-1-2 uk-margin-large-bottom">
      <div>
        <p class="uk-text-right">
          Gleeful, formerly known as f.esteem was a passion project that started purely
          thanks to inspiration  and motivation to delve into the vast world of clothing
          fashion design.
        </p>
        <p class="uk-text-right">
          The initial idea was to capture the of large brands in the streetwear culture,
          such as ASSC or Bape, as well as higher-end fashion labels such as Balenciaga,
          Bonobos and Acne Studios.
        </p>
        <p class="uk-text-right">
          What started as a quick concept of a simple graphic for t-shirts and hoodies,
          quickly grew into an entire branding and presentation project.
        </p>
      </div>
      <div>
        <img src="https://via.placeholder.com/600" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head () {
      return {
        title: 'work'
      }
    }
  }
</script>

<style lang="scss" scoped>
  img {
    height: 100%;
    border-radius: 9px;
    box-shadow: 0 2px 6px 0 rgba(0,0,0,.2);
  }
  .work-pieces img {
    transition: filter 200ms;
    filter: grayscale(100%);

    &:hover {
      filter: grayscale(0%);
    }
  }
</style>
