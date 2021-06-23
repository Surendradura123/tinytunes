const fastify = require('fastify')({logger: true})

// Empty json object to store the data from the server
const stats = {}

fastify.register(require('fastify-cors'), { 
  // put your options here
})

//get method
fastify.get('/stats', async (req, res) => {
  console.log(stats)
  return res.send(stats)
})

// post method
fastify.post('/stats', async (req, res) => {
  stats[req.body.key] = stats[req.body.key] ? stats[req.body.key] + req.body.value : req.body.value
  return res.code(204).send()
})

// Run the server
async function main() {
  try {
    fastify.listen(3002, '0.0.0.0')
  } catch(error) {
    console.log(error)
    process.abort()
  }
}
main()

//References:
// Fastify, Fast and low overhead web framework, for Node.js (2021) Fastify. Available at: https://www.fastify.io/ (Accessed: 2 June 2021).
// Gonzalez, D. (2021) Cloud Services & Integration [Wed 12:00] – dgonzalez@cct.ie - Google Drive. Available at: https://drive.google.com/drive/folders/1-bMtWxYjQssLye5Nzkfxvdo8IgFkQveh (Accessed: 2 June 2021).