import Backbone from "backbone";
import postTemplate from "../../templates/pages/posts.html";
import postItemTemplate from "../../templates/items/postItem.html";
import $ from "jquery";


const PostModel = Backbone.Model.extend({
    defaults: {
        "id": "id"
    }
});

const PostView = Backbone.View.extend({
    render: function () {
        this.$el.html(postItemTemplate(this.model.attributes));
        return this;
    }
});

const PostCollection = Backbone.Collection.extend({
    model: PostModel
});


const PostsView = Backbone.View.extend({
    initialize(){

        let postCollection = new PostCollection();
        postCollection.fetch({"url": "http://jsonplaceholder.typicode.com/posts"});
        postCollection.on("add", (model) => {
            let postView = new PostView({model: model});
            this.$el.find('.posts').append(postView.render().el);

        })
        
    },
    render: function () {
        this.$el.html(postTemplate());
        return this;
    }
});

export default PostsView;


