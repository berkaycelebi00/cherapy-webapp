import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth_store';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        hasLoggedIn : false,
    },
   
    modules:{
        auth
    }
});
