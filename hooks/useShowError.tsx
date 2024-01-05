import { toast } from '@/components/ui/use-toast';

const useShowError = () => {
  const showError = (title: string, description: string) => {
    toast({
      variant: 'destructive',
      title: title,
      description: description,
      duration: 5000
    });
  };

  return {
    showError
  };
};

export default useShowError;
