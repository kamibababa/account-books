<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AccountLists from '../components/accountList.vue'
import Select from './select.vue'
import DateSingle from './dateSingle.vue'

import { computed, reactive, ref, onMounted } from 'vue'


// const dialogFormVisible = ref(false)
// const formLabelWidth = '80px'

// const form = reactive({
//   username: '小xx-1号',
//   mobile: '12333333309',
//   address: '梦想一号小店',
//   remark: '我不知道写什么',
//   endDate: '2999-01-01 23:59:59',
//   accountAmount: '10000',
//   status: "1"
// })

</script>

<template>
  <!-- <header>
    <div class="demo-input-suffix" style="margin-bottom: 10px;">
      <el-row :gutter="10"  class="row-bg" justify="space-between">
        <el-col :span="18">
          <el-input v-model="input2" class="w-50 m-2" placeholder="请输入关键字" :prefix-icon="Search" />
        </el-col>
        <el-col :span="6">
          <el-button style="float: right; width: 80px;" :icon="Search">搜索</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="demo-input-suffix" style="background-color: aliceblue;height:40px;font-size:20px">
      <el-row :gutter="10"  class="row-bg" justify="space-between">
        <el-col :span="7">
          <el-text style="padding-left:5px;line-height: 40px;font-weight: bold; font-size:16px">共<el-text style="font-size:16px">120</el-text>条</el-text>
        </el-col>
        <el-col :span="10" style="text-align: center"><el-text style="line-height: 40px;color: red; font-size:16px">100000.99￥</el-text></el-col>
        <el-col :span="7" style="padding-top: 5px;"><el-button :icon="Plus" style="float: right;background: aliceblue;"
            @click="dialogFormVisible = true">添加</el-button></el-col>
      </el-row>
    </div>
  </header> -->
  <account-list></account-list>
  <!-- 模态框 -->
  <!-- <el-dialog v-model="dialogFormVisible" :close-on-click-modal="false" title="新增账单" style="width: 90%;background-color: aliceblue;">
    <el-form :model="form">
      <el-form-item label="姓名:" :label-width="formLabelWidth">
        <Select></Select>
      </el-form-item>
      <el-form-item label="结算状态:" :label-width="formLabelWidth">
        <el-select v-model="form.status" placeholder="请选择结算状态" style="width: 100%;">
          <el-option label="未结清" value="1" />
          <el-option label="已结清" value="2" />
          <el-option label="部分结清" value="3" />
        </el-select>
      </el-form-item>
      <el-form-item label="结算金额:" :label-width="formLabelWidth">
        <el-row style="width: 100%;">
          <el-col :span="22" style="padding-right: 5px;">
            <el-input
                v-model="form.accountAmount"
                placeholder="请输入金额"
                :formatter="(value: string) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                :parser="(value: string) => value.replace(/\$\s?|(,*)/g, '')"
              />
          </el-col>
          <el-col :span="2"><el-text>元</el-text></el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="截至日期:" :label-width="formLabelWidth">
        <date-single></date-single>
      </el-form-item>
      <el-form-item label="联系电话:" :label-width="formLabelWidth">
        <el-input v-model="form.mobile"/>
      </el-form-item>
      <el-form-item label="联系地址:" :label-width="formLabelWidth">
        <el-input v-model="form.address"/>
      </el-form-item>
      <el-form-item label="备注:" :label-width="formLabelWidth">
        <el-input v-model="form.remark" :autosize="{ minRows: 2, maxRows: 4 }" type="textarea"
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
  </el-dialog> -->
</template>

<style>


</style>
