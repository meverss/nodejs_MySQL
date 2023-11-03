import { pool } from '../mysql_connector.js'

export const getEmployees = async (req, res) => {
    try {
        const [sql] = await pool.query(`SELECT * FROM employees`)
        res.json(sql)

    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
}

export const getOneEmployee = async (req, res) => {
    const { id } = req.params

    try {
        const [sql] = await pool.query(`SELECT * FROM employees WHERE id = ${id}`)
        res.json(sql)

    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
}

export const addEmployees = async (req, res) => {
    const { name, salary } = req.body

    try {
        const [sql] = await pool.query(`INSERT INTO employees (name, salary) VALUES ('${name}', ${salary})`)
        if (sql.insertId >= 0) {
            console.log(`Added new employee ${name} with a salary of $${salary}`)
            res.sendStatus(204)
        } else {
            console.log('No records added')
            res.sendStatus(501)
        }

    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })

    }
}

export const updateAllEmployee = async (req, res) => {
    const { name, salary } = req.body
    const { id } = req.params

    try {
        const [sql] = await pool.query(`UPDATE employees SET name = '${name}', salary = ${salary} WHERE id = ${id}`)
        if (sql.affectedRows >= 1) {
            console.log('Updated ALL employee info')
            res.sendStatus(204)
        } else {
            console.log('Record not found')
            res.sendStatus(404)
        }

    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })

    }
}

export const updateRecordEmployee = async (req, res) => {
    const { name, salary } = req.body
    const { id } = req.params
    
    try {
        const [sql] = await pool.query(`UPDATE employees SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ${id}`, [name, salary])
        if (sql.affectedRows >= 1) {
            console.log('Updated info')
            res.sendStatus(204)
        } else {
            console.log('Record not found')
            res.sendStatus(404)
        }

    } catch {
        return res.status(500).json({
            message: 'Something went wrong'
        })

    }
}

export const deleteEmployee = async (req, res) => {
    const { id } = req.params

    try {
        const [db] = await pool.query(`SELECT * FROM employees`)
        const [employee] = await pool.query(`SELECT (name) FROM employees WHERE id = ${id}`)
        const [sql] = await pool.query(`DELETE FROM employees WHERE id = ${id}`)
        if (sql.affectedRows >= 1) {
            console.log(`${employee[0].name} has been deleted from Employees`)
            res.send(db)
        } else {
            console.log('No records found')
            res.status(404).send('No records found')
        }

    } catch {
        return res.status(500).json({
            message: 'Something went wrong'
        })

    }
}
