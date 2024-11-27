import express from 'express'
import { Login, Signup } from '../controllers/userControllers.js';

const router = express.Router();

router.post('/login',Login);
router.post('/signup',Signup);

// router.get('/')

export default router;