<template>
  <the-header></the-header>
  <the-sidebar></the-sidebar>
  <div id="main-content">
    <router-view></router-view>
  </div>
  <the-panel></the-panel>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader";
import TheSidebar from "@/components/layout/TheSidebar";
import ThePanel from "@/components/layout/ThePanel";

export default {
  components: {
    TheHeader,
    TheSidebar,
    ThePanel
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

#main-content{
    position: fixed;
    left: 100px;
    top:60px;
    right:251px;
    height: 100%;
    width: 100%;
}
</style>
