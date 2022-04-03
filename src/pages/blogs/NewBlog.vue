<template>
  NEW BLOG
  <div>
    <div class="separator"></div>

    <div class="create-blog">
      <input
        required
        title="title"
        class="input"
        v-model="blog.title"
        placeholder="Title"
        type="text"
      />

      <input
        required
        name="author"
        v-model="blog.author"
        placeholder="Author"
        type="text"
      />

      <textarea
        name="content"
        v-model="blog.content"
        placeholder="Content"
        type="text"
        rows="4"
      ></textarea>

      <button class="button" @click="create">Create</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      blog: {
        title: "",
        author: "",
        content: "",
      },
    };
  },
  computed: {
    ...mapActions({
      createBlog: "blogs/createBlog",
    }),
  },
  methods: {
    create() {
      this.$store.dispatch("blogs/createBlog", this.blog);
    },
  },
};
</script>

<style scoped>
.separator {
  border-bottom: solid 1px #ccc;
  margin-bottom: 15px;
}

.create-blog {
  display: flex;
  flex-direction: column;
}

input {
  margin: 5px 0px 5px 0px;
}

textarea {
  margin: 5px 0px 5px 0px;
}

button {
  margin: 5px 0px 5px 0px;
}
</style>
