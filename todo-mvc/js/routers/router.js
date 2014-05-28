// ===== Router ===== //

var Workspace = Backbone.Router.extend({
    routes: {
        '*filter': 'setFilter'
    },

    setFilter: function(arg) {
        if (arg) {arg = arg.trim();}

        app.TodoFilter = arg || '';

        app.Todos.trigger('filter');
    }
});

app.TodoRouter = new Workspace();
Backbone.history.start();