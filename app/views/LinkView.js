//создаем вьюху
export const LinkView = Backbone.View.extend({
    tagName: "li",
    className: "list-item",
    events: {
        "click .link": "navigate",
        "click .remove": "removeModel"
    },
    navigate: function () {
        router.navigate("post/" + this.model.get("id"), {trigger: true});
    },
    removeModel: function () {
        this.remove()
    },
    render: function() {
        this.$el.html(bookTemplate(this.model.attributes));
        return this;
    }
});
