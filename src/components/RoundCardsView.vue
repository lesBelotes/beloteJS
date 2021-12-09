<template>
    <div class="RoundCardView">
            
            <!-- show cards in instance variable "cards"  -->
            <div :class="card.id" v-for="(card,index) in cards" :key="index" :style="getStyleCss(index)">
            
            </div>

    </div>
</template>
<script>
 export default {
     name:"RoundCardsView",
     props:{
         cards:[]
     },
     methods:{
         getStyleCss(index){
             if(index===0)
                return {  top: '120px',  left: '835px', "z-index":"1"}
            else if(index===1)
                return {  top: '204px',  left: '685px',"z-index":"2"}
            else if(index===2)
                return {  top: '300px',  left: '835px',"z-index":"3"}
            else if(index===3)
                return {  top: '204px',  left: '985px',"z-index":"4"}
         }
     },
     created:function(){
         console.log("created", this.cards);
     }
 }
</script>
<style scoped>
.RoundCardView{
    display: inline-flex;
    height: 69%;
}
.RoundCardView>div{
    width: 155px;
    height: 245px;
    position: absolute;
    box-sizing: border-box;
    box-shadow: 0 0 5px 0 rgb(44 39 39 / 88%);
    border: none #241f1f;
    border-radius: 10px;
}
</style>