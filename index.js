import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import template from "./book.html";



const LinkModel = Backbone.Model.extend({ });

// const LinkView = Backbone.View.extend({
//   tagName: "li",
//   className: "list-item",
//   template: _.template($('#bookTemplate').html()),
//     render: function () {
//         this.$el.html(this.template(this.model.toJSON()));
//         return this;
//     }
// });

var LinkView = Backbone.View.extend({
    tagName: 'div',
    className: 'book-item',
    template: _.template($('#bookTemplate').html()),

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

const Library = Backbone.Collection.extend({
  model: LinkModel
});

const Router = Backbone.Router.extended({
   routes: ""
});


window.library = new Library();
var view = new LinkView()
new LinkView();
window.library.fetch({ url: '/data.json' });


