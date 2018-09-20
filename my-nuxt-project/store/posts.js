
import axios from 'axios'
import VueAxios from 'vue-axios'

export const state = () => ({
  posts: [],
  post: {}
})

export const mutations = {
  fetchAllPostsSuccess (state, posts) {
    state.posts = posts;
  },
  fetchSuccess (state, post) {
    state.post = post;
  }
}

export const actions = {
  fetchAllPosts ({commit}){
    axios
      .get('http://localhost:8001/posts')
      .then(r => r.data)
      .then(posts => {
        commit("fetchAllPostsSuccess", posts.data)
      })
  },
  insert({commit}, payload){
    axios
      .post('http://localhost:8001/posts', payload.data)
      .then(r => r.data)
      .then(posts => {
        commit("fetchAllPostsSuccess", posts.data)
      })
  },
  fetch({commit}, payload){
    axios
      .get('http://localhost:8001/posts/'+ payload.data.id)
      .then(r => r.data)
      .then(posts => {
        commit("fetchSuccess", posts)
      })
  },
}
