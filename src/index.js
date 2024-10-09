import { createServer } from "node:http"
import { setTimeout } from "node:timers/promises"
import { select } from "./db.js"
import sqlBricks from "sql-bricks"

createServer((request, response) => {
  if (request.method === 'GET') {

    const query = sqlBricks
      .select('name,phone')
      .orderBy('name')
      .from('students')
      .toString()
  const items = select(query)
  return response.end(JSON.stringify(items))
  }
  
})
  .listen(3000, () => console.log('server running at 3000'))

await setTimeout(500)

const result = await (await fetch('http://localhost:3000')).json()
console.log('GET', result)