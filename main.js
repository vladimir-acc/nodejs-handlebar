
const { app } = require('./routes/routes.js');
require('dotenv').config();

require('./lib/helper'); // helper registration for tamplate

// Start the server
const options = {
  port: process.env.port || 3000,
  host: process.env.host || '192.168.1.10'
  // Other options, if needed
}

app.listen(options, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server is running http://${options.host} on port ${options.port}`)
})