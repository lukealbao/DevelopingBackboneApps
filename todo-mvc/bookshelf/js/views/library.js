// ===== Library View ===== //

var app = app || {};

app.LibraryView = Backbone.View.extend({
	el: '#books',

	initialize: function(books) {
		this.collection = new app.Library(books);
		this.render();
	},

	events: {
		'click #add': 'addBook'
	},

	addBook: function(e) {
		e.preventDefault();
		var formData = {};
		console.log('addBook called');

		// Create an object literal to feed a new book model.
		$('#add-book div').children('input').each(function(i, input){
			if ( $(input).val() != '') 
			{
				formData[input.id] = $(input).val();
			}
		});

		// Then add the model to the collection.
		var book = this.collection.add(new app.Book(formData));
		this.renderBook(book);
	},

	render: function() {
		this.collection.each(function(book){
			this.renderBook(book);
		}, this);
	},

	// Create each BookView and append it to the library's element.
	renderBook: function(book){
		var view = new app.BookView({
			model: book
		});

		this.$el.append( view.render().el );
	}
});