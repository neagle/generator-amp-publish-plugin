# generator-amp-publish-plugin [![Build Status](https://secure.travis-ci.org/neagle/generator-amp-publish-plugin.png?branch=master)](https://travis-ci.org/neagle/generator-amp-publish-plugin)

A fancy [Yeoman](http://yeoman.io) generator for AMP Publish plugins and screens. It sets you up with a convenient system for developing and debugging plugins and screens from local files, even after they're published and in use.

Features:

* Gulp for task management
* Sass for styles
* Autoprefixer to deal with your fancy new CSS properties that need vendor prefixes for cross-browser support

## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-amp-publish-plugin from npm, run:

```
$ npm install -g generator-amp-publish-plugin
```

Finally, initiate the generator:

```
$ yo amp-publish-plugin
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).

## Developing Your Plugin or Screen

There are three parts to a plugin or screen:

* Sass (CSS)
* JavaScript
* Markup

### Sass

Your Sass lives in `src/scss/main.scss`. It gets compiled and autoprefixed.

### JavaScript

Your JavaScript lives in `src/js/main.js`. It gets minified.

### Markup

This is the actual markup you'll paste into the textarea for your plugin or screen in AMP Publish. Gulp adds your CSS and JS here.

### Development

Running `gulp watch` from your project will start up a watcher that recompiles your project when files are changed as well as a local server at `localhost:8000`.

To use these in [AMP Publish](http://cms.aol.com/), either create a new plugin or edit your existing plugin (*Management > Plugins* or *Management > Screens*). Type `gulp copy --dev` to compile your project and copy it to your clipboard.

(Note: if you're not using a Mac, you'll have to copy the contents of `build/your-plugin/main.html` to the clipboard yourself.)

Then paste the output into the textarea in AMP Publish for your plugin or screen. Save it, then browse to a page of the CMS where you've chosen to have the plugin or screen be visible. Your plugin should pull the CSS and JS files you have on localhost, which means you can make changes to both files and see them whenever you reload the page in your browser.

### Production

When you're no longer actively developing your plugin, just run `gulp copy` to copy the contents of your plugin to clipboard without the code that tries to pull versions from localhost. If you ever want to work on the plugin again, you can just run `gulp copy --dev` again and toss that code in so that you can work on new changes without interrupting use of your plugin by others.

## License

MIT
