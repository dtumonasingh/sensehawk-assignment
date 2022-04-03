<template>
  <div class="blog">
    <div v-if="isReadBlog" class="blog-actions">
      <button @click="deleteBlog">delete</button>
      <button @click="updateBlog">update</button>
    </div>
    <div class="separator"></div>
    <div v-if="true" class="blog">
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

      <button v-if="!isReadBlog" class="button" @click="save">
        {{ buttonCaption }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["id"],
  data() {
    return {
      isUpdateBlog: false,
      isReadBlog: false,
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
    save() {
      this.$store.dispatch("blogs/createOrUpdate", this.blog);
      this.$router.push("/blogs");
    },

    deleteBlog() {
      this.$store.dispatch("blogs/deleteBlog", this.id);
      this.$router.push("/blogs");
    },
    updateBlog() {
      this.$router.push(`/update-blog/${this.id}`);
    },
    initializeData() {
      let path = this.$router.currentRoute.value.path;
      if (path.indexOf("/new-blog") > -1) {
        this.isNewBlog = true;
      } else if (path.indexOf("/update-blog") > -1) {
        this.isUpdateBlog = true;
      } else {
        this.isReadBlog = true;
      }
      if (!this.isNewBlog) {
        let blog = this.getBlog(this.id);
        this.blog.id = blog.id;
        this.blog.title = blog.title;
        this.blog.author = blog.author;
        this.blog.content = blog.content;
      }
    },
  },
};
</script>

<style>
.blog {
  display: flex;
  flex-direction: column;
}
.separator {
  border-bottom: solid 1px #ccc;
  margin-bottom: 15px;
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
