import { getCollectionRef, getUserRefByEmail, updateDocByRef } from '@/app/api/resources';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { getDocs, query, where } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import React from 'react';
import { useForm } from 'react-hook-form';

const AboutForm = () => {
  const { data: session } = useSession();

  const form = useForm({
    defaultValues: {
      about: ''
    }
  });

  const submit = form.handleSubmit(async (data) => {
    if (!session?.user) return;

    const user = await getUserRefByEmail(session?.user?.email!);
    const collectionRef = getCollectionRef(user.type);

    const q = query(collectionRef, where('owner', '==', session.user.email));
    const querySnapshot = await getDocs(q);
    const documentID = querySnapshot.docs[0].id;

    await updateDocByRef(user.type, documentID, data);
    window.location.reload();
  });

  return (
    <Form {...form}>
      <form onSubmit={submit}>
        <p>About</p>
        <Textarea
          {...form.register('about')}
          maxLength={1500}
          rows={8}
          className='w-full bg-neutrals-916 text-neutrals-50 border-neutrals-300 hover:border-neutrals-300 placeholder:text-neutral-50 focus-visible:ring-0 mt-6'
        />
        <div className='flex justify-end'>
          <Button className='mt-6 px-6 py-3 rounded-md bg-primary-600 text-neutrals-5 text-xl' disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? 'Saving...' : 'Save'}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AboutForm;
