import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../axiosApi.ts';
import { ILinkCreate } from '../Features/Form/Form.tsx';
import { ILink } from './linksSlice.ts';

export const shortLink = createAsyncThunk<ILink, ILinkCreate>(
  'link/shortLink',
  async (arg) => {

    const {data} = await axiosApi.post(`/links`, arg);

    return data;
  }
);
