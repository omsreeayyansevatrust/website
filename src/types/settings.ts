export interface HeroSettings {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
}

export interface AboutSettings {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface ContactSettings {
  phone: string;
  alternatePhone: string;
  email: string;
  address: string;
  googleMap: string;
}

export interface DonationSettings {
  accountName: string;
  bankName: string;
  accountNumber: string;
  ifsc: string;
  branch: string;
  upiId: string;
  qrImage: string;
}

export interface FooterSettings {
  copyright: string;
  facebook: string;
  instagram: string;
  youtube: string;
  twitter: string;
  linkedin: string;
}

export interface SeoSettings {
  siteTitle: string;
  metaDescription: string;
  keywords: string;
  ogImage: string;
}

export interface WebsiteSettings {
  hero: HeroSettings;
  about: AboutSettings;
  contact: ContactSettings;
  donation: DonationSettings;
  footer: FooterSettings;
  seo: SeoSettings;
}