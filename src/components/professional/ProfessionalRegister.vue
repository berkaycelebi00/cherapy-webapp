<template>
    <v-content>
         
         <v-container fluid fill-height>
            
            <v-layout  justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                      <v-card-title class="justify-center"><v-img src="../../assets/professional/video-therapy.png" max-height="300" max-width="300" ></v-img></v-card-title>
                    <v-card-title>Register as a professional account</v-card-title>
                    <v-list-item>To register as a professional we need to know about you and your carier to prevent people from scammers</v-list-item>
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
                              id="password"
                              name="password"
                              label="password"
                              type="password"
                           ></v-text-field>
                           <v-text-field
                              id="password"
                              name="password"
                              label="Re-enter password"
                              type="password"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
               
                        <v-spacer></v-spacer>

                        <v-btn  to="/professional-edit-profile" >Next</v-btn>
                        
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

</style>