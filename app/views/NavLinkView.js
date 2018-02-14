import Backbone from "backbone";
import router from "../router";
import navLinkModel from "../models/NavLinkModel";
import navTemplate from "../templates/nav.html";
import $ from "jquery"

const NavLinkView = Backbone.View.extend({
    tagName: "div",
    className: "container",
    events: {
        "click .navbar li": "navigate"
    },
    navigate: function (e) {
        router.navigate(e.currentTarget.dataset.url, {trigger: true});
        // $(".navbar li").removeClass("active");
        // e.currentTarget.classList.add("active");
        // router.on("route", (page) =>{
        //     console.log(e);
        //     console.log(page);
        //     // console.log("posts");
        // });
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

