import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import navTemplate from "./templates/nav.html";
import Router from "./router.js";
import LinkView from "./views/LinkView";
import LinkModel from "./models/LinkModel";


Backbone.history.start({pushState: true});

const NavLinkModel = Backbone.Model.extend({
    defaults: {
        "title": "Home",
        "title2": "Home2",
        "title3": "Home3",
        "title4": "Home4",
        "title5": "Home5",
        "title6": "Home6",
        "title7": "Home7",
        "title8": "Home8",
        "title9": "Home9",
        "title10": "Home10",
        "title11": "Home11",
    }
});

let navLinkModel = new NavLinkModel;
// navLinkModel.fetch({ url: 'http://jsonplaceholder.typicode.com/users' });

const NavLinkView = Backbone.View.extend({
    render: function () {
        this.$el.html(navTemplate(this.model.attributes));
        return this;
    }
});

let navLinkView = new NavLinkView({
    model: navLinkModel
});


$(".nav").html(navLinkView.render().el);