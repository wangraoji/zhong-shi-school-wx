<template>
  <div class="courseDetail">课程详情</div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class CourseDetail extends Vue {
  mounted() {
    console.log(this.$route.query.uid);
  }
}
</script>
<style lang="scss" scoped>
</style>
