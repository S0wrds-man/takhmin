<script setup lang="ts">
import choisemodal from "./components/choisemodal.vue"
import { RouterLink, RouterView } from "vue-router"
import { usechoise } from "./stores/choise"
import { usedialog } from "./stores/dialog"

const dialogStore = usedialog()

const choiseStore = usechoise()

const choises = ref([
  "0",
  "1",
  "2",
  "3",
  "5",
  "10",
  "20",
  "40",
  "100",
  "?",
  ";))",
])

//f2f2f2 
// 00c79f

const open = (item: string) => {
  dialogStore.dialog = true
  choiseStore.choise = item
}
</script>

<template>
  <div
    class="continer items-center bg-green3 max-w-425px mx-auto h-100vh relative"
  >
    <div
      class="w-100% h-100% choises grid grid-cols-3 gap-4 justify-between box-border pt-10 mx-auto"
    >
      <div
        @click="open(item)"
        v-for="(item, i) in choises"
        :key="i"
        class="choise-div w-85px h-85px text-light bg-[#00C79F] rounded-3 shadow-2xl border-white border-solid border-5px m-10px text-center cursor-pointer"
      >
        <p class="text-40px mt-10px item">{{ item }}</p>
      </div>
    </div>
    <choisemodal v-if="dialogStore.dialog" />
  </div>
</template>

<style>
@media screen and (min-width: 424px) {
  .choise-div {
    height: 110px;
    width: 110px;
    margin: 0.5rem;
  }
  .item {
    margin-top: 20px;
  }
}
</style>

<!-- <RouterView /> -->
