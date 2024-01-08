import { Startup } from "@/common";
import { db } from "@/firebase"
import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore"

export const getDocRefById = async (collection: string, id: string) => {
  const docRef = doc(db, `${collection}/${id}`);

  return docRef;
}

export const getCollectionRef = (collectionName: string) => {
  const collectionRef = collection(db, collectionName)

  return collectionRef;
}

export const getUserRefByEmail = async (email: string) => {
  const userCollection = getCollectionRef('users');

  const q = query(userCollection, where('email', '==', email));
  const querySnapshot = await getDocs(q);

  const result = querySnapshot.docs[0].data();
  return Promise.resolve(result);
}

export const getDocRefByPath = (collection: string, path: string) => {
  const docRef = doc(db, `${collection}/${path}`);

  return docRef;
}

export const updateDocByRef = async (collection: string, id: string, data: any) => {
  const docRef = await getDocRefById(collection, id);
  await updateDoc(docRef, data);
}

export const getAllDocs = async (collection: string) => {
  const collectionRef = getCollectionRef(collection);
  const querySnapshot = await getDocs(collectionRef);

  const result = querySnapshot.docs.map(doc => {
    const data = doc.data();
    const id = doc.id;
    return { id, ...data } as Startup;
  });

  return result;
}