 module.exports = function(grunt) {

  /*
  Tree :
    src/less/\*\/*.less
    src/scripts/\*\/*.js
    dist/js/*.min.js == test+concat+minify
    dist/js/*.js  ==  test+concat+beautify
    dist/css/*.css == compile+beautify
    dist/css/*.min.css == compile+minify
  */

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mochaTest: {
      options: {
        globals: ['chai'],
        timeout: 100,
        ignoreLeaks: false,
        clearRequireCache: true,
        ui: 'bdd',
        bail: true
      },
      test: {
        src: ['test/**/*.js'],
      },
    },
    jshint: {
      files: ['Gruntfile.js', 'scripts/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
     js : {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'mocha']
     }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('test', ['jshint', 'mochaTest']);
  grunt.registerTask('default', ['test']);


};
