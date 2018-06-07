<template>
  <div class="container-fluid">
      <div class="row">
         <el-header style="height:60px;background:#002f73;color:#fff;font-size:24px;line-height:60px;width:100%;">元数据标准注册管理系统</el-header>
      </div>
      <div class="row">
        <div class="col-xs-2">
         <el-aside>
              <el-menu :default-openeds ="['1','3']">
                  <el-submenu index="1">
                      <template slot="title">
                         <i class="el-icon-message"></i>
                        建模中心
                      </template>
                      <el-menu-item-group>
                          <el-menu-item index="1-1">模型访问</el-menu-item>
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
        </div>
        <div class="col-xs-10">
           <el-main>
               <router-view></router-view>
          </el-main>
        </div>
      </div>
    </div>
</template>
<script>
  export default{

  }
</script>
<style></style>
