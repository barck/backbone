import Backbone from "backbone";
import postsTemplate from "../../templates/pages/posts.html";
import postItemTemplate from "../../templates/items/postItem.html";
import $ from "jquery";

const PostModel = Backbone.Model.extend({
    defaults: {
    }
});

const PostCollection = Backbone.Collection.extend({
    model: PostModel
});

const PostView = Backbone.View.extend({
    tagName: "li",
    className: "post",
    render: function () {
        this.$el.html(postItemTemplate(this.model.attributes));
        return this;
    }
});

const PostsView = Backbone.View.extend({
    initialize(){
        $(".app").addClass("loading");
        let postCollection = new PostCollection();
        postCollection.fetch({"url": "http://jsonplaceholder.typicode.com/posts"});
        postCollection.on("add", (model) => {
            $(".app").removeClass("loading");
            let postView = new PostView({model: model});
            this.$el.find('.posts').append(postView.render().el);
        })
    },
    events: {
        "click .post": "postNavigate"
    },
    postNavigate: function() {
        // router.navigate("post/" + this.model.get("id"), {trigger: true});
    },
    render: function () {
        this.$el.html(postsTemplate());
        return this;
    }
});

export default PostsView;


