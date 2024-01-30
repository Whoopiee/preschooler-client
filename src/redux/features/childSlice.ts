/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { INewChildForm } from '@components/NewChildForm';

import { uploadService } from '../../services/uploadService';
import { ChildType } from '../../types/Сhild';
import { childService } from '../../services/childService';

type InitialType = {
  child: ChildType;
  loading: boolean;
  error: string;
};

const initialState: InitialType = {
  child: {
    id: 0,
    firstName: '',
    lastName: '',
    age: 0,
    sexId: 0,
    doshkillyaId: '',
    numberDoshkillya: '',
    photo: '',
    isMale: false,
  },
  loading: false,
  error: '',
};

const childSlice = createSlice({
  name: 'child',
  initialState,
  reducers: {
    selectedChild: (state, action) => {
      state.loading = true;
      state.child = action.payload;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(uploadPhoto.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(uploadPhoto.fulfilled, (state, action) => {
      state.child.photo = `https://sadok.dniprorada.gov.ua/${action.payload.url}`;
      state.loading = false;
    });
    builder.addCase(uploadPhoto.rejected, (state) => {
      state.error = 'Виникла помилка';
      state.loading = false;
    });
    builder.addCase(createChild.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createChild.fulfilled, (state, action) => {
      state.child = action.payload;
      state.loading = false;
    });
    builder.addCase(createChild.rejected, (state) => {
      state.error = 'Виникла помилка при створенні дитини';
      state.loading = false;
    });
    builder.addCase(updateChild.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateChild.fulfilled, (state, action) => {
      state.child = action.payload;
      state.loading = false;
    });
    builder.addCase(updateChild.rejected, (state) => {
      state.error = 'Помилка при оновленні дитини';
      state.loading = false;
    });
  },
});

export const {
  selectedChild,
} = childSlice.actions;

export default childSlice.reducer;

export const createChild = createAsyncThunk(
  'child/create',
  childService.create,
);

export const updateChild = createAsyncThunk(
  'child/update',
  childService.update,
);

export const uploadPhoto = createAsyncThunk(
  'child/photo',
  uploadService.upload,
);
