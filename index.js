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
    console.log("/book/" + this.model.get("id"))
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


var Router = Backbone.Router.extend({
    routes: {
        "": "index",
        "books/:id": "books"
    },
    index: function () {
       console.log("index")
    },
    books: function (id) {
        console.log("books/" + id);
        $(".list-item").hide();
        $(".book").append("Страница книжки " + id)
    }
});

new Router(); // создаем экземпляр роутера
// Backbone.history.start();  // Запускаем HTML5 History push
Backbone.history.start({pushState: true});


window.library = new Library();
window.library.on('add', (model) => {(new LinkView({model:model})).render().$el.appendTo('.list')});
window.library.fetch({ url: '/data.json' });


