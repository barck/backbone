export const RootView = Backbone.View.extend({
    template: '<ul class="list"></ul>',
    initialize () {
        library.on('add', (model) => {(new LinkView({model:model})).render().$el.appendTo('.list')});
    },
    render: function() {
        this.$el.html(this.template);
        return this;
    }
});
