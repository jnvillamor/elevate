import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { storage } from '@/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useSession } from 'next-auth/react';

const usePhotoForm = () => {
  const { data } = useSession();
  const { setValue, getValues } = useFormContext();
  const [prevFile, setPrevFile] = React.useState<File>();
  const [isFetching, setIsFetching] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');
  const [fileUrl, setFileUrl] = React.useState<string>('');
  const fileUploadRef = React.useRef<HTMLInputElement>(null);

  const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    // check if there is a file
    if (!e.target.files?.length) return;
    const file = e.target.files[0];

    if(file === prevFile) return;
    setPrevFile(file);

    // check if the user is authenticated
    const user = data?.user;
    if (!user) return;

    const userUID = user.email;
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
      const file = getValues('image');
      if (file) {
        setFileUrl(file);
      }
    };

    initializeValue();
  }, [getValues]);

  return { fileUrl, fileUploadRef, error, isFetching,  uploadFile };
};

export default usePhotoForm;
