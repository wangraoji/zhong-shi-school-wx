<template>
  <div class="regDetail">报名详情</div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class RegDetail extends Vue {
  mounted() {
    console.log(this.$route.query.uid);
  }
}
</script>
<style lang="scss" scoped>
</style>
