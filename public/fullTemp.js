(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['equationsTemplate'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<article class=\"equation\">\r\n        <div class=\"equation-content\">\r\n          <div class=\"equation-text\">\r\n         <img src=\"http://latex.codecogs.com/svg.latex?"
    + alias4(((helper = (helper = helpers.equationText || (depth0 != null ? depth0.equationText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"equationText","hash":{},"data":data}) : helper)))
    + "\" border=\"0\"/>\r\n          </div>\r\n         <ul class=\"variable-list\">	\r\n      <li class=\"variable\">"
    + alias4(((helper = (helper = helpers.variable1 || (depth0 != null ? depth0.variable1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"variable1","hash":{},"data":data}) : helper)))
    + "</li>\r\n      <li class=\"variable\">"
    + alias4(((helper = (helper = helpers.variable2 || (depth0 != null ? depth0.variable2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"variable2","hash":{},"data":data}) : helper)))
    + "</li>\r\n      <li class=\"variable\">"
    + alias4(((helper = (helper = helpers.variable3 || (depth0 != null ? depth0.variable3 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"variable3","hash":{},"data":data}) : helper)))
    + "</li>\r\n      <li class=\"variable\">"
    + alias4(((helper = (helper = helpers.variable4 || (depth0 != null ? depth0.variable4 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"variable4","hash":{},"data":data}) : helper)))
    + "</li>\r\n\r\n         </ul>\r\n        </div>\r\n      </article>\r\n";
},"useData":true});
})();