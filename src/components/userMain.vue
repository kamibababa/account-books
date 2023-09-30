<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import UserList from './userList.vue'

import { computed, reactive, ref } from 'vue'
import { Calendar, Search, Plus } from '@element-plus/icons-vue'
import { dividerProps } from 'element-plus';

const input2 = ref('')

const dialogFormVisible = ref(false)
const formLabelWidth = '80px'

const form = reactive({
  username: '小xx-1号',
  mobile: '12333333300',
  address: '梦想一号小店',
  remark: '我不知道写什么',
  endDate: '2999-01-01 23:59:59',
  accountAmount: '10000',
  status: "1"
})

// 点击改变样式
// const isActive1 = ref(false);
// const isActive2 = ref(false);
// const isActive3 = ref(false);
// const changeColor = (n: number) => {
//   isActive1.value = false;
//   isActive2.value = false;
//   isActive3.value = false;
//   if (n == 1) {
//     isActive1.value = true;
//   } else if (n == 2) {
//     isActive2.value = true;
//   } else {
//     isActive3.value = true;
//   }
// }
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <div class="demo-input-suffix" style="margin-bottom: 10px;">
      <el-row :gutter="10">
        <el-col :span="18">
          <el-input v-model="input2" class="w-50 m-2" placeholder="请输入姓名、手机号" :prefix-icon="Search" />
        </el-col>
        <el-col :span="6">
          <el-button style="float: right; width: 80px;" :icon="Search">搜索</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="demo-input-suffix" style="background-color: aliceblue;height:40px">
      <el-row :gutter="10">
        <el-col :span="15">
          <el-text style="line-height: 40px;padding-left:5px;font-weight: bold; font-size:16px">共<el-text style=" font-size:16px">120</el-text>条</el-text>
        </el-col>
        <el-col :span="9"  style="padding-top: 5px;"><el-button style="float: right;background: aliceblue;"
            @click="dialogFormVisible = true" :icon="Plus" >添加</el-button></el-col>
      </el-row>
    </div>
    <!-- <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  </header>
  <user-list></user-list>
  <!-- 底部导航 -->
  <!-- <el-affix target="#app" position="bottom" :offset="0" z-index="99999" style="height:40px">
    <el-row :gutter="50" style="background-color:#a9e9b9; border-radius: 18px 18px 0 0; height: 100%;">
      <el-col :span="8" style="text-align: center;">
        <el-button text type="primary" @click="changeColor(1)" :class="{ 'font_size_active': isActive1 }"
          style="height: 100%;"><el-icon style="font-size:25px">
            <House />
          </el-icon></el-button>
      </el-col>
      <el-col :span="8" style="text-align: center;">
        <el-button text type="primary" @click="changeColor(2)" style="height: 100%;"
          :class="{ 'font_size_active': isActive2 }"><el-icon style="font-size:25px">
            <Setting />
          </el-icon></el-button>
      </el-col>
      <el-col :span="8" style="text-align: center;">
        <el-button text type="primary" @click="changeColor(3)" style="height: 100%;"
          :class="{ 'font_size_active': isActive3 }"><el-icon style="font-size:25px">
            <User />
          </el-icon></el-button>
      </el-col>
    </el-row>
  </el-affix> -->

  <!-- 模态框 -->
  <el-dialog v-model="dialogFormVisible" close-on-click-modal="false" title="新增人员" style="width: 90%;background-color: aliceblue;">
    <el-form :model="form">
      <el-form-item label="姓名:" :label-width="formLabelWidth">
        <el-input v-model="form.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="联系电话:" :label-width="formLabelWidth">
        <el-input v-model="form.mobile" autocomplete="off" />
      </el-form-item>
      <el-form-item label="联系地址:" :label-width="formLabelWidth">
        <el-input v-model="form.address" autocomplete="off" />
      </el-form-item>
      <el-form-item label="状态:" :label-width="formLabelWidth">
        <el-select v-model="form.status" placeholder="请选择用户状态" style="width: 100%;">
          <el-option label="启用" selected value="1" />
          <el-option label="禁用" value="2" />
        </el-select>
      </el-form-item>
      <el-form-item label="备注:" :label-width="formLabelWidth">
        <el-input v-model="form.remark" autocomplete="off" :autosize="{ minRows: 2, maxRows: 4 }" type="textarea"
          placeholder="请输入" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
  <!-- <RouterView /> -->
</template>

<style scoped>
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */

/* 底部导航 */
/* .affix-container {
    text-align: center;
    height: 400px;
    border-radius: 4px;
    background: var(--el-color-primary-light-9);
  } */
/** 点击动态设置颜色 */
/* .font_size_active {
  color: rgb(98, 217, 207) !important;
} */
</style>
