// API client for backend communication

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

/**
 * Upload thumbnail to backend
 */
export async function uploadThumbnail(componentId: string, blob: Blob): Promise<void> {
  const formData = new FormData();
  formData.append('image', blob, `${componentId}.png`);
  formData.append('componentId', componentId);

  const response = await fetch(`${API_BASE_URL}/api/thumbnails`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Upload failed' }));
    throw new Error(error.error || 'Failed to upload thumbnail');
  }

  return response.json();
}

/**
 * Get thumbnail URL from backend
 */
export function getThumbnailUrl(componentId: string): string {
  // Add timestamp to prevent caching
  const timestamp = Date.now();
  return `${API_BASE_URL}/api/thumbnails/${componentId}?t=${timestamp}`;
}

/**
 * Check if thumbnail exists on backend
 */
export async function thumbnailExists(componentId: string): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/thumbnails/${componentId}`, {
      method: 'HEAD',
    });
    return response.ok;
  } catch (error) {
    console.error('Error checking thumbnail:', error);
    return false;
  }
}

/**
 * Delete thumbnail from backend
 */
export async function deleteThumbnail(componentId: string): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/api/thumbnails/${componentId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete thumbnail');
  }
}
