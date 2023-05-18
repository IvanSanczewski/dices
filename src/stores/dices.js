import { defineStore } from 'pinia'
import router from '../router'
import { useScoresStore } from '../stores/scores.js'

const scoresStores = useScoresStore()

export const useDicesStore = defineStore('dices', {
    state: () => ({
        // game settings
        totalDices: 0,
        sumReady: false,    
        nowPlaying: false,
        displayScore: false,


        // rolling dices
        play:[],
        dices: {
            type: [
                {name: 'tetrahedron', faces: 4, img: '/src/assets/images/dice4.png'},
                {name: 'cube', faces: 6, img: '/src/assets/images/dice6.png'},
                {name: 'decahedron', faces: 10, img: '/src/assets/images/dice10.png'},
                {name: 'dodecahedron', faces: 12, img: '/src/assets/images/dice12.png'},
                {name: 'icosahedron', faces: 20, img: '/src/assets/images/dice20.png'},
            ],
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
            isCorrect: '',
            answersAreCorrect: [],
            differencePenalty: [],
            totalPenalty: 0,
            hihgScore:'',
            playScore:[],
            actualScore:'',
            playResult: null
        },

        // scores
        dicesScore: {
            positive:{
                
            }
        }
    }),

    // WON'T WORK IF VIE DEVTOOLS IS NOT ACTIVE >> SOLVED IN DELETE DICE, THOUGH IS NOT THE IDEAL SOLUTION
    // getters: {
    //     diceSetComplete: (state) => {
    //         if (state.totalDices != 0) {
    //             return state.sumReady = 
    //                 (state.dices.set.length === state.totalDices) ? true : false
    //         }
    //     }
    // },

    actions: {
        // set the number of dices to roll (6, 10, 12)
        dicesCount(value) {
            // if (this.totalDices !== 0) {
            //     this.totalDices = value
            // }
            this.totalDices !== 0 ? alert('The number of dices is already set') : this.totalDices = value
        },
  
        // adds a dice of selected type to the set
        addDice(value) {
            if (this.totalDices === 0) {
                alert ('First you must choose the number of dices')
            } else if (this.dices.set.length < this.totalDices) {
                this.dices.set.push(value)

                if (this.dices.set.length === this.totalDices)  {
                    this.sumReady = true
                }
            } 
            //TODO: CALL shuffleSet() TO RANDOMLY DISPLAY THE SET
        },

        // removes selected dice from set
        deleteDice(index) {
            console.log(index);
            this.dices.set.splice(index, 1)
            this.sumReady = false
        },

        // displays paying message in absence of ROLL DICES
        startPlay() {
            this.nowPlaying = true
        },

        // triggers the start of the game by calling rollDices & startPlay, then puts focus on the first answer input area
        goToFirstPlay() {
            console.log('FIRST PLAY');
            this.rollDices()
            this.startPlay()
            setTimeout(() => {
                const firstInput = document.querySelector('.user-answer')
                if (firstInput) {
                    firstInput.focus()
                }
            }, 3000)
        },
        
        // cicles through the dice set array and calls rollOneDice with the proper parameter
        rollDices() {
            this.dices.plays = []
            this.dices.playsTotal = []
            this.userPlay.userSum = []
            this.userPlay.answered = []
            for (let i = 0; i < 10 ; i++) {
                this.dices.set.map(dice => {
                    //TODO: IMPLEMENT AN OBJECT TO PASS THE PROPER NUMBER AS A PARAMATER ACCORDING THE TYPE OF DICE
                    switch (dice.name) {
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

        // assigns a random number between 1 and the number of faces of the dice passed as a parameter to diceResult
        rollOneDice(sides) {
            this.dices.diceResult = Math.floor(Math.random() * (sides)) + 1;
            // return Math.floor(Math.random() * (sides)) + 1
        },

        // cicles through each of 10 plays to sum the total of dices
        getPlayResult(play) { // SHOULD playActual BE A LOCAL VAR?
            let playActual = 0
            play.map(dice => playActual += dice)
            this.dices.playsTotal.push(playActual)
        },

        // cheks if user result is correct for each play && calls calculateScore after the last play answer is given
        answerVsResult(userTotal, total, index) {
            console.log(userTotal, total, index)
            
            if (userTotal === undefined
                || userTotal < 0
                || userTotal === '+'
                || userTotal === '++'
                || userTotal === '-'
                || userTotal === '--' 
                || userTotal === '+-'
                || userTotal === '--' ) {
                userTotal = 0
                this.userPlay.userSum[index] = 0
            }

            console.log(userTotal)

            this.userPlay.answered[index] = true
            this.userPlay.isCorrect = (userTotal === total) ? true : false
            console.log(this.userPlay.isCorrect)
            this.userPlay.answersAreCorrect.push(this.userPlay.isCorrect)


            if (!this.userPlay.isCorrect) {
                let difference = Math.abs(total - userTotal)
                this.userPlay.differencePenalty.push(difference)
                console.log(userTotal)
                console.log(difference)
            } else {
                this.userPlay.differencePenalty.push(0)
            }

            if (index === 9) {
                console.log(this.userPlay.answersAreCorrect)
                this.calculateScore()
            }
        },

        calculateScore() {
            let score = 0
            let index = 0
            this.userPlay.answersAreCorrect.map(item => {
                console.log(item, index)
                item ? 
                    score += this.dices.playsTotal[index]
                    :
                    score -= Math.abs(this.dices.playsTotal[index] - this.userPlay.userSum[index])
                index ++
            })
            console.log(score);
            this.displayScore = true
            this.nowPlaying = false
            this.userPlay.actualScore = score
            console.log(this.userPlay.actualScore)

            scoresStores.isHighscore('dices', score)
        },

        playAgain() {
            this.displayScore = false
            this.sumReady = true
            this.userPlay.userSum = []
            this.userPlay.answersAreCorrect = []
            this.userPlay.differencePenalty = []                            
            this.userPlay.actualScore = 0                        
            this.goToFirstPlay()
        },
        
        newDicesGame() {
            this.totalDices = 0
            this.dices.set = []
            this.sumReady = false
            this.nowPlaying = false
            this.displayScore = false
            this.dices.plays = []
            this.dices.playsTotal = []
            this.userPlay.userSum = []
            this.userPlay.answersAreCorrect = []
            this.userPlay.differencePenalty = []                            
            this.userPlay.actualScore = 0                        
        }
    }
})