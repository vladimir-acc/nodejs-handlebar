
const { app } = require('./routes/routes.js');

require('./lib/helper'); // helper registration for tamplate

// Start the server
const options = {
  port: 3000,
  // Other options, if needed
}

app.listen(options, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log('Server is running on port 3000')
})