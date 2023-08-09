import express from 'express';
import { addUser } from '../controllers/users.controller.js';

const router = express.Router();

router.get("/", addUser);

export default  router;