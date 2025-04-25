export function convertAmazonImageUrl(url: string): string {
  // Extract the image ID from the old URL format
  const match = url.match(/\/images\/I\/([^\/]+)\.jpg/);
  if (!match) return url;

  const imageId = match[1];
  // Convert to the new format with _SY425_ size
  return `https://a.media-amazon.com/images/I/${imageId}._SY425_.jpg`;
} 