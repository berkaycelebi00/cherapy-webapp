<template>
  <v-app>

  <v-main>
    <v-app-bar
    color="#49c5f2"
    elevation="4">
    <router-link to="/" tag="v-toolbar-title">
      <v-toolbar-title> Cherapy.com</v-toolbar-title>
    </router-link>
    <v-menu  class="hidden-md-and-up" v-if="$vuetify.breakpoint.xsOnly">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>Create Post</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>All Posts</v-list-item-title>
          </v-list-item>
        </v-list>
    </v-menu>

    <div v-if="!$vuetify.breakpoint.xsOnly" v-show="this.$store.getters.getLoggedIn==true">
       <router-link to="/dashboard" tag="v-btn">
        <v-btn plain>Dashboard</v-btn>
      </router-link>
      <router-link to="/chat" tag="v-btn">
        <v-btn plain>Chat</v-btn>
      </router-link>
    
      <router-link to="/volunteer" tag="v-btn">
        <v-btn plain>volunteer as a listener</v-btn>
      </router-link>

     
    </div>

    <v-spacer></v-spacer>

    
      <v-btn
        class="ma-1"
        plain
        @click="loginOrOut"
      >
        {{loginValue}}
      </v-btn>
    
    </v-app-bar>
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>

  </v-footer>
</v-app>
</template>


<script>
 import router from './router/index'
export default {
 

    name: 'app',
    data () {
      return {
        hasLoggedIn : false,
      }
    },
    created(){


    },
    computed:{
        loginValue(){

          if(this.$store.getters.getLoggedIn == true){
            
            return "Logout";
          }else{
            
            return "Login";
          }
          
        }
    },
    methods: {
      loginOrOut(){
        if(this.$store.getters.getLoggedIn == true){
          router.push("/login").catch(()=>{});
          this.$store.dispatch("logoutAsync");
          
        }else{
          router.push("/login").catch(()=>{});
        }
         
      }
    }
  
  
  
}


</script>





<style>


</style>
