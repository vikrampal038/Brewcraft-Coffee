import {Router} from 'express'
import createProduct from '../controllers/product.controller/create';
import listProducts from '../controllers/product.controller/list';
import updateProduct from '../controllers/product.controller/update';
import deleteProduct from '../controllers/product.controller/delete';

const router=Router();
router.post("/create",createProduct );
router.get("/list",listProducts );
router.put("/update/:id",updateProduct );
router.delete("/delete/:id",deleteProduct );



export default router;