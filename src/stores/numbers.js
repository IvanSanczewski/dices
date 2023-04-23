import { defineStore } from 'pinia'

export const useNumbersStore = defineStore('numbers', {
    state: () => ({
        //big square
        bigSquare:'',
        actualSquare: ''
    }),

    actions: {
        setSquare(side) {
            this.bigSquare = side * side
        }
    }
})