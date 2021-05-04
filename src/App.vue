<template>
  <div>
    <div id="nav">
      <router-link to="/"><div class="navBtn">Homie</div></router-link>
      <router-link to="/client1"><div class="navBtn">Client1</div></router-link>
    </div>
      <router-view/>
    
  </div>
  
</template>

<style lang="scss" >
#nav {
  display:flex;
  flex-direction: row;
  justify-content: center;
  .navBtn {
    padding:5px;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
