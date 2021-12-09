<template>
    <div class="CardsInHand">
        
        <div :class="card.id" v-for="(card,index) in handCards" :key="index" 
          @dblclick="onDblclick(card)"
        />
         
    </div>
</template>
<script>

export default {
    name:"CardsInHand",
    props:{
        cards:[],
    },
    data(){
        return {
            handCards:[]
        }
    },
    methods:{
        onDblclick(card){
            const self = this;
            this.$emit('cardDblclick',{card:card, callback:function(){
                self.handCards.splice(self.handCards.indexOf(card),1)
            }})
            
        }
    },
    created(){
        this.handCards = this.cards;
    }

}
</script>
<style scoped>

.CardsInHand{
   display: flex;
    justify-content: center;
}
.CardsInHand>div{
    width: 118px;
    height: 185px;
    box-shadow: 0 0 5px 0 rgb(44 39 39 / 88%);
    border-radius: 12px;
    display: inline-flex;
}
</style>
