




//создаем коллекцию экземпляров модели
const Library = Backbone.Collection.extend({
  model: LinkModel
});



let Router = Backbone.Router.extend({
    routes: {
        "":             "index",
        "post/:id":    "post"
    },
    index: function () {
    },
    post: function () {
    }
});

let library = new Library();    //создаем экземпляр коллекции

let router = new Router(); // создаем экземпляр роутера
// Backbone.history.start();  // Запускаем HTML5 History push
Backbone.history.start({pushState: true});

const RootView = Backbone.View.extend({
    template: '<ul class="list"></ul>',
    initialize () {
        library.on('add', (model) => {(new LinkView({model:model})).render().$el.appendTo('.list')});
    },
    render: function() {
        this.$el.html(this.template);
        return this;
    }
});






