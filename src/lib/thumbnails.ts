// Utilities for managing component thumbnails using IndexedDB

import { saveImage, getImage, deleteImage, hasImage, blobToObjectURL } from './imageStorage';

/**
 * Set thumbnail for a component from canvas
 */
export async function setThumbnailFromCanvas(componentId: string, canvas: HTMLCanvasElement): Promise<void> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(async (blob) => {
      if (!blob) {
        reject(new Error('Failed to create blob from canvas'));
        return;
      }

      try {
        await saveImage(componentId, blob);

        // Dispatch event so components can react to thumbnail changes
        window.dispatchEvent(new CustomEvent('thumbnailChanged', { detail: { componentId } }));

        resolve();
      } catch (error) {
        reject(error);
      }
    }, 'image/png', 0.95);
  });
}

/**
 * Get thumbnail URL for a component
 * Returns object URL that should be revoked when no longer needed
 */
export async function getThumbnailURL(componentId: string): Promise<string | null> {
  try {
    const blob = await getImage(componentId);
    if (!blob) return null;

    return blobToObjectURL(blob);
  } catch (error) {
    console.error('Error getting thumbnail URL:', error);
    return null;
  }
}

/**
 * Remove thumbnail for a component
 */
export async function removeThumbnail(componentId: string): Promise<void> {
  try {
    await deleteImage(componentId);

    // Dispatch event so components can react to thumbnail changes
    window.dispatchEvent(new CustomEvent('thumbnailChanged', { detail: { componentId } }));
  } catch (error) {
    console.error('Error removing thumbnail:', error);
  }
}

/**
 * Check if component has a thumbnail
 */
export async function hasThumbnail(componentId: string): Promise<boolean> {
  return hasImage(componentId);
}

/**
 * Clear all thumbnails
 */
export async function clearAllThumbnails(): Promise<void> {
  try {
    const { clearAllImages } = await import('./imageStorage');
    await clearAllImages();
    window.dispatchEvent(new Event('thumbnailChanged'));
  } catch (error) {
    console.error('Error clearing thumbnails:', error);
  }
}
