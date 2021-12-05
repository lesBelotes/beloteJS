<template>
    <div class="homePage">

        <header class="header">
            header
        </header>

        <aside class="home_sidebar_left">
            left
        </aside>

        <main class="welcomePageBody">
            
        </main>

        <footer>
            footer
        </footer>

    </div>
</template>
<script>
    export default {
        name: "HomePage",
        components:{},
        props: {},
        computed:{},
        methods:{},
        mounted(){
            this.$beloteService.connect(function (response) {
            alert("you're connected : " + response)
          })
        }
    }
</script>

<style scoped>
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
        background-image: url(../assets/images/belote_area.png);
        background-size: 100%;
        margin: 0px 10px 0px 10px;
    }
</style>