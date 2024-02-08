import { createSlice } from '@reduxjs/toolkit';
import { shortLink } from './linksThunk.ts';

export interface ILink {
  _id: string;
  shortUrl: string;
  url: string;
}

interface LinkState {
  link: ILink | null;
}

const initialState: LinkState = {
  link: null,
};

export const linkSlice = createSlice({
  name: 'link',
  initialState,
  reducers: {},
  extraReducers: (builder) => {


    builder.addCase(shortLink.fulfilled, (state, action) => {
      state.link = action.payload || null;
    });

  }
});

export const linkReducer = linkSlice.reducer;