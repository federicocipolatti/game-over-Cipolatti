import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getDocs, collection, query, where, getDoc, doc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAbp58YzsU127L2B7FJL8BSYcPUO7iLo8g",
  authDomain: "game-over-ecom.firebaseapp.com",
  projectId: "game-over-ecom",
  storageBucket: "game-over-ecom.appspot.com",
  messagingSenderId: "84519317342",
  appId: "1:84519317342:web:75e127aa0bb86f36a769cf"
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app);

export const getProducts = (categoryId) => {
  return new Promise((resolve, reject) => {
    const collectionRef = categoryId ?
      query(collection(firestoreDb, 'products'), where('category', '==', categoryId)) :
      collection(firestoreDb, 'products')

    getDocs(collectionRef).then(response => {
        const products = response.docs.map(doc => {
            return { id: doc.id, ...doc.data() }
        })

        resolve(products)
    }).catch((error) => {
        reject('Error obteniendo productos: ', error)
    })
  })
}

export const getProductById = (productId) => {
  return new Promise((resolve ,reject) => {
    const docRef = doc(firestoreDb, 'products', productId)

    getDoc(docRef).then(response => {
        const product = { id: response.id, ...response.data()}
        resolve(product)
    }).catch((error) => {
        reject('Error obteniendo producto: ', error)
    })
  })
}