import { defineStore } from 'pinia'

export const useDicesStore = defineStore('dices', {
    state: () => ({
        totalDices: 0,
        dicesSet: [],
        dice: null,
        sumReady: false,
        diceResult: null

        
    }),
    getters: {
        diceSetComplete: (state) => {
            if (state.totalDices != 0) {
                return state.sumReady = 
                    (state.dicesSet.length === state.totalDices) ? true : false
            }
        }
    },
    actions: {
        dicesCount(value) {
            console.log(value)
            this.totalDices = value
        },
        
        addDice(value) {
            if (this.dicesSet.length < this.totalDices) {
                console.log(value)
                this.dicesSet.push(value)
            } 
            
            // else {
            //     this.sumReady = true

            // }
        },

        deleteDice() {
            this.dicesSet.pop()
        },

        startGame() {
            this.dicesSet.map(dice => {
                //TODO: IMPLEMENT AN OBJECT TO PASS THE PROPER NUMBER AS A PARAMATER ACCORDING THE TYPE OF DICE
                switch (dice) {
                    case 'tetrahedron':
                        rollDice(4)
                        break
                    case 'cube':
                        rollDice(6)
                        break
                    case 'decahedron':
                        rollDice(10)
                        break
                    case 'dodecahedron':
                        rollDice(12)
                        break
                    case 'icosahedron':
                        rollDice(20)
                        break
                }   
            })
        },

        rollDice(sides) {
            this.diceResult = Math.floor(Math.random() * (sides - 1 + 1) ) + 1;
            console.log(diceResult)
        }
    }
})