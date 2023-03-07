import { Router } from "express"
import AuthApi from "./AuthApi.js"

const router = Router()

router.use('/auth', AuthApi)

export default router