import { defineStore } from "pinia"

export const usechoise = defineStore( 'choise' , ()=>{
    const choise = ref('')
    return {choise}
  })