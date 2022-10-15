import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, writeBatch, collection, getDocs, query } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAwmk-QpnBLIkr42w3aeohoIaRweBnP4N4",
  authDomain: "crwn-clothing-db-9a36e.firebaseapp.com",
  projectId: "crwn-clothing-db-9a36e",
  storageBucket: "crwn-clothing-db-9a36e.appspot.com",
  messagingSenderId: "565601105890",
  appId: "1:565601105890:web:c2deb3ee9e4a42cccaebbb"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>{
  signInWithRedirect(auth,provider);
}
export const db = getFirestore(firebaseApp);

export const createUserDocumentFromAuth = async (userAuth, optional = {}) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
 
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...optional
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email,password) => {    
      return await  createUserWithEmailAndPassword (auth, email, password);
      
};


export const signInWEP = async (email,password) =>{
  return await signInWithEmailAndPassword(auth, email, password);
}


export const signOutAuth = async () => {
  await signOut(auth);
}


export const onAuthStateChangedListener = (callback) =>{
  
  onAuthStateChanged(auth,callback);


};



const batch = writeBatch(db);
export const setCollection = async (objectsArr) =>{

  objectsArr.forEach(obj => {     
        let docRef = doc(db, "categories", obj.title.toLowerCase());
        batch.set(docRef,obj);      
    });
    await batch.commit();
}


export const getCategoriesAndDocuments = async() => {
  const collectionRef = collection(db,'categories');
  // const q = query(collectionRef);
  const querySnapshop = await getDocs(collectionRef);
  const categoryMap = querySnapshop.docs.reduce((acc,docSnapshot) => {
    const {title, items} = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  },{});
  return categoryMap;
}