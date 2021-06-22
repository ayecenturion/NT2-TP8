<template>

  <section class="src-components-nav-bar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color: #f79494;">
      <div class="container-fluid">
        <router-link to="/formulario">
            <a class="navbar-brand" href="#">Ayelen Centurión</a>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/formulario">
                  <a class="nav-link" href="#">Formulario para el usuario</a> 
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/usuarios">
                  <a class="nav-link" href="#">Datos de usuario</a> 
                </router-link>
              </li>
            </ul> 
          </div>
      </div>
    </nav>  
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-nav-bar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-nav-bar {

  }
</style>
