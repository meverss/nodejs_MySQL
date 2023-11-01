import { Router } from 'express'
import { getEmployees, getOneEmployee, addEmployees, updateAllEmployee, updateRecordEmployee, deleteEmployee } from '../controllers/employees.controller.js'

const router = Router()

router.get('/', (req, res) => {
    res.send('You are in ROOT directory')
})

router.get('/employees', getEmployees)
router.get('/employees/:id', getOneEmployee)
router.post('/employees', addEmployees)
router.put('/employees', updateAllEmployee)
router.patch('/employees', updateRecordEmployee)
router.delete('/employees', deleteEmployee)

export default router   // Export ROUTER and can use any name to define it when imported