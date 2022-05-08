<template>
  <div class="donationRecord-container">
    <img src="../../assets/img/donationCover.jpg">
    <div class="donationRecord-body">
      <DataList class="body-item"/>
      <LoveList class="body-item"/>
    </div>
    <Notice />
    <LoveProject />
  </div>
</template>

<script setup lang="ts">
import DataList from './DataList/index.vue'
import LoveList from './LoveList/index.vue'
import Notice from './Notice/index.vue'
import LoveProject from './LoveProject/index.vue'

</script>

<style scoped lang="scss">
.donationRecord-container {
  &>img {
    width: 100%;
  }
  .donationRecord-body {
    margin: 30px 1rem;
    display: flex;
    justify-content: space-between;
  }
}
.body-item {
  width: 40%;
}
</style>
