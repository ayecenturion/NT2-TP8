<template>

  <section class="src-components-usuario">

    <div class="card border-dark mb-3 mr-3" style="max-width: 21rem;">  
      <div class="card-body">
        <h5 class="card-header text-center"><b>{{usuario.nombre}}</b></h5>
        <br>
        <p class="card-text text-center">Edad: {{usuario.edad}}</p>
        <p class="card-text text-center">Email de contacto: {{usuario.email}}</p>
      </div>
    </div>

  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-usuario',
    props: ['usuario'],
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
  .src-components-usuario {

  }
</style>
