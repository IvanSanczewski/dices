import { defineStore } from 'pinia'
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
                    {name: 'Gabriele', score: 2000},
                    {name: 'Liene', score: 1560},
                    {name: 'Jolanta', score: 930},
                    {name: 'Ivan', score: 1800},
                    {name: 'Pau', score: 550}
                ]
            }   
        ]
    }),

    getters: {
        // reads the original arrays of objects and sorts, therefore the array displayed in the template is already sorted
        dicesHighscoresOrdered: (state) => {
            state.gameHighScore[0].scores.sort((a, z) => {
                if (a.score > z.score) return -1
                if (z.score > a.score) return 1
                return 0
            })
        },
        numbersHighscoresOrdered: (state) => {
            state.gameHighScore[1].scores.sort((a, z) => {
                if (a.score > z.score) return -1
                if (z.score > a.score) return 1
                return 0
            })
        },
        colorsHighscoresOrdered: (state) => {
            state.gameHighScore[2].scores.sort((a, z) => {
                if (a.score > z.score) return -1
                if (z.score > a.score) return 1
                return 0
            })
        },
    },

    actions: {
        addNewHighScore(game, user, score){
            console.log('game:', game, 'user:', user, 'score:', score);
            if (score === this.gameHighScore[0].scores.length-1) {
                this.gameHighScore[0].scores.push({name:user, score})
            } else if (score > this.gameHighScore[0].scores.length-1) {
                alert('CONGRATS! NEW SCORE SET!')
                this.gameHighScore[0].scores.push({name:user,score: score})
                // TODO: ORDER ARRAY
                this.gameHighScore.pop()
            }
        }, 
        
        isHighscore(game, user, score) {
            console.log(game, score, user)
            console.log(this.gameHighScore[0].scores[4].name, '-', this.gameHighScore[0].scores[4].score)
            
            // FIXME: change [0] into a var that uses game
            const lowerHighscore = this.gameHighScore[0].scores[4].score
            console.log(lowerHighscore)

            if (score > lowerHighscore) {
                alert ('CONGRATULATIONS! YOU HAVE JUST SET A NEW HIGHSCORE!')
                this.gameHighScore[0].scores.pop()
                this.gameHighScore[0].scores.push({name: user, score})
                
            } else if ( score === lowerHighscore  ) {
                alert ('CONGRATULATIONS! YOU HAVE JUST SET A NEW HIGHSCORE!')

            }






        }
    },

})