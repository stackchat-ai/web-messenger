/*!
 * stackchat 2.1.29 
 * License : https://stackchat.com/terms
 * 
 * All files located in the node_modules and external directories are
 * externally maintained libraries used by this software which have their
 * own licenses; we recommend you read them, as their terms may differ from
 * the terms above.
 * 
 */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.waitForPage = waitForPage;
exports.generateMediaQuery = generateMediaQuery;
function waitForPage(next) {
    if ((document.readyState === 'complete' || document.readyState === 'loaded' || document.readyState === 'interactive') && document.body) {
        next();
    } else {
        document.addEventListener('DOMContentLoaded', function () {
            next();
        });
    }
}

function generateMediaQuery(rule) {
    var parts = ['screen'];

    if (rule.minHeight) {
        parts.push('(min-height: ' + rule.minHeight + 'px)');
    }

    if (rule.maxHeight) {
        parts.push('(max-height: ' + rule.maxHeight + 'px)');
    }

    if (rule.minWidth) {
        parts.push('(min-width: ' + rule.minWidth + 'px)');
    }

    if (rule.maxWidth) {
        parts.push('(max-width: ' + rule.maxWidth + 'px)');
    }
    return parts.join(' and ');
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * Helper function for iterating over a collection
 *
 * @param collection
 * @param fn
 */
function each(collection, fn) {
    var i      = 0,
        length = collection.length,
        cont;

    for(i; i < length; i++) {
        cont = fn(collection[i], i);
        if(cont === false) {
            break; //allow early exit
        }
    }
}

/**
 * Helper function for determining whether target object is an array
 *
 * @param target the object under test
 * @return {Boolean} true if array, false otherwise
 */
function isArray(target) {
    return Object.prototype.toString.apply(target) === '[object Array]';
}

/**
 * Helper function for determining whether target object is a function
 *
 * @param target the object under test
 * @return {Boolean} true if function, false otherwise
 */
function isFunction(target) {
    return typeof target === 'function';
}

module.exports = {
    isFunction : isFunction,
    isArray : isArray,
    each : each
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dom = __webpack_require__(0);

var _enquire = __webpack_require__(4);

var enquire = _interopRequireWildcard(_enquire);

var _ids = __webpack_require__(10);

var _iframe = __webpack_require__(11);

var _iframe2 = _interopRequireDefault(_iframe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var WebMessenger = {};

module.exports = WebMessenger;

var Lib = void 0;
var iframe = void 0;
var isEmbedded = void 0;
var embeddedContainer = void 0;
var pendingInitChains = [];
var pendingOnCalls = [];
var pendingInitCall = void 0;

var isCrawler = /lebo|awle|pide|obo|rawli|dsbo/i.test(navigator.userAgent);
var isPhantomJS = /PhantomJS/.test(navigator.userAgent) && "production" !== 'test';

/** This is the list of all the public functions that are attached to Web Messenger */
var LIB_FUNCS = ['init', 'destroy', 'login', 'on', 'off', 'logout', 'sendMessage', 'triggerPostback', 'updateUser', 'getConversation', 'getUser', 'open', 'close', 'isOpened', 'startConversation', 'setDelegate', 'markAllAsRead', 'notificationChannelPromptEnabled', 'setPredefinedMessage', 'openSpeechRecognitionModal', 'closeSpeechRecognitionModal', 'simulateMessage', 'updateLocale', 'showActivityIndicator', 'hideActivityIndicator', 'updateAnalyticsId', 'isRecording', 'addMessages', 'setConversation', 'getPersonas', 'hasConversationStarted'];

/**
 * @var {object} Skeleton
 * The module or global object to be exposed that contains the setup and tear
 * down functions of web-messenger. This is what is initially loaded onto a page
 * before the web-messenger assets are loaded from CDN.
 *
 * All the functions in here are to help bootstrap the messenger applet.
 */
var Skeleton = {
    VERSION: '2.1.29',
    PUBLIC_PATH:  false ? "/" : "https://assets.au.stackchat.com/sdk/web-messenger/2.1.29/",
    on: function on() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        if (!pendingOnCalls) {
            pendingOnCalls = [];
        }

        pendingOnCalls.push({
            args: args
        });
    },
    init: function init() {
        var region = "world"; // placeholder.

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        pendingInitCall = args;
        isEmbedded = args.length > 0 && !!args[0].embedded;

        if (args[0].region === "cn") {
            // set region to china.
            region = "cn";
            // Set public path to china
            this.PUBLIC_PATH = "https://assets.common.stackchat.com.cn/sdk/web-messenger/2.1.29/";
        }

        if (!isCrawler && !isPhantomJS) {
            (0, _dom.waitForPage)(function () {
                injectHostStyles(region);
                injectFrame(region);
            });
        }

        var fakePromise = {
            then: function then(next) {
                pendingInitChains.push({
                    type: 'then',
                    next: next
                });
                return fakePromise;
            },
            catch: function _catch(next) {
                pendingInitChains.push({
                    type: 'catch',
                    next: next
                });
                return fakePromise;
            }
        };

        return fakePromise;
    },
    render: function render(container) {
        if (iframe) {
            container.appendChild(iframe);
        } else {
            embeddedContainer = container;
        }
    },
    destroy: function destroy() {
        if (Lib) {
            iframe.remove ? iframe.remove() : iframe.parentNode.removeChild(iframe);
            enquire.unregister();
            setUp();
        }
    }
};

/**
 * The param `region` is only required for
 * China. Optional for the rest of the world
 */
function injectHostStyles(region) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = region === "cn" ? 'https://assets.common.stackchat.com.cn/sdk/web-messenger/2.1.29/stackchat.2.1.29.css' : 'https://assets.au.stackchat.com/sdk/web-messenger/2.1.29/stackchat.2.1.29.css';
    document.body.appendChild(link);
}

/**
 * The param `region` is only required for China. Optional for the rest of the
 * world
 */
function injectFrame(region) {
    var REACT_DEBUG_SCRIPT =  false ? '<script nonce=reactdevtoolglobalhook> __REACT_DEVTOOLS_GLOBAL_HOOK__ = parent.__REACT_DEVTOOLS_GLOBAL_HOOK__ </script>' : '';

    if (!iframe) {
        var loadCheck = null;
        var loaded = false;

        iframe = document.createElement('iframe');

        iframe.id = _ids.IFRAME_ID;
        iframe.frameBorder = 0;
        iframe.allowFullscreen = true;
        iframe.allowTransparency = true;
        iframe.scrolling = 'no';

        iframe.className = _iframe2.default.iframe;

        var frameCssUrl = region === "cn" ? 'https://assets.common.stackchat.com.cn/sdk/web-messenger/2.1.29/frame.2.1.29.css' : 'https://assets.au.stackchat.com/sdk/web-messenger/2.1.29/frame.2.1.29.css';
        var frameJsUrl = region === "cn" ? 'https://assets.common.stackchat.com.cn/sdk/web-messenger/2.1.29/frame.2.1.29.min.js' : 'https://assets.au.stackchat.com/sdk/web-messenger/2.1.29/frame.2.1.29.min.js';

        var _writeToIFrame = function _writeToIFrame() {
            loaded = true;
            clearInterval(loadCheck);
            delete iframe.onload;

            var iframeDoc = _getIFrameDoc(iframe);
            iframeDoc.open();
            iframeDoc.write('\n                    <!DOCTYPE html>\n                    <html>\n                        <head>\n                            ' + REACT_DEBUG_SCRIPT + '\n                            <link rel="stylesheet" href="' + frameCssUrl + '" type="text/css" />\n                            <script src="' + frameJsUrl + '" async crossorigin="anonymous"></script>\n                        </head>\n                        <body>\n                            <div id="mount"></div>\n                        </body>\n                    </html>\n                    ');
            iframeDoc.close();
        };

        // Some browsers seem to not trigger onload
        loadCheck = setInterval(function () {
            var iframeDoc = _getIFrameDoc(iframe);
            if (!loaded && iframeDoc && (iframeDoc.readyState == 'complete' || iframeDoc.readyState == 'interactive')) {
                _writeToIFrame();
            }
        }, 1000);

        iframe.onload = function () {
            if (!loaded) {
                _writeToIFrame();
            }
        };
    }

    if (isEmbedded) {
        if (embeddedContainer) {
            embeddedContainer.appendChild(iframe);
            embeddedContainer = undefined;
        }
    } else {
        document.body.appendChild(iframe);
    }
}

function onWebMessengerReady(_Lib) {
    window.__onWebMessengerFrameReady__ = function () {};
    Lib = _Lib;

    if (!isEmbedded) {
        enquire.init(iframe);
    }

    for (var func = LIB_FUNCS[0], i = 0; i < LIB_FUNCS.length; func = LIB_FUNCS[++i]) {
        WebMessenger[func] = Lib[func];
    }

    if (pendingOnCalls) {
        for (var call = pendingOnCalls[0], _i = 0; _i < pendingOnCalls.length; call = pendingOnCalls[++_i]) {
            var _Lib2;

            (_Lib2 = Lib).on.apply(_Lib2, _toConsumableArray(call.args));
        }
        pendingOnCalls = undefined;
    }

    if (pendingInitCall) {
        var _Lib3;

        var promise = (_Lib3 = Lib).init.apply(_Lib3, _toConsumableArray(pendingInitCall));
        pendingInitCall = undefined;

        for (var _call = pendingInitChains[0], _i2 = 0; _i2 < pendingInitChains.length; _call = pendingInitChains[++_i2]) {
            if (_call.type === 'then') {
                promise = promise.then(_call.next);
            } else {
                promise = promise.catch(_call.next);
            }
        }

        pendingInitChains = [];
    }
}

var _getIFrameDoc = function _getIFrameDoc(iframe) {
    return iframe.contentWindow && iframe.contentWindow.document;
};

function setUp() {
    if (document.getElementById(_ids.IFRAME_ID)) {
        // Iframe has already been injected, destroy() was not yet called. The
        // loader may have been double invoked
        return;
    }

    Lib = undefined;
    iframe = undefined;
    // Bind load function to this global.
    window.__onWebMessengerFrameReady__ = onWebMessengerReady;
    for (var func = LIB_FUNCS[0], i = 0; i < LIB_FUNCS.length; func = LIB_FUNCS[++i]) {
        if (WebMessenger[func]) {
            delete WebMessenger[func];
        }
    }

    _extends(WebMessenger, Skeleton);
}

// Init
if (!document.getElementById(_ids.IFRAME_ID)) {
    setUp();

    if (window.__onWebMessengerHostReady__) {
        window.__onWebMessengerHostReady__(WebMessenger);
    } else if (true) {
        // Script loader wasn't found, host bundle is being used on its own.
        global['stackchat'] = WebMessenger;
    }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.init = init;
exports.unregister = unregister;

var _enquire = __webpack_require__(5);

var _enquire2 = _interopRequireDefault(_enquire);

var _sizes = __webpack_require__(9);

var _dom = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizes = ['lg', 'md', 'sm', 'xs'];

function applyRules(enquireFunction) {
    for (var i = 0; i < sizes.length; i++) {
        var size = sizes[i];

        var rules = _sizes.SCREEN_SIZES[size];
        // polyfill for Array.isArray
        if (Object.prototype.toString.call(rules) !== '[object Array]') {
            rules = [rules];
        }

        for (var j = 0; j < rules.length; j++) {
            var rule = rules[j];
            enquireFunction({ rule: rule, size: size });
        }
    }
}

function init(iframe) {
    applyRules(function (_ref) {
        var rule = _ref.rule,
            size = _ref.size;

        _enquire2.default.register((0, _dom.generateMediaQuery)(rule), function () {
            iframe.contentWindow.postMessage({
                type: 'sizeChange',
                value: size
            }, location.protocol + '//' + location.host);
        });
    });
}

function unregister() {
    applyRules(function (_ref2) {
        var rule = _ref2.rule;

        _enquire2.default.unregister((0, _dom.generateMediaQuery)(rule));
    });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var MediaQueryDispatch = __webpack_require__(6);
module.exports = new MediaQueryDispatch();


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var MediaQuery = __webpack_require__(7);
var Util = __webpack_require__(1);
var each = Util.each;
var isFunction = Util.isFunction;
var isArray = Util.isArray;

/**
 * Allows for registration of query handlers.
 * Manages the query handler's state and is responsible for wiring up browser events
 *
 * @constructor
 */
function MediaQueryDispatch () {
    if(!window.matchMedia) {
        throw new Error('matchMedia not present, legacy browsers require a polyfill');
    }

    this.queries = {};
    this.browserIsIncapable = !window.matchMedia('only all').matches;
}

MediaQueryDispatch.prototype = {

    constructor : MediaQueryDispatch,

    /**
     * Registers a handler for the given media query
     *
     * @param {string} q the media query
     * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
     * @param {function} options.match fired when query matched
     * @param {function} [options.unmatch] fired when a query is no longer matched
     * @param {function} [options.setup] fired when handler first triggered
     * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
     * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
     */
    register : function(q, options, shouldDegrade) {
        var queries         = this.queries,
            isUnconditional = shouldDegrade && this.browserIsIncapable;

        if(!queries[q]) {
            queries[q] = new MediaQuery(q, isUnconditional);
        }

        //normalise to object in an array
        if(isFunction(options)) {
            options = { match : options };
        }
        if(!isArray(options)) {
            options = [options];
        }
        each(options, function(handler) {
            if (isFunction(handler)) {
                handler = { match : handler };
            }
            queries[q].addHandler(handler);
        });

        return this;
    },

    /**
     * unregisters a query and all it's handlers, or a specific handler for a query
     *
     * @param {string} q the media query to target
     * @param {object || function} [handler] specific handler to unregister
     */
    unregister : function(q, handler) {
        var query = this.queries[q];

        if(query) {
            if(handler) {
                query.removeHandler(handler);
            }
            else {
                query.clear();
                delete this.queries[q];
            }
        }

        return this;
    }
};

module.exports = MediaQueryDispatch;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var QueryHandler = __webpack_require__(8);
var each = __webpack_require__(1).each;

/**
 * Represents a single media query, manages it's state and registered handlers for this query
 *
 * @constructor
 * @param {string} query the media query string
 * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
 */
function MediaQuery(query, isUnconditional) {
    this.query = query;
    this.isUnconditional = isUnconditional;
    this.handlers = [];
    this.mql = window.matchMedia(query);

    var self = this;
    this.listener = function(mql) {
        // Chrome passes an MediaQueryListEvent object, while other browsers pass MediaQueryList directly
        self.mql = mql.currentTarget || mql;
        self.assess();
    };
    this.mql.addListener(this.listener);
}

MediaQuery.prototype = {

    constuctor : MediaQuery,

    /**
     * add a handler for this query, triggering if already active
     *
     * @param {object} handler
     * @param {function} handler.match callback for when query is activated
     * @param {function} [handler.unmatch] callback for when query is deactivated
     * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
     * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
     */
    addHandler : function(handler) {
        var qh = new QueryHandler(handler);
        this.handlers.push(qh);

        this.matches() && qh.on();
    },

    /**
     * removes the given handler from the collection, and calls it's destroy methods
     *
     * @param {object || function} handler the handler to remove
     */
    removeHandler : function(handler) {
        var handlers = this.handlers;
        each(handlers, function(h, i) {
            if(h.equals(handler)) {
                h.destroy();
                return !handlers.splice(i,1); //remove from array and exit each early
            }
        });
    },

    /**
     * Determine whether the media query should be considered a match
     *
     * @return {Boolean} true if media query can be considered a match, false otherwise
     */
    matches : function() {
        return this.mql.matches || this.isUnconditional;
    },

    /**
     * Clears all handlers and unbinds events
     */
    clear : function() {
        each(this.handlers, function(handler) {
            handler.destroy();
        });
        this.mql.removeListener(this.listener);
        this.handlers.length = 0; //clear array
    },

    /*
        * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
        */
    assess : function() {
        var action = this.matches() ? 'on' : 'off';

        each(this.handlers, function(handler) {
            handler[action]();
        });
    }
};

module.exports = MediaQuery;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * Delegate to handle a media query being matched and unmatched.
 *
 * @param {object} options
 * @param {function} options.match callback for when the media query is matched
 * @param {function} [options.unmatch] callback for when the media query is unmatched
 * @param {function} [options.setup] one-time callback triggered the first time a query is matched
 * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
 * @constructor
 */
function QueryHandler(options) {
    this.options = options;
    !options.deferSetup && this.setup();
}

QueryHandler.prototype = {

    constructor : QueryHandler,

    /**
     * coordinates setup of the handler
     *
     * @function
     */
    setup : function() {
        if(this.options.setup) {
            this.options.setup();
        }
        this.initialised = true;
    },

    /**
     * coordinates setup and triggering of the handler
     *
     * @function
     */
    on : function() {
        !this.initialised && this.setup();
        this.options.match && this.options.match();
    },

    /**
     * coordinates the unmatch event for the handler
     *
     * @function
     */
    off : function() {
        this.options.unmatch && this.options.unmatch();
    },

    /**
     * called when a handler is to be destroyed.
     * delegates to the destroy or unmatch callbacks, depending on availability.
     *
     * @function
     */
    destroy : function() {
        this.options.destroy ? this.options.destroy() : this.off();
    },

    /**
     * determines equality by reference.
     * if object is supplied compare options, if function, compare match callback
     *
     * @function
     * @param {object || function} [target] the target for comparison
     */
    equals : function(target) {
        return this.options === target || this.options.match === target;
    }

};

module.exports = QueryHandler;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var SCREEN_SIZES = exports.SCREEN_SIZES = {
    lg: {
        minHeight: 668,
        minWidth: 1200
    },
    md: [{
        minHeight: 508,
        minWidth: 768,
        maxWidth: 1199
    }, {
        minHeight: 508,
        maxHeight: 667,
        minWidth: 768
    }],
    sm: {
        maxHeight: 507,
        minWidth: 768
    },
    xs: {
        maxWidth: 767
    }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var IFRAME_ID = exports.IFRAME_ID = 'web-messenger-container';

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"iframe":"_2ChX4GFAl1-UBiWknYZyEQ","displayButton":"avcHn2VQJenBvoR5hilPG","widgetClosed":"_3fQbteJd3oQu4il3LpMKkX","iframe-button-close-lg":"_3FxKeTOOgcsFroUq6se9N7","iframe-button-close-md":"_1GmqPtlICLsWVMg2Kpdx_0","iframe-button-close-sm":"_36mHeCXpAKdhEsuuD5g8oV","iframe-button-close-xs":"_1ZWQW0p6AI6UGwBFbdBf9M","displayTab":"_3dtqBiGeC8k3yop4A-9Lwm","widgetOpened":"_2TELtk5nDKlQudVSivRjpt","widgetEmbedded":"_24n-ftZlG3wDvoWFR8zUnn"};

/***/ })
/******/ ]);