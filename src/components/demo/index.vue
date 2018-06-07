<template>
  <el-container>
    <el-header style="height:60px;background:#002f73;color:#fff;line-height:60px;">
    <el-row>
      <el-col :span="18" style="font-size:24px;">
           元数据标准注册管理系统
      </el-col>
      <el-col :span="4" style="font-size:20px;">
        <i class="el-icon-info mr"></i>
          <i class="el-icon-bell mr"></i>
          <i class="el-icon-star-off"></i>
      </el-col>
      <el-col :span="2" style="font-size:16px;"><router-link>个人中心</router-link></el-col>
    </el-row>
    </el-header>
    <el-row>
         <el-col :span="4">
           <el-aside style="width:230px;">
                <el-menu :default-openeds ="['1','3']" :default-active="$route.path">
                    <el-submenu index="1">
                        <template slot="title">
                           <i class="el-icon-message"></i>
                          建模中心
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1"><router-link to="/interview">模型访问</router-link></el-menu-item>
                          <el-menu-item index="1-2">模型管理</el-menu-item>
                          <el-menu-item index="1-3">模型部署</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            系统标准化
                        </template>
                        <el-menu-item-group>
                          <el-menu-item index="2-1">系统注册</el-menu-item>
                          <el-menu-item index="2-2">系统建模</el-menu-item>
                          <el-menu-item index="2-3">标准化评估</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
           </el-aside>
         </el-col>
          <el-col :span="20">
             <el-main>
                 <router-view></router-view>
               <!--<interview></interview>-->
            </el-main>
          </el-col>
     </el-row>
  </el-container>
</template>
<script>
  export default{

  }
</script>
<style></style>
