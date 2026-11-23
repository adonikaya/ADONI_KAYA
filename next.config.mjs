/** @type {import('next').NextConfig} */
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: repositoryName ? `/${repositoryName}` : '',
  assetPrefix: repositoryName ? `/${repositoryName}/` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: repositoryName ? `/${repositoryName}` : '',
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

