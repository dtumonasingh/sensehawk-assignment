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

      <div id="mycontent" class="blog--content__content" @mouseup="highlight">
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
  mounted() {
    var array = [];
    var spanarray = [];
    var content = document.getElementById("mycontent");
    var words = content.innerHTML.split(" ");
    //debugger;

    for (var i = 0; i < words.length; i++) {
      // array.push(words[i]);
      var span = document.createElement("span");
      var textNode = document.createTextNode(words[i]);
      span.appendChild(textNode);
      span.setAttribute("id", i);
      span.setAttribute("class", "word");
      spanarray.push(span);
    }
    content.innerHTML = "";
    for (let i = 0; i < words.length; i++) {
      content.appendChild(spanarray[i]);
      var textNode = document.createTextNode(" ");
      content.appendChild(textNode);
    }
  },
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
      setSelectedWord: "setSelectedWord"
    }),

    highlight(event) {
      var userSelection = window.getSelection();

      //openPopup
      this.openClosePopup({value:'open'});

      //send details of current word selected

      //position of word
      let popupPosition = { x: event.clientX, y: event.clientY };

      //id of the word
      let wordId = userSelection.anchorNode.parentElement.getAttribute('id');

      //value of the word
      let text = userSelection.anchorNode.parentElement.innerText;

      //create object for the current word details
      let selectedWord = { value: text, blogId: this.id, wordId: wordId , popupPosition: popupPosition};

      //set selectedWordDetails
      this.setSelectedWord(selectedWord);
      
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
