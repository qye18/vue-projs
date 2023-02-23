<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
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

<style>
  html,body {
    margin: 0;
    padding: 0;
  }
  .el-aside::-webkit-scrollbar {
      display: none;
   }

</style>
