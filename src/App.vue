<template>
  <div id="app">
    <Search/>
  </div>
</template>

<script>
import Search from './components/search.vue'

export default {
  name: 'App',
  components: {
    Search
  }
}
</script>

<style>
body{
  font-family: "Sofia";
  margin: 0;
  padding: 0;
  background:linear-gradient( rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.3)100%),url('../public/assets/bg.jpg');  
  /* background-image: url('./assets/bg.jpg');
  background-color: rgba(0, 0, 0, 0.9); */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
#app {
  margin-top: 10%;
  margin-left: auto;
  margin-right: auto;
  
}
</style>
