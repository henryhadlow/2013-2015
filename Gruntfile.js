
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    responsive_images: {
      myTask: {
        options: {
          engine: 'im',
          sizes: [{
            name: '1920',
            width: 1920,
            quality: 60
          },{
            name: '1440',
            width: 1440,
            quality: 60
          },{
            name: '1152',
            width: 1152,
            quality: 60
          },{
            name: '960',
            width: 960,
            quality: 60
          },{
            name: '192',
            width: 192,
            quality: 60
          }]
        },
        files: [{
          expand: true,
          src: '01.jpg',
          cwd: 'static/img/work/gov-uk/',
          dest: 'static/img/work/gov-uk/'
        }]
      }
    }
  })

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};

// responsive_images: {
//     options: {
//       // engine: im,
//       sizes: [{
//         name: '1920',
//         width: 1920,
//         quality: 60
//       },{
//         name: '1440',
//         width: 1440,
//         quality: 60
//       },{
//         name: '1152',
//         width: 1152,
//         quality: 60
//       },{
//         name: '960',
//         width: 960,
//         quality: 60
//       },{
//         name: '192',
//         width: 192,
//         quality: 60
//       }]
//     },
//     files: [{
//       expand: true,
//       src: ['static/img/**/*.{jpg,gif,png}'],
//       cwd: 'test/',
//       dest: 'tmp/'
//     }]
//   }
//
