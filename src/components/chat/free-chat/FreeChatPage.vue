
<template>
  <v-container fluid style="padding: 0;">
    <v-row no-gutters>
   
      <v-col sm="12" style="position: relative;">
        <div class="chat-container" v-on:scroll="onScroll" ref="chatContainer" >
          <message :messages="messages" @imageLoad="scrollToEnd"></message>
        </div>
      
        <div class="typer">
          <input type="text" placeholder="Type here..." v-on:keyup.enter="sendMessage" v-model="content">
      
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    import Message from './parts/Message.vue'

    export default {
        data () {
        return {
            content: '',
            chatMessages: [
                {
                    user: "Zooming Ninja",
                    content : "Hi"
                },
                {
                    user: "Jumping Scout",
                    content : "Hi, how are you"
                },
                {
                    user: "Zooming Ninja",
                    content : "I am fine and you?"
                },
                {
                    user: "Jumping Scout",
                    content : "I am ok..."
                },
                {
                    user: "Zooming Ninja",
                    content : "Why what is the problem man?"
                },
                {
                    user: "Jumping Scout",
                    content : "I am working on a new project and it is exhausting. But i will figure it out"
                },
                
            ],
        
            currentRef: {},
            loading: false,
            totalChatHeight: 5
        }
        },
        props: [
        
        ],
        mounted () {
            this.loadChat()
        },
        components: {
            'message': Message,

        },
        watch: {
            messages : {
                
            }
        },
        computed: {
            messages () {
                return this.chatMessages
            },
            username () {
                return "Jumping Scout"
            },
            onNewMessageAdded () {
                const that = this
                let onNewMessageAdded = function (snapshot, newMessage = true) {
                let message = snapshot.val()
                message.key = snapshot.key
                /*eslint-disable */
                var urlPattern = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig
                /*eslint-enable */
                message.content = message.content
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;')
                    .replace(/'/g, '&#039;')
                message.content = message.content.replace(urlPattern, "<a href='$1'>$1</a>")
                if (!newMessage) {
                    that.chatMessages.unshift(that.processMessage(message))
                    that.scrollTo()
                } else {
                    that.chatMessages.push(that.processMessage(message))
                    that.scrollToEnd()
                }
                }
                return onNewMessageAdded
            }
        },
        
        methods: {
          loadChat () {
            this.totalChatHeight = this.$refs.chatContainer.scrollHeight
            this.loading = false
            if (this.id !== undefined) {
                
                //let chatID = this.id
                //this.currentRef = firebase.database().ref('messages').child(chatID).child('messages').limitToLast(20)
                //this.currentRef.on('child_added', this.onNewMessageAdded)
            }
          }, 
          sendMessage () {
                // if (this.content !== '') {
                // //this.$store.dispatch('sendMessage', { username: this.username, content: this.content, date: new Date().toString(), chatID: this.id })
                // this.chatMessages.push({
                //     user: "Zooming Ninja",
                //     content : this.content
                // },)
                
         
                //     this.content = ''
 
                // }
            },  
        },

    }
</script>


  


<style>
  .scrollable {
    overflow-y: auto;
    height: 90vh;
  }
  .typer{
    box-sizing: border-box;
    display: flex;
    align-items: center;
    bottom: 0;
    height: 4.9rem;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 -5px 10px -5px rgba(0,0,0,.2);
  }
  .typer input[type=text]{
    position: absolute;
    left: 2.5rem;
    padding: 1rem;
    width: 80%;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1.25rem;
  }
  .chat-container{
    box-sizing: border-box;
    height: calc(100vh - 9.5rem);
    overflow-y: auto;
    padding: 10px;
    background-color: #f2f2f2;
  }
  .message{
    margin-bottom: 3px;
  }
  .message.own{
    text-align: right;
  }
  .message.own .content{
    background-color: lightskyblue;
  }
  .chat-container .username{
    font-size: 18px;
    font-weight: bold;
  }
  .chat-container .content{
    padding: 8px;
    background-color: lightgreen;
    border-radius: 10px;
    display:inline-block;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12);
    max-width: 50%;
    word-wrap: break-word;
    }
  @media (max-width: 480px) {
    .chat-container .content{
      max-width: 60%;
    }
  }
</style>