<script setup lang="ts">

import { computed, ref } from 'vue'

const width_left = ref(8);
const width_right = ref(16);

</script>


<template>
    <li class="item">
        <el-row :gutter="10">
          <el-col :span="width_left">
            <el-text style="float: right; font-weight: bold;"><el-icon style="margin-right: 5px;">
              <User style="width: 1em; height: 1em; "/></el-icon>姓名：</el-text>
          </el-col>
          <el-col :span="width_right">
            <slot name="username"></slot>
            <el-text style="padding:3px;margin-left:3px;font-size:12px;color:green;line-height:100%;background-color: #e9e8e8">
                <slot name="status"></slot>
            </el-text>
          </el-col>
        </el-row>
        <el-row :gutter="10" >
          <el-col :span="width_left">
            <el-text style="float: right; font-weight: bold;">联系号码：</el-text>
          </el-col>
          <el-col :span="width_right">
            <slot name="mobile"></slot>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="width_left">
            <el-text style="float: right; font-weight: bold;">联系地址：</el-text>
          </el-col>
          <el-col :span="width_right">
            <slot name="address"></slot>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="width_left">
            <el-text style="float: right; font-weight: bold;">备注：</el-text>
          </el-col>
          <el-col :span="width_right">
            <slot name="remark"></slot>
          </el-col>
        </el-row>
    </li>
  </template>
  
  <style scoped>
    .item {
      margin-top: 5px;
      margin-bottom: 5px;
      /* background-color: rgb(244 251 251); */
      background-color: rgb(239 249 249);
    }
  </style>
  