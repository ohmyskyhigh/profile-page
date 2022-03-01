const withLess = require("next-with-less");


module.exports = withLess({
    // reactStrictMode: true,
    lessLoaderOptions: {},
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
});