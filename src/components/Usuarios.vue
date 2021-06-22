<template>

  <section class="src-components-usuarios">
    <div class="jumbotron">
      <h3 v-if="!mostrarUsuarios.length" class="alert alert-danger">
        No hay Usuarios para mostrar
      </h3>

        <div class="card-deck">
          <Usuario v-for="usuario in mostrarUsuarios" 
            :key="usuario.id"
            :usuario="usuario"/>
        </div>
    </div>
  </section>

</template>

<script lang="js">
  import Usuario from './Usuario.vue'
  export default  {
    name: 'src-components-usuarios',
    props: [],
    components:{
      Usuario
    },
    mounted () {
      this.$store.dispatch('getUsuarios')
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
  .src-components-usuarios {

  }
</style>
