<template>
  <div class="header">
    <router-link to="/news" class="header-text">News</router-link> | 
    <router-link to="/ask" class="header-text">Ask</router-link> | 
    <router-link to="/jobs" class="header-text">Jobs</router-link>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .header {
    color:white;
    background-color: #42b883;
    display: flex;
    padding: 10px;
  }
  .header-text {
    padding: 0 5px;
  }
  .header .router-link-exact-active {
    color:#35495e;
  }
  .header a{
    color:white;
  }

</style>