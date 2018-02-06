import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import bookTemplate from "./app/templates/book.html";

//создаем модель данных
const LinkModel = Backbone.Model.extend();

//создаем вьюху
const LinkView = Backbone.View.extend({
  tagName: "li",
  className: "list-item",
  events: {
    "click .link": "navigate",
    "click .remove": "removeModel"
  },
  navigate: function () {
    router.navigate("post/" + this.model.get("id"), {trigger: true});
  },
  removeModel: function () {
      this.remove()
  },
  render: function() {
   this.$el.html(bookTemplate(this.model.attributes));
   return this;
  }
});

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

let rootView = new RootView();

$('.app').html(rootView.render().$el)
library.fetch({ url: 'https://jsonplaceholder.typicode.com/posts' });




