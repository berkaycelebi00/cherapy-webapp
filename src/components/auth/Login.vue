<template>
   <v-app id="inspire">
       <v-img
         contain
         class="center"
         lazy-src="../../assets/home/overthink.png"
         max-height="250"
         max-width="350"
         src="../../assets/auth/login.svg"
       ></v-img>
      <v-content>
         
         <v-container fluid fill-height>
            
            <v-layout  justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar color="#00897B">
                        <v-toolbar-title>Login to Cherapy</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                           <v-text-field
                              name="login"
                              label="Login"
                              type="text"
                           ></v-text-field>
                           <v-text-field
                              id="password"
                              name="password"
                              label="Password"
                              type="password"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-btn color="#00897B" type="submit">Forgot password</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn color="#00897B" to="/register">Register</v-btn>
                        <v-btn color="#00897B" @click="login" >Login</v-btn>
                        
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-content>
   </v-app>
</template>

<script>
import router from "../../router/index"

export default {
   name: 'Login',
   data(){
      return {
         loginName:"Login"
      }
   },
   props: {
      source: String,
      
   },
   watch:{

   },
   methods: {
      login(){
         
         this.$store.dispatch("loginAsync");
         router.push("/dashboard");
      }
   }
};
</script>

<style></style>