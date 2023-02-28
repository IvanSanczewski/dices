import { defineStore } from 'pinia'

export const useDicesStore = defineStore('dices', {
    state: () => ({
        // game settings
        totalDices: 0,
        dicesSet: [],
        sumReady: false,

        // rolling dices
        dice: null,
        diceResult: null,
        plays:[],
        play:[],

        // answers
        playsTotal:[],
        playActual: 0,
        userSum:[]
        
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
            this.totalDices = value
        },
  
        addDice(value) {
            if (this.dicesSet.length < this.totalDices) {
                this.dicesSet.push(value)
            } 
            //TODO: CALL shuffleSet() TO RANDOMLY DISPLAY THE SET
        },

        deleteDice() {
            this.dicesSet.pop()
            //TODO: DELETE ANY DICE FROM THE SET
        },

        rollDices() {
            this.plays = []
            this.userSum = []
            for (let i = 0; i < 10 ; i++) {
                this.dicesSet.map(dice => {
                    //TODO: IMPLEMENT AN OBJECT TO PASS THE PROPER NUMBER AS A PARAMATER ACCORDING THE TYPE OF DICE
                    switch (dice) {
                        case 'tetrahedron':
                            this.rollOneDice(4)
                            break
                        case 'cube':
                            this.rollOneDice(6)
                            break
                        case 'decahedron':
                            this.rollOneDice(10)
                            break
                        case 'dodecahedron':
                            this.rollOneDice(12)
                            break
                        case 'icosahedron':
                            this.rollOneDice(20)
                            break
                    } 
                    this.play.push(this.diceResult)
                    // console.log(this.play)
                })
                this.getPlayResult(this.play)
                this.plays.push(this.play)
                this.play = []
            }
        },

        rollOneDice(sides) {
            this.diceResult = Math.floor(Math.random() * (sides)) + 1;
            // return Math.floor(Math.random() * (sides)) + 1
        },

        getPlayResult(play) { // SHOULD playActual BE A LOCAL VAR?
            play.map(dice => this.playActual += dice)
            this.playsTotal.push(this.playActual)
            this.playActual = 0
        },

        sumVsResult(userSum, playsTotal) {
            let userPlayCorrect = (userSum === playsTotal) ? true : false
            console.log(userPlayCorrect)

            if(!userPlayCorrect) {
                let difference = playsTotal - userSum
                console.log(difference)
            }
        }
    }
})