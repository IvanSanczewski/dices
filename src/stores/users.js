import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', {
    state: () => ({
        // display
        isLogged: false,
    }),

    actions: {
        toggleLogged() {
            this.isLogged = !this.isLogged
        }
    }
})