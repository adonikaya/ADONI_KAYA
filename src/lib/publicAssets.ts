export function getPublicAssetUrl(
  assetPath: string,
  basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
): string {
  const normalizedBasePath = basePath.replace(/\/+$/, '');
  const normalizedAssetPath = assetPath.startsWith('/') ? assetPath : `/${assetPath}`;
  return `${normalizedBasePath}${normalizedAssetPath}`;
}