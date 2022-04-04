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
  //   created() {
  //     this.hightlightWords();
  //   },
  //   updated() {
  //     this.hightlightWords();
  //   },
  methods: {
    ...mapActions({
      addHighlight: "highlights/addHighlight",
    }),
    hightlightWords() {
      let highlights = this.$store.getters["highlights/highlights"];
      highlights.map((highlight) => {
        this.highlightRange(highlight.range);
      });
    },
    highlightRange(range, popupPosition) {
      this.$store.dispatch("blogs/openClosePopup", {
        value: "open",
        position: popupPosition,
      });

      var newNode = document.createElement("span");
      newNode.setAttribute("style", "background-color: yellow;");
      debugger;
      range.surroundContents(newNode);
      console.log(window.getSelection().getRangeAt(0).startOffset);
    },
    highlight(event) {
      var text = "";
      if (window.getSelection) {
        text = window.getSelection().toString();
      }
      var userSelection = window.getSelection().getRangeAt(0);
      let x = event.clientX - 350;
      let y = event.clientY - 110;
      let popupPosition = { x: x, y: y };
      this.highlightRange(userSelection, popupPosition);

      if (text.indexOf(" ") <= -1) {
        let highlight = { value: text, blogId: this.id, range: userSelection };
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

<style scoped>
.blog {
  display: flex;
  flex-direction: column;
  position: relative;
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
