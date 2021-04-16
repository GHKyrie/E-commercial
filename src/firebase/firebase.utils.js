import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAS2YtxF8i7lHkSCNnLp5Bveuag-YYYFwM",
    authDomain: "kupuoc-commercial.firebaseapp.com",
    projectId: "kupuoc-commercial",
    storageBucket: "kupuoc-commercial.appspot.com",
    messagingSenderId: "254285537315",
    appId: "1:254285537315:web:4b379b12ea931d2f9b5196",
    measurementId: "G-46JQ0SB7BY"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
         const { displayName, email } = userAuth;
         const createdAt = new Date();

         try {
             await userRef.set({
                 displayName,
                 email,
                 createdAt,
                 ...additionalData
             })
         } catch(error) {
            console.error('Error creating user: ', error.message);
         }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;