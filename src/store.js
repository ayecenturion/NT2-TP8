import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const URL_MOCKAPI = 'https://609dbec433eed8001795709d.mockapi.io/usuarios2';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        usuarios : []
    },
    actions:{
        async getUsuarios({commit}){
            try {
                let {data:usuarios} = await axios(URL_MOCKAPI)
                commit('getUsuarios',usuarios)
            }
            catch (err){
                commit('getUsuarios',[])
            }
        }
    },
    mutations:{
        getUsuarios(state,usuarios) {
            state.usuarios = usuarios
        },
    }
})