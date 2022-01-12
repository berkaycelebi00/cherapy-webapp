<template>
<v-app>
    
 <v-navigation-drawer permanent>
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{username || 'Username'}}
              </v-list-item-title>
              
            </v-list-item-content>
          </v-list-item>
          <v-list-item link ><v-icon  color="blue">mdi-cog</v-icon></v-list-item>
          
        </v-list>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          @click="routePage(item.routeName)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</v-app>
</template>

<script>
import router from '../../router/index'
  export default {
    data () {
      return {
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', routeName: '/dashboard'},
          { title: 'Chat', icon: 'mdi-chat', routeName: '/chat' },
          { title: 'Volunteer as a listener', icon: 'mdi-hand-heart', routeName: '/volunteer' },
          { title: 'My counsellors', icon: 'mdi-handshake', routeName: '/my-counsellors' },
          
        ],
        username:this.$route.params.username
      }
    },
    methods: {
      logout() {
        this.$router.replace({name:'login'})
      },
      routePage(routeName){
        router.push(routeName);
      }
    }
  }
</script>