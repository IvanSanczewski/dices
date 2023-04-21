import { defineStore } from 'pinia'

export const useNumbersStore = defineStore('numbers', {
    state: () => ({
        //big square
        bigSquare:[],
        actualSquare: ''
    }),
})