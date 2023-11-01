import { Router } from 'express'
import { getEmployees, getOneEmployee, addEmployees, updateAllEmployee, updateRecordEmployee, deleteEmployee } from '../controllers/employees.controller.js'

const router = Router()

router.get('/employees', getEmployees)
router.get('/employees/:id', getOneEmployee)
router.post('/employees', addEmployees)
router.put('/employees/:id', updateAllEmployee)
router.patch('/employees/:id', updateRecordEmployee)
router.delete('/employees/:id', deleteEmployee)

export default router   // Export ROUTER and can use any name to define it when imported