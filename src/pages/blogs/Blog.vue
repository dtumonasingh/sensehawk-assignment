<template>
  <div class="blog">
    <div class="blog-actions">
      <button @click="deleteBlog">delete</button>
    </div>
    <div v-if="blog">
      <h1>
        {{ blog.title }}
      </h1>

      <h3>
        {{ blog.author }}
      </h3>
      <p>
        {{ blog.content }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["id"],
  computed: {
    ...mapGetters({
      getBlog: "blogs/getBlog",
    }),
    blog() {
      return this.getBlog(this.id);
    },
  },
  methods: {
    deleteBlog() {
      this.$store.dispatch("blogs/deleteBlog", this.id);
      this.$router.push("/blogs");
    },
  },
};
</script>

<style>
.blog {
  display: flex;
  flex-direction: column;
}
</style>
