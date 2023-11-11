'use strict';

const { app } = require('../lib/fastify.js');

// Create a route to render the 404 page
module.exports = app.setNotFoundHandler(async (request, reply) => {
  await reply.view('404', {
    message: 'Error - 404',
    text: 'Page not found'
  }).code('404');
});