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
  data.buffer.push("\n<div class=\"row\">\n  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render || depth0.render),stack1 ? stack1.call(depth0, "filters.update", options) : helperMissing.call(depth0, "render", "filters.update", options))));
  data.buffer.push("\n</div>\n");
  return buffer;
  }

  data.buffer.push("<div class=\"row\">\n  <div class=\"btn-group pull-right\">\n    ");
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

Ember.TEMPLATES["_crying-face"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 17.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n   width=\"373.826px\" height=\"376.51px\" viewBox=\"0 0 373.826 376.51\" enable-background=\"new 0 0 373.826 376.51\"\n   xml:space=\"preserve\">\n<g display=\"none\">\n  \n    <image display=\"inline\" overflow=\"visible\" width=\"428\" height=\"530\" id=\"me0FGI\" xlink:href=\"data:image/jpeg;base64,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\ntCAVD/sj/9k=\" transform=\"matrix(1 0 0 1 -25.8859 -23.5973)\">\n  </image>\n</g>\n<circle display=\"none\" fill=\"none\" stroke=\"#000000\" cx=\"188.939\" cy=\"188.584\" r=\"198.993\"/>\n<circle fill=\"none\" stroke=\"#A58329\" stroke-width=\"4\" cx=\"188.939\" cy=\"188.584\" r=\"176.161\"/>\n<path fill=\"none\" stroke=\"#A58329\" stroke-width=\"4\" d=\"M144.114,172.811c0,11.549-9.402,20.902-21,20.902l0,0\n  c-11.598,0-21-9.353-21-20.902v-40.816c0-11.549,9.402-20.902,21-20.902l0,0c11.598,0,21,9.353,21,20.902V172.811z\"/>\n<path fill=\"none\" stroke=\"#A58329\" stroke-width=\"4\" d=\"M267.114,173.189c0,11.762-9.402,21.289-21,21.289l0,0\n  c-11.598,0-21-9.527-21-21.289v-41.572c0-11.762,9.402-21.289,21-21.289l0,0c11.598,0,21,9.527,21,21.289V173.189z\"/>\n<path fill=\"none\" stroke=\"#A58329\" stroke-width=\"4\" d=\"M186.578,234.899c19.313,0,38.818,3.467,56.366,11.692\n  c11.169,5.235,46.184,26.908,32.227,43.338c-11.798,13.888-25.635-1.138-37.848-7.103c-15.904-7.767-33.012-11.929-50.753-11.616\n  c-16.653,0.293-32.798,5.115-47.515,12.751c-11.612,6.025-25.852,17.819-37.712,5.301c-8.054-8.054,4.698-20.806,10.067-24.832\n  C116.779,260.403,148.321,234.899,186.578,234.899z\"/>\n<path display=\"none\" fill=\"none\" stroke=\"#000000\" d=\"M114.114,226.903h-0.151c-1.297,0-2.349-1.052-2.349-2.349v-29.302\n  c0-1.297,1.052-2.349,2.349-2.349h0.302c1.297,0,2.349,1.052,2.349,2.349v29.302c0,1.297-1.127,2.349-2.425,2.349\"/>\n</svg>\n");
  
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
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("\n");
  data.buffer.push("\n<aside ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":st-menu view.transitionEffect")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" ");
  hashContexts = {'target': depth0,'on': depth0};
  hashTypes = {'target': "ID",'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeMenu", {hash:{
    'target': ("view"),
    'on': ("mouseLeave")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n  <h2>Categories</h2>\n  ");
  hashContexts = {'action': depth0,'categories': depth0,'activeCategories': depth0};
  hashTypes = {'action': "STRING",'categories': "ID",'activeCategories': "ID"};
  options = {hash:{
    'action': ("updateCategories"),
    'categories': ("allCategories"),
    'activeCategories': ("activeCategories")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['category-select-wrapper'] || depth0['category-select-wrapper']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "category-select-wrapper", options))));
  data.buffer.push("\n</aside>\n\n");
  data.buffer.push("\n<div class=\"st-pusher\">\n  <section class=\"st-content\">\n    <header class=\"pane-header row-fluid\">\n      ");
  hashContexts = {'isOpen': depth0,'isMobile': depth0};
  hashTypes = {'isOpen': "ID",'isMobile': "ID"};
  options = {hash:{
    'isOpen': ("view.isOpen"),
    'isMobile': ("view.isMobile")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['filter-toggle'] || depth0['filter-toggle']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "filter-toggle", options))));
  data.buffer.push("\n    </header>\n    <div class=\"pane-body\">\n      ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </div>\n  </section>\n</div>\n</section>\n");
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

Ember.TEMPLATES["components/archive-item"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date || depth0.date),stack1 ? stack1.call(depth0, "content.start", options) : helperMissing.call(depth0, "date", "content.start", options))));
  data.buffer.push(", ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.time || depth0.time),stack1 ? stack1.call(depth0, "content.start", options) : helperMissing.call(depth0, "time", "content.start", options))));
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isMinDuration", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push(" - ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date || depth0.date),stack1 ? stack1.call(depth0, "content.start", options) : helperMissing.call(depth0, "date", "content.start", options))));
  data.buffer.push(", ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.time || depth0.time),stack1 ? stack1.call(depth0, "content.end", options) : helperMissing.call(depth0, "time", "content.end", options))));
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.time || depth0.time),stack1 ? stack1.call(depth0, "content.start", options) : helperMissing.call(depth0, "time", "content.start", options))));
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isMinDuration", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push(" - ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.time || depth0.time),stack1 ? stack1.call(depth0, "content.end", options) : helperMissing.call(depth0, "time", "content.end", options))));
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n    <div class=\"col-sm-3\"><strong>Location: </strong>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "content.location", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n  ");
  return buffer;
  }

  data.buffer.push("\n<div class=\"row\">\n  <div class=\"col-sm-5\">\n    <strong>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.titleize || depth0.titleize),stack1 ? stack1.call(depth0, "content.title", options) : helperMissing.call(depth0, "titleize", "content.title", options))));
  data.buffer.push("</strong>\n  </div>\n  <div class=\"col-sm-3\">\n  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isMultiDay", {hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  </div>\n  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "content.location", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/archive-list"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n");
  data.buffer.push("\n  ");
  hashContexts = {'content': depth0,'animateBinding': depth0,'action': depth0};
  hashTypes = {'content': "ID",'animateBinding': "ID",'action': "STRING"};
  options = {hash:{
    'content': (""),
    'animateBinding': ("animate"),
    'action': ("displayItem")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['archive-item'] || depth0['archive-item']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "archive-item", options))));
  data.buffer.push("\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "yield", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  }

  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "items", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["components/button-control"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "yield", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  return buffer;
  
});

Ember.TEMPLATES["components/category-select-wrapper"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n  <li>\n    ");
  hashContexts = {'activeCategories': depth0,'category': depth0,'name': depth0};
  hashTypes = {'activeCategories': "ID",'category': "ID",'name': "ID"};
  options = {hash:{
    'activeCategories': ("activeCategories"),
    'category': ("category"),
    'name': ("category.name")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['category-select'] || depth0['category-select']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "category-select", options))));
  data.buffer.push("\n  </li>\n");
  return buffer;
  }

  data.buffer.push("\n<ul class=\"unstyled\">\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "category", "in", "categories", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/category-select"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.titleize || depth0.titleize),stack1 ? stack1.call(depth0, "name", options) : helperMissing.call(depth0, "titleize", "name", options))));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["components/date-picker"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n      <th>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</th>\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n    <tr>\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "day", "in", "week", {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </tr>\n  ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "day", {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n        ");
  hashContexts = {'format': depth0,'tagName': depth0,'date': depth0,'action': depth0};
  hashTypes = {'format': "STRING",'tagName': "STRING",'date': "ID",'action': "STRING"};
  options = {hash:{
    'format': ("DD"),
    'tagName': ("td"),
    'date': ("day"),
    'action': ("selectDate")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['pager-item'] || depth0['pager-item']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "pager-item", options))));
  data.buffer.push("\n        ");
  data.buffer.push("\n      ");
  return buffer;
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n        <td class=\"invalid-day\"></td>\n      ");
  }

  data.buffer.push("<header>\n");
  data.buffer.push("\n  ");
  hashContexts = {'range': depth0,'date': depth0,'format': depth0,'shortFormat': depth0};
  hashTypes = {'range': "STRING",'date': "ID",'format': "STRING",'shortFormat': "STRING"};
  options = {hash:{
    'range': ("month"),
    'date': ("currentMonth"),
    'format': ("MMMM"),
    'shortFormat': ("MMM")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['range-pager'] || depth0['range-pager']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "range-pager", options))));
  data.buffer.push("\n</header>\n\n<table class=\"calendar\">\n  <thead>\n    <tr>\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "dayNames", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </tr>\n  </thead>\n\n  <tbody>\n  ");
  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "week", "in", "weeks", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  </tbody>\n\n</table>");
  return buffer;
  
});

Ember.TEMPLATES["components/filter-toggle"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  return buffer;
  
});

Ember.TEMPLATES["components/modal-window"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "yield", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n  ");
  hashContexts = {'templateName': depth0};
  hashTypes = {'templateName': "ID"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, {hash:{
    'templateName': ("contextName")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  }

  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "yield", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["components/pager-item"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.moment || depth0.moment),stack1 ? stack1.call(depth0, "date", "format", options) : helperMissing.call(depth0, "moment", "date", "format", options))));
  data.buffer.push("\n");
  return buffer;
  }

  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "title", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["components/range-pager"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<ul class=\"pager\">\n  <li class=\"previous\">\n    ");
  hashContexts = {'format': depth0,'tagName': depth0,'date': depth0,'action': depth0};
  hashTypes = {'format': "ID",'tagName': "STRING",'date': "ID",'action': "STRING"};
  options = {hash:{
    'format': ("_format"),
    'tagName': ("a"),
    'date': ("previousDate"),
    'action': ("changeDate")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['pager-item'] || depth0['pager-item']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "pager-item", options))));
  data.buffer.push("\n  </li>\n  <li>\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.moment || depth0.moment),stack1 ? stack1.call(depth0, "date", "_format", options) : helperMissing.call(depth0, "moment", "date", "_format", options))));
  data.buffer.push("\n  </li>\n  <li class=\"next\">\n    ");
  hashContexts = {'format': depth0,'tagName': depth0,'date': depth0,'action': depth0};
  hashTypes = {'format': "ID",'tagName': "STRING",'date': "ID",'action': "STRING"};
  options = {hash:{
    'format': ("_format"),
    'tagName': ("a"),
    'date': ("nextDate"),
    'action': ("changeDate")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['pager-item'] || depth0['pager-item']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "pager-item", options))));
  data.buffer.push("\n  </li>\n</ul>");
  return buffer;
  
});

Ember.TEMPLATES["date-range-picker"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("\n<h3>Date Range</h3>\n<div class=\"daterangepicker-report-range\">\n  <i class=\"icon-calendar icon-large\"></i>\n  <span>");
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

Ember.TEMPLATES["day"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <div class=\"well\">\n        <h3>There Are no Featured Events today.</h3>\n        ");
  data.buffer.push("\n        </div>\n      ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n    <h2>All Day Events</h2>\n    ");
  hashContexts = {'items': depth0,'load': depth0,'show': depth0};
  hashTypes = {'items': "ID",'load': "STRING",'show': "STRING"};
  options = {hash:{
    'items': ("allDayEvents"),
    'load': ("transitionToEvent"),
    'show': ("showEvent")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['archive-list'] || depth0['archive-list']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "archive-list", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n      <div class=\"well\">\n      <h3>Your search for events on ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date || depth0.date),stack1 ? stack1.call(depth0, "currentDay", options) : helperMissing.call(depth0, "date", "currentDay", options))));
  data.buffer.push(" rendered no results.</h3>\n      ");
  data.buffer.push("\n      </div>\n    ");
  return buffer;
  }

  data.buffer.push("<header class=\"page-header events-header\">\n");
  data.buffer.push("\n<h1>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.moment || depth0.moment),stack1 ? stack1.call(depth0, "currentDay", "MMMM D, YYYY", options) : helperMissing.call(depth0, "moment", "currentDay", "MMMM D, YYYY", options))));
  data.buffer.push("</h1>\n</header>\n<div class=\"events-body\">\n  <div class=\"row\">\n    ");
  hashContexts = {'value': depth0,'class': depth0};
  hashTypes = {'value': "ID",'class': "STRING"};
  options = {hash:{
    'value': ("currentDay"),
    'class': ("col-sm-4")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['date-picker'] || depth0['date-picker']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "date-picker", options))));
  data.buffer.push("\n    <div class=\"col-sm-8\">\n      <h2>Featured Events</h2>\n      ");
  hashContexts = {'items': depth0,'load': depth0,'show': depth0};
  hashTypes = {'items': "ID",'load': "STRING",'show': "STRING"};
  options = {hash:{
    'items': ("featuredEvents"),
    'load': ("transitionToEvent"),
    'show': ("showEvent")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['archive-list'] || depth0['archive-list']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "archive-list", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </div>\n  </div>\n\n  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "hasAllDayEvents", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n  <section class=\"events-list\">\n    <header class=\"page-header\">\n      <h2>Events List</h2>\n    </header>\n    ");
  hashContexts = {'items': depth0,'load': depth0,'show': depth0};
  hashTypes = {'items': "ID",'load': "STRING",'show': "STRING"};
  options = {hash:{
    'items': ("filteredEvents"),
    'load': ("transitionToEvent"),
    'show': ("showEvent")
  },inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['archive-list'] || depth0['archive-list']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "archive-list", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  </section>\n\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["event"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date || depth0.date),stack1 ? stack1.call(depth0, "content.start", options) : helperMissing.call(depth0, "date", "content.start", options))));
  data.buffer.push(", ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.time || depth0.time),stack1 ? stack1.call(depth0, "content.start", options) : helperMissing.call(depth0, "time", "content.start", options))));
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isMinDuration", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push(" - ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date || depth0.date),stack1 ? stack1.call(depth0, "content.start", options) : helperMissing.call(depth0, "date", "content.start", options))));
  data.buffer.push(", ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.time || depth0.time),stack1 ? stack1.call(depth0, "content.end", options) : helperMissing.call(depth0, "time", "content.end", options))));
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date || depth0.date),stack1 ? stack1.call(depth0, "content.start", options) : helperMissing.call(depth0, "date", "content.start", options))));
  data.buffer.push("\n    <br />\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.time || depth0.time),stack1 ? stack1.call(depth0, "content.start", options) : helperMissing.call(depth0, "time", "content.start", options))));
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isMinDuration", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push(" - ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.time || depth0.time),stack1 ? stack1.call(depth0, "content.end", options) : helperMissing.call(depth0, "time", "content.end", options))));
  return buffer;
  }

function program7(depth0,data) {
  
  var stack1, hashTypes, hashContexts, options;
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.showdown || depth0.showdown),stack1 ? stack1.call(depth0, "content.description", options) : helperMissing.call(depth0, "showdown", "content.description", options))));
  }

function program9(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n  <a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("content.url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">More Information &nbsp;&gt;&gt;</a>\n");
  return buffer;
  }

  data.buffer.push("<section>\n  <h3>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.titleize || depth0.titleize),stack1 ? stack1.call(depth0, "content.title", options) : helperMissing.call(depth0, "titleize", "content.title", options))));
  data.buffer.push("</h3>\n  <p>\n  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isMultiDay", {hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  </p>\n  <p><b>Location: </b>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "content.location", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "content.description", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</section>\n<footer>\n");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "content.url", {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
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
    'contentBinding': ("controller.arrangedContent")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
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

Ember.TEMPLATES["filters"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
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
  data.buffer.push(" class=\"btn btn-primary col-sm-1\">&lt;</button>\n<button type=\"button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "nextMonth", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"btn btn-primary col-sm-1 pull-right\">&gt;</button>\n<table class=\"table\">\n  <caption class=\"page-header\"><h1>");
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
  time = moment(date);
  return time.format('MMMM D, YYYY');
});


})();

(function() {

Em.Handlebars.registerBoundHelper('moment', function(date, format) {
  return moment(date).format(format);
});


})();

(function() {

var linkRegex, linkRplStr, nlRegex, nlRplStr;

nlRegex = /\\n|\\r/g;

nlRplStr = "\n";

linkRegex = /(\s+|^)(https?:\/\/[^<\s]*)(.*(?:$|\s+))/g;

linkRplStr = "$1<a href=\"$2\">$2</a>$3";

Em.Handlebars.registerBoundHelper('showdown', function(text) {
  var e, result;
  try {
    result = text.replace(nlRegex, nlRplStr);
    result = (new Showdown.converter()).makeHtml(result);
    result.replace(linkRegex, function() {
      console.log(arguments);
      return "";
    });
    result = result.replace(linkRegex, linkRplStr);
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
  var clone, time;
  time = moment(date);
  clone = time.clone();
  if (clone.startOf('day').diff(time) === 0) {
    return 'Midnight';
  } else if (clone.hour(12).diff(time) === 0) {
    return 'Noon';
  } else {
    return time.format('h:mm a');
  }
});


})();

(function() {

var shortWords, titleize;

shortWords = Ember.A(['of', 'a', 'the', 'and', 'an', 'or', 'nor', 'but', 'is', 'if', 'then', 'else', 'when', 'at', 'from', 'by', 'on', 'off', 'for', 'in', 'out', 'over', 'to', 'into', 'with']);

titleize = function(str) {
  var strArray;
  strArray = str.split(' ');
  strArray = Ember.ArrayPolyfills.map.call(strArray, function(slug, index) {
    if (index === 0 || !shortWords.contains(slug)) {
      return Ember.String.capitalize(slug);
    } else {
      return slug;
    }
  });
  return strArray.join(' ');
};

Ember.Handlebars.registerBoundHelper('titleize', titleize);


})();

(function() {

var mobileQuery;

window.App = Em.Application.create({
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

App.EventControlMixin = Em.Mixin.create({
  startDate: Em.computed('content.start', function() {
    return moment(this.get('content.start'));
  }),
  endDate: Em.computed('content.end', function() {
    return moment(this.get('content.end'));
  }),
  minDuration: Em.computed(function() {
    var minutes;
    minutes = 6e4;
    return 5 * minutes;
  }),
  isMultiDay: Em.computed(function() {
    var end, endDate, start, startDate;
    start = this.get('startDate');
    end = this.get('endDate');
    startDate = start.date();
    endDate = end.date();
    return startDate !== endDate;
  }),
  isMinDuration: Em.computed(function() {
    var diff, end, minDiff, start;
    start = this.get('startDate');
    end = this.get('endDate');
    diff = end.diff(start);
    minDiff = this.get('minDuration');
    return diff > minDiff;
  }),
  isFeatured: Em.computed.alias('content.isFeatured')
});


})();

(function() {

App.ModalWindowComponent = Em.Component.extend(App.EventControlMixin, {
  templateName: "event",
  classNames: ['modal', 'fade', 'in'],
  "yield": false
});


})();

(function() {

App.ButtonControlComponent = Em.Component.extend({
  tagName: 'button',
  classNames: ['btn', 'btn-primary'],
  click: function() {
    return this.sendAction('action', this);
  }
});


})();

(function() {

App.FilterToggleComponent = App.ButtonControlComponent.extend({
  classNames: ['btn-giving', 'filter-toggle'],
  classNameBindings: ['isOpen:active'],
  title: 'Filters',
  isOpen: Em.required(Boolean),
  isMobile: Em.required(Boolean),
  click: function() {
    return this.toggleProperty('isOpen');
  },
  mouseEnter: function() {
    var isMobile;
    isMobile = this.get('isMobile');
    if (!isMobile) {
      return this.set('isOpen', true);
    }
  }
});


})();

(function() {

App.CategorySelectComponent = Em.Component.extend({
  tagName: 'div',
  name: Em.required(String),
  category: Em.required('Category'),
  activeCategories: Em.required('Category Array'),
  classNames: ['category-select'],
  classNameBindings: ['active'],
  active: Em.computed('activeCategories.length', function() {
    var _ref;
    return !!((_ref = this.get('activeCategories')) != null ? _ref.contains(this.get('category.id')) : void 0);
  }),
  addCategory: function() {
    var _ref;
    return (_ref = this.get('activeCategories')) != null ? _ref.addObject(this.get('category.id')) : void 0;
  },
  removeCategory: function() {
    return this.get('activeCategories').removeObject(this.get('category.id'));
  },
  click: function(event) {
    event.preventDefault();
    if (this.get('active')) {
      return this.removeCategory();
    } else {
      return this.addCategory();
    }
  }
});


})();

(function() {

App.CategorySelectWrapperComponent = Em.Component.extend({
  categories: Em.required(Array),
  activeCategories: Em.required(Array),
  displayList: Em.computed('activeCategories', function() {}),
  click: function() {
    var activeCategories;
    activeCategories = this.get('activeCategories');
    return this.sendAction('action', activeCategories);
  }
});


})();

(function() {

var Day, buildDaysArrayForMonth, buildNullArray, computed, groupByWeeks, inRange;


})();

(function() {

App.PagerItemComponent = Em.Component.extend({
  classNames: ['pager-item'],
  format: 'ddd, MMM Do',
  title: null,
  date: Em.computed(function(key, value) {
    if (value != null) {
      return moment(value);
    } else {
      return void 0;
    }
  }),
  click: function(event) {
    var date;
    event.preventDefault();
    date = this.get('date');
    return this.sendAction('action', date);
  }
});


})();

(function() {

App.RangePagerComponent = Em.Component.extend({
  range: Em.required(String),
  isMobileBinding: 'App.isMobile',
  format: 'MMMM',
  shortFormat: Em.computed.defaultTo('format'),
  _format: Em.computed('isMobile', function() {
    if (this.get('isMobile')) {
      return this.get('shortFormat');
    } else {
      return this.get('format');
    }
  }),
  today: moment(),
  isToday: Em.computed('date', function() {
    return this.get('today').date() === this.get('date').date();
  }),
  date: Em.computed(function(key, value) {
    if (value != null) {
      return moment(value);
    } else {
      return void 0;
    }
  }),
  nextDate: Em.computed('date', function() {
    var date, range;
    date = this.get('date');
    range = this.get('range');
    return date.clone().add(range, 1);
  }),
  previousDate: Em.computed('date', function() {
    var date, range;
    date = this.get('date');
    range = this.get('range');
    return date.clone().subtract(range, 1);
  }),
  actions: {
    changeDate: function(date) {
      return this.set('date', date);
    }
  }
});


})();

(function() {

computed = Ember.computed;

inRange = function(lower, upper) {
  return function(each, index) {
    return index >= lower && index < upper;
  };
};

Day = Ember.Object.extend({
  moment: null,
  date: computed("moment", function() {
    return this.get("moment").date();
  })
});

buildDaysArrayForMonth = function(moment) {
  var currentDay, daysArray, firstDay, lastDay;
  daysArray = Em.A();
  firstDay = moment.clone().startOf("month");
  lastDay = moment.clone().endOf("month");
  currentDay = firstDay.clone();
  while (currentDay.isBefore(lastDay)) {
    daysArray.pushObject(currentDay);
    currentDay = currentDay.clone().add("days", 1);
  }
  return daysArray;
};

buildNullArray = function(length) {
  var i, nullAr;
  nullAr = [];
  i = 0;
  while (i < length) {
    nullAr.push(null);
    i++;
  }
  return nullAr;
};

groupByWeeks = function(array) {
  var grouped;
  grouped = Em.A([]);
  grouped.pushObject(array.filter(inRange(0, 7)));
  grouped.pushObject(array.filter(inRange(7, 14)));
  grouped.pushObject(array.filter(inRange(14, 21)));
  grouped.pushObject(array.filter(inRange(21, 28)));
  grouped.pushObject(array.filter(inRange(28, 35)));
  grouped.pushObject(array.filter(inRange(35, 42)));
  return grouped;
};

App.DatePickerComponent = Ember.Component.extend({
  classNames: ['date-picker'],
  currentMonth: moment(),
  value: null,
  dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  currentMonthName: computed("currentMonth", function() {
    var currentMonth, monthName;
    currentMonth = this.get("currentMonth");
    monthName = currentMonth.format("MMMM YYYY");
    return monthName;
  }),
  weeks: computed("currentMonth", function() {
    var currentMonth, daysArray, firstDayPosition, monthArray, monthArrayLength, nullDaysHead, nullDaysTail, nullHeadLength, nullTailLength, numberOfDays, weeks;
    monthArrayLength = 42;
    currentMonth = this.get("currentMonth").clone();
    daysArray = buildDaysArrayForMonth(currentMonth);
    firstDayPosition = daysArray.get("firstObject").day();
    nullHeadLength = firstDayPosition;
    numberOfDays = daysArray.get("length");
    nullTailLength = monthArrayLength - nullHeadLength - numberOfDays;
    nullDaysHead = buildNullArray(nullHeadLength);
    nullDaysTail = buildNullArray(nullTailLength);
    monthArray = Em.A(nullDaysHead.concat(daysArray).concat(nullDaysTail));
    weeks = groupByWeeks(monthArray);
    return weeks;
  }),
  actions: {
    selectDate: function(day) {
      return this.set("value", day);
    },
    changeMonth: function(newMonth) {
      return this.set('currentMonth', newMonth);
    }
  }
});


})();

(function() {

App.ArchiveItemComponent = Em.Component.extend(App.EventControlMixin, {
  tagName: 'div',
  classNames: ['well', 'archive-item'],
  classNameBindings: ['isActive:active', 'popOut', 'isFeatured', 'isModal:modal', 'fade', 'fade:in'],
  content: Em.required('App.Event'),
  click: function() {
    var model;
    model = this.get('content');
    return this.sendAction('action', model);
  },
  _activeHandler: (function(event) {
    return this.toggleProperty('isActive');
  }).on('mouseEnter', 'mouseLeave'),
  _modalObserver: Em.observer(function() {
    return this.set('animate', !this.get('isModal'));
  }, 'isModal'),
  animate: true,
  isModal: false,
  fade: Em.computed.and('animate', 'isModal'),
  isActive: false,
  popOut: Em.computed.and('isActive', 'animate')
});


})();

(function() {

App.ArchiveListComponent = Em.Component.extend({
  classNames: ['archive-list'],
  classNameBindings: ['animate:fader'],
  items: Em.required(Array),
  isMobileBinding: 'App.isMobile',
  animate: true,
  actions: {
    displayItem: function(item) {
      var action, isMobile;
      isMobile = this.get('isMobile');
      action = isMobile ? 'load' : 'show';
      return this.sendAction(action, item);
    }
  }
});


})();

(function() {

App.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'https://api.valpo.edu',
  namespace: 'eventPool2'
});


})();

(function() {

App.Store = DS.Store.extend({
  adapter: App.ApplicationAdapter
});


})();

(function() {

App.Category = DS.Model.extend({
  name: DS.attr('string')
});


})();

(function() {

App.ApplicationController = Em.Controller.extend({
  needs: ['filters'],
  activeCategoriesBinding: 'controllers.filters.categories',
  lastRoute: null,
  currentRoute: null,
  lastPath: null,
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
  _removeLoader: (function() {
    return $('#loader').remove();
  }).on('willInsertElement'),
  init: function() {
    window.view = this;
    return this._super();
  },
  isMobileBinding: 'App.isMobile',
  classNames: ['st-container'],
  classNameBindings: ['isMobile:is-mobile:not-mobile', 'transitionEffect', 'isOpen:st-menu-open'],
  transitionEffect: Em.computed('isMobile', function() {
    var isMobile;
    isMobile = this.get('isMobile');
    if (isMobile) {
      return 'st-effect-4';
    } else {
      return 'st-effect-1';
    }
  }),
  isOpen: false,
  _defaultOpen: (function() {
    var _this = this;
    this.set('isOpen', !this.get('isMobile'));
    return Em.run.later(function() {
      var term;
      term = _this.get('isOpen');
      if (term) {
        return _this.set('isOpen', false);
      }
    }, 2500);
  }).on('init'),
  actions: {
    closeMenu: function() {
      var isMobile;
      isMobile = this.get('isMobile');
      if (!isMobile) {
        return this.set('isOpen', false);
      }
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
  model: function() {
    var store;
    store = this.get('store');
    store.push('event', {
      'id': '2729',
      'start': moment().startOf('day').format(),
      'end': moment().endOf('day').format(),
      'location': 'IMC',
      'is_all_day': false,
      'title': 'Test Record',
      'description': 'Test Description!\n\nLet\'s see what Showdown can do.\n\nAuto-parsed link: http://www.valpo.edu\n\nAuto-parsed link: http://www.valpo.edu with text after\n\nHTML link: <a href="http://www.valpo.edu">Valpo</a>\n\nMarkDown link: [Valpo](http://www.valpo.edu)',
      'url': 'http://www.valpo.edu',
      'categories': [11]
    });
    return store.find('category');
  },
  setupController: function(controller) {
    return controller.set('allCategories', this.get('store').find('category'));
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
    },
    updateCategories: function(activeCategories) {
      var destinationModel, destinationRoute, model;
      destinationRoute = this.controllerFor('application').get('currentRoute');
      destinationModel = this.modelFor(destinationRoute);
      model = this.modelFor('filters');
      if (model === void 0) {
        model = App.Filter.create();
      }
      model.set('categories', activeCategories);
      return this.transitionTo(destinationRoute, model, destinationModel);
    }
  }
});

App.IndexRoute = Em.Route.extend({
  redirect: function() {
    return this.transitionTo('day');
  }
});


})();

(function() {

App.Filter = Em.Object.extend({
  categories: Em.required(Array)
});


})();

(function() {

App.FiltersController = Em.ObjectController.extend();


})();

(function() {

App.FiltersView = Em.View.extend();


})();

(function() {

App.FiltersRoute = Em.Route.extend({
  model: function(params) {
    var categories;
    if (params.categories === 'all' || params.categories === void 0) {
      return App.Filter.create({
        categories: Em.A()
      });
    }
    categories = Em.A(params.categories.split(','));
    return App.Filter.create({
      categories: categories
    });
  },
  serialize: function(model, params) {
    var catArray, ret;
    ret = {};
    catArray = Em.get(model, 'categories');
    ret['categories'] = catArray.length === 0 ? 'all' : (catArray.sort(function(a, b) {
      return parseInt(a) > parseInt(b);
    }), catArray.join(','));
    return ret;
  }
});


})();

(function() {

var format, getRange, today;


})();

(function() {

App.Event = DS.Model.extend({
  start: DS.attr('date'),
  end: DS.attr('date'),
  isAllDay: DS.attr('boolean'),
  title: DS.attr('string'),
  location: DS.attr('string'),
  description: DS.attr('string'),
  url: DS.attr('string'),
  categories: DS.hasMany('category'),
  isFeatured: Em.computed('categories.@each', function() {
    var categories;
    categories = this.get('categories');
    return categories.anyBy('id', '11');
  })
});


})();

(function() {

var filterContent, testCategories;

testCategories = function(categoryIds, event) {
  var categories, result;
  result = false;
  categories = event.get('categories');
  categories.forEach(function(category) {
    var id, test;
    id = category.get('id');
    test = categoryIds.contains(id);
    if (test) {
      return result = true;
    }
  });
  return result;
};

filterContent = function(content, filters) {
  var categoryIds, ret;
  categoryIds = filters.get('categories');
  if (categoryIds.get('length') === 0) {
    return content;
  }
  ret = Em.A();
  content.forEach(function(event) {
    var hasCategories;
    hasCategories = testCategories(categoryIds, event);
    if (hasCategories) {
      return ret.addObject(event);
    }
  });
  return ret;
};

App.DayController = Em.ArrayController.extend({
  needs: ['filters'],
  sortProperties: ['start'],
  sortAscending: true,
  sortFunction: function(a, b) {
    return +a - +b;
  },
  currentDay: Em.computed(function(key, value) {
    var start, today;
    if (value != null) {
      return value;
    } else {
      start = this.get('arrangedContent.firstObject.start');
      today = this.get('today');
      return start || today;
    }
  }),
  _currentDayObserver: Em.observer(function() {
    var currentDay;
    currentDay = this.get('currentDay');
    return this.send('transitionToDay', currentDay);
  }, 'currentDay'),
  allDayEvents: Em.computed.filterBy('arrangedContent', 'isAllDay', true),
  hasAllDayEvents: Em.computed.empty('allDayEvents.length'),
  featuredEvents: Em.computed.filterBy('arrangedContent', 'isFeatured', true),
  filteredEvents: Em.computed('arrangedContent.@each', function() {
    var arrangedContent, filters;
    arrangedContent = this.get('arrangedContent');
    filters = this.get('controllers.filters');
    return filterContent(arrangedContent, filters);
  })
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

App.DayView = Em.View.extend();


})();

(function() {

format = 'MM-DD-YYYY';

today = new Date();

getRange = function(input) {
  var m;
  m = typeof input === 'string' ? moment(input, format) : moment(input);
  return {
    start: m.startOf('day').unix(),
    end: m.endOf('day').unix()
  };
};

App.DayRoute = Em.Route.extend({
  model: function(params) {
    var day;
    if (params.day == null) {
      params.day = 'today';
    }
    day = getRange(params.day === 'today' ? today : params.day);
    return this.loadDay(day);
  },
  serialize: function(model, params) {
    var ret, start;
    ret = {};
    start = moment(model.get('firstObject.start'));
    ret['day'] = start.date() === today.getDate() ? 'today' : start.format(format);
    return ret;
  },
  setupController: function(controller, model) {
    return controller.setProperties({
      model: model,
      today: today
    });
  },
  loadDay: function(range) {
    var store;
    store = this.get('store');
    return store.find('event', range);
  },
  actions: {
    transitionToDay: function(input) {
      var day, model;
      day = getRange(input);
      model = this.loadDay(day);
      return this.transitionTo('day', model);
    },
    transitionToEvent: function(model) {
      return this.transitionTo('event', model);
    },
    showEvent: function(event) {
      Em.Logger.error('DayRoute#showEvent says: "You still need to implement this"');
      return this.transitionTo('event', event);
    }
  }
});


})();

(function() {

App.EventController = Em.ObjectController.extend(App.EventControlMixin, {
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
  this.resource('filters', {
    path: ':categories'
  }, function() {
    return this.resource('day', {
      path: ':day'
    }, function() {});
  });
  return this.resource('event', {
    path: 'event/:event_id'
  }, function() {});
});


})();