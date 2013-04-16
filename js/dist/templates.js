Ember.TEMPLATES["_app-meta"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var hashTypes;
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  }

  data.buffer.push("<h3>Application Information</h3> \n<table class=\"table\">\n  <tr>\n    <th>Namespace</th>\n    <td>");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.namespace", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n    <td></td>\n  </tr>\n    <th>Controller</th>\n    <td>");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller._debugContainerKey", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n    <td>");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n  <tr>\n    <th>View</th>\n    <td>\n      ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "view.renderedName", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </td>\n    <td>\n      ");
  hashTypes = {};
  stack1 = helpers['with'].call(depth0, "view", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </td>\n  </tr>\n  <tr>\n    <th>Route</th>\n    <td>");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "currentPath", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n    <td></td>\n  </tr>\n</table>\n");
  return buffer;
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("Show Events");
  }

  data.buffer.push("<div class=\"container\">\n  <div class=\"row-fluid\">\n    ");
  hashTypes = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial),stack1 ? stack1.call(depth0, "app-meta", options) : helperMissing.call(depth0, "partial", "app-meta", options))));
  data.buffer.push("\n    ");
  hashTypes = {'tagName': "STRING"};
  options = {hash:{
    'tagName': ("button")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "events", options) : helperMissing.call(depth0, "linkTo", "events", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  </div>\n  ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["event"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, options;
  data.buffer.push("\n<header class=\"modal-header\">\n  <button class=\"close\" type=\"button\" ");
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeModal", {hash:{
    'target': ("view.parentView")
  },contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data})));
  data.buffer.push(">&times;</button>\n  <h3>");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</h3>\n</header>\n<section class=\"modal-body\">\n  <p>\n    ");
  hashTypes = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date),stack1 ? stack1.call(depth0, "startDate", options) : helperMissing.call(depth0, "date", "startDate", options))));
  data.buffer.push("\n    ");
  hashTypes = {};
  stack2 = helpers['if'].call(depth0, "isMultiDay", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    <br />\n    ");
  hashTypes = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.time),stack1 ? stack1.call(depth0, "start", options) : helperMissing.call(depth0, "time", "start", options))));
  data.buffer.push(" - ");
  hashTypes = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.time),stack1 ? stack1.call(depth0, "end", options) : helperMissing.call(depth0, "time", "end", options))));
  data.buffer.push("\n  </p>\n  <p><b>Location: </b>");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "location", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n  <p><b>Description: </b>");
  hashTypes = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.showdown),stack1 ? stack1.call(depth0, "description", options) : helperMissing.call(depth0, "showdown", "description", options))));
  data.buffer.push("</p>\n  ");
  hashTypes = {};
  stack2 = helpers['if'].call(depth0, "url", {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</section>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashTypes, options;
  data.buffer.push(" - ");
  hashTypes = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date),stack1 ? stack1.call(depth0, "endDate", options) : helperMissing.call(depth0, "date", "endDate", options))));
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n  <p><a ");
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("url")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push(">More Information</a></p>\n  ");
  return buffer;
  }

  hashTypes = {};
  stack1 = helpers.view.call(depth0, "view.modalClass", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "view.modalBackdropClass", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  return buffer;
  
});

Ember.TEMPLATES["events"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, options;
  data.buffer.push("\n      <li>");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "event", "", options) : helperMissing.call(depth0, "linkTo", "event", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var hashTypes;
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  }

  data.buffer.push("<div class=\"row-fluid\">\n  <div class=\"span4\">\n    <ul class=\"nav nav-list\">\n    ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers.log.call(depth0, "model.length", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers.log.call(depth0, "content.length", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers.log.call(depth0, "filteredEvents.length", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    ");
  hashTypes = {};
  stack1 = helpers.each.call(depth0, "model", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </ul>\n  </div>\n  <div class=\"span8\">\n    ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  </div>\n</div>\n");
  return buffer;
  
});