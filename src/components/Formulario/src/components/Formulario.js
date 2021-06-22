
export default {
  name: 'src-components-formulario',
  components: {
    
  },
  props: [],
  data () {
    return {
      FormData : this.getInicialData(),
      FormState: {}, 
      nombreLongMin: 3,
      nombreLongMax: 15,
      edadMin: 18,
      edadMax: 120,
      url: 'https://609dbec433eed8001795709d.mockapi.io/usuarios2',
      usuarios: []
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getInicialData(){
      return{
        nombre: '',
        edad:'',
        email:''
      }
    },
    enviar(){
      let usuario = {
        nombre: this.FormData.nombre,
        edad: this.FormData.edad,
        email: this.FormData.email,
      }
      try{
        let respuesta = this.axios.post(this.url,usuario,{'content-type':'application/json'})
        let user=respuesta.data
        console.log('AXIOS POST USUARIO',user)
        this.usuarios.push(user)
      }
      catch(error){
        console.error(error)
      }
      this.FormData = this.getInicialData()
      this.FormState._reset()
    },
    
  }
}

