import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import bookTemplate from "./templates/book.html";

// import LinkModel from './models/LinkModel.js';
import RootModel from './models/RootModel.js';
import RootView from './views/RootView.js';
import LinkView from './views/LinkView.js';

import Router from './router.js';
import Library from "./collections/Posts";




console.log('root');
let router = new Router(); // создаем экземпляр роутера
// Backbone.history.start();  // Запускаем HTML5 History push
Backbone.history.start({pushState: true});



let rootView = new RootView();

$('.app').html(rootView.render().$el)
library.fetch({ url: 'https://jsonplaceholder.typicode.com/posts' });