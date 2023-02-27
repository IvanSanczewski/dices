import { defineStore } from 'pinia'

export const useDicesStore = defineStore('dices', {
    state: () => ({
        totalDices: 0,
        dicesSet: [],
        dice: null,
        diceResult: null,
        sumReady: false,
        plays:[],
        play:[]
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
        },

        deleteDice() {
            this.dicesSet.pop()
        },

        startGame() {
            for (let i = 0; i < 10 ; i++) {
                this.dicesSet.map(dice => {
                    //TODO: IMPLEMENT AN OBJECT TO PASS THE PROPER NUMBER AS A PARAMATER ACCORDING THE TYPE OF DICE
                    switch (dice) {
                        case 'tetrahedron':
                            this.rollDice(4)
                            break
                        case 'cube':
                            this.rollDice(6)
                            break
                        case 'decahedron':
                            this.rollDice(10)
                            break
                        case 'dodecahedron':
                            this.rollDice(12)
                            break
                        case 'icosahedron':
                            this.rollDice(20)
                            break
                    } 
                    this.play.push(this.diceResult)
                })
                this.plays.push(this.play)
                this.play = []
            }
        },

        rollDice(sides) {
            this.diceResult = Math.floor(Math.random() * (sides)) + 1;
            // return Math.floor(Math.random() * (sides)) + 1
        }
    }
})