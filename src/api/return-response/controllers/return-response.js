'use strict';

/**
 * return-response controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::return-response.return-response');
