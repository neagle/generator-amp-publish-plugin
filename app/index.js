'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var AmpPublishPluginGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the fantastic AMP Publish plugin/screen generator.'));

    var prompts = [{
      type: 'list',
      name: 'type',
      message: 'Are you making a plugin or a screen?',
      choices: ['plugin', 'screen'],
      'default': 0
    }];

    this.prompt(prompts, function (props) {
      this.type = props.type;
      this.prompt([{
        name: 'name',
        message: 'What is the name of your ' + props.type + '?'
      }], function (props) {
        this.name = props.name;
        done();
      }.bind(this));

    }.bind(this));
  },

  app: function () {
    this.mkdir('src');
    this.mkdir('src/html');
    this.template('_main.html', 'src/html/main.html');
    this.mkdir('src/js');
    this.template('_main.js', 'src/js/main.js');
    this.mkdir('src/scss');
    this.template('_main.scss', 'src/scss/main.scss');

    this.template('_package.json', 'package.json');
    this.template('_gulpfile.js', 'gulpfile.js');
  },

  projectfiles: function () {
    this.copy('gitignore', '.gitignore');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = AmpPublishPluginGenerator;
