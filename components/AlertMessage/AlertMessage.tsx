'use client';

import { useEffect, useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

type AlertMessageProps = {
  message: string;
  onClose: () => void;
};

const AlertMessage = ({ message, onClose } : AlertMessageProps) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
    }, 3000);
    
    return () => clearTimeout(timeout);
  }, [onClose])

  

  return (
    <div className={cn('absolute top-10 w-1/2 transition-all duration-300 ease-in-out',
      show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-20px]'
    )}>
      <Alert variant='destructive'>
        <AlertCircle className='h-4 w-4' />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription >{message}</AlertDescription>
      </Alert>
    </div>
  );
};

export default AlertMessage;
