<template>
  <div id="popup">
    <button @click="click">highlight</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  watch: {
    isPopupOpen() {  
      let popup = document.getElementById("popup");
      if (this.isPopupOpen) {        
        popup.style.display = "block";
        //popup.style.top = `${this.popupPosition.y}px`;
        //popup.style.position = `${this.popupPosition.x}px`
      } else {
        popup.style.display = "none";
      }
    },
  },
  computed: {
    ...mapGetters({
      isPopupOpen: "isPopupOpen",
      popupPosition: "getPopupPosition"
    }),
  },
  methods: {
    ...mapActions({
      openClosePopup: "openClosePopup",
    }),
    click() {
      this.$emit("onClick", "bye");
      this.openClosePopup({ value: "close" });
    },
  },
  updated() {},
};
</script>

<style scoped>
button {
  position: absolute;
  background-color: black;
  height: 20px;
  color: white;
  z-index: 3;
}
p {
  color: aliceblue;
  text-align: center;
}

#popup {
  display: none;
  position: absolute;
}
</style>
