import { getCollectionRef, getDocRefById, getUserRefByEmail, updateDocByRef } from '@/app/api/resources';
import { AddContactFormValues, AddContactSchema } from '@/common/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { doc, getDocs, query, where } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const useAddContactForm = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      return {
        redirect: {
          destination: '/auth/signin',
          permanent: false
        }
      };
    }
  });

  if (!session?.user) {
    window.location.href = '/login';
  }

  const form = useForm<AddContactFormValues>({
    resolver: zodResolver(AddContactSchema),
    mode: 'onBlur'
  });

  const submit = form.handleSubmit(async (data) => {
    try {
      const user = await getUserRefByEmail(session?.user?.email!);
      const collection = getCollectionRef(user.type);

      const q = query(collection, where('owner', '==', session?.user?.email));
      const querySnapshot = await getDocs(q);
      const documentID = querySnapshot.docs[0].id;

      const updatedData = {
        contacts: {
          ...data
        }
      }
      
      await updateDocByRef(user.type, documentID, updatedData);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  });

  type ContactType = 'website' | 'facebook' | 'linkedin' | 'instagram';

  const contactType = ['website', 'facebook', 'linkedin', 'instagram'] as ContactType[];

  useEffect(() => {
    const initialize = async () => {
      try { 
        const user = await getUserRefByEmail(session?.user?.email!);
        const collection = getCollectionRef(user.type);

        const q = query(collection, where('owner', '==', session?.user?.email));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs[0].data();

        form.setValue('facebook', data.contacts.facebook);
        form.setValue('website', data.contacts.website);
        form.setValue('linkedin', data.contacts.linkedin);
        form.setValue('instagram', data.contacts.instagram);
      } 
      catch(error) { 
        console.log(error)
      }
    }

    initialize();
  }, [])

  return {
    form,
    contactType,
    errors: form.formState.errors,
    isSubmitting: form.formState.isSubmitting,
    submit
  };
};

export default useAddContactForm;
