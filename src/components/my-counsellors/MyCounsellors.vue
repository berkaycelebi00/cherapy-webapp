<template>
    <main class="grid">
        <v-card v-for="counsellor in counsellors" :key="counsellor.id"  >
            <v-list-item class="justify-center">
                <v-img :src="counsellor.imgSrc" max-width="100" max-height="100" min-width="100" min-height="100" class="rounded-img"></v-img>
            </v-list-item>
            <v-card-title>{{counsellor.name}}</v-card-title>
            <v-list-item>{{counsellor.notes}}</v-list-item>
            <v-list-item><v-icon :color="checkColor(counsellor.isOnline)">mdi-circle</v-icon>{{checkStatus(counsellor.isOnline)}}</v-list-item>
            <v-list-item class="justify-center" to="/free-chat"><v-btn>Send Message</v-btn></v-list-item>

            <v-card-title></v-card-title>
            
        </v-card>
    </main>
</template>
<script>
export default {
    data(){
        return {
            counsellors: [
                {name: "Mrs. Sevgi",notes:"Relationship therapist.",imgSrc:"https://previews.123rf.com/images/megaflopp/megaflopp1506/megaflopp150600100/41502916-beautiful-young-female-therapist-doctor-sitting-in-front-of-working-table-smiling-and-looking-in-cam.jpg?fj=1",id:1,isOnline:true},
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