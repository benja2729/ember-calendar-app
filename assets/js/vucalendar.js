(function() {

Ember.TEMPLATES["_all-day-list"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n  <div class=\"page-header\">\n    <h2>All Day Events</h2>\n  </div>\n  <div class=\"row\">\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "event", "in", "allDayEvents", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n    ");
  hashContexts = {'content': depth0,'filters': depth0,'action': depth0};
  hashTypes = {'content': "ID",'filters': "ID",'action': "STRING"};
  options = {hash:{
    'content': ("event"),
    'filters': ("filters"),
    'action': ("transitionToEvent")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['archive-item'] || depth0['archive-item']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "archive-item", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "allDayEvents", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["_current-day-format"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.moment || depth0.moment),stack1 ? stack1.call(depth0, "", "MMM D, YYYY", options) : helperMissing.call(depth0, "moment", "", "MMM D, YYYY", options))));
  data.buffer.push("\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.moment || depth0.moment),stack1 ? stack1.call(depth0, "", "MMMM D, YYYY", options) : helperMissing.call(depth0, "moment", "", "MMMM D, YYYY", options))));
  data.buffer.push("\n");
  return buffer;
  }

  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "App.isMobile", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["_day-header"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("<i class=\"icon-question\"></i>");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "current-day-format", options) : helperMissing.call(depth0, "partial", "current-day-format", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

  data.buffer.push("\n<header class=\"page-header\">\n  <span class=\"pull-right h1\">\n    <small class=\"beta\">BETA</small>\n    ");
  data.buffer.push("\n    ");
  hashContexts = {'tagName': depth0,'classNames': depth0};
  hashTypes = {'tagName': "STRING",'classNames': "STRING"};
  options = {hash:{
    'tagName': ("button"),
    'classNames': ("btn btn-primary")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "help", options) : helperMissing.call(depth0, "link-to", "help", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  </span>\n  <h1>\n  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['with'].call(depth0, "currentDay", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  </h1>\n</header>\n");
  return buffer;
  
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
  data.buffer.push("\n<div class=\"st-pusher\">\n  <section class=\"st-content\">\n    <div class=\"pane-body app-body\">\n\n    ");
  data.buffer.push("\n\n      <a class=\"logo valpo-sheen-brown\" href=\"http://www.valpo.edu/\">\n        <img src=\"http://www.valpo.edu/wp-content/themes/valpo/img/valpo_prestige_logo.png\" alt=\"Valparaiso University logo\" class=\"img\">\n      </a>\n\n      ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </div>\n  </section>\n</div>\n</section>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/archive-item"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "yield", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n\n  <strong>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.titleize || depth0.titleize),stack1 ? stack1.call(depth0, "content.title", options) : helperMissing.call(depth0, "titleize", "content.title", options))));
  data.buffer.push("</strong>\n  <div class=\"row\">\n    <div class=\"col-sm-5\">\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.range || depth0.range),stack1 ? stack1.call(depth0, "content.range", "formatOptions", options) : helperMissing.call(depth0, "range", "content.range", "formatOptions", options))));
  data.buffer.push("\n    </div>\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "content.location", {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <ul class=\"list-inline list-categories\">\n      ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "category", "in", "content.categories", {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      </ul>\n    </div>\n  </div>\n\n  ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n      <div class=\"col-sm-7\"><strong>Location: </strong>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "content.location", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n    ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n        <li>\n          ");
  hashContexts = {'tagName': depth0,'category': depth0,'activeCategories': depth0};
  hashTypes = {'tagName': "STRING",'category': "ID",'activeCategories': "ID"};
  options = {hash:{
    'tagName': ("em"),
    'category': ("category"),
    'activeCategories': ("filters.categories")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['category-display'] || depth0['category-display']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "category-display", options))));
  data.buffer.push("\n        </li>\n      ");
  return buffer;
  }

  data.buffer.push("\n<div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":archive-item popOut content.isFeatured isActive:active animate:fade animate:in")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "template", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/button-control"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

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
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  }

  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "template", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["components/category-display"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.titleize || depth0.titleize),stack1 ? stack1.call(depth0, "name", options) : helperMissing.call(depth0, "titleize", "name", options))));
  data.buffer.push("\n");
  return buffer;
  }

  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "template", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["components/category-select-wrapper"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

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

  data.buffer.push("\n<ul class=\"unstyled layout-block\">\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "category", "in", "categories", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n<div class=\"col-xs-12\">\n  ");
  hashContexts = {'classNames': depth0,'action': depth0,'title': depth0};
  hashTypes = {'classNames': "STRING",'action': "STRING",'title': "STRING"};
  options = {hash:{
    'classNames': ("category-clear btn btn-lg valpo-sheen-gold layout-block"),
    'action': ("clearCategories"),
    'title': ("Clear")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['button-control'] || depth0['button-control']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "button-control", options))));
  data.buffer.push("\n</div>");
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
  stack1 = helpers['if'].call(depth0, "day", {hash:{},inverse:self.program(8, program8, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes;
  data.buffer.push("\n        <td>");
  hashContexts = {'dateBinding': depth0};
  hashTypes = {'dateBinding': "ID"};
  stack1 = helpers.view.call(depth0, "view.tile", {hash:{
    'dateBinding': ("day")
  },inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n        ");
  data.buffer.push("\n      ");
  return buffer;
  }
function program6(depth0,data) {
  
  var stack1, hashTypes, hashContexts, options;
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.moment || depth0.moment),stack1 ? stack1.call(depth0, "day", "view.format", options) : helperMissing.call(depth0, "moment", "day", "view.format", options))));
  }

function program8(depth0,data) {
  
  
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
  data.buffer.push(" <span class=\"badge\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "filters.categories.length", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>");
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

Ember.TEMPLATES["day"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n        ");
  hashContexts = {'content': depth0,'isPromoted': depth0,'currentDay': depth0,'filters': depth0,'action': depth0};
  hashTypes = {'content': "ID",'isPromoted': "BOOLEAN",'currentDay': "ID",'filters': "ID",'action': "STRING"};
  options = {hash:{
    'content': ("event"),
    'isPromoted': (true),
    'currentDay': ("currentDay"),
    'filters': ("filters"),
    'action': ("transitionToEvent")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['archive-item'] || depth0['archive-item']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "archive-item", options))));
  data.buffer.push("\n      ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, options, hashTypes, hashContexts;
  data.buffer.push("\n        ");
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  if (stack1 = helpers['archive-item']) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0['archive-item']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  hashTypes = {};
  hashContexts = {};
  if (!helpers['archive-item']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("\n          There are no Featured Events today.\n        ");
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("<h2>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.moment || depth0.moment),stack1 ? stack1.call(depth0, "currentDay", "MMM D, YYYY", options) : helperMissing.call(depth0, "moment", "currentDay", "MMM D, YYYY", options))));
  data.buffer.push("</h2>");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n    <div class=\"page-header\">\n      <h2>All Day Events</h2>\n    </div>\n    <div class=\"row\">\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "event", "in", "allDayEvents", {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  ");
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n      ");
  hashContexts = {'content': depth0,'filters': depth0,'action': depth0};
  hashTypes = {'content': "ID",'filters': "ID",'action': "STRING"};
  options = {hash:{
    'content': ("event"),
    'filters': ("filters"),
    'action': ("transitionToEvent")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['archive-item'] || depth0['archive-item']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "archive-item", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n      ");
  hashContexts = {'content': depth0,'filters': depth0,'classNames': depth0,'action': depth0};
  hashTypes = {'content': "ID",'filters': "ID",'classNames': "STRING",'action': "STRING"};
  options = {hash:{
    'content': ("event"),
    'filters': ("filters"),
    'classNames': ("col-md-6"),
    'action': ("transitionToEvent")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['archive-item'] || depth0['archive-item']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "archive-item", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1, options, hashTypes, hashContexts;
  data.buffer.push("\n      ");
  options = {hash:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  if (stack1 = helpers['archive-item']) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0['archive-item']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  hashTypes = {};
  hashContexts = {};
  if (!helpers['archive-item']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        Your search for events on ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date || depth0.date),stack1 ? stack1.call(depth0, "currentDay", options) : helperMissing.call(depth0, "date", "currentDay", options))));
  data.buffer.push(" rendered no results.\n      ");
  return buffer;
  }

  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "day-header", options) : helperMissing.call(depth0, "partial", "day-header", options))));
  data.buffer.push("\n<div class=\"events-body\">\n  <div class=\"row\">\n    <div class=\"col-sm-6 main-controls\">\n      ");
  hashContexts = {'action': depth0,'isOpen': depth0,'filters': depth0,'isMobile': depth0,'title': depth0,'classNames': depth0};
  hashTypes = {'action': "STRING",'isOpen': "ID",'filters': "ID",'isMobile': "ID",'title': "STRING",'classNames': "STRING"};
  options = {hash:{
    'action': ("toggleFilterPane"),
    'isOpen': ("filtersAreOpen"),
    'filters': ("filters"),
    'isMobile': ("App.isMobile"),
    'title': ("Categories"),
    'classNames': ("btn-lg valpo-sheen-gold")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['filter-toggle'] || depth0['filter-toggle']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "filter-toggle", options))));
  data.buffer.push("\n      <button class=\"btn pull-right btn-lg  valpo-sheen-gold\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "transitionToDay", "today", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Today</button>\n      <div class=\"row\">\n        ");
  hashContexts = {'activeDate': depth0,'action': depth0,'class': depth0};
  hashTypes = {'activeDate': "ID",'action': "STRING",'class': "STRING"};
  options = {hash:{
    'activeDate': ("currentDay"),
    'action': ("transitionToDay"),
    'class': ("col-xs-12")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['date-picker'] || depth0['date-picker']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "date-picker", options))));
  data.buffer.push("\n      </div>\n    </div>\n    <div class=\"col-sm-6\">\n      <h2>Upcoming Events</h2>\n      <div class=\"row\">\n      ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "event", "in", "featuredEvents", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      </div>\n    </div>\n  </div>\n\n  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "App.isMobile", {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "allDayEvents", {hash:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n  <section class=\"events-list\">\n    <header class=\"page-header\">\n      <h2>Events List</h2>\n    </header>\n    <div class=\"row fader\">\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "event", "in", "eventsList", {hash:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </div>\n  </section>\n\n  ");
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
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.range || depth0.range),stack1 ? stack1.call(depth0, "range", options) : helperMissing.call(depth0, "range", "range", options))));
  data.buffer.push("\n      ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date || depth0.date),stack1 ? stack1.call(depth0, "start", options) : helperMissing.call(depth0, "date", "start", options))));
  data.buffer.push("<br />\n        ");
  hashContexts = {'showDate': depth0};
  hashTypes = {'showDate': "BOOLEAN"};
  options = {hash:{
    'showDate': (false)
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.range || depth0.range),stack1 ? stack1.call(depth0, "range", options) : helperMissing.call(depth0, "range", "range", options))));
  data.buffer.push("\n      ");
  return buffer;
  }

function program5(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "location", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

function program7(depth0,data) {
  
  
  data.buffer.push("To Be Determined");
  }

function program9(depth0,data) {
  
  var stack1, hashTypes, hashContexts, options;
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.showdown || depth0.showdown),stack1 ? stack1.call(depth0, "description", options) : helperMissing.call(depth0, "showdown", "description", options))));
  }

function program11(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n        <h4>Categories</h4>\n        <ul class=\"list-inline\">\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "categories", {hash:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </ul>\n      ");
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n          <li class=\"btn btn-link\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectCategory", "", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.titleize || depth0.titleize),stack1 ? stack1.call(depth0, "name", options) : helperMissing.call(depth0, "titleize", "name", options))));
  data.buffer.push("</li>\n        ");
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n  <div class=\"page-header\">\n    <h2>\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "isCurrentDay", {hash:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      All Day Events\n    </h2>\n  </div>\n  <div class=\"row\">\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "event", "in", "day.allDayEvents", {hash:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n");
  return buffer;
  }
function program15(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['with'].call(depth0, "day.currentDay", {hash:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n          ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "current-day-format", options) : helperMissing.call(depth0, "partial", "current-day-format", options))));
  data.buffer.push("&nbsp;\n        ");
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n    ");
  hashContexts = {'content': depth0,'filters': depth0,'action': depth0};
  hashTypes = {'content': "ID",'filters': "ID",'action': "STRING"};
  options = {hash:{
    'content': ("event"),
    'filters': ("filters"),
    'action': ("transitionToEvent")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['archive-item'] || depth0['archive-item']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "archive-item", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n  <header class=\"page-header\">\n    <h2>\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "isCurrentDay", {hash:{},inverse:self.noop,fn:self.program(21, program21, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      Events List\n    </h2>\n  </header>\n  <div class=\"row fader\">\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "event", "in", "day.eventsList", {hash:{},inverse:self.noop,fn:self.program(24, program24, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n");
  return buffer;
  }
function program21(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['with'].call(depth0, "day.currentDay", {hash:{},inverse:self.noop,fn:self.program(22, program22, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program22(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "current-day-format", options) : helperMissing.call(depth0, "partial", "current-day-format", options))));
  data.buffer.push("&nbsp;\n      ");
  return buffer;
  }

function program24(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n    ");
  hashContexts = {'content': depth0,'filters': depth0,'classNames': depth0,'action': depth0};
  hashTypes = {'content': "ID",'filters': "ID",'classNames': "STRING",'action': "STRING"};
  options = {hash:{
    'content': ("event"),
    'filters': ("filters"),
    'classNames': ("col-md-6"),
    'action': ("transitionToEvent")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['archive-item'] || depth0['archive-item']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "archive-item", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "day-header", options) : helperMissing.call(depth0, "partial", "day-header", options))));
  data.buffer.push("\n\n<button class=\"btn btn-primary\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "loadDay", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n  <i class=\"icon-long-arrow-left\"></i> Events\n</button>\n\n<div class=\"media\">\n\n  ");
  data.buffer.push("\n  ");
  data.buffer.push("\n  <aside ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":pull-left imgUrl::hidden")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n    <img class=\"media-object\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  options = {hash:{
    'src': ("imgUrl")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" alt=\"...\">\n  </aside>\n\n  <div class=\"media-body\">\n    <h4 class=\"media-heading\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.titleize || depth0.titleize),stack1 ? stack1.call(depth0, "title", options) : helperMissing.call(depth0, "titleize", "title", options))));
  data.buffer.push("</h4>\n    <p>\n      <span class=\"btn-link\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "loadDay", "start", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n      ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isMultiDay", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      </span>\n    </p>\n    <p><b>Location: </b>");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "location", {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</p>\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "description", {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    <p ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("url::hidden")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push("><a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "ID"};
  options = {hash:{
    'href': ("url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" target=\"_blank\">More Information &nbsp;&gt;&gt;</a><p>\n    <div class=\"media-footer\">\n      ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "filtersHaveCategories", {hash:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </div>\n  </div>\n</div>\n\n");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "day.allDayEvents", {hash:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "day.eventsList", {hash:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
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

Ember.TEMPLATES["help"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<header class=\"page-header\">\n  ");
  hashContexts = {'action': depth0,'classNames': depth0,'title': depth0};
  hashTypes = {'action': "STRING",'classNames': "STRING",'title': "STRING"};
  options = {hash:{
    'action': ("popAppState"),
    'classNames': ("btn-primary pull-right"),
    'title': ("Back")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['button-control'] || depth0['button-control']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "button-control", options))));
  data.buffer.push("\n  <h1>Help and Information</h1>\n</header>\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.showdown || depth0.showdown),stack1 ? stack1.call(depth0, "text", options) : helperMissing.call(depth0, "showdown", "text", options))));
  return buffer;
  
});

Ember.TEMPLATES["loading"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("\n<div id=\"loader\">\n  <div class=\"wrapper\">\n    <div class=\"inner\">\n      <span>L</span>\n      <span>o</span>\n      <span>a</span>\n      <span>d</span>\n      <span>i</span>\n      <span>n</span>\n      <span>g</span>\n    </div>\n  </div>\n</div>\n");
  
});

})();

(function() {

Em.Handlebars.registerBoundHelper('moment', function(date, format) {
  return moment(date).format(format);
});


})();

(function() {

Em.Handlebars.registerBoundHelper('time', function(date, format) {
  var clone, time;
  time = moment(date);
  clone = time.clone();
  if (clone.startOf('day').diff(time) === 0) {
    return 'Midnight';
  } else if (clone.hour(12).diff(time) === 0) {
    return 'Noon';
  } else {
    format = Em.typeOf(format) === 'string' ? format : 'h:mm a';
    return time.format(format);
  }
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

var rangeDefaults;

rangeDefaults = {
  groupMeridiems: true,
  spaceBeforeMeridiem: true,
  showDate: true,
  showDayOfWeek: false,
  twentyFourHour: false,
  implicitMinutes: true,
  implicitYear: true,
  yearFormat: "YYYY",
  monthFormat: "MMM",
  weekdayFormat: "ddd",
  dayFormat: "DD",
  meridiemFormat: "a",
  hourFormat: "h",
  minuteFormat: "mm",
  allDay: "all day",
  explicitAllDay: false,
  lastNightEndsAt: 0
};

Em.Handlebars.registerBoundHelper('range', function(range, format, options) {
  var args, result;
  if (options == null) {
    options = {
      hash: {}
    };
  }
  if ($.isPlainObject(format)) {
    if (format.hash) {
      options = format;
    } else {
      $.extend(options.hash, format);
    }
  }
  result = Em.typeOf(format) === 'string' ? range.simpleFormat(format) : (args = $.extend({}, rangeDefaults, options.hash), range.format(args));
  result = result.replace(/12(:00)?\s?[Aa]\.?[Mm]\.?/g, 'Midnight');
  result = result.replace(/12(:00)?\s?[Pp]\.?[Mm]\.?/g, 'Noon');
  return result;
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

moment.lang('en', {
  meridiem: function(hour, minute, isLowercase) {
    if (hour < 12) {
      if (isLowercase) {
        return 'a.m.';
      } else {
        return 'A.M.';
      }
    } else if (hour >= 12) {
      if (isLowercase) {
        return 'p.m.';
      } else {
        return 'P.M.';
      }
    }
  },
  monthsShort: ["Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."]
});


})();

(function() {

var common, defaultFn, extend, hasCommon, toArray, uncommon, utils;

utils = Ember.EnumerableUtils;

defaultFn = function(a, b) {
  return a === b;
};

toArray = function(array) {
  if (Ember.ArrayProxy.detectInstance(array)) {
    return array.toArray();
  }
  return array;
};

utils.common = common = function(array1, array2, fn) {
  var brk, el1, el2, result, _i, _j, _len, _len1;
  if (!(fn instanceof Function)) {
    return utils.intersection(array1, array2);
  }
  array1 = toArray(array1);
  array2 = toArray(array2);
  brk = false;
  result = [];
  for (_i = 0, _len = array1.length; _i < _len; _i++) {
    el1 = array1[_i];
    for (_j = 0, _len1 = array2.length; _j < _len1; _j++) {
      el2 = array2[_j];
      brk = fn(el1, el2, array1, array2);
      if (brk) {
        break;
      }
    }
    if (brk) {
      result.push(el1);
    }
  }
  return result;
};

utils.hasCommon = hasCommon = function() {
  return common.apply(null, arguments).length > 0;
};

utils.uncommon = uncommon = function(array1, array2, fn) {
  var brk, el1, el2, result, _i, _j, _len, _len1;
  if (!(fn instanceof Function)) {
    fn = defaultFn;
  }
  brk = false;
  result = [];
  array1 = toArray(array1);
  array2 = toArray(array2);
  for (_i = 0, _len = array2.length; _i < _len; _i++) {
    el2 = array2[_i];
    for (_j = 0, _len1 = array1.length; _j < _len1; _j++) {
      el1 = array1[_j];
      brk = fn(el1, el2, array1, array2);
      if (brk) {
        break;
      }
    }
    if (!brk) {
      result.push(el2);
    }
  }
  return result;
};

utils.extend = extend = function(array) {
  return array.concat(uncommon.apply(null, arguments));
};


})();

(function() {

App.ButtonControlComponent = Em.Component.extend({
  tagName: 'button',
  classNames: ['btn'],
  click: function() {
    return this.sendAction('action', this);
  }
});


})();

(function() {

App.FilterToggleComponent = App.ButtonControlComponent.extend({
  classNames: ['filter-toggle'],
  classNameBindings: ['isOpen:active'],
  title: 'Filters',
  isOpen: Em.required(Boolean),
  isMobile: Em.required(Boolean),
  click: function() {
    return this.toggleProperty('isOpen');
  }
});


})();

(function() {

App.CategoryDisplayComponent = Em.Component.extend({
  category: Em.required('Category'),
  nameBinding: 'category.name',
  classNames: ['category-display'],
  classNameBindings: ['isActive:text-warning:text-muted'],
  isActive: Em.computed('category', 'activeCategories.[]', function() {
    var activeCategories, category, _ref;
    _ref = this.getProperties('activeCategories', 'category'), activeCategories = _ref.activeCategories, category = _ref.category;
    return activeCategories.contains(category);
  })
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
    return !!((_ref = this.get('activeCategories')) != null ? _ref.contains(this.get('category')) : void 0);
  }),
  addCategory: function() {
    var _ref;
    return (_ref = this.get('activeCategories')) != null ? _ref.addObject(this.get('category')) : void 0;
  },
  removeCategory: function() {
    return this.get('activeCategories').removeObject(this.get('category'));
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
    return this.send('updateCategories');
  },
  actions: {
    clearCategories: function() {
      var activeCategories;
      activeCategories = this.get('activeCategories');
      activeCategories.clear();
      return this.send('updateCategories');
    },
    updateCategories: function() {
      var activeCategories;
      activeCategories = this.get('activeCategories');
      return this.sendAction('action', activeCategories);
    }
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

App.DatePickerComponent = Em.Component.extend({
  classNames: ['date-picker'],
  tile: Em.View.extend(Em.ViewTargetActionSupport, {
    classNames: ['calendar-tile'],
    classNameBindings: ['isActive:active', 'isToday'],
    todayBinding: 'parentView.today',
    activeDateBinding: 'parentView.activeDate',
    formatBinding: 'parentView.tileFormat',
    date: Em.required('moment'),
    isToday: Em.computed('today', 'date', function() {
      var date, today;
      today = this.get('today');
      date = this.get('date');
      return date.isSame(today, 'day');
    }),
    isActive: Em.computed('activeDate', 'date', function() {
      var activeDate, date;
      activeDate = this.get('activeDate');
      date = this.get('date');
      return date.isSame(activeDate, 'day');
    }),
    action: 'selectDate',
    actionContext: Em.computed.alias('date'),
    click: function() {
      return this.triggerAction();
    }
  }),
  today: moment(),
  currentMonth: Em.computed('activeDate', function(key, value) {
    if (value) {
      return value;
    } else {
      return this.get('activeDate');
    }
  }),
  activeDate: null,
  monthFormat: 'MMMM YYYY',
  dayFormat: 'ddd',
  tileFormat: 'DD',
  currentMonthName: Em.computed('currentMonth', 'monthFormat', function() {
    var currentMonth, format;
    currentMonth = this.get('currentMonth');
    format = this.get('monthFormat');
    return currentMonth.format(format);
  }),
  dayNames: Em.computed('dayFormat', function() {
    var days, format, iter, next, range, week;
    days = Em.A();
    format = this.get('dayFormat');
    week = this.get('today').clone().startOf('week');
    range = week.twix(week.clone().endOf('week'));
    iter = range.iterate('days');
    while (iter.hasNext()) {
      next = iter.next();
      days.pushObject(next.format(format));
    }
    return days;
  }),
  range: Em.computed('currentMonth', function() {
    var firstDay, lastDay, moment;
    moment = this.get('currentMonth');
    firstDay = moment.clone().startOf("month");
    lastDay = moment.clone().endOf("month");
    return firstDay.twix(lastDay, true);
  }),
  weeks: Em.computed('range', function() {
    var dayIter, nextDay, nextWeek, range, weekArray, weekIter, weekRange, weeks;
    weeks = Em.A();
    range = this.get('range');
    weekIter = range.iterate('weeks');
    while (weekIter.hasNext()) {
      nextWeek = weekIter.next();
      weekRange = nextWeek.twix(nextWeek.clone().endOf('week'));
      dayIter = weekRange.iterate('days');
      weekArray = Em.A();
      while (dayIter.hasNext()) {
        nextDay = dayIter.next();
        weekArray.pushObject(range.contains(nextDay) ? nextDay : null);
      }
      weeks.pushObject(weekArray);
    }
    return weeks;
  }),
  actions: {
    selectDate: function(day) {
      this.set('activeDate', day);
      return this.sendAction('action', day);
    },
    changeMonth: function(newMonth) {
      return this.set('currentMonth', newMonth);
    }
  }
});


})();

(function() {

App.ArchiveItemComponent = Em.Component.extend({
  tagName: 'div',
  classNames: ['col-xs-12', 'col-inline', 'layout-block'],
  content: Em.required('App.Event'),
  currentDay: Em.required('moment'),
  filters: Em.required('App.Filters'),
  formatOptions: Em.computed('content', 'currentDay', 'isPromoted', function() {
    var content, currentDay, featuredRange, isMultiDay, isPromoted, range, ret, _ref, _ref1;
    _ref = this.getProperties('currentDay', 'content', 'isPromoted'), currentDay = _ref.currentDay, content = _ref.content, isPromoted = _ref.isPromoted;
    _ref1 = content.getProperties('range', 'featuredRange', 'isMultiDay'), range = _ref1.range, featuredRange = _ref1.featuredRange, isMultiDay = _ref1.isMultiDay;
    ret = {};
    if ((isPromoted && featuredRange) || isMultiDay) {
      ret.showDayOfWeek = true;
    } else {
      ret.showDate = false;
    }
    return ret;
  }),
  click: function() {
    var model;
    model = this.get('content');
    return this.sendAction('action', model);
  },
  _activeHandler: (function(event) {
    return this.toggleProperty('isActive');
  }).on('mouseEnter', 'mouseLeave'),
  animate: true,
  isActive: false,
  popOut: Em.computed.and('isActive', 'animate')
});


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
  filtersBinding: 'controllers.filters',
  activeCategoriesBinding: 'filters.categories',
  defaultResource: 'day',
  filtersAreOpen: false,
  lastResource: null,
  currentResource: null,
  lastPath: null,
  _routeChangeObserver: Em.beforeObserver(function(controller, property) {
    return this.set('lastResource', this.get(property));
  }, 'currentResource'),
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
  isOpenBinding: 'controller.filtersAreOpen',
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
    if (/^\w+$/.test(routeName) && routeName !== "loading" && routeName !== 'application') {
      return this.controllerFor('application').set('currentResource', routeName);
    }
  },
  metaForType: function(type) {
    var model, store;
    store = this.get('store');
    model = store.modelFor(type);
    return store.typeMapFor(model).metadata;
  }
});

App.ApplicationRoute = Em.Route.extend({
  model: function() {
    var store;
    store = this.get('store');
    return store.find('category');
  },
  setupController: function(controller, categories) {
    return controller.set('allCategories', categories);
  },
  actions: {
    transitionToEvent: function(model) {
      return this.transitionTo('event', model);
    },
    loadState: function(path, model) {
      if (model == null) {
        model = this.modelFor(path);
      }
      if (model != null) {
        return this.transitionTo(path, model);
      } else {
        return this.transitionTo(path);
      }
    },
    popAppState: function() {
      var path;
      path = this.get('controller.lastResource');
      return this.send('loadState', path);
    },
    updateCategories: function(activeCategories) {
      return this.send('loadState', 'day');
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

App.LoadingRoute = Em.Route.extend({
  actions: {
    loading: function() {
      return console.log('in Loading route');
    }
  }
});


})();

(function() {

App.Filter = DS.Model.extend({
  categories: DS.hasMany('category')
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
    var c, categories, currentModel, store;
    currentModel = this.get('currentModel');
    if (currentModel) {
      return currentModel;
    }
    store = this.get('store');
    c = params.categories;
    categories = c === 'all' || c === void 0 ? [] : params.categories.split(',');
    return store.push('filter', {
      'id': 1,
      'categories': categories
    });
  },
  serialize: function(model, params) {
    var catArray, ret;
    ret = {};
    catArray = Em.get(model, 'categories').mapBy('id');
    ret['categories'] = catArray.length === 0 ? 'all' : (catArray.sort(function(a, b) {
      return parseInt(a) > parseInt(b);
    }), catArray.join(','));
    return ret;
  }
});


})();

(function() {

App.Event = DS.Model.extend({
  start: DS.attr('date'),
  end: DS.attr('date'),
  featuredStart: DS.attr('date'),
  featuredEnd: DS.attr('date'),
  isAllDay: DS.attr('boolean'),
  title: DS.attr('string'),
  location: DS.attr('string'),
  description: DS.attr('string'),
  url: DS.attr('string'),
  categories: DS.hasMany('category'),
  range: Em.computed('start', 'end', 'isAllDay', function() {
    var end, format, isAllDay, start;
    isAllDay = this.get('isAllDay');
    format = 'MM/DD/YYYY';
    if (isAllDay) {
      start = moment(this.get('start', format));
      end = moment(this.get('end', format));
    } else {
      start = moment(this.get('start'));
      end = moment(this.get('end'));
    }
    return start.twix(end, isAllDay);
  }),
  featuredRange: Em.computed('isFeatured', 'featuredStart', 'featuredEnd', function() {
    var end, format, range, start;
    if (!this.get('isFeatured')) {
      return false;
    }
    format = 'MM/DD/YYYY';
    start = moment(this.get('featuredStart', format));
    end = moment(this.get('featuredEnd', format));
    range = start.twix(end, true);
    if (range.isValid()) {
      return range;
    } else {
      return false;
    }
  }),
  isMultiDay: Em.computed('range', function() {
    var range;
    range = this.get('range');
    return !range.isSame('day');
  }),
  isFeatured: Em.computed('categories.@each', function() {
    var categories;
    categories = this.get('categories');
    return categories.anyBy('name', 'featured');
  })
});


})();

(function() {

App.DayController = Em.ArrayController.extend({
  needs: ['application', 'filters'],
  filtersBinding: 'controllers.filters',
  filtersAreOpenBinding: 'controllers.application.filtersAreOpen',
  sortProperties: ['start'],
  sortAscending: true,
  sortFunction: function(a, b) {
    return +a - +b;
  },
  featuredEvents: Em.computed.filterBy('arrangedContent', 'isFeatured', true),
  filteredEvents: Em.computed('arrangedContent.@each', 'filters.categories.@each', function() {
    var categoryCache, content, currentDay, currentRange, filters, hasAllCategories, ret,
      _this = this;
    content = this.get('arrangedContent');
    filters = this.get('filters');
    if (Em.get(content, 'length') === 0) {
      return content;
    }
    categoryCache = filters.get('categories');
    hasAllCategories = Em.get(categoryCache, 'length') === 0;
    currentDay = moment(this.get('currentDay')).clone().startOf('day');
    currentRange = currentDay.twix(currentDay.clone().endOf('day'));
    ret = Em.A();
    content.forEach(function(event) {
      var categories, featuredRange, hasCategories, isAllDay, isMultiDay, range, start, _ref;
      _ref = event.getProperties('isAllDay', 'categories', 'featuredRange', 'range', 'start', 'isMultiDay'), isAllDay = _ref.isAllDay, categories = _ref.categories, featuredRange = _ref.featuredRange, range = _ref.range, start = _ref.start, isMultiDay = _ref.isMultiDay;
      if (!!featuredRange && (!currentRange.contains(start) || (isMultiDay && !range.contains(currentDay)))) {
        return;
      }
      hasCategories = hasAllCategories || Em.EnumerableUtils.hasCommon(categories, categoryCache, function(cat1, cat2) {
        return Em.get(cat1, 'id') === Em.get(cat2, 'id');
      });
      if (hasCategories) {
        return ret.addObject(event);
      }
    });
    return ret;
  }),
  eventsList: Em.computed.filterBy('filteredEvents', 'isAllDay', false),
  allDayEvents: Em.computed.filterBy('filteredEvents', 'isAllDay', true)
});


})();

(function() {

App.DayView = Em.View.extend();


})();

(function() {

App.DayRoute = Em.Route.extend({
  format: 'MM-DD-YYYY',
  today: moment().startOf('day'),
  beforeModel: function(transition) {},
  model: function(params) {
    var day;
    if (params.day == null) {
      params.day = 'today';
    }
    day = this.getRange(params.day === 'today' ? new Date() : params.day);
    return this.loadDay(day);
  },
  serialize: function(model, params) {
    var currentDay, format, meta, ret, today;
    format = this.get('format');
    ret = {};
    meta = this.metaForType('event');
    today = this.get('today');
    currentDay = moment(meta.start);
    ret['day'] = currentDay.diff(today, 'day') === 0 ? 'today' : currentDay.format(format);
    return ret;
  },
  setupController: function(controller, model) {
    var meta;
    meta = this.metaForType('event');
    return controller.setProperties({
      model: model,
      today: this.get('today'),
      currentDay: moment(meta.start)
    });
  },
  getRange: function(input) {
    var format, m;
    format = this.get('format');
    m = typeof input === 'string' ? moment(input, format) : moment(input);
    return m.clone().startOf('day').twix(m.endOf('day'));
  },
  loadDay: function(range) {
    var currentModel, fetchRange, meta, store;
    meta = this.metaForType('event');
    currentModel = this.get('currentModel');
    if (range.contains(meta.start) && range.contains(meta.end) && currentModel) {
      currentModel;
    }
    fetchRange = {
      start: range.start.unix(),
      end: range.end.unix()
    };
    store = this.get('store');
    return store.findQuery('event', fetchRange);
  },
  actions: {
    transitionToDay: function(input) {
      var day, model;
      day = this.getRange(input);
      model = this.loadDay(day);
      return this.transitionTo('day', model);
    }
  }
});


})();

(function() {

App.EventController = Em.ObjectController.extend({
  needs: ['day', 'filters'],
  dayBinding: 'controllers.day',
  filtersBinding: 'controllers.filters',
  filtersHaveCategories: Em.computed('filters.categories.[]', function() {
    var categories;
    categories = this.get('filters.categories');
    return categories !== void 0;
  }),
  currentDayBinding: 'start',
  isCurrentDay: Em.computed('currentDay', 'day.currentDay', function() {
    var dCurrentDay, eCurrentDay, range;
    eCurrentDay = this.get('currentDay');
    dCurrentDay = this.get('day.currentDay');
    range = moment(dCurrentDay).twix(eCurrentDay);
    return range.isValid() && range.isSame('day');
  }),
  actions: {
    selectCategory: function(category) {
      var categories, currentDay, filters;
      filters = this.get('filters');
      categories = filters.get('categories');
      if (categories !== void 0) {
        categories.clear().addObject(category);
      }
      currentDay = this.get('currentDay');
      return this.send('loadDay', currentDay);
    },
    loadDay: function(currentDay) {
      var dayRouter, isCurrentDay, model;
      isCurrentDay = this.get('isCurrentDay');
      dayRouter = this.container.lookup('route:day');
      if (currentDay == null) {
        currentDay = this.get('day.currentDay') || this.get('currentDay');
      }
      model = void 0;
      if (!isCurrentDay) {
        model = dayRouter.loadDay(dayRouter.getRange(currentDay));
      }
      return this.send('loadState', 'day', model);
    }
  }
});


})();

(function() {

App.EventView = Em.View.extend();


})();

(function() {

App.EventRoute = Em.Route.extend({
  afterModel: function() {
    return $('.pane-body').scrollTop(0);
  }
});


})();

(function() {

App.HelpRoute = Em.Route.extend({
  textPath: 'HelpText.md',
  model: function() {
    var currentModel, deferred, model, promise,
      _this = this;
    currentModel = this.get('currentModel');
    if (currentModel) {
      return currentModel;
    }
    model = {
      text: ''
    };
    deferred = $.Deferred();
    promise = $.ajax(this.get('textPath')).then(function(text) {
      model.text = text;
      return deferred.resolveWith(_this, [model]);
    });
    return deferred.promise();
  }
});


})();

(function() {

App.Router.map(function() {
  this.resource('filters', {
    path: ':categories'
  }, function() {
    return this.resource('day', {
      path: 'day/:day'
    }, function() {});
  });
  this.resource('event', {
    path: 'event/:event_id'
  }, function() {});
  return this.route('help');
});


})();