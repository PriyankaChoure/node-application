import express from 'express';
const router = express.Router();

// Route for user
import userRoute from './user.route.js';
router.use("/user", userRoute);

export default router;