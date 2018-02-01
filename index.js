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
  initialize: function() {
      this.model.pathGenerator()
  },
  tagName: "li",
  className: "list-item",
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
        "book": "book",

    },

    index: function () {
       console.log("index")
    },

    book: function () {
        console.log("book");
        $(".list-item").hide();
    },

});

new Router(); // создаем роутер
Backbone.history.start();  // Запускаем HTML5 History push


window.library = new Library();

window.library.on('add', (model) => {(new LinkView({model:model})).render().$el.appendTo('.list')});

window.library.fetch({ url: '/data.json' });


