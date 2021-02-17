const title = 'Douglas Silva - Software Developer';
const description = 'Software Engineer who loves to teach and create innovative solutions.';
const url = 'http://iamdouglas.dev';

export const configSEO = {
  title,
  description,
  canonical: url,
  openGraph: {
    url: url,
    type: 'website',
    title,
    locale: 'en-CA',
    description,
    images: [
      {
        url: 'https://i.ibb.co/K255GW4/card.jpg',
        alt: title,
        width: 2460,
        height: 1230,
      },
    ],
  },
  twitter: {
    site: '@dougrass_silva',
    handle: '@dougrass_silva',
    cardType: 'summary_large_image',
  },
};
