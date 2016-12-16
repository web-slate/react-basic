module.exports = function (grunt) {

    grunt.initConfig({
      concat: {
        basic: {
          src: ['app/components/jquery/dist/jquery.min.js',
                'app/components/bootstrap/dist/js/bootstrap.min.js',
                'app/components/react/react.min.js',
                'app/components/react/react-dom.min.js',
                'app/components/babel/browser.min.js'
                ],
          dest: 'app/js/vendor.js',
        },
        extras: {
          src: ['app/js/shared/components/common/navBar.jsx',
                'app/js/shared/components/common/banner.jsx',
                'app/js/shared/components/form/inputBox.jsx',
                'app/js/shared/components/form/submitButton.jsx',
                'app/js/pages/lookUp.jsx',
                'app/js/app.jsx'
                ],
          dest: 'app/js/react-boot-n.jsx',
        },
      },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('build', [ 'concat' ]);
};
