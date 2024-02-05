// useFirestore.js
import { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, query, doc, onSnapshot, addDoc, deleteDoc, orderBy } from 'firebase/firestore';

export const useFirestore = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'items'),orderBy('date'));
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
    };

    const deleteItem = async (id)=>{
      await deleteDoc(doc(db, 'items', id))
    }

  return { items, addItem, deleteItem };
};
