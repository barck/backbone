import Backbone from "backbone";
import postsTemplate from "../../templates/pages/posts.html";
import postItemTemplate from "../../templates/items/postItem.html";
import $ from "jquery";
import router from "../../router";

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
    events: {
        "click .link": "navigateItem"
    },
    navigateItem: (e) => {
        router.navigate("posts/" + e.currentTarget.dataset.url, {trigger: true});
    },
    render: function () {
        this.$el.html(postItemTemplate(this.model.attributes));
        return this;
    }
});

const PostsView = Backbone.View.extend({
    initialize(){
        $(".app").addClass("loading");
        let postCollection = new PostCollection();
        postCollection.fetch({
            "url": "http://jsonplaceholder.typicode.com/posts",
            success: () => {
                $(".app").removeClass("loading");
            }
        });
        postCollection.on("add", (model) => {
            let postView = new PostView({model: model});
            this.$el.find('.posts').append(postView.render().el);
        });
    },
    render: function () {
        this.$el.html(postsTemplate());
        return this;
    }
});

export default PostsView;


