export const verifyFavoriteUsers = () => {
  return Boolean(localStorage.getItem('listUsersFavorite'));
};

export const verifyUsers = () => {
  return Boolean(localStorage.getItem('listUsers'));
};
