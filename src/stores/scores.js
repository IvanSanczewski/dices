import { defineStore } from 'pinia'


export const useScoresStore = defineStore('scores', {
    state: () => ({
        // games
        gameHighScore: [
            {
                game: 'dices',
                scores: [
                    {name: 'Gabriele', score: 1250},
                    {name: 'Liene', score: 120},
                    {name: 'Jolanta', score: 30},
                    {name: 'Ivan', score: 900},
                    {name: 'Pau', score: 1250},
                ]
            },
            {
                game: 'numbers',
                scores: [
                    100,
                    230,
                    560,
                    330,
                    1900,
                    1250,
                ]
            },
        ]
    }),

    actions: {
        addNewHighScore(game, user, score){
            console.log('game:', game, 'user:', user, 'score:', score);
            if (score === this.gameHighScore[0].scores.length-1) {
                alert('CONGRATS! NEW SCORE SET!')
                this.gameHighScore[0].scores.push({name:user, score})
            } else if (score > this.gameHighScore[0].scores.length-1) {
                alert('CONGRATS! NEW SCORE SET!')
                this.gameHighScore[0].scores.push({name:user,score: score})
                // TODO: ORDER ARRAY
                this.gameHighScore.pop()
            }
        }   
    }
})