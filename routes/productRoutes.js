import express from 'express'
import { create,  deleteProduct,  getProduct,  getProductById, updateProduct } from '../controllers/productController.js';
import { protect } from '../middlewares/authMiddleware.js';


const router = express.Router();

router.get('/',getProduct)
router.post('/create',create)
router.get('/:id',getProductById)
router.put('/update/:id',updateProduct)
router.delete('/delete/:id',deleteProduct)


export default router;