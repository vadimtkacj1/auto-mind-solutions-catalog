// IndexedDB storage for component thumbnail images

const DB_NAME = 'ComponentThumbnailsDB';
const DB_VERSION = 1;
const STORE_NAME = 'thumbnails';

/**
 * Initialize IndexedDB
 */
function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('IndexedDB not available'));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;

      // Create object store if it doesn't exist
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };
  });
}

/**
 * Save image blob to IndexedDB
 */
export async function saveImage(componentId: string, blob: Blob): Promise<void> {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);

    const request = store.put({
      id: componentId,
      blob: blob,
      timestamp: Date.now(),
    });

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

/**
 * Get image blob from IndexedDB
 */
export async function getImage(componentId: string): Promise<Blob | null> {
  try {
    const db = await openDB();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(componentId);

      request.onsuccess = () => {
        const result = request.result;
        resolve(result ? result.blob : null);
      };
      request.onerror = () => reject(request.error);
    });
  } catch (error) {
    console.error('Error getting image:', error);
    return null;
  }
}

/**
 * Delete image from IndexedDB
 */
export async function deleteImage(componentId: string): Promise<void> {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.delete(componentId);

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

/**
 * Check if image exists for component
 */
export async function hasImage(componentId: string): Promise<boolean> {
  try {
    const blob = await getImage(componentId);
    return blob !== null;
  } catch (error) {
    console.error('Error checking image:', error);
    return false;
  }
}

/**
 * Get all stored component IDs
 */
export async function getAllImageIds(): Promise<string[]> {
  try {
    const db = await openDB();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.getAllKeys();

      request.onsuccess = () => resolve(request.result as string[]);
      request.onerror = () => reject(request.error);
    });
  } catch (error) {
    console.error('Error getting all image IDs:', error);
    return [];
  }
}

/**
 * Clear all images
 */
export async function clearAllImages(): Promise<void> {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.clear();

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

/**
 * Convert Blob to Object URL (for displaying in img src)
 */
export function blobToObjectURL(blob: Blob): string {
  return URL.createObjectURL(blob);
}

/**
 * Revoke Object URL to free memory
 */
export function revokeObjectURL(url: string): void {
  URL.revokeObjectURL(url);
}
