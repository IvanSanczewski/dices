import { defineStore } from 'pinia'

export const useDicesStore = defineStore('dices', {
    state: () => ({
        // game settings
        totalDices: 0,
        sumReady: false,
        //dicesSet: [],

        // rolling dices
        diceType: null,
        //diceResult: null,
        //plays:[],
        play:[],
        dices: {
            set: [],
            plays: [],
            playsTotal:[],
            diceResult: null
        },

        // playsTotal:[],
        //playActual: 0,
        
        // user answers
        //userSum:[],
        userPlay: {
            firstName: '',
            userId: '',
            userSum: [],
            answered: [],
            userHihgScore:'',
            userActualScore:'',
        }
    }),

    getters: {
        diceSetComplete: (state) => {
            if (state.totalDices != 0) {
                return state.sumReady = 
                    (state.dices.set.length === state.totalDices) ? true : false
            }
        }
    },

    actions: {
        dicesCount(value) {
            this.totalDices = value
        },
  
        addDice(value) {
            console.log(value)
            if (this.dices.set.length < this.totalDices) {
                this.dices.set.push(value)
            } 
            //TODO: CALL shuffleSet() TO RANDOMLY DISPLAY THE SET
        },

        deleteDice() {
            this.dices.set.pop()
            //TODO: DELETE ANY DICE FROM THE SET
        },

        rollDices() {
            this.dices.plays = []
            this.dices.playsTotal = []
            this.userPlay.userSum = []
            this.userPlay.answered = []
            for (let i = 0; i < 10 ; i++) {
                this.dices.set.map(dice => {
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
                    this.play.push(this.dices.diceResult)
                })
                this.getPlayResult(this.play)
                this.dices.plays.push(this.play)
                this.play = []
            }
        },

        rollOneDice(sides) {
            this.dices.diceResult = Math.floor(Math.random() * (sides)) + 1;
            // return Math.floor(Math.random() * (sides)) + 1
        },

        getPlayResult(play) { // SHOULD playActual BE A LOCAL VAR?
            let playActual = 0
            play.map(dice => playActual += dice)
            this.dices.playsTotal.push(playActual)
        },

        sumVsResult(userTotal, total, index) {
            console.log(userTotal, total, index)
            this.userPlay.answered[index] = true
            let userPlayCorrect = (userTotal === total) ? true : false
            console.log(userPlayCorrect)

            if(!userPlayCorrect) {
                let difference = total - userTotal
                console.log(difference)
            }
        }


    }
})