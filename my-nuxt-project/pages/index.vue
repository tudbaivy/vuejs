<template>
  <div>
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Welcome to BlackDragon blog
          </h1>
          <h2 class="subtitle">
            Hope you find something you like.
          </h2>
        </div>
      </div>
    </section>
    <posts v-bind:posts="posts.posts"/>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import Posts from '~/components/Posts.vue'
import { mapState } from 'vuex'

export default {
  components: {
    AppLogo,
    Posts
  },
  head: {
    title: 'Trang chủ'
  },
  mounted () {
    this.$store.dispatch('posts/fetchAllPosts');
  },
  computed: mapState([
    'posts'
  ])
}
</script>

