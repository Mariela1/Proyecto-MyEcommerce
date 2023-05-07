import {getFirestore, doc, getDoc} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail';
import { useParams } from 'react-router-dom';


export const ItemDetailContainer = () => {

  const [data, setData] = useState({});
  const {detalleId} = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'items', '04t6sfGfjbPUCb9O9fuH');

    getDoc(queryDoc)
        .then(res => setData({id: res.id, ...res.data()}))
}, [detalleId])

    return (
        <ItemDetail data={data}/>
  );
}

export default ItemDetailContainer;