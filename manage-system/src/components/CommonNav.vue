<template>
  <div>
    <el-col :span="12">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <h5>通用后台管理系统</h5>

        <el-menu-item
          v-for="item in menuWithoutChidren"
          :key="item.name"
          :index="`${item.name}`"
          @click="directTo(item)"
        >
          <i :class="`el-icon-${item.icon}`"></i>
          <span slot="title">{{ item.label }}</span>
        </el-menu-item>
        <el-submenu
          v-for="item in menuWithChildren"
          :key="item.name"
          :index="`${item.name}`"
        >
          <template slot="title">
            <i :class="`el-${item.icon}`"></i>
            <span>{{ item.label }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="subItem in item.children"
              :key="subItem.name"
              :index="`${subItem.name}`"
              @click="directTo(subItem)"
              >{{ subItem.label }}</el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "CommonNav",
  data() {
    return {
      menuData: [
        {
          path: "/home",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "/goods",
          name: "good",
          label: "商品管理",
          icon: "video-play",
          url: "Goods/Goods",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
          url: "User/User",
        },
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "/subPage1",
              name: "subPage1",
              label: "页面1",
              icon: "setting",
              url: "Other/SubPage1",
            },
            {
              path: "/subPage2",
              name: "subPage2",
              label: "页面2",
              icon: "setting",
              url: "Other/SubPage2",
            },
          ],
        },
      ],
    };
  },
  computed: {
    menuWithChildren() {
      return this.menuData.filter((item) => item.children);
    },
    menuWithoutChidren() {
      return this.menuData.filter((item) => !item.children);
    },
  },
  mounted() {
    // console.log(this.$route);
  },
  methods: {
    directTo(menuItem) {
      if (menuItem.path == this.$route.path) {
        return
      }
      this.$router.push({
        path:menuItem.path
      })
    },
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less">
.el-col {
  width: 100%;
  h5 {
    color: white;
    font-weight: 400;
    text-align: center;
  }
  .el-menu {
    height: 100vh;
    .el-menu-item {
      font-size: 12px;
    }
    .submenu__title {
      font-size: 12px;
    }
  }
}
</style>
