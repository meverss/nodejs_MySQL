import { Router } from 'express'
import {showResult} from '../controllers/index.controller.js'

const router = Router()

router.get('/pool', showResult)

export default router   // Export ROUTER and can use any name to define it when imported