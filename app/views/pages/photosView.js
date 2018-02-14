import Backbone from "backbone";
import photosTemplate from "../../templates/pages/photos.html";
import photoItemTemplate from "../../templates/items/photoItem.html";
import $ from "jquery";

const PhotoModel = Backbone.Model.extend({

});

const PhotoView = Backbone.View.extend({
    tagName: "li",
    className: "photo",
    render: function () {
        this.$el.html(photoItemTemplate(this.model.attributes));
        return this;
    }
});

const PhotoCollection = Backbone.Collection.extend({
    model: PhotoModel
});

const PhotosView = Backbone.View.extend({
    initialize(){
        $(".app").addClass("loading");
        let photoCollection = new PhotoCollection();
        photoCollection.fetch({"url": "http://jsonplaceholder.typicode.com/photos?_limit=100"});
        photoCollection.on("add", function (model) {
            $(".app").removeClass("loading");
            let photoView = new PhotoView({model: model});
            photoView.render().$el.appendTo(".photos");
            // this.$el.find('.photos').append(photoView.render().el);
            // photoView.render().$el.appendTo('.photos');
        })
    },
    render: function () {
        this.$el.html(photosTemplate());
        return this;
    }
});

export default PhotosView;