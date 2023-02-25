import { defineStore } from 'pinia'

export const useDicesStore = defineStore('dices', {
    state: () => ({
        totalDices: null,
        dicesSet: [],
        dice: null

        
    }),
    getters: {

    },
    actions: {
        dicesCount(value) {
            console.log(value)
            this.totalDices = value
        },
        
        addDice(value) {
            console.log(value)
            this.dicesSet.push(value)
        },

        deleteDice() {
            this.dicesSet.pop()
        }
    }
})