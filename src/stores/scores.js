import { defineStore } from 'pinia'
import { projectFirestore } from '../firebase/config'


export const useScoresStore = defineStore('scores', {
    state: () => ({
        // games
        gameHighScores: [],
        hola: 'mundo'
    }),


    // CHECK UNDEFINED VALUES IN GETTERS, HOW DO THEY WORK IN VUE
    getters: {
        // reads the original arrays of objects and sorts, therefore the array displayed in the template is already sorted
        dicesHighscoresOrdered: (state) => {
            state.gameHighScores[0].scores.sort((a, z) => {
                console.log('NOW SORTING 1')
                if (a.score > z.score) return -1
                if (z.score > a.score) return 1
                return 0
            })
        },
        numbersHighscoresOrdered: (state) => {
            state.gameHighScores[1].scores.sort((a, z) => {
                console.log('NOW SORTING 2')
                if (a.score > z.score) return -1
                if (z.score > a.score) return 1
                return 0
            })
        },
        colorsHighscoresOrdered: (state) => {
            state.gameHighScores[2].scores.sort((a, z) => {
                console.log('NOW SORTING 3')
                if (a.score > z.score) return -1
                if (z.score > a.score) return 1
                return 0
            })
        },
    },

    actions: {
        async fetchHighScores () {
            const response = await projectFirestore.collection('scores').get()
            let responseGame = response.docs.map(document => {
                return { ...document.data()} 
            })
            console.log(responseGame)
            this.gameHighScores = responseGame[0].gameHighScores
            // promise is solved after call for data in the state
            console.log('NOW PRINTING GAMEHIGHSCORES',this.gameHighScores)
        },

        isHighscore(game, name, id, score) {
            console.log(game, name, id, score)

            const gameIndex = this.gameHighScores.findIndex((item) => item.game === game);
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
                this.gameHighScores[gameIndex].scores.pop()
                //FIXME: READ UID FROM RESPONSE FETCH
                this.gameHighScores[gameIndex].scores.push({name, id, score})
            } else if ( score === lowerHighscore  ) {
                alert ('CONGRATULATIONS! YOU HAVE JUST SET A NEW HIGHSCORE!')
            }
        }
    },
})