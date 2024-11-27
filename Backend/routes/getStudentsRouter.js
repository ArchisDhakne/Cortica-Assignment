import express from 'express'
const router = express.Router();
import Students from '../controllers/getStudents.js';


// GET students by class
router.get('/students/:className',Students );

export default router;
