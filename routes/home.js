'use strict';

const { app } = require('../lib/fastify.js');
const fetchData = require('../lib/fetch.js');
// Create a route to render the home page
module.exports = app.get('/', async (request, reply) => {
  try {
    const tags = await fetchData("http://127.0.0.1:3003/tags/read/");
    await reply.view('home', { title: 'Home page', tags });
  } catch (error) {
    console.error(error);
    reply.status(500).send('Internal Server Error');
  }
});