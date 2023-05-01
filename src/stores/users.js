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
        // function called on submit 
        signin() {
            console.log(this.user.name, this.user.email, this.user.password)
            
            // in try block we send user sign in info to FIREBASE
            // promise
            try {

                // after signing in, call toggle function to show logged user name
                this.toggleLogged()
                console.log('SIGNED IN');
            
            // throw error if connection to FIREBASE failed
            } catch (error) {
                
            }
            

        },

        
        toggleLogged() {
            this.isLogged = !this.isLogged
        }
    }
})