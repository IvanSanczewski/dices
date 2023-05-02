import { defineStore } from 'pinia'
import { projectAuth } from '../firebase/config'

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
        async signin() {
            console.log(this.user.name, this.user.email, this.user.password)
            
            // in try block we send user sign in info to FIREBASE
            // promise
            try {
                console.log('Before Firebase authentication call')
                const response = await projectAuth.createUserWithEmailAndPassword(this.user.email, this.user.password)
                console.log('After Firebase authentication call')
                
                if (!response) {
                    throw new Error('Could not Sign In')
                } 
                
                console.log(response);
                console.log(response.user);

                // after signing in, call toggle function to show logged user name
                this.toggleLogged()
                console.log('SIGNED IN');
            
            // throw error if connection to FIREBASE failed
            } catch (err) {
                console.log('Error:', err.message)
                alert(err.message)
            }
            

        },

        
        toggleLogged() {
            this.isLogged = !this.isLogged
        }
    }
})