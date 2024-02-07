import { createSlice } from '@reduxjs/toolkit';
import { shortLink } from './linksThunk.ts';

export interface ILink {
  _id: string;
  shortUrl: string;
  url: string;
}

interface LinkState {
  link: ILink | null;
  fetchLoad: boolean;
}

const initialState: LinkState = {
  link: null,
  fetchLoad: false,
};

export const linkSlice = createSlice({
  name: 'link',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(shortLink.pending, (state) => {
      state.fetchLoad = true;
    });
    builder.addCase(shortLink.fulfilled, (state) => {
      state.fetchLoad = false;
      // state.link = action.payload || null;
    });
    builder.addCase(shortLink.rejected, (state) => {
      state.fetchLoad = false;
    });

  }
});

export const linkReducer = linkSlice.reducer;