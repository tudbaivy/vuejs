<template>
  <div>
    <!-- navigation -->
    <nav class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <nuxt-link to="/" class="nav-item">
            A Random Technology Blog
          </nuxt-link>
          <nuxt-link active-class="is-active" to="/" class="nav-item is-tab" exact>Home</nuxt-link>
          <nuxt-link active-class="is-active" to="/about" class="nav-item is-tab" exact>About</nuxt-link>
        </div>
        <div class="nav-right">
          <nuxt-link to="/form" class="nav-item button is-primary is-tab">Create A Random Post</nuxt-link>
        </div>
      </div>
    </nav>
    <!-- /navigation -->

    <!-- displays the page component -->
    <nuxt/>

  </div>
</template>
