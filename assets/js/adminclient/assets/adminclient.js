/* jshint ignore:start */

/* jshint ignore:end */

define('adminclient/adapters/application', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].RESTAdapter.extend({});

});
define('adminclient/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'adminclient/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  var App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('adminclient/application/controller', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({

    activepath: (function () {
      console.log(arguments, this);
    }).property()

  });

});
define('adminclient/application/route', ['exports', 'ember', 'simple-auth/mixins/application-route-mixin'], function (exports, Ember, ApplicationRouteMixin) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend(ApplicationRouteMixin['default'], {

    actions: {

      sessionInvalidationSucceeded: function sessionInvalidationSucceeded() {
        this.transitionTo("index");
      }

    }

  });

});
define('adminclient/application/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createTextNode(" users ");
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
            block(env, morph0, context, "link-to", ["users"], {}, child0, null);
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1]); }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          block(env, morph0, context, "link-to", ["users"], {"tagName": "li"}, child0, null);
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("ul");
          dom.setAttribute(el1,"class","nav navbar-nav navbar-right");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          var el3 = dom.createTextNode(" ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("a");
          var el4 = dom.createTextNode("Logout");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(" ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, element = hooks.element;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element0 = dom.childAt(fragment, [1, 1, 1]);
          element(env, element0, context, "action", ["invalidateSession"], {});
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, inline = hooks.inline;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          inline(env, morph0, context, "render", ["login"], {});
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("header");
        dom.setAttribute(el1,"class","navbar navbar-static-top");
        dom.setAttribute(el1,"id","top");
        dom.setAttribute(el1,"role","banner");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container");
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","navbar-header");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","/admin");
        dom.setAttribute(el4,"class","navbar-brand");
        var el5 = dom.createTextNode("Monument Admin");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("nav");
        dom.setAttribute(el3,"class","collapse navbar-collapse bs-navbar-collapse");
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4,"class","nav navbar-nav");
        var el5 = dom.createTextNode("\n\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, block = hooks.block, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element1 = dom.childAt(fragment, [0, 1, 3]);
        var morph0 = dom.createMorphAt(dom.childAt(element1, [1]),0,1);
        var morph1 = dom.createMorphAt(element1,2,3);
        var morph2 = dom.createMorphAt(dom.childAt(fragment, [2]),0,1);
        block(env, morph0, context, "if", [get(env, context, "session.isAuthenticated")], {}, child0, null);
        block(env, morph1, context, "if", [get(env, context, "session.isAuthenticated")], {}, child1, child2);
        content(env, morph2, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('adminclient/authenticators/custom', ['exports', 'ember', 'simple-auth/authenticators/base'], function (exports, Ember, Base) {

  'use strict';

  exports['default'] = Base['default'].extend({

    restore: function restore(data) {
      return new Ember['default'].RSVP.Promise(function (resolve, reject) {
        Ember['default'].$.ajax({
          url: "/session/token",
          type: "GET",
          dataType: "json",
          contentType: "application/json"
        }).then(function (response) {
          if (response.token === data.token) {
            resolve(response);
          } else {
            reject(response);
          }
        }, function (errorxhr) {
          reject(errorxhr);
        });
      });
    },

    authenticate: function authenticate(data) {
      var email = data.email;
      var password = data.password;

      return new Ember['default'].RSVP.Promise(function (resolve, reject) {
        Ember['default'].$.ajax({
          url: "/session/token",
          type: "POST",
          data: JSON.stringify({ grant: "password", email: email, password: password }),
          dataType: "json",
          contentType: "application/json"
        }).then(function (response) {
          if (response.user.role !== "admin") {
            alert("You have a user allright! But its not admin :sadface");
            reject(xhr);
          } else {
            resolve(response);
          }
        }, function (xhr) {
          reject(xhr);
        });
      });
    },

    invalidate: function invalidate(data) {
      return new Ember['default'].RSVP.Promise(function (resolve, reject) {
        Ember['default'].$.ajax({
          url: "/session/token",
          type: "DELETE",
          dataType: "json",
          contentType: "application/json"
        }).then(function (response) {
          resolve();
        }, function (xhr) {
          reject();
        });
      });
    }

  });

});
define('adminclient/authorizers/custom', ['exports', 'simple-auth/authorizers/base'], function (exports, Base) {

  'use strict';

  exports['default'] = Base['default'].extend({

    authorize: function authorize(xhr, options) {
      var token = this.get("session.token");
      if (this.get("session.isAuthenticated") && !Ember.isEmpty(token)) {
        xhr.setRequestHeader("Authorization", "Token:" + token);
      }
    }

  });

});
define('adminclient/func/fuzzymatch', ['exports'], function (exports) {

  'use strict';

  exports['default'] = function (a, b) {
    var a = a.toLowerCase();
    var b = b.toLowerCase();
    var n = -1;
    for (var i = 0, len = b.length; i < len; i++) {
      var l = b[i];
      if (! ~(n = a.indexOf(l, n + 1))) {
        return false;
      }
    }
    return true;
  };

});
define('adminclient/initializers/app-version', ['exports', 'adminclient/config/environment', 'ember'], function (exports, config, Ember) {

  'use strict';

  var classify = Ember['default'].String.classify;
  var registered = false;

  exports['default'] = {
    name: "App Version",
    initialize: function initialize(container, application) {
      if (!registered) {
        var appName = classify(application.toString());
        Ember['default'].libraries.register(appName, config['default'].APP.version);
        registered = true;
      }
    }
  };

});
define('adminclient/initializers/export-application-global', ['exports', 'ember', 'adminclient/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    var classifiedName = Ember['default'].String.classify(config['default'].modulePrefix);

    if (config['default'].exportApplicationGlobal && !window[classifiedName]) {
      window[classifiedName] = application;
    }
  }

  ;

  exports['default'] = {
    name: "export-application-global",

    initialize: initialize
  };

});
define('adminclient/initializers/simple-auth', ['exports', 'simple-auth/configuration', 'simple-auth/setup', 'adminclient/config/environment'], function (exports, Configuration, setup, ENV) {

  'use strict';

  exports['default'] = {
    name: "simple-auth",
    initialize: function initialize(container, application) {
      Configuration['default'].load(container, ENV['default']["simple-auth"] || {});
      setup['default'](container, application);
    }
  };

});
define('adminclient/login/controller', ['exports', 'ember', 'simple-auth/mixins/authentication-controller-mixin'], function (exports, Ember, AuthenticationControllerMixin) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend(AuthenticationControllerMixin['default'], {

    authenticator: "authenticator:custom",

    actions: {

      authenticate: function authenticate() {
        this.get("session").authenticate("authenticator:custom", {
          email: this.get("email"),
          password: this.get("password")
        });
      }

    }

  });

});
define('adminclient/login/route', ['exports', 'ember', 'simple-auth/mixins/unauthenticated-route-mixin'], function (exports, Ember, UnauthenticatedRouteMixin) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend(UnauthenticatedRouteMixin['default'], {});

});
define('adminclient/login/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("form");
        dom.setAttribute(el1,"class","navbar-form navbar-right");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","form-group");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","form-group");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2,"class","btn btn-success");
        var el3 = dom.createTextNode("Sign in");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline, element = hooks.element;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [5]);
        var morph0 = dom.createMorphAt(dom.childAt(element0, [1]),0,1);
        var morph1 = dom.createMorphAt(dom.childAt(element0, [3]),0,1);
        inline(env, morph0, context, "input", [], {"valueBinding": "email", "class": "form-control", "type": "text", "placeholder": "email"});
        inline(env, morph1, context, "input", [], {"valueBinding": "password", "class": "form-control", "type": "password", "placeholder": "password"});
        element(env, element1, context, "action", ["authenticate"], {});
        return fragment;
      }
    };
  }()));

});
define('adminclient/router', ['exports', 'ember', 'adminclient/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.resource("users", function () {
      this.route("edit", { path: "/:user_id" });
    });
  });

  exports['default'] = Router;

});
define('adminclient/templates/user', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[0]); }
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        var morph1 = dom.createMorphAt(fragment,1,2,contextualElement);
        content(env, morph0, context, "model.name");
        content(env, morph1, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('adminclient/templates/users', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, content = hooks.content;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
            content(env, morph0, context, "user.name");
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          dom.setAttribute(el3,"type","button");
          dom.setAttribute(el3,"class","btn btn-danger");
          var el4 = dom.createTextNode("delete");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block, content = hooks.content, element = hooks.element;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [7, 1]);
          var morph0 = dom.createMorphAt(dom.childAt(element0, [1]),0,1);
          var morph1 = dom.createMorphAt(dom.childAt(element0, [3]),-1,-1);
          var morph2 = dom.createMorphAt(dom.childAt(element0, [5]),-1,-1);
          block(env, morph0, context, "link-to", ["users.find", get(env, context, "user")], {}, child0, null);
          content(env, morph1, context, "user.phoneNumber");
          content(env, morph2, context, "user.email");
          element(env, element1, context, "action", ["destroy", get(env, context, "user")], {});
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("table");
        dom.setAttribute(el1,"class","table");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("thead");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tr");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Name");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Email");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Phone");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tbody");
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [0, 3]),0,1);
        block(env, morph0, context, "each", [get(env, context, "model")], {"keyword": "user"}, child0, null);
        return fragment;
      }
    };
  }()));

});
define('adminclient/tests/adapters/application.jshint', function () {

  'use strict';

  module('JSHint - adapters');
  test('adapters/application.js should pass jshint', function() { 
    ok(true, 'adapters/application.js should pass jshint.'); 
  });

});
define('adminclient/tests/app.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function() { 
    ok(true, 'app.js should pass jshint.'); 
  });

});
define('adminclient/tests/application/controller.jshint', function () {

  'use strict';

  module('JSHint - application');
  test('application/controller.js should pass jshint', function() { 
    ok(false, 'application/controller.js should pass jshint.\napplication/controller.js: line 6, col 33, Missing semicolon.\n\n1 error'); 
  });

});
define('adminclient/tests/application/route.jshint', function () {

  'use strict';

  module('JSHint - application');
  test('application/route.js should pass jshint', function() { 
    ok(false, 'application/route.js should pass jshint.\napplication/route.js: line 9, col 33, Missing semicolon.\n\n1 error'); 
  });

});
define('adminclient/tests/authenticators/custom.jshint', function () {

  'use strict';

  module('JSHint - authenticators');
  test('authenticators/custom.js should pass jshint', function() { 
    ok(false, 'authenticators/custom.js should pass jshint.\nauthenticators/custom.js: line 16, col 28, Missing semicolon.\nauthenticators/custom.js: line 19, col 27, Missing semicolon.\nauthenticators/custom.js: line 23, col 25, Missing semicolon.\nauthenticators/custom.js: line 24, col 9, Missing semicolon.\nauthenticators/custom.js: line 25, col 7, Missing semicolon.\nauthenticators/custom.js: line 29, col 27, Missing semicolon.\nauthenticators/custom.js: line 30, col 33, Missing semicolon.\nauthenticators/custom.js: line 42, col 72, Missing semicolon.\nauthenticators/custom.js: line 43, col 22, Missing semicolon.\nauthenticators/custom.js: line 46, col 28, Missing semicolon.\nauthenticators/custom.js: line 49, col 20, Missing semicolon.\nauthenticators/custom.js: line 50, col 9, Missing semicolon.\nauthenticators/custom.js: line 51, col 7, Missing semicolon.\nauthenticators/custom.js: line 63, col 18, Missing semicolon.\nauthenticators/custom.js: line 65, col 17, Missing semicolon.\nauthenticators/custom.js: line 66, col 9, Missing semicolon.\nauthenticators/custom.js: line 67, col 7, Missing semicolon.\nauthenticators/custom.js: line 43, col 18, \'xhr\' is not defined.\nauthenticators/custom.js: line 54, col 24, \'data\' is defined but never used.\nauthenticators/custom.js: line 62, col 14, \'response\' is defined but never used.\nauthenticators/custom.js: line 64, col 11, \'xhr\' is defined but never used.\n\n21 errors'); 
  });

});
define('adminclient/tests/authorizers/custom.jshint', function () {

  'use strict';

  module('JSHint - authorizers');
  test('authorizers/custom.js should pass jshint', function() { 
    ok(false, 'authorizers/custom.js should pass jshint.\nauthorizers/custom.js: line 7, col 49, \'Ember\' is not defined.\nauthorizers/custom.js: line 5, col 28, \'options\' is defined but never used.\n\n2 errors'); 
  });

});
define('adminclient/tests/func/fuzzymatch.jshint', function () {

  'use strict';

  module('JSHint - func');
  test('func/fuzzymatch.js should pass jshint', function() { 
    ok(false, 'func/fuzzymatch.js should pass jshint.\nfunc/fuzzymatch.js: line 2, col 9, \'a\' is already defined.\nfunc/fuzzymatch.js: line 2, col 26, Missing semicolon.\nfunc/fuzzymatch.js: line 3, col 9, \'b\' is already defined.\nfunc/fuzzymatch.js: line 3, col 26, Missing semicolon.\nfunc/fuzzymatch.js: line 4, col 13, Missing semicolon.\nfunc/fuzzymatch.js: line 8, col 19, Missing semicolon.\nfunc/fuzzymatch.js: line 11, col 14, Missing semicolon.\nfunc/fuzzymatch.js: line 12, col 2, Missing semicolon.\n\n8 errors'); 
  });

});
define('adminclient/tests/helpers/resolver', ['exports', 'ember/resolver', 'adminclient/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('adminclient/tests/helpers/resolver.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/resolver.js should pass jshint', function() { 
    ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('adminclient/tests/helpers/start-app', ['exports', 'ember', 'adminclient/app', 'adminclient/router', 'adminclient/config/environment'], function (exports, Ember, Application, Router, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('adminclient/tests/helpers/start-app.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/start-app.js should pass jshint', function() { 
    ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('adminclient/tests/login/controller.jshint', function () {

  'use strict';

  module('JSHint - login');
  test('login/controller.js should pass jshint', function() { 
    ok(true, 'login/controller.js should pass jshint.'); 
  });

});
define('adminclient/tests/login/route.jshint', function () {

  'use strict';

  module('JSHint - login');
  test('login/route.js should pass jshint', function() { 
    ok(true, 'login/route.js should pass jshint.'); 
  });

});
define('adminclient/tests/router.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('router.js should pass jshint', function() { 
    ok(false, 'router.js should pass jshint.\nrouter.js: line 10, col 44, Missing semicolon.\n\n1 error'); 
  });

});
define('adminclient/tests/test-helper', ['adminclient/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('adminclient/tests/test-helper.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('test-helper.js should pass jshint', function() { 
    ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('adminclient/tests/unit/adapters/application-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("adapter:application", "ApplicationAdapter", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });

  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']

});
define('adminclient/tests/unit/adapters/application-test.jshint', function () {

  'use strict';

  module('JSHint - unit/adapters');
  test('unit/adapters/application-test.js should pass jshint', function() { 
    ok(true, 'unit/adapters/application-test.js should pass jshint.'); 
  });

});
define('adminclient/tests/unit/application/controller-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("controller:application", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('adminclient/tests/unit/application/controller-test.jshint', function () {

  'use strict';

  module('JSHint - unit/application');
  test('unit/application/controller-test.js should pass jshint', function() { 
    ok(true, 'unit/application/controller-test.js should pass jshint.'); 
  });

});
define('adminclient/tests/unit/application/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:application", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('adminclient/tests/unit/application/route-test.jshint', function () {

  'use strict';

  module('JSHint - unit/application');
  test('unit/application/route-test.js should pass jshint', function() { 
    ok(true, 'unit/application/route-test.js should pass jshint.'); 
  });

});
define('adminclient/tests/unit/authentication/controller-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("controller:authentication", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('adminclient/tests/unit/authentication/controller-test.jshint', function () {

  'use strict';

  module('JSHint - unit/authentication');
  test('unit/authentication/controller-test.js should pass jshint', function() { 
    ok(true, 'unit/authentication/controller-test.js should pass jshint.'); 
  });

});
define('adminclient/tests/unit/controllers/user-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("controller:user", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('adminclient/tests/unit/controllers/user-test.jshint', function () {

  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/user-test.js should pass jshint', function() { 
    ok(true, 'unit/controllers/user-test.js should pass jshint.'); 
  });

});
define('adminclient/tests/unit/foo/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:foo", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('adminclient/tests/unit/foo/route-test.jshint', function () {

  'use strict';

  module('JSHint - unit/foo');
  test('unit/foo/route-test.js should pass jshint', function() { 
    ok(true, 'unit/foo/route-test.js should pass jshint.'); 
  });

});
define('adminclient/tests/unit/index/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:index", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('adminclient/tests/unit/index/route-test.jshint', function () {

  'use strict';

  module('JSHint - unit/index');
  test('unit/index/route-test.js should pass jshint', function() { 
    ok(true, 'unit/index/route-test.js should pass jshint.'); 
  });

});
define('adminclient/tests/unit/login/controller-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("controller:login", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('adminclient/tests/unit/login/controller-test.jshint', function () {

  'use strict';

  module('JSHint - unit/login');
  test('unit/login/controller-test.js should pass jshint', function() { 
    ok(true, 'unit/login/controller-test.js should pass jshint.'); 
  });

});
define('adminclient/tests/unit/login/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:login", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('adminclient/tests/unit/login/route-test.jshint', function () {

  'use strict';

  module('JSHint - unit/login');
  test('unit/login/route-test.js should pass jshint', function() { 
    ok(true, 'unit/login/route-test.js should pass jshint.'); 
  });

});
define('adminclient/tests/unit/models/user-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel("user", {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test("it exists", function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('adminclient/tests/unit/models/user-test.jshint', function () {

  'use strict';

  module('JSHint - unit/models');
  test('unit/models/user-test.js should pass jshint', function() { 
    ok(true, 'unit/models/user-test.js should pass jshint.'); 
  });

});
define('adminclient/tests/unit/pods/users/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:users", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('adminclient/tests/unit/pods/users/route-test.jshint', function () {

  'use strict';

  module('JSHint - unit/pods/users');
  test('unit/pods/users/route-test.js should pass jshint', function() { 
    ok(true, 'unit/pods/users/route-test.js should pass jshint.'); 
  });

});
define('adminclient/tests/unit/routes/index-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:index", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('adminclient/tests/unit/routes/index-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/index-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/index-test.js should pass jshint.'); 
  });

});
define('adminclient/tests/unit/routes/user-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:user", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('adminclient/tests/unit/routes/user-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/user-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/user-test.js should pass jshint.'); 
  });

});
define('adminclient/tests/unit/routes/users-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:users", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('adminclient/tests/unit/routes/users-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/users-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/users-test.js should pass jshint.'); 
  });

});
define('adminclient/tests/unit/serializers/application-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("serializer:application", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function (assert) {
    var serializer = this.subject();
    assert.ok(serializer);
  });

  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']

});
define('adminclient/tests/unit/serializers/application-test.jshint', function () {

  'use strict';

  module('JSHint - unit/serializers');
  test('unit/serializers/application-test.js should pass jshint', function() { 
    ok(true, 'unit/serializers/application-test.js should pass jshint.'); 
  });

});
define('adminclient/tests/unit/user/controller-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("controller:user", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('adminclient/tests/unit/user/controller-test.jshint', function () {

  'use strict';

  module('JSHint - unit/user');
  test('unit/user/controller-test.js should pass jshint', function() { 
    ok(true, 'unit/user/controller-test.js should pass jshint.'); 
  });

});
define('adminclient/tests/unit/user/model-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel("user", {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test("it exists", function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('adminclient/tests/unit/user/model-test.jshint', function () {

  'use strict';

  module('JSHint - unit/user');
  test('unit/user/model-test.js should pass jshint', function() { 
    ok(true, 'unit/user/model-test.js should pass jshint.'); 
  });

});
define('adminclient/tests/unit/user/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:user", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('adminclient/tests/unit/user/route-test.jshint', function () {

  'use strict';

  module('JSHint - unit/user');
  test('unit/user/route-test.js should pass jshint', function() { 
    ok(true, 'unit/user/route-test.js should pass jshint.'); 
  });

});
define('adminclient/tests/unit/user/view-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("view:user");

  // Replace this with your real tests.
  ember_qunit.test("it exists", function (assert) {
    var view = this.subject();
    assert.ok(view);
  });

});
define('adminclient/tests/unit/user/view-test.jshint', function () {

  'use strict';

  module('JSHint - unit/user');
  test('unit/user/view-test.js should pass jshint', function() { 
    ok(true, 'unit/user/view-test.js should pass jshint.'); 
  });

});
define('adminclient/tests/unit/users/controller-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("controller:users", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('adminclient/tests/unit/users/controller-test.jshint', function () {

  'use strict';

  module('JSHint - unit/users');
  test('unit/users/controller-test.js should pass jshint', function() { 
    ok(true, 'unit/users/controller-test.js should pass jshint.'); 
  });

});
define('adminclient/tests/unit/users/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:users", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('adminclient/tests/unit/users/route-test.jshint', function () {

  'use strict';

  module('JSHint - unit/users');
  test('unit/users/route-test.js should pass jshint', function() { 
    ok(true, 'unit/users/route-test.js should pass jshint.'); 
  });

});
define('adminclient/tests/unit/views/contenteditable-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("view:contenteditable");

  // Replace this with your real tests.
  ember_qunit.test("it exists", function (assert) {
    var view = this.subject();
    assert.ok(view);
  });

});
define('adminclient/tests/unit/views/contenteditable-test.jshint', function () {

  'use strict';

  module('JSHint - unit/views');
  test('unit/views/contenteditable-test.js should pass jshint', function() { 
    ok(true, 'unit/views/contenteditable-test.js should pass jshint.'); 
  });

});
define('adminclient/tests/user/controller.jshint', function () {

  'use strict';

  module('JSHint - user');
  test('user/controller.js should pass jshint', function() { 
    ok(false, 'user/controller.js should pass jshint.\nuser/controller.js: line 11, col 28, Missing semicolon.\nuser/controller.js: line 13, col 17, Missing semicolon.\nuser/controller.js: line 20, col 34, Missing semicolon.\nuser/controller.js: line 21, col 26, Missing semicolon.\n\n4 errors'); 
  });

});
define('adminclient/tests/user/model.jshint', function () {

  'use strict';

  module('JSHint - user');
  test('user/model.js should pass jshint', function() { 
    ok(true, 'user/model.js should pass jshint.'); 
  });

});
define('adminclient/tests/users/edit/route.jshint', function () {

  'use strict';

  module('JSHint - users/edit');
  test('users/edit/route.js should pass jshint', function() { 
    ok(false, 'users/edit/route.js should pass jshint.\nusers/edit/route.js: line 11, col 18, Missing semicolon.\nusers/edit/route.js: line 16, col 27, Missing semicolon.\nusers/edit/route.js: line 23, col 33, Missing semicolon.\n\n3 errors'); 
  });

});
define('adminclient/tests/users/index/controller.jshint', function () {

  'use strict';

  module('JSHint - users/index');
  test('users/index/controller.js should pass jshint', function() { 
    ok(false, 'users/index/controller.js should pass jshint.\nusers/index/controller.js: line 2, col 47, Missing semicolon.\nusers/index/controller.js: line 23, col 21, Missing semicolon.\nusers/index/controller.js: line 26, col 18, Missing semicolon.\nusers/index/controller.js: line 27, col 7, Missing semicolon.\n\n4 errors'); 
  });

});
define('adminclient/tests/users/index/route.jshint', function () {

  'use strict';

  module('JSHint - users/index');
  test('users/index/route.js should pass jshint', function() { 
    ok(true, 'users/index/route.js should pass jshint.'); 
  });

});
define('adminclient/tests/users/route.jshint', function () {

  'use strict';

  module('JSHint - users');
  test('users/route.js should pass jshint', function() { 
    ok(true, 'users/route.js should pass jshint.'); 
  });

});
define('adminclient/tests/views/contenteditable.jshint', function () {

  'use strict';

  module('JSHint - views');
  test('views/contenteditable.js should pass jshint', function() { 
    ok(false, 'views/contenteditable.js should pass jshint.\nviews/contenteditable.js: line 46, col 21, \'event\' is defined but never used.\n\n1 error'); 
  });

});
define('adminclient/user/controller', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].ObjectController.extend({

    roles: ["admin", "normal"],

    isClean: Ember['default'].computed.not("model.isDirty"),

    resetModel: function resetModel() {
      if (this.model.get("isDirty")) {
        this.model.rollback();
      }
      return false;
    },

    actions: {

      destroy: function destroy() {
        if (confirm("Are you sure you want to destroy user " + this.model.get("name"))) {
          this.model.deleteRecord();
          this.model.save();
        }
      }
    }

  });

});
define('adminclient/user/model', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].Model.extend({
    name: DS['default'].attr("string"),
    phoneNumber: DS['default'].attr("string"),
    email: DS['default'].attr("string"),
    role: DS['default'].attr("string"),
    createdAt: DS['default'].attr("date"),
    updatedAt: DS['default'].attr("date")
  });

});
define('adminclient/users/edit/route', ['exports', 'ember', 'simple-auth/mixins/authenticated-route-mixin'], function (exports, Ember, AuthenticatedRouteMixin) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend(AuthenticatedRouteMixin['default'], {

    controllerName: "user",

    actions: {

      save: function save(user) {
        user.save();
      },

      willTransition: function willTransition(transition) {
        if (this.controller.model.get("isDirty") && !confirm("User has changes, want to continue?")) {
          transition.abort();
        }
      }

    },

    deactivate: function deactivate() {
      this.controller.resetModel();
    }

  });

});
define('adminclient/users/edit/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("table");
        dom.setAttribute(el1,"class","table");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tbody");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tr");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        var el5 = dom.createTextNode("Name:");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tr");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        var el5 = dom.createTextNode("Email:");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tr");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        var el5 = dom.createTextNode("Phone:");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tr");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        var el5 = dom.createTextNode("Role:");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        dom.setAttribute(el1,"type","button");
        dom.setAttribute(el1,"class","btn btn-success");
        var el2 = dom.createTextNode("Save");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline, get = hooks.get, element = hooks.element;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(fragment, [2]);
        var morph0 = dom.createMorphAt(dom.childAt(element0, [1, 3]),-1,-1);
        var morph1 = dom.createMorphAt(dom.childAt(element0, [3, 3]),-1,-1);
        var morph2 = dom.createMorphAt(dom.childAt(element0, [5, 3]),-1,-1);
        var morph3 = dom.createMorphAt(dom.childAt(element0, [7, 3]),0,1);
        inline(env, morph0, context, "view", ["contenteditable"], {"valueBinding": "model.name", "editable": true});
        inline(env, morph1, context, "view", ["contenteditable"], {"valueBinding": "model.email", "editable": true});
        inline(env, morph2, context, "view", ["contenteditable"], {"valueBinding": "model.phoneNumber", "editable": true});
        inline(env, morph3, context, "view", ["select"], {"content": get(env, context, "roles"), "selection": get(env, context, "model.role")});
        element(env, element1, context, "bind-attr", [], {"disabled": "isClean"});
        element(env, element1, context, "action", ["save", get(env, context, "model")], {});
        return fragment;
      }
    };
  }()));

});
define('adminclient/users/index/controller', ['exports', 'ember', 'adminclient/func/fuzzymatch'], function (exports, Ember, fuzzymatch) {

  'use strict';

  exports['default'] = Ember['default'].ArrayController.extend({

    queryParams: ["role"],

    role: "",

    search: "",

    filteredModels: (function () {
      var _this = this;

      return this.model.filter(function (user) {

        if (_this.role && user.get("role") !== _this.role || _this.search && !(fuzzymatch['default'](user.get("name"), _this.search) || fuzzymatch['default'](user.get("email"), _this.search) || user.get("phoneNumber").match(_this.search))) {
          return false;
        }

        return true;
      });
    }).property("role", "search", "model")

  });

});
define('adminclient/users/index/route', ['exports', 'ember', 'simple-auth/mixins/authenticated-route-mixin'], function (exports, Ember, AuthenticatedRouteMixin) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend(AuthenticatedRouteMixin['default'], {

    model: function model() {
      return this.store.find("user");
    }

  });

});
define('adminclient/users/index/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, content = hooks.content;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
            content(env, morph0, context, "user.name");
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          dom.setAttribute(el3,"type","button");
          dom.setAttribute(el3,"class","btn btn-danger btn-sm");
          var el4 = dom.createTextNode("delete");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block, content = hooks.content, element = hooks.element;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [9, 1]);
          var morph0 = dom.createMorphAt(dom.childAt(element0, [1]),0,1);
          var morph1 = dom.createMorphAt(dom.childAt(element0, [3]),-1,-1);
          var morph2 = dom.createMorphAt(dom.childAt(element0, [5]),-1,-1);
          var morph3 = dom.createMorphAt(dom.childAt(element0, [7]),-1,-1);
          block(env, morph0, context, "link-to", ["users.edit", get(env, context, "user")], {}, child0, null);
          content(env, morph1, context, "user.phoneNumber");
          content(env, morph2, context, "user.email");
          content(env, morph3, context, "user.role");
          element(env, element1, context, "action", ["destroy", get(env, context, "user")], {});
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" <section class=\"data-filter\">\n  <form class=\"navbar-form navbar-left\" role=\"search\">\n    <div class=\"form-group\">\n      {{input type=\"text\" value=search placeholder=\"search\" class=\"form-control\"}}\n    </div>\n  </form>\n</section> ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1,"class","data-table");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("table");
        dom.setAttribute(el2,"class","table");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("thead");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tr");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        var el6 = dom.createTextNode("Name");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        var el6 = dom.createTextNode("Email");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        var el6 = dom.createTextNode("Phone");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        var el6 = dom.createTextNode("Role");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("th");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tbody");
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [2, 1, 3]),0,1);
        block(env, morph0, context, "each", [get(env, context, "filteredModels")], {"itemController": "user", "keyword": "user"}, child0, null);
        return fragment;
      }
    };
  }()));

});
define('adminclient/users/route', ['exports', 'ember', 'simple-auth/mixins/authenticated-route-mixin'], function (exports, Ember, AuthenticatedRouteMixin) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend(AuthenticatedRouteMixin['default'], {});

});
define('adminclient/users/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[0]); }
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        content(env, morph0, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('adminclient/views/contenteditable', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].View.extend({
		tagName: "div",
		attributeBindings: ["contenteditable"],

		// Variables:
		editable: false,
		isUserTyping: false,
		plaintext: false,

		// Properties:
		contenteditable: (function () {
			var editable = this.get("editable");

			return editable ? "true" : undefined;
		}).property("editable"),

		// Processors:
		processValue: function processValue() {
			if (!this.get("isUserTyping") && this.get("value")) {
				return this.setContent();
			}
		},

		// Observers:
		valueObserver: (function () {
			Ember['default'].run.once(this, "processValue");
		}).observes("value", "isUserTyping"),

		// Events:
		didInsertElement: function didInsertElement() {
			return this.setContent();
		},

		focusOut: function focusOut() {
			return this.set("isUserTyping", false);
		},

		keyDown: function keyDown(event) {
			if (!event.metaKey) {
				return this.set("isUserTyping", true);
			}
		},

		keyUp: function keyUp(event) {
			if (this.get("plaintext")) {
				return this.set("value", this.$().text());
			} else {
				return this.set("value", this.$().html());
			}
		},

		//render our own html so there are no metamorphs to get screwed up when the user changes the html
		render: function render(buffer) {
			buffer.push(this.get("value"));
		},

		setContent: function setContent() {
			return this.$().html(Ember['default'].Handlebars.Utils.escapeExpression(this.get("value")));
		}
	});

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('adminclient/config/environment', ['ember'], function(Ember) {
  var prefix = 'adminclient';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("adminclient/tests/test-helper");
} else {
  require("adminclient/app")["default"].create({"name":"adminclient","version":"0.0.0.c5ce6cc2"});
}

/* jshint ignore:end */
//# sourceMappingURL=adminclient.map