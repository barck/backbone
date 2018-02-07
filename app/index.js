import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import book from "./app/templates/book.html";

import LinkView from "./app/views/LinkView.js";



//создаем модель данных
const LinkModel = Backbone.Model.extend({
    defaults: {

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
        // alert(123);
    }
});

let router = new Router(); // создаем экземпляр роутера
// Backbone.history.start();  // Запускаем HTML5 History push
Backbone.history.start({pushState: true});


let library = new Library();    //создаем экземпляр коллекции
library.on('add', (model) => {(new LinkView({model:model})).render().$el.appendTo('.list')});
library.fetch({ url: 'https://jsonplaceholder.typicode.com/posts' });




