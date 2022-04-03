<template>
  <div class="blog">
    <ThePopup />

    <div class="blog--actions">
      <button class="blog--actions__delete" @click="deleteBlog">delete</button>
      <button class="blog--actions__update" @click="updateBlog">update</button>
    </div>

    <div class="blog--content" v-if="blog">
      <h2 class="blog--content__title">
        {{ blog.title }}
      </h2>

      <h5 class="blog--content__author">
        {{ blog.author }}
      </h5>

      <div class="blog--content__content" @mouseup="highlight">
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
      addHighlight: "highlights/addHighlight",
    }),
    highlight(event) {
      var text = "";
      if (window.getSelection) {
        text = window.getSelection().toString();
      } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
      }
      debugger;
      if (text.indexOf(" ") <= -1) {
        let highlight = { value: text, blogId: this.id };
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

.blog--actions {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
}

.blog--actions button {
    margin: 0px 5px 0 5px;
}

.blog--content__title {
    margin: 15px 0px 15px 0px;
}

.blog--content__author {
    margin: 10px 0px 10px 0px;
}

</style>
