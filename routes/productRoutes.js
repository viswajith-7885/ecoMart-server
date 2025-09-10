import express from 'express'
import { create,  getProductById } from '../controllers/productController.js';
import { adminOnly, protect } from '../middlewares/authMiddleware.js';


const router = express.Router();

router.post('/create',protect,adminOnly,create)
router.get('/:id',getProductById)


export default router;