// ===== Library Collection ===== //

var app = app || {};

app.Library = Backbone.Collection.extend({
	model: app.Book
});