import express from 'express';
import { createUrl, getUrl, redirectUrl } from '../controller/urlShort.js';
import auth from '../middleware/auth.js';

const router = express.Router();
router.get('/', (req, res) => {
  res.status(200).json('Welcome to My App😊');
});

router.get('/shortUrl', auth, getUrl);

router.post('/createUrl', auth, createUrl);

router.get('/:shortUrl', redirectUrl);

export const urlRoutes = router;
