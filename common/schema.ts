import { z, infer } from 'zod';

export const OnboardingSchema = z.object({
  image: z.string().min(1, {
    message: 'Please submit a photo'
  }),
  industry: z.string().min(1, {
    message: 'Industry is required'
  }),
  founded: z.string().min(1, {
    message: 'Founding Year is required'
  }),
  employees: z.string().min(1, {
    message: 'Number of employees is required'
  }),
  location: z.string().min(1, {
    message: 'Location is required'
  }),
  coords: z
    .object({
      lat: z.number().min(-90).max(90),
      lng: z.number().min(-180).max(180)
    })
    .refine((data) => data && data.lat && data.lng, {
      message: 'Please select a location'
    })
});

export type OnboardingFormValues = z.infer<typeof OnboardingSchema>;

export const SignUpSchema = z
  .object({
    name: z.string().min(3, {
      message: 'Name must be at least 3 characters long'
    }),
    email: z.string().email({
      message: 'Please enter a valid email address'
    }),
    password: z.string().min(8, {
      message: 'Password must be at least 8 characters long'
    }),
    confirmPassword: z.string().min(8, {
      message: 'Password must be at least 8 characters long'
    }),
    agreeTerms: z.boolean().refine((data) => data === true, {
      message: 'Please agree to the terms and conditions'
    })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword']
  });

export type SignUpFormValues = z.infer<typeof SignUpSchema>;