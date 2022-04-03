<template>
  <div id="sidebar">
    <ul id="sidebar-actions">
      <li><router-link to="/blogs"> <img :src="home" /> </router-link></li>
      <li><router-link to="/highlights"> <img :src="highlights" /> </router-link></li>
      <li><router-link to="/new-blog"> <img :src="create" /> </router-link></li>
    </ul>

  </div>
</template>
<script>

export default ({
  data() {
    return {
      home: require('../../assets/home.svg'),
      create: require('../../assets/create.svg'),
      highlights: require('../../assets/highlights.svg'),
    }
    
  },
})
</script>


<style scoped>
#sidebar {
  height: 100%;
  width: 280px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  border-right: solid 1px #ccc;
  padding: 10px;
}
#sidebar img{
  height: 30px;
  widows: 30px;
}

#sidebar-actions img{
  height: 30px;
  width: 20px;
}

#sidebar-actions {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 100%; 
}

li {
    padding-bottom:10px;
}


</style>
