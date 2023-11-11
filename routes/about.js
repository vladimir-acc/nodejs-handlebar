'use strict';

const { app } = require('../lib/fastify.js');

// Create a route to render the about page
module.exports = app.get('/about', async (request, reply) => {

  const data = {
    message: 'This is the about page!',
  };

  await reply.view('about.hbs', data);
});