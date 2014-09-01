/*jshint node: true*/
"use strict";

var bunyan = require('bunyan');

var logger = function(opts) {

    opts = opts || {};
    opts.name = opts.name || "websocket";
    opts.level = opts.level || "debug";
    opts.serializers = opts.serializers || {};

    var logUtil = bunyan.createLogger({
        name: opts.name,
        level: opts.level,
        serializers: opts.serializers
    });

    return logUtil;
};

module.exports = {
    logger: logger
};
