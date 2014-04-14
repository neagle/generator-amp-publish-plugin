// Register that your <%= type %> has loaded
window.ampPlugins = $.extend(window.ampPlugins, { '<%= _.slugify(name) %>': { loaded: true } });

$(function () {
	'use strict';

	// Build your <%= type %>!
});
