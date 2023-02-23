<template>
  <div class="common-header">
    <div class="left-content">
      <el-button icon="el-icon-menu" size="mini"
      @click="flipCollapse"></el-button>
      <span class="bread">首页</span>
    </div>
    <div class="right-content">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link"
          ><img src="@/assets/user.jpeg" alt="" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonHeader",
  methods:{
    flipCollapse() {
      this.$store.dispatch('flipCollapse');
    }
  }
};
</script>

<style lang="less" scoped>
.common-header {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left-content {
    .bread {
      margin-left: 20px;
      font-size: 12px;
    }
  }

  .right-content {
    .el-dropdown {
      .el-dropdown-link {
        cursor: pointer;
        color: #409eff;
        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
      }
      .el-dropdown-menu {
      }
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
  }
}
</style>
