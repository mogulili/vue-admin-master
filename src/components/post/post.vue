<template>
  <div id="post">
    <router-link :to="{name:'music',params:{id:'123'}}">音乐</router-link>
    <router-link to="/user/movie">电影</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
  export default{

  }
</script>
