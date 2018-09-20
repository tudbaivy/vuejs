<template>
  <div id="app">
    <div style="background-color: #fff; height: 100vh;">
      <h1 style="margin-top: 0; padding-top: 20px;">Scroll down ⬇</h1>
    </div>
    <div style="position: relative; z-index: 9999; background-color: #fff;">
      <h1 style="margin:0;">Parallax Effect</h1>
      <parallax>
        <img src="https://apertureless.github.io/vue-parallax/static/img/pexels-photo-241307.jpeg">
      </parallax>
    </div>
    <div style="background-color: #fff; height: 100vh;"></div>
    <h1>Parallax fixed position </h1>

    <div style="position: relative;">
      <parallax :fixed="true">
        <img src="https://apertureless.github.io/vue-parallax/static/img/pexels-photo-241307.jpeg">
      </parallax>
    </div>

    <div style="background-color: #fff; height: 100vh;"></div>
  </div>
</template>

<script>
  import Parallax from 'vue-parallaxy'

  export default {
    name: 'app',
    components: {
      Parallax
    },
    head: {
      title: 'About'
    }
  }
</script>
