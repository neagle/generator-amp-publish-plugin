// Register that the <%= _.slugify(name) %> <%= type %> has loaded
window.ampPlugins = $.extend(window.ampPlugins, { '<%= _.slugify(name) %>': { loaded: true } });

$(function () {
	'use strict';

	// Build your <%= type %>!
<% if (hidden) { %>
	// Hide the actual plugin box, since we're doing everything via JS / CSS
	$('.pluginbox h2:contains("<%= name %>")').closest('.pluginbox').hide();<% } %>

	// Save a reference to our <%= type %>
	var $container = $('#<%= type %>-<%= _.slugify(name) %>');
});
