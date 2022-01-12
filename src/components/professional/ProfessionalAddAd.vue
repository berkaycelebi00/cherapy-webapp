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
                    <v-card-title>Mrs. Smith</v-card-title>
                    
                  
                     <v-list-item>I am a good therapist<v-btn icon><v-icon>mdi-pencil</v-icon></v-btn></v-list-item>
                     <v-card-actions>
               
                        <v-spacer></v-spacer>
                        <v-btn>Delete</v-btn>
                        <v-btn  to="/professional-ads" >Save changes</v-btn>
                        
                        
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
<script>
export default {
    
}
</script>



//TODO: Client için de terapistle anlaşma kısımları eklenecek. 
//TODO: Client ve terapist için anlaşma yapılırsa satın alma görünecek.
//TODO: Client için terapistlerim kısmı olacak.
//TODO: Yapılabilirse canlı sohbet kısmına inbox eklenecek