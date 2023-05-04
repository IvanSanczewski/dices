import { defineStore } from 'pinia'
import { projectAuth } from '@/firebase/config'
import router from '@/router'

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
        // function called on submit 
        async signin() {
            console.log(this.user.name, this.user.email, this.user.password)
            
            // in try block we send user sign in info to FIREBASE
            // promise
            try {
                // call FIREBASE method with user email and password and store response object, method is a promise
                const response = await projectAuth.createUserWithEmailAndPassword(this.user.email, this.user.password)
                
                if (!response) {
                    throw new Error('Could not Sign In')
                } 
                
                //TODO: USE RESPONSE OBJECT
                console.log(response);
                console.log(response.user);

                // after signing in, call toggle function to show logged user name
                this.toggleLogged()
                router.push({ name: 'user' })
            
            // throw error if connection to FIREBASE failed
            } catch (err) {
                console.log('Error:', err.message)
                alert(err.message)
            }
        },

        logOut() {
            this.user = {
                name:'',
                email:'',
                password:''
            }
            this.toggleLogged()
        },

        toggleLogged() {
            this.isLogged = !this.isLogged
        }
    }
})