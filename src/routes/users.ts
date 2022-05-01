import app from 'express';
import { addUser } from '../controllers/userController';

const router = app.Router();

router.post('/', addUser);

export default router;
