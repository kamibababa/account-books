<script setup lang="ts">
import UserListItem from './userListItem.vue'
import { computed, ref } from 'vue'

const count = ref(10)
const loading = ref(false)
const noMore = computed(() => count.value >= 20)
const disabled = computed(() => loading.value || noMore.value)
const load = () => {
    loading.value = true
    setTimeout(() => {
      count.value += 2
      loading.value = false
    }, 2000)
  }
</script>

<template>
  <ul v-infinite-scroll="load"
        class="list"
        :infinite-scroll-disabled="disabled"
        :infinite-scroll-distance="10000"
        >
        <user-list-item v-for="item in count"  class="list-item">
          <template #username>
            daxx-{{ item }}
          </template>
          <template #mobile>
            186******456
          </template>
          <template #address>
            火星上xx忍者村
          </template>
          <template #status>
            启用
          </template>
          <template #remark>
            我不知道这个备注写什么
          </template>
        </user-list-item>
  </ul>
  <p v-if="loading"  v-loading="loading" style="width: 100%"></p>
  <p v-if="noMore" style="text-align: center; background-color: aliceblue; font-weight: 100; height:50px">~已经见底啦~</p>
</template>


<style>
.el-loading-spinner .circular {
    animation: none !important;
}
.list {
  padding: 0;
  list-style: none;
}
</style>