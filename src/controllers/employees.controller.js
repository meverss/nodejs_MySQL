import { pool } from '../mysql_connector.js'

export const getEmployees = async (req, res) => {
    const [sql] = await pool.query(`SELECT * FROM employees`)
    res.json(sql)
}

export const getOneEmployee = async (req, res) => {
    const id = req.params.id
    const [sql] = await pool.query(`SELECT * FROM employees WHERE id = ${id}`)
    res.json(sql)
}

export const addEmployees = async (req, res) => {
    const {name, salary} = req.body
    const [sql] = await pool.query(`INSERT INTO employees (name, salary) VALUES ("${name}", "${salary}")`)
    console.log(`Added new employee ${name} with a salary of $${salary}`)
    res.json({
        "id": sql.insertId,
        "name": name,
        "salary": salary
    })
}

export const updateAllEmployee = (req, res) => {
    res.send('Updatining ALL employee info')
}

export const updateRecordEmployee = (req, res) => {
    res.send(`Updating ONE employee's record`)
}

export const deleteEmployee = (req, res) => {
    res.send('DELETING employee')
}
