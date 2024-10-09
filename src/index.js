import { createServer } from "node:http"
import { setTimeout } from "node:timers/promises"
import { select } from "./db.js"

createServer((request, response) => {
  response.end('{}')
})
  .listen(3000, () => console.log('server running at 3000'))

await setTimeout(500)

const result = await (await fetch('http://localhost:3000')).json()
console.log('GET', result)  