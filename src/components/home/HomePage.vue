<template>
    <v-container>
        <v-container><h1><p class="text-center home-exp-text">Need Someone to Talk to? Our Counselors and Listeners Are Standing By.</p></h1></v-container>
        <v-img
        contain
            lazy-src="../../assets/logo.png"
            max-height="150"
            class="center"
            max-width="250"
            src="../../assets/logo.png"
        ></v-img>
        <v-container><h2><p class="text-center home-exp-text-alt">Welcome to Cherapy</p></h2></v-container>
        <v-container><h2><p class="text-center home-exp-text-alt ">Cherapy connects you to personds who care about your emotions</p></h2></v-container>
        <v-item-group>
            <v-container>
                <v-row>
                    <v-col>
                        <v-item>
                            <v-card height="300">
                                <v-img class="center"
                                contain
                                    lazy-src="../../assets/home/overthink.png"
                                    max-height="150"
                                    max-width="250"
                                    src="../../assets/home/overthink.png"
                                ></v-img>
                                <v-container><p class="text-center home-exp-text">Grow at your own pace</p></v-container>
                                <v-container><p class="text-center">Explore self help guides and growth paths for proven tips and advice on how to feel better</p></v-container>
                            </v-card>
                        </v-item>
                    </v-col>
                    <v-col>
                        <v-item>
                            <v-card height="300" >
                                <v-img
                                contain
                                    class="center"
                                    lazy-src="../../assets/home/chatting.png"
                                    max-height="150"
                                    max-width="250"
                                    src="../../assets/home/chatting.png"
                                ></v-img>
                                <v-container><p class="text-center home-exp-text">You can talk to anyone and anytime you want</p></v-container>
                                <v-container><p class="text-center">Be heard by volunteer listeners and chat with others who understand in support chat rooms</p></v-container>
                            </v-card>
                        </v-item>
                    </v-col><v-col>
                        <v-item>
                            <v-card height="300">
                                <v-img
                                contain
                                class="center"
                                    lazy-src="../../assets/home/therapy3.png"
                                    max-height="150"
                                    max-width="250"
                                    src="../../assets/home/therapy3.png"
                                ></v-img>
                                <v-container><p class="text-center home-exp-text">Affordable Online Therapy</p></v-container>
                                <v-container><p class="text-center">Confidential online therapy and counseling with licensed therapists, for $150 per month</p></v-container>
                            </v-card>
                        </v-item>
                    </v-col>
                </v-row>
            </v-container>
        </v-item-group>

        
        </v-container>
    
</template>


<script>

</script>

<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.home-exp-text{
    color: #0277BD;
}
.home-exp-text-alt{
    color: #01579B;
}

</style>
