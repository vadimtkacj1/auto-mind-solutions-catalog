import { useState, useEffect } from 'react';
import { isFavorite, toggleFavorite } from '../../lib/favorites';
import { getThumbnailUrl, thumbnailExists } from '../../lib/api';

/**
 * Custom hook to handle favorite status and thumbnail lifecycle.
 * Encapsulates event listeners and memory cleanup for Object URLs.
 */
export const useComponentState = (componentId: string) => {
  const [isFav, setIsFav] = useState(false);
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  useEffect(() => {
    // Initial state sync
    setIsFav(isFavorite(componentId));

    // Sync favorites across different card instances
    const syncFav = () => setIsFav(isFavorite(componentId));
    window.addEventListener('favoritesChanged', syncFav);

    const loadThumb = async () => {
      console.log(`[${componentId}] Loading thumbnail...`);
      // Check if thumbnail exists on backend
      const exists = await thumbnailExists(componentId);
      console.log(`[${componentId}] Thumbnail exists:`, exists);
      if (exists) {
        const url = getThumbnailUrl(componentId);
        console.log(`[${componentId}] Setting thumbnail URL:`, url);
        setThumbnail(url);
      } else {
        console.log(`[${componentId}] No thumbnail found`);
        setThumbnail(null);
      }
    };

    loadThumb();
    window.addEventListener('thumbnailChanged', loadThumb);

    return () => {
      window.removeEventListener('favoritesChanged', syncFav);
      window.removeEventListener('thumbnailChanged', loadThumb);
    };
  }, [componentId]);

  const toggleFav = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent opening the modal when clicking heart
    setIsFav(toggleFavorite(componentId));
    window.dispatchEvent(new Event('favoritesChanged'));
  };

  return { isFav, thumbnail, toggleFav };
};
