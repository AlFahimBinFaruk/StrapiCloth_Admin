const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) =>  ({
    async index(ctx, next) { // called by GET /hello 
        ctx.body = 'Hello World!'; // we could also send a JSON
      },
}));