module.exports = {
    // a directory should be the same as "reactSnap.destination",
    // which default value is `build`
    globDirectory: "/build/",
    globPatterns: [
        "build/static/css/*.css",
        "build/static/js/*.js",
        "build/shell.html",
        "build/index.html",
    ],
    swDest: "../build/service-worker.js",
    // there is "reactSnap.include": ["/shell.html"] in package.json
    navigateFallback: "/200.html",
    // Ignores URLs starting from /__ (useful for Firebase):
    // https://github.com/facebookincubator/create-react-app/issues/2237#issuecomment-302693219
    navigateFallbackAllowlist: [/^(?!\/__).*/],
    // By default, a cache-busting query parameter is appended to requests
    // used to populate the caches, to ensure the responses are fresh.
    // If a URL is already hashed by Webpack, then there is no concern
    // about it being stale, and the cache-busting can be skipped.
    // configuration specific to this experiment
    runtimeCaching: [
        {
            urlPattern: /api/,
            handler: "StaleWhileRevalidate",
        },
    ],
};
