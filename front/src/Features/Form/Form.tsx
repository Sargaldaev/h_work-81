import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store.ts';
import { Box, Button, Container, Link, TextField, Typography } from '@mui/material';
import { shortLink } from '../../store/linksThunk.ts';
import { Send } from '@mui/icons-material';

export interface ILinkCreate {
  url: string;
}

const Form = () => {

  const {link} = useSelector((state: RootState) => state.link);
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

    try {
      if (!state.url) {
        alert('Введите ссылку');
      } else {
        await dispatch(shortLink(state));
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>

      <Container
        maxWidth="sm"
        component="form"
        onSubmit={onSubmit}
      >
        <Typography variant="h4" align="center" gutterBottom>
          URL Shortener
        </Typography>
        <TextField
          name={'url'}
          fullWidth
          variant="outlined"
          label="Enter the URL"
          value={state.url}
          onChange={onChange}
          margin="normal"
        />
        <Button
          fullWidth
          variant="contained"
          type="submit"
          color="primary"
          endIcon={<Send/>}
        >
          Shorten
        </Button>
        {link && (
          <Box sx={{marginTop: '20px'}}>
            <Typography variant="body1">Shortened URL:</Typography>
            <Link href={`http://localhost:8000/links/${link.shortUrl}`} target="_blank" rel="noopener noreferrer">
              {`http://localhost:8000/links/${link.shortUrl}`}
            </Link>
          </Box>
        )}
      </Container>
    </>
  );
};

export default Form;