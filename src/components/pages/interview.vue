<template>
  <el-container direction="vertical">
    <el-main>
       <div class="box">
         <el-row>
            <h2 class="title">查询条件</h2>
         </el-row>
         <el-row>
             <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="80px" title="查询条件">
                     <el-col :lg="5" :sm="12">
                        <el-form-item label="排序方式" label-suffix=":">
                            <el-select size="small">
                                 <el-option label="发布时间" value="time"></el-option>
                                  <el-option label="模型名称" value="md-name"></el-option>
                                  <el-option label="浏览次数" value="ll-times"></el-option>
                                  <el-option label="继承次数" value="jc-times"></el-option>
                            </el-select>
                        </el-form-item>
                     </el-col>
                   <el-col :lg="5" :sm="12">
                        <el-form-item label="模型名称">
                            <el-input size="small"></el-input>
                        </el-form-item>
                   </el-col>
                   <el-col :lg="5" :sm="12">
                        <el-form-item label="关键词">
                             <el-input size="small"></el-input>
                        </el-form-item>
                   </el-col>
                   <el-col :lg="9" :sm="12">
                        <el-form-item label="创建时间">
                             <el-date-picker type="date" size="small"></el-date-picker> -
                             <el-date-picker type="date" size="small"></el-date-picker>
                        </el-form-item>
                   </el-col>
                   <el-col :lg="5" :sm="12">
                        <el-form-item label="模型分类">
                             <el-select size="small">
                                   <el-option label="外科" value="wk"></el-option>
                                    <el-option label="内科" value="nk"></el-option>
                             </el-select>
                        </el-form-item>
                   </el-col>
                   <el-con :lg="5" :sm="12">
                        <el-form-item label="采用标准">
                             <el-input size="small"></el-input>
                        </el-form-item>
                   </el-con>
                   <el-con :lg="5" :sm="12">
                        <el-form-item label="创建人">
                             <el-input size="small"></el-input>
                        </el-form-item>
                   </el-con>
                   <el-con :lg="5" :sm="12">
                        <el-form-item>
                             <el-button type="primary">查询</el-button>
                             <el-button>取消</el-button>
                        </el-form-item>
                   </el-con>
             </el-form>
         </el-row>
       </div>

    <!--<section>-->
         <!---->
    <!--</section>-->
      <div class="section box">
        <el-row>
             <h2 class="title">列表</h2>
        </el-row>
        <el-table
          :data="tableData"
          border
          stripe
          ref="multipleTable"
          height="260px"
          size="small"
          style="width: 100%;">
          <el-table-column
            fixed
            type="index"
            label="序号"
            width="60">
          </el-table-column>
          <el-table-column
            type="selection"
            label="选择"
            width="60">
          </el-table-column>
          <el-table-column
            prop="name"
            label="名称">
          </el-table-column>
          <el-table-column prop="person" label="创建人"></el-table-column>
          <el-table-column prop="date" label="创建时间"></el-table-column>
           <el-table-column label="操作">
              <template slot-scope="scope">
               <el-button type="text">数据库</el-button>
               <el-button type="text">ETL</el-button>
               <el-button type="text" @click="diagloFormVisible = true">采集</el-button>
                <!--弹窗内容-->
                <el-dialog title="状态检查/执行" :visible.sync="dialogFormVisible">
                     <el-form :model="form">
                          <el-form-item label=""></el-form-item>
                     </el-form>
                </el-dialog>
              </template>
           </el-table-column>
        </el-table>
      </div>
    </el-main>
  </el-container>
</template>
<script>
   export default{
     methods:{
         clickHandle(row){
            console.log(row)
         }
     },
     computed:{

     },
     data() {
       return {
         tableData: [{
           name: '模型1',
           person: '管理员',
           date:'2018-6-8'
         }, {
           name: '模型1',
           person: '管理员',
           date:'2018-6-8'
         }, {
           name: '模型1',
           person: '管理员',
           date:'2018-6-8'
         }, {
           name: '模型1',
           person: '管理员',
           date:'2018-6-8'
         }]
       }
     }
   }
</script>
<style scoped lang="less">
  .el-input{width:120px;}
  .el-select{width:120px;}
  .el-main{padding:10px;}
  .section{margin-top:10px;}

</style>
