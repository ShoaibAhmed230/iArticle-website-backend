'use strict';

/**
 * return-response service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::return-response.return-response');
