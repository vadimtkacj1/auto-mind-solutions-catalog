// Utilities for managing favorites in cookies

const FAVORITES_COOKIE_NAME = 'component_favorites';
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60; // 1 year in seconds

/**
 * Get all favorite component IDs from cookies
 */
export function getFavorites(): string[] {
  if (typeof document === 'undefined') return [];
  
  const cookies = document.cookie.split(';');
  const favoritesCookie = cookies.find(cookie => 
    cookie.trim().startsWith(`${FAVORITES_COOKIE_NAME}=`)
  );
  
  if (!favoritesCookie) return [];
  
  try {
    const value = favoritesCookie.split('=')[1];
    const decoded = decodeURIComponent(value);
    return JSON.parse(decoded);
  } catch (error) {
    console.error('Error parsing favorites cookie:', error);
    return [];
  }
}

/**
 * Save favorites array to cookies
 */
function saveFavorites(favorites: string[]): void {
  if (typeof document === 'undefined') return;
  
  const encoded = encodeURIComponent(JSON.stringify(favorites));
  document.cookie = `${FAVORITES_COOKIE_NAME}=${encoded}; max-age=${COOKIE_MAX_AGE}; path=/; SameSite=Lax`;
}

/**
 * Add a component to favorites
 */
export function addToFavorites(componentId: string): void {
  const favorites = getFavorites();
  
  if (!favorites.includes(componentId)) {
    favorites.push(componentId);
    saveFavorites(favorites);
  }
}

/**
 * Remove a component from favorites
 */
export function removeFromFavorites(componentId: string): void {
  const favorites = getFavorites();
  const filtered = favorites.filter(id => id !== componentId);
  saveFavorites(filtered);
}

/**
 * Toggle favorite status of a component
 */
export function toggleFavorite(componentId: string): boolean {
  const favorites = getFavorites();
  const isFavorite = favorites.includes(componentId);
  
  if (isFavorite) {
    removeFromFavorites(componentId);
    return false;
  } else {
    addToFavorites(componentId);
    return true;
  }
}

/**
 * Check if a component is in favorites
 */
export function isFavorite(componentId: string): boolean {
  return getFavorites().includes(componentId);
}

/**
 * Clear all favorites
 */
export function clearAllFavorites(): void {
  if (typeof document === 'undefined') return;
  
  document.cookie = `${FAVORITES_COOKIE_NAME}=; max-age=0; path=/`;
}

/**
 * Get the count of favorites
 */
export function getFavoritesCount(): number {
  return getFavorites().length;
}
