import { defineStore } from 'pinia'
import { projectAuth } from '@/firebase/config'
import router from '@/router'

export const useUsersStore = defineStore('users', {
    state: () => ({
        // display
        isLogged: false,
        
        error: null,

        // user data
        user: null
    }),

    actions: {
        // function called on submit 
        async signin(email, password, displayName) {
            console.log('name:',displayName, 'email:', email, 'psw:', password)
            
            // in try block we send user sign in info to FIREBASE
            try {
                // call FIREBASE method with user email and password and store response object, method is a promise
                const response = await projectAuth.createUserWithEmailAndPassword(email, password)
                
                if (!response) {
                    throw new Error('Could not Sign In')
                } 
                
                await response.user.updateProfile({ displayName })
                this.error = null
                console.log(response.user.displayName)


                this.user = {
                    name: response.user.displayName,
                    email: response.user.email
                }

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