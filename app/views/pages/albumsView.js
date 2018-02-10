import Backbone from "backbone";
import albumsTemplate from "../../templates/pages/albums.html";

const AlbumsView = Backbone.View.extend({

    render: function () {
        this.$el.html(albumsTemplate());
        return this;
    }
});

export default AlbumsView;