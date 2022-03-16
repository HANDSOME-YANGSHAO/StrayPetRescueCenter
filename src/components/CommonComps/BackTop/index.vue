<template>
  <div v-if="backTopVisble" @click="backToTop" class="backTop-container">
    <img src="../../../assets/svg/猫咪.svg" />
    <img src="../../../assets/svg/回到顶部.svg" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { scrollToPosition } from '../../../utils/scrollToPosition'

const backTopVisble = ref(false)

const backToTop = () => {
  scrollToPosition(0, 300)
}

document.body.onscroll = () => {
  if (document.documentElement.scrollTop < 1000) {
    backTopVisble.value = false
  } else {
    backTopVisble.value = true
  }
}

</script>

<style scoped lang="scss">
.backTop-container {
  position: fixed;
  z-index: 999;
  width: 60px;
  height: 120px;
  bottom: 150px;
  right: 20px;
  cursor: pointer;
  transform: translateY(0);
  transition: transform 0.5s;

  &:hover {
    transform: translateY(-10px);
    transition: transform 0.5s;
  }

  img:first-child {
    margin: 25px 15px 5px;
    width: 30px;
    height: 30px;
  }
  img:nth-child(2) {
    width: 60px;
    height: 60px;
  }
}
</style>
