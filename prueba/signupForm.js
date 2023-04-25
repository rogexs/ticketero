import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage} from './showMessage.js'

const signupForm = document.querySelector('#signup-form')

signupForm.addEventListener('submit',async (e) => {
 e.preventDefault()
 const email = signupForm['signup-email'].value
 const password = signupForm['signup-password'].value
 const name = signupForm['signup-name'].value
 const apellido = signupForm['signup-apellido'].value
 

 console.log(email, password, name,apellido)

 

 try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredentials)

    //cerrar el modal de registro
    const registrarseModal = document.querySelector('#registrarseModal')
    const modal = bootstrap.Modal.getInstance(registrarseModal)
    modal.hide()

    showMessage("Bienvenido " + userCredentials.user.email)

    

 } catch (error) {
    console.log(error.message)
    console.log(error.code)

    if(error.code === 'auth/email-already-in-use'){
        showMessage("Email ya en uso", "error")
        
    }else if (error.code === 'auth/invalid-email'){
        showMessage("Email invalido", "error")
       
    }else if(error.code  === 'auth/weak-password') {
        showMessage("Contraseña muy debil", "error")
        
    }else if(error.code){
        showMessage(error.message,"error")
        
    }
 }

})

 