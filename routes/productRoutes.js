import express from 'express'
import { create,  deleteProduct,  getProduct,  getProductById, updateProduct } from '../controllers/productController.js';
import { adminOnly, protect } from '../middlewares/authMiddleware.js';


const router = express.Router();

router.get('/',getProduct)
router.post('/create',protect,adminOnly,create)
router.get('/:id',getProductById)
router.put('/update/:id',protect,updateProduct)
router.put('delete/:id',protect,deleteProduct)


export default router;