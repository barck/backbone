import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import LinkView from "./views/LinkView.js";
import Library from "./collections/Library.js";
import Router from "./router.js";




// //создаем коллекцию экземпляров модели
// const Library = Backbone.Collection.extend({
//   model: LinkModel
// });


let router = new Router(); // создаем экземпляр роутера
Backbone.history.start({pushState: true});


let library = new Library();    //создаем экземпляр коллекции
library.on('add', (model) => {(new LinkView({model:model})).render().$el.appendTo('.list')});
library.fetch({ url: 'https://jsonplaceholder.typicode.com/posts' });




