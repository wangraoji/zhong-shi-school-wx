<template>
  <div class="bookClubDetail">读书会详情</div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class BookClubDetail extends Vue {
  mounted() {
    console.log(this.$route.query.uid);
  }
}
</script>
<style lang="scss" scoped>
</style>
