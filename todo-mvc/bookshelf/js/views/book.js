// ===== Book View ===== //

var app = app || {};

app.BookView = Backbone.View.extend({
	tagName: 'div',
	className: 'book-container',
	template: _.template( $('#book-template').html() ),

	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'destroy', this.remove);
	},

	events: {
		'click button.delete': 'deleteBook'
	},

	deleteBook: function() {
		this.model.destroy();
	},

	render: function() {
		//this.el is defined by tagName. this.$el refers to jQuery html() function.
		this.$el.html( this.template( this.model.toJSON() ) );
		return this;
	}
});