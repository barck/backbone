import Backbone from "backbone";
import $ from "jquery";
import IndexView from "./views/pages/indexView";
import PostView from "./views/pages/postsView";
import PhotosView from "./views/pages/photosView";
import UsersView from "./views/pages/usersView";

const Router = Backbone.Router.extend({
    routes: {
        "":             "", //пришлось так сделать, чтобы работал active class
        "posts":        "posts",
        "photos":       "photos",
        "users":        "users",
        "posts/:id":    "post"
    },
    initialize: function () { //пришлось так сделать, чтобы работал active class
        $(".app").html((new IndexView).render().el);
    },
    posts: function () {
        $(".app").html((new PostView).render().el);
    },
    photos: function () {
        $(".app").html((new PhotosView).render().el)
    },
    users: function () {
        $(".app").html((new UsersView).render().el);
    },
    post: function (id) {
        $(".app").html("<h2>Тут должна быть вьюха для POST с ID: " + id + "</h2>");
    }
});

const router = new Router;

export default router


