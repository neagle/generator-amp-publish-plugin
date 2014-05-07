# generator-amp-publish-plugin [![NPM version][npm-image]][npm-url] [![Build status][travis-image]][travis-url]

A fancy [Yeoman](http://yeoman.io) generator for AMP Publish plugins and screens. It sets you up with a convenient system for developing and debugging plugins and screens from local files, even after they're published and in use.

Features:

* Compiles your Sass and JS from separate files into a single file ready to be pasted in to AMP's textarea.
* Uses Gulp to run a local server with your generated CSS and JS so that you can develop and debug the code inline, without constantly updating your plugin via the web interface.
* Checks for local versions of these files and if it doesn't find them, uses backup versions of your CSS and JS, which means you can have an official release that editors are using, but fire up your local Gulp server to add new features or make changes that only you can see without ever interrupting the availability of your plugin.
* Uses [autoprefixer](https://www.npmjs.org/package/gulp-autoprefixer) to deal with your fancy new CSS properties that need vendor prefixes for cross-browser support
* It even provides a `gulp copy` command that copies all of the necessary markup to your clipboard for you, so you don't even have to dirty your fingers by opening the file.

### Installation

Install Yeoman globally:

```shell
$ npm install -g yo
```

Install the generator globally:

```shell
$ npm install -g generator-amp-publish-plugin
```

Create a directory for your plugin/screen, `cd` into it, then fire up the generator.

```
$ mkdir myplugin
$ cd myplugin
$ yo amp-publish-plugin
```

### Use

Files of interest:

* src/js/main.js
* src/scss/main.scss
* src/html/main.html

Compile your project:

```shell
$ gulp
```

Run a watch process that compiles files when they're changed, and fires up a local server at *http://localhost:8000/yourplugin/*.

```shell
$ gulp watch
```

When developing your plugin or screen, you can have your plugin check for local versions of your JS and CSS. Copy this version of your plugin to your clipboard* with:

```shell
$ gulp copy --dev
```
This will serve up the current state of your CSS and JS as backup to users not running a localhost. That means you can upload this, then continue to develop your plugin. You will see the changes you make; other users will only see the version you actually pasted into AMP.

The only downside to this is that users who don't have localhost running have two HTTP errors in their console. That's not a big deal, but we don't want to litter AMP with dozens of HTTP errors - it's ugly, and it makes people worry something's wrong.

When you're done developing/debugging your plugin, upload a production version without these local calls:

```shell
$ gulp copy
```

To use the output of `gulp copy` in [AMP Publish](http://cms.aol.com/), either create a new plugin or edit your existing plugin (*Management > Plugins* or *Management > Screens*).

Then paste the output into the textarea in AMP Publish for your plugin or screen and save it.

If you ever need to develop your plugin or screen again, just run `gulp copy --dev` again, paste it the textarea, and go nuts..

* Only works on Macs. If you're on a different OS, you'll need to copy the contents of `./build/yourplugin/main.html` manually.

## Best Practices

You'll also have a linter in your gulpfile checking for some known issues with AMP Plugins. Those rules are located in `.patternlintrc`. If you have questions about any of them, just [let us know](mailto://AMPSupport@teamaol.com).

## License

MIT

[travis-url]: http://travis-ci.org/neagle/generator-amp-publish-plugin
[travis-image]: https://secure.travis-ci.org/neagle/generator-amp-publish-plugin.svg?branch=master
[npm-url]: https://npmjs.org/package/generator-amp-publish-plugin
[npm-image]: https://badge.fury.io/js/generator-amp-publish-plugin.svg
