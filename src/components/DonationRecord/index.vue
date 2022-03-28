<template>
  <div class="donationRecord-container">
    <img src="../../assets/img/捐赠封面.jpg">
    <div class="donationRecord-body">
      <DataList class="body-item"/>
      <LoveList class="body-item"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import DataList from './DataList/index.vue'
import LoveList from './LoveList/index.vue'

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
