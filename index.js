const path = require('path');

module.exports = function nuxtToast(moduleOptions) {
    // Register plugin
    this.addPlugin({
        src: path.resolve(__dirname, 'plugin.js'),
        ssr: true,
        options: {
            ...moduleOptions,
            parser: path.resolve(__dirname, 'parser')
        }
    });
};

module.exports.meta = require('./package.json');
