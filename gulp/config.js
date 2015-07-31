var dest = './public';
var src = './src';
var imagesPath = '/images';
var stylesPath = '/styles';

module.exports = {
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: dest
    }
  },
  paths: {
    src: src,
    scripts: src + '/js',
    dest: dest,
    images: imagesPath,
    styles: stylesPath,
    ico: '/favicon.ico',
    wildcards: {
      scripts: src + '/**/*.js',
      markup: src + '/**/*.html',
      styles: src + stylesPath + '/**/*',
      images: src + imagesPath + '/**/*'
    }
  },
  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/index.js',
      dest: dest + '/js',
      outputName: 'bundle.js',
      // list of externally available modules to exclude from the bundle
      external: ['jquery']
    }]
  },
  clean: {
    dest: dest
  },
  production: {
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/js/*.js',
    jsdest: dest + '/js',
    dest: dest
  },
  uglifyJs: {
    compress: {
      dead_code: true,
      sequences: true,
      conditionals: true,
      booleans: true,
      unused: true,
      if_return: true,
      join_vars: true,
      drop_debugger: true
    }
  }
};
