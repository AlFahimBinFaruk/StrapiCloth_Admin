"use strict";

/**
 *  order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  // Method 2: Wrapping a core action (leaves core logic in place)
  async find(ctx) {
    // // some custom logic here
    // ctx.query = { ...ctx.query, local: "en" };

    // // Calling the default core action
    // const { data, meta } = await super.find(ctx);

    // // some more custom logic
    // meta.date = Date.now();

    return { data:"test", meta:"test" };
  },
}));