import { defineStore } from 'pinia'


export const useGamesStore = defineStore('games', {
    state: () =>({
        // games
        games:[
            {
                name: 'SUM DICES',
                image: 'dices',
                highScore: 0,
                highScoreUser: 'Computer',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a gravida mauris, at molestie enim. Ut eget felis sagittis, pharetra lorem imperdiet, venenatis arcu. Aliquam faucibus nunc eget mi cursus, vel pellentesque quam efficitur. Etiam sollicitudin, nulla vel posuere pulvinar, leo ligula pretium mi, ac placerat elit dui ac magna. Nulla eu molestie ipsum. Morbi ullamcorper cursus turpis, ut ornare leo pellentesque quis. Sed interdum vitae lectus vel varius. Proin semper nunc eu rutrum cursus. ',
                id: 1
            },
            {
                name: 'NUMBERS',
                image: 'numbers',
                highScore: 0,
                highScoreUser: 'Computer',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a gravida mauris, at molestie enim. Ut eget felis sagittis, pharetra lorem imperdiet, venenatis arcu. Aliquam faucibus nunc eget mi cursus, vel pellentesque quam efficitur. Etiam sollicitudin, nulla vel posuere pulvinar, leo ligula pretium mi, ac placerat elit dui ac magna. Nulla eu molestie ipsum. Morbi ullamcorper cursus turpis, ut ornare leo pellentesque quis. Sed interdum vitae lectus vel varius. Proin semper nunc eu rutrum cursus. ',
                id: 2
            },
            {
                name: 'COLOURS',
                image: 'colours',
                highScore: 0,
                highScoreUser: 'Computer',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a gravida mauris, at molestie enim. Ut eget felis sagittis, pharetra lorem imperdiet, venenatis arcu. Aliquam faucibus nunc eget mi cursus, vel pellentesque quam efficitur. Etiam sollicitudin, nulla vel posuere pulvinar, leo ligula pretium mi, ac placerat elit dui ac magna. Nulla eu molestie ipsum. Morbi ullamcorper cursus turpis, ut ornare leo pellentesque quis. Sed interdum vitae lectus vel varius. Proin semper nunc eu rutrum cursus. ',
                id: 3
            },
            {
                name: 'PAC-MAN',
                image: 'pacman',
                highScore: 0,
                highScoreUser: 'Computer',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a gravida mauris, at molestie enim. Ut eget felis sagittis, pharetra lorem imperdiet, venenatis arcu. Aliquam faucibus nunc eget mi cursus, vel pellentesque quam efficitur. Etiam sollicitudin, nulla vel posuere pulvinar, leo ligula pretium mi, ac placerat elit dui ac magna. Nulla eu molestie ipsum. Morbi ullamcorper cursus turpis, ut ornare leo pellentesque quis. Sed interdum vitae lectus vel varius. Proin semper nunc eu rutrum cursus. ',
                id: 4
            },
            {
                name: 'SPACE INVADERS',
                image: 'spacein',
                highScore: 0,
                highScoreUser: 'Computer',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a gravida mauris, at molestie enim. Ut eget felis sagittis, pharetra lorem imperdiet, venenatis arcu. Aliquam faucibus nunc eget mi cursus, vel pellentesque quam efficitur. Etiam sollicitudin, nulla vel posuere pulvinar, leo ligula pretium mi, ac placerat elit dui ac magna. Nulla eu molestie ipsum. Morbi ullamcorper cursus turpis, ut ornare leo pellentesque quis. Sed interdum vitae lectus vel varius. Proin semper nunc eu rutrum cursus. ',
                id: 5
            },
            {
                name: 'MONKEY ISLAND',
                image: 'monkey_island',
                highScore: 0,
                highScoreUser: 'Computer',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a gravida mauris, at molestie enim. Ut eget felis sagittis, pharetra lorem imperdiet, venenatis arcu. Aliquam faucibus nunc eget mi cursus, vel pellentesque quam efficitur. Etiam sollicitudin, nulla vel posuere pulvinar, leo ligula pretium mi, ac placerat elit dui ac magna. Nulla eu molestie ipsum. Morbi ullamcorper cursus turpis, ut ornare leo pellentesque quis. Sed interdum vitae lectus vel varius. Proin semper nunc eu rutrum cursus. ',
                id: 6
            },
            {
                name: 'DAY OF DEFEAT',
                image: 'dod',
                highScore: 0,
                highScoreUser: 'Computer',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a gravida mauris, at molestie enim. Ut eget felis sagittis, pharetra lorem imperdiet, venenatis arcu. Aliquam faucibus nunc eget mi cursus, vel pellentesque quam efficitur. Etiam sollicitudin, nulla vel posuere pulvinar, leo ligula pretium mi, ac placerat elit dui ac magna. Nulla eu molestie ipsum. Morbi ullamcorper cursus turpis, ut ornare leo pellentesque quis. Sed interdum vitae lectus vel varius. Proin semper nunc eu rutrum cursus. ',
                id: 7
            },
            {
                name: 'TETRIS',
                image: 'tetris',
                highScore: 0,
                highScoreUser: 'Computer',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a gravida mauris, at molestie enim. Ut eget felis sagittis, pharetra lorem imperdiet, venenatis arcu. Aliquam faucibus nunc eget mi cursus, vel pellentesque quam efficitur. Etiam sollicitudin, nulla vel posuere pulvinar, leo ligula pretium mi, ac placerat elit dui ac magna. Nulla eu molestie ipsum. Morbi ullamcorper cursus turpis, ut ornare leo pellentesque quis. Sed interdum vitae lectus vel varius. Proin semper nunc eu rutrum cursus. ',
                id: 8
            },
            {
                name: 'DIABLO',
                image: 'maden',
                highScore: 0,
                highScoreUser: 'Computer',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a gravida mauris, at molestie enim. Ut eget felis sagittis, pharetra lorem imperdiet, venenatis arcu. Aliquam faucibus nunc eget mi cursus, vel pellentesque quam efficitur. Etiam sollicitudin, nulla vel posuere pulvinar, leo ligula pretium mi, ac placerat elit dui ac magna. Nulla eu molestie ipsum. Morbi ullamcorper cursus turpis, ut ornare leo pellentesque quis. Sed interdum vitae lectus vel varius. Proin semper nunc eu rutrum cursus. ',
                id: 9
            }
        ]
    }),

    actions: {

    }
})