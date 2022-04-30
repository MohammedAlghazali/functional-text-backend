import app from 'express';
import { getUsers } from '../controllers/userController';

const router = app.Router();

router.get('/', getUsers);

export default router;
