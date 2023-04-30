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
        signinTry() {
            this.signin()
        },
        
        signin() {
            console.log(this.user.name, this.user.email, this.user.password)
            
            try {
                this.toggleLogged()
                console.log('SIGNED IN');
                
            } catch (error) {
                
            }
            

        },

        
        toggleLogged() {
            this.isLogged = !this.isLogged
        }
    }
})