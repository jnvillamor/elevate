import { Startup } from '@/common';
import { db } from '@/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';

const useProfile = () => {
  const { data } = useSession({
    required: true,
    onUnauthenticated() {
      window.location.href = '/login';
    }
  });

  const [entity, setEntity] = React.useState<Startup>();
  const [isFetching, setIsFetching] = React.useState(false);

  const getEntityType = async () => {
    const usersCollection = collection(db, 'users');
    const q = query(usersCollection, where('email', '==', data?.user?.email));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs[0].data()['type'];
  };

  useEffect(() => {
    const fetchEntity = async () => {
      setIsFetching(true);
      try {
        const type = await getEntityType();
        const entityCollection = collection(db, type);

        const q = query(entityCollection, where('owner', '==', data?.user?.email));
        const querySnapshot = await getDocs(q);

        const entity = querySnapshot.docs[0].data() as Startup;
        setEntity(entity);
        setIsFetching(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEntity();
  }, []);

  return {
    entity,
    isFetching
  };
};

export default useProfile;
