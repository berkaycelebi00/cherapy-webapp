<template>
    <main class="grid">
        <v-card v-for="client in clients" :key="client.id"  >
            <v-list-item class="justify-center">
                <v-img :src="client.imgSrc" max-width="100" max-height="100" min-width="100" min-height="100" class="rounded-img"></v-img>
            </v-list-item>
            <v-card-title>{{client.name}}</v-card-title>
            <v-list-item>{{client.notes}}</v-list-item>
            <v-list-item><v-icon :color="checkColor(client.isOnline)">mdi-circle</v-icon>{{checkStatus(client.isOnline)}}</v-list-item>
            <v-list-item class="justify-center" to="/free-chat"><v-btn>Send Message</v-btn></v-list-item>
            <v-card-title></v-card-title>
            <v-list-item class="justify-center" to="professional-client-info"><v-btn>View profile</v-btn></v-list-item>
            <v-card-title></v-card-title>
            
        </v-card>
    </main>
</template>

<script>
export default {

    data(){
        return {
            clients: [
                {name: "Mrs. Sevgi",notes:"Talk to her next week about her family.",imgSrc:"https://w7.pngwing.com/pngs/317/155/png-transparent-avatar-girl-customer-female-information-avatar-face-heroes-black-hair.png",id:1,isOnline:true},
                {name: "Mr. Savingi",notes:"Don't forget to ask her about relationship",imgSrc:"https://www.pinpng.com/pngs/m/341-3416159_no-avatar-pic-user-profile-image-png-transparent.png",id:2,isOnline:false},
                {name: "Mrs. Smith",notes:"Don't forget to ask her about relationship",imgSrc:"https://w7.pngwing.com/pngs/317/155/png-transparent-avatar-girl-customer-female-information-avatar-face-heroes-black-hair.png",id:2,isOnline:false},
            ]
        }
    },
    methods: {
        checkColor(isOnline){
           if(isOnline){
               return "green";
           }else{
               return "red";
           }
        },
        checkStatus(isOnline){
            if(isOnline){
               return "Online";
           }else{
               return "Offline";
           }
        }
    }
    
}
</script>


<style scoped>
.rounded-img {
  border-radius: 100%; 
  min-height: 300px;
  min-width: 300px;

}
</style>