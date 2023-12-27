import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import React from 'react';

type MultiselectTriggerProps = {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

const MultiselectTrigger = (props: MultiselectTriggerProps) => {
  return (
    <button {...props} className={cn('flex h-10 justify-between w-full items-center px-3 py-3 text-lg', props.className)}>
      <span>{props.children}</span>
      <ChevronDown size={24} />
    </button>
  );
};

export default MultiselectTrigger;
