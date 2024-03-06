import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
	apiKey: 'AIzaSyDbockEUCjVa4Hf6yLAUrjVnSSDBsOuUuM',
	authDomain: 'gym-training-cbf4f.firebaseapp.com',
	projectId: 'gym-training-cbf4f',
	storageBucket: 'gym-training-cbf4f.appspot.com',
	messagingSenderId: '898195981949',
	appId: '1:898195981949:web:d3f0f4e0e502df88e89314',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
