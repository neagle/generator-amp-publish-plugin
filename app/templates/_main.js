// Register that the <%= _.slugify(name) %> <%= type %> has loaded
window.ampPlugins = $.extend(window.ampPlugins, { '<%= _.slugify(name) %>': { loaded: true } });

$(function () {
	'use strict';

	// Build your <%= type %>!

	// Save a reference to our <%= type %>
	var $container = $('#<%= type %>-<%= _.slugify(name) %>');
});
