// useFirestore.js
import { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, query, doc, onSnapshot, addDoc, deleteDoc, orderBy } from 'firebase/firestore';

export const useFirestore = () => {
  const [items, setItems] = useState([]);
  const [budget, setBudget] = useState(0);

  useEffect(() => {
    const q = query(collection(db, 'items'),orderBy('date'));
    const unsubscribe = onSnapshot(q, (snap) => {
        const fetched = snap.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        const sum = fetched.reduce((acc, item) => acc + item.amount, 0);
      setItems(fetched);
      setBudget(sum);
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

  return { items, addItem, deleteItem, budget };
};
