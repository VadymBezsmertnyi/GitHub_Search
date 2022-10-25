import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IInitialState, IPayloadUsers, TUser } from 'types/main';

const initialState: IInitialState = {
  listUsers: [],
  listUsersFavorite: [],
  selectUser: null,
  loading: false,
  error: false,
  message: '',
};

const requestOptions = {
  method: 'GET',
  headers: {
    accept: 'application/vnd.github+json',
    authorization:
      'Bearer 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',
  },
  body: {},
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
    enterLoading: (state) => {
      state.loading = true;
    },
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
    addUsersThisLocalStorage: (state) => {
      const oldListUsers = JSON.parse(localStorage.getItem('listUsers') || '');
      const verifyList =
        oldListUsers.findIndex(
          (localUser: TUser) =>
            state.listUsers.findIndex((user) => user.id === localUser.id) >= 0
        ) < 0;
      state.listUsers = verifyList ? oldListUsers : state.listUsers;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchUser.fulfilled, (state, action) => {
        const { payload } = action;
        localStorage.setItem('listUsers', JSON.stringify(payload.data.items));
        state.listUsers = payload.data.items;
        state.loading = false;
        state.error = false;
      })
      .addCase(searchUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.message =
          'Error GitHub server - search user(API rate limit exceeded)';
      })
      .addCase(searchUser.pending, (state) => {
        state.error = false;
        state.loading = true;
        state.message = 'Loading users';
      });
    builder
      .addCase(getFullInfoUser.fulfilled, (state, action) => {
        const { payload } = action;
        const newListUsers = state.listUsers.map((item) => {
          return item.id === payload.data.id ? payload.data : item;
        });
        const newListUsersFavorites = state.listUsersFavorite.map((item) => {
          const SelectUserNewPage = newListUsers.find(
            (user) => user.id === item.id
          );
          return SelectUserNewPage ? SelectUserNewPage : item;
        });
        localStorage.setItem('listUsers', JSON.stringify(newListUsers));
        localStorage.setItem(
          'listUsersFavorite',
          JSON.stringify(newListUsersFavorites)
        );
        state.listUsers = newListUsers;
        state.listUsersFavorite = newListUsersFavorites;
        state.loading = false;
        state.error = false;
      })
      .addCase(getFullInfoUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.message =
          'Error GitHub server - get full info user(API rate limit exceeded)';
      })
      .addCase(getFullInfoUser.pending, (state) => {
        state.error = false;
        state.loading = true;
        state.message = 'Loading users';
      });
  },
});

const { actions, reducer } = mainReducer;

export default reducer;

export const {
  enterLoading,
  addFavorite,
  deleteFavorite,
  addFavoriteUsersThisLocalStorage,
  addUsersThisLocalStorage,
} = actions;
