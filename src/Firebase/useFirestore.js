// useFirestore.js
import { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, query, orderBy, onSnapshot, addDoc } from 'firebase/firestore';

export const useFirestore = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'items'));
    const unsubscribe = onSnapshot(q, (snap) => {
        const fetched = snap.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setItems(fetched);
    });

    // Cleanup function to unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);

    const addItem = async (item,amount)=>{
        await addDoc(collection(db, 'items'),{
            ...item,
            amount,
        })
    }

  return { items, addItem };
};
