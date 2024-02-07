import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store.ts';
import { Box, Button, TextField } from '@mui/material';
import { shortLink } from '../../store/linksThunk.ts';

export interface ILinkCreate {
  url: string;
}

const Form = () => {


  const dispatch = useDispatch<AppDispatch>();
  const [state, setState] = useState<ILinkCreate>({
    url: ''
  });

  const onChange = (e: React.ChangeEvent) => {
    const {name, value} = e.target;
    setState(prevState => ({...prevState, [name]: value}));

  };

  const onSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    await dispatch(shortLink(state));
  };

  return (
    <>

      <Box
        component={'form'}
        onSubmit={onSubmit}
      >

        <TextField
          name={'url'}
          value={state.url}
          onChange={onChange}
        />

        <Button
          variant={'contained'}
          type={'submit'}
        >
          Short Url
        </Button>
      </Box>
    </>
  );
};

export default Form;