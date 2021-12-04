<template>
    <div class="homePage">

        <header class="header">
            header
        </header>

        <aside class="home_sidebar_left">
            left
        </aside>

        <main class="welcomePageBody">
            Belote Area
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
        mounted(){}
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
        height: 700px;
        overflow: auto;
        display: block;
        float: right;
        width: calc(100% - 320px)!important;
        left: inherit!important;
        right: 0!important;
        top: 0!important;
        background: #fff;
        padding: 0px 25px 0px 10px;
        box-sizing: border-box;
        box-shadow: 0 0 5px 0 rgba(140, 140, 140, 0.88);
        border: none #241f1f;
    }
</style>