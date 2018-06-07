<template>
  <div id="music">
    我是音乐{{$route.params.id}}
    <button @click="showDataId">调用参数</button>
    <span>接收参数{{dataId}}</span>
  </div>
</template>
<script>
  export default{
      data(){
        return{
          dataId:''
        }
      },
    methods:{
        showDataId(){
          let dataid = this.$route.params.id
          this.dataId = dataid
        }
    }
  }
</script>
