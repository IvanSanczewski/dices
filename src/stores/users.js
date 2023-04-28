import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', {
    state: () => ({
        // display
        isLogged: false,
        
        // user data
        user:{
            name: '',
            email:'',
            password:''
        }
    }),

    actions: {
        signin() {
            this.toggleLogged()
            console.log('SIGNED IN');
            
        },
        
        toggleLogged() {
            this.isLogged = !this.isLogged
        }
    }
})