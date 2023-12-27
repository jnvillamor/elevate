export type Startup = {
  id: number;
  type: 'startup' | 'investor';
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
};