module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		autoprefixer: {
			options: {
				browsers: ["> 1%", "last 2 versions", "Firefox ESR", "Opera 12.1", "ie 8", "ie 9","ie 10"]
			},
			files: {
				src: "cahnrs.css",
				dest: "build/cahnrs.css"
			}
		},

		cssmin: {
		  combine: {
		    files: {
		      'build/cahnrs.min.css': ['build/cahnrs.css']
		    }
		  }
		},

		uglify: {
			build: {
				src: 'cahnrs.js',
				dest: 'build/cahnrs.min.js'
			},
		},

		clean: {
  		temporary: {
				src: ['build/cahnrs.css']
			}
		},

		watch: {
			files: ['cahnrs.css', 'cahnrs.js'],
			tasks: ['default']
		}

	});

	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['autoprefixer', 'cssmin', 'uglify', 'clean']);

};