import express from 'express';
import {createPool} from 'mysql2/promise';

export const pool = createPool({
    host: 'localhost',
    user: 'marvin',
    password: 'mes2**',
    database: 'companydb'
})