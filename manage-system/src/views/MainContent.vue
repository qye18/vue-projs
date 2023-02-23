<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import CommonHeader from "../components/CommonHeader.vue";
import CommonNav from "../components/CommonNav.vue";

export default {
  name:'MainPage',
  components: {
    CommonHeader,
    CommonNav,
  },
}
</script>

<style>
  .el-aside::-webkit-scrollbar {
      display: none;
   }
</style>