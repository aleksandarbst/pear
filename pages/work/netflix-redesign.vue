<template>
  <div class="uk-container uk-margin-large-top">

    <h1>Netflix Redesign</h1>
    <p class="sub-heading uk-margin-large-bottom">Homescreen UI refresh</p>

    <span class="uk-text-uppercase uk-text-bold">Mockups</span>
    <p class="uk-width-1-2 uk-margin-large-bottom">
      After being frustrated with Netflix's poor UI on mobile, I decided to make a project out of it.
      Funnily enough, after I completed this homescreen redesign, the actual netflix app recieved a
      small visual update, which I do suppose is a step in the right direction.
    </p>

    <!-- <div class="uk-grid uk-child-width-1-3 uk-margin-large-bottom" uk-lightbox="animation: slide">
      <div>
        <a href="/images/proj1_1.png">
          <img src="/images/proj1_1.png">
        </a>
        <span>Render</span>
      </div>
      <div>
        <a href="/images/proj1_2.png">
          <img src="/images/proj1_2.png">
        </a>
        <span>Large Preview</span>
      </div>
      <div>
        <a href="/images/proj1_3.jpg">
          <img src="/images/proj1_3.jpg">
        </a>
        <span>Original look of the app</span>
      </div>
    </div> -->

    <!-- <div class="uk-position-relative uk-visible-toggle uk-light" uk-slider="center: true">
      <ul class="uk-slider-items uk-grid">
        <li class="uk-width-3-4">
          <div class="uk-panel">
            <img src="/images/proj1_1.png" alt="">
            <div class="uk-position-center uk-panel"><h1>1</h1></div>
          </div>
        </li>
        <li class="uk-width-3-4">
          <div class="uk-panel">
            <div class="uk-position-center uk-panel"><h1>2</h1></div>
          </div>
        </li>
        <li class="uk-width-3-4">
          <div class="uk-panel">
            <img src="/images/proj1_3.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>3</h1></div>
          </div>
        </li>
      </ul>

      <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
      <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
    </div> -->
    <div class="uk-position-relative uk-visible-toggle uk-dark" uk-slideshow>

      <ul class="uk-slideshow-items">
        <li>
          <img src="/images/proj1_1.png" alt="">
        </li>
        <li>
          <img src="/images/proj1_2.png" alt="">
        </li>
        <li>
          <img src="/images/proj1_3.jpg" alt="">
        </li>
      </ul>

      <ul class="uk-slideshow-nav uk-dotnav uk-dark uk-margin uk-flex-center"></ul>

      <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
      <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

    </div>

    <span class="uk-text-uppercase uk-text-bold">Process</span>
    <p class="uk-width-1-2 uk-margin-large-bottom">
      I've recently started falling in love with apple's
      UI style patterns, and there is a definitely a note of inspiration in the way items are diplayed.
      Though, I didn't use the stereotipically easy to use San Francisco font (rest in peace Helvetica),
      and decided to go with Inter, a great all-rounder font that suits the needs of this project.
      This redesign was really built to adapt with the larger size of the iPhone X and it's nearly
      non-existant bezels.
    </p>

  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'netflix redesign'
    }
  }
}
</script>
