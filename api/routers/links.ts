import express from 'express';
import {ILinkCreate} from '../type';
import Link from '../models/Link';

const linksRouters = express.Router();


linksRouters.post('/', async (req, res) => {
  try {
    const alphabet = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let result = '';

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      result += alphabet[randomIndex];
    }

    const unique = await Link.findOne({shortUrl: result});

    if (unique) {
      return res.sendStatus(400);
    }


    const linkCreate: ILinkCreate = {
      url: req.body.url,
      shortUrl: result
    };

    const savedLink = new Link(linkCreate);
    await savedLink.save();

    res.send(savedLink);
  } catch (e) {
    res.status(500).send(e);
  }
});


linksRouters.get('/:shortUrl', async (req, res) => {
  try {
    const shortUrl = req.params.shortUrl;

    const link = await Link.findOne({shortUrl});
    if (link) {
      return res.status(301).redirect(link.url);
    }

    res.sendStatus(404);
  } catch (e) {
    res.status(500).send(e);
  }
});


export default linksRouters;