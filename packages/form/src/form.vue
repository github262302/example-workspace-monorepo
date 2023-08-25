<template>
  <div class="container">
    我是form组件
    <br>
    我的结果是{{ c }}
  </div>
</template>
<script>
import { sum } from 'tools'
export default {
  setup (props, ctx) {
    const { a, b } = props
    const c = sum(a || 1, b || 1)
    return {
      c
    }
  },
  props: ['a', 'b']

}
</script>
<style  scoped>
.container {
  height: 100%;
  background-color: black;
  color: white;
}
</style>
