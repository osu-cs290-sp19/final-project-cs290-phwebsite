(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['equationsTemplate'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.variablesTemplate,depth0,{"name":"variablesTemplate","data":data,"indent":"              ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<article class=\"equation\">\r\n        <div class=\"equation-content\">\r\n          <div class=\"equation-text\">\r\n         <img src=\"http://latex.codecogs.com/svg.latex?\" + "
    + container.escapeExpression(((helper = (helper = helpers.equationText || (depth0 != null ? depth0.equationText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"equationText","hash":{},"data":data}) : helper)))
    + " border=\"0\"/>\r\n          </div>\r\n         <ul class=\"variable-list\">	\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.variables : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "         </ul>\r\n        </div>\r\n      </article>\r\n";
},"usePartial":true,"useData":true});
templates['variablesTemplate'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "      <li class=\"variable\">"
    + container.escapeExpression(((helper = (helper = helpers.variable || (depth0 != null ? depth0.variable : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"variable","hash":{},"data":data}) : helper)))
    + "</li>\r\n\r\n\r\n   \r\n";
},"useData":true});
})();