import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-auth.js"

import { auth } from './firebase.js'
import {loginCheck} from './loginCheck.js'

import './signupForm.js'
import './logout.js'

onAuthStateChanged(auth, async (user) =>{
   
    loginCheck(user)
    
})




