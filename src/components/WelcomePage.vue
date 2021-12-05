<template>
    <div  class="belote" data-app>
        <router-view></router-view>
    </div>
</template>

<script>
    import router from '@/router/Router.js'
    export default {
        name: 'WelcomePage',
        router,
        components: {},
         beforeCreate:function () {
          const self =this;
          this.$beloteService.onAuthError=function () {
            self.$router.push('login')
          }
        }
    }
</script>
<style>

</style>
<style>
    @import url('../assets/css/fonts.css');
    @import url('../assets/css/main.css');

</style>
