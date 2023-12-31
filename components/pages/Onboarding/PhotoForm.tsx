import { Button } from '@/components/ui/button';
import { FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import usePhotoForm from '@/hooks/usePhotoForm';
import Image from 'next/image';
import { useFormContext } from 'react-hook-form';
import { IoCameraOutline } from 'react-icons/io5';

const PhotoForm = () => {
  const { formState } = useFormContext();
  const { fileUrl, fileUploadRef, isFetching, uploadFile } = usePhotoForm();

  return (
    <>
      <div className='w-3/4 m-auto p-6 bg-neutrals-932 rounded-md my-24'>
        {/* Avatar */}
        <div className='w-full mb-6'>
          <div className='bg-neutrals-916 w-full aspect-square'>
            {fileUrl && <Image src={fileUrl} alt='Avatar' height={200} width={200} className='w-full h-full' />}
            {isFetching && <div className='w-full h-full flex justify-center items-center'>Loading...</div>}
          </div>
          {formState.errors.image && <FormMessage className='text-negative-600'>{formState.errors.image?.message as string}</FormMessage>}
        </div>

        {/* Upload */}
        <Input type='file' accept='image/*' className='hidden' ref={fileUploadRef} onChange={uploadFile} />
        <Button type='button' className='w-full rounded-sm bg-primary-600 text-neutrals-50' onClick={() => fileUploadRef.current?.click()}>
          <IoCameraOutline size={24} className='mr-2' />
          <span className='text-xl'>Upload a Photo</span>
        </Button>
      </div>
    </>
  );
};

export default PhotoForm;
