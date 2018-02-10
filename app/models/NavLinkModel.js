const NavLinkModel = Backbone.Model.extend({
    defaults: {
        "links": [
            {"title": "Home", "url": ""},
            {"title": "Posts", "url": "posts"},
            {"title": "Albums", "url": "albums"},
            {"title": "Users", "url": "users"}
        ],
    }
});

let navLinkModel = new NavLinkModel;

export default navLinkModel;