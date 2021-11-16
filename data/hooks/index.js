const { ready } = require("./ready");

// This could also be:
// const availableHooks = {
//     ready: [ready, otherReady]
// }

const availableHooks = {
    ready
}

module.exports = { availableHooks }
