const state = {
    hasLoggedIn : false,
}

const getters = {
     getLoggedIn(state){

        return state.hasLoggedIn;
    }
}

const mutations = {
    login(state,){
        console.log("huh?");
        state.hasLoggedIn = true;
    },
    logout(state,){
        state.hasLoggedIn = false;
    }
    
}

const actions = {
    loginAsync({commit}){
        //login stuff
        commit("login",);
        
    },
    logoutAsync({commit},){
        //login stuff

        commit("logout",);
    }
}

export default{
    state,
    getters,
    mutations,
    actions,
}