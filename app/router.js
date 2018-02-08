import Backbone from "backbone";

let Router = Backbone.Router.extend({
    routes: {
        "":             "index",
        // посты
        // пост
        // пользователи
        // пользователь
        // альбомы
        // альбом
    },
    index: function () {
        console.log("index")
    },
    post: function () {
        // alert(123);
    }
});

export default new Router();

