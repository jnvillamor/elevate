import { getCollectionRef, getUserRefByEmail, updateDocByRef } from '@/app/api/resources';
import { CertificatesAwardsFormValues, CertificatesAwardsSchema } from '@/common/schema';

import { zodResolver } from '@hookform/resolvers/zod';
import { getDocs, query, where } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';

const useCertificatesAwardsForm = ({ type }: {type: 'certifications' | 'awards'}) => {
  const { data: session } = useSession();

  const form = useForm<CertificatesAwardsFormValues>({
    resolver: zodResolver(CertificatesAwardsSchema),
    mode: 'onBlur'
  });

  const submit = form.handleSubmit(async (data: CertificatesAwardsFormValues) => {
    const user = await getUserRefByEmail(session?.user?.email!);
    const collectionRef = getCollectionRef(user.type);

    const q = query(collectionRef, where('owner', '==', session?.user?.email));
    const querySnapshot = await getDocs(q);
    const documentID = querySnapshot.docs[0].id;

    const currentData = querySnapshot.docs[0].data()[type];
    const updatedData = currentData ? [...currentData, data] : [data];

    await updateDocByRef(user.type, documentID, { [type]: updatedData });
    window.location.reload();
  });

  return {
    form,
    errors: form.formState.errors,
    isSubmitting: form.formState.isSubmitting,
    submit
  };
};

export default useCertificatesAwardsForm;
