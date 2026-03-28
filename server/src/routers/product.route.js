import {Router} from 'express'
import createProduct from '../controllers/product.controller/create.js';
import listProducts from '../controllers/product.controller/list.js';
import updateProduct from '../controllers/product.controller/update.js';
import deleteProduct from '../controllers/product.controller/delete.js';

const router=Router();
router.post("/create",createProduct );
router.get("/list",listProducts );
router.put("/update/:id",updateProduct );
router.delete("/delete/:id",deleteProduct );

export default router;