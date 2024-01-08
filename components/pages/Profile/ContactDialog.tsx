import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from '@/components/ui/dialog';
import React from 'react';
import { TiPencil } from 'react-icons/ti';
import ContactForm from './ContactForm';

const ContactDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant='ghost'>
          <TiPencil size={24} />
        </Button>
      </DialogTrigger>
      <DialogContent className='bg-neutrals-932 p-12'>
        <DialogHeader className='text-3xl'>Contacts</DialogHeader>
        <ContactForm />
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
