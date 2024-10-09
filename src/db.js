import { DatabaseSync } from "node:sqlite"
import sqlBricks from "sql-bricks"

const database = new DatabaseSync('./db.sqlite')

function runSeed(items) {
  database.exec(`
      DROP TABLE IF EXISTS students
    `)
  database.exec(`
      CREATE TABLE students(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        phone TEXT NOT NULL
      ) STRICT
    `)
      insert({ table: 'students', items })
}

export function select(query) {
  
}

export function insert({table, items}) {
  const { text, values } = sqlBricks.insertInto(table, items)
    .toParams({ placeholder: '?' })

  console.log({ text, values})
}

runSeed([
  {
    name: 'John Joe1',
    phone: '123456789',
  },
  {
    name: 'John Joe2',
    phone: '223456789',
  },
  {
    name: 'John Joe3',
    phone: '323456789',
  },
])