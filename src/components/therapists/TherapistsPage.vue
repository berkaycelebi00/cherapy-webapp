<template>
    <main class="grid">

  <v-card
    :loading="loading"

    max-width="374"
    v-for = "doctor in doctors" :key="doctor.key"
  >
    <v-img :src="doctor.photoSrc" alt="Sample photo"  max-height="250" contain></v-img>
    <v-card-title>{{doctor.name}}</v-card-title>
    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>
      <div class="my-4 text-subtitle-1">

      </div>

      <div>{{doctor.description}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn

        text
        @click="toChatPage"
      >
        Start talking
      </v-btn>
    </v-card-actions>
  </v-card>
  
  
  
</main>
</template>

<script>
import router from "../../router/index"

export default {
    data () {
        return{
            doctors : [
            {photoSrc:'https://previews.123rf.com/images/megaflopp/megaflopp1506/megaflopp150600100/41502916-beautiful-young-female-therapist-doctor-sitting-in-front-of-working-table-smiling-and-looking-in-cam.jpg?fj=1',name:"Dr. Jessica Lopez",description:"I am a good therapist",rate:5,key:1},
            {photoSrc:'https://thumbs.dreamstime.com/z/portrait-successful-therapist-doctor-blurred-background-colleagues-147360585.jpg',name:"Dr. John Smith",description:"I am a good therapist",rate:4,key:2},
            {photoSrc:'https://thumbs.dreamstime.com/z/doctor-therapist-sitting-table-his-office-photo-copy-space-doctor-therapist-sitting-table-his-office-178286281.jpg',name:"Dr. John Smith",description:"I am a good therapist",rate:3,key:3},
            {photoSrc:'https://st4.depositphotos.com/1049680/28783/i/1600/depositphotos_287835428-stock-photo-young-woman-wearing-medical-coat.jpg',name:"Dr. John Smith",description:"I am a good therapist",rate:5,key:4},
            {photoSrc:'https://thumbs.dreamstime.com/z/portrait-successful-therapist-doctor-blurred-background-colleagues-147360585.jpg',name:"Dr. John Smith",description:"I am a good therapist",rate:5,key:5},
            {photoSrc:'https://thumbs.dreamstime.com/z/doctor-therapist-sitting-table-his-office-photo-copy-space-doctor-therapist-sitting-table-his-office-178286281.jpg',name:"Dr. John Smith",description:"I am a good therapist",rate:1,key:6},
            {photoSrc:'https://st4.depositphotos.com/1049680/28783/i/1600/depositphotos_287835428-stock-photo-young-woman-wearing-medical-coat.jpg',name:"Dr. John Smith",description:"I am a good therapist",rate:2,key:7},
            {photoSrc:'https://thumbs.dreamstime.com/z/portrait-successful-therapist-doctor-blurred-background-colleagues-147360585.jpg',name:"Dr. John Smith",description:"I am a good therapist",rate:4,key:8},
        ]
        }
    },
    methods: {
        toChatPage(){
            console.log("tasdsad");
            router.push("free-chat");
        }
    }
}
</script>

<style>
.grid { 
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
  }
.grid > article {
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
}
.grid > article img {
  max-width: 100%;
}
.text {
  padding: 0 20px 20px;
}
.text > button {
  background: gray;
  border: 0;
  color: white;
  padding: 10px;
  width: 100%;
  }
</style>
