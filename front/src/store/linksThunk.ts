import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../axiosApi.ts';
import { ILinkCreate } from '../Features/Form/Form.tsx';

export const shortLink = createAsyncThunk<void, ILinkCreate>(
  'link/shortLink',
  async (arg) => {

    await axiosApi.post(`/links`, arg);

  }
);