<!-- ./pages/post/_id/index.vue -->
<template>
  <div class="main-content">
    <div class="container">
      <h2 class="title is-2">{{ posts.post.title }}</h2>
      <div v-html="posts.post.content"></div>
      <br>
      <h4 class="title is-5 is-marginless">by <strong>{{ posts.post.author }}</strong> at <strong>{{ posts.post.publish }}</strong></h4>
    </div>
  </div>
</template>

<script>
  // import posts saved JSON data
  import posts from '~/static/posts.json'
  import { mapState } from 'vuex'

  export default {
//    validate ({ params }) {
////      return /^\d+$/.test(params.id)
//      return true;
//    },

    mounted(){
      this.$store.dispatch("posts/fetch", {data: {id: this.$route.params.id}});
    },
    computed: mapState([
      "posts"
    ]),
    head () {
      return {
        title: this.post?this.post.title:"Post",
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.post?this.post.content:"Content"
          }
        ]
      }
    }
  }
</script>
