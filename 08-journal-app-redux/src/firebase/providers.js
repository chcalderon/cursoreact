import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { FireBaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {

    try {

        const result = await signInWithPopup(FireBaseAuth, googleProvider);
        // const credetials = GoogleAuthProvider.credentialFromResult(result);

        const {displayName, email, photoURL, uid } = result.user;
        return {
            ok:true,
            displayName, email, photoURL, uid
        }
        

    } catch (error) {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        return {
            ok: false,
            errorMessage,
        }
    }

}

export const registerUserWithEmailpassword = async({ email, password, displayName }) => {

    try {
        const resp = await createUserWithEmailAndPassword(FireBaseAuth, email, password );
        const { uid, photoURL } = resp.user;
        
        await updateProfile( FireBaseAuth.currentUser, { displayName });

        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName
        }
    } catch (error) {
        console.log(error)
        return { ok: false, errorMessage: error.message }
    }
}

export const loginWithEmailPassword = async({ email, password }) => {

    // signInWithEmailAndPassword
    try {
        const resp = await signInWithEmailAndPassword(FireBaseAuth, email, password );
        const { uid, photoURL, displayName } = resp.user;
        
        
        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName
        }
    } catch (error) {
        console.log(error)
        return { ok: false, errorMessage: error.message }
    }
}

export const logoutFirebase = async() => {
    return await FireBaseAuth.signOut();
}