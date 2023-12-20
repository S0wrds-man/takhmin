<script setup lang="ts">
import { usechoise } from "../stores/choise"
import { usedialog } from "../stores/dialog"

const dialogStore = usedialog()

const choiseStore = usechoise()
</script>

<template>
  <div
    class="z-4 w-100% h-100% absolute top-1px max-w-425px bg-[rgba(4,4,4,0.8)]"
  >
    <div
      class="w-80% h-400px z-5 bg-[#00c79f] rounded-3  shadow-2xl border-white border-solid border-10px mx-auto mt-20% text-center"
    >
      <p class="text-150px text-light mt-30% item">{{ choiseStore.choise }}</p>
      <div @click="dialogStore.dialog = false" class="bg-red cursor-pointer rounded-3 w-40% text-30px mx-auto z-6"> بستن </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (min-width: 420px) {
  .item {
    margin-top: 10%;
    font-size: 200px;
  }
}
</style>
