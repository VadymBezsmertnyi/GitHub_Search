import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DEFAULT_LIST_USERS, DEFAULT_SELECT_USER } from 'constans/default';
import { useHttp } from 'hooks/http.hook';
import { IInitialState } from 'types/main';

const initialState: IInitialState = {
  listUsers: DEFAULT_LIST_USERS,
  listUsersFavorite: [],
  selectUser: DEFAULT_SELECT_USER,
  loading: false,
};
//http://localhost:8080/user?user=moj
//http://localhost:8080/search/user?user=bezsmertny

export const searchUser = createAsyncThunk(
  'weather/fetchInfoCityWeather',
  (user: string) => {
    const { request } = useHttp();
    return request(`http://localhost:8080/search/user?user=${user}`, 'GET');
  }
);

const mainReducer = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const { payload } = action;
      const verify =
        state.listUsersFavorite.findIndex(
          (userFavorite) => userFavorite.id === payload.idUser
        ) < 0;
      const selectUser = state.listUsers.filter(
        (user) => user.id === payload.idUser
      );
      const favoriteAddUser = selectUser.map((item) => ({
        ...item,
        favorite: true,
      }));
      const newList = verify
        ? [...state.listUsersFavorite, ...favoriteAddUser]
        : state.listUsersFavorite;

      localStorage.setItem('listUsersFavorite', JSON.stringify(newList));

      state.listUsersFavorite = newList;
    },
    deleteFavorite: (state, action) => {
      const { payload } = action;
      const newList = state.listUsersFavorite.filter(
        (user) => user.id !== payload.idUser
      );
      localStorage.setItem('listUsersFavorite', JSON.stringify(newList));
      state.listUsersFavorite = newList;
    },
    addFavoriteUsersThisLocalStorage: (state) => {
      const oldFavoriteUsers = JSON.parse(
        localStorage.getItem('listUsersFavorite') || ''
      );
      state.listUsersFavorite = oldFavoriteUsers;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchUser.fulfilled, (state, action) => {
        const { payload } = action;
        console.log(payload);
      })
      .addCase(searchUser.pending, (state) => {
        state.loading = true;
      });
  },
});

const { actions, reducer } = mainReducer;

export default reducer;

export const {
  addFavorite,
  deleteFavorite,
  addFavoriteUsersThisLocalStorage,
} = actions;
