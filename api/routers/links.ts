import express from 'express';
import {ILinkCreate} from '../type';
import Link from '../models/Link';

const linksRouters = express.Router();


linksRouters.post('/', async (req, res) => {

  const alphabet = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
  let result = '';

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    result += alphabet[randomIndex];
  }


  const linkCreate: ILinkCreate = {
    url: req.body.url,
    shortUrl: result
  };


  const savedLink = new Link(linkCreate);
  await savedLink.save();

  res.send(savedLink);
});

export default linksRouters;