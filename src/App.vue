<template class="container-fluid mt-3">
  <div class="jumbotron">
    <h1>¡Bienvenidos a todos!</h1>
      <hr>
      <h2>TP 8 - Centurion Ayelen</h2>
      <br>
      <NavBar/>
      <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'


export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  background-color:#f7c6c6;
}
h1{
  color: #383735;
}
h2{
  color: #383735;
}
.jumbotron{
  padding: 32px !important;
  background-color:#f7c6c6;
}
</style>
