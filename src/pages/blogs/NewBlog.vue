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

      <button class="button" @click="save">
        {{ buttonCaption }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: ["id"],
  data() {
    return {
      isUpdateBlog: false,
      isNewBlog: false,
      blog: {
        id: "",
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
    ...mapGetters({
      getBlog: "blogs/getBlog",
    }),
    buttonCaption() {
      return this.isUpdateBlog ? "Update" : "Create";
    },
  },
  beforeUpdate() {
    this.initializeData();
  },
  created() {
    this.initializeData();
  },
  methods: {
    initializeData() {
      let path = this.$router.currentRoute.value.path;
      if (path.indexOf("/new-blog") > -1) {
        this.isNewBlog = true;
      } else if (path.indexOf("/update-blog") > -1) {
        this.isUpdateBlog = true;
      }

      if (!this.isNewBlog) {
        let blog = this.getBlog(this.id);
        this.blog.id = blog.id;
        this.blog.title = blog.title;
        this.blog.author = blog.author;
        this.blog.content = blog.content;
      }
    },
    save() {
      this.$store.dispatch("blogs/createOrUpdate", this.blog);
      this.$router.push("/blogs");
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
