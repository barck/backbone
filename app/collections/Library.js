import LinkModel from "../models/LinkModel.js";

const Library = Backbone.Collection.extend({
    model: LinkModel
});

export default Library;