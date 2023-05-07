
import {addDoc, collection} from 'firebase/firestore';
import db from './firebase-config.js';
import products from '../products.js';

const querydb = collection(db, 'items');


const promises = products.map(product => addDoc(querydb, product));

promises.all(promises).then(() => {
        console.log("done")
        process.exit(0)
    })