'use strict';

/**
 * return-response router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::return-response.return-response');
