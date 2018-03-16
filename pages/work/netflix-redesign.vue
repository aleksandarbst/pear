<template>
  <div class="uk-container uk-margin-large-top">

    <h2 class="uk-heading-primary">Netflix Redesign</h2>
    <p class="uk-text-lead uk-margin-large-bottom">Homescreen UI refresh</p>

    <span class="uk-text-uppercase uk-text-bold">Mockups</span>
    <p class="uk-width-1-2 uk-margin-large-bottom">
      After being frustrated with Netflix's poor UI on mobile, I decided to make a project out of it.
      Funnily enough, after I completed this homescreen redesign, the actual netflix app recieved a
      small visual update, which I do suppose is a step in the right direction. 
    </p>

    <div class="uk-grid uk-child-width-1-3 uk-margin-large-bottom">
      <div>
        <img src="~/assets/images/proj1_1.png">
        <span>Render</span>
      </div>
      <div>
        <img src="~/assets/images/proj1_2.png">
        <span>Large Preview</span>
      </div>
      <div>
        <img src="~/assets/images/proj1_3.jpg">
        <span>Original look of the app</span>
      </div>
    </div>

    <span class="uk-text-uppercase uk-text-bold">Process</span>
    <p class="uk-width-1-2 uk-margin-large-bottom">
      I've recently started falling in love with apple's
      UI style patterns, and there is a definitely a note of inspiration in the way items are diplayed.
      Though, I didn't use the stereotipically easy to use San Francisco font (rest in peace Helvetica),
      and decided to go with Inter, a great all-rounder font that suits the needs of this project.
      This redesign was really built in mind with the larger size of the iPhone X and it's nearly
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
