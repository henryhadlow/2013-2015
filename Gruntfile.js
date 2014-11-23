
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    responsive_images: {
      myTask: {
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
          cwd: 'test/',
          dest: 'test/'
        }]
      }
    }
  })

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};
