import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import bookTemplate from "./book.html";

//создаем модель данных
const LinkModel = Backbone.Model.extend({
    defaults: {

    }
});

const OneModel = Backbone.Model.extend({
    defaults: {

    }
});

//создаем вьюху
const LinkView = Backbone.View.extend({
  initialize: function(options) {
  },
  tagName: "li",
  className: "list-item",
  events: {
      //событие клик на элементе с классом .link, вызов метода navigate
    "click .link": "navigate",
    "click .remove": "removeModel"
  },
    //метод, выполняющийся при ивенте "click"
  navigate: function () {
    router.navigate("post/" + this.model.get("id"), {trigger: true});
    //this.remove();  как удалить все вьюхи?
    let oneLibrary = new OneLibrary();    //создаем экземпляр коллекции
    oneLibrary.on('add', (model) => {(new OneView({model:model})).render().$el.appendTo('.list')});
    oneLibrary.fetch({ url: 'https://jsonplaceholder.typicode.com/posts/' + this.model.get("id") });
    //library.remove(this)

  },
  removeModel: function () {
      this.remove()
  },
  render: function() {
   this.$el.html(bookTemplate(this.model.attributes));
   return this;
  }
});

const OneView = Backbone.View.extend({
    initialize: function(options) {
    },
    tagName: "li",
    className: "list-item",
    events: {
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

const OneLibrary = Backbone.Collection.extend({
    model: OneModel
});


let Router = Backbone.Router.extend({
    routes: {
        "":             "index",
        "post/:id":    "post"
    },
    index: function () {
       console.log("index")
    },
    post: function () {
        // alert(123);
    }
});

let router = new Router(); // создаем экземпляр роутера
// Backbone.history.start();  // Запускаем HTML5 History push
Backbone.history.start({pushState: true});


let library = new Library();    //создаем экземпляр коллекции
library.on('add', (model) => {(new LinkView({model:model})).render().$el.appendTo('.list')});
library.fetch({ url: 'https://jsonplaceholder.typicode.com/posts' });




