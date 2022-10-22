import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IInitialState, IPayloadUsers, TUser } from 'types/main';

const initialState: IInitialState = {
  listUsers: [],
  listUsersFavorite: [],
  selectUser: null,
  loading: false,
  error: false,
};

const requestOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  },
  redirect: 'follow',
};

export const searchUser = createAsyncThunk(
  'searchUser',
  ({ user }: { user: string }) => {
    return axios<IPayloadUsers>(
      `https://api.github.com/search/users?q=${user}`,
      requestOptions
    );
  }
);

export const getFullInfoUser = createAsyncThunk(
  'getFullInfoUser',
  ({ user }: { user: string }) => {
    return axios<TUser>(`https://api.github.com/users/${user}`, requestOptions);
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

        state.listUsers = payload.data.items;
        state.loading = false;
        state.error = false;
      })
      .addCase(searchUser.rejected, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(searchUser.pending, (state) => {
        state.error = true;
        state.loading = false;
      });
    builder
      .addCase(getFullInfoUser.fulfilled, (state, action) => {
        const { payload } = action;
        const newListUsers = state.listUsers.map((item) => {
          return item.id === payload.data.id ? payload.data : item;
        });
        state.listUsers = newListUsers;
        state.loading = false;
        state.error = false;
      })
      .addCase(getFullInfoUser.rejected, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getFullInfoUser.pending, (state) => {
        state.error = true;
        state.loading = false;
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
