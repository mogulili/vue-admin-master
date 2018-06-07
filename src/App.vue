<template>
    <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  components:{
  }
}
</script>

<style lang="less">
#container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position:relative;
}
h2,ul,li,a,p,div{margin:0px;padding:0px;}
ul,li{list-style:none;}
ul,input,button,a{outline:none;}
a{text-decoration:none;}
.tab-item{width:200px;}
 .tab-item h2{
     width:200px;font-size:16px;color:#fff;background:#2c3e50;
     font-weight:normal;
   height:40px;line-height:40px;padding-left:10px;box-sizing:border-box;
   border-bottom:1px solid #ccc;

 }
  .tab-item h2 a{
     color:#fff;display:block;
  }
  .main{position:absolute;left:210px;border:1px solid #ccc;top:0px;width:50%;height:400px;}
</style>
