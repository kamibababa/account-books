<!-- 多选属性multiple -->
<template>
  <div class="flex flex-wrap"  style="width: 100%;">
    <div>
      <slot name="selectlabelname"></slot>
    </div>
    <div class="m-20">
      <el-select
        v-model="value"
        filterable
        remote
        reserve-keyword
        placeholder="请输入姓名"
        remote-show-suffix
        :remote-method="remoteMethod"
        :loading="loading"
        style="width:100%"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

interface ListItem {
  value: string
  label: string
}

const list = ref<ListItem[]>([])
const options = ref<ListItem[]>([])
const value = ref<string[]>([])
const loading = ref(false)

onMounted(() => {
  list.value = users.map((item) => {
    return {value: `value:${item.userId}`, label: `${item.username}:${item.mobile}`}
  })
})

const remoteMethod = (query: string) => {
  if (query) {
    loading.value = true
    setTimeout(() => {
      loading.value = false
      options.value = list.value.filter((item) => {
        return item.label.toLowerCase().includes(query.toLowerCase())
      })
    }, 200)
  } else {
    options.value = []
  }
}

class User {
  userId: string
  username: string
  address: string
  mobile: string
}
// 通过ajax请求获取到user列表
const users = [{
  userId: "1",
  username: "旺仔1号",
  address: "黄河之水天上来自1号",
  mobile: "1333333331"
},{
  userId: "2",
  username: "旺仔2号",
  address: "黄河之水天上来自2号",
  mobile: "1333333332"
}]
</script>
