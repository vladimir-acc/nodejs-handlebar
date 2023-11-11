
const Handlebars = require("handlebars");

Handlebars.registerHelper("bold", function (options) {
  return new Handlebars.SafeString('<div class="bold">' + options.fn(this) + "</div>");
});

Handlebars.registerHelper("email", function (options) {
  return new Handlebars.SafeString('<div class="email">' + options.fn(this) + "</div>");
});

module.exports;