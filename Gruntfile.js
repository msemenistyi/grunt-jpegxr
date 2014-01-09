/*
 * grunt-jpegxr
 * https://github.com/msemenistyi/grunt-jpegxr
 *
 * Copyright (c) 2014 Mykyta Semenistyi
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({

    clean: {
      tests: {
        src: ['tmp']
      }
    },

    jpegxr: {},

    mocha: {
      tests: ['test/*_test.js']
    }

  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('test', ['clean', 'jpegxr', 'mocha']);

};
