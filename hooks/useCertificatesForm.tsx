import { getCollectionRef, getUserRefByEmail, updateDocByRef } from '@/app/api/resources'
import { CertificateFormValues, CertificatesSchema } from '@/common/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { getDocs, query, where } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'

const useCertificatesForm = () => {
  const { data: session } = useSession();
  
  const form = useForm<CertificateFormValues>({
    resolver: zodResolver(CertificatesSchema),
    mode: 'onBlur'
  });

  const submit = form.handleSubmit(async (data: CertificateFormValues) => {
    const user = await getUserRefByEmail(session?.user?.email!);
    const collectionRef = getCollectionRef(user.type);

    const q = query(collectionRef, where('owner', '==', session?.user?.email));
    const querySnapshot = await getDocs(q);
    const documentID = querySnapshot.docs[0].id;

    const certificates = querySnapshot.docs[0].data().certifications;
    const updatedCertificates = certificates ? [...certificates, data] : [data];

    await updateDocByRef(user.type, documentID, { certifications: updatedCertificates });
    window.location.reload();
  })

  return {
    form,
    errors: form.formState.errors,
    isSubmitting: form.formState.isSubmitting,
    submit
  }
}

export default useCertificatesForm