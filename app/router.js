import Backbone from "backbone";
import $ from "jquery";
import IndexView from "./views/pages/indexView";
import PostView from "./views/pages/postsView";
import PhotosView from "./views/pages/photosView";
import UsersView from "./views/pages/usersView";

const Router = Backbone.Router.extend({
    routes: {
        "":             "index",
        "posts":        "posts",
        "photos":       "photos",
        "users":        "users"
    },
    index: function () {
        $(".app").html((new IndexView).render().el);

    },
    posts: function () {
        $(".app").html((new PostView).render().el);

    },
    photos: function () {
        $(".app").html((new PhotosView).render().el);
    },
    users: function () {
        $(".app").html((new UsersView).render().el);
    }
});

const router = new Router;

export default router


