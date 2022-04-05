<template>
<div v-if="isPopupOpen" @click="closePopup" id="overlay">
  </div>
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
        popup.style.top = `${this.popupPosition.y-110}px`;
        popup.style.left = `${this.popupPosition.x-340}px`
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
    closePopup(){
      this.openClosePopup({ value: "close" });
    },
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

#overlay{
  z-index:2;
  left:0px;
  top:0px;
  position: fixed;
  height: 100%;
  width: 100%;
}

p {
  color: aliceblue;
  text-align: center;
}

#popup {
  z-index:4;
  display: none;
  position: absolute;
}
</style>
