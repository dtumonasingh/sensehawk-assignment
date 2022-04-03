<template>
  <div class="blog">
      <ThePopup />

    <div class="blog-actions">
      <button @click="deleteBlog">delete</button>
      <button @click="updateBlog">update</button>
    </div>
    <div v-if="blog">
      <h1>
        {{ blog.title }}
      </h1>

      <h3>
        {{ blog.author }}
      </h3>
      <div id="blog-content" @mouseup="highlight">
        {{ blog.content }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ThePopup from "@/components/ThePopup.vue";

export default {
  components: {
    ThePopup,
  },
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
      ...mapActions({
          addHighlight: "highlights/addHighlight"
      }),
    highlight(event) {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
     if(text.indexOf(' ') <=-1)
     {
         let highlight = { value: text, blogId: this.id}
         this.addHighlight(highlight);
     }
    },
    updateBlog() {
      this.$router.push(`/update-blog/${this.id}`);
    },
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
