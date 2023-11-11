'use strict';

const { app } = require('../lib/fastify.js');
const path = require('node:path');

// Register the point-of-view plugin with Handlebars engine
app.register(require('@fastify/view'), {
  engine: {
    handlebars: require('handlebars'),
  },
  includeViewExtension: true,
  templates: 'views',
  options: {
    partials: {
      header: '/partials/header.hbs',
      footer: '/partials/footer.hbs',
      topNavbar: '/partials/topNavbar.hbs',
      bottomNavbar: '/partials/bottomNavbar.hbs',
      navbar: '/partials/navbar.hbs'
    }
  }
});
// Serve static files from the 'public' directory
app.register(require('@fastify/static'), {
  root: path.join(process.cwd(), 'public'),
  prefix: '/public/',
});

// Define a route that renders the Handlebars template
require('./home.js');

require('./contacts.js');

require('./about.js');

require('./404.js');

app.post('/submit-contact', async (request, reply) => {
  await reply.send(request.body).redirect('/submit-contact');
});

module.exports = { app };
