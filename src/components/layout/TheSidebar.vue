<template>
  <div id="sidebar">
    <ul id="sidebar-actions">
      <li><router-link to="/blogs"> <div class="tooltip"><img  :src="home" /> <span class="tooltiptext">blog</span></div></router-link></li>
      <li><router-link to="/highlights"> <div class="tooltip"><img :src="highlights" /> <span class="tooltiptext">highlights</span></div></router-link></li>
      <li><router-link to="/new-blog"> <div class="tooltip"><img :src="create" /> <span class="tooltiptext">create</span></div></router-link></li>
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

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: fit-content;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px;
  border-radius: 6px;
  font-size: 12px;

  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}


</style>
