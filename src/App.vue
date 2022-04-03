<template>
  <the-header></the-header>
  <the-sidebar></the-sidebar>
  <div id="main-content">
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader";
import TheSidebar from "@/components/layout/TheSidebar";

export default {
  components: {
    TheHeader,
    TheSidebar
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
    left: 280px;
    top:60px;
    height: 100%;
    padding: 20px;
    max-width: 800px;
}

ul {
    padding:0px;
    list-style: none;
}

a {
    text-decoration: none;
    color: black;
}

 button {
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 5px;
}

button:hover {
    border-radius: 5px;
    border: 1px solid black;
    padding: 5px;
}
</style>
