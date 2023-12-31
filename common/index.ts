export type Startup = {
  id: number;
  type: 'Startup' | 'Enabler';
  name: string;
  industry: string;
  location: string;
  founded: string;
  image: string;
}

export type FooterLink = {
  name: string;
  links: Links[];
}

export type Links = {
  name: string;
  href: string;
}

export type Filters = {
  sort_by: 'etl' | 'lte';
  categories: string[];
  data_type: 'all' | 'startup' | 'enabler';
};