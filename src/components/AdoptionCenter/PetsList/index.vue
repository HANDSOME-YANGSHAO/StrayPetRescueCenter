<template>
  <div class="petList-container">
    <PetCard v-for="item in petList" :key="item.id" :pet-describe="item" />
  </div>
</template>

<script setup lang="ts">
import PetCard from './PetCard/index.vue'

defineProps({
  petList: Object,
  default: {}
})
</script>

<style scoped lang="scss">
.petList-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
</style>
