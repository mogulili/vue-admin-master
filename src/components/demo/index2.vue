<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-header style="height:80px;background:#2c3e50">元数据</el-header>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>建模中心</template>
          <el-menu-item-group>
            <el-menu-item index="1-1">模型访问</el-menu-item>
            <el-menu-item index="1-2">模型管理</el-menu-item>
            <el-menu-item index="1-3">模型部署</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>系统标准化</template>
          <el-menu-item-group>
            <!--<template slot="title">分组一</template>-->
            <el-menu-item index="2-1">系统注册</el-menu-item>
            <el-menu-item index="2-2">系统建模</el-menu-item>
            <el-menu-item index="2-3">标准化评估</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>标准产品</template>
          <el-menu-item-group>
            <el-menu-item index="3-1">采集设备管理</el-menu-item>
            <el-menu-item index="3-2">采集配置/访问接口</el-menu-item>
            <el-menu-item index="3-3">数据空间服务</el-menu-item>
            <el-menu-item index="3-4">指令操作</el-menu-item>
            <el-menu-item index="3-5">查询接口</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="'4">
            <template slot="title"><i class="el-icon-setting"></i>一体化服务平台</template>
             <el-menu-item-group>
                 <el-menu-item index="4-1">平台展示</el-menu-item>
             </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-main>
      <div style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </div>

      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
      </el-main>
    </el-main>
  </el-container>
</template>
<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
<style scoped lang="less">
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
