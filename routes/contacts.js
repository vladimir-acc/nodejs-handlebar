'use strict';

const { app } = require('../lib/fastify.js');
const fetchData = require('../lib/fetch.js');
// Create a route to render the contact page
module.exports = app.get('/contact', async (request, reply) => {
  try {
    const contacts = await fetchData("http://127.0.0.1:3003/contact/read/");

    await reply.view('contact', { title: 'Contacts', contacts });
  } catch (error) {
    console.error(error);
    reply.status(500).send('Internal Server Error');
  }

});