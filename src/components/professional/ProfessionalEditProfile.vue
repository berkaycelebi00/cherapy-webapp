<template>
    <v-content>
         
         <v-container fluid fill-height>
            
            <v-layout  justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                      <v-card-title class="justify-center">
                          <v-img src="../../assets/therapists/doctor1.webp"  class="rounded-img"  max-width="200" max-height="200"></v-img>
                          <v-btn icon><v-icon>mdi-pencil</v-icon></v-btn>
                    </v-card-title>
                    <v-card-title>Mrs. Smith<v-btn icon><v-icon>mdi-pencil</v-icon></v-btn></v-card-title>
                    <v-list-item><v-alert color="red lighten-2" dark>Your profile has not been activated yet. To activate your profile please ensure you have filled all the required fields and then apply activation mail. Activation mail will be sent to your email address in 2-48 hours. For more information <a>info@cherapy.com</a></v-alert></v-list-item>
                    
                  
                     <v-card-text>
                        <v-form>
                           <v-text-field
                              name="login"
                              label="Name Surname"
                              type="text"
                           ></v-text-field>
                           <v-text-field
                              id="email"
                              name="email"
                              label="E mail"
                              type="email"
                           ></v-text-field>
                          <v-text-field
                              id="Country"
                              name="Country"
                              label="Country"
                              type="Country"
                           ></v-text-field>
                           <v-btn>Upload a license file</v-btn><v-btn icon><v-icon>mdi-help-circle</v-icon></v-btn>
                        </v-form>
                        
                     </v-card-text>
                     <v-card-actions>
               
                        <v-spacer></v-spacer>

                        <v-btn  to="/professional-edit-profile" >Save changes</v-btn>
                        
                     </v-card-actions>
                  </v-card>
                  
               </v-flex>
            </v-layout>
         </v-container>
      </v-content>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.rounded-img {
  border-radius: 100%; 
  min-height: 300px;
  min-width: 300px;
}
</style>