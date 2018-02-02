import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import template from "./book.html";

//создаем модель данных
const LinkModel = Backbone.Model.extend({
    pathGenerator: function() {
        this.set("imgPath", (this.get("imgLink") + '.jpg'));
    },
    defaults: {
        imgType: '.jpg'
    }
});

//создаем вьюху
const LinkView = Backbone.View.extend({
  initialize: function(options) {
      this.model.pathGenerator();
  },
  tagName: "li",
  className: "list-item",
  events: {
      //событие клик на элементе с классом .link, вызов метода navigate
    "click .link": "navigate"
  },
    //метод, выполняющийся при ивенте "click"
  navigate: function () {
    console.log("/book/" + this.model.get("id"));
    router.navigate("book/" + this.model.get("id"), {trigger: true});

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
        "book/:id":    "books"
    },
    index: function () {
       console.log("index")
    },
    books: function (id) {
        alert("book")
    }
});

let router = new Router(); // создаем экземпляр роутера


// Backbone.history.start();  // Запускаем HTML5 History push
Backbone.history.start({pushState: true});


let library = new Library();    //создаем экземпляр коллекции
library.on('add', (model) => {(new LinkView({model:model})).render().$el.appendTo('.list')});
library.fetch({ url: '/data.json' });


