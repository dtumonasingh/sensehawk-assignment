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
      if (this.isPopupOpen)
        document.getElementById("popup").style.display = "block"; 
        else   
        document.getElementById("popup").style.display = "none";   
    },
  },
  updated() {
  },
  computed: {
    ...mapGetters({
      isPopupOpen: "isPopupOpen",
    }),
  },
  methods: {
    ...mapActions({
      openClosePopup: "openClosePopup",
      
    }),
    click() {
    	this.$emit('onClick', 'bye')
      this.openClosePopup({ value: "close" }); 
    }
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
