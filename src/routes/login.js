import {Router} from 'express';
import login from '../controllers/login.js';
const router = Router();


router.post('/auth', login.auth);
router.get('/listar', login.listar);

export default router;