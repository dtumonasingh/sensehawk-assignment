<template>
  <div class="blog">
    <ThePopup @onClick="onSelectWord" />

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

      <div
        id="mycontent"
        class="blog--content__content"
        @mouseup="highlight"
        v-html="blog.content"
      ></div>
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
  data() {
    return {
      selectedWord: {
        value: "",
        blogId: this.id,
        popupPosition: "",
        startOffset_text: "",
        endOffset_text: "",
      },
    };
  },
  props: ["id"],
  computed: {
    ...mapGetters({
      getBlog: "getBlog",
    }),
    blog() {
      return this.getBlog(this.id);
    },
  },
  methods: {
    ...mapActions({
      addHighlight: "addHighlight",
      openClosePopup: "openClosePopup",
      setSelectedWord: "setSelectedWord",
    }),
    onSelectWord(event) {
      this.addHighlight();
    },
    isWord(text) {
      if (text.includes(" ")) return false;
      if (text.length <= 0) return false;
      if(!text.match(/^[0-9a-zA-Z]+$/))
      return false;
      return true;
    },
    highlight(event) {
      var userSelection = window.getSelection();
      //value of the word
      let text = userSelection.toString();
      if (this.isWord(text)) {
        let range = userSelection.getRangeAt(0);
        var newNode = document.createElement("div");
    newNode.setAttribute(
       "style",
       "background-color: yellow; display: inline;"
    );
    range.surroundContents(newNode);
        let popupPosition = { x: event.clientX, y: event.clientY };
        this.selectedWord = {
          value: text,
          blogId: this.id,
          popupPosition: popupPosition,
        };
        //openPopup
        this.openClosePopup({ value: "open" });
        //send details of current word selected
        this.setSelectedWord(this.selectedWord);
      }
    },
    updateBlog() {
      this.$router.push(`/update-blog/${this.id}`);
    },
    deleteBlog() {
      this.$store.dispatch("deleteBlog", this.id);
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

.highlight {
  background-color: yellow;
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
