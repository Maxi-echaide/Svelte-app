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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = noop;
/* unused harmony export assign */
/* harmony export (immutable) */ __webpack_exports__["f"] = is_promise;
/* unused harmony export add_location */
/* unused harmony export run */
/* harmony export (immutable) */ __webpack_exports__["e"] = blank_object;
/* harmony export (immutable) */ __webpack_exports__["a"] = run_all;
/* harmony export (immutable) */ __webpack_exports__["d"] = is_function;
/* unused harmony export safe_not_equal */
/* unused harmony export src_url_equal */
/* unused harmony export srcset_url_equal */
/* unused harmony export not_equal */
/* unused harmony export is_empty */
/* unused harmony export validate_store */
/* unused harmony export subscribe */
/* unused harmony export get_store_value */
/* unused harmony export component_subscribe */
/* unused harmony export create_slot */
/* unused harmony export get_slot_changes */
/* unused harmony export update_slot_base */
/* unused harmony export update_slot */
/* unused harmony export get_all_dirty_from_scope */
/* unused harmony export exclude_internal_props */
/* unused harmony export compute_rest_props */
/* unused harmony export compute_slots */
/* unused harmony export once */
/* unused harmony export null_to_empty */
/* unused harmony export set_store_value */
/* unused harmony export action_destroyer */
/* unused harmony export split_css_unit */
/** @returns {void} */
function noop() {}

const identity = (x) => x;
/* harmony export (immutable) */ __webpack_exports__["b"] = identity;


/**
 * @template T
 * @template S
 * @param {T} tar
 * @param {S} src
 * @returns {T & S}
 */
function assign(tar, src) {
	// @ts-ignore
	for (const k in src) tar[k] = src[k];
	return /** @type {T & S} */ (tar);
}

// Adapted from https://github.com/then/is-promise/blob/master/index.js
// Distributed under MIT License https://github.com/then/is-promise/blob/master/LICENSE
/**
 * @param {any} value
 * @returns {value is PromiseLike<any>}
 */
function is_promise(value) {
	return (
		!!value &&
		(typeof value === 'object' || typeof value === 'function') &&
		typeof (/** @type {any} */ (value).then) === 'function'
	);
}

/** @returns {void} */
function add_location(element, file, line, column, char) {
	element.__svelte_meta = {
		loc: { file, line, column, char }
	};
}

function run(fn) {
	return fn();
}

function blank_object() {
	return Object.create(null);
}

/**
 * @param {Function[]} fns
 * @returns {void}
 */
function run_all(fns) {
	fns.forEach(run);
}

/**
 * @param {any} thing
 * @returns {thing is Function}
 */
function is_function(thing) {
	return typeof thing === 'function';
}

/** @returns {boolean} */
function safe_not_equal(a, b) {
	return a != a ? b == b : a !== b || (a && typeof a === 'object') || typeof a === 'function';
}

let src_url_equal_anchor;

/**
 * @param {string} element_src
 * @param {string} url
 * @returns {boolean}
 */
function src_url_equal(element_src, url) {
	if (element_src === url) return true;
	if (!src_url_equal_anchor) {
		src_url_equal_anchor = document.createElement('a');
	}
	// This is actually faster than doing URL(..).href
	src_url_equal_anchor.href = url;
	return element_src === src_url_equal_anchor.href;
}

/** @param {string} srcset */
function split_srcset(srcset) {
	return srcset.split(',').map((src) => src.trim().split(' ').filter(Boolean));
}

/**
 * @param {HTMLSourceElement | HTMLImageElement} element_srcset
 * @param {string | undefined | null} srcset
 * @returns {boolean}
 */
function srcset_url_equal(element_srcset, srcset) {
	const element_urls = split_srcset(element_srcset.srcset);
	const urls = split_srcset(srcset || '');

	return (
		urls.length === element_urls.length &&
		urls.every(
			([url, width], i) =>
				width === element_urls[i][1] &&
				// We need to test both ways because Vite will create an a full URL with
				// `new URL(asset, import.meta.url).href` for the client when `base: './'`, and the
				// relative URLs inside srcset are not automatically resolved to absolute URLs by
				// browsers (in contrast to img.src). This means both SSR and DOM code could
				// contain relative or absolute URLs.
				(src_url_equal(element_urls[i][0], url) || src_url_equal(url, element_urls[i][0]))
		)
	);
}

/** @returns {boolean} */
function not_equal(a, b) {
	return a != a ? b == b : a !== b;
}

/** @returns {boolean} */
function is_empty(obj) {
	return Object.keys(obj).length === 0;
}

/** @returns {void} */
function validate_store(store, name) {
	if (store != null && typeof store.subscribe !== 'function') {
		throw new Error(`'${name}' is not a store with a 'subscribe' method`);
	}
}

function subscribe(store, ...callbacks) {
	if (store == null) {
		for (const callback of callbacks) {
			callback(undefined);
		}
		return noop;
	}
	const unsub = store.subscribe(...callbacks);
	return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}

/**
 * Get the current value from a store by subscribing and immediately unsubscribing.
 *
 * https://svelte.dev/docs/svelte-store#get
 * @template T
 * @param {import('../store/public.js').Readable<T>} store
 * @returns {T}
 */
function get_store_value(store) {
	let value;
	subscribe(store, (_) => (value = _))();
	return value;
}

/** @returns {void} */
function component_subscribe(component, store, callback) {
	component.$$.on_destroy.push(subscribe(store, callback));
}

function create_slot(definition, ctx, $$scope, fn) {
	if (definition) {
		const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
		return definition[0](slot_ctx);
	}
}

function get_slot_context(definition, ctx, $$scope, fn) {
	return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
}

function get_slot_changes(definition, $$scope, dirty, fn) {
	if (definition[2] && fn) {
		const lets = definition[2](fn(dirty));
		if ($$scope.dirty === undefined) {
			return lets;
		}
		if (typeof lets === 'object') {
			const merged = [];
			const len = Math.max($$scope.dirty.length, lets.length);
			for (let i = 0; i < len; i += 1) {
				merged[i] = $$scope.dirty[i] | lets[i];
			}
			return merged;
		}
		return $$scope.dirty | lets;
	}
	return $$scope.dirty;
}

/** @returns {void} */
function update_slot_base(
	slot,
	slot_definition,
	ctx,
	$$scope,
	slot_changes,
	get_slot_context_fn
) {
	if (slot_changes) {
		const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
		slot.p(slot_context, slot_changes);
	}
}

/** @returns {void} */
function update_slot(
	slot,
	slot_definition,
	ctx,
	$$scope,
	dirty,
	get_slot_changes_fn,
	get_slot_context_fn
) {
	const slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);
	update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn);
}

/** @returns {any[] | -1} */
function get_all_dirty_from_scope($$scope) {
	if ($$scope.ctx.length > 32) {
		const dirty = [];
		const length = $$scope.ctx.length / 32;
		for (let i = 0; i < length; i++) {
			dirty[i] = -1;
		}
		return dirty;
	}
	return -1;
}

/** @returns {{}} */
function exclude_internal_props(props) {
	const result = {};
	for (const k in props) if (k[0] !== '$') result[k] = props[k];
	return result;
}

/** @returns {{}} */
function compute_rest_props(props, keys) {
	const rest = {};
	keys = new Set(keys);
	for (const k in props) if (!keys.has(k) && k[0] !== '$') rest[k] = props[k];
	return rest;
}

/** @returns {{}} */
function compute_slots(slots) {
	const result = {};
	for (const key in slots) {
		result[key] = true;
	}
	return result;
}

/** @returns {(this: any, ...args: any[]) => void} */
function once(fn) {
	let ran = false;
	return function (...args) {
		if (ran) return;
		ran = true;
		fn.call(this, ...args);
	};
}

function null_to_empty(value) {
	return value == null ? '' : value;
}

function set_store_value(store, ret, value) {
	store.set(value);
	return ret;
}

const has_prop = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
/* unused harmony export has_prop */


function action_destroyer(action_result) {
	return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
}

/** @param {number | string} value
 * @returns {[number, string]}
 */
function split_css_unit(value) {
	const split = typeof value === 'string' && value.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
	return split ? [parseFloat(split[1]), split[2] || 'px'] : [/** @type {number} */ (value), 'px'];
}

const contenteditable_truthy_values = ['', true, 1, 'true', 'contenteditable'];
/* unused harmony export contenteditable_truthy_values */



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return raf; });
/* unused harmony export set_now */
/* unused harmony export set_raf */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);


const is_client = typeof window !== 'undefined';
/* unused harmony export is_client */


/** @type {() => number} */
let now = is_client ? () => window.performance.now() : () => Date.now();

let raf = is_client ? (cb) => requestAnimationFrame(cb) : __WEBPACK_IMPORTED_MODULE_0__utils_js__["c" /* noop */];

// used internally for testing
/** @returns {void} */
function set_now(fn) {
	now = fn;
}

/** @returns {void} */
function set_raf(fn) {
	raf = fn;
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: F:\\PROGRAMACION\\informatorio\\frontend career SCRIMBA\\SVELTE\\cgKK4yhG\\node_modules\\svelte\\src\\runtime\\internal\\dom.js Unexpected token (1049:8)\nYou may need an appropriate loader to handle this file type.\n| \t * @default false\n| \t */\n| \tis_svg = false;\n| \t/** parent for creating node */\n| \te = undefined;");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return current_component; });
/* harmony export (immutable) */ __webpack_exports__["c"] = set_current_component;
/* harmony export (immutable) */ __webpack_exports__["d"] = get_current_component;
/* unused harmony export beforeUpdate */
/* unused harmony export onMount */
/* unused harmony export afterUpdate */
/* unused harmony export onDestroy */
/* harmony export (immutable) */ __webpack_exports__["a"] = createEventDispatcher;
/* unused harmony export setContext */
/* unused harmony export getContext */
/* unused harmony export getAllContexts */
/* unused harmony export hasContext */
/* unused harmony export bubble */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__dom_js__);


let current_component;

/** @returns {void} */
function set_current_component(component) {
	current_component = component;
}

function get_current_component() {
	if (!current_component) throw new Error('Function called outside component initialization');
	return current_component;
}

/**
 * Schedules a callback to run immediately before the component is updated after any state change.
 *
 * The first time the callback runs will be before the initial `onMount`
 *
 * https://svelte.dev/docs/svelte#beforeupdate
 * @param {() => any} fn
 * @returns {void}
 */
function beforeUpdate(fn) {
	get_current_component().$$.before_update.push(fn);
}

/**
 * The `onMount` function schedules a callback to run as soon as the component has been mounted to the DOM.
 * It must be called during the component's initialisation (but doesn't need to live *inside* the component;
 * it can be called from an external module).
 *
 * If a function is returned _synchronously_ from `onMount`, it will be called when the component is unmounted.
 *
 * `onMount` does not run inside a [server-side component](/docs#run-time-server-side-component-api).
 *
 * https://svelte.dev/docs/svelte#onmount
 * @template T
 * @param {() => import('./private.js').NotFunction<T> | Promise<import('./private.js').NotFunction<T>> | (() => any)} fn
 * @returns {void}
 */
function onMount(fn) {
	get_current_component().$$.on_mount.push(fn);
}

/**
 * Schedules a callback to run immediately after the component has been updated.
 *
 * The first time the callback runs will be after the initial `onMount`
 *
 * https://svelte.dev/docs/svelte#afterupdate
 * @param {() => any} fn
 * @returns {void}
 */
function afterUpdate(fn) {
	get_current_component().$$.after_update.push(fn);
}

/**
 * Schedules a callback to run immediately before the component is unmounted.
 *
 * Out of `onMount`, `beforeUpdate`, `afterUpdate` and `onDestroy`, this is the
 * only one that runs inside a server-side component.
 *
 * https://svelte.dev/docs/svelte#ondestroy
 * @param {() => any} fn
 * @returns {void}
 */
function onDestroy(fn) {
	get_current_component().$$.on_destroy.push(fn);
}

/**
 * Creates an event dispatcher that can be used to dispatch [component events](/docs#template-syntax-component-directives-on-eventname).
 * Event dispatchers are functions that can take two arguments: `name` and `detail`.
 *
 * Component events created with `createEventDispatcher` create a
 * [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent).
 * These events do not [bubble](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture).
 * The `detail` argument corresponds to the [CustomEvent.detail](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/detail)
 * property and can contain any type of data.
 *
 * The event dispatcher can be typed to narrow the allowed event names and the type of the `detail` argument:
 * ```ts
 * const dispatch = createEventDispatcher<{
 *  loaded: never; // does not take a detail argument
 *  change: string; // takes a detail argument of type string, which is required
 *  optional: number | null; // takes an optional detail argument of type number
 * }>();
 * ```
 *
 * https://svelte.dev/docs/svelte#createeventdispatcher
 * @template {Record<string, any>} [EventMap=any]
 * @returns {import('./public.js').EventDispatcher<EventMap>}
 */
function createEventDispatcher() {
	const component = get_current_component();
	return (type, detail, { cancelable = false } = {}) => {
		const callbacks = component.$$.callbacks[type];
		if (callbacks) {
			// TODO are there situations where events could be dispatched
			// in a server (non-DOM) environment?
			const event = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dom_js__["custom_event"])(/** @type {string} */ (type), detail, { cancelable });
			callbacks.slice().forEach((fn) => {
				fn.call(component, event);
			});
			return !event.defaultPrevented;
		}
		return true;
	};
}

/**
 * Associates an arbitrary `context` object with the current component and the specified `key`
 * and returns that object. The context is then available to children of the component
 * (including slotted content) with `getContext`.
 *
 * Like lifecycle functions, this must be called during component initialisation.
 *
 * https://svelte.dev/docs/svelte#setcontext
 * @template T
 * @param {any} key
 * @param {T} context
 * @returns {T}
 */
function setContext(key, context) {
	get_current_component().$$.context.set(key, context);
	return context;
}

/**
 * Retrieves the context that belongs to the closest parent component with the specified `key`.
 * Must be called during component initialisation.
 *
 * https://svelte.dev/docs/svelte#getcontext
 * @template T
 * @param {any} key
 * @returns {T}
 */
function getContext(key) {
	return get_current_component().$$.context.get(key);
}

/**
 * Retrieves the whole context map that belongs to the closest parent component.
 * Must be called during component initialisation. Useful, for example, if you
 * programmatically create a component and want to pass the existing context to it.
 *
 * https://svelte.dev/docs/svelte#getallcontexts
 * @template {Map<any, any>} [T=Map<any, any>]
 * @returns {T}
 */
function getAllContexts() {
	return get_current_component().$$.context;
}

/**
 * Checks whether a given `key` has been set in the context of a parent component.
 * Must be called during component initialisation.
 *
 * https://svelte.dev/docs/svelte#hascontext
 * @param {any} key
 * @returns {boolean}
 */
function hasContext(key) {
	return get_current_component().$$.context.has(key);
}

// TODO figure out if we still want to support
// shorthand events, or if we want to implement
// a real bubbling mechanism
/**
 * @param component
 * @param event
 * @returns {void}
 */
function bubble(component, event) {
	const callbacks = component.$$.callbacks[event.type];
	if (callbacks) {
		// @ts-ignore
		callbacks.slice().forEach((fn) => fn.call(this, event));
	}
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export clear_loops */
/* harmony export (immutable) */ __webpack_exports__["a"] = loop;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environment_js__ = __webpack_require__(1);


const tasks = new Set();

/**
 * @param {number} now
 * @returns {void}
 */
function run_tasks(now) {
	tasks.forEach((task) => {
		if (!task.c(now)) {
			tasks.delete(task);
			task.f();
		}
	});
	if (tasks.size !== 0) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__environment_js__["b" /* raf */])(run_tasks);
}

/**
 * For testing purposes only!
 * @returns {void}
 */
function clear_loops() {
	tasks.clear();
}

/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 * @param {import('./private.js').TaskCallback} callback
 * @returns {import('./private.js').Task}
 */
function loop(callback) {
	/** @type {import('./private.js').TaskEntry} */
	let task;
	if (tasks.size === 0) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__environment_js__["b" /* raf */])(run_tasks);
	return {
		promise: new Promise((fulfill) => {
			tasks.add((task = { c: callback, f: fulfill }));
		}),
		abort() {
			tasks.delete(task);
		}
	};
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export schedule_update */
/* unused harmony export tick */
/* harmony export (immutable) */ __webpack_exports__["a"] = add_render_callback;
/* unused harmony export add_flush_callback */
/* harmony export (immutable) */ __webpack_exports__["b"] = flush;
/* unused harmony export flush_render_callbacks */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lifecycle_js__ = __webpack_require__(3);



const dirty_components = [];
/* unused harmony export dirty_components */

const intros = { enabled: false };
/* unused harmony export intros */

const binding_callbacks = [];
/* unused harmony export binding_callbacks */


let render_callbacks = [];

const flush_callbacks = [];

const resolved_promise = /* @__PURE__ */ Promise.resolve();

let update_scheduled = false;

/** @returns {void} */
function schedule_update() {
	if (!update_scheduled) {
		update_scheduled = true;
		resolved_promise.then(flush);
	}
}

/** @returns {Promise<void>} */
function tick() {
	schedule_update();
	return resolved_promise;
}

/** @returns {void} */
function add_render_callback(fn) {
	render_callbacks.push(fn);
}

/** @returns {void} */
function add_flush_callback(fn) {
	flush_callbacks.push(fn);
}

// flush() calls callbacks in this order:
// 1. All beforeUpdate callbacks, in order: parents before children
// 2. All bind:this callbacks, in reverse order: children before parents.
// 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
//    for afterUpdates called during the initial onMount, which are called in
//    reverse order: children before parents.
// Since callbacks might update component values, which could trigger another
// call to flush(), the following steps guard against this:
// 1. During beforeUpdate, any updated components will be added to the
//    dirty_components array and will cause a reentrant call to flush(). Because
//    the flush index is kept outside the function, the reentrant call will pick
//    up where the earlier call left off and go through all dirty components. The
//    current_component value is saved and restored so that the reentrant call will
//    not interfere with the "parent" flush() call.
// 2. bind:this callbacks cannot trigger new flush() calls.
// 3. During afterUpdate, any updated components will NOT have their afterUpdate
//    callback called a second time; the seen_callbacks set, outside the flush()
//    function, guarantees this behavior.
const seen_callbacks = new Set();

let flushidx = 0; // Do *not* move this inside the flush() function

/** @returns {void} */
function flush() {
	// Do not reenter flush while dirty components are updated, as this can
	// result in an infinite loop. Instead, let the inner flush handle it.
	// Reentrancy is ok afterwards for bindings etc.
	if (flushidx !== 0) {
		return;
	}
	const saved_component = __WEBPACK_IMPORTED_MODULE_1__lifecycle_js__["b" /* current_component */];
	do {
		// first, call beforeUpdate functions
		// and update components
		try {
			while (flushidx < dirty_components.length) {
				const component = dirty_components[flushidx];
				flushidx++;
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lifecycle_js__["c" /* set_current_component */])(component);
				update(component.$$);
			}
		} catch (e) {
			// reset dirty state to not end up in a deadlocked state and then rethrow
			dirty_components.length = 0;
			flushidx = 0;
			throw e;
		}
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lifecycle_js__["c" /* set_current_component */])(null);
		dirty_components.length = 0;
		flushidx = 0;
		while (binding_callbacks.length) binding_callbacks.pop()();
		// then, once components are updated, call
		// afterUpdate functions. This may cause
		// subsequent updates...
		for (let i = 0; i < render_callbacks.length; i += 1) {
			const callback = render_callbacks[i];
			if (!seen_callbacks.has(callback)) {
				// ...so guard against infinite loops
				seen_callbacks.add(callback);
				callback();
			}
		}
		render_callbacks.length = 0;
	} while (dirty_components.length);
	while (flush_callbacks.length) {
		flush_callbacks.pop()();
	}
	update_scheduled = false;
	seen_callbacks.clear();
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lifecycle_js__["c" /* set_current_component */])(saved_component);
}

/** @returns {void} */
function update($$) {
	if ($$.fragment !== null) {
		$$.update();
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* run_all */])($$.before_update);
		const dirty = $$.dirty;
		$$.dirty = [-1];
		$$.fragment && $$.fragment.p($$.ctx, dirty);
		$$.after_update.forEach(add_render_callback);
	}
}

/**
 * Useful for example to execute remaining `afterUpdate` callbacks before executing `destroy`.
 * @param {Function[]} fns
 * @returns {void}
 */
function flush_render_callbacks(fns) {
	const filtered = [];
	const targets = [];
	render_callbacks.forEach((c) => (fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c)));
	targets.forEach((c) => c());
	render_callbacks = filtered;
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: F:\\PROGRAMACION\\informatorio\\frontend career SCRIMBA\\SVELTE\\cgKK4yhG\\node_modules\\svelte\\src\\runtime\\internal\\each.js Unexpected token (7:31)\nYou may need an appropriate loader to handle this file type.\n| \n| export function ensure_array_like(array_like_or_iterator) {\n| \treturn array_like_or_iterator?.length !== undefined\n| \t\t? array_like_or_iterator\n| \t\t: Array.from(array_like_or_iterator);");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = create_rule;
/* harmony export (immutable) */ __webpack_exports__["a"] = delete_rule;
/* unused harmony export clear_rules */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__dom_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environment_js__ = __webpack_require__(1);



// we need to store the information for multiple documents because a Svelte application could also contain iframes
// https://github.com/sveltejs/svelte/issues/3624
/** @type {Map<Document | ShadowRoot, import('./private.d.ts').StyleInformation>} */
const managed_styles = new Map();

let active = 0;

// https://github.com/darkskyapp/string-hash/blob/master/index.js
/**
 * @param {string} str
 * @returns {number}
 */
function hash(str) {
	let hash = 5381;
	let i = str.length;
	while (i--) hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
	return hash >>> 0;
}

/**
 * @param {Document | ShadowRoot} doc
 * @param {Element & ElementCSSInlineStyle} node
 * @returns {{ stylesheet: any; rules: {}; }}
 */
function create_style_information(doc, node) {
	const info = { stylesheet: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dom_js__["append_empty_stylesheet"])(node), rules: {} };
	managed_styles.set(doc, info);
	return info;
}

/**
 * @param {Element & ElementCSSInlineStyle} node
 * @param {number} a
 * @param {number} b
 * @param {number} duration
 * @param {number} delay
 * @param {(t: number) => number} ease
 * @param {(t: number, u: number) => string} fn
 * @param {number} uid
 * @returns {string}
 */
function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
	const step = 16.666 / duration;
	let keyframes = '{\n';
	for (let p = 0; p <= 1; p += step) {
		const t = a + (b - a) * ease(p);
		keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
	}
	const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
	const name = `__svelte_${hash(rule)}_${uid}`;
	const doc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dom_js__["get_root_for_style"])(node);
	const { stylesheet, rules } = managed_styles.get(doc) || create_style_information(doc, node);
	if (!rules[name]) {
		rules[name] = true;
		stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
	}
	const animation = node.style.animation || '';
	node.style.animation = `${
		animation ? `${animation}, ` : ''
	}${name} ${duration}ms linear ${delay}ms 1 both`;
	active += 1;
	return name;
}

/**
 * @param {Element & ElementCSSInlineStyle} node
 * @param {string} [name]
 * @returns {void}
 */
function delete_rule(node, name) {
	const previous = (node.style.animation || '').split(', ');
	const next = previous.filter(
		name
			? (anim) => anim.indexOf(name) < 0 // remove specific animation
			: (anim) => anim.indexOf('__svelte') === -1 // remove all Svelte animations
	);
	const deleted = previous.length - next.length;
	if (deleted) {
		node.style.animation = next.join(', ');
		active -= deleted;
		if (!active) clear_rules();
	}
}

/** @returns {void} */
function clear_rules() {
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__environment_js__["b" /* raf */])(() => {
		if (active) return;
		managed_styles.forEach((info) => {
			const { ownerNode } = info.stylesheet;
			// there is no ownerNode if it runs on jsdom.
			if (ownerNode) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dom_js__["detach"])(ownerNode);
		});
		managed_styles.clear();
	});
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = group_outros;
/* harmony export (immutable) */ __webpack_exports__["c"] = check_outros;
/* harmony export (immutable) */ __webpack_exports__["d"] = transition_in;
/* harmony export (immutable) */ __webpack_exports__["b"] = transition_out;
/* unused harmony export create_in_transition */
/* unused harmony export create_out_transition */
/* unused harmony export create_bidirectional_transition */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environment_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loop_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_manager_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dom_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dom_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__dom_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scheduler_js__ = __webpack_require__(5);







/**
 * @type {Promise<void> | null}
 */
let promise;

/**
 * @returns {Promise<void>}
 */
function wait() {
	if (!promise) {
		promise = Promise.resolve();
		promise.then(() => {
			promise = null;
		});
	}
	return promise;
}

/**
 * @param {Element} node
 * @param {INTRO | OUTRO | boolean} direction
 * @param {'start' | 'end'} kind
 * @returns {void}
 */
function dispatch(node, direction, kind) {
	node.dispatchEvent(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__dom_js__["custom_event"])(`${direction ? 'intro' : 'outro'}${kind}`));
}

const outroing = new Set();

/**
 * @type {Outro}
 */
let outros;

/**
 * @returns {void} */
function group_outros() {
	outros = {
		r: 0,
		c: [],
		p: outros // parent group
	};
}

/**
 * @returns {void} */
function check_outros() {
	if (!outros.r) {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* run_all */])(outros.c);
	}
	outros = outros.p;
}

/**
 * @param {import('./private.js').Fragment} block
 * @param {0 | 1} [local]
 * @returns {void}
 */
function transition_in(block, local) {
	if (block && block.i) {
		outroing.delete(block);
		block.i(local);
	}
}

/**
 * @param {import('./private.js').Fragment} block
 * @param {0 | 1} local
 * @param {0 | 1} [detach]
 * @param {() => void} [callback]
 * @returns {void}
 */
function transition_out(block, local, detach, callback) {
	if (block && block.o) {
		if (outroing.has(block)) return;
		outroing.add(block);
		outros.c.push(() => {
			outroing.delete(block);
			if (callback) {
				if (detach) block.d(1);
				callback();
			}
		});
		block.o(local);
	} else if (callback) {
		callback();
	}
}

/**
 * @type {import('../transition/public.js').TransitionConfig}
 */
const null_transition = { duration: 0 };

/**
 * @param {Element & ElementCSSInlineStyle} node
 * @param {TransitionFn} fn
 * @param {any} params
 * @returns {{ start(): void; invalidate(): void; end(): void; }}
 */
function create_in_transition(node, fn, params) {
	/**
	 * @type {TransitionOptions} */
	const options = { direction: 'in' };
	let config = fn(node, params, options);
	let running = false;
	let animation_name;
	let task;
	let uid = 0;

	/**
	 * @returns {void} */
	function cleanup() {
		if (animation_name) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__style_manager_js__["a" /* delete_rule */])(node, animation_name);
	}

	/**
	 * @returns {void} */
	function go() {
		const {
			delay = 0,
			duration = 300,
			easing = __WEBPACK_IMPORTED_MODULE_0__utils_js__["b" /* identity */],
			tick = __WEBPACK_IMPORTED_MODULE_0__utils_js__["c" /* noop */],
			css
		} = config || null_transition;
		if (css) animation_name = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__style_manager_js__["b" /* create_rule */])(node, 0, 1, duration, delay, easing, css, uid++);
		tick(0, 1);
		const start_time = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__environment_js__["a" /* now */])() + delay;
		const end_time = start_time + duration;
		if (task) task.abort();
		running = true;
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__scheduler_js__["a" /* add_render_callback */])(() => dispatch(node, true, 'start'));
		task = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__loop_js__["a" /* loop */])((now) => {
			if (running) {
				if (now >= end_time) {
					tick(1, 0);
					dispatch(node, true, 'end');
					cleanup();
					return (running = false);
				}
				if (now >= start_time) {
					const t = easing((now - start_time) / duration);
					tick(t, 1 - t);
				}
			}
			return running;
		});
	}
	let started = false;
	return {
		start() {
			if (started) return;
			started = true;
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__style_manager_js__["a" /* delete_rule */])(node);
			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_js__["d" /* is_function */])(config)) {
				config = config(options);
				wait().then(go);
			} else {
				go();
			}
		},
		invalidate() {
			started = false;
		},
		end() {
			if (running) {
				cleanup();
				running = false;
			}
		}
	};
}

/**
 * @param {Element & ElementCSSInlineStyle} node
 * @param {TransitionFn} fn
 * @param {any} params
 * @returns {{ end(reset: any): void; }}
 */
function create_out_transition(node, fn, params) {
	/** @type {TransitionOptions} */
	const options = { direction: 'out' };
	let config = fn(node, params, options);
	let running = true;
	let animation_name;
	const group = outros;
	group.r += 1;
	/** @type {boolean} */
	let original_inert_value;

	/**
	 * @returns {void} */
	function go() {
		const {
			delay = 0,
			duration = 300,
			easing = __WEBPACK_IMPORTED_MODULE_0__utils_js__["b" /* identity */],
			tick = __WEBPACK_IMPORTED_MODULE_0__utils_js__["c" /* noop */],
			css
		} = config || null_transition;

		if (css) animation_name = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__style_manager_js__["b" /* create_rule */])(node, 1, 0, duration, delay, easing, css);

		const start_time = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__environment_js__["a" /* now */])() + delay;
		const end_time = start_time + duration;
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__scheduler_js__["a" /* add_render_callback */])(() => dispatch(node, false, 'start'));

		if ('inert' in node) {
			original_inert_value = /** @type {HTMLElement} */ (node).inert;
			node.inert = true;
		}

		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__loop_js__["a" /* loop */])((now) => {
			if (running) {
				if (now >= end_time) {
					tick(0, 1);
					dispatch(node, false, 'end');
					if (!--group.r) {
						// this will result in `end()` being called,
						// so we don't need to clean up here
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* run_all */])(group.c);
					}
					return false;
				}
				if (now >= start_time) {
					const t = easing((now - start_time) / duration);
					tick(1 - t, t);
				}
			}
			return running;
		});
	}

	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_js__["d" /* is_function */])(config)) {
		wait().then(() => {
			// @ts-ignore
			config = config(options);
			go();
		});
	} else {
		go();
	}

	return {
		end(reset) {
			if (reset && 'inert' in node) {
				node.inert = original_inert_value;
			}
			if (reset && config.tick) {
				config.tick(1, 0);
			}
			if (running) {
				if (animation_name) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__style_manager_js__["a" /* delete_rule */])(node, animation_name);
				running = false;
			}
		}
	};
}

/**
 * @param {Element & ElementCSSInlineStyle} node
 * @param {TransitionFn} fn
 * @param {any} params
 * @param {boolean} intro
 * @returns {{ run(b: 0 | 1): void; end(): void; }}
 */
function create_bidirectional_transition(node, fn, params, intro) {
	/**
	 * @type {TransitionOptions} */
	const options = { direction: 'both' };
	let config = fn(node, params, options);
	let t = intro ? 0 : 1;

	/**
	 * @type {Program | null} */
	let running_program = null;

	/**
	 * @type {PendingProgram | null} */
	let pending_program = null;
	let animation_name = null;

	/** @type {boolean} */
	let original_inert_value;

	/**
	 * @returns {void} */
	function clear_animation() {
		if (animation_name) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__style_manager_js__["a" /* delete_rule */])(node, animation_name);
	}

	/**
	 * @param {PendingProgram} program
	 * @param {number} duration
	 * @returns {Program}
	 */
	function init(program, duration) {
		const d = /** @type {Program['d']} */ (program.b - t);
		duration *= Math.abs(d);
		return {
			a: t,
			b: program.b,
			d,
			duration,
			start: program.start,
			end: program.start + duration,
			group: program.group
		};
	}

	/**
	 * @param {INTRO | OUTRO} b
	 * @returns {void}
	 */
	function go(b) {
		const {
			delay = 0,
			duration = 300,
			easing = __WEBPACK_IMPORTED_MODULE_0__utils_js__["b" /* identity */],
			tick = __WEBPACK_IMPORTED_MODULE_0__utils_js__["c" /* noop */],
			css
		} = config || null_transition;

		/**
		 * @type {PendingProgram} */
		const program = {
			start: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__environment_js__["a" /* now */])() + delay,
			b
		};

		if (!b) {
			// @ts-ignore todo: improve typings
			program.group = outros;
			outros.r += 1;
		}

		if ('inert' in node) {
			if (b) {
				if (original_inert_value !== undefined) {
					// aborted/reversed outro — restore previous inert value
					node.inert = original_inert_value;
				}
			} else {
				original_inert_value = /** @type {HTMLElement} */ (node).inert;
				node.inert = true;
			}
		}

		if (running_program || pending_program) {
			pending_program = program;
		} else {
			// if this is an intro, and there's a delay, we need to do
			// an initial tick and/or apply CSS animation immediately
			if (css) {
				clear_animation();
				animation_name = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__style_manager_js__["b" /* create_rule */])(node, t, b, duration, delay, easing, css);
			}
			if (b) tick(0, 1);
			running_program = init(program, duration);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__scheduler_js__["a" /* add_render_callback */])(() => dispatch(node, b, 'start'));
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__loop_js__["a" /* loop */])((now) => {
				if (pending_program && now > pending_program.start) {
					running_program = init(pending_program, duration);
					pending_program = null;
					dispatch(node, running_program.b, 'start');
					if (css) {
						clear_animation();
						animation_name = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__style_manager_js__["b" /* create_rule */])(
							node,
							t,
							running_program.b,
							running_program.duration,
							0,
							easing,
							config.css
						);
					}
				}
				if (running_program) {
					if (now >= running_program.end) {
						tick((t = running_program.b), 1 - t);
						dispatch(node, running_program.b, 'end');
						if (!pending_program) {
							// we're done
							if (running_program.b) {
								// intro — we can tidy up immediately
								clear_animation();
							} else {
								// outro — needs to be coordinated
								if (!--running_program.group.r) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* run_all */])(running_program.group.c);
							}
						}
						running_program = null;
					} else if (now >= running_program.start) {
						const p = now - running_program.start;
						t = running_program.a + running_program.d * easing(p / running_program.duration);
						tick(t, 1 - t);
					}
				}
				return !!(running_program || pending_program);
			});
		}
	}
	return {
		run(b) {
			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_js__["d" /* is_function */])(config)) {
				wait().then(() => {
					const opts = { direction: b ? 'in' : 'out' };
					// @ts-ignore
					config = config(opts);
					go(b);
				});
			} else {
				go(b);
			}
		},
		end() {
			clear_animation();
			running_program = pending_program = null;
		}
	};
}

/** @typedef {1} INTRO */
/** @typedef {0} OUTRO */
/** @typedef {{ direction: 'in' | 'out' | 'both' }} TransitionOptions */
/** @typedef {(node: Element, params: any, options: TransitionOptions) => import('../transition/public.js').TransitionConfig} TransitionFn */

/**
 * @typedef {Object} Outro
 * @property {number} r
 * @property {Function[]} c
 * @property {Object} p
 */

/**
 * @typedef {Object} PendingProgram
 * @property {number} start
 * @property {INTRO|OUTRO} b
 * @property {Outro} [group]
 */

/**
 * @typedef {Object} Program
 * @property {number} a
 * @property {INTRO|OUTRO} b
 * @property {1|-1} d
 * @property {number} duration
 * @property {number} start
 * @property {number} end
 * @property {Outro} [group]
 */


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"svelte/internal\"");
throw new Error("Cannot find module \"svelte/internal/disclose-version\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Face_svelte__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Container_svelte__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Header_svelte__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Buttons_svelte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__story__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__story___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__story__);
/* App.svelte generated by Svelte v4.1.1 */









function add_css(target) {
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["append_styles"])(target, "svelte-1en3nh8", "h1.svelte-1en3nh8{text-align:center;background:#ff3e00;font-size:2em;padding:0.3em .6em;color:white;border-radius:50px}input.svelte-1en3nh8{margin:1em;width:250px;font-family:'Nunito', sans-serif;border:0;outline:0;background:transparent;border-bottom:1px solid black;text-align:center;font-size:2em}*{box-sizing:border-box}body, html{margin:0;height:100vh;overflow:hidden}");
}

// (39:0) {#if showHeader}
function create_if_block(ctx) {
	let header;
	let current;
	header = new __WEBPACK_IMPORTED_MODULE_4__Header_svelte__["a" /* default */]({});

	return {
		c() {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["create_component"])(header.$$.fragment);
		},
		m(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["mount_component"])(header, target, anchor);
			current = true;
		},
		i(local) {
			if (current) return;
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["transition_in"])(header.$$.fragment, local);
			current = true;
		},
		o(local) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["transition_out"])(header.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["destroy_component"])(header, detaching);
		}
	};
}

// (42:0) <Container>
function create_default_slot(ctx) {
	let input;
	let t0;
	let h1;
	let t1;
	let t2;
	let t3;
	let t4;
	let face;
	let t5;
	let buttons_1;
	let current;
	let mounted;
	let dispose;

	face = new __WEBPACK_IMPORTED_MODULE_2__Face_svelte__["a" /* default */]({
			props: {
				happyScore: /*happyScore*/ ctx[0],
				size: /*storyIndex*/ ctx[1] + 1
			}
		});

	buttons_1 = new __WEBPACK_IMPORTED_MODULE_5__Buttons_svelte__["a" /* default */]({ props: { buttons: /*buttons*/ ctx[4] } });
	buttons_1.$on("click", /*clickHandler*/ ctx[6]);

	return {
		c() {
			input = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["element"])("input");
			t0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["space"])();
			h1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["element"])("h1");
			t1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["text"])(/*name*/ ctx[3]);
			t2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["text"])(", ");
			t3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["text"])(/*smileySays*/ ctx[5]);
			t4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["space"])();
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["create_component"])(face.$$.fragment);
			t5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["space"])();
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["create_component"])(buttons_1.$$.fragment);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["attr"])(input, "type", "text");
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["attr"])(input, "class", "svelte-1en3nh8");
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["attr"])(h1, "class", "svelte-1en3nh8");
		},
		m(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["insert"])(target, input, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["set_input_value"])(input, /*name*/ ctx[3]);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["insert"])(target, t0, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["insert"])(target, h1, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["append"])(h1, t1);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["append"])(h1, t2);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["append"])(h1, t3);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["insert"])(target, t4, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["mount_component"])(face, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["insert"])(target, t5, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["mount_component"])(buttons_1, target, anchor);
			current = true;

			if (!mounted) {
				dispose = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["listen"])(input, "input", /*input_input_handler*/ ctx[8]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (dirty & /*name*/ 8 && input.value !== /*name*/ ctx[3]) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["set_input_value"])(input, /*name*/ ctx[3]);
			}

			if (!current || dirty & /*name*/ 8) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["set_data"])(t1, /*name*/ ctx[3]);
			if (!current || dirty & /*smileySays*/ 32) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["set_data"])(t3, /*smileySays*/ ctx[5]);
			const face_changes = {};
			if (dirty & /*happyScore*/ 1) face_changes.happyScore = /*happyScore*/ ctx[0];
			if (dirty & /*storyIndex*/ 2) face_changes.size = /*storyIndex*/ ctx[1] + 1;
			face.$set(face_changes);
			const buttons_1_changes = {};
			if (dirty & /*buttons*/ 16) buttons_1_changes.buttons = /*buttons*/ ctx[4];
			buttons_1.$set(buttons_1_changes);
		},
		i(local) {
			if (current) return;
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["transition_in"])(face.$$.fragment, local);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["transition_in"])(buttons_1.$$.fragment, local);
			current = true;
		},
		o(local) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["transition_out"])(face.$$.fragment, local);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["transition_out"])(buttons_1.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["detach"])(input);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["detach"])(t0);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["detach"])(h1);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["detach"])(t4);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["detach"])(t5);
			}

			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["destroy_component"])(face, detaching);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["destroy_component"])(buttons_1, detaching);
			mounted = false;
			dispose();
		}
	};
}

function create_fragment(ctx) {
	let t;
	let container;
	let current;
	let if_block = /*showHeader*/ ctx[2] && create_if_block(ctx);

	container = new __WEBPACK_IMPORTED_MODULE_3__Container_svelte__["a" /* default */]({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			if (if_block) if_block.c();
			t = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["space"])();
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["create_component"])(container.$$.fragment);
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["insert"])(target, t, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["mount_component"])(container, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			if (/*showHeader*/ ctx[2]) {
				if (if_block) {
					if (dirty & /*showHeader*/ 4) {
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["transition_in"])(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["transition_in"])(if_block, 1);
					if_block.m(t.parentNode, t);
				}
			} else if (if_block) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["group_outros"])();

				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["transition_out"])(if_block, 1, 1, () => {
					if_block = null;
				});

				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["check_outros"])();
			}

			const container_changes = {};

			if (dirty & /*$$scope, buttons, happyScore, storyIndex, smileySays, name*/ 1083) {
				container_changes.$$scope = { dirty, ctx };
			}

			container.$set(container_changes);
		},
		i(local) {
			if (current) return;
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["transition_in"])(if_block);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["transition_in"])(container.$$.fragment, local);
			current = true;
		},
		o(local) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["transition_out"])(if_block);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["transition_out"])(container.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["detach"])(t);
			}

			if (if_block) if_block.d(detaching);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["destroy_component"])(container, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let question;
	let smileySays;
	let buttons;
	let showHeader = false;
	let happyScore = 0;
	let storyIndex = 0;

	function clickHandler(e) {
		if (e.detail.value === 'reset') {
			$$invalidate(1, storyIndex = 0);
			$$invalidate(0, happyScore = 0);
			$$invalidate(2, showHeader = false);
		} else {
			$$invalidate(1, storyIndex += 1);
			$$invalidate(0, happyScore += e.detail.value);
		}
	}

	function finalMessage() {
		if (happyScore > 0) {
			return question.end.nice;
		} else if (happyScore < 0) {
			return question.end.mean;
		} else {
			return question.end.neutral;
		}
	}

	let name = '';

	function input_input_handler() {
		name = this.value;
		$$invalidate(3, name);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*storyIndex*/ 2) {
			$: $$invalidate(7, question = __WEBPACK_IMPORTED_MODULE_6__story___default.a[storyIndex]);
		}

		if ($$self.$$.dirty & /*question*/ 128) {
			$: $$invalidate(5, smileySays = question.end ? finalMessage() : question.smileySays);
		}

		if ($$self.$$.dirty & /*question*/ 128) {
			$: $$invalidate(4, buttons = question.buttons);
		}

		if ($$self.$$.dirty & /*happyScore, storyIndex*/ 3) {
			$: if (happyScore > 0 && storyIndex === 3) $$invalidate(2, showHeader = true);
		}
	};

	return [
		happyScore,
		storyIndex,
		showHeader,
		name,
		buttons,
		smileySays,
		clickHandler,
		question,
		input_input_handler
	];
}

class App extends __WEBPACK_IMPORTED_MODULE_0_svelte_internal__["SvelteComponent"] {
	constructor(options) {
		super();
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["init"])(this, options, instance, create_fragment, __WEBPACK_IMPORTED_MODULE_0_svelte_internal__["safe_not_equal"], {}, add_css);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _App = __webpack_require__(9);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _App2.default({
    target: document.body
});

window.app = app;

exports.default = app;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = [{
    smileySays: 'hi! How are you?',
    buttons: [{ value: -1, text: 'None of your business!!!' }, { value: 0, text: 'I am good, thanks.' }]
}, {
    smileySays: 'how much wood would a woodchuck chuck if a woodchuck could chuck wood?',
    buttons: [{ value: 1, text: 'wow, that\'s a great question! :D' }, { value: 0, text: '4..?' }]
}, {
    smileySays: 'which is better, Svelte or React?',
    buttons: [{ value: 2, text: 'Svelte is the future!' }, { value: -1, text: 'React 4evaaaaaaaa' }]
}, {
    smileySays: 'do you want to hear the final question?',
    buttons: [{ value: -1, text: 'No..' }, { value: 1, text: 'Yeah!' }]
}, {
    smileySays: 'do you love me?',
    buttons: [{ value: 0, text: 'ummmmmm......' }, { value: 1, text: 'I sure do!' }, { value: -2, text: 'I definitely just hate you.' }]
}, {
    end: {
        nice: 'I think smiley likes you.',
        neutral: 'I can\'t tell if smiley likes you..',
        mean: 'Smiley does not like you..'
    },
    buttons: [{ value: 'reset', text: 'Reset' }]
}];

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
throw new Error("Cannot find module \"svelte/internal\"");
throw new Error("Cannot find module \"svelte/internal/disclose-version\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svelte__ = __webpack_require__(16);
/* Buttons.svelte generated by Svelte v4.1.1 */





function add_css(target) {
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["append_styles"])(target, "svelte-jgke9a", ".buttons-container.svelte-jgke9a{display:flex;flex-wrap:wrap;justify-content:center;padding:2em 1em}button.svelte-jgke9a{font-family:'Nunito', sans-serif;display:block;font-size:1.2rem;margin:10px;transition:1s;padding:0.7em 1em;cursor:pointer;border-radius:50px;background-color:#40b3ff;color:white;box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)}");
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i];
	return child_ctx;
}

// (8:4) {#each buttons as button}
function create_each_block(ctx) {
	let button_1;
	let t0_value = /*button*/ ctx[3].text + "";
	let t0;
	let t1;
	let mounted;
	let dispose;

	function click_handler() {
		return /*click_handler*/ ctx[2](/*button*/ ctx[3]);
	}

	return {
		c() {
			button_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["element"])("button");
			t0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["text"])(t0_value);
			t1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["space"])();
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["attr"])(button_1, "class", "svelte-jgke9a");
		},
		m(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["insert"])(target, button_1, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["append"])(button_1, t0);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["append"])(button_1, t1);

			if (!mounted) {
				dispose = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["listen"])(button_1, "click", click_handler);
				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*buttons*/ 1 && t0_value !== (t0_value = /*button*/ ctx[3].text + "")) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["set_data"])(t0, t0_value);
		},
		d(detaching) {
			if (detaching) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["detach"])(button_1);
			}

			mounted = false;
			dispose();
		}
	};
}

function create_fragment(ctx) {
	let div;
	let each_value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["ensure_array_like"])(/*buttons*/ ctx[0]);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			div = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["element"])("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["attr"])(div, "class", "buttons-container svelte-jgke9a");
		},
		m(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["insert"])(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div, null);
				}
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*dispatch, buttons*/ 3) {
				each_value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["ensure_array_like"])(/*buttons*/ ctx[0]);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: __WEBPACK_IMPORTED_MODULE_0_svelte_internal__["noop"],
		o: __WEBPACK_IMPORTED_MODULE_0_svelte_internal__["noop"],
		d(detaching) {
			if (detaching) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["detach"])(div);
			}

			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["destroy_each"])(each_blocks, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	const dispatch = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_svelte__["a" /* createEventDispatcher */])();
	let { buttons } = $$props;
	const click_handler = button => dispatch('click', { value: button.value });

	$$self.$$set = $$props => {
		if ('buttons' in $$props) $$invalidate(0, buttons = $$props.buttons);
	};

	return [buttons, dispatch, click_handler];
}

class Buttons extends __WEBPACK_IMPORTED_MODULE_0_svelte_internal__["SvelteComponent"] {
	constructor(options) {
		super();
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["init"])(this, options, instance, create_fragment, __WEBPACK_IMPORTED_MODULE_0_svelte_internal__["safe_not_equal"], { buttons: 0 }, add_css);
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Buttons);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
throw new Error("Cannot find module \"svelte/internal\"");
throw new Error("Cannot find module \"svelte/internal/disclose-version\"");
/* Container.svelte generated by Svelte v4.1.1 */




function add_css(target) {
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["append_styles"])(target, "svelte-1j8j23j", ".Container.svelte-1j8j23j{height:100vh;width:100vw;font-family:'Nunito', sans-serif;border:solid  #40b3ff 20px;padding:20px;display:flex;flex-direction:column;justify-content:center;align-items:center}");
}

function create_fragment(ctx) {
	let div;
	let current;
	const default_slot_template = /*#slots*/ ctx[1].default;
	const default_slot = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["create_slot"])(default_slot_template, ctx, /*$$scope*/ ctx[0], null);

	return {
		c() {
			div = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["element"])("div");
			if (default_slot) default_slot.c();
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["attr"])(div, "class", "Container svelte-1j8j23j");
		},
		m(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["insert"])(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 1)) {
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["update_slot_base"])(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[0],
						!current
						? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["get_all_dirty_from_scope"])(/*$$scope*/ ctx[0])
						: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["get_slot_changes"])(default_slot_template, /*$$scope*/ ctx[0], dirty, null),
						null
					);
				}
			}
		},
		i(local) {
			if (current) return;
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["transition_in"])(default_slot, local);
			current = true;
		},
		o(local) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["transition_out"])(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["detach"])(div);
			}

			if (default_slot) default_slot.d(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;

	$$self.$$set = $$props => {
		if ('$$scope' in $$props) $$invalidate(0, $$scope = $$props.$$scope);
	};

	return [$$scope, slots];
}

class Container extends __WEBPACK_IMPORTED_MODULE_0_svelte_internal__["SvelteComponent"] {
	constructor(options) {
		super();
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["init"])(this, options, instance, create_fragment, __WEBPACK_IMPORTED_MODULE_0_svelte_internal__["safe_not_equal"], {}, add_css);
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Container);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
throw new Error("Cannot find module \"svelte/internal\"");
throw new Error("Cannot find module \"svelte/internal/disclose-version\"");
/* Face.svelte generated by Svelte v4.1.1 */




function create_fragment(ctx) {
	let div;
	let t_value = /*faceList*/ ctx[2][/*index*/ ctx[1]] + "";
	let t;

	return {
		c() {
			div = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["element"])("div");
			t = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["text"])(t_value);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["set_style"])(div, "font-size", /*size*/ ctx[0] + "em");
		},
		m(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["insert"])(target, div, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["append"])(div, t);
		},
		p(ctx, [dirty]) {
			if (dirty & /*index*/ 2 && t_value !== (t_value = /*faceList*/ ctx[2][/*index*/ ctx[1]] + "")) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["set_data"])(t, t_value);

			if (dirty & /*size*/ 1) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["set_style"])(div, "font-size", /*size*/ ctx[0] + "em");
			}
		},
		i: __WEBPACK_IMPORTED_MODULE_0_svelte_internal__["noop"],
		o: __WEBPACK_IMPORTED_MODULE_0_svelte_internal__["noop"],
		d(detaching) {
			if (detaching) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["detach"])(div);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let index;
	let { happyScore = 1 } = $$props;
	let { size = 1 } = $$props;
	const faceList = ['🤬', '😡', '😭', '🙁', '😕', '😐', '🙂', '😀', '😄', '😊', '😘'];

	$$self.$$set = $$props => {
		if ('happyScore' in $$props) $$invalidate(3, happyScore = $$props.happyScore);
		if ('size' in $$props) $$invalidate(0, size = $$props.size);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*happyScore*/ 8) {
			$: $$invalidate(1, index = happyScore + 5);
		}
	};

	return [size, index, faceList, happyScore];
}

class Face extends __WEBPACK_IMPORTED_MODULE_0_svelte_internal__["SvelteComponent"] {
	constructor(options) {
		super();
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["init"])(this, options, instance, create_fragment, __WEBPACK_IMPORTED_MODULE_0_svelte_internal__["safe_not_equal"], { happyScore: 3, size: 0 });
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Face);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
throw new Error("Cannot find module \"svelte/internal\"");
throw new Error("Cannot find module \"svelte/internal/disclose-version\"");
/* Header.svelte generated by Svelte v4.1.1 */




function add_css(target) {
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["append_styles"])(target, "svelte-iw2hh4", "img.svelte-iw2hh4{height:100%}header.svelte-iw2hh4{position:absolute;height:100px;width:100%;color:white;font-size:5em;overflow:hidden;display:flex;justify-content:space-between}");
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[0] = list[i];
	return child_ctx;
}

// (2:4) {#each [0,0,0,0] as _}
function create_each_block(ctx) {
	let img;
	let img_src_value;
	let t0;
	let span;

	return {
		c() {
			img = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["element"])("img");
			t0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["space"])();
			span = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["element"])("span");
			span.textContent = "🥳";
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["attr"])(img, "alt", "svelte logo");
			if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["src_url_equal"])(img.src, img_src_value = "https://res.cloudinary.com/practicaldev/image/fetch/s--pf-5vyuj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/ji7zisis4c0f4ce2cer1.png")) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["attr"])(img, "src", img_src_value);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["attr"])(img, "class", "svelte-iw2hh4");
		},
		m(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["insert"])(target, img, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["insert"])(target, t0, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["insert"])(target, span, anchor);
		},
		p: __WEBPACK_IMPORTED_MODULE_0_svelte_internal__["noop"],
		d(detaching) {
			if (detaching) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["detach"])(img);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["detach"])(t0);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["detach"])(span);
			}
		}
	};
}

function create_fragment(ctx) {
	let header;
	let each_value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["ensure_array_like"])([0, 0, 0, 0]);
	let each_blocks = [];

	for (let i = 0; i < 4; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			header = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["element"])("header");

			for (let i = 0; i < 4; i += 1) {
				each_blocks[i].c();
			}

			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["attr"])(header, "class", "svelte-iw2hh4");
		},
		m(target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["insert"])(target, header, anchor);

			for (let i = 0; i < 4; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(header, null);
				}
			}
		},
		p: __WEBPACK_IMPORTED_MODULE_0_svelte_internal__["noop"],
		i: __WEBPACK_IMPORTED_MODULE_0_svelte_internal__["noop"],
		o: __WEBPACK_IMPORTED_MODULE_0_svelte_internal__["noop"],
		d(detaching) {
			if (detaching) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["detach"])(header);
			}

			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["destroy_each"])(each_blocks, detaching);
		}
	};
}

class Header extends __WEBPACK_IMPORTED_MODULE_0_svelte_internal__["SvelteComponent"] {
	constructor(options) {
		super();
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_svelte_internal__["init"])(this, options, null, create_fragment, __WEBPACK_IMPORTED_MODULE_0_svelte_internal__["safe_not_equal"], {}, add_css);
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_index_js__ = __webpack_require__(22);
/* unused harmony reexport SvelteComponent */
/* unused harmony reexport onMount */
/* unused harmony reexport onDestroy */
/* unused harmony reexport beforeUpdate */
/* unused harmony reexport afterUpdate */
/* unused harmony reexport setContext */
/* unused harmony reexport getContext */
/* unused harmony reexport getAllContexts */
/* unused harmony reexport hasContext */
/* unused harmony reexport tick */
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__internal_index_js__, "createEventDispatcher")) __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_index_js__["createEventDispatcher"]; });
/* unused harmony reexport SvelteComponentTyped */



/***/ }),
/* 17 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: F:\\PROGRAMACION\\informatorio\\frontend career SCRIMBA\\SVELTE\\cgKK4yhG\\node_modules\\svelte\\src\\runtime\\internal\\Component.js Unexpected token (163:8)\nYou may need an appropriate loader to handle this file type.\n| \tSvelteElement = class extends HTMLElement {\n| \t\t/** The Svelte component constructor */\n| \t\t$$ctor;\n| \t\t/** Slots */\n| \t\t$$s;");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export create_animation */
/* unused harmony export fix_position */
/* unused harmony export add_transform */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environment_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loop_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_manager_js__ = __webpack_require__(7);





/**
 * @param {Element & ElementCSSInlineStyle} node
 * @param {import('./private.js').PositionRect} from
 * @param {import('./private.js').AnimationFn} fn
 */
function create_animation(node, from, fn, params) {
	if (!from) return __WEBPACK_IMPORTED_MODULE_0__utils_js__["c" /* noop */];
	const to = node.getBoundingClientRect();
	if (
		from.left === to.left &&
		from.right === to.right &&
		from.top === to.top &&
		from.bottom === to.bottom
	)
		return __WEBPACK_IMPORTED_MODULE_0__utils_js__["c" /* noop */];
	const {
		delay = 0,
		duration = 300,
		easing = __WEBPACK_IMPORTED_MODULE_0__utils_js__["b" /* identity */],
		// @ts-ignore todo: should this be separated from destructuring? Or start/end added to public api and documentation?
		start: start_time = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__environment_js__["a" /* now */])() + delay,
		// @ts-ignore todo:
		end = start_time + duration,
		tick = __WEBPACK_IMPORTED_MODULE_0__utils_js__["c" /* noop */],
		css
	} = fn(node, { from, to }, params);
	let running = true;
	let started = false;
	let name;
	/** @returns {void} */
	function start() {
		if (css) {
			name = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__style_manager_js__["b" /* create_rule */])(node, 0, 1, duration, delay, easing, css);
		}
		if (!delay) {
			started = true;
		}
	}
	/** @returns {void} */
	function stop() {
		if (css) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__style_manager_js__["a" /* delete_rule */])(node, name);
		running = false;
	}
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__loop_js__["a" /* loop */])((now) => {
		if (!started && now >= start_time) {
			started = true;
		}
		if (started && now >= end) {
			tick(1, 0);
			stop();
		}
		if (!running) {
			return false;
		}
		if (started) {
			const p = now - start_time;
			const t = 0 + 1 * easing(p / duration);
			tick(t, 1 - t);
		}
		return true;
	});
	start();
	tick(0, 1);
	return stop;
}

/**
 * @param {Element & ElementCSSInlineStyle} node
 * @returns {void}
 */
function fix_position(node) {
	const style = getComputedStyle(node);
	if (style.position !== 'absolute' && style.position !== 'fixed') {
		const { width, height } = style;
		const a = node.getBoundingClientRect();
		node.style.position = 'absolute';
		node.style.width = width;
		node.style.height = height;
		add_transform(node, a);
	}
}

/**
 * @param {Element & ElementCSSInlineStyle} node
 * @param {import('./private.js').PositionRect} a
 * @returns {void}
 */
function add_transform(node, a) {
	const b = node.getBoundingClientRect();
	if (a.left !== b.left || a.top !== b.top) {
		const style = getComputedStyle(node);
		const transform = style.transform === 'none' ? '' : style.transform;
		node.style.transform = `${transform} translate(${a.left - b.left}px, ${a.top - b.top}px)`;
	}
}


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export handle_promise */
/* unused harmony export update_await_block_branch */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transitions_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scheduler_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lifecycle_js__ = __webpack_require__(3);





/**
 * @template T
 * @param {Promise<T>} promise
 * @param {import('./private.js').PromiseInfo<T>} info
 * @returns {boolean}
 */
function handle_promise(promise, info) {
	const token = (info.token = {});
	/**
	 * @param {import('./private.js').FragmentFactory} type
	 * @param {0 | 1 | 2} index
	 * @param {number} [key]
	 * @param {any} [value]
	 * @returns {void}
	 */
	function update(type, index, key, value) {
		if (info.token !== token) return;
		info.resolved = value;
		let child_ctx = info.ctx;
		if (key !== undefined) {
			child_ctx = child_ctx.slice();
			child_ctx[key] = value;
		}
		const block = type && (info.current = type)(child_ctx);
		let needs_flush = false;
		if (info.block) {
			if (info.blocks) {
				info.blocks.forEach((block, i) => {
					if (i !== index && block) {
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__transitions_js__["a" /* group_outros */])();
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__transitions_js__["b" /* transition_out */])(block, 1, 1, () => {
							if (info.blocks[i] === block) {
								info.blocks[i] = null;
							}
						});
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__transitions_js__["c" /* check_outros */])();
					}
				});
			} else {
				info.block.d(1);
			}
			block.c();
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__transitions_js__["d" /* transition_in */])(block, 1);
			block.m(info.mount(), info.anchor);
			needs_flush = true;
		}
		info.block = block;
		if (info.blocks) info.blocks[index] = block;
		if (needs_flush) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__scheduler_js__["b" /* flush */])();
		}
	}
	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_js__["f" /* is_promise */])(promise)) {
		const current_component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lifecycle_js__["d" /* get_current_component */])();
		promise.then(
			(value) => {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lifecycle_js__["c" /* set_current_component */])(current_component);
				update(info.then, 1, info.value, value);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lifecycle_js__["c" /* set_current_component */])(null);
			},
			(error) => {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lifecycle_js__["c" /* set_current_component */])(current_component);
				update(info.catch, 2, info.error, error);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lifecycle_js__["c" /* set_current_component */])(null);
				if (!info.hasCatch) {
					throw error;
				}
			}
		);
		// if we previously had a then/catch block, destroy it
		if (info.current !== info.pending) {
			update(info.pending, 0);
			return true;
		}
	} else {
		if (info.current !== info.then) {
			update(info.then, 1, info.value, promise);
			return true;
		}
		info.resolved = /** @type {T} */ (promise);
	}
}

/** @returns {void} */
function update_await_block_branch(info, ctx, dirty) {
	const child_ctx = ctx.slice();
	const { resolved } = info;
	if (info.current === info.then) {
		child_ctx[info.value] = resolved;
	}
	if (info.current === info.catch) {
		child_ctx[info.error] = resolved;
	}
	info.block.p(child_ctx, dirty);
}


/***/ }),
/* 20 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: F:\\PROGRAMACION\\informatorio\\frontend career SCRIMBA\\SVELTE\\cgKK4yhG\\node_modules\\svelte\\src\\runtime\\internal\\dev.js Unexpected token (24:63)\nYou may need an appropriate loader to handle this file type.\n|  */\n| export function dispatch_dev(type, detail) {\n| \tdocument.dispatchEvent(custom_event(type, { version: VERSION, ...detail }, { bubbles: true }));\n| }\n| ");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** @type {typeof globalThis} */
const globals =
	typeof window !== 'undefined'
		? window
		: typeof globalThis !== 'undefined'
		? globalThis
		: // @ts-ignore Node typings have this
		  global;
/* unused harmony export globals */


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(27)))

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animations_js__ = __webpack_require__(18);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__await_block_js__ = __webpack_require__(19);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__dom_js__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__dom_js__, "createEventDispatcher")) __webpack_require__.d(__webpack_exports__, "createEventDispatcher", function() { return __WEBPACK_IMPORTED_MODULE_2__dom_js__["createEventDispatcher"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environment_js__ = __webpack_require__(1);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__globals_js__ = __webpack_require__(21);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__each_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__each_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__each_js__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__each_js__, "createEventDispatcher")) __webpack_require__.d(__webpack_exports__, "createEventDispatcher", function() { return __WEBPACK_IMPORTED_MODULE_5__each_js__["createEventDispatcher"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lifecycle_js__ = __webpack_require__(3);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "createEventDispatcher", function() { return __WEBPACK_IMPORTED_MODULE_6__lifecycle_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loop_js__ = __webpack_require__(4);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__scheduler_js__ = __webpack_require__(5);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__spread_js__ = __webpack_require__(23);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ssr_js__ = __webpack_require__(24);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__transitions_js__ = __webpack_require__(8);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_js__ = __webpack_require__(0);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Component_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Component_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__Component_js__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dev_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dev_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__dev_js__);
/* unused harmony namespace reexport */

















/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export get_spread_update */
/* unused harmony export get_spread_object */
/** @returns {{}} */
function get_spread_update(levels, updates) {
	const update = {};
	const to_null_out = {};
	const accounted_for = { $$scope: 1 };
	let i = levels.length;
	while (i--) {
		const o = levels[i];
		const n = updates[i];
		if (n) {
			for (const key in o) {
				if (!(key in n)) to_null_out[key] = 1;
			}
			for (const key in n) {
				if (!accounted_for[key]) {
					update[key] = n[key];
					accounted_for[key] = 1;
				}
			}
			levels[i] = n;
		} else {
			for (const key in o) {
				accounted_for[key] = 1;
			}
		}
	}
	for (const key in to_null_out) {
		if (!(key in update)) update[key] = undefined;
	}
	return update;
}

function get_spread_object(spread_props) {
	return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
}


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export spread */
/* unused harmony export merge_ssr_styles */
/* unused harmony export escape */
/* unused harmony export escape_attribute_value */
/* unused harmony export escape_object */
/* unused harmony export each */
/* unused harmony export validate_component */
/* unused harmony export debug */
/* unused harmony export create_ssr_component */
/* unused harmony export add_attribute */
/* unused harmony export add_classes */
/* unused harmony export add_styles */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lifecycle_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_boolean_attributes_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__each_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__each_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__each_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_utils_names_js__ = __webpack_require__(26);
/* unused harmony reexport is_void */






const invalid_attribute_name_character =
	/[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
/* unused harmony export invalid_attribute_name_character */

// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter

/** @returns {string} */
function spread(args, attrs_to_add) {
	const attributes = Object.assign({}, ...args);
	if (attrs_to_add) {
		const classes_to_add = attrs_to_add.classes;
		const styles_to_add = attrs_to_add.styles;
		if (classes_to_add) {
			if (attributes.class == null) {
				attributes.class = classes_to_add;
			} else {
				attributes.class += ' ' + classes_to_add;
			}
		}
		if (styles_to_add) {
			if (attributes.style == null) {
				attributes.style = style_object_to_string(styles_to_add);
			} else {
				attributes.style = style_object_to_string(
					merge_ssr_styles(attributes.style, styles_to_add)
				);
			}
		}
	}
	let str = '';
	Object.keys(attributes).forEach((name) => {
		if (invalid_attribute_name_character.test(name)) return;
		const value = attributes[name];
		if (value === true) str += ' ' + name;
		else if (__WEBPACK_IMPORTED_MODULE_2__shared_boolean_attributes_js__["a" /* boolean_attributes */].has(name.toLowerCase())) {
			if (value) str += ' ' + name;
		} else if (value != null) {
			str += ` ${name}="${value}"`;
		}
	});
	return str;
}

/** @returns {{}} */
function merge_ssr_styles(style_attribute, style_directive) {
	const style_object = {};
	for (const individual_style of style_attribute.split(';')) {
		const colon_index = individual_style.indexOf(':');
		const name = individual_style.slice(0, colon_index).trim();
		const value = individual_style.slice(colon_index + 1).trim();
		if (!name) continue;
		style_object[name] = value;
	}
	for (const name in style_directive) {
		const value = style_directive[name];
		if (value) {
			style_object[name] = value;
		} else {
			delete style_object[name];
		}
	}
	return style_object;
}

const ATTR_REGEX = /[&"]/g;
const CONTENT_REGEX = /[&<]/g;

/**
 * Note: this method is performance sensitive and has been optimized
 * https://github.com/sveltejs/svelte/pull/5701
 * @param {unknown} value
 * @returns {string}
 */
function escape(value, is_attr = false) {
	const str = String(value);
	const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
	pattern.lastIndex = 0;
	let escaped = '';
	let last = 0;
	while (pattern.test(str)) {
		const i = pattern.lastIndex - 1;
		const ch = str[i];
		escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : ch === '"' ? '&quot;' : '&lt;');
		last = i + 1;
	}
	return escaped + str.substring(last);
}

function escape_attribute_value(value) {
	// keep booleans, null, and undefined for the sake of `spread`
	const should_escape = typeof value === 'string' || (value && typeof value === 'object');
	return should_escape ? escape(value, true) : value;
}

/** @returns {{}} */
function escape_object(obj) {
	const result = {};
	for (const key in obj) {
		result[key] = escape_attribute_value(obj[key]);
	}
	return result;
}

/** @returns {string} */
function each(items, fn) {
	items = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__each_js__["ensure_array_like"])(items);
	let str = '';
	for (let i = 0; i < items.length; i += 1) {
		str += fn(items[i], i);
	}
	return str;
}

const missing_component = {
	$$render: () => ''
};
/* unused harmony export missing_component */


function validate_component(component, name) {
	if (!component || !component.$$render) {
		if (name === 'svelte:component') name += ' this={...}';
		throw new Error(
			`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`
		);
	}
	return component;
}

/** @returns {string} */
function debug(file, line, column, values) {
	console.log(`{@debug} ${file ? file + ' ' : ''}(${line}:${column})`); // eslint-disable-line no-console
	console.log(values); // eslint-disable-line no-console
	return '';
}

let on_destroy;

/** @returns {{ render: (props?: {}, { $$slots, context }?: { $$slots?: {}; context?: Map<any, any>; }) => { html: any; css: { code: string; map: any; }; head: string; }; $$render: (result: any, props: any, bindings: any, slots: any, context: any) => any; }} */
function create_ssr_component(fn) {
	function $$render(result, props, bindings, slots, context) {
		const parent_component = __WEBPACK_IMPORTED_MODULE_0__lifecycle_js__["b" /* current_component */];
		const $$ = {
			on_destroy,
			context: new Map(context || (parent_component ? parent_component.$$.context : [])),
			// these will be immediately discarded
			on_mount: [],
			before_update: [],
			after_update: [],
			callbacks: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_js__["e" /* blank_object */])()
		};
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lifecycle_js__["c" /* set_current_component */])({ $$ });
		const html = fn(result, props, bindings, slots);
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lifecycle_js__["c" /* set_current_component */])(parent_component);
		return html;
	}
	return {
		render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
			on_destroy = [];
			const result = { title: '', head: '', css: new Set() };
			const html = $$render(result, props, {}, $$slots, context);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_js__["a" /* run_all */])(on_destroy);
			return {
				html,
				css: {
					code: Array.from(result.css)
						.map((css) => css.code)
						.join('\n'),
					map: null // TODO
				},
				head: result.title + result.head
			};
		},
		$$render
	};
}

/** @returns {string} */
function add_attribute(name, value, boolean) {
	if (value == null || (boolean && !value)) return '';
	const assignment = boolean && value === true ? '' : `="${escape(value, true)}"`;
	return ` ${name}${assignment}`;
}

/** @returns {string} */
function add_classes(classes) {
	return classes ? ` class="${classes}"` : '';
}

/** @returns {string} */
function style_object_to_string(style_object) {
	return Object.keys(style_object)
		.filter((key) => style_object[key])
		.map((key) => `${key}: ${escape_attribute_value(style_object[key])};`)
		.join(' ');
}

/** @returns {string} */
function add_styles(style_object) {
	const styles = style_object_to_string(style_object);
	return styles ? ` style="${styles}"` : '';
}


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const _boolean_attributes = /** @type {const} */ ([
	'allowfullscreen',
	'allowpaymentrequest',
	'async',
	'autofocus',
	'autoplay',
	'checked',
	'controls',
	'default',
	'defer',
	'disabled',
	'formnovalidate',
	'hidden',
	'inert',
	'ismap',
	'loop',
	'multiple',
	'muted',
	'nomodule',
	'novalidate',
	'open',
	'playsinline',
	'readonly',
	'required',
	'reversed',
	'selected'
]);

/**
 * List of HTML boolean attributes (e.g. `<input disabled>`).
 * Source: https://html.spec.whatwg.org/multipage/indices.html
 *
 * @type {Set<string>}
 */
const boolean_attributes = new Set([..._boolean_attributes]);
/* harmony export (immutable) */ __webpack_exports__["a"] = boolean_attributes;


/** @typedef {typeof _boolean_attributes[number]} BooleanAttributes */


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export is_void */
/* unused harmony export is_html */
/* unused harmony export is_svg */
/** regex of all html void element names */
const void_element_names =
	/^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;

/** regex of all html element names. svg and math are omitted because they belong to the svg elements namespace */
const html_element_names =
	/^(?:a|abbr|address|area|article|aside|audio|b|base|bdi|bdo|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|data|datalist|dd|del|details|dfn|dialog|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|head|header|hr|html|i|iframe|img|input|ins|kbd|label|legend|li|link|main|map|mark|meta|meter|nav|noscript|object|ol|optgroup|option|output|p|param|picture|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|small|source|span|strong|style|sub|summary|sup|table|tbody|td|template|textarea|tfoot|th|thead|time|title|tr|track|u|ul|var|video|wbr)$/;

/** regex of all svg element names */
const svg =
	/^(?:altGlyph|altGlyphDef|altGlyphItem|animate|animateColor|animateMotion|animateTransform|circle|clipPath|color-profile|cursor|defs|desc|discard|ellipse|feBlend|feColorMatrix|feComponentTransfer|feComposite|feConvolveMatrix|feDiffuseLighting|feDisplacementMap|feDistantLight|feDropShadow|feFlood|feFuncA|feFuncB|feFuncG|feFuncR|feGaussianBlur|feImage|feMerge|feMergeNode|feMorphology|feOffset|fePointLight|feSpecularLighting|feSpotLight|feTile|feTurbulence|filter|font|font-face|font-face-format|font-face-name|font-face-src|font-face-uri|foreignObject|g|glyph|glyphRef|hatch|hatchpath|hkern|image|line|linearGradient|marker|mask|mesh|meshgradient|meshpatch|meshrow|metadata|missing-glyph|mpath|path|pattern|polygon|polyline|radialGradient|rect|set|solidcolor|stop|svg|switch|symbol|text|textPath|tref|tspan|unknown|use|view|vkern)$/;

/**
 * @param {string} name
 * @returns {boolean}
 */
function is_void(name) {
	return void_element_names.test(name) || name.toLowerCase() === '!doctype';
}

/**
 * @param {string} name
 * @returns {boolean}
 */
function is_html(name) {
	return html_element_names.test(name);
}

/**
 * @param {string} name
 * @returns {boolean}
 */
function is_svg(name) {
	return svg.test(name);
}


/***/ }),
/* 27 */
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


/***/ })
/******/ ]);