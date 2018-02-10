import Backbone from "backbone";
import {navigate} from "../router";
import navLinkModel from "../models/NavLinkModel";
import navTemplate from "../templates/nav.html";

const NavLinkView = Backbone.View.extend({
    tagName: "div",
    className: "container",
    events: {
        "click .navbar li": "navigate"
    },
    navigate: function (e) {
        navigate(e.currentTarget.dataset.url);
    },
    render: function () {
        this.$el.html(navTemplate(this.model.attributes));
        return this;
    }
});

let navLinkView = new NavLinkView({
    model: navLinkModel
});

export default navLinkView;

