import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import template from "./book.html";

const LinkModel = Backbone.Model.extend({
    pathGenerator: function() {
        this.set("imgPath", (this.get("imgLink") + '.jpg'));
    },
    defaults: {
        imgType: '.jpg'
    }
});

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

const Library = Backbone.Collection.extend({
  model: LinkModel
});

const Router = Backbone.Router.extend({
    initialize: function () {

    },
   routes: {
       '': 'index'
   },
    index: function () {
        console.log('index')
    }
});

new Router();

Backbone.history.start();

window.library = new Library();
window.library.on('add', (model) => {(new LinkView({model:model})).render().$el.appendTo('.list')});
window.library.fetch({ url: '/data.json' });


