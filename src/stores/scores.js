import { defineStore } from 'pinia'
import { projectFirestore } from '../firebase/config'
import router from '../router'


export const useScoresStore = defineStore('scores', {
    state: () => ({
        // games
        gameHighScore: [
            {
                game: 'dices',
                scores: [
                    {name: 'Liene', score: 120},
                    {name: 'Pau', score: 1250},
                    {name: 'Ivan', score: 900},
                    {name: 'Jolanta', score: 30},
                    {name: 'Gabriele', score: 1250}
                ]
            },
            {
                game: 'numbers',
                scores: [
                    {name: 'Gabriele', score: 100},
                    {name: 'Liene', score: 560},
                    {name: 'Jolanta', score: 230},
                    {name: 'Ivan', score: 1900},
                    {name: 'Pau', score: 1250}
                ]
            },   
            {
                game: 'colours',
                scores: [
                    {name: 'Liene', score: 1560},
                    {name: 'Gabriele', score: 2000},
                    {name: 'Jolanta', score: 930},
                    {name: 'Ivan', score: 1800},
                    {name: 'Pau', score: 550}
                ]
            }   
        ],
        gameHighScores: []
    }),

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
        async getHighScores () {
            const response = await projectFirestore.collection('scores').get()
            let responseGame = response.docs.map(document => {
                return { ...document.data()} 
            })
            console.log(responseGame)
            this.gameHighScores = responseGame[0].gameHighScores
            console.log(this.gameHighScores)
        },

        isHighscore(game, user, score) {
            console.log(game, score, user)


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

            // FIXME: change [0] into a var that uses game



            const lowerHighscore = this.gameHighScores[gameIndex].scores[this.gameHighScores[gameIndex].scores.length -1].score
            console.log(lowerHighscore)

            if (score > lowerHighscore) {
                alert ('CONGRATULATIONS! YOU HAVE JUST SET A NEW HIGHSCORE!')
                this.gameHighScores[gameIndex].scores.pop()
                this.gameHighScores[gameIndex].scores.push({name: user, score})
                
            } else if ( score === lowerHighscore  ) {
                alert ('CONGRATULATIONS! YOU HAVE JUST SET A NEW HIGHSCORE!')

            }






        }
    },

})