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

Ember.TEMPLATES["_app-header"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("Day View");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Month View");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("<i class=\"fa fa-question\"></i>");
  }

  data.buffer.push("\n<nav id=\"navigation\" role=\"navigation\" class=\"navbar navbar-static-top navbar-main\">\n\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      ");
  hashContexts = {'action': depth0,'filters': depth0,'title': depth0,'classNames': depth0};
  hashTypes = {'action': "STRING",'filters': "ID",'title': "STRING",'classNames': "STRING"};
  options = {hash:{
    'action': ("toggleFilterPane"),
    'filters': ("filters"),
    'title': ("Categories"),
    'classNames': ("navbar-brand")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['filter-toggle'] || depth0['filter-toggle']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "filter-toggle", options))));
  data.buffer.push("\n    </div>\n\n    <div class=\"navbar-collapse collapse\">\n      \n      <ul class=\"nav navbar-nav\">\n        <li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "day", "filters", "dayPath", options) : helperMissing.call(depth0, "link-to", "day", "filters", "dayPath", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n        <li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "month", "filters", "monthPath", options) : helperMissing.call(depth0, "linkTo", "month", "filters", "monthPath", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n      </ul>\n\n      <div class=\"pull-right\">\n        <p class=\"beta navbar-text text-muted\">BETA</p>\n        ");
  hashContexts = {'events': depth0,'classNames': depth0};
  hashTypes = {'events': "ID",'classNames': "STRING"};
  options = {hash:{
    'events': ("iCalEventsCache"),
    'classNames': ("btn-primary navbar-btn")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['ical-button'] || depth0['ical-button']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ical-button", options))));
  data.buffer.push("\n        ");
  data.buffer.push("\n        ");
  hashContexts = {'classNames': depth0};
  hashTypes = {'classNames': "STRING"};
  options = {hash:{
    'classNames': ("btn btn-primary navbar-btn")
  },inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "help", options) : helperMissing.call(depth0, "link-to", "help", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      </div>\n\n    </div>\n\n</nav>");
  return buffer;
  
});

Ember.TEMPLATES["_calendar-month"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n      <th class=\"calendar-month-heading\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</th>\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n      <tr>\n\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "day", "in", "week", {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n      </tr>\n    ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n        ");
  hashContexts = {'date': depth0,'data': depth0,'filters': depth0,'today': depth0};
  hashTypes = {'date': "ID",'data': "ID",'filters': "ID",'today': "ID"};
  options = {hash:{
    'date': ("day.date"),
    'data': ("day.data"),
    'filters': ("filters"),
    'today': ("today")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['calendar-tile'] || depth0['calendar-tile']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "calendar-tile", options))));
  data.buffer.push("\n      ");
  return buffer;
  }

  data.buffer.push("\n\n<table class=\"calendar table table-bordered\">\n  <thead>\n    <tr>\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "dayNames", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </tr>\n  </thead>\n  \n  <tbody>\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "week", "in", "weeks", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tbody>\n</table>");
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
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeMenu", "st-menu", {hash:{
    'target': ("view"),
    'on': ("mouseLeave")
  },contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
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
  data.buffer.push("\n<div class=\"st-pusher\">\n  <section class=\"st-content\">\n    <div class=\"pane-body app-body\">\n\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "app-header", options) : helperMissing.call(depth0, "partial", "app-header", options))));
  data.buffer.push("\n\n      ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n      <div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":st-pusher-skin filtersAreOpen:visible:hidden")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" ");
  hashContexts = {'target': depth0};
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeMenu", "st-pusher-skin", {hash:{
    'target': ("view")
  },contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></div>\n    </div>\n  </section>\n</div>\n</section>\n");
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

Ember.TEMPLATES["components/calendar-tile"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n  ");
  hashContexts = {'classNames': depth0,'classNameBindings': depth0,'tagName': depth0};
  hashTypes = {'classNames': "STRING",'classNameBindings': "STRING",'tagName': "STRING"};
  options = {hash:{
    'classNames': ("calendar-tile-link"),
    'classNameBindings': ("isToday"),
    'tagName': ("div")
  },inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "day", "datePath", options) : helperMissing.call(depth0, "link-to", "day", "datePath", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n\n    <div class=\"calendar-tile-title\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.moment || depth0.moment),stack1 ? stack1.call(depth0, "date", "format", options) : helperMissing.call(depth0, "moment", "date", "format", options))));
  data.buffer.push("</div>\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "data", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n  ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n      <ul class=\"calendar-tile-list list-unstyled\">\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "App.isMobile", {hash:{},inverse:self.program(9, program9, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </ul>\n    ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n          ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "event", "in", "events", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isAboveLimit", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n            <li class=\"truncate-text\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</li>\n          ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n            <li class=\"divider\">&nbsp;</li>\n            <li>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "moreText", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</li>\n          ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n          ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "hasEvents", {hash:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program10(depth0,data) {
  
  
  data.buffer.push("\n            <li class=\"has-events\"><i class=\"fa fa-circle\"></i></li>\n          ");
  }

function program12(depth0,data) {
  
  
  data.buffer.push("\n  &nbsp;\n");
  }

  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isValid", {hash:{},inverse:self.program(12, program12, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
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

  data.buffer.push("\n<ul class=\"unstyled layout-block\">\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "category", "in", "categories", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n<div class=\"col-xs-12\">\n  <button class=\"category-clear btn valpo-sheen-gold layout-block\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clearCategories", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Clear</button>\n</div>\n");
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
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


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
  data.buffer.push("\n</header>\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "calendar-month", options) : helperMissing.call(depth0, "partial", "calendar-month", options))));
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

Ember.TEMPLATES["components/gcal-button"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("\n<a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  options = {hash:{
    'href': ("href")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" title=\"Add to Google Calendar\" target=\"_blank\"><img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  options = {hash:{
    'src': ("imgUrl")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" border=\"0\"></a>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/ical-button"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
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
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Today");
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

function program5(depth0,data) {
  
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

function program7(depth0,data) {
  
  var buffer = '', stack1, options, hashTypes, hashContexts;
  data.buffer.push("\n        ");
  options = {hash:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  if (stack1 = helpers['archive-item']) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0['archive-item']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  hashTypes = {};
  hashContexts = {};
  if (!helpers['archive-item']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program8(depth0,data) {
  
  
  data.buffer.push("\n          There are no Featured Events today.\n        ");
  }

function program10(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("<h2>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.moment || depth0.moment),stack1 ? stack1.call(depth0, "currentDay", "MMM D, YYYY", options) : helperMissing.call(depth0, "moment", "currentDay", "MMM D, YYYY", options))));
  data.buffer.push("</h2>");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n    <div class=\"page-header\">\n      <h2>All Day Events</h2>\n    </div>\n    <div class=\"row\">\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "event", "in", "allDayEvents", {hash:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  ");
  return buffer;
  }
function program13(depth0,data) {
  
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

function program15(depth0,data) {
  
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

function program17(depth0,data) {
  
  var buffer = '', stack1, options, hashTypes, hashContexts;
  data.buffer.push("\n      ");
  options = {hash:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  if (stack1 = helpers['archive-item']) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0['archive-item']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  hashTypes = {};
  hashContexts = {};
  if (!helpers['archive-item']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program18(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        Your search for events on ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date || depth0.date),stack1 ? stack1.call(depth0, "currentDay", options) : helperMissing.call(depth0, "date", "currentDay", options))));
  data.buffer.push(" rendered no results.\n      ");
  return buffer;
  }

  data.buffer.push("<header class=\"page-header\">\n  ");
  hashContexts = {'classNames': depth0,'tagName': depth0};
  hashTypes = {'classNames': "STRING",'tagName': "STRING"};
  options = {hash:{
    'classNames': ("btn pull-right valpo-sheen-gold"),
    'tagName': ("button")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "day", "today", options) : helperMissing.call(depth0, "link-to", "day", "today", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  <span class=\"h1\">\n  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['with'].call(depth0, "currentDay", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  </span>\n</header>\n<div class=\"events-body\">\n  <div class=\"row\">\n    <div class=\"col-sm-6 main-controls\">\n      <div class=\"row\">\n        ");
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
  stack2 = helpers.each.call(depth0, "event", "in", "featuredEvents", {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      </div>\n    </div>\n  </div>\n\n  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "App.isMobile", {hash:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "allDayEvents", {hash:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n  <section class=\"events-list\">\n    <header class=\"page-header\">\n      <h2>Events List</h2>\n    </header>\n    <div class=\"row fader\">\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "event", "in", "eventsList", {hash:{},inverse:self.program(17, program17, data),fn:self.program(15, program15, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
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
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "current-day-format", options) : helperMissing.call(depth0, "partial", "current-day-format", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isMultiDay", {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n          ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.range || depth0.range),stack1 ? stack1.call(depth0, "range", options) : helperMissing.call(depth0, "range", "range", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n          ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.date || depth0.date),stack1 ? stack1.call(depth0, "start", options) : helperMissing.call(depth0, "date", "start", options))));
  data.buffer.push("<br />\n          ");
  hashContexts = {'showDate': depth0};
  hashTypes = {'showDate': "BOOLEAN"};
  options = {hash:{
    'showDate': (false)
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.range || depth0.range),stack1 ? stack1.call(depth0, "range", options) : helperMissing.call(depth0, "range", "range", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program8(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "location", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

function program10(depth0,data) {
  
  
  data.buffer.push("To Be Determined");
  }

function program12(depth0,data) {
  
  var stack1, hashTypes, hashContexts, options;
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.showdown || depth0.showdown),stack1 ? stack1.call(depth0, "description", options) : helperMissing.call(depth0, "showdown", "description", options))));
  }

function program14(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n        <li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "day", "category.id", "dayRoutePath", options) : helperMissing.call(depth0, "link-to", "day", "category.id", "dayRoutePath", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n      ");
  return buffer;
  }
function program15(depth0,data) {
  
  var stack1, hashTypes, hashContexts, options;
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.titleize || depth0.titleize),stack1 ? stack1.call(depth0, "category.name", options) : helperMissing.call(depth0, "titleize", "category.name", options))));
  }

function program17(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n  <div class=\"page-header\">\n    <h2>\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "isCurrentDay", {hash:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      All Day Events\n    </h2>\n  </div>\n  <div class=\"row\">\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "event", "in", "day.allDayEvents", {hash:{},inverse:self.noop,fn:self.program(21, program21, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n");
  return buffer;
  }
function program18(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['with'].call(depth0, "day.currentDay", {hash:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program19(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n          ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "current-day-format", options) : helperMissing.call(depth0, "partial", "current-day-format", options))));
  data.buffer.push("&nbsp;\n        ");
  return buffer;
  }

function program21(depth0,data) {
  
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

function program23(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n  <header class=\"page-header\">\n    <h2>\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "isCurrentDay", {hash:{},inverse:self.noop,fn:self.program(24, program24, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      Events List\n    </h2>\n  </header>\n  <div class=\"row fader\">\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "event", "in", "day.eventsList", {hash:{},inverse:self.noop,fn:self.program(27, program27, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n");
  return buffer;
  }
function program24(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['with'].call(depth0, "day.currentDay", {hash:{},inverse:self.noop,fn:self.program(25, program25, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program25(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "current-day-format", options) : helperMissing.call(depth0, "partial", "current-day-format", options))));
  data.buffer.push("&nbsp;\n      ");
  return buffer;
  }

function program27(depth0,data) {
  
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

  data.buffer.push("\n<header class=\"page-header\">\n  <span class=\"h1\">\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['with'].call(depth0, "currentDay", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </span>\n  ");
  hashContexts = {'event': depth0,'classNames': depth0};
  hashTypes = {'event': "ID",'classNames': "STRING"};
  options = {hash:{
    'event': ("content"),
    'classNames': ("pull-right hidden-xs")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['gcal-button'] || depth0['gcal-button']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "gcal-button", options))));
  data.buffer.push("\n</header>\n\n  ");
  data.buffer.push("\n");
  hashContexts = {'event': depth0,'classNames': depth0};
  hashTypes = {'event': "ID",'classNames': "STRING"};
  options = {hash:{
    'event': ("content"),
    'classNames': ("visible-xs")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['gcal-button'] || depth0['gcal-button']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "gcal-button", options))));
  data.buffer.push("\n\n<div class=\"media\">\n\n  ");
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
  data.buffer.push("</h4>\n    <p>\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "day", "filters.model", "dayRoutePath", options) : helperMissing.call(depth0, "link-to", "day", "filters.model", "dayRoutePath", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </p>\n    <p><b>Location: </b>");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "location", {hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</p>\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "description", {hash:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
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
  data.buffer.push(" target=\"_blank\">More Information &nbsp;&gt;&gt;</a><p>\n    <div class=\"media-footer\">\n      <h4>Categories</h4>\n      <ul class=\"list-inline\">\n      ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "category", "in", "categories", {hash:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      </ul>\n    </div>\n  </div>\n</div>\n\n");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "day.allDayEvents", {hash:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "day.eventsList", {hash:{},inverse:self.noop,fn:self.program(23, program23, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
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
  var buffer = '', stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<header class=\"page-header\">\n");
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

Ember.TEMPLATES["month"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("This Month");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.moment || depth0.moment),stack1 ? stack1.call(depth0, "currentMonth", "MMM, YYYY", options) : helperMissing.call(depth0, "moment", "currentMonth", "MMM, YYYY", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.moment || depth0.moment),stack1 ? stack1.call(depth0, "currentMonth", "MMMM, YYYY", options) : helperMissing.call(depth0, "moment", "currentMonth", "MMMM, YYYY", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("&lt;&lt; ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.moment || depth0.moment),stack1 ? stack1.call(depth0, "lastMonth", "route.format", options) : helperMissing.call(depth0, "moment", "lastMonth", "route.format", options))));
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.moment || depth0.moment),stack1 ? stack1.call(depth0, "nextMonth", "route.format", options) : helperMissing.call(depth0, "moment", "nextMonth", "route.format", options))));
  data.buffer.push(" &gt;&gt;");
  return buffer;
  }

  data.buffer.push("<header class=\"page-header\">\n  ");
  hashContexts = {'classNames': depth0,'tagName': depth0};
  hashTypes = {'classNames': "STRING",'tagName': "STRING"};
  options = {hash:{
    'classNames': ("btn valpo-sheen-gold pull-right"),
    'tagName': ("button")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "month", "current", options) : helperMissing.call(depth0, "link-to", "month", "current", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  <span class=\"h1\">\n  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "App.isMobile", {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  </span>\n</header>\n\n");
  hashContexts = {'classNames': depth0,'tagName': depth0};
  hashTypes = {'classNames': "STRING",'tagName': "STRING"};
  options = {hash:{
    'classNames': ("btn valpo-sheen-gold layout-block"),
    'tagName': ("button")
  },inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "month", "lastMonthFormat", options) : helperMissing.call(depth0, "link-to", "month", "lastMonthFormat", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  hashContexts = {'classNames': depth0,'tagName': depth0};
  hashTypes = {'classNames': "STRING",'tagName': "STRING"};
  options = {hash:{
    'classNames': ("btn valpo-sheen-gold pull-right layout-block"),
    'tagName': ("button")
  },inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "month", "nextMonthFormat", options) : helperMissing.call(depth0, "link-to", "month", "nextMonthFormat", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n");
  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "calendar-month", options) : helperMissing.call(depth0, "partial", "calendar-month", options))));
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  
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

App.reopen({
  $body: $('body'),
  scrollTo: function(element) {
    var $body, top;
    $body = this.get('$body');
    top = element === 'top' || element === void 0 ? 0 : $(element).offset().top;
    $body.scrollTop(top);
    return this;
  },
  today: Em.computed(function() {
    return moment();
  }).volatile(),
  useExclusiveSearch: false
});

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

var VEvent, iCalMixin, sanitize, utcTime;

sanitize = function(key) {
  var slug;
  slug = "content." + key;
  return Em.computed(slug, function() {
    var value;
    value = this.get(slug);
    return value.replace(/\n/g, '\\n');
  });
};

utcTime = function(key) {
  return Em.computed('range', function() {
    var format, isAllDay, range, _ref;
    _ref = this.getProperties('range', 'format', 'isAllDay'), range = _ref.range, format = _ref.format, isAllDay = _ref.isAllDay;
    if (isAllDay) {
      format = format.replace(/T.*$/, '');
    }
    return range[key].clone().utc().format(format);
  });
};

iCalMixin = Em.Mixin.create({
  todayBinding: 'App.today',
  format: 'YYYYMMDDTHHmmss[Z]',
  now: Em.computed('today', function() {
    return this.get('today').format(this.get('format'));
  }),
  template: Em.required(String),
  toString: function() {
    return this.get('template');
  }
});

VEvent = Em.ObjectProxy.extend(iCalMixin, {
  content: Em.required(),
  title: sanitize('title'),
  description: sanitize('description'),
  location: sanitize('location'),
  dtStampBinding: 'now',
  dtStart: utcTime('start'),
  dtEnd: utcTime('end'),
  template: Em.computed(function() {
    var description, dtEnd, dtStamp, dtStart, id, location, title, _ref;
    _ref = this.getProperties('id', 'title', 'description', 'location', 'dtStamp', 'dtStart', 'dtEnd'), id = _ref.id, title = _ref.title, description = _ref.description, location = _ref.location, dtStamp = _ref.dtStamp, dtStart = _ref.dtStart, dtEnd = _ref.dtEnd;
    return "BEGIN:VEVENT\nUID:" + id + "\nDTSTAMP:" + dtStamp + "\nDTSTART:" + dtStart + "\nDTEND:" + dtEnd + "\nSUMMARY:" + title + "\nDESCRIPTIONS:" + description + "\nLOCATION:" + location + "\nEND:VEVENT\n";
  })
});

App.iCalObject = Em.Object.extend(iCalMixin, {
  events: Em.required(Array),
  version: '2.0',
  mimeType: 'text/calendar;charset=utf8',
  toBlob: function() {
    var e, template, type;
    template = this.get('template');
    type = this.get('mimeType');
    try {
      return new Blob([template], {
        type: type
      });
    } catch (_error) {
      e = _error;
      Em.Logger.error(e.stack);
      return alert('It looks like your browser doesn\'t support that feature');
    }
  },
  vEvents: Em.computed('events', function() {
    var events;
    events = this.get('events');
    return events.map(function(event) {
      return VEvent.create({
        content: event
      });
    });
  }),
  renderedEvents: Em.computed('vEvents', function() {
    var output, vEvents;
    vEvents = this.get('vEvents');
    output = vEvents.map(function(vEvent) {
      return vEvent.toString();
    });
    return output.join('');
  }),
  prodId: 'VUEventsCalendar',
  template: Em.computed('renderedEvents', function() {
    var prodId, renderedEvents, version, _ref;
    _ref = this.getProperties('version', 'prodId', 'renderedEvents'), version = _ref.version, prodId = _ref.prodId, renderedEvents = _ref.renderedEvents;
    return "BEGIN:VCALENDAR\nVERSION:" + version + "\nPRODID:-//" + prodId + "//NONSGML v1.0//EN\n" + renderedEvents + "\nEND:VCALENDAR";
  })
});


})();

(function() {

App.DateUtilMixin = Em.Mixin.create({
  getRange: function(slug, input, format) {
    var m;
    format = format || this.get('format');
    m = Em.typeOf(input) === 'string' ? moment(input, format) : moment(input);
    return m.clone().startOf(slug).twix(m.endOf(slug));
  }
});


})();

(function() {

App.DataUtilMixin = Em.Mixin.create({
  metaForType: function(type) {
    var model, store;
    store = this.get('store');
    model = store.modelFor(type);
    return store.typeMapFor(model).metadata;
  }
});


})();

(function() {

var DayObject;

DayObject = Em.Object.extend({
  date: Em.required('moment'),
  dateFormat: Em.required(String),
  data: Em.required('object')
});

App.CalendarMonthMixin = Em.Mixin.create(App.DateUtilMixin, {
  currentMonth: Em.required('moment'),
  todayBinding: 'App.today',
  dayObject: DayObject,
  customDayFn: Em.K,
  dayNameFormat: 'ddd',
  dayNames: Em.computed('dayNameFormat', function() {
    var days, format, iter, next, range, week;
    days = Em.A();
    format = this.get('dayNameFormat');
    week = this.get('today').clone().startOf('week');
    range = week.twix(week.clone().endOf('week'));
    iter = range.iterate('days');
    while (iter.hasNext()) {
      next = iter.next();
      days.pushObject(next.format(format));
    }
    return days;
  }),
  lastMonth: Em.computed('currentMonth', function() {
    return this.get('currentMonth').clone().subtract('month', 1);
  }),
  nextMonth: Em.computed('currentMonth', function() {
    return this.get('currentMonth').clone().add('month', 1);
  }),
  range: Em.computed('currentMonth', function() {
    var month;
    month = this.get('currentMonth');
    return this.getRange('month', month);
  }),
  weeks: Em.computed('range', function() {
    var date, dateFormat, dayIter, dayObject, fn, newDay, nextDay, nextWeek, range, weekArray, weekIter, weekRange, weeks;
    weeks = Em.A();
    fn = this.get('customDayFn');
    range = this.get('range');
    weekIter = range.iterate('weeks');
    dayObject = this.get('dayObject');
    while (weekIter.hasNext()) {
      nextWeek = weekIter.next();
      weekRange = nextWeek.twix(nextWeek.clone().endOf('week'));
      dayIter = weekRange.iterate('days');
      weekArray = Em.A();
      while (dayIter.hasNext()) {
        nextDay = dayIter.next();
        newDay = dayObject.create();
        date = range.contains(nextDay) ? nextDay : null;
        dateFormat = date != null ? date.format('YYYY-MM-DD') : null;
        newDay.setProperties({
          date: date,
          dateFormat: dateFormat
        });
        fn.call(this, newDay);
        weekArray.pushObject(newDay);
      }
      weeks.pushObject(weekArray);
    }
    return weeks;
  })
});


})();

(function() {

App.EventsFilterMixin = Em.Mixin.create({
  filters: Em.required(),
  arrangedContent: Em.required(),
  currentDay: Em.required(),
  currentDayRange: Em.computed('currentDay', function() {
    var currentDay;
    currentDay = moment(this.get('currentDay')).clone().startOf('day');
    return currentDay.twix(currentDay.clone().endOf('day'));
  }),
  promotedIsCurrentDay: function(event) {
    var currentDayRange, featuredRange, range, _ref;
    currentDayRange = this.get('currentDayRange');
    _ref = event.getProperties('range', 'featuredRange'), range = _ref.range, featuredRange = _ref.featuredRange;
    if (!featuredRange) {
      return false;
    }
    return currentDayRange.overlaps(range);
  },
  eventFilterMatch: function(event, match, list, filters) {
    return event;
  },
  featuredEvents: Em.computed.filterBy('arrangedContent', 'isFeatured', true),
  useExclusiveSearch: false,
  useExclusiveSearchBinding: 'App.useExclusiveSearch',
  filteredEvents: Em.computed('arrangedContent.@each', 'filters.categories.@each', 'useExclusivSearch', function() {
    var categoryCache, content, filters, hasAllCategories, ret, useExclusiveSearch,
      _this = this;
    content = this.get('arrangedContent');
    filters = this.get('filters');
    useExclusiveSearch = this.get('useExclusiveSearch');
    categoryCache = filters.get('categories');
    hasAllCategories = Em.get(categoryCache, 'length') === 0;
    if (Em.get(content, 'length') === 0) {
      return content;
    }
    ret = Em.A();
    content.forEach(function(event) {
      var categories, commonCategories, filterMatch, hasCategories;
      categories = event.get('categories');
      hasCategories = hasAllCategories || (useExclusiveSearch ? (commonCategories = Em.EnumerableUtils.common(categories, categoryCache, function(cat1, cat2) {
        return Em.get(cat1, 'id') === Em.get(cat2, 'id');
      }), commonCategories.get('length') === categoryCache.get('length')) : Em.EnumerableUtils.hasCommon(categories, categoryCache, function(cat1, cat2) {
        return Em.get(cat1, 'id') === Em.get(cat2, 'id');
      }));
      filterMatch = hasCategories;
      event = _this.eventFilterMatch(event, filterMatch, content, filters);
      if (filterMatch && (event != null)) {
        return ret.addObject(event);
      }
    });
    return ret;
  }),
  eventsList: Em.computed('filteredEvents.@each', function() {
    var currentDayRange, filteredEvents,
      _this = this;
    currentDayRange = this.get('currentDayRange');
    filteredEvents = this.get('filteredEvents');
    return filteredEvents.filter(function(event) {
      var featuredRange, isAllDay, _ref;
      _ref = event.getProperties('isAllDay', 'featuredRange'), isAllDay = _ref.isAllDay, featuredRange = _ref.featuredRange;
      if (isAllDay) {
        return false;
      }
      if (featuredRange) {
        if (!_this.promotedIsCurrentDay(event)) {
          return false;
        }
      }
      return true;
    });
  }),
  allDayEvents: Em.computed('filteredEvents.@each', function(event) {
    var currentDayRange, filteredEvents,
      _this = this;
    currentDayRange = this.get('currentDayRange');
    filteredEvents = this.get('filteredEvents');
    return filteredEvents.filter(function(event) {
      var featuredRange, isAllDay, isMultiDay, range, start, _ref;
      _ref = event.getProperties('isAllDay', 'categories', 'featuredRange', 'range', 'start', 'isMultiDay'), isAllDay = _ref.isAllDay, featuredRange = _ref.featuredRange, range = _ref.range, start = _ref.start, isMultiDay = _ref.isMultiDay;
      if (!isAllDay) {
        return false;
      }
      if (featuredRange) {
        if (!_this.promotedIsCurrentDay(event)) {
          return false;
        }
      }
      return true;
    });
  })
});


})();

(function() {

Em.Route.reopen(App.DataUtilMixin, {
  enter: function() {
    var routeName;
    routeName = this.get('routeName');
    if (/^\w+$/.test(routeName) && routeName !== "loading" && routeName !== 'application') {
      return this.controllerFor('application').set('currentResource', routeName);
    }
  }
});


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

App.FilterToggleComponent = Em.Component.extend({
  classNames: ['filter-toggle'],
  classNameBindings: ['isOpen:active'],
  title: 'Filters',
  isOpen: Em.required(Boolean),
  _isOpenObserver: (function() {
    return this.sendAction('action', this.get('isOpen'));
  }).observes('isOpen'),
  isMobileBinding: 'App.isMobile',
  click: function(e) {
    e.preventDefault();
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
  _activeCategoriesObserver: (function() {
    return this.send('updateCategories');
  }).observes('activeCategories.length'),
  actions: {
    clearCategories: function() {
      var _ref;
      return (_ref = this.get('activeCategories')) != null ? _ref.clear() : void 0;
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
  todayBinding: 'App.today',
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
      this.set('date', date);
      return this.sendAction('changeDate', date);
    }
  }
});


})();

(function() {

App.DatePickerComponent = Em.Component.extend(App.CalendarMonthMixin, {
  classNames: ['date-picker'],
  currentMonth: Em.computed('activeDate', function(key, value) {
    if (value) {
      return value;
    } else {
      return this.get('activeDate');
    }
  }),
  activeDate: null,
  monthFormat: 'MMMM YYYY',
  currentMonthName: Em.computed('currentMonth', 'monthFormat', function() {
    var currentMonth, format;
    currentMonth = this.get('currentMonth');
    format = this.get('monthFormat');
    return currentMonth.format(format);
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
    var content, currentDay, featuredRange, isFeatured, isMultiDay, isPromoted, range, ret, _ref, _ref1;
    _ref = this.getProperties('currentDay', 'content', 'isPromoted'), currentDay = _ref.currentDay, content = _ref.content, isPromoted = _ref.isPromoted;
    _ref1 = content.getProperties('range', 'isFeatured', 'featuredRange', 'isMultiDay'), range = _ref1.range, isFeatured = _ref1.isFeatured, featuredRange = _ref1.featuredRange, isMultiDay = _ref1.isMultiDay;
    ret = {};
    if ((isPromoted && (isFeatured || featuredRange)) || isMultiDay) {
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

App.CalendarTileComponent = Em.Component.extend(App.EventsFilterMixin, {
  tagName: 'td',
  classNames: ['calendar-tile'],
  classNameBindings: ['isValid:valid-day:invalid-day'],
  format: 'DD',
  formatPath: 'YYYY-MM-DD',
  date: Em.required('moment'),
  today: Em.required('moment'),
  data: null,
  showPromoted: false,
  filters: Em.required('object'),
  arrangedContentBinding: 'data',
  currentDayBinding: 'date',
  featuredEvents: null,
  eventsList: Em.computed(function(key, value) {
    if (value != null) {
      return value;
    } else {
      return Em.A();
    }
  }),
  allDayEvents: null,
  eventFilterMatch: function(event, match, list, filters) {
    var events, featuredRange, range, _ref;
    if (match) {
      _ref = event.getProperties('featuredRange', 'range'), featuredRange = _ref.featuredRange, range = _ref.range;
      events = this.get('eventsList');
      if (featuredRange && !this.get('showPromoted')) {
        if (this.promotedIsCurrentDay(event)) {
          events.addObject(event);
        }
      } else {
        events.addObject(event);
      }
    }
    return event;
  },
  limit: 5,
  limitOffset: Em.computed('events', 'eventsList', function() {
    var events, eventsList, _ref;
    _ref = this.getProperties('events', 'eventsList'), events = _ref.events, eventsList = _ref.eventsList;
    return eventsList.get('length') - events.get('length');
  }),
  isAboveLimit: Em.computed('limitOffset', function() {
    var offset;
    offset = this.get('limitOffset');
    return offset > 0;
  }),
  moreText: Em.computed('isAboveLimit', function() {
    var base, offset;
    offset = this.get('limitOffset');
    base = "" + offset + " More Event";
    if (offset === 1) {
      return base;
    } else {
      return base + 's';
    }
  }),
  hasEvents: Em.computed('filteredEvents', 'eventsList', function() {
    var eventsList, filteredEvents, _ref;
    _ref = this.getProperties('filteredEvents', 'eventsList'), filteredEvents = _ref.filteredEvents, eventsList = _ref.eventsList;
    return eventsList.get('length') > 0;
  }),
  events: Em.computed('filteredEvents', 'eventsList', 'limit', function() {
    var data, eventsList, filteredEvents, limit, _ref;
    _ref = this.getProperties('data', 'eventsList', 'limit', 'filteredEvents'), data = _ref.data, eventsList = _ref.eventsList, limit = _ref.limit, filteredEvents = _ref.filteredEvents;
    if (data == null) {
      return null;
    }
    return eventsList.copy().splice(0, limit);
  }),
  datePath: Em.computed('date', 'data', function() {
    var data, date, _ref;
    _ref = this.getProperties('date', 'data'), date = _ref.date, data = _ref.data;
    if (!data) {
      return moment(date).format(this.get('formatPath'));
    }
    if (!Em.ArrayProxy.detectInstance(data)) {
      data = Em.ArrayProxy.create({
        content: data
      });
    }
    return data.set('currentDay', moment(date));
  }),
  isValid: Em.computed.bool('date'),
  isToday: Em.computed('date', 'today', function() {
    var date, today;
    today = this.get('today');
    if (!today) {
      return false;
    }
    date = this.get('date');
    return moment(date).isSame(today, 'day');
  })
});


})();

(function() {

App.GcalButtonComponent = Em.Component.extend({
  classNames: ['gcal-button'],
  tagName: 'span',
  event: Em.required(),
  imgUrl: '//www.google.com/calendar/images/ext/gc_button1.gif',
  hrefPrefix: 'http://www.google.com/calendar/event?',
  sprop: Em.computed(function() {
    return "name:" + window.location.href;
  }),
  trp: false,
  action: 'TEMPLATE',
  textBinding: 'event.title',
  dates: Em.computed('event.start', 'event.end', 'event.isAllDay', function() {
    var end, format, isAllDay, start;
    format = "YYYYMMDDTHHmmss[Z]";
    isAllDay = this.get('event.isAllDay');
    if (isAllDay) {
      format = format.replace(/T.*$/, '');
    }
    start = moment.utc(this.get('event.start')).format(format);
    end = moment.utc(this.get('event.end')).format(format);
    return "" + start + "/" + end;
  }),
  detailsBinding: 'event.description',
  locationBinding: 'event.location',
  params: Em.computed('text', 'dates', 'details', 'location', function() {
    return this.getProperties('action', 'text', 'dates', 'details', 'location', 'sprop', 'trp');
  }),
  href: Em.computed('params', function() {
    var params, prefix;
    params = this.get('params');
    prefix = this.get('hrefPrefix');
    return prefix + $.param(params);
  })
});


})();

(function() {

App.IcalButtonComponent = Em.Component.extend({
  events: Em.required(Array),
  tagName: 'button',
  classNames: ['ical-button', 'btn'],
  classNameBindings: ['isSupported::disabled'],
  isSupported: Em.computed(function() {
    var e;
    try {
      new Blob();
      return true;
    } catch (_error) {
      e = _error;
      return false;
    }
  }),
  title: Em.computed('isSupported', function(key, value) {
    var isSupported;
    isSupported = this.get('isSupported');
    if (isSupported) {
      if (value != null) {
        return value;
      } else {
        return 'Download iCal';
      }
    } else {
      return 'Not Supported';
    }
  }),
  fileName: Em.computed(function(key, value) {
    var serializedUrl;
    if (value != null) {
      return value;
    } else {
      serializedUrl = window.location.hash.replace(/^#\//, '').replace(/[\/,]+/g, '.');
      return "" + serializedUrl + ".ics";
    }
  }).volatile(),
  iCalObject: Em.computed('events', function() {
    var events;
    events = this.get('events');
    return App.iCalObject.create({
      events: events
    });
  }),
  click: function() {
    if (this.get('isSupported')) {
      return this.send('saveAs');
    }
  },
  actions: {
    saveAs: function() {
      var blob, fileName, iCalObject, _ref;
      _ref = this.getProperties('iCalObject', 'fileName'), iCalObject = _ref.iCalObject, fileName = _ref.fileName;
      blob = iCalObject.toBlob();
      return saveAs(blob, fileName);
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

var appHeaderPath;

appHeaderPath = function(slug) {
  return Em.computed('currentDay', function(key, value) {
    var currentDay, format;
    if (value != null) {
      return value;
    } else {
      format = this.container.lookup("route:" + slug).get('format');
      currentDay = this.get('currentDay');
      return moment(currentDay).format(format);
    }
  });
};

App.ApplicationController = Em.Controller.extend(App.DataUtilMixin, {
  needs: ['filters'],
  filtersBinding: 'controllers.filters',
  activeCategoriesBinding: 'filters.categories',
  defaultResource: 'day',
  filtersAreOpen: false,
  lastResource: null,
  currentResource: null,
  lastPath: null,
  dayPath: appHeaderPath('day'),
  monthPath: appHeaderPath('month'),
  iCalEventsCache: Em.computed('currentResource', function() {
    var controller, currentResource;
    currentResource = this.get('currentResource');
    controller = this.controllerFor(currentResource);
    if (currentResource === 'event') {
      return [controller.get('content')];
    } else {
      return controller.get('filteredEvents');
    }
  }),
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
  _setMenu: (function() {
    return this.set('menu', $('.st-menu'));
  }).on('didInsertElement'),
  isOpen: false,
  isOpenBinding: 'controller.filtersAreOpen',
  filtersOpening: false,
  filtersOpeningBinding: 'controller.filtersOpening',
  actions: {
    closeMenu: function(type) {
      var filtersOpening, isMobile, isOpen, _ref;
      _ref = this.getProperties('isMobile', 'isOpen', 'filtersOpening'), isMobile = _ref.isMobile, isOpen = _ref.isOpen, filtersOpening = _ref.filtersOpening;
      if (isOpen && !filtersOpening) {
        if ((isMobile && type === "st-pusher-skin") || (!isMobile && type === "st-menu")) {
          return this.set('isOpen', false);
        }
      }
    }
  }
});


})();

(function() {

App.ApplicationRoute = Em.Route.extend({
  model: function() {
    var filtersController, filtersModel, filtersRoute, store;
    filtersRoute = this.container.lookup('route:filters');
    filtersModel = filtersRoute.model({
      filters: 'all'
    });
    filtersController = filtersRoute.generateController('filters', filtersModel);
    filtersRoute.controller = filtersController;
    filtersRoute.setupController(filtersController, filtersModel);
    this.container.register('route:filters', filtersRoute);
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
    toggleFilterPane: function(isOpen) {
      var controller;
      controller = this.controllerFor('application');
      if (isOpen != null) {
        controller.set('filtersAreOpen', isOpen);
      } else {
        controller.toggleProperty('filtersAreOpen');
      }
      controller.set('filtersOpening', true);
      return $('.st-menu').one($.support.transition.end, function() {
        return controller.set('filtersOpening', false);
      });
    },
    updateCategories: function(activeCategories) {
      var filters, resource, resourceModel, resourceRoute;
      resource = this.get('controller.currentResource');
      if (resource === void 0 || resource === 'event') {
        resource = 'day';
      }
      resourceRoute = this.container.lookup("route:" + resource);
      resourceModel = resourceRoute.get('currentModel');
      filters = Em.Object.create({
        categories: activeCategories
      });
      return this.transitionTo(resource, filters, resourceModel);
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
    c = params.categories;
    categories = c === 'all' || c === void 0 ? [] : params.categories.split(',');
    store = this.get('store');
    console.log(store.find('filter', 1));
    currentModel = this.get('currentModel');
    if (currentModel) {
      console.log('hasCurrentModel');
      return currentModel.set('categories', store.findByIds('category', categories));
    } else {
      console.log('doesnt hasCurrentModel');
      store.push('filter', {
        'id': 1,
        'categories': categories
      });
      return store.find('filter', 1);
    }
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
    debugger;
    return start.twix(end);
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

App.EventsFilterController = Em.ArrayController.extend(App.EventsFilterMixin, App.DataUtilMixin, {
  needs: ['application', 'filters'],
  filtersBinding: 'controllers.filters',
  todayBinding: 'App.today',
  todayPath: Em.computed('today', function() {
    var format, today;
    today = this.get('today');
    format = this.container.lookup('route:day').get('format');
    return moment(today).format(format);
  }),
  sortProperties: ['start'],
  sortAscending: true,
  sortFunction: function(a, b) {
    return +a - +b;
  },
  actions: {
    error: function(e) {
      return console.warn(e);
    }
  }
});


})();

(function() {

App.DayController = App.EventsFilterController.extend({
  monthRoutePath: Em.computed('currentDay', function() {
    var currentDay, format;
    currentDay = this.get('currentDay');
    format = this.container.lookup('route:month').get('format');
    return moment(currentDay).format(format);
  })
});


})();

(function() {

App.DayView = Em.View.extend();


})();

(function() {

App.DateRangeRoute = Em.Route.extend(App.DateUtilMixin, {
  format: Em.required(String),
  formatDefault: Em.required(String),
  rangeSlug: Em.computed('_debugContainerKey', function() {
    return this.get('_debugContainerKey').decamelize().replace(/^route:([a-z]+).*$/, '$1');
  }),
  todayBinding: 'App.today',
  model: function(params) {
    var formatDefault, slug;
    slug = this.get('rangeSlug');
    formatDefault = this.get('formatDefault');
    if (params[slug] == null) {
      params[slug] = formatDefault;
    }
    return this.loadRange(slug, params[slug] === formatDefault ? new Date() : params[slug]);
  },
  afterModel: function(model, transition) {
    var currentDay, dateSlug, event, format, meta, metaRange, providedModel, slug;
    if (moment.isMoment(model.get('currentDay'))) {
      return model;
    }
    if (model.get('length') !== 0) {
      event = model.find(function(event) {
        var featuredRange, isMultiDay, _ref;
        _ref = event.getProperties('isMultiDay', 'featuredRange'), isMultiDay = _ref.isMultiDay, featuredRange = _ref.featuredRange;
        return !(featuredRange || isMultiDay);
      });
      if (event != null) {
        currentDay = moment(event.get('start'));
      }
    }
    if (currentDay === void 0) {
      slug = this.get('rangeSlug');
      providedModel = transition.providedModelsArray[0];
      if (typeof providedModel === 'string') {
        dateSlug = transition.params[slug];
        format = this.get('format');
        currentDay = moment(dateSlug, format);
      } else {
        meta = this.metaForType('event');
        metaRange = moment(meta.start).twix(moment(meta.end));
        currentDay = metaRange.countInner(slug) < 2 ? metaRange.start : moment();
      }
    }
    return model.set('currentDay', currentDay.clone());
  },
  serialize: function(model, params) {
    var currentDay, format, formatDefault, ret, slug, today;
    ret = {};
    slug = this.get('rangeSlug');
    currentDay = model.get('currentDay');
    today = this.get('today');
    format = this.get('format');
    formatDefault = this.get('formatDefault');
    ret[slug] = currentDay.twix(today).isSame(slug) ? formatDefault : currentDay.format(format);
    return ret;
  },
  setupController: function(controller, model) {
    var app, currentDay, format, slug;
    currentDay = model.get('currentDay');
    slug = this.get('rangeSlug');
    format = this.get('format');
    app = this.controllerFor('application');
    app.set("" + slug + "Path", moment(currentDay).format(format));
    return controller.setProperties({
      currentDay: currentDay,
      model: model
    });
  },
  load: function(range) {
    var fetchRange, store;
    fetchRange = {
      start: range.start.unix(),
      end: range.end.unix()
    };
    store = this.get('store');
    return store.findQuery('event', fetchRange);
  },
  loadRange: function(slug, input) {
    var range;
    range = this.getRange(slug, input);
    return this.load(range);
  },
  actions: {
    transitionToDay: function(date, model) {
      if (date === null || date === void 0) {
        return;
      }
      if (model == null) {
        model = this.loadRange('day', date);
      }
      return this.transitionTo('day', model);
    },
    transitionToMonth: function(date, model) {
      var app;
      app = this.controllerFor('month');
      if (model == null) {
        model = this.loadRange('month', date);
      }
      app.set('currentDay', moment(date));
      return this.transitionTo('month', model);
    }
  }
});


})();

(function() {

App.DayRoute = App.DateRangeRoute.extend({
  format: 'YYYY-MM-DD',
  formatDefault: 'today',
  setupController: function(controller, model) {
    var app, currentDay;
    currentDay = model.get('currentDay');
    app = this.controllerFor('application');
    app.set('currentDay', currentDay);
    return this._super(controller, model);
  }
});


})();

(function() {

App.MonthController = App.EventsFilterController.extend(App.CalendarMonthMixin, {
  currentMonthBinding: 'currentDay',
  route: Em.computed(function() {
    return this.container.lookup('route:month');
  }),
  nextMonthFormat: Em.computed('nextMonth', function() {
    var nextMonth, route;
    route = this.get('route');
    nextMonth = this.get('nextMonth');
    return nextMonth.format(route.get('format'));
  }),
  lastMonthFormat: Em.computed('lastMonth', function() {
    var lastMonth, route;
    route = this.get('route');
    lastMonth = this.get('lastMonth');
    return lastMonth.format(route.get('format'));
  }),
  eventFilterMatch: function(event, match, list, filters) {
    var day, dayMap, featuredRange, index, iter, next, range, _ref;
    _ref = event.getProperties('range', 'featuredRange'), range = _ref.range, featuredRange = _ref.featuredRange;
    dayMap = this.get('eventsForDayMap');
    if (featuredRange && featuredRange.overlaps(range)) {
      range = featuredRange.union(range);
    }
    iter = range.iterate('days');
    while (iter.hasNext()) {
      next = iter.next();
      index = next.format('YYYYMMDD');
      day = dayMap[index];
      if (!Em.isArray(day)) {
        dayMap[index] = day = Em.A();
      }
      day.addObject(event);
    }
    return event;
  },
  eventsForDayMap: Em.computed(function(key, value) {
    if (value != null) {
      return value;
    } else {
      return Em.Object.create();
    }
  }),
  eventsForDay: function(date) {
    var content, dayMap;
    dayMap = this.get('eventsForDayMap');
    content = dayMap[date.format('YYYYMMDD')];
    return Em.ArrayProxy.create({
      content: content != null ? content : Em.A(),
      currentDay: date
    });
  },
  customDayFn: function(dayObject) {
    var data, date;
    date = dayObject.get('date');
    data = date != null ? this.eventsForDay(date) : void 0;
    if ((data != null ? data.length : void 0) === 0) {
      data = void 0;
    }
    return dayObject.set('data', data);
  },
  weeks: Em.computed('range', 'filteredEvents.@each', function() {
    this.get('filteredEvents');
    return this._super.apply(this, arguments);
  }),
  featuredEvents: Em.K,
  eventsList: Em.K,
  allDayEvents: Em.K
});


})();

(function() {

App.MonthView = Em.View.extend({
  classNames: ['month-view']
});


})();

(function() {

App.MonthRoute = App.DateRangeRoute.extend({
  format: 'YYYY-MM',
  formatDefault: 'current'
});


})();

(function() {

App.EventController = Em.ObjectController.extend({
  needs: ['day', 'filters'],
  dayBinding: 'controllers.day',
  filtersBinding: 'controllers.filters',
  currentDayBinding: 'start',
  isCurrentDay: Em.computed('currentDay', 'day.currentDay', function() {
    var dCurrentDay, eCurrentDay, range;
    eCurrentDay = this.get('currentDay');
    dCurrentDay = this.get('day.currentDay');
    range = moment(dCurrentDay).twix(eCurrentDay);
    return range.isValid() && range.isSame('day');
  }),
  dayRoutePath: Em.computed('isCurrentDay', function() {
    var format;
    format = this.container.lookup('route:day').get('format');
    return moment(this.get('day.currentDay') || this.get('currentDay')).format(format);
  })
});


})();

(function() {

App.EventView = Em.View.extend();


})();

(function() {

App.EventRoute = Em.Route.extend({
  afterModel: function() {
    return App.scrollTo('top');
  },
  setupController: function(controller, model) {
    this.controllerFor('application').set('currentDay', moment(model.get('start')));
    return controller.set('model', model);
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
    this.resource('day', {
      path: 'day/:day'
    }, function() {});
    return this.resource('month', {
      path: 'month/:month'
    }, function() {});
  });
  this.resource('event', {
    path: 'event/:event_id'
  }, function() {});
  return this.route('help');
});


})();