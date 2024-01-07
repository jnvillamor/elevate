import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { auth, storage } from '@/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const usePhotoForm = () => {
  const { setValue, getValues } = useFormContext();
  const [isFetching, setIsFetching] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');
  const [fileUrl, setFileUrl] = React.useState<string>('');
  const fileUploadRef = React.useRef<HTMLInputElement>(null);

  const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('running');
    // check if there is a file
    if (!e.target.files) return;
    const file = e.target.files[0];

    // check if the user is authenticated
    const user = auth.currentUser;
    if (!user) return;

    const userUID = user.uid;
    const imagRef = ref(storage, `logos/${userUID}`);

    // Upload the file,
    setIsFetching(true);
    uploadBytes(imagRef, file)
      .then(async (image) => {
        const url = await getDownloadURL(image.ref);
        setValue('image', url);
        setFileUrl(url);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  useEffect(() => {
    const initializeValue = () => {
      const file = getValues('file');
      if (file) {
        const fileUrl = URL.createObjectURL(file);
        setFileUrl(fileUrl);
      }
    };

    initializeValue();
  }, [getValues]);

  return { fileUrl, fileUploadRef, error, isFetching,  uploadFile };
};

export default usePhotoForm;
