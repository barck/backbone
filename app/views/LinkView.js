import bookTemplate from "../templates/book.html";

const LinkView = Backbone.View.extend({
    initialize: function(options) {
    },
    tagName: "li",
    className: "list-item",
    events: {
        //событие клик на элементе с классом .link, вызов метода navigate
        "click .link": "navigate",
        "click .remove": "removeModel"
    },
    //метод, выполняющийся при ивенте "click"
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

export default LinkView;


