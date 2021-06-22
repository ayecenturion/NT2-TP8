import Vue from 'vue'

var miMixin = {
    computed : {
        mostrarUsuarios() {
            return this.$store.state.usuarios
        }
    }
}

Vue.mixin(miMixin)