'use strict';

const path = require('path');

const config = {
    src: {
        path: path.join(__dirname, 'src'),
        files: path.join(__dirname, 'src', '**', '*.js')
    },

    sass: {
        path: path.join(__dirname, 'sass'),
        files: path.join(__dirname, 'sass', '**', '*.scss')
    },

    dist: {
        path: path.join(__dirname, 'dist'),
        name: 'bundle'
    }
};

module.exports = config;
