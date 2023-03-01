import { defineStore } from 'pinia'

export const useDicesStore = defineStore('dices', {
    state: () => ({
        // game settings
        totalDices: 0,
        sumReady: false,
        diceType: null,


        // rolling dices
        play:[],
        dices: {
            set: [],
            plays: [],
            playsTotal:[],
            diceResult: null
        },
        
        // user answers
        userPlay: {
            firstName: '',
            userId: '',
            userSum: [],
            answered: [],
            isCorrect: [],
            differencePenaltie: [],
            hihgScore:'',
            playScore:[],
            actualScore:''


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

        answerVsResult(userTotal, total, index) {
            console.log(userTotal, total, index)
            this.userPlay.answered[index] = true
            this.userPlay.isCorrect = (userTotal === total) ? true : false
            // let userPlayCorrect = (userTotal === total) ? true : false
            console.log(this.userPlay.isCorrect)
            // console.log(userPlayCorrect)

            // if(!userPlayCorrect) {
            //     let difference = total - userTotal
            //     console.log(difference)
            // }
            
            if (!this.userPlay.isCorrect) {
                this.userPlay.differencePenaltie = Math.abs(total - userTotal)
                console.log(this.userPlay.differencePenaltie)
            }

            if (index === 9) {
                this.calculateScore()
            }
        },

        calculateScore() {
            let score
            this.userPlay.isCorrect.map(item => console.log(item))
        }


    }
})