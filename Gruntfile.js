
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    responsive_images: {
      resizeImages: {
        options: {
          quality: 100,
          sizes: [{
            name: '1920',
            width: 1920
          },{
            name: '1152',
            width: 1152
          },{
            name: '960',
            width: 960
          },{
            name: '192',
            width: 192
          }]
        },
        files: [{
          expand: true,
          src: '**/*.{jpg,gif,png}',
          cwd: 'static/img/originals/',
          dest: 'static/img/work/'
        }]
      }
    },

    uglify: {
      options: {
        preserveComments: false
      },
      dist: {
        files: {
          'static/js/main.min.js': ['static/js/_imager.js', 'static/js/_main.js']
        }
      }
    }

  })

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('images', ['responsive_images']);
  grunt.registerTask('js', ['uglify']);

};
