import express from 'express';
import { addAuth, register, login, logout } from '../controllers/auth.controller.js';

const router = express.Router();

router.get("/", addAuth);

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default  router;