import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import React, { useEffect } from 'react';

const Multiselect = () => {
  const [openPanel, setOpenPanel] = React.useState(false);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const button = document.getElementById('multi__select__button');
      const panel = document.getElementById('multi__select__panel');

      if (!button?.contains(e.target as Node) && !panel?.contains(e.target as Node)) {
        setOpenPanel(false);
      }
    };

    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <fieldset className='bg-neutrals-916 border border-neutrals-300 h-10 rounded-md relative'>
      <button
        id='multi__select__button'
        onClick={() => setOpenPanel(!openPanel)}
        className='flex h-10 justify-between items-center w-full px-12 py-3 text-lg'>
        <span>Industry</span>
        <ChevronDown size={24} />
      </button>
      <div
        id='multi__select__panel'
        className={cn(
          'absolute bg-neutrals-916 w-full border border-neutrals-300 mt-1 rounded-md max-h-96 flex flex-col p-1',
          openPanel && 'animate-in fade-in-0 slide-in-from-top-2 zoom-in-95',
          !openPanel && 'animate-out hidden fade-out-0 slide-out-to-top-2 zoom-out-95'
        )}>
        <div className='w-full py-3 px-12 rounded-md hover:bg-neutrals-700 hover:text-neutrals-50'>
          <input type='checkbox' id='1' className='hidden focus:outline-none multi__select__input' />
          <label htmlFor='1' className='flex items-center gap-2 w-full'>
            <div className='bg-transparent border rounded border-neutrals-300 w-6 h-6 flex items-center justify-center hover:border-accent-foreground'>
              <svg className='fill-current hidden w-4 h-4 text-green-500 pointer-events-none' viewBox='0 0 20 20'>
                <path d='M0 11l2-2 5 5L18 3l2 2L7 18z' />
              </svg>
            </div>
            <span>Agriculture</span>
          </label>
        </div>
        <div className='w-full py-3 px-12 rounded-md hover:bg-neutrals-700 hover:text-neutrals-50'>
          <input type='checkbox' id='2' className='hidden multi__select__input' />
          <label htmlFor='2' className='flex items-center gap-2 w-full'>
            <div className='bg-transparent border rounded border-neutrals-300 w-6 h-6 flex items-center justify-center hover:border-accent-foreground'>
              <svg className='fill-current hidden w-4 h-4 text-green-500 pointer-events-none' viewBox='0 0 20 20'>
                <path d='M0 11l2-2 5 5L18 3l2 2L7 18z' />
              </svg>
            </div>
            <span>Food Services</span>
          </label>
        </div>
      </div>
    </fieldset>
  );
};

export default Multiselect;
