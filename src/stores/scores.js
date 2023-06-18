import { defineStore } from 'pinia'
import { projectFirestore } from '../firebase/config'


export const useScoresStore = defineStore('scores', {
    state: () => ({
        // games
        gameHighScores: []
    }),
    
    getters: {
        // reads the original arrays of objects and sorts, therefore the array displayed in the template is already sorted
        dicesHighscoresOrdered: (state) => {
            const gameScores = state.gameHighScores[2]
            if (gameScores?.scores) {
                console.log('NOW SORTING DICES')
                return state.gameHighScores[0].scores.sort((a, z) => {
                    if (a.score > z.score) return -1
                    if (z.score > a.score) return 1
                    return 0
                })
            }
            return []
        },
                
        numbersHighscoresOrdered: (state) => {
            const gameScores = state.gameHighScores[1]
            if (gameScores && gameScores.scores) {
                console.log('NOW SORTING NUMBERS')
                return state.gameHighScores[1].scores.sort((a, z) => {
                    if (a.score > z.score) return -1
                    if (z.score > a.score) return 1
                    return 0
                })
            }
            return []
        },
        
        colorsHighscoresOrdered: (state) => {
            const gameScores = state.gameHighScores[0]
            if (gameScores && gameScores.scores) {
                console.log('NOW SORTING COLORS')
                return state.gameHighScores[2].scores.sort((a, z) => {
                    if (a.score > z.score) return -1
                    if (z.score > a.score) return 1
                    return 0
                })
            }
            return []
        },
    },
   
    actions: {

        async fetchHighScores() {
            const response = await projectFirestore.collection('scores').get()
            let responseGame = response.docs.map((document) => {
              return { ...document.data() }
            })
            this.gameHighScores = responseGame
            console.log('ARRAY POPULATED', responseGame)
        },

        isHighscore(game, name, id, score) {
            console.log(game, name, id, score)

            const gameIndex = this.gameHighScores.findIndex((item) => item.game === game)
            console.log(gameIndex)
            
            if (gameIndex === -1) {
              // Game not found, handle accordingly
              return;
            }
            console.log(this.gameHighScores)
            console.log(this.gameHighScores[gameIndex])
            console.log(this.gameHighScores[gameIndex].scores.length)
            console.log(this.gameHighScores[gameIndex].scores)

            const lowerHighscore = this.gameHighScores[gameIndex].scores[this.gameHighScores[gameIndex].scores.length -1].score
            console.log(lowerHighscore)

            //TODO: KEEP AS MANY HIGHSCORES AS NEEDED IF THERE ARE TIED RESULTS
            if (score > lowerHighscore) {
                alert ('CONGRATULATIONS! YOU HAVE JUST SET A NEW HIGHSCORE!')
                
                //TODO: CHANGE TO PUT METHOD
                //FIXME: READ UID FROM RESPONSE FETCH
                this.gameHighScores[gameIndex].scores.pop()
                this.gameHighScores[gameIndex].scores.push({name, id, score})

                // this.updateHighScores()
            } else if ( score === lowerHighscore  ) {
                alert ('CONGRATULATIONS! YOU HAVE JUST SET A NEW HIGHSCORE!')
            }
        },

        async updateHighScores () {
            // const newHighScore = await projectFirestore.collection('scores')
            // .add(this.gameHighScores[])
            console.log(this.gameHighScores[0])

            await projectFirestore.collection('scores').add(this.gameHighScores[0])
        }

    }
})