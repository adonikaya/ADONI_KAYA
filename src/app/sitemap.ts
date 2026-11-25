import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://adonikaya.github.io/ADONI_KAYA';

  return [
    {
      url: `${baseUrl}/`,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/gallery/`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/quotes/`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/shradhanjali-maker/`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/besna-card-maker/`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about/`,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy/`,
      priority: 0.4,
    },
  ];
}
