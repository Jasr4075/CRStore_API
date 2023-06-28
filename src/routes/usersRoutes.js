import express from 'express';
const router = express.Router();
import { usersController } from '../controllers/usersController';

router.get('/', usersController.getUsers);
router.post('/', usersController.createUser);

export default router;
