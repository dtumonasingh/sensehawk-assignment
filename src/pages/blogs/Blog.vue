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
      this.updatedContendWithHighlightedWord();
    },
    isWord() {
      
      let text = this.selectedWord.value;
      let start = this.selectedWord.startOffset_text;
      let end = this.selectedWord.endOffset_text;

      if (text.includes(" ")) return false;
      if (text.length < 0) return false;
      if (
         this.blog.content[start- 1] != " " ||
         this.blog.content[end]!= " "
      ) return false;
      
      
        return true;
    },
    highlight(event) {
      var userSelection = window.getSelection();

      //value of the word
      let text = userSelection.toString();

      //position of word
      let popupPosition = { x: event.clientX, y: event.clientY };

      //create object for the current word details
      this.selectedWord = {
        value: text,
        blogId: this.id,
        popupPosition: popupPosition,
        startOffset_text: userSelection.getRangeAt(0).startOffset,
        endOffset_text: userSelection.getRangeAt(0).endOffset,
      };

      if (this.isWord()) {
        //openPopup
        this.openClosePopup({ value: "open" });

        //send details of current word selected
        this.setSelectedWord(this.selectedWord);
      }
    },

    updatedContendWithHighlightedWord() {
      let startOffset_text = this.selectedWord.startOffset_text;
      let endOffset_text = this.selectedWord.endOffset_text;

      const matches = [
        {
          Start: startOffset_text,
          End: endOffset_text,
        },
      ];
      let str = this.blog.content;
      for (let i = matches.length - 1; i >= 0; i--) {
        str =
          str.slice(0, matches[i].Start) +
          `<span style="background-color: yellow; display: inline;">${str.substring(
            matches[i].Start,
            matches[i].End
          )}</span>` +
          str.slice(matches[i].End);
      }
      this.blog.content = str;
      this.$store.dispatch("createOrUpdate", this.blog);
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
