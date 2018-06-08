<template>
  <el-container style="height:100%;">
    <el-header style="height:60px;background:#002f73;color:#fff;line-height:60px;">
    <el-row>
      <el-col :span="18" style="font-size:24px;">
           管理系统
      </el-col>
      <el-col :span="4" style="font-size:20px;">
        <i class="el-icon-info mr"></i>
          <i class="el-icon-bell mr"></i>
          <i class="el-icon-star-off"></i>
      </el-col>
      <el-col :span="2" style="font-size:16px;"><router-link>个人中心</router-link></el-col>
    </el-row>
    </el-header>
        <el-container>
           <el-row style="width:100%;">
             <el-col :span="4" style="height:100%;">
               <el-aside style="width:100%;background-color:rgba(21,45,80,1);height:100%;">
                    <el-menu :default-openeds ="['1','3']" :default-active="$route.path" style="background-color:rgba(31,40,72,1);">
                        <el-submenu index="1">
                            <template slot="title">
                               <i class="el-icon-message"></i>
                               Demo
                            </template>
                            <el-menu-item-group>
                              <router-link to="/interview"> <el-menu-item index="1-1">demo_one</el-menu-item></router-link>
                              <el-menu-item index="1-2">demo_two</el-menu-item>
                              <el-menu-item index="1-3">demo_third</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-menu"></i>
                                我的文档
                            </template>
                            <el-menu-item-group>
                              <el-menu-item index="2-1">file_one</el-menu-item>
                              <el-menu-item index="2-2">file_two</el-menu-item>
                              <el-menu-item index="2-3">file_third</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
               </el-aside>
             </el-col>
              <el-col :span="20" style="height:100%;">
                 <el-main style="height:100%;">
                     <router-view></router-view>
                   <!--<interview></interview>-->
                </el-main>
              </el-col>
           </el-row>
        </el-container>
  </el-container>
</template>
<script>
  export default{

  }
</script>
<style>
   .el-main{
     background:#dedede;
   }
   .el-submenu__title{color:#fff;}
   .el-submenu__title:hover{background:#2c3e50;}
</style>
