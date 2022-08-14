import {Router} from 'express';
import questions from '../../controllers/inspector/questions.js';
const router = Router();


router.get('/categorylist', questions.categoryList);
router.get('/questionlist', questions.questionList);

export default router;