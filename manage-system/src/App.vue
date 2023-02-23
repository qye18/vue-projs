<template>
  <div id="app">
    <el-container>
      <el-aside width="auto">
        <CommonNav />
      </el-aside>
      <el-container>
        <el-header>
          <CommonHeader />
        </el-header>
        <el-main>
          <MainContent></MainContent>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonHeader from "./components/CommonHeader.vue";
import CommonNav from "./components/CommonNav.vue";
import MainContent from "./views/MainContent.vue";

export default {
  name: "App",
  components: {
    CommonHeader,
    CommonNav,
    MainContent,
  },
};
</script>

<style lang="less">
  html,body {
    margin: 0;
    padding: 0;
  }
  .el-aside::-webkit-scrollbar {
      display: none;
   }
  
  .el-container {
    
    .el-header {
      background-color: black;
      color: white;
    }
  }

</style>
