import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import navLinkView from "./views/NavLinkView.js";
import navLinkModel from "./models/NavLinkModel.js"

Backbone.history.start({/*pushState: true*/});

$(".nav").html(navLinkView.render().el);

