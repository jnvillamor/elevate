import React from 'react';
import { Autocomplete, LoadScript } from '@react-google-maps/api';
import { FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useFormContext } from 'react-hook-form';

const InformationForm = () => {
  const { register, getValues, setValue, formState } = useFormContext();
  const [selectValue, setSelectValue] = React.useState<string>(getValues('industry'));
  const [foundingYear, setFoundingYear] = React.useState<string>(getValues('founded'));
  const [autocomplete, setAutocomplete] = React.useState<any>(null);
  const OPTIONS = ['Transportation', 'Food Industry', 'Consulting', 'Food Service', 'Agriculture'];

  const handleChage = (field: string, value: string) => {
    setValue(field, value);
    if (field === 'industry') setSelectValue(value);
    if (field === 'founded') setFoundingYear(value);
  };

  const yearData = () => {
    const currentYear = new Date().getFullYear();
    const years = [];

    for (let i = 0; i < 100; i++) {
      years.push((currentYear - i).toString());
    }

    return years;
  };

  const handlePlaceChanged = () => {
    const place = autocomplete.getPlace();
    const lat = place.geometry?.location.lat();
    const lng = place.geometry?.location.lng();
    setValue('coords', { lat, lng });
  }

  return (
    <>
      <div className='w-full p-6 rounded-md my-24'>
        <FormItem className='w-full mb-12'>
          <FormLabel className='text-lg mb-3'>Industry</FormLabel>
          <Select value={selectValue} onValueChange={(value) => handleChage('industry', value)}>
            <SelectTrigger className='w-full focus-visible:ring-0 focus:outline-none border-neutrals-300 bg-neutrals-916 px-12 py-3 text-neutral-50 text-lg font-normal'>
              <SelectValue placeholder='Select Industry ' />
            </SelectTrigger>
            <SelectContent className='focus-visible:ring-0 bg-neturals-916 text-neutral-50'>
              <SelectGroup className='focus-visible:ring-0 bg-neutrals-916'>
                {OPTIONS.map((option, i) => (
                  <SelectItem
                    key={i}
                    value={option}
                    className='text-lg hover:bg-neutrals-700 hover:text-neutrals-50 focus:bg-neutrals-700 focus:text-neutrals-50'>
                    {option}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {formState.errors.industry && <p className='text-negative-600'>{formState.errors.industry?.message as string}</p>}
        </FormItem>

        <FormItem className='w-full mb-12'>
          <FormLabel className='text-lg mb-3'>Founded Year</FormLabel>
          <Select value={foundingYear} onValueChange={(value) => handleChage('founded', value)}>
            <SelectTrigger className='w-full focus-visible:ring-0 focus:outline-none border-neutrals-300 bg-neutrals-916 px-12 py-3 text-neutral-50 text-lg font-normal'>
              <SelectValue placeholder='Select Founding Year ' />
            </SelectTrigger>
            <SelectContent className='focus-visible:ring-0 bg-neturals-916 text-neutral-50'>
              <SelectGroup className='focus-visible:ring-0 bg-neutrals-916'>
                {yearData().map((option, i) => (
                  <SelectItem
                    key={i}
                    value={option}
                    className='text-lg hover:bg-neutrals-700 hover:text-neutrals-50 focus:bg-neutrals-700 focus:text-neutrals-50'>
                    {option}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {formState.errors.founded && <p className='text-negative-600'>{formState.errors.founded?.message as string}</p>}
        </FormItem>

        <FormItem className='w-full mb-12'>
          <FormLabel className='text-lg mb-3'>Number of Employees</FormLabel>
          <Input
            type='number'
            id='employees'
            className='placeholder:text-neutrals-600 focus:border-primary-600 focus-visible:ring-0 bg-neutrals-916 px-12 py-3 border-neutrals-300 text-lg text-neutrals-50'
            {...register('employees')}
          />
          {formState.errors.employees && <p className='text-negative-600'>{formState.errors.employees?.message as string}</p>}
        </FormItem>

        <FormItem className='w-full mb-12'>
          <FormLabel className='text-lg mb-3'>Address</FormLabel>
          <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string} libraries={['places']}>
            <Autocomplete restrictions={{ country: "PH"}} onLoad={(autocomplete) => setAutocomplete(autocomplete)} onPlaceChanged={handlePlaceChanged} >
              <Input
                type='string'
                id='location'
                placeholder='Enter your address'
                className='placeholder:text-neutrals-600 focus:border-primary-600 focus-visible:ring-0 bg-neutrals-916 px-12 py-3 border-neutrals-300 text-lg text-neutrals-50'
                {...register('location')}
              />
            </Autocomplete>
          </LoadScript>
          {formState.errors.location && <p className='text-negative-600'>{formState.errors.location?.message as string}</p>}
        </FormItem>
      </div>
    </>
  );
};

export default InformationForm;
