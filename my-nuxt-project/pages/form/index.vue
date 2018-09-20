<template>
  <!--<div class="container">-->
    <!--<div class="field">-->
      <!--<label class="label">Title</label>-->
      <!--<div class="control">-->
        <!--<input class="input" type="text" placeholder="Title">-->
      <!--</div>-->
    <!--</div>-->

    <!--<div class="field">-->
      <!--<label class="label">Summary</label>-->
      <!--<div class="control has-icons-left has-icons-right">-->
        <!--<input class="input is-success" type="text" placeholder="Text input" value="bulma">-->
        <!--<span class="icon is-small is-left">-->
      <!--<i class="fas fa-user"></i>-->
    <!--</span>-->
        <!--<span class="icon is-small is-right">-->
      <!--<i class="fas fa-check"></i>-->
    <!--</span>-->
      <!--</div>-->
      <!--<p class="help is-success">This username is available</p>-->
    <!--</div>-->

    <!--<div class="field">-->
      <!--<label class="label">Content</label>-->
      <!--<div class="control has-icons-left has-icons-right">-->
        <!--<textarea class="textarea" placeholder="Content"></textarea>-->
        <!--<span class="icon is-small is-left">-->
      <!--<i class="fas fa-envelope"></i>-->
    <!--</span>-->
        <!--<span class="icon is-small is-right">-->
      <!--<i class="fas fa-exclamation-triangle"></i>-->
    <!--</span>-->
      <!--</div>-->
      <!--<p class="help is-danger">This email is invalid</p>-->
    <!--</div>-->

    <!--<div class="field">-->
      <!--<label class="label">Author</label>-->
      <!--<div class="control has-icons-left has-icons-right">-->
        <!--<input class="input is-danger" type="text" placeholder="Email input" value="hello@">-->
        <!--<span class="icon is-small is-left">-->
      <!--<i class="fas fa-envelope"></i>-->
    <!--</span>-->
        <!--<span class="icon is-small is-right">-->
      <!--<i class="fas fa-exclamation-triangle"></i>-->
    <!--</span>-->
      <!--</div>-->

      <!--<div class="field">-->
        <!--<label class="label">Date published</label>-->
        <!--<div class="control">-->
          <!--<textarea class="textarea" placeholder="Textarea"></textarea>-->
        <!--</div>-->
      <!--</div>-->

      <!--<div class="field">-->
        <!--<div class="control">-->
          <!--<label class="checkbox">-->
            <!--<input type="checkbox">-->
            <!--I agree to the <a href="#">terms and conditions</a>-->
          <!--</label>-->
        <!--</div>-->
      <!--</div>-->

      <!--<div class="field">-->
        <!--<div class="control">-->
          <!--<label class="radio">-->
            <!--<input type="radio" name="question">-->
            <!--Yes-->
          <!--</label>-->
          <!--<label class="radio">-->
            <!--<input type="radio" name="question">-->
            <!--No-->
          <!--</label>-->
        <!--</div>-->
      <!--</div>-->

      <!--<div class="field is-grouped">-->
        <!--<div class="control">-->
          <!--<button class="button is-link">Submit</button>-->
        <!--</div>-->
        <!--<div class="control">-->
          <!--<button class="button is-text">Cancel</button>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
  <div class="container">
  <form @submit.prevent="validateBeforeSubmit">
    <div class="column is-12">
      <label class="label">Title</label>
      <p class="control has-icon has-icon-right">
        <input name="title" v-model="title" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('title') }" type="text" placeholder="Title">
        <i v-show="errors.has('title')" class="fa fa-warning"></i>
        <span v-show="errors.has('title')" class="help is-danger">{{ errors.first('title') }}</span>
      </p>
    </div>
    <div class="column is-12">
      <label class="label">Summary</label>
      <p class="control has-icon has-icon-right">
        <textarea rows="5" name="summary" v-model="summary" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('summary') }" type="text" placeholder="Summary"/>
        <i v-show="errors.has('summary')" class="fa fa-warning"></i>
        <span v-show="errors.has('summary')" class="help is-danger">{{ errors.first('summary') }}</span>
      </p>
    </div>
    <div class="column is-12">
      <label class="label">Content</label>
      <p class="control has-icon has-icon-right">
        <textarea name="content" v-model="content" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('content') }" type="text" placeholder="Content"/>
        <i v-show="errors.has('content')" class="fa fa-warning"></i>
        <span v-show="errors.has('content')" class="help is-danger">{{ errors.first('content') }}</span>
      </p>
    </div>
    <div class="column is-12">
      <label class="label">Author</label>
      <p class="control has-icon has-icon-right">
        <input name="author" v-model="author" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('author') }" type="text" placeholder="Author">
        <i v-show="errors.has('author')" class="fa fa-warning"></i>
        <span v-show="errors.has('author')" class="help is-danger">{{ errors.first('author') }}</span>
      </p>
    </div>
    <div class="column is-12">
      <label class="label">Publish</label>
      <p class="control has-icon has-icon-right">
        <input name="publish" v-model="publish" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('author') }" type="date" placeholder="Publish">
        <i v-show="errors.has('publish')" class="fa fa-warning"></i>
        <span v-show="errors.has('publish')" class="help is-danger">{{ errors.first('author') }}</span>
      </p>
    </div>

    <div class="column is-12">
      <p class="control">
        <button class="button is-primary" type="submit">Submit</button>
      </p>
    </div>
  </form>
  </div>
</template>
<script>
export default {
  components: {
  },
  data: () => ({
    title: '',
    summary: '',
    content: '',
    author: '',
    publish: ''
  }),
  methods: {
    validateBeforeSubmit() {
      let scope = this;
      this.$validator.validateAll().then((result) => {
        if (result) {
          var data = {
            title: scope.title,
            summary: scope.summary,
            content: scope.content,
            author: scope.author,
            publish: scope.publish
          };
          scope.$store.dispatch("posts/insert",{
            data: data
          })
        // eslint-disable-next-line
          alert('Form Submitted!');
          return;
        }

        alert('Correct them errors!');
      });
    }
  }
}
</script>
