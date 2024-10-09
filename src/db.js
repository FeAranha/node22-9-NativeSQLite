import { DatabaseSync } from "node:sqlite"

const database = new DatabaseSync('./db.sqlite')

function runSeed(items) {
  
}

export function select(query) {

}

export function insert({table, items}) {
  
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