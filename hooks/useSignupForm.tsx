import { auth, db } from '@/firebase';
import { zodResolver } from '@hookform/resolvers/zod';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import useShowError from './useShowError';
import { addDoc, collection } from 'firebase/firestore';
import { SignUpFormValues, SignUpSchema } from '@/common/schema';

const useSignupForm = ({ type }: { type: string }) => {
  const { showError } = useShowError();
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false
    },
    mode: 'onBlur'
  });

  const addUserInformation = async (user: any, name: string) => {
    console.log('Adding user information')
    const data = {
      owner: user.email,
      type: type,
      name: name
    };

    const docRef = await addDoc(collection(db, type), data);
    console.log('Document written with ID: ', docRef.id);
    return docRef;
  };

  const submit = form.handleSubmit(async ({ email, password, name }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
        if (userCredential.user) {
          const result = await signIn('credentials', { email, password, redirect: false, callbackUrl: '/onboarding' });

          if (result?.error) {
            showError('Error', result.error);
          } else if (result?.url) {
            console.log('User signed in');
            // Add the user to the database
            const documentID = await addUserInformation(userCredential.user, name);
            window.location.href = `${result.url}?documentID=${documentID.id}&type=${type}&name=${name}`;
          }
        }
      });
    } catch (error: any) {
      showError('Error', error.customData._tokenResponse.error.message);
    }
  });

  return {
    form,
    submit,
    isSubmitting: form.formState.isSubmitting,
    isValid: form.formState.isValid,
    errors: form.formState.errors
  };
};

export default useSignupForm;
