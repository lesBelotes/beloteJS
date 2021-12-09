<template>
    <div class="CardsInHand">
        
        <div :class="card.id" v-for="(card,index) in cards" :key="index" />
         
    </div>
</template>
<script>

export default {
    name:"CardsInHand",
    props:{
        cards:[]
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
