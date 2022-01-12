<template>
    <main class="grid">

  <v-card
    :loading="loading"

    max-width="374"
    v-for = "ad in advertisements" :key="ad.id"
  >
    <v-img :src="ad.photoSrc" alt="Sample photo"  max-height="250" contain></v-img>
    <v-card-title>{{ad.name}}</v-card-title>
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

      <div>{{ad.description}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn

        text
        to="/professional-add-ad"
      >
        Edit
      </v-btn>
    </v-card-actions>
  </v-card>
  
  
  
</main>
</template>
<script>
export default {
    
}
</script>
<script>
export default {
    data(){
        return {
            advertisements : [ {
                id:1,
                name: "Mrs. Sevgi",
                description: "I am a good therapist",
                photoSrc : "https://previews.123rf.com/images/megaflopp/megaflopp1506/megaflopp150600100/41502916-beautiful-young-female-therapist-doctor-sitting-in-front-of-working-table-smiling-and-looking-in-cam.jpg?fj=1"

            }] 
        }
    }
}
</script>