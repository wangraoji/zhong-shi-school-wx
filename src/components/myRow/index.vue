<template>
  <el-row class="w100">
    <el-col
      :xs="24"
      :sm="{span:18,offset:3}"
      :md="{span:16,offset:4}"
      :lg="{span:14,offset:5}"
      :xl="{span:12,offset:6}"
      class="test"
    >
      <slot></slot>
    </el-col>
  </el-row>
</template>
<style lang="scss" scoped>
</style>
