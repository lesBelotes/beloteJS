<template>
    <div class="homePage">

        <header class="header">
            header
        </header>

        <aside class="home_sidebar_left">
            left
        </aside>

        <main class="welcomePageBody">
            <div class="score" style="float:right">
                  <div> Nous  : 120</div>
                  <div> Eux   : 100</div>
            </div>
            <RoundCardView :cards="playedCards"  />
             <CardsInHand
                   @cardDblclick="onCardPlayed"
                    :cards="[{title:'Card1',id:'carreau_9'},{title:'Card2',id:'coeur_10'},{title:'Card3',id:'trefle_9'},{title:'Card4',id:'pique_9'}]" 
              />
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
                playedCards:[]
            }
        },
        computed:{},
        methods:{
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
                    this.playedCards.forEach(function(){

                                    })
                }else{
                    throw Error('cant compute score : need 4 cards. found  '+this.playedCards.length);
                }
                
            }
        },
        mounted(){
            this.$beloteService.connect(function (response) {
            alert("you're connected : " + response)
          })
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