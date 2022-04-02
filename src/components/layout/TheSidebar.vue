<template>
  <div id="sidebar">
    <h1><router-link to="/"> Icon</router-link></h1>


    <ul id="sidebar-actions">
      <li><router-link to="/blogs"> Home </router-link></li>
      <li><router-link to="/highlights"> Highlights </router-link></li>
      <li><router-link to="/new-blog"> Create </router-link></li>
    </ul>

  </div>
</template>

<style scoped>
#sidebar {
  height: 100%;
  width: 100px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  border-right: 1px grey solid;
}

#sidebar-actions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    height: 100%;
    
}

ul {
    padding:0px;
    list-style: none;
}

li {
    padding-bottom:10px;
}


</style>
