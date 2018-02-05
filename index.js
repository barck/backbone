import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import template from "./book.html";

//создаем модель данных
const LinkModel = Backbone.Model.extend({
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
    "click .link": "navigate"
  },
    //метод, выполняющийся при ивенте "click"
  navigate: function () {
    router.navigate("post/" + this.model.get("id"), {trigger: true});
    alert(this.model.get("title"));
  },
  render: function() {
   this.$el.html(template(this.model.attributes));
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
       console.log("index")
    },
    post: function () {
        alert(a)
    }
});

let router = new Router(); // создаем экземпляр роутера
// Backbone.history.start();  // Запускаем HTML5 History push
Backbone.history.start({pushState: true});


let library = new Library();    //создаем экземпляр коллекции
library.on('add', (model) => {(new LinkView({model:model})).render().$el.appendTo('.list')});
library.fetch({ url: 'https://jsonplaceholder.typicode.com/posts' });


