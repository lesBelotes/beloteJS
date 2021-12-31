<template>

    <div class="homePage">



        <header class="header">

          <div class="text-center">  

            

            <v-btn v-on:click="createNewGame" class="mx-2" fab dark  color="indigo" >

      <v-icon dark>

        mdi-plus

      </v-icon>

    </v-btn>

    </div>



        </header>



        <aside class="home_sidebar_left">

           <div id="left">

              <v-card  class="mx-auto"  max-width="300" tile >
                    <v-list dense>
                    <v-subheader>  GAMES </v-subheader>
                    <v-list-item-group color="primary" >
                        <v-list-item @dblclick="participe(gm.id,idjoueur)"    v-for="(gm, i) in games" :key="i" >
                        <v-list-item-content>
                             <v-list-item-title v-text="gm.id"></v-list-item-title>
                             <v-list-item-title v-text=getText(gm)></v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                    </v-list>
            </v-card>
          </div>
        </aside>



        <main class="welcomePageBody" >

        <div v-if="affichejeux==true" style="display:contents">

            <div class="score" style="float:right">

                  <div> Nous  : 120</div>

                  <div> Eux   : 100</div>

            </div>

            <RoundCardView :cards="playedCards"  />

             <CardsInHand

                   @cardDblclick="onCardPlayed"

                    :cards="[{title:'Card1',id:'carreau_9'},{title:'Card2',id:'coeur_10'},{title:'Card3',id:'trefle_9'},{title:'Card4',id:'pique_9'}]" 

              /> 

        </div>

            

        </main>



        <footer>

            footer

        </footer>



    </div>

</template>

<script>

import CardsInHand from './CardsInHand.vue'

    import RoundCardView from './RoundCardsView'



    export default {

        name: "HomePage",

        components:{RoundCardView,CardsInHand},

        props: {},

        data(){

            return {

                affichejeux:false,
                playedCards:[],
                games:[],,
                idjoueur:1

            }

        },

        computed:{},

        methods:{
            getText(game){
                return "state : " + game.state +
                        ". nb ="+game.nbPlayer ;
            },
            createNewGame:function(){
                 this.$beloteService.create(this.afterCreateGame)
                 console.log("hello");
           },

           afterCreateGame:function(gamedata){

             console.log("bienvenue saisie une partie");

                  this.affichejeux=true;
                  this.games.push(gamedata);

           },

           participe:function(idgame,idjoueur){

                 this.$beloteService.participer(callback,idgame,idjoueur);

           }

           traitmentresponse:function(datagame){

                    this.games=datagame;

                    console.log(datagame);



           },

            onCardPlayed({card,callback}){

                const self =this;

                if(this.playedCards.length<4){

                    this.playedCards.push(card)

                    callback()

                }

                if(this.playedCards.length===4){

                        const f = function(i){

                            setTimeout(function(){

                                self.playedCards.splice(0,1)

                                if(self.playedCards.length>0)

                                f(i/2);

                            },i)

                        }

                        f(400);

                }

            },

            calculRoundScore(){

                if(this.playedCards.length===4){
                    this.playedCards.forEach(function(){ })
                }else{
                    throw Error('cant compute score : need 4 cards. found  '+this.playedCards.length);
                }

                

            }

        },


        mounted(){
            let self = this;
             this.$beloteService.affichegames(this.traitmentresponse);
             this.$beloteService.connect(null,"pseudo");
             this.$beloteService.wsConnect().then(function(ws){
                    console.log("mounted SOCKET : ", ws)
                    self.$beloteService.wsRegister("belote").then(function(registerResponse){
                        console.log('registe rResponse : ', registerResponse)
                    })
             });
          }

    }

</script>



<style >

   .header{

        float: right;

        width: calc(100% - 320px);

        height: calc(8%);

        margin-left: 20px;

        margin-bottom: 10px;

         box-shadow: 0 0 5px 0 rgba(140, 140, 140, 0.88);



    }

    footer{

        margin-top: 10px;

        float: right;

        width: calc(100% - 320px);

        height: calc(5%);

        box-shadow: 0 0 5px 0 rgba(140, 140, 140, 0.88);



    }

    .home_sidebar_left {

        width: 300px;

        height: calc(100%);

        margin: 0px 5px 0px 5px;

        overflow: auto;

        background: #fff !important;

        box-shadow: 0 0 5px 0 rgba(140, 140, 140, 0.88);

        float: left;

        box-sizing: border-box;

    }

    .homePage{

        width: 100%;

    }

    .homePage .welcomePageBody {

        height: 710px;

        display: block;

        float: right;

        width: calc(100% - 330px)!important;

        background-image: url(../assets/images/tapis.jpg);

        background-size: 100%;

        margin: 0px 10px 0px 10px;

    }

    .score{

        margin-right: 42px;

        float: right;

        width: 150px;

        height: 120px;

        box-shadow: 0 0 5px 0 rgba(140, 140, 140, 1);

        background-color: rgba(71, 69, 69, 0.7)

    }

    .score>div{

        padding: 10px;

        color: #fff;

        font-size:1.5em;

        font-weight: bold;

    }

    @import url(../assets/css/cards.css);

</style>