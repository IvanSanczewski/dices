import { defineStore } from 'pinia'
import { nextTick } from 'vue';
import { projectFirestore } from '../firebase/config'
import { useGamesStore } from '@/stores/games.js'


export const useScoresStore = defineStore('scores', {
    state: () => ({
        // games
        gameHighScores: []
    }),

    getters: {
        // reads the original arrays of objects and sorts, therefore the array displayed in the template is already sorted
        dicesHighscoresOrdered: (state) => {
            const gameScores = state.gameHighScores[0]
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
            const gameScores = state.gameHighScores[2]
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
        // async fetchHighScores () {
        //     const response = await projectFirestore.collection('scores').get()
        //     let responseGame = response.docs.map(document => {
        //         return { ...document.data()} 
        //     })
        //     console.log(responseGame)
        //     this.gameHighScores = responseGame[0].gameHighScores
        //     // promise is solved after call for data in the state
        //     console.log('NOW PRINTING GAMEHIGHSCORES',this.gameHighScores)

        //     const storeGames = useGamesStore()
        //     // console.log(this.getters.dicesHighscoresOrdered)
        //     // storeGames.getHighScores(this.getters.dicesHighscoresOrdered[0].scores[0].name, this.getters.dicesHighscoresOrdered[0].scores[0].score)
            
        //     //FIXME: MAKE IT ASYNC SO IT PASSES THE PROPER ARGUMENTS ONCE THE GETTERS HAVE DONE THEIR JOB
        //     storeGames.getHighScores(this.getters.dicesHighscoresOrdered[0].scores[0].name, this.getters.dicesHighscoresOrdered[0].scores[0].score)
        //     // storeGames.getHighScores(this.gameHighScores[0].scores[0].name, this.gameHighScores[0].scores[0].score)
        // },

        async fetchHighScores() {
            const response = await projectFirestore.collection('scores').get();
            let responseGame = response.docs.map((document) => {
              return { ...document.data() };
            });
            console.log(responseGame);
            this.gameHighScores = responseGame[0].gameHighScores;
            

            this.$patch({})
            await nextTick()

                
            const dicesHighscoresOrdered = this.getters.dicesHighscoresOrdered;
            const storeGames = useGamesStore()
            //console.log(dicesHighscoresOrdered);
            storeGames.getHighScores(dicesHighscoresOrdered[0].scores[0].name, dicesHighscoresOrdered[0].scores[0].score);
            // Wait for Vue to update the state
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
    }
})



// The error you're encountering is likely due to the asynchronous nature of the code. Since fetchHighScores is an async function, the execution continues before the data is fetched and the 
// state is updated. As a result, when you try to access this.getters.dicesHighscoresOrdered immediately after updating the state, it's still undefined.
// To fix this, you can make use of await to wait for the state update to complete before accessing the getter. Here's an updated version of the code:


actions: {
  
}
// By using await this.$nextTick(), you allow Vue to update the state before proceeding with the next steps. This ensures that this.getters.dicesHighscoresOrdered will have the correct value when you access it.