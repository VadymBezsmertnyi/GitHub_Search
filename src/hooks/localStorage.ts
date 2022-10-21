export const verifyFavoriteUsers = () => {
  return Boolean(localStorage.getItem('listUsersFavorite'));
};
