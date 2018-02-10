import Backbone from "backbone";
import $ from "jquery";
import IndexView from "./views/pages/indexView";
import PostView from "./views/pages/postsView";
import AlbumsView from "./views/pages/albumsView";
import UsersView from "./views/pages/usersView";

const Router = Backbone.Router.extend({
    routes: {
        "":             "index",
        "posts":        "posts",
        "albums":       "albums",
        "users":        "users"
    },
    index: function () {
        $(".app").html((new IndexView).render().el);
    },
    posts: function () {
        $(".app").html((new PostView).render().el);
    },
    albums: function () {
        $(".app").html((new AlbumsView).render().el);
    },
    users: function () {
        $(".app").html((new UsersView).render().el);
    }
});

const router = new Router;

export function navigate (href) {
    router.navigate(href, {trigger: true})
}


