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
    const { name, salary } = req.body
    const [sql] = await pool.query(`INSERT INTO employees (name, salary) VALUES ("${name}", "${salary}")`)
    console.log(`Added new employee ${name} with a salary of $${salary}`)
    res.json({
        "id": sql.insertId,
        "name": name,
        "salary": salary
    })
}

export const updateAllEmployee = async (req, res) => {
    res.send('Updatining ALL employee info')
}

export const updateRecordEmployee = async (req, res) => {
    res.send(`Updating ONE employee's record`)
}

export const deleteEmployee = async (req, res) => {
    const id = req.params.id
    const [db] = await pool.query(`SELECT * FROM employees`)
    const [employee] = await pool.query(`SELECT (name) FROM employees WHERE id = ${id}`)
    const [sql] = await pool.query(`DELETE FROM employees WHERE id = ${id}`)
    if(sql.affectedRows >= 1){
        console.log(`${employee[0].name} has been deleted from Employees`)
        res.send(db)
    } else {
        console.log('No records found')
        res.status(404).send('No records found')
    }
}
