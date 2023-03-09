import { Router } from 'express';
import {
	getAprendiz,
	createAprendiz,
	updateAprendiz,
	deleteAprendiz,
	getUser,
} from '../controllers/aprendiz.controller.js';

// Creo un router
const router = Router();

router.get('/aprendiz', getAprendiz);

router.get('/aprendiz/:user', getUser);

router.post('/aprendiz', createAprendiz);

router.patch('/aprendiz', updateAprendiz);

router.delete('/aprendiz', deleteAprendiz);

export default router;
