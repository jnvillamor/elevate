import { Filters } from '@/common';
import useGetData from '@/hooks/useGetData';
import usePanelControl from '@/hooks/usePanelControl';
import { cn } from '@/lib/utils';
import React from 'react';
import MultiselectTrigger from './MultiselectTrigger';
import MultiselectValue from './MultiselectValue';
import MultiselectItems from './MultiselectItems';

type MultiselectProps = {
  values?: string[];
  options: string[];
  onChange?: React.Dispatch<React.SetStateAction<string[]>>;
};

const Multiselect = ({ options, values, onChange }: MultiselectProps) => {
  const { openPanel, setOpenPanel } = usePanelControl();

  const handleChange = (checked: boolean, value: string) => {
    if (checked) {
      onChange?.((prev) => [...prev, value]);
    } else {
      onChange?.((prev) => prev.filter((item) => item !== value));
    }
  };

  return (
    <fieldset className='bg-neutrals-916 border border-neutrals-300 h-10 rounded-md relative'>
      <MultiselectTrigger id='multi__select__button' onClick={() => setOpenPanel(!openPanel)} className='px-12'>
        <MultiselectValue placeholder='Industry' />
      </MultiselectTrigger>
      <div
        id='multi__select__panel'
        className={cn(
          'absolute bg-neutrals-916 w-full border border-neutrals-300 mt-1 rounded-md max-h-96 flex flex-col p-1',
          openPanel && 'animate-in fade-in-0 slide-in-from-top-2 zoom-in-95',
          !openPanel && 'animate-out hidden fade-out-0 slide-out-to-top-2 zoom-out-95'
        )}>
        {options.map((item) => (
          <MultiselectItems key={item} value={item} checked={values ? values?.includes(item) : false} onChange={handleChange}>
            {item}
          </MultiselectItems>
        ))}
      </div>
    </fieldset>
  );
};

export default Multiselect;
