 import {useState, useEffect} from 'react'
 import { db } from './firebase'

export const  useFirestore = ()=>{
    const [items, setItems] = useState([]);
    useEffect(()=>{
        let unsubscribe = db.collection('items').orderBy('date').onSnapshot(snap =>{
            let fetched = snap.docs.map(doc =>{
                return {...doc.data(),id:doc.id}
            })
            setItems(fetched);
        })

        return unsubscribe;
    },[])

    return {items};
};
