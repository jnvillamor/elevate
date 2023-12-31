import React from 'react';

type MultiselectItemsProps = {
  value: any;
  checked: boolean;
  children?: React.ReactNode;
  onChange?: (checked: boolean, value: string) => void;
};

const MultiselectItems = ({ value, checked, onChange, children }: MultiselectItemsProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked, value);
  }

  return (
    <div className='w-full py-3 px-12 rounded-md hover:bg-neutrals-700 hover:text-neutrals-50'>
      <input type='checkbox' id={value} defaultChecked={checked} onChange={handleChange} className='hidden focus:outline-none multi__select__input' />
      <label htmlFor={value} className='flex items-center gap-2 w-full'>
        <div className='bg-transparent border rounded border-neutrals-300 w-6 h-6 flex items-center justify-center hover:border-accent-foreground'>
          <svg className='fill-current hidden w-4 h-4 pointer-events-none' viewBox='0 0 20 20'>
            <path d='M0 11l2-2 5 5L18 3l2 2L7 18z' />
          </svg>
        </div>
        <span>{children}</span>
      </label>
    </div>
  );
};

export default MultiselectItems;
