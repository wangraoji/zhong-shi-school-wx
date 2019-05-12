<template>
  <div class="contactInfo">
    <el-row class="mb-10" v-html="data.contact"></el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class ContactInfo extends Vue {
  data: any = {};
}
</script>
<style lang="scss" scoped>
.contactInfo {
  padding: 15px 20px;
}
</style>
