import React, { useState } from 'react';
import { CatalogPage } from './components/CatalogPage';
import { FavoritesPage } from './components/FavoritesPage';
import { FavoritesButton } from './components/FavoritesButton';

function App() {
  const [showFavorites, setShowFavorites] = useState(false);

  return (
    <>
      {showFavorites ? (
        <FavoritesPage onBackToCatalog={() => setShowFavorites(false)} />
      ) : (
        <CatalogPage />
      )}
      
      <FavoritesButton 
        onClick={() => setShowFavorites(!showFavorites)} 
        isOnFavoritesPage={showFavorites}
      />
    </>
  );
}

export default App;
