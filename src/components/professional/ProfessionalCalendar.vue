<template>
    <div>
        <v-container>
            <v-col>
                <v-row>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn fab color="#49c5f2" class="fab" v-bind="attrs" v-on="on"><v-icon>mdi-plus</v-icon></v-btn>
                        </template>
                        <span>Add new todo</span>
                    </v-tooltip>
                </v-row>
            </v-col>
        </v-container>
        <v-divider></v-divider> 
        <v-col>
            <v-card  v-for="todo in todos" :key="todo.id" class="v-card" >
                <v-row >
                    <v-card-title>{{todo.title}}</v-card-title>
                    <v-list-item>{{todo.description}}</v-list-item>
                    <v-list-item >
                            {{todo.date}}
                        <v-list-item rounded class="flex-row-reverse" >
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn icon v-bind="attrs" v-on="on" ><v-icon>mdi-check</v-icon></v-btn>
                                </template>
                                <span>Done</span>
                            </v-tooltip>
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn icon v-bind="attrs" v-on="on" ><v-icon>mdi-delete</v-icon></v-btn>
                                </template>
                                <span>Delete</span>
                            </v-tooltip>
                            <v-dialog max-width="500" v-model="todo.dialog " persistent>
                                <template #activator="{ on: dialog }">
                                    <v-tooltip bottom>
                                    <template #activator="{ on: tooltip }">
                                        <v-btn v-on="{ ...tooltip, ...dialog }" icon><v-icon>mdi-pencil</v-icon></v-btn>
                                    </template>
                                    <span>Edit</span>
                                    </v-tooltip>
                                </template>
                                <v-card>
                                    <v-card-title>Edit todo</v-card-title>
                                    <v-card-text>
                                        <v-form>
                                        <v-text-field
                                            name="Todo"
                                            label="Title"
                                            type="text"
                                        ></v-text-field>
                                        <v-text-field
                                            name="Desctiption"
                                            label="Desctiption"
                                            type="text"
                                        ></v-text-field>
                                        <v-menu
                                            ref="menu"
                                            v-model="menu"
                                            :close-on-content-click="false"

                                            transition="scale-transition"
                                            offset-y
                                            min-width="auto"
                                        >
                                            <template v-slot:activator="{ on, attrs }">
                                            <v-text-field
                                                v-model="date"
                                                label="Picker in menu"
                                                prepend-icon="mdi-calendar"
                                                readonly
                                                v-bind="attrs"
                                                v-on="on"
                                            ></v-text-field>
                                            </template>
                                                <v-date-picker
                                                v-model="date"
                                                no-title
                                                scrollable
                                                >
                                            <v-spacer></v-spacer>
                                            <v-btn
                                                text
                                                color="primary"
                                                @click="menu = false"
                                            >
                                                Cancel
                                            </v-btn>
                                            
                                            </v-date-picker>
                                        </v-menu>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn @click="todo.dialog = false; menu=false">Save</v-btn>
                                        </v-card-actions>
                                        </v-form>
                                    </v-card-text>
                                </v-card>
                            </v-dialog>
                        </v-list-item>
                    </v-list-item>
                </v-row>   
            </v-card>
        </v-col>
     
    </div>
</template>

<script>
export default {
    data () {
        return {
            todos :[
                {title:"Meeting with Mrs. Smith",description:"Don't forget to prepare that work",date:"Jan 26 15:30",id:1,dialog: false,},
                {title:"Meeting with Mrs. Smith",description:"Don't forget to prepare that work",date:"Jan 27 09:30",id:2,dialog: false,},
                {title:"Meeting with Mrs. Smith",description:"Don't forget to prepare that work",date:"Jan 27 11:30",id:3,dialog: false,},
                {title:"Meeting with Mrs. Smith",description:"Don't forget to prepare that work",date:"Jan 28 17:30",id:4,dialog: false,},
                {title:"Meeting with Mrs. Smith",description:"Don't forget to prepare that work",date:"Jan 29 17:30",id:5,dialog: false,},
                {title:"Meeting with Mrs. Smith",description:"Don't forget to prepare that work",date:"Jan 30 19:30",id:6,dialog: false,},
            ],
            
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
           menu:false,
            modal: false,
            menu2: false,
        }
    },
    methods : {
        openEditDialog(){

        }
    }
}
</script>

<style scoped>


.fab {

  margin-bottom: 20px;
}
.v-card{
    margin-bottom: 20px;
}

</style>