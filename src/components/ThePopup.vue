<template>
  <div id="popup">
    <div v-if="isPopupOpen" @click="closePopup" id="overlay">
      <button @click="onClick">highlight</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      isPopupOpen: "blogs/isPopupOpen",
      popupPosition: "blogs/getPopupPosition",
    }),
  },
  methods: {
    ...mapActions({
      openClosePopup: "blogs/openClosePopup",
    }),
    closePopup() {
      this.openClosePopup({ value: "close" });
    },
    onClick() {
      this.openClosePopup({ value: "close" });
    },
  },
  updated() {},
  watch: {
    popupPosition() {
      if (this.isPopupOpen) {
        // debugger;
        document.getElementById("popup").style.display = "block";
        document.getElementById(
          "popup"
        ).style.top = `${this.popupPosition.y}px`;
        document.getElementById(
          "popup"
        ).style.left = `${this.popupPosition.x}px`;
      }
    },
  },
};
</script>

<style scoped>
button {
  position: absolute;
  background-color: black;
  height: 20px;
  color: white;
  padding: 3px;
}
p {
  color: aliceblue;
  text-align: center;
}

#popup {
  display: none;
  position: absolute;
  z-index: 2;
}

#overlay {
  position: fixed;
  height: 100vh;
  width: 100vh;
  top: 0px;
  left: 0px;
}
</style>
