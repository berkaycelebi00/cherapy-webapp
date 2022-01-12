<template>
    <main class="grid content">
        <v-card>
            <v-list-item><v-img src="../../assets/home/overthink.png" max-width="200" max-height="200" contain min-width="200" min-height="200"></v-img></v-list-item>
            <v-card-title>My Clients</v-card-title>
            <v-card-title>You have 3 clients</v-card-title>
            <v-card-actions class="justify-center"><v-btn to="/professional-clients">Review</v-btn></v-card-actions>
        </v-card>
        <v-card>
            <v-list-item><v-img src="../../assets/professional/advertisement.jpg" max-width="200" max-height="200" contain min-width="200" min-height="200"></v-img></v-list-item>
            <v-card-title>My Ads</v-card-title>
            <v-card-title>You have 1 active advertisement</v-card-title>
            <v-card-actions class="justify-center"><v-btn to="/professional-ads">Review</v-btn></v-card-actions>
        </v-card>
        <v-card>
            <v-list-item><v-img src="../../assets/professional/profile.jpg" max-width="200" max-height="200" contain min-width="200" min-height="200"></v-img></v-list-item>
            <v-card-title>Profile</v-card-title>
            <v-card-title>Change your profile settings</v-card-title>
            <v-card-actions class="justify-center"><v-btn to="/professional-edit-profile">Edit</v-btn></v-card-actions>
        </v-card>
        <v-card>
            <v-list-item><v-img src="../../assets/professional/calendar.jpg" max-width="200" max-height="200" contain min-width="200" min-height="200"></v-img></v-list-item>
            <v-card-title>Calendar</v-card-title>
            <v-card-title>Schedule your calendar and todos</v-card-title>
            <v-card-actions class="justify-center"><v-btn to="/professional-calendar">Review</v-btn></v-card-actions>
        </v-card>
    </main>
    
</template>

<script>
export default {
    
}
</script>

<style scoped>
.content {
  max-width: 720px;
  margin: auto;
}

</style>