/*
 * grunt-jpegxr
 * https://github.com/msemenistyi/grunt-jpegxr
 *
 * Copyright (c) 2014 Mykyta Semenistyi
 * Licensed under the MIT license.
 */

'use strict';


module.exports = function(grunt) {
  
  var im = require('node-imagemagick'),
    path = require('path');

  grunt.registerMultiTask('jpegxr', 
    'Convert images to jpeg xr format using imagemagick', function() {

    var options = this.options();
    var args = [];

    grunt.util.async.forEachSeries(this.files, function(f, next) {

      args.push(f.src);
      args.push(f.dest);


      var child = grunt.util.spawn({
             cmd: 'convert',
             args: args
           }, function(error, result, code) {

             grunt.log.writeln(code + '' + result);

             if (code !== 0) {
               return grunt.log.warn(String(code));
             }


             next(error);
           });

    };
  };

};
   