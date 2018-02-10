import Backbone from "backbone";
import usersTemplate from "../../templates/pages/users.html";

const UsersView = Backbone.View.extend({

    render: function () {
        this.$el.html(usersTemplate());
        return this;
    }
});

export default UsersView;