import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoritePaciente) => {},
  removeFavorite: (pacienteId) => {},
  itemIsFavorite: (pacienteId) => {}
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoritePaciente) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoritePaciente);
    });
  }

  function removeFavoriteHandler(pacienteId) {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(paciente => paciente.id !== pacienteId);
    });
  }

  function itemIsFavoriteHandler(pacienteId) {
    return userFavorites.some(paciente => paciente.id === pacienteId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;