import { defineStore, useStore } from 'pinia'
import { useScoresStore} from '../stores/scores.js'




export const useGamesStore = defineStore('games', {
    state: () =>({
        // games
        games:[
            {
                name: 'SUM DICES',
                link: '/diceSum',
                image: 'dices',
                highScore: 0,
                highScoreUser: 'Computer',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a gravida mauris, at molestie enim. Ut eget felis sagittis, pharetra lorem imperdiet, venenatis arcu. Aliquam faucibus nunc eget mi cursus, vel pellentesque quam efficitur. Etiam sollicitudin, nulla vel posuere pulvinar, leo ligula pretium mi, ac placerat elit dui ac magna. Nulla eu molestie ipsum. Morbi ullamcorper cursus turpis, ut ornare leo pellentesque quis. Sed interdum vitae lectus vel varius. Proin semper nunc eu rutrum cursus. ',
                id: 1
            },
            {
                name: 'NUMBERS',
                link: '/numbers',
                image: 'numbers',
                highScore: 0,
                highScoreUser: 'Computer',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a gravida mauris, at molestie enim. Ut eget felis sagittis, pharetra lorem imperdiet, venenatis arcu. Aliquam faucibus nunc eget mi cursus, vel pellentesque quam efficitur. Etiam sollicitudin, nulla vel posuere pulvinar, leo ligula pretium mi, ac placerat elit dui ac magna. Nulla eu molestie ipsum. Morbi ullamcorper cursus turpis, ut ornare leo pellentesque quis. Sed interdum vitae lectus vel varius. Proin semper nunc eu rutrum cursus. ',
                id: 2
            },
            {
                name: 'COLOURS',
                link: 'https://diablo4.blizzard.com',
                image: 'colours',
                highScore: 0,
                highScoreUser: 'Computer',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a gravida mauris, at molestie enim. Ut eget felis sagittis, pharetra lorem imperdiet, venenatis arcu. Aliquam faucibus nunc eget mi cursus, vel pellentesque quam efficitur. Etiam sollicitudin, nulla vel posuere pulvinar, leo ligula pretium mi, ac placerat elit dui ac magna. Nulla eu molestie ipsum. Morbi ullamcorper cursus turpis, ut ornare leo pellentesque quis. Sed interdum vitae lectus vel varius. Proin semper nunc eu rutrum cursus. ',
                id: 3
            },
            {
                name: 'PAC-MAN',
                link: 'https://diablo4.blizzard.com',
                image: 'pacman',
                highScore: 0,
                highScoreUser: 'Computer',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a gravida mauris, at molestie enim. Ut eget felis sagittis, pharetra lorem imperdiet, venenatis arcu. Aliquam faucibus nunc eget mi cursus, vel pellentesque quam efficitur. Etiam sollicitudin, nulla vel posuere pulvinar, leo ligula pretium mi, ac placerat elit dui ac magna. Nulla eu molestie ipsum. Morbi ullamcorper cursus turpis, ut ornare leo pellentesque quis. Sed interdum vitae lectus vel varius. Proin semper nunc eu rutrum cursus. ',
                id: 4
            },
            {
                name: 'SPACE INVADERS',
                link: 'https://diablo4.blizzard.com',
                image: 'spacein',
                highScore: 0,
                highScoreUser: 'Computer',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a gravida mauris, at molestie enim. Ut eget felis sagittis, pharetra lorem imperdiet, venenatis arcu. Aliquam faucibus nunc eget mi cursus, vel pellentesque quam efficitur. Etiam sollicitudin, nulla vel posuere pulvinar, leo ligula pretium mi, ac placerat elit dui ac magna. Nulla eu molestie ipsum. Morbi ullamcorper cursus turpis, ut ornare leo pellentesque quis. Sed interdum vitae lectus vel varius. Proin semper nunc eu rutrum cursus. ',
                id: 5
            },
            {
                name: 'MONKEY ISLAND',
                link: 'https://diablo4.blizzard.com',
                image: 'monkey_island',
                highScore: 0,
                highScoreUser: 'Computer',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a gravida mauris, at molestie enim. Ut eget felis sagittis, pharetra lorem imperdiet, venenatis arcu. Aliquam faucibus nunc eget mi cursus, vel pellentesque quam efficitur. Etiam sollicitudin, nulla vel posuere pulvinar, leo ligula pretium mi, ac placerat elit dui ac magna. Nulla eu molestie ipsum. Morbi ullamcorper cursus turpis, ut ornare leo pellentesque quis. Sed interdum vitae lectus vel varius. Proin semper nunc eu rutrum cursus. ',
                id: 6
            },
            {
                name: 'DAY OF DEFEAT',
                link: 'https://diablo4.blizzard.com',
                image: 'dod',
                highScore: 0,
                highScoreUser: 'Computer',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a gravida mauris, at molestie enim. Ut eget felis sagittis, pharetra lorem imperdiet, venenatis arcu. Aliquam faucibus nunc eget mi cursus, vel pellentesque quam efficitur. Etiam sollicitudin, nulla vel posuere pulvinar, leo ligula pretium mi, ac placerat elit dui ac magna. Nulla eu molestie ipsum. Morbi ullamcorper cursus turpis, ut ornare leo pellentesque quis. Sed interdum vitae lectus vel varius. Proin semper nunc eu rutrum cursus. ',
                id: 7
            },
            {
                name: 'TETRIS',
                link: 'https://diablo4.blizzard.com',
                image: 'tetris',
                highScore: 0,
                highScoreUser: 'Computer',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a gravida mauris, at molestie enim. Ut eget felis sagittis, pharetra lorem imperdiet, venenatis arcu. Aliquam faucibus nunc eget mi cursus, vel pellentesque quam efficitur. Etiam sollicitudin, nulla vel posuere pulvinar, leo ligula pretium mi, ac placerat elit dui ac magna. Nulla eu molestie ipsum. Morbi ullamcorper cursus turpis, ut ornare leo pellentesque quis. Sed interdum vitae lectus vel varius. Proin semper nunc eu rutrum cursus. ',
                id: 8
            },
            {
                name: 'DIABLO',
                link: 'https://diablo4.blizzard.com/',
                image: 'diablo',
                highScore: 0,
                highScoreUser: 'Computer',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a gravida mauris, at molestie enim. Ut eget felis sagittis, pharetra lorem imperdiet, venenatis arcu. Aliquam faucibus nunc eget mi cursus, vel pellentesque quam efficitur. Etiam sollicitudin, nulla vel posuere pulvinar, leo ligula pretium mi, ac placerat elit dui ac magna. Nulla eu molestie ipsum. Morbi ullamcorper cursus turpis, ut ornare leo pellentesque quis. Sed interdum vitae lectus vel varius. Proin semper nunc eu rutrum cursus. ',
                id: 9
            }
        ]
    }),
    computed: {
    },
    actions: {
        // gamesLinks() {
            // console.log(this.games.map(game => game.link))
            // return storeGames.games.map(game => game.link)
        // }
        
        getHighScores() {
            // const storeScores = useScoresStore()
            const storeScores = useStore(useScoresStore)
        

            console.log(storeScores)
            // console.log(storeScores.$state.gameHighScores)
            console.log(storeScores.gameHighScores)
            // console.log(storeScores.gameHighScores[0].scores[0].score)
            // console.log(storeScores.gameHighScores[0].scores[0].score)
            // console.log(storeScores.gameHighScores[0].scores[0].score)
            // this.games[0].highScore = storeScores.gameHighScores[0].scores[0].score
            // storeScores.gameHighScores[0].scores[0].score
        }

    }

})
