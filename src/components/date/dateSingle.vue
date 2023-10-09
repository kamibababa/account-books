<template>
  <div class="demo-date-picker">
    <div class="block"  style="width: 100%;">
      <el-date-picker
        v-model="endDateTimer"
        type="date"
        placeholder="请输入日期"
        :size="size"
        style="width:100%"
        @change="datePickerNameFuc(endDateTimer)"
        value-format="YYYY-MM-DD"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref,defineProps,onMounted,defineEmits } from 'vue'

const size = ref<'default' | 'large' | 'small'>('default')

const endDateTimer = ref('')

onMounted(() => {
  console.log("回显日期：" + props.endDate)
  // 初始化日期回显
  if(props.endDate){
    endDateTimer.value = props.endDate
  }
})

// 父子传值
const props = defineProps<{
  endDate: string
}>()
// 子父传值
// 监听方法
const emit = defineEmits([
  'update:fatherData',
])
// change事件获取值
const datePickerNameFuc = (endDateTimer: string)=>{
  // 将值传递给父组件
  console.log("endDateTimer:" + endDateTimer)
  emit('update:fatherData',endDateTimer);
}









const value2 = ref('')

const shortcuts = [
  {
    text: 'Today',
    value: new Date(),
  },
  {
    text: 'Yesterday',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    },
  },
  {
    text: 'A week ago',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    },
  },
]

const disabledDate = (time: Date) => {
  return time.getTime() > Date.now()
}
</script>

<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  /* padding: 30px 0; */
  text-align: left;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
