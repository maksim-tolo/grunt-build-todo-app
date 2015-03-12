module.exports = function(grunt) {
	grunt.initConfig({
		jshint: {
			files: [
          		'js/models/*.js',
          		'js/collections/*.js',
          		'js/views/*.js',
          		'js/routers/*.js',
          		'js/app.js'
        	]
    	},
    	uglify: {
    		mylib: {
        		src: [
          			'bower_components/underscore/underscore.js',
          			'bower_components/jquery/jquery.js',
         			'bower_components/backbone/backbone.js',
         			'bower_components/backbone.localStorage/backbone.localStorage.js',
          			'bower_components/todomvc-common/base.js'
        		],
        		dest: 'build/lib.min.js'
      		},
      		myapp: {
        		src: [
         			'js/models/*.js',
          			'js/collections/*.js',
          			'js/views/*.js',
          			'js/routers/*.js',
          			'js/app.js'
        		],
        		dest: 'build/app.min.js'
      		}
    	},
    	cssmin: {
      		files: {
        		src: 'bower_components/todomvc-common/base.css',
        		dest: 'build/base.min.css'
      		}
    	}
  	});
  	grunt.loadNpmTasks('grunt-contrib-uglify');
  	grunt.loadNpmTasks('grunt-contrib-jshint');
  	grunt.loadNpmTasks('grunt-contrib-cssmin');
  	grunt.registerTask('default', ['jshint', 'uglify','cssmin']);
};