import { Skeleton } from '@/components/ui/skeleton';

const ProfileSkeleton = () => {
  return (
    <div className='bg-neutrals-932 text-neutrals-200'>
      <div className='max-w-screen-2xl w-full m-auto pt-12 pb-32'>
        {/* <Link href='/ecosystem-mapping' className='flex gap-2 text-neutrals-300 mb-16'>
          <FaAngleLeft size={24} />
          <span>Mapping / Startups</span>
        </Link> */}

        <div className='flex flex-col items-center'>
          <Skeleton className='w-72 aspect-square' />
          <Skeleton className='mt-6 mb-3' />
          <Skeleton className='rounded-full px-4 py-2' />
        </div>
        <div className='mb-6 mt-14 block lg:flex justify-between gap-5'>
          <div className='lg:w-1/3 w-full flex flex-col gap-6'>
            <div className='p-9 bg-neutrals-916 rounded-2xl'>
              <Skeleton className='w-full h-1/3' />
              <Skeleton className='w-full aspect-square mt-6' />
            </div>
            <Skeleton className='p-9 h-40 rounded-2xl' />
          </div>

          <div className='lg:w-2/3 w-full flex flex-col gap-6'>
            <Skeleton className='h-40 p-6 rounded-3xl' />
            <Skeleton className='h-40 p-6 rounded-3xl' />
            <Skeleton className='h-40 p-6 rounded-3xl' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSkeleton;
