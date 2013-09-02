(function() {

Ember.TEMPLATES["_app-meta"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

  data.buffer.push("<h3>Application Information</h3> \n<table class=\"table\">\n  <tr>\n    <th>Namespace</th>\n    <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.namespace", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n    <td></td>\n  </tr>\n    <th>Controller</th>\n    <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller._debugContainerKey", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n    <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n  <tr>\n    <th>View</th>\n    <td>\n      ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "view.renderedName", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </td>\n    <td>\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['with'].call(depth0, "view", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </td>\n  </tr>\n  <tr>\n    <th>Route</th>\n    <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "currentPath", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n    <td></td>\n  </tr>\n</table>\n");
  return buffer;
  
});

Ember.TEMPLATES["_calendar-svg"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" width=\"60px\" height=\"60px\" viewBox=\"0 0 512 512\" enable-background=\"new 0 0 512 512\" xml:space=\"preserve\" xmlns:xml=\"http://www.w3.org/XML/1998/namespace\">\n<g>\n  <path d=\"M446.562,98H429v15.058C429,126.271,418.629,137,405.415,137h-0.36C391.841,137,381,126.271,381,113.058V98H137v15.058   C137,126.271,125.9,137,112.686,137h-0.361C99.11,137,88,126.271,88,113.058V98H65.439C46.419,98,31,113.372,31,132.392v303.061   C31,454.473,46.419,470,65.439,470h381.123c19.02,0,34.438-15.527,34.438-34.548V132.392C481,113.372,465.581,98,446.562,98z    M445,402.562c0,19.02-15.419,34.438-34.439,34.438H102.439C83.419,437,68,421.581,68,402.562V206.438   C68,187.418,83.419,172,102.439,172h308.121C429.581,172,445,187.418,445,206.438V402.562z\"/>\n  <path d=\"M112.5,128.947c10.144,0,18.5-8.223,18.5-18.367V60.07c0-10.145-8.356-18.367-18.5-18.367S94,49.926,94,60.07v50.51   C94,120.725,102.356,128.947,112.5,128.947z\"/>\n  <path d=\"M405.5,128.947c10.144,0,18.5-8.224,18.5-18.367V60.07c0-10.145-8.356-18.367-18.5-18.367   c-10.143,0-18.5,8.223-18.5,18.367v50.51C387,120.724,395.357,128.947,405.5,128.947z\"/>\n  <path d=\"M412,207h-14v31h-60v-31h-14v31h-62v-31h-14v31h-60v-31h-14v31h-61v-31H99v31h-8v13h8v62h-8v14h8v58h-8v13h8v22h14v-22h61   v22h14v-22h60v22h14v-22h62v22h14v-22h60v22h14v-22h8v-13h-8v-58h8v-14h-8v-62h8v-13h-8V207z M174,385h-61v-58h61V385z M174,313   h-61v-62h61V313z M248,385h-60v-58h60V385z M248,313h-60v-62h60V313z M324,385h-62v-58h62V385z M324,313h-62v-62h62V313z M398,385   h-60v-58h60V385z M398,313h-60v-62h60V313z\"/>\n</g>\n</svg>");
  
});

Ember.TEMPLATES["_control-buttons"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("Day");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Week");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Month");
  }

function program7(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n  <div class=\"btn-group\">\n    <button type=\"button\" class=\"btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showFilters", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Filters</button>\n  </div>\n  ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n<div class=\"row-fluid\">\n  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render || depth0.render),stack1 ? stack1.call(depth0, "filters.update", options) : helperMissing.call(depth0, "render", "filters.update", options))));
  data.buffer.push("\n</div>\n");
  return buffer;
  }

  data.buffer.push("<div class=\"row-fluid\">\n  <div class=\"btn-group pull-right\">\n    ");
  hashContexts = {'classNames': depth0};
  hashTypes = {'classNames': "STRING"};
  options = {hash:{
    'classNames': ("btn")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "day", options) : helperMissing.call(depth0, "linkTo", "day", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    ");
  hashContexts = {'classNames': depth0};
  hashTypes = {'classNames': "STRING"};
  options = {hash:{
    'classNames': ("btn")
  },inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "week", options) : helperMissing.call(depth0, "linkTo", "week", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    ");
  hashContexts = {'classNames': depth0};
  hashTypes = {'classNames': "STRING"};
  options = {hash:{
    'classNames': ("btn")
  },inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "month", options) : helperMissing.call(depth0, "linkTo", "month", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  </div>\n\n  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "App.isMobile", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n</div>\n\n");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "App.isMobile", {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["_day-tile"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n  <li>");
  hashContexts = {'format': depth0};
  hashTypes = {'format': "STRING"};
  options = {hash:{
    'format': ("hh:mm")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.moment || depth0.moment),stack1 ? stack1.call(depth0, "start.content", options) : helperMissing.call(depth0, "moment", "start.content", options))));
  data.buffer.push(" | ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</li>\n");
  return buffer;
  }

  data.buffer.push("<header class=\"page-header\">\n  <h1>");
  hashContexts = {'format': depth0};
  hashTypes = {'format': "STRING"};
  options = {hash:{
    'format': ("MM DD, YYYY")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.moment || depth0.moment),stack1 ? stack1.call(depth0, "_date.content", options) : helperMissing.call(depth0, "moment", "_date.content", options))));
  data.buffer.push("</h1>\n</header>\n<ul>\n");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "filteredEvents", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</ul>");
  return buffer;
  
});

Ember.TEMPLATES["active-filters"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<!-- partial \"active-filters\" -->\n");
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n      <li><a href=\"\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a></li>\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Filters");
  }

  data.buffer.push("\n");
  data.buffer.push("\n<aside class=\"pane side-pane filter-pane\">\n  <section class=\"pane-body\">\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet || depth0.outlet),stack1 ? stack1.call(depth0, "dateRangePicker", options) : helperMissing.call(depth0, "outlet", "dateRangePicker", options))));
  data.buffer.push("\n    ");
  data.buffer.push("\n    <h3>Categories</h3>\n    <div class=\"sidebar-nav\">\n    <ul class=\"nav nav-list\">\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "categories", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </ul>\n    </div>\n  </section>\n</aside>\n\n<section class=\"pane main-pane\">\n  <header class=\"pane-header row-fluid\">\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.view.call(depth0, "view.FilterToggle", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    ");
  data.buffer.push("\n  </header>\n  <section class=\"pane-body\">\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  </section>\n</section>\n\n");
  data.buffer.push("\n");
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["categories/control-list"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.view.call(depth0, "VU.CategoryButtonView", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

  data.buffer.push("\n<h3>Categories</h3>\n<div class=\"btn-group btn-group-vertical\">\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controllers.application.categories", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["categories"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.view.call(depth0, "VU.CategoryButtonView", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

  data.buffer.push("\n<h3>Categories</h3>\n<div class=\"btn-group btn-group-vertical\">\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controllers.application.categories", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["event"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push(" - ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date || depth0.date),stack1 ? stack1.call(depth0, "endDate", options) : helperMissing.call(depth0, "date", "endDate", options))));
  return buffer;
  }

function program3(depth0,data) {
  
  var stack1, hashTypes, hashContexts, options;
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.showdown || depth0.showdown),stack1 ? stack1.call(depth0, "description", options) : helperMissing.call(depth0, "showdown", "description", options))));
  }

function program5(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n  <a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">More Information &nbsp;&gt;&gt;</a>\n");
  return buffer;
  }

  data.buffer.push("<section>\n  <h3>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h3>\n  <p>\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date || depth0.date),stack1 ? stack1.call(depth0, "startDate", options) : helperMissing.call(depth0, "date", "startDate", options))));
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isMultiDay", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    <br />\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.time || depth0.time),stack1 ? stack1.call(depth0, "start", options) : helperMissing.call(depth0, "time", "start", options))));
  data.buffer.push(" - ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.time || depth0.time),stack1 ? stack1.call(depth0, "end", options) : helperMissing.call(depth0, "time", "end", options))));
  data.buffer.push("\n  </p>\n  <p><b>Location: </b>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "location", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "description", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</section>\n<footer>\n");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "url", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</footer>\n");
  return buffer;
  
});

Ember.TEMPLATES["events/date-range-picker"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("\n<h3>Date Range</h3>\n<div class=\"daterangepicker-report-range\">\n  <i class=\"icon-calendar icon-large\"></i>\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.log.call(depth0, "controller", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.log.call(depth0, "context", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  <span>");
  hashContexts = {'format': depth0};
  hashTypes = {'format': "STRING"};
  options = {hash:{
    'format': ("MMM D, YY")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.moment || depth0.moment),stack1 ? stack1.call(depth0, "start", options) : helperMissing.call(depth0, "moment", "start", options))));
  data.buffer.push(" - ");
  hashContexts = {'format': depth0};
  hashTypes = {'format': "STRING"};
  options = {hash:{
    'format': ("MMM D, YY")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.moment || depth0.moment),stack1 ? stack1.call(depth0, "end", options) : helperMissing.call(depth0, "moment", "end", options))));
  data.buffer.push("</span>\n  <b class=\"caret\"></b>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["events"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("List");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Day");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Week");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("Month");
  }

  data.buffer.push("<header class=\"events-header\">\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "calendar-svg", options) : helperMissing.call(depth0, "partial", "calendar-svg", options))));
  data.buffer.push("\n<div class=\"btn-group pull-right\">\n");
  hashContexts = {'class': depth0,'tagName': depth0};
  hashTypes = {'class': "STRING",'tagName': "STRING"};
  options = {hash:{
    'class': ("btn"),
    'tagName': ("button")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "events.index", options) : helperMissing.call(depth0, "link-to", "events.index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  hashContexts = {'class': depth0,'tagName': depth0};
  hashTypes = {'class': "STRING",'tagName': "STRING"};
  options = {hash:{
    'class': ("btn"),
    'tagName': ("button")
  },inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "events.day", options) : helperMissing.call(depth0, "link-to", "events.day", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  hashContexts = {'class': depth0,'tagName': depth0};
  hashTypes = {'class': "STRING",'tagName': "STRING"};
  options = {hash:{
    'class': ("btn"),
    'tagName': ("button")
  },inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "events.week", options) : helperMissing.call(depth0, "link-to", "events.week", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  hashContexts = {'class': depth0,'tagName': depth0};
  hashTypes = {'class': "STRING",'tagName': "STRING"};
  options = {hash:{
    'class': ("btn"),
    'tagName': ("button")
  },inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "events.month", options) : helperMissing.call(depth0, "link-to", "events.month", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</div>\n</header>\n<div class=\"events-body\">\n");
  hashContexts = {'contentBinding': depth0};
  hashTypes = {'contentBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.EventsListView", {hash:{
    'contentBinding': ("controller.content")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["events/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;


  hashContexts = {'contentBinding': depth0};
  hashTypes = {'contentBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.EventsListView", {hash:{
    'contentBinding': ("controller.arrangedContent")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["events/list-row"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n  ");
  hashContexts = {'format': depth0};
  hashTypes = {'format': "STRING"};
  options = {hash:{
    'format': ("MMM DD, YYYY hh:mm a")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.moment || depth0.moment),stack1 ? stack1.call(depth0, "start", options) : helperMissing.call(depth0, "moment", "start", options))));
  data.buffer.push(" - ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  }

  data.buffer.push("\n<div class=\"well\">\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "event", "", options) : helperMissing.call(depth0, "linkTo", "event", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["filter-pane"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.view.call(depth0, "VU.CategoryButtonView", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

  data.buffer.push("<aside class=\"pane side-pane filter-pane\">\n  <section class=\"pane-body\">\n    <h3>Date Range</h3>\n    <div class=\"daterangepicker-report-range\">\n      <i class=\"icon-calendar icon-large\"></i>\n      <span>");
  hashContexts = {'format': depth0};
  hashTypes = {'format': "STRING"};
  options = {hash:{
    'format': ("MMMM D, YYYY")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.moment || depth0.moment),stack1 ? stack1.call(depth0, "view.start", options) : helperMissing.call(depth0, "moment", "view.start", options))));
  data.buffer.push(" - ");
  hashContexts = {'format': depth0};
  hashTypes = {'format': "STRING"};
  options = {hash:{
    'format': ("MMMM D, YYYY")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.moment || depth0.moment),stack1 ? stack1.call(depth0, "view.end", options) : helperMissing.call(depth0, "moment", "view.end", options))));
  data.buffer.push("</span>\n      <b class=\"caret\"></b>\n    </div>\n    <h3>Categories</h3>\n    <div class=\"btn-group btn-group-vertical\">\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "controllers.application.categories", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </div>\n  </section>\n</aside>\n");
  return buffer;
  
});

Ember.TEMPLATES["month"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n    <tr>\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "week", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </tr>\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n      <td>\n        ");
  data.buffer.push("\n          ");
  data.buffer.push("\n        ");
  data.buffer.push("\n        <button type=\"button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectDay", "", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': (":btn :btn-block :btn-large isInMonth::disabled isSelected:active isToday:btn-warning:btn-primary hasEvents:has-events")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n          ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "stateValue", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </button>\n      </td>\n      ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "week", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n    <li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "day-tile", options) : helperMissing.call(depth0, "partial", "day-tile", options))));
  data.buffer.push("</li>\n  ");
  return buffer;
  }

  data.buffer.push("<button type=\"button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "lastMonth", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"btn btn-primary span1\">&lt;</button>\n<button type=\"button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "nextMonth", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"btn btn-primary span1 pull-right\">&gt;</button>\n<table class=\"table\">\n  <caption class=\"page-header\"><h1>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "stateValue", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h1></caption>\n  <thead>\n    <tr>\n      <th>Sunday</th>\n      <th>Monday</th>\n      <th>Tuesday</th>\n      <th>Wednesday</th>\n      <th>Thursday</th>\n      <th>Friday</th>\n      <th>Saturday</th>\n    </tr>\n  </thead>\n  <tbody>\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "week", "in", "tiles", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tbody>\n</table>\n<ul>\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "week", "in", "tiles", {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  
});

})();

(function() {

Em.Handlebars.registerBoundHelper('date', function(date) {
  var time;
  time = moment.unix(date);
  return time.format('MMMM D, YYYY');
});


})();

(function() {

var debug;

debug = 0;

Em.Handlebars.registerBoundHelper('moment', function(date, options) {
  var formatString;
  formatString = options.hash.format;
  return moment.unix(date).format(formatString);
});


})();

(function() {

Em.Handlebars.registerBoundHelper('showdown', function(text) {
  var e, result;
  try {
    result = (new Showdown.converter()).makeHtml(text.replace(/\\n|\\r/g, '\n'));
    return new Em.Handlebars.SafeString(result);
  } catch (_error) {
    e = _error;
    console.log('Something went horribly wrong with the Showdown plugin in the showdown Handlebars helper.');
    return 'Invalid input text';
  }
});


})();

(function() {

Em.Handlebars.registerBoundHelper('time', function(date) {
  var clone;
  date = moment.unix(date);
  clone = date.clone();
  if (clone.startOf('day').diff(date) === 0) {
    return 'midnight';
  } else if (clone.hour(12).diff(date) === 0) {
    return 'noon';
  } else {
    return date.format('hh:mm a');
  }
});


})();

(function() {

var mobileQuery;

window.App = Em.Application.create({
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  rootElement: '#VUCalendar',
  isReady: false,
  isMobile: false
});

if ((mobileQuery = typeof window.matchMedia === "function" ? window.matchMedia('(max-width: 979px)') : void 0)) {
  App.set('isMobile', mobileQuery.matches);
  mobileQuery.addListener(function(queryList) {
    return App.set('isMobile', queryList.matches);
  });
}

App.ready = function() {
  return App.set('isReady', true);
};


})();

(function() {

window.VU = Em.Namespace.create({
  VERSION: '0.0.1'
});


})();

(function() {

VU.ButtonView = Em.View.extend(Em.ViewTargetActionSupport, {
  tagName: 'button',
  classNames: ['btn', 'btn-primary', 'btn-giving'],
  actionContext: Em.computed.alias('context'),
  click: function() {
    return this.triggerAction();
  }
});


})();

(function() {

VU.BackButtonView = VU.ButtonView.extend({
  classNames: ['back-button'],
  actionContext: 'controller',
  action: 'popAppState'
});


})();

(function() {

VU.CategoryButtonView = VU.ButtonView.extend({
  filtersBinding: 'controller',
  target: Em.computed.alias('filters'),
  action: 'toggleCategory',
  classNameBindings: ['active'],
  active: Em.computed(function(key, value) {
    var categories, id;
    id = this.get('context.id');
    categories = this.get('filters.categories');
    return categories.contains(id);
  }).property('filters.categories.@each')
});


})();

(function() {

VU.SidePaneView = Em.View.extend({
  tagName: 'article',
  classNames: ['pane', 'side-pane'],
  closePane: function() {
    var $pane, deferred, right;
    $pane = $(this.get('element'));
    right = -$pane.outerWidth();
    deferred = $.Deferred();
    $pane.stop().animate({
      right: right
    }, function() {
      return deferred.resolve();
    });
    return deferred;
  },
  didInsertElement: function() {
    var $pane, right;
    $pane = $(this.get('element'));
    right = -$pane.outerWidth();
    return $pane.css({
      left: 'auto',
      right: right
    }).stop().animate({
      right: 0
    });
  }
});


})();

(function() {

VU.BitObject = Em.ArrayProxy.extend({
  mask: 0,
  content: Em.computed(function() {
    var ret;
    ret = Em.A();
    this.bitwiseFn(function(term, mask) {
      return ret.push(term);
    });
    return ret;
  }).property('mask'),
  add: function(id) {
    var mask;
    id = +id;
    mask = this.get('mask');
    if ((0 <= id && id < 31)) {
      mask |= 1 << id;
      this.set('mask', mask);
    }
    return this;
  },
  addArray: function(idArray) {
    var id, _i, _len;
    for (_i = 0, _len = idArray.length; _i < _len; _i++) {
      id = idArray[_i];
      this.add(id);
    }
    return this;
  },
  remove: function(id) {
    var mask;
    id = +id;
    mask = this.get('mask');
    if ((0 <= id && id < 31)) {
      mask &= ~(1 << id);
      this.set('mask', mask);
    }
    return this;
  },
  removeArray: function(idArray) {
    var id, _i, _len;
    for (_i = 0, _len = idArray.length; _i < _len; _i++) {
      id = idArray[_i];
      this.remove(id);
    }
    return this;
  },
  toggle: function(id) {
    if (this.has(id)) {
      this.remove(id);
    } else {
      this.add(id);
    }
    return this;
  },
  has: function(id) {
    return (this.get('mask') & 1 << +id) !== 0;
  },
  bitwiseFn: function(callback) {
    var mask, term;
    mask = this.get('mask');
    term = 0;
    while (mask > 0 && term < 31) {
      if (mask % 2 !== 0) {
        callback.call(this, term, mask);
      }
      mask >>= 1;
      term++;
    }
    return this;
  },
  toString: function() {
    var mask;
    mask = this.get('mask');
    return mask.toString.apply(mask, arguments);
  }
});

VU.BitObject.reopenClass({
  create: function(id, isMask) {
    var ret;
    if (isMask == null) {
      isMask = false;
    }
    ret = this._super();
    if (id != null) {
      if (Em.typeOf(id) === 'array') {
        ret.addArray(id);
      } else if (isMask) {
        ret.set('mask', id);
      } else {
        ret.add(id);
      }
      return ret;
    }
  }
});


})();

(function() {

App.Store = DS.Store.extend({
  revision: 12,
  adapter: DS.RESTAdapter.reopen({
    url: 'https://api.valpo.edu',
    namespace: 'eventPool2'
  })
});


})();

(function() {

DS.RESTAdapter.configure('plurals', {
  category: 'categories'
});

App.Category = DS.Model.extend({
  name: DS.attr('string')
});


})();

(function() {

App.ApplicationController = Em.Controller.extend({
  categories: Em.required(Array),
  lastRoute: null,
  currentRoute: null,
  lastPath: null,
  isReady: false,
  _routeChangeObserver: Em.beforeObserver(function(controller, property) {
    return this.set('lastRoute', this.get(property));
  }, 'currentRoute'),
  _pathChangeObserver: Em.beforeObserver(function(controller, property) {
    return this.set('lastPath', this.get(property));
  }, 'currentPath')
});


})();

(function() {

App.ApplicationView = Em.View.extend({
  classNames: ['row-fluid', 'pane', 'app-container'],
  bodyClassName: 'main-pane',
  filtersClassName: 'filter-pane',
  FilterToggle: VU.ButtonView.extend({
    classNames: ['filter-toggle'],
    action: 'showFilters',
    target: 'parentView',
    actionContext: Em.computed.alias('element')
  }),
  actions: {
    showFilters: function(buttonElement) {
      var $body, $button, $filters, $this, buttonWidth, filtersWidth, left, windowWidth;
      $this = $(this.get('element'));
      $body = $this.find('.' + this.get('bodyClassName'));
      $filters = $this.find('.' + this.get('filtersClassName'));
      $button = $(buttonElement);
      buttonWidth = $button.outerWidth(true);
      filtersWidth = $filters.outerWidth(true);
      windowWidth = $(window).width();
      left = parseInt($body.css('left'), 10) > 0 ? 0 : buttonWidth + filtersWidth > windowWidth ? windowWidth - buttonWidth : filtersWidth / $this.width() * 100 + '%';
      return $body.animate({
        left: left
      });
    }
  }
});


})();

(function() {

Em.Route.reopen({
  enter: function() {
    var routeName;
    routeName = this.get('routeName');
    if (/\.[^.]+$/.test(routeName)) {
      return this.controllerFor('application').set('currentRoute', routeName);
    }
  }
});

App.ApplicationRoute = Em.Route.extend({
  setupController: function(controller, model) {
    var categories;
    categories = App.Category.find({}).one('didLoad', categories, function() {
      return Em.run.scheduleOnce('actions', this, function() {
        return controller.set('isReady', true);
      });
    });
    return controller.set('categories', categories);
  },
  actions: {
    loadState: function(path, model) {
      if (model != null) {
        return this.transitionTo(path, model);
      } else {
        return this.transitionTo(path);
      }
    },
    reloadState: function(model) {
      var path;
      path = this.get('controller.currentRoute');
      return this.send('loadState', path, model);
    },
    popAppState: function(model) {
      var path;
      path = this.get('controller.lastRoute');
      return this.send('loadState', path, model);
    }
  }
});


})();

(function() {

var format;


})();

(function() {

DS.RESTAdapter.registerTransform('unixDate', {
  serialize: function(value) {
    return value.toString();
  },
  deserialize: function(value) {
    return moment(value).unix();
  }
});

App.Event = DS.Model.extend({
  start: DS.attr('unixDate'),
  end: DS.attr('unixDate'),
  isAllDay: DS.attr('boolean'),
  title: DS.attr('string'),
  location: DS.attr('string'),
  description: DS.attr('string'),
  url: DS.attr('string'),
  categories: DS.hasMany('App.Category')
});


})();

(function() {

var filterEvents;


})();

(function() {

filterEvents = function() {
  var content, events, filters;
  filters = this.get('controllers.filters');
  if (!filters.get('isReady')) {
    return;
  }
  Em.Logger.debug('-- EventsController#filterEvents: filtering content');
  content = this.get('content');
  events = content.filter(filters.matchEvent, filters);
  return this.set('filteredEvents', events);
};

App.EventsController = Em.ArrayController.extend({
  init: function() {
    this.addObserver('filteredEvents', this, function() {
      return this.send('reloadState');
    });
    return this._super.call(this, arguments);
  },
  sortAscending: true,
  sortProperties: ['start'],
  filteredEvents: Em.A([]),
  updateRange: function(start, end) {
    var model, range,
      _this = this;
    range = {
      start: start.unix(),
      end: end.unix()
    };
    model = App.Event.find(range);
    return model.one('didLoad', function() {
      console.log(_this);
      return _this.send('reloadState', model);
    });
  },
  start: Em.computed('arrangedContent.firstObject.start', function(key, value) {
    if (value != null) {
      return value;
    } else {
      return this.get('arrangedContent.firstObject.start');
    }
  }),
  end: Em.computed('arrangedContent.lastObject.end', function(key, value) {
    if (value != null) {
      return value;
    } else {
      return this.get('arrangedContent.lastObject.end');
    }
  }),
  actions: {
    reloadEvents: function() {
      var filters, model, range,
        _this = this;
      filters = this.get('controllers.filters');
      range = filters.getProperties('start', 'end');
      model = App.Event.find(range);
      return model.one('didLoad', function() {
        return _this.set('model', model);
      });
    },
    filterEvents: Em.observer(filterEvents, 'content', 'controllers.filters.isReady')
  }
});


})();

(function() {

App.EventsIndexController = Em.ArrayController.extend({
  needs: ['events'],
  sortAscending: true,
  sortProperties: ['start', 'end']
});


})();

(function() {

App.EventsDateRangePickerView = Em.View.extend({
  didInsertElement: function() {
    var $el, controller, _this;
    $el = this.$(this.get('element')).find('.daterangepicker-report-range');
    _this = this;
    controller = this.get('controller');
    return $el.daterangepicker({
      ranges: {
        'Today': [moment().startOf('day'), moment().endOf('day')],
        'Tomorrow': [moment().add('days', 1).startOf('day'), moment().add('days', 1).endOf('day')],
        'This Week': [moment().startOf('week'), moment().endOf('week')],
        'Next Week': [moment().add('weeks', 1).startOf('week'), moment().add('weeks', 1).endOf('week')],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Next Month': [moment().add('months', 1).startOf('month'), moment().add('months', 1).endOf('month')]
      }
    }, $.proxy(controller.updateRange, controller));
  }
});


})();

(function() {

App.EventsView = Em.View.extend({
  height: Em.computed(function(property, value) {
    if (value != null) {
      return value;
    } else {
      return 300;
    }
  }),
  didInsertElement: function() {
    return this.set('height', $(this.get('element')).height());
  }
});


})();

(function() {

App.ListView = Em.ListView.extend({
  rowTemplateName: Em.required(String),
  rowCount: 30,
  baseRowHeight: 70,
  stretchToFill: true,
  isMobileBinding: 'App.isMobile',
  contentBinding: 'controller',
  willInsertElement: function() {},
  itemViewClass: Em.ListItemView.extend({
    templateName: Em.computed.alias('parentView.rowTemplateName')
  })
});


})();

(function() {

App.EventsListView = App.ListView.extend({
  init: function() {
    window.ListView = this;
    return this._super.apply(this, arguments);
  },
  rowTemplateName: 'events/list-row',
  height: 600,
  rowHeight: 65
});


})();

(function() {

format = 'MM-DD-YYYY';

App.EventsRoute = Em.Route.extend({
  serialize: function(model, params) {
    var key, m, ret, _i, _len;
    ret = {};
    if (model.get('length') < 1) {
      m = moment();
      ret['start'] = m.startOf('day').format(format);
      ret['end'] = m.endOf('day').format(format);
    } else {
      for (_i = 0, _len = params.length; _i < _len; _i++) {
        key = params[_i];
        ret[key] = (function() {
          switch (key) {
            case 'start':
              return moment.unix(model.get('firstObject.start')).format(format);
            case 'end':
              return moment.unix(model.get('lastObject.end')).format(format);
          }
        })();
      }
    }
    return ret;
  },
  model: function(params) {
    var range;
    range = {
      start: moment(params.start, format).unix(),
      end: moment(params.end, format).unix()
    };
    return App.Event.find(range);
  },
  renderTemplate: function(controller, model) {
    this.render('events', {
      into: 'application',
      outlet: 'main',
      controller: controller
    });
    return this.render('events/date-range-picker', {
      into: 'application',
      outlet: 'dateRangePicker',
      controller: controller
    });
  },
  actions: {
    showEventDetailPane: function(context) {
      return this.transitionTo('event', context);
    }
  }
});

App.EventsIndexRoute = Em.Route.extend({
  model: function() {
    return this.modelFor('events');
  }
});


})();

(function() {

App.EventController = Em.ObjectController.extend({
  startDate: Em.computed(function() {
    return moment(this.get('start'));
  }).property('start'),
  endDate: Em.computed(function() {
    return moment(this.get('end'));
  }).property('end'),
  isMultiDay: Em.computed(function() {
    var end, start;
    start = this.get('startDate').date();
    end = this.get('endDate').date();
    return start !== end;
  }).property('endDate'),
  actions: {
    closePane: function(view) {
      var _this = this;
      return view.closePane().done(function() {
        return _this.send('popAppState');
      });
    }
  }
});


})();

(function() {

App.EventView = Em.View.extend();


})();

(function() {

App.EventRoute = Em.Route.extend();


})();

(function() {

App.Router.map(function() {
  this.resource('events', {
    path: 'start/:start/end/:end'
  }, function() {
    this.route('month');
    this.route('week');
    return this.route('day');
  });
  return this.resource('event', {
    path: 'event/:event_id'
  }, function() {});
});


})();