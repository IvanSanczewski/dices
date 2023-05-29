import { defineStore } from 'pinia'
import { projectAuth } from '@/firebase/config'
import router from '@/router'

export const useUsersStore = defineStore('users', {
    state: () => ({
        // display
        isLogged: false,
        
        // errors
        error: null,

        // user data
        // TODO: MUST CONTAIN HIGHSCORES
        user: {}
    }),

    actions: {
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
                console.log(response)
                console.log(response.user)
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
        
        async login(email, password, displayName) {
            console.log('email:', email, 'psw:', password)
            
            // in try block we send user login info to FIREBASE
            try {
                // call FIREBASE method with user email and password and store response object, method is a promise
                const response = await projectAuth.signInWithEmailAndPassword(email, password)
                
                await response.user.updateProfile({ displayName })
                this.error = null
                console.log(response)
                console.log(response.user)
                console.log(response.user.displayName)
                
                this.error = null
                
                this.user = {
                    name: response.user.displayName,
                    email: response.user.email
                }
                
                // after signing in, call toggle function to show logged user name
                // this.toggleLogged()
                router.push({ name: 'user' })
                
                // throw error if connection to FIREBASE failed
            } catch (err) {
                console.log('Error:', err.message)
                alert(err.message)        
            }
        },
        
        async logOut() {
            console.log('LOGGING CURRENT USER OUT')
            try {
                // this method signs out the current user from FIREBASE
                await projectAuth.signOut()
                console.log('USER LOGGED OUT')
                
                this.user = {}
                this.toggleLogged()

            } catch (err) {
                console.log('Error:', err.message)
                alert(err.message)        
            }
        },

        getUser() {
            projectAuth.onAuthStateChanged(currentUser => {
                console.log('USER STATE CHANGE' ,currentUser)
                if (currentUser) {
                    console.log(`USER ${currentUser.displayName} IS LOGGED WITH THIS EMAIL: ${currentUser.email}`)
                    this.user.name = currentUser.displayName
                    this.user.email = currentUser.email
                    this.toggleLogged()
                }
            })
        },

        toggleLogged() {
            console.log('isLogged TOGGLED')
            this.isLogged = !this.isLogged
        },

        //TODO: CREATE A METHOD TO ADD THE LAST FIVE SOCRES AND SHOW IF TOP FIVE
        addScore(game, score) {
            console.log(game, score);
        }
    }
})