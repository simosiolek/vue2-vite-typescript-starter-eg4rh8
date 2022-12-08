import"vue";function t(t){return"function"==typeof t&&/native code/.test(t.toString())}var n="undefined"!=typeof Symbol&&t(Symbol)&&"undefined"!=typeof Reflect&&t(Reflect.ownKeys),e=function(t){return t};function r(t,n,r){var o=r.get,i=r.set;Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:o||e,set:i||e})}function o(t,n,e,r){Object.defineProperty(t,n,{value:e,enumerable:!!r,writable:!0,configurable:!0})}function i(t,n){return Object.hasOwnProperty.call(t,n)}function u(t){return Array.isArray(t)}function a(t){return null!==t&&"object"==typeof t}function f(t){return"[object Object]"===function(t){return Object.prototype.toString.call(t)}(t)}function c(t){return"function"==typeof t}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var s,l=function(t,n){return(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])})(t,n)};function v(t){var n="function"==typeof Symbol&&Symbol.iterator,e=n&&t[n],r=0;if(e)return e.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}var p=[],d=function(){function t(t){this.active=!0,this.effects=[],this.cleanups=[],this.vm=t}return t.prototype.run=function(t){if(this.active)try{return this.on(),t()}finally{this.off()}},t.prototype.on=function(){this.active&&(p.push(this),s=this)},t.prototype.off=function(){this.active&&(p.pop(),s=p[p.length-1])},t.prototype.stop=function(){this.active&&(this.vm.$destroy(),this.effects.forEach((function(t){return t.stop()})),this.cleanups.forEach((function(t){return t()})),this.active=!1)},t}();function _(){var t,n;return(null===(t=s)||void 0===t?void 0:t.vm)||(null===(n=j())||void 0===n?void 0:n.proxy)}!function(t){function n(n){void 0===n&&(n=!1);var e,r=void 0;return function(t){var n=$;$=!1;try{t()}finally{$=n}}((function(){r=k(w())})),e=t.call(this,r)||this,n||function(t,n){var e;if((n=n||s)&&n.active)return void n.effects.push(t);var r=null===(e=j())||void 0===e?void 0:e.proxy;r&&r.$on("hook:destroyed",(function(){return t.stop()}))}(e),e}(function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}l(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)})(n,t)}(d);var y=void 0;try{var h=require("vue");h&&m(h)?y=h:h&&"default"in h&&m(h.default)&&(y=h.default)}catch(ut){}var b=null,g=null,$=!0;function m(t){return t&&c(t)&&"Vue"===t.name}function w(){return b}function O(t){if($){var n=g;null==n||n.scope.off(),null==(g=t)||g.scope.on()}}function j(){return g}var S,x=new WeakMap;function E(t){if(x.has(t))return x.get(t);var n={proxy:t,update:t.$forceUpdate,uid:t._uid,emit:t.$emit.bind(t),parent:null,root:null};!function(t){if(!t.scope){var n=new d(t.proxy);t.scope=n,t.proxy.$on("hook:destroyed",(function(){return n.stop()}))}t.scope}(n);return["data","props","attrs","refs","vnode","slots"].forEach((function(e){r(n,e,{get:function(){return t["$"+e]}})})),r(n,"isMounted",{get:function(){return t._isMounted}}),r(n,"isUnmounted",{get:function(){return t._isDestroyed}}),r(n,"isDeactivated",{get:function(){return t._inactive}}),r(n,"emitted",{get:function(){return t._events}}),x.set(t,n),t.$parent&&(n.parent=E(t.$parent)),t.$root&&(n.root=E(t.$root)),n}function k(t,n){void 0===n&&(n={});var e=t.config.silent;t.config.silent=!0;var r=new t(n);return t.config.silent=e,r}function C(t,n){return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];if(t.$scopedSlots[n])return t.$scopedSlots[n].apply(t,e)}}var R="composition-api.refKey",M=new WeakMap,P=new WeakMap,W=function(t){r(this,"value",{get:t.get,set:t.set})};function T(t,n){var e=new W(t),r=Object.seal(e);return P.set(r,!0),r}function V(t){var n;if(B(t))return t;var e=X(((n={})[R]=t,n));return T({get:function(){return e[R]},set:function(t){return e[R]=t}})}function B(t){return t instanceof W}function D(t,n){var e=t[n];return B(e)?e:T({get:function(){return t[n]},set:function(e){return t[n]=e}})}function U(t){var n;return Boolean(t&&i(t,"__ob__")&&"object"==typeof t.__ob__&&(null===(n=t.__ob__)||void 0===n?void 0:n.__raw__))}function z(t){var n;return Boolean(t&&i(t,"__ob__")&&"object"==typeof t.__ob__&&!(null===(n=t.__ob__)||void 0===n?void 0:n.__raw__))}function A(t){if(!(!f(t)||U(t)||u(t)||B(t)||(n=t,e=w(),e&&n instanceof e)||M.has(t))){var n,e;M.set(t,!0);for(var r=Object.keys(t),o=0;o<r.length;o++)K(t,r[o])}}function K(t,n,e){if("__ob__"!==n&&!U(t[n])){var o,i,u=Object.getOwnPropertyDescriptor(t,n);if(u){if(!1===u.configurable)return;o=u.get,i=u.set,o&&!i||2!==arguments.length||(e=t[n])}A(e),r(t,n,{get:function(){var r=o?o.call(t):e;return n!==R&&B(r)?r.value:r},set:function(r){o&&!i||(n!==R&&B(e)&&!B(r)?e.value=r:i?(i.call(t,r),e=r):e=r,A(r))}})}}function q(t){var n,e=b||y;e.observable?n=e.observable(t):n=k(e,{data:{$$state:t}})._data.$$state;return i(n,"__ob__")||N(n),n}function N(t,n){var r,i;if(void 0===n&&(n=new Set),!n.has(t)){o(t,"__ob__",function(t){void 0===t&&(t={});return{value:t,dep:{notify:e,depend:e,addSub:e,removeSub:e}}}(t)),n.add(t);try{for(var a=v(Object.keys(t)),c=a.next();!c.done;c=a.next()){var s=t[c.value];(f(s)||u(s))&&!U(s)&&Object.isExtensible(s)&&N(s,n)}}catch(l){r={error:l}}finally{try{c&&!c.done&&(i=a.return)&&i.call(a)}finally{if(r)throw r.error}}}}function X(t){if(!a(t))return t;if(!f(t)&&!u(t)||U(t)||!Object.isExtensible(t))return t;var n=q(t);return A(n),n}function F(t){var n,r,o,i,u=_();if(c(t)?n=t:(n=t.get,r=t.set),u&&!u.$isServer){var a,f=function(){if(!S){var t=k(w(),{computed:{value:function(){return 0}}}),n=t._computedWatchers.value.constructor,e=t._data.__ob__.dep.constructor;S={Watcher:n,Dep:e},t.$destroy()}return S}(),s=f.Watcher,l=f.Dep;i=function(){return a||(a=new s(u,n,e,{lazy:!0})),a.dirty&&a.evaluate(),l.target&&a.depend(),a.value},o=function(t){r&&r(t)}}else{var v=k(w(),{computed:{$$state:{get:n,set:r}}});u&&u.$on("hook:destroyed",(function(){return v.$destroy()})),i=function(){return v.$$state},o=function(t){v.$$state=t}}return T({get:i,set:o})}var H={set:function(t,n,e){(t.__composition_api_state__=t.__composition_api_state__||{})[n]=e},get:function(t,n){return(t.__composition_api_state__||{})[n]}};function I(t){var n=H.get(t,"rawBindings")||{};if(n&&Object.keys(n).length){for(var e=t.$refs,r=H.get(t,"refs")||[],o=0;o<r.length;o++){var i=n[f=r[o]];!e[f]&&i&&B(i)&&(i.value=null)}var u=Object.keys(e),a=[];for(o=0;o<u.length;o++){var f;i=n[f=u[o]];e[f]&&i&&B(i)&&(i.value=e[f],a.push(f))}H.set(t,"refs",a)}}function G(t,n){var e=t.$options._parentVnode;if(e){for(var r=H.get(t,"slots")||[],o=function(t,n){var e;if(t){if(t._normalized)return t._normalized;for(var r in e={},t)t[r]&&"$"!==r[0]&&(e[r]=!0)}else e={};for(var r in n)r in e||(e[r]=!0);return e}(e.data.scopedSlots,t.$slots),i=0;i<r.length;i++){o[a=r[i]]||delete n[a]}var u=Object.keys(o);for(i=0;i<u.length;i++){var a;n[a=u[i]]||(n[a]=C(t,a))}H.set(t,"slots",u)}}function J(t,n,e){var r=j();O(t);try{return n(t)}catch(o){if(!e)throw o;e(o)}finally{O(r)}}function L(t){function n(t,e){if(void 0===e&&(e=new Set),!e.has(t)&&f(t)&&!B(t)&&!z(t)&&!U(t)){var r=w().util.defineReactive;Object.keys(t).forEach((function(o){var i=t[o];r(t,o,i),i&&(e.add(i),n(i,e))}))}}function e(t,n){return void 0===n&&(n=new Map),n.has(t)?n.get(t):(n.set(t,!1),u(t)&&z(t)?(n.set(t,!0),!0):!(!f(t)||U(t)||B(t))&&Object.keys(t).some((function(r){return e(t[r],n)})))}t.mixin({beforeCreate:function(){var t=this,s=t.$options,l=s.setup,p=s.render;p&&(s.render=function(){for(var n=this,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return J(E(t),(function(){return p.apply(n,e)}))});if(!l)return;if(!c(l))return;var d=s.data;s.data=function(){return function(t,s){void 0===s&&(s={});var l,p=t.$options.setup,d=function(t){var n,e={slots:{}},o=["attrs"],i=["emit"];return["root","parent","refs","listeners","isServer","ssrContext"].forEach((function(n){var o="$"+n;r(e,n,{get:function(){return t[o]},set:function(){}})})),o.forEach((function(o){var i="$"+o;r(e,o,{get:function(){var e,o;if(n)return n;n=X({});var u=t[i],a=function(e){r(n,e,{get:function(){return t[i][e]}})};try{for(var f=v(Object.keys(u)),c=f.next();!c.done;c=f.next()){a(c.value)}}catch(s){e={error:s}}finally{try{c&&!c.done&&(o=f.return)&&o.call(f)}finally{if(e)throw e.error}}return n},set:function(){}})})),i.forEach((function(n){var o="$"+n;r(e,n,{get:function(){return function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];t[o].apply(t,n)}}})})),e}(t),_=E(t);if(_.setupContext=d,o(s,"__ob__",function(){return q({}).__ob__}()),G(t,d.slots),J(_,(function(){l=p(s,d)})),!l)return;if(c(l)){var y=l;return void(t.$options.render=function(){return G(t,d.slots),J(_,(function(){return y()}))})}if(f(l)){z(l)&&(l=function(t){if(!f(t))return t;var n={};for(var e in t)n[e]=D(t,e);return n}(l)),H.set(t,"rawBindings",l);var h=l;Object.keys(h).forEach((function(o){var f=h[o];if(!B(f))if(z(f))u(f)&&(f=V(f));else if(c(f)){var s=f;f=f.bind(t),Object.keys(s).forEach((function(t){f[t]=s[t]}))}else a(f)?e(f)&&n(f):f=V(f);!function(t,n,e){var o=t.$options.props;n in t||o&&i(o,n)||(B(e)?r(t,n,{get:function(){return e.value},set:function(t){e.value=t}}):r(t,n,{get:function(){return z(e)&&e.__ob__.dep.depend(),e},set:function(t){e=t}}))}(t,o,f)}))}}(t,t.$props),c(d)?d.call(t,t):d||{}}},mounted:function(){I(this)},updated:function(){var t;I(this),(null===(t=this.$vnode)||void 0===t?void 0:t.context)&&I(this.$vnode.context)}})}function Q(t,e){if(!t)return e;if(!e)return t;for(var r,o,u,a=n?Reflect.ownKeys(t):Object.keys(t),c=0;c<a.length;c++)"__ob__"!==(r=a[c])&&(o=e[r],u=t[r],i(e,r)?o!==u&&f(o)&&!B(o)&&f(u)&&!B(u)&&Q(u,o):e[r]=u);return e}function Y(t){(function(t){return i(t,"__composition_api_installed__")})(t)||(t.config.optionMergeStrategies.setup=function(t,n){return function(e,r){return Q(c(t)?t(e,r)||{}:void 0,c(n)?n(e,r)||{}:void 0)}},function(t){b=t,Object.defineProperty(t,"__composition_api_installed__",{configurable:!0,writable:!0,value:!0})}(t),L(t))}var Z={install:function(t){return Y(t)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(Z);var tt={name:"HelloWorld",props:{msg:{type:String,required:!0},title:{type:Boolean,default:!0}},setup:t=>({count:V(0),classes:F((()=>({title:t.title})))})};function nt(t,n,e,r,o,i,u,a){var f,c="function"==typeof t?t.options:t;if(n&&(c.render=n,c.staticRenderFns=e,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),u?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},c._ssrRegister=f):o&&(f=a?function(){o.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:o),f)if(c.functional){c._injectStyles=f;var s=c.render;c.render=function(t,n){return f.call(n),s(t,n)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,f):[f]}return{exports:t,options:c}}const et={};var rt=nt(tt,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",{class:t.classes},[t._v(t._s(t.msg)+" = "+t._s(t.title))])])}),[],!1,ot,"71b9693b",null,null);function ot(t){for(let n in et)this[n]=et[n]}var it=function(){return rt.exports}();export{it as HelloWorld};