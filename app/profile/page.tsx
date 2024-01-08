'use client';

import Map from '@/components/pages/EcosystemMapping/MainContent/Map/Map';
import Awards from '@/components/pages/EntityDetails/Awards/Awards';
import Certifications from '@/components/pages/EntityDetails/Certifications/Certifications';
import Contacts from '@/components/pages/EntityDetails/Contacts/Contacts';
import Details from '@/components/pages/EntityDetails/Details/Details';
import useProfile from '@/hooks/useProfile';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import ProfileSkeleton from './ProfileSkeleton';
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { TiPencil } from 'react-icons/ti';
import AboutForm from '@/components/pages/Profile/AboutForm';
import CertificatesAwardsForm from '@/components/pages/Profile/CertificatesAwardsForm';

const Profile = () => {
  const { entity, isFetching } = useProfile();

  const [openForm, setOpenForm] = React.useState<'about' | 'awards' | 'certificates' | null>(null);

  if (isFetching) return <ProfileSkeleton />;
  if (!entity) return null;

  const details = {
    industry: entity.industry,
    founded: entity.founded,
    employees: entity.employees,
    location: entity.location
  };

  const mapEntry = {
    name: entity.name,
    type: entity.type,
    coords: entity.coords
  };

  return (
    <div className='bg-neutrals-932 text-neutrals-200'>
      <div className='max-w-screen-2xl w-full m-auto pt-12 pb-32'>
        <Link href='/ecosystem-mapping' className='flex gap-2 text-neutrals-300 mb-16'>
          <FaAngleLeft size={24} />
          <span>Mapping / Startups</span>
        </Link>
        <div className='flex flex-col items-center'>
          <Image src={entity.image} alt='Logo' width={160} height={160} className='w-72' />
          <h1 className='text-4xl mt-6 mb-3 text-neutrals-50'>{entity.name}</h1>
          <div className='rounded-full px-4 py-2 bg-primary-600'>{entity.type}</div>
        </div>
        <div className='mb-6 mt-14 block lg:flex justify-between gap-5'>
          <div className='lg:w-1/3 w-full flex flex-col gap-6'>
            <div className='p-9 bg-neutrals-916 rounded-2xl'>
              <Details startup={details} page='profile' />
              <div className='w-full aspect-square mt-6'>
                <Map startup={mapEntry} />
              </div>
            </div>
            <div className='p-9 bg-neutrals-916 rounded-2xl'>
              <Contacts contacts={entity.contacts} page='profile' />
            </div>
          </div>

          <div className='lg:w-2/3 w-full flex flex-col gap-6'>
            <div className='bg-neutrals-916 w-full p-6 rounded-3xl flex justify-between'>
              <h1 className='text-3xl text-neutrals-50'>Add Section</h1>
              <Dialog onOpenChange={() => setOpenForm(null)}>
                <DialogTrigger>
                  <Button variant='ghost'>
                    <TiPencil size={24} />
                  </Button>
                </DialogTrigger>
                <DialogContent className='bg-neutrals-932'>
                  <DialogHeader className='text-3xl mb-6'>Section</DialogHeader>
                  {openForm === null && (
                    <>
                      <Button
                        variant='ghost'
                        onClick={() => setOpenForm('about')}
                        className='hover:bg-neutrals-916 hover:text-neutrals-50 px-12 py-3 w-full h-full text-xl text-neutrals-50 flex justify-start'>
                        About
                      </Button>
                      <Button
                        variant='ghost'
                        onClick={() => setOpenForm('certificates')}
                        className='hover:bg-neutrals-916 hover:text-neutrals-50 px-12 py-3 w-full h-full text-xl text-neutrals-50 flex justify-start'>
                        Certificates
                      </Button>
                      <Button
                        variant='ghost'
                        onClick={() => setOpenForm('awards')}
                        className='hover:bg-neutrals-916 hover:text-neutrals-50 px-12 py-3 w-full h-full text-xl text-neutrals-50 flex justify-start'>
                        Awards
                      </Button>
                    </>
                  )}
                  {openForm === 'about' && <AboutForm />}
                  {openForm === 'certificates' && <CertificatesAwardsForm type='certifications' />}
                  {openForm === 'awards' && <CertificatesAwardsForm type='awards' />}
                </DialogContent>
              </Dialog>
            </div>

            {entity.about && (
              <div className='bg-neutrals-916 p-6 rounded-3xl'>
                <h1 className='text-3xl text-neutrals-50 mb-9'>About</h1>
                <div className='text-xl line-clamp-[10] mb-6'>{entity.about}</div>
                <div className='flex'>
                  <div className='rounded-full px-4 py-2 bg-neutrals-700'>{entity.industry}</div>
                </div>
              </div>
            )}
            {entity.awards && entity.awards.length > 0 && (
              <div className='bg-neutrals-916 p-6 rounded-3xl'>
                <Awards awards={entity.awards} />
              </div>
            )}
            {entity.certifications && entity.certifications.length > 0 && (
              <div className='bg-neutrals-916 p-6 rounded-3xl'>
                <Certifications certifications={entity.certifications} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
