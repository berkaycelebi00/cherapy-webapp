<template>
    <v-content>
         
         <v-container fluid fill-height>
            
            <v-layout  justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                      <v-card-title class="justify-center">
                          <v-img src="https://w7.pngwing.com/pngs/317/155/png-transparent-avatar-girl-customer-female-information-avatar-face-heroes-black-hair.png"  class="rounded-img"  max-width="200" max-height="200"></v-img>
                    </v-card-title>
                    <v-card-title>Mrs. Sevgi</v-card-title>
                    <v-list-item><v-row> <v-icon color="green">mdi-circle</v-icon><v-btn text>Talk now</v-btn></v-row></v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>Sex: Female</v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>Notes:</v-list-item>
                    <v-list-item>Talk to her next week about her family.<v-btn icon><v-icon>mdi-pencil</v-icon></v-btn></v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>Client for "4" Months</v-list-item>
                    <v-card-actions>
                        <v-btn>Send email</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn>End contract</v-btn>
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