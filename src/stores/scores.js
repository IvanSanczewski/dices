import { defineStore } from 'pinia'

export const useScoresStore = defineStore('scores', {
    state: () => ({
        // games
        gameHighScore: [
            {
                game: 'numbers',
                scores: [
                    {
                        highScore1: 0,
                        highScore2: 0,
                        highScore3: 0,
                        highScore4: 0,
                        highScore5: 0,
                        highScore6: 0,
                        highScore7: 0,
                        highScore8: 0,
                        highScore9: 0,
                        highScore10: 0,
                    }
                ]
            }
        ]

        // users
    }),

    actions: {

    }
 })