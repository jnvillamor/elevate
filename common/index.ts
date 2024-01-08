type Awards = {
  title: string;
  year_awarded: string;
  description: string;
};

type Certifications = {
  title: string;
  year_awarded: string;
  description: string;
};

export type Startup = {
  id: number;
  type: 'Startup' | 'Enabler';
  name: string;
  industry: string;
  location: string;
  coords: {
    lat: number;
    lng: number;
  };
  founded: string;
  image: string;
  about?: string;
  employees: string;
  contacts?: {
    website?: string;
    facebook?: string;
    linkedin?: string;
    instagram?: string;
  };
  awards?: Awards[];
  certifications?: Certifications[];
};

export type FooterLink = {
  name: string;
  links: Links[];
};

export type Links = {
  name: string;
  href: string;
};

export type Filters = {
  sort_by: 'etl' | 'lte';
  categories: string[];
  data_type: 'all' | 'startup' | 'enabler';
};