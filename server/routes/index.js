import { Router } from "express"
import AuthApi from "./AuthApi.js"
import OrderApi from './OrderApi.js'
import MerchantApi from './MerchantApi.js'
import ProductApi from './ProductApi.js'
import CartApi from './CartApi.js'

const router = Router()

router.use('/auth', AuthApi)
router.use('/order', OrderApi)
router.use('/merchant', MerchantApi)
router.use('/product', ProductApi)
router.use('/cart', CartApi)

export default router