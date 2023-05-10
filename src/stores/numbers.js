import { defineStore } from 'pinia'

export const useNumbersStore = defineStore('numbers', {
    state: () => ({
        //big square
        squareSide: null,
        squareSize: null,
        squareValues: []

    }),

    actions: {
        setSquare(side) {
            console.log(side);
            this.squareSide = side
            this.squareSize = side * side
            console.log(this.squareSide);
            console.log(this.squareSize);
        },

        // generate a different value for each cell of the square using the Fisher-Yates algo
        generateSquare() {
            // first we populate the array from 1 to the length of the square for each index
            this.squareValues = Array.from({length: this.squareSize}, (_, i) => i + 1);

            // then, starting from the end, in each iteration we generate a random number between 0 and the current iteration
            this.squareValues.forEach((_, i, a) => {
              const j = Math.floor(Math.random() * (i + 1));
              // finally we swap these two values
              [a[i], a[j]] = [a[j], a[i]];
            });
        }
    }
})

