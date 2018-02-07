import LinkModel from '../models/LinkModel.js';
//создаем коллекцию экземпляров модели
export const Library = Backbone.Collection.extend({
    model: LinkModel
});

