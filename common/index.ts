export type Startup = {
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