<template>
    <v-app id="inspire">
       <v-img
         contain
         class="center"
         lazy-src="../../assets/home/overthink.png"
         max-height="350"
         max-width="500"
         src="../../assets/volunteer/volunteer.jpg"
       ></v-img>
      <v-content>
         
         <v-container fluid fill-height>
            
            <v-layout  justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar color="#00897B">
                        <v-toolbar-title>Volunteer as Listener</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                           <v-text-field
                              name="nameSurname"
                              label="Name Surname"
                              type="text"
                           ></v-text-field>
                           <div>
                                <v-menu offset-y>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                        color="primary"
                                        dark
                                        v-bind="attrs"
                                        v-on="on"
                                        
                                        >
                                        {{selectedItem}}
                                        </v-btn>
                                    </template>
                                    <v-list>
                                        <v-list-item
                                        v-for="(item, index) in items"
                                        :key="index"
                                        @click="selectItem(item.title)"
                                        >
                                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </div>
                            <template>
                            <v-container
                                class="px-0"
                                fluid
                            >
                                <v-checkbox
                                v-model="checkbox"
                                :label="`I have read privacy policy and I want to be a volunteer`"
                                ></v-checkbox>
                            </v-container>
                            </template>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
   
                        <v-spacer></v-spacer>
               
                        <v-btn color="#00897B" @click="beVolunteer" >Be a volunteer</v-btn>
                        
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-content>
   </v-app>
</template>

<script>
import router from "../../router/index";
export default{
    data () {
        return {
            selectedItem : "Gender",
            checkbox: false,
            items: [{title: "male",},{title: "female",}]
        }
    },
    methods: {
        selectItem(item){
            this.selectedItem = item;
        },
        beVolunteer(){
            if(this.checkbox){
                router.push("/free-chat");
            }
        }
    }

}
</script>

<style>

</style>