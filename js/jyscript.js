/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);/* ===================================================
 * bootstrap-transition.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#transitions
 * ===================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


  /* CSS TRANSITION SUPPORT (http://www.modernizr.com/)
   * ======================================================= */

  $(function () {

    $.support.transition = (function () {

      var transitionEnd = (function () {

        var el = document.createElement('bootstrap')
          , transEndEventNames = {
               'WebkitTransition' : 'webkitTransitionEnd'
            ,  'MozTransition'    : 'transitionend'
            ,  'OTransition'      : 'oTransitionEnd otransitionend'
            ,  'transition'       : 'transitionend'
            }
          , name

        for (name in transEndEventNames){
          if (el.style[name] !== undefined) {
            return transEndEventNames[name]
          }
        }

      }());

      return transitionEnd && {
        end: transitionEnd
      }

    })()

  })

}(window.jQuery);
/* ==========================================================
 * bootstrap-carousel.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#carousel
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* CAROUSEL CLASS DEFINITION
  * ========================= */

  var Carousel = function (element, options) {
    this.$element = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options = options
    this.options.pause == 'hover' && this.$element
      .on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))
  };

  Carousel.prototype = {

    cycle: function (e) {
      if (!e) this.paused = false
      if (this.interval) clearInterval(this.interval);
      this.options.interval
        && !this.paused
        && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))
      return this
    }

  , getActiveIndex: function () {
      this.$active = this.$element.find('.item.active')
      this.$items = this.$active.parent().children()
      return this.$items.index(this.$active)
    }

  , to: function (pos) {
      var activeIndex = this.getActiveIndex()
        , that = this

      if (pos > (this.$items.length - 1) || pos < 0) return

      if (this.sliding) {
        return this.$element.one('slid', function () {
          that.to(pos)
        })
      }

      if (activeIndex == pos) {
        return this.pause().cycle()
      }

      return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
    }

  , pause: function (e) {
      if (!e) this.paused = true
      if (this.$element.find('.next, .prev').length && $.support.transition.end) {
        this.$element.trigger($.support.transition.end)
        this.cycle(true)
      }
      clearInterval(this.interval)
      this.interval = null
      return this
    }

  , next: function () {
      if (this.sliding) return
      return this.slide('next')
    }

  , prev: function () {
      if (this.sliding) return
      return this.slide('prev')
    }

  , slide: function (type, next) {
      var $active = this.$element.find('.item.active')
        , $next = next || $active[type]()
        , isCycling = this.interval
        , direction = type == 'next' ? 'left' : 'right'
        , fallback  = type == 'next' ? 'first' : 'last'
        , that = this
        , e

      this.sliding = true

      isCycling && this.pause()

      $next = $next.length ? $next : this.$element.find('.item')[fallback]()

      e = $.Event('slide', {
        relatedTarget: $next[0]
      , direction: direction
      })

      if ($next.hasClass('active')) return

      if (this.$indicators.length) {
        this.$indicators.find('.active').removeClass('active')
        this.$element.one('slid', function () {
          var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
          $nextIndicator && $nextIndicator.addClass('active')
        })
      }

      if ($.support.transition && this.$element.hasClass('slide')) {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $next.addClass(type)
        $next[0].offsetWidth // force reflow
        $active.addClass(direction)
        $next.addClass(direction)
        this.$element.one($.support.transition.end, function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () { that.$element.trigger('slid') }, 0)
        })
      } else {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $active.removeClass('active')
        $next.addClass('active')
        this.sliding = false
        this.$element.trigger('slid')
      }

      isCycling && this.cycle()

      return this
    }

  };


 /* CAROUSEL PLUGIN DEFINITION
  * ========================== */

  var old = $.fn.carousel;

  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('carousel')
        , options = $.extend({}, $.fn.carousel.defaults, typeof option == 'object' && option)
        , action = typeof option == 'string' ? option : options.slide
      if (!data) $this.data('carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  };

  $.fn.carousel.defaults = {
    interval: 8000
  , pause: 'hover'
  };

  $.fn.carousel.Constructor = Carousel;


 /* CAROUSEL NO CONFLICT
  * ==================== */

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  };

 /* CAROUSEL DATA-API
  * ================= */

  $(document).on('click.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var $this = $(this), href
      , $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      , options = $.extend({}, $target.data(), $this.data())
      , slideIndex

    $target.carousel(options)

    if (slideIndex = $this.attr('data-slide-to')) {
      $target.data('carousel').pause().to(slideIndex).cycle()
    }

    e.preventDefault()
  })

}(window.jQuery);
/*
 *	jQuery carouFredSel 6.2.0
 *	Demo's and documentation:
 *	caroufredsel.dev7studios.com
 *
 *	Copyright (c) 2013 Fred Heusschen
 *	www.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */


(function($) {


	//	LOCAL

	if ( $.fn.carouFredSel )
	{
		return;
	}

	$.fn.caroufredsel = $.fn.carouFredSel = function(options, configs)
	{

		//	no element
		if (this.length == 0)
		{
			debug( true, 'No element found for "' + this.selector + '".' );
			return this;
		}

		//	multiple elements
		if (this.length > 1)
		{
			return this.each(function() {
				$(this).carouFredSel(options, configs);
			});
		}


		var $cfs = this,
			$tt0 = this[0],
			starting_position = false;

		if ($cfs.data('_cfs_isCarousel'))
		{
			starting_position = $cfs.triggerHandler('_cfs_triggerEvent', 'currentPosition');
			$cfs.trigger('_cfs_triggerEvent', ['destroy', true]);
		}

		var FN = {};

		FN._cfs_init = function(o, setOrig, start)
		{
			o = go_getObject($tt0, o);

			o.items = go_getItemsObject($tt0, o.items);
			o.scroll = go_getScrollObject($tt0, o.scroll);
			o.auto = go_getAutoObject($tt0, o.auto);
			o.prev = go_getPrevNextObject($tt0, o.prev);
			o.next = go_getPrevNextObject($tt0, o.next);
			o.pagination = go_getPaginationObject($tt0, o.pagination);
			o.swipe = go_getSwipeObject($tt0, o.swipe);
			o.mousewheel = go_getMousewheelObject($tt0, o.mousewheel);

			if (setOrig)
			{
				opts_orig = $.extend(true, {}, $.fn.carouFredSel.defaults, o);
			}

			opts = $.extend(true, {}, $.fn.carouFredSel.defaults, o);
			opts.d = cf_getDimensions(opts);

			crsl.direction = (opts.direction == 'up' || opts.direction == 'left') ? 'next' : 'prev';

			var	a_itm = $cfs.children(),
				avail_primary = ms_getParentSize($wrp, opts, 'width');

			if (is_true(opts.cookie))
			{
				opts.cookie = 'caroufredsel_cookie_' + conf.serialNumber;
			}

			opts.maxDimension = ms_getMaxDimension(opts, avail_primary);

			//	complement items and sizes
			opts.items = in_complementItems(opts.items, opts, a_itm, start);
			opts[opts.d['width']] = in_complementPrimarySize(opts[opts.d['width']], opts, a_itm);
			opts[opts.d['height']] = in_complementSecondarySize(opts[opts.d['height']], opts, a_itm);

			//	primary size not set for a responsive carousel
			if (opts.responsive)
			{
				if (!is_percentage(opts[opts.d['width']]))
				{
					opts[opts.d['width']] = '100%';
				}
			}

			//	primary size is percentage
			if (is_percentage(opts[opts.d['width']]))
			{
				crsl.upDateOnWindowResize = true;
				crsl.primarySizePercentage = opts[opts.d['width']];
				opts[opts.d['width']] = ms_getPercentage(avail_primary, crsl.primarySizePercentage);
				if (!opts.items.visible)
				{
					opts.items.visibleConf.variable = true;
				}
			}

			if (opts.responsive)
			{
				opts.usePadding = false;
				opts.padding = [0, 0, 0, 0];
				opts.align = false;
				opts.items.visibleConf.variable = false;
			}
			else
			{
				//	visible-items not set
				if (!opts.items.visible)
				{
					opts = in_complementVisibleItems(opts, avail_primary);
				}

				//	primary size not set -> calculate it or set to "variable"
				if (!opts[opts.d['width']])
				{
					if (!opts.items.visibleConf.variable && is_number(opts.items[opts.d['width']]) && opts.items.filter == '*')
					{
						opts[opts.d['width']] = opts.items.visible * opts.items[opts.d['width']];
						opts.align = false;
					}
					else
					{
						opts[opts.d['width']] = 'variable';
					}
				}
				//	align not set -> set to center if primary size is number
				if (is_undefined(opts.align))
				{
					opts.align = (is_number(opts[opts.d['width']]))
						? 'center'
						: false;
				}
				//	set variabe visible-items
				if (opts.items.visibleConf.variable)
				{
					opts.items.visible = gn_getVisibleItemsNext(a_itm, opts, 0);
				}
			}

			//	set visible items by filter
			if (opts.items.filter != '*' && !opts.items.visibleConf.variable)
			{
				opts.items.visibleConf.org = opts.items.visible;
				opts.items.visible = gn_getVisibleItemsNextFilter(a_itm, opts, 0);
			}

			opts.items.visible = cf_getItemsAdjust(opts.items.visible, opts, opts.items.visibleConf.adjust, $tt0);
			opts.items.visibleConf.old = opts.items.visible;

			if (opts.responsive)
			{
				if (!opts.items.visibleConf.min)
				{
					opts.items.visibleConf.min = opts.items.visible;
				}
				if (!opts.items.visibleConf.max)
				{
					opts.items.visibleConf.max = opts.items.visible;
				}
				opts = in_getResponsiveValues(opts, a_itm, avail_primary);
			}
			else
			{
				opts.padding = cf_getPadding(opts.padding);

				if (opts.align == 'top')
				{
					opts.align = 'left';
				}
				else if (opts.align == 'bottom')
				{
					opts.align = 'right';
				}

				switch (opts.align)
				{
					//	align: center, left or right
					case 'center':
					case 'left':
					case 'right':
						if (opts[opts.d['width']] != 'variable')
						{
							opts = in_getAlignPadding(opts, a_itm);
							opts.usePadding = true;
						}
						break;

					//	padding
					default:
						opts.align = false;
						opts.usePadding = (
							opts.padding[0] == 0 && 
							opts.padding[1] == 0 && 
							opts.padding[2] == 0 && 
							opts.padding[3] == 0
						) ? false : true;
						break;
				}
			}

			if (!is_number(opts.scroll.duration))
			{
				opts.scroll.duration = 500;
			}
			if (is_undefined(opts.scroll.items))
			{
				opts.scroll.items = (opts.responsive || opts.items.visibleConf.variable || opts.items.filter != '*') 
					? 'visible'
					: opts.items.visible;
			}

			opts.auto = $.extend(true, {}, opts.scroll, opts.auto);
			opts.prev = $.extend(true, {}, opts.scroll, opts.prev);
			opts.next = $.extend(true, {}, opts.scroll, opts.next);
			opts.pagination = $.extend(true, {}, opts.scroll, opts.pagination);
			//	swipe and mousewheel extend later on, per direction

			opts.auto = go_complementAutoObject($tt0, opts.auto);
			opts.prev = go_complementPrevNextObject($tt0, opts.prev);
			opts.next = go_complementPrevNextObject($tt0, opts.next);
			opts.pagination = go_complementPaginationObject($tt0, opts.pagination);
			opts.swipe = go_complementSwipeObject($tt0, opts.swipe);
			opts.mousewheel = go_complementMousewheelObject($tt0, opts.mousewheel);

			if (opts.synchronise)
			{
				opts.synchronise = cf_getSynchArr(opts.synchronise);
			}


			//	DEPRECATED
			if (opts.auto.onPauseStart)
			{
				opts.auto.onTimeoutStart = opts.auto.onPauseStart;
				deprecated('auto.onPauseStart', 'auto.onTimeoutStart');
			}
			if (opts.auto.onPausePause)
			{
				opts.auto.onTimeoutPause = opts.auto.onPausePause;
				deprecated('auto.onPausePause', 'auto.onTimeoutPause');
			}
			if (opts.auto.onPauseEnd)
			{
				opts.auto.onTimeoutEnd = opts.auto.onPauseEnd;
				deprecated('auto.onPauseEnd', 'auto.onTimeoutEnd');
			}
			if (opts.auto.pauseDuration)
			{
				opts.auto.timeoutDuration = opts.auto.pauseDuration;
				deprecated('auto.pauseDuration', 'auto.timeoutDuration');
			}
			//	/DEPRECATED


		};	//	/init


		FN._cfs_build = function() {
			$cfs.data('_cfs_isCarousel', true);

			var a_itm = $cfs.children(),
				orgCSS = in_mapCss($cfs, ['textAlign', 'float', 'position', 'top', 'right', 'bottom', 'left', 'zIndex', 'width', 'height', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft']),
				newPosition = 'relative';

			switch (orgCSS.position)
			{
				case 'absolute':
				case 'fixed':
					newPosition = orgCSS.position;
					break;
			}

			if (conf.wrapper == 'parent')
			{
				sz_storeOrigCss($wrp);
			}
			else
			{
				$wrp.css(orgCSS);
			}
			$wrp.css({
				'overflow'		: 'hidden',
				'position'		: newPosition
			});

			sz_storeOrigCss($cfs);
			$cfs.data('_cfs_origCssZindex', orgCSS.zIndex);
			$cfs.css({
				'textAlign'		: 'left',
				'float'			: 'none',
				'position'		: 'absolute',
				'top'			: 0,
				'right'			: 'auto',
				'bottom'		: 'auto',
				'left'			: 0,
				'marginTop'		: 0,
				'marginRight'	: 0,
				'marginBottom'	: 0,
				'marginLeft'	: 0
			});

			sz_storeMargin(a_itm, opts);
			sz_storeOrigCss(a_itm);
			if (opts.responsive)
			{
				sz_setResponsiveSizes(opts, a_itm);
			}

		};	//	/build


		FN._cfs_bind_events = function() {
			FN._cfs_unbind_events();


			//	stop event
			$cfs.bind(cf_e('stop', conf), function(e, imm) {
				e.stopPropagation();

				//	button
				if (!crsl.isStopped)
				{
					if (opts.auto.button)
					{
						opts.auto.button.addClass(cf_c('stopped', conf));
					}
				}

				//	set stopped
				crsl.isStopped = true;

				if (opts.auto.play)
				{
					opts.auto.play = false;
					$cfs.trigger(cf_e('pause', conf), imm);
				}
				return true;
			});


			//	finish event
			$cfs.bind(cf_e('finish', conf), function(e) {
				e.stopPropagation();
				if (crsl.isScrolling)
				{
					sc_stopScroll(scrl);
				}
				return true;
			});


			//	pause event
			$cfs.bind(cf_e('pause', conf), function(e, imm, res) {
				e.stopPropagation();
				tmrs = sc_clearTimers(tmrs);

				//	immediately pause
				if (imm && crsl.isScrolling)
				{
					scrl.isStopped = true;
					var nst = getTime() - scrl.startTime;
					scrl.duration -= nst;
					if (scrl.pre)
					{
						scrl.pre.duration -= nst;
					}
					if (scrl.post)
					{
						scrl.post.duration -= nst;
					}
					sc_stopScroll(scrl, false);
				}

				//	update remaining pause-time
				if (!crsl.isPaused && !crsl.isScrolling)
				{
					if (res)
					{
						tmrs.timePassed += getTime() - tmrs.startTime;
					}
				}

				//	button
				if (!crsl.isPaused)
				{
					if (opts.auto.button)
					{
						opts.auto.button.addClass(cf_c('paused', conf));
					}
				}

				//	set paused
				crsl.isPaused = true;

				//	pause pause callback
				if (opts.auto.onTimeoutPause)
				{
					var dur1 = opts.auto.timeoutDuration - tmrs.timePassed,
						perc = 100 - Math.ceil( dur1 * 100 / opts.auto.timeoutDuration );

					opts.auto.onTimeoutPause.call($tt0, perc, dur1);
				}
				return true;
			});


			//	play event
			$cfs.bind(cf_e('play', conf), function(e, dir, del, res) {
				e.stopPropagation();
				tmrs = sc_clearTimers(tmrs);

				//	sort params
				var v = [dir, del, res],
					t = ['string', 'number', 'boolean'],
					a = cf_sortParams(v, t);

				dir = a[0];
				del = a[1];
				res = a[2];

				if (dir != 'prev' && dir != 'next')
				{
					dir = crsl.direction;
				}
				if (!is_number(del))
				{
					del = 0;
				}
				if (!is_boolean(res))
				{
					res = false;
				}

				//	stopped?
				if (res)
				{
					crsl.isStopped = false;
					opts.auto.play = true;
				}
				if (!opts.auto.play)
				{
					e.stopImmediatePropagation();
					return debug(conf, 'Carousel stopped: Not scrolling.');
				}

				//	button
				if (crsl.isPaused)
				{
					if (opts.auto.button)
					{
						opts.auto.button.removeClass(cf_c('stopped', conf));
						opts.auto.button.removeClass(cf_c('paused', conf));
					}
				}

				//	set playing
				crsl.isPaused = false;
				tmrs.startTime = getTime();

				//	timeout the scrolling
				var dur1 = opts.auto.timeoutDuration + del;
					dur2 = dur1 - tmrs.timePassed;
					perc = 100 - Math.ceil(dur2 * 100 / dur1);

				if (opts.auto.progress)
				{
					tmrs.progress = setInterval(function() {
						var pasd = getTime() - tmrs.startTime + tmrs.timePassed,
							perc = Math.ceil(pasd * 100 / dur1);
						opts.auto.progress.updater.call(opts.auto.progress.bar[0], perc);
					}, opts.auto.progress.interval);
				}

				tmrs.auto = setTimeout(function() {
					if (opts.auto.progress)
					{
						opts.auto.progress.updater.call(opts.auto.progress.bar[0], 100);
					}
					if (opts.auto.onTimeoutEnd)
					{
						opts.auto.onTimeoutEnd.call($tt0, perc, dur2);
					}
					if (crsl.isScrolling)
					{
						$cfs.trigger(cf_e('play', conf), dir);
					}
					else
					{
						$cfs.trigger(cf_e(dir, conf), opts.auto);
					}
				}, dur2);

				//	pause start callback
				if (opts.auto.onTimeoutStart)
				{
					opts.auto.onTimeoutStart.call($tt0, perc, dur2);
				}

				return true;
			});


			//	resume event
			$cfs.bind(cf_e('resume', conf), function(e) {
				e.stopPropagation();
				if (scrl.isStopped)
				{
					scrl.isStopped = false;
					crsl.isPaused = false;
					crsl.isScrolling = true;
					scrl.startTime = getTime();
					sc_startScroll(scrl, conf);
				}
				else
				{
					$cfs.trigger(cf_e('play', conf));
				}
				return true;
			});


			//	prev + next events
			$cfs.bind(cf_e('prev', conf)+' '+cf_e('next', conf), function(e, obj, num, clb, que) {
				e.stopPropagation();

				//	stopped or hidden carousel, don't scroll, don't queue
				if (crsl.isStopped || $cfs.is(':hidden'))
				{
					e.stopImmediatePropagation();
					return debug(conf, 'Carousel stopped or hidden: Not scrolling.');
				}

				//	not enough items
				var minimum = (is_number(opts.items.minimum)) ? opts.items.minimum : opts.items.visible + 1;
				if (minimum > itms.total)
				{
					e.stopImmediatePropagation();
					return debug(conf, 'Not enough items ('+itms.total+' total, '+minimum+' needed): Not scrolling.');
				}

				//	get config
				var v = [obj, num, clb, que],
					t = ['object', 'number/string', 'function', 'boolean'],
					a = cf_sortParams(v, t);

				obj = a[0];
				num = a[1];
				clb = a[2];
				que = a[3];

				var eType = e.type.slice(conf.events.prefix.length);

				if (!is_object(obj))
				{
					obj = {};
				}
				if (is_function(clb))
				{
					obj.onAfter = clb;
				}
				if (is_boolean(que))
				{
					obj.queue = que;
				}
				obj = $.extend(true, {}, opts[eType], obj);

				//	test conditions callback
				if (obj.conditions && !obj.conditions.call($tt0, eType))
				{
					e.stopImmediatePropagation();
					return debug(conf, 'Callback "conditions" returned false.');
				}

				if (!is_number(num))
				{
					if (opts.items.filter != '*')
					{
						num = 'visible';
					}
					else
					{
						var arr = [num, obj.items, opts[eType].items];
						for (var a = 0, l = arr.length; a < l; a++)
						{
							if (is_number(arr[a]) || arr[a] == 'page' || arr[a] == 'visible') {
								num = arr[a];
								break;
							}
						}
					}
					switch(num) {
						case 'page':
							e.stopImmediatePropagation();
							return $cfs.triggerHandler(cf_e(eType+'Page', conf), [obj, clb]);
							break;

						case 'visible':
							if (!opts.items.visibleConf.variable && opts.items.filter == '*')
							{
								num = opts.items.visible;
							}
							break;
					}
				}

				//	resume animation, add current to queue
				if (scrl.isStopped)
				{
					$cfs.trigger(cf_e('resume', conf));
					$cfs.trigger(cf_e('queue', conf), [eType, [obj, num, clb]]);
					e.stopImmediatePropagation();
					return debug(conf, 'Carousel resumed scrolling.');
				}

				//	queue if scrolling
				if (obj.duration > 0)
				{
					if (crsl.isScrolling)
					{
						if (obj.queue)
						{
							if (obj.queue == 'last')
							{
								queu = [];
							}
							if (obj.queue != 'first' || queu.length == 0)
							{
								$cfs.trigger(cf_e('queue', conf), [eType, [obj, num, clb]]);
							}
						}
						e.stopImmediatePropagation();
						return debug(conf, 'Carousel currently scrolling.');
					}
				}

				tmrs.timePassed = 0;
				$cfs.trigger(cf_e('slide_'+eType, conf), [obj, num]);

				//	synchronise
				if (opts.synchronise)
				{
					var s = opts.synchronise,
						c = [obj, num];

					for (var j = 0, l = s.length; j < l; j++) {
						var d = eType;
						if (!s[j][2])
						{
							d = (d == 'prev') ? 'next' : 'prev';
						}
						if (!s[j][1])
						{
							c[0] = s[j][0].triggerHandler('_cfs_triggerEvent', ['configuration', d]);
						}
						c[1] = num + s[j][3];
						s[j][0].trigger('_cfs_triggerEvent', ['slide_'+d, c]);
					}
				}
				return true;
			});


			//	prev event
			$cfs.bind(cf_e('slide_prev', conf), function(e, sO, nI) {
				e.stopPropagation();
				var a_itm = $cfs.children();

				//	non-circular at start, scroll to end
				if (!opts.circular)
				{
					if (itms.first == 0)
					{
						if (opts.infinite)
						{
							$cfs.trigger(cf_e('next', conf), itms.total-1);
						}
						return e.stopImmediatePropagation();
					}
				}

				sz_resetMargin(a_itm, opts);

				//	find number of items to scroll
				if (!is_number(nI))
				{
					if (opts.items.visibleConf.variable)
					{
						nI = gn_getVisibleItemsPrev(a_itm, opts, itms.total-1);
					}
					else if (opts.items.filter != '*')
					{
						var xI = (is_number(sO.items)) ? sO.items : gn_getVisibleOrg($cfs, opts);
						nI = gn_getScrollItemsPrevFilter(a_itm, opts, itms.total-1, xI);
					}
					else
					{
						nI = opts.items.visible;
					}
					nI = cf_getAdjust(nI, opts, sO.items, $tt0);
				}

				//	prevent non-circular from scrolling to far
				if (!opts.circular)
				{
					if (itms.total - nI < itms.first)
					{
						nI = itms.total - itms.first;
					}
				}

				//	set new number of visible items
				opts.items.visibleConf.old = opts.items.visible;
				if (opts.items.visibleConf.variable)
				{
					var vI = cf_getItemsAdjust(gn_getVisibleItemsNext(a_itm, opts, itms.total-nI), opts, opts.items.visibleConf.adjust, $tt0);
					if (opts.items.visible+nI <= vI && nI < itms.total)
					{
						nI++;
						vI = cf_getItemsAdjust(gn_getVisibleItemsNext(a_itm, opts, itms.total-nI), opts, opts.items.visibleConf.adjust, $tt0);
					}
					opts.items.visible = vI;
				}
				else if (opts.items.filter != '*')
				{
					var vI = gn_getVisibleItemsNextFilter(a_itm, opts, itms.total-nI);
					opts.items.visible = cf_getItemsAdjust(vI, opts, opts.items.visibleConf.adjust, $tt0);
				}

				sz_resetMargin(a_itm, opts, true);

				//	scroll 0, don't scroll
				if (nI == 0)
				{
					e.stopImmediatePropagation();
					return debug(conf, '0 items to scroll: Not scrolling.');
				}
				debug(conf, 'Scrolling '+nI+' items backward.');


				//	save new config
				itms.first += nI;
				while (itms.first >= itms.total)
				{
					itms.first -= itms.total;
				}

				//	non-circular callback
				if (!opts.circular)
				{
					if (itms.first == 0 && sO.onEnd)
					{
						sO.onEnd.call($tt0, 'prev');
					}
					if (!opts.infinite)
					{
						nv_enableNavi(opts, itms.first, conf);
					}
				}

				//	rearrange items
				$cfs.children().slice(itms.total-nI, itms.total).prependTo($cfs);
				if (itms.total < opts.items.visible + nI)
				{
					$cfs.children().slice(0, (opts.items.visible+nI)-itms.total).clone(true).appendTo($cfs);
				}

				//	the needed items
				var a_itm = $cfs.children(),
					i_old = gi_getOldItemsPrev(a_itm, opts, nI),
					i_new = gi_getNewItemsPrev(a_itm, opts),
					i_cur_l = a_itm.eq(nI-1),
					i_old_l = i_old.last(),
					i_new_l = i_new.last();

				sz_resetMargin(a_itm, opts);

				var pL = 0,
					pR = 0;

				if (opts.align)
				{
					var p = cf_getAlignPadding(i_new, opts);
					pL = p[0];
					pR = p[1];
				}
				var oL = (pL < 0) ? opts.padding[opts.d[3]] : 0;

				//	hide items for fx directscroll
				var hiddenitems = false,
					i_skp = $();
				if (opts.items.visible < nI)
				{
					i_skp = a_itm.slice(opts.items.visibleConf.old, nI);
					if (sO.fx == 'directscroll')
					{
						var orgW = opts.items[opts.d['width']];
						hiddenitems = i_skp;
						i_cur_l = i_new_l;
						sc_hideHiddenItems(hiddenitems);
						opts.items[opts.d['width']] = 'variable';
					}
				}

				//	save new sizes
				var $cf2 = false,
					i_siz = ms_getTotalSize(a_itm.slice(0, nI), opts, 'width'),
					w_siz = cf_mapWrapperSizes(ms_getSizes(i_new, opts, true), opts, !opts.usePadding),
					i_siz_vis = 0,
					a_cfs = {},
					a_wsz = {},
					a_cur = {},
					a_old = {},
					a_new = {},
					a_lef = {},
					a_lef_vis = {},
					a_dur = sc_getDuration(sO, opts, nI, i_siz);

				switch(sO.fx)
				{
					case 'cover':
					case 'cover-fade':
						i_siz_vis = ms_getTotalSize(a_itm.slice(0, opts.items.visible), opts, 'width');
						break;
				}

				if (hiddenitems)
				{
					opts.items[opts.d['width']] = orgW;
				}

				sz_resetMargin(a_itm, opts, true);
				if (pR >= 0)
				{
					sz_resetMargin(i_old_l, opts, opts.padding[opts.d[1]]);
				}
				if (pL >= 0)
				{
					sz_resetMargin(i_cur_l, opts, opts.padding[opts.d[3]]);
				}

				if (opts.align)
				{
					opts.padding[opts.d[1]] = pR;
					opts.padding[opts.d[3]] = pL;
				}

				a_lef[opts.d['left']] = -(i_siz - oL);
				a_lef_vis[opts.d['left']] = -(i_siz_vis - oL);
				a_wsz[opts.d['left']] = w_siz[opts.d['width']];

				//	scrolling functions
				var _s_wrapper = function() {},
					_a_wrapper = function() {},
					_s_paddingold = function() {},
					_a_paddingold = function() {},
					_s_paddingnew = function() {},
					_a_paddingnew = function() {},
					_s_paddingcur = function() {},
					_a_paddingcur = function() {},
					_onafter = function() {},
					_moveitems = function() {},
					_position = function() {};

				//	clone carousel
				switch(sO.fx)
				{
					case 'crossfade':
					case 'cover':
					case 'cover-fade':
					case 'uncover':
					case 'uncover-fade':
						$cf2 = $cfs.clone(true).appendTo($wrp);
						break;
				}
				switch(sO.fx)
				{
					case 'crossfade':
					case 'uncover':
					case 'uncover-fade':
						$cf2.children().slice(0, nI).remove();
						$cf2.children().slice(opts.items.visibleConf.old).remove();
						break;

					case 'cover':
					case 'cover-fade':
						$cf2.children().slice(opts.items.visible).remove();
						$cf2.css(a_lef_vis);
						break;
				}

				$cfs.css(a_lef);

				//	reset all scrolls
				scrl = sc_setScroll(a_dur, sO.easing, conf);

				//	animate / set carousel
				a_cfs[opts.d['left']] = (opts.usePadding) ? opts.padding[opts.d[3]] : 0;

				//	animate / set wrapper
				if (opts[opts.d['width']] == 'variable' || opts[opts.d['height']] == 'variable')
				{
					_s_wrapper = function() {
						$wrp.css(w_siz);
					};
					_a_wrapper = function() {
						scrl.anims.push([$wrp, w_siz]);
					};
				}

				//	animate / set items
				if (opts.usePadding)
				{
					if (i_new_l.not(i_cur_l).length)
					{
			 			a_cur[opts.d['marginRight']] = i_cur_l.data('_cfs_origCssMargin');

						if (pL < 0)
						{
							i_cur_l.css(a_cur);
						}
						else
						{
							_s_paddingcur = function() {
								i_cur_l.css(a_cur);
							};
							_a_paddingcur = function() {
								scrl.anims.push([i_cur_l, a_cur]);
							};
						}
					}
					switch(sO.fx)
					{
						case 'cover':
						case 'cover-fade':
							$cf2.children().eq(nI-1).css(a_cur);
							break;
					}

					if (i_new_l.not(i_old_l).length)
					{
						a_old[opts.d['marginRight']] = i_old_l.data('_cfs_origCssMargin');
						_s_paddingold = function() {
							i_old_l.css(a_old);
						};
						_a_paddingold = function() {
							scrl.anims.push([i_old_l, a_old]);
						};
					}

					if (pR >= 0)
					{
						a_new[opts.d['marginRight']] = i_new_l.data('_cfs_origCssMargin') + opts.padding[opts.d[1]];
						_s_paddingnew = function() {
							i_new_l.css(a_new);
						};
						_a_paddingnew = function() {
							scrl.anims.push([i_new_l, a_new]);
						};
					}
				}

				//	set position
				_position = function() {
					$cfs.css(a_cfs);
				};


				var overFill = opts.items.visible+nI-itms.total;

				//	rearrange items
				_moveitems = function() {
					if (overFill > 0)
					{
						$cfs.children().slice(itms.total).remove();
						i_old = $( $cfs.children().slice(itms.total-(opts.items.visible-overFill)).get().concat( $cfs.children().slice(0, overFill).get() ) );
					}
					sc_showHiddenItems(hiddenitems);

					if (opts.usePadding)
					{
						var l_itm = $cfs.children().eq(opts.items.visible+nI-1);
						l_itm.css(opts.d['marginRight'], l_itm.data('_cfs_origCssMargin'));
					}
				};


				var cb_arguments = sc_mapCallbackArguments(i_old, i_skp, i_new, nI, 'prev', a_dur, w_siz);

				//	fire onAfter callbacks
				_onafter = function() {
					sc_afterScroll($cfs, $cf2, sO);
					crsl.isScrolling = false;
					clbk.onAfter = sc_fireCallbacks($tt0, sO, 'onAfter', cb_arguments, clbk);
					queu = sc_fireQueue($cfs, queu, conf);

					if (!crsl.isPaused)
					{
						$cfs.trigger(cf_e('play', conf));
					}
				};

				//	fire onBefore callback
				crsl.isScrolling = true;
				tmrs = sc_clearTimers(tmrs);
				clbk.onBefore = sc_fireCallbacks($tt0, sO, 'onBefore', cb_arguments, clbk);

				switch(sO.fx)
				{
					case 'none':
						$cfs.css(a_cfs);
						_s_wrapper();
						_s_paddingold();
						_s_paddingnew();
						_s_paddingcur();
						_position();
						_moveitems();
						_onafter();
						break;

					case 'fade':
						scrl.anims.push([$cfs, { 'opacity': 0 }, function() {
							_s_wrapper();
							_s_paddingold();
							_s_paddingnew();
							_s_paddingcur();
							_position();
							_moveitems();
							scrl = sc_setScroll(a_dur, sO.easing, conf);
							scrl.anims.push([$cfs, { 'opacity': 1 }, _onafter]);
							sc_startScroll(scrl, conf);
						}]);
						break;

					case 'crossfade':
						$cfs.css({ 'opacity': 0 });
						scrl.anims.push([$cf2, { 'opacity': 0 }]);
						scrl.anims.push([$cfs, { 'opacity': 1 }, _onafter]);
						_a_wrapper();
						_s_paddingold();
						_s_paddingnew();
						_s_paddingcur();
						_position();
						_moveitems();
						break;

					case 'cover':
						scrl.anims.push([$cf2, a_cfs, function() {
							_s_paddingold();
							_s_paddingnew();
							_s_paddingcur();
							_position();
							_moveitems();
							_onafter();
						}]);
						_a_wrapper();
						break;

					case 'cover-fade':
						scrl.anims.push([$cfs, { 'opacity': 0 }]);
						scrl.anims.push([$cf2, a_cfs, function() {
							$cfs.css({ 'opacity': 1 });
							_s_paddingold();
							_s_paddingnew();
							_s_paddingcur();
							_position();
							_moveitems();
							_onafter();
						}]);
						_a_wrapper();
						break;

					case 'uncover':
						scrl.anims.push([$cf2, a_wsz, _onafter]);
						_a_wrapper();
						_s_paddingold();
						_s_paddingnew();
						_s_paddingcur();
						_position();
						_moveitems();
						break;

					case 'uncover-fade':
						$cfs.css({ 'opacity': 0 });
						scrl.anims.push([$cfs, { 'opacity': 1 }]);
						scrl.anims.push([$cf2, a_wsz, _onafter]);
						_a_wrapper();
						_s_paddingold();
						_s_paddingnew();
						_s_paddingcur();
						_position();
						_moveitems();
						break;

					default:
						scrl.anims.push([$cfs, a_cfs, function() {
							_moveitems();
							_onafter();
						}]);
						_a_wrapper();
						_a_paddingold();
						_a_paddingnew();
						_a_paddingcur();
						break;
				}

				sc_startScroll(scrl, conf);
				cf_setCookie(opts.cookie, $cfs, conf);

				$cfs.trigger(cf_e('updatePageStatus', conf), [false, w_siz]);

				return true;
			});


			//	next event
			$cfs.bind(cf_e('slide_next', conf), function(e, sO, nI) {
				e.stopPropagation();
				var a_itm = $cfs.children();

				//	non-circular at end, scroll to start
				if (!opts.circular)
				{
					if (itms.first == opts.items.visible)
					{
						if (opts.infinite)
						{
							$cfs.trigger(cf_e('prev', conf), itms.total-1);
						}
						return e.stopImmediatePropagation();
					}
				}

				sz_resetMargin(a_itm, opts);

				//	find number of items to scroll
				if (!is_number(nI))
				{
					if (opts.items.filter != '*')
					{
						var xI = (is_number(sO.items)) ? sO.items : gn_getVisibleOrg($cfs, opts);
						nI = gn_getScrollItemsNextFilter(a_itm, opts, 0, xI);
					}
					else
					{
						nI = opts.items.visible;
					}
					nI = cf_getAdjust(nI, opts, sO.items, $tt0);
				}

				var lastItemNr = (itms.first == 0) ? itms.total : itms.first;

				//	prevent non-circular from scrolling to far
				if (!opts.circular)
				{
					if (opts.items.visibleConf.variable)
					{
						var vI = gn_getVisibleItemsNext(a_itm, opts, nI),
							xI = gn_getVisibleItemsPrev(a_itm, opts, lastItemNr-1);
					}
					else
					{
						var vI = opts.items.visible,
							xI = opts.items.visible;
					}

					if (nI + vI > lastItemNr)
					{
						nI = lastItemNr - xI;
					}
				}

				//	set new number of visible items
				opts.items.visibleConf.old = opts.items.visible;
				if (opts.items.visibleConf.variable)
				{
					var vI = cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(a_itm, opts, nI, lastItemNr), opts, opts.items.visibleConf.adjust, $tt0);
					while (opts.items.visible-nI >= vI && nI < itms.total)
					{
						nI++;
						vI = cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(a_itm, opts, nI, lastItemNr), opts, opts.items.visibleConf.adjust, $tt0);
					}
					opts.items.visible = vI;
				}
				else if (opts.items.filter != '*')
				{
					var vI = gn_getVisibleItemsNextFilter(a_itm, opts, nI);
					opts.items.visible = cf_getItemsAdjust(vI, opts, opts.items.visibleConf.adjust, $tt0);
				}

				sz_resetMargin(a_itm, opts, true);

				//	scroll 0, don't scroll
				if (nI == 0)
				{
					e.stopImmediatePropagation();
					return debug(conf, '0 items to scroll: Not scrolling.');
				}
				debug(conf, 'Scrolling '+nI+' items forward.');


				//	save new config
				itms.first -= nI;
				while (itms.first < 0)
				{
					itms.first += itms.total;
				}

				//	non-circular callback
				if (!opts.circular)
				{
					if (itms.first == opts.items.visible && sO.onEnd)
					{
						sO.onEnd.call($tt0, 'next');
					}
					if (!opts.infinite)
					{
						nv_enableNavi(opts, itms.first, conf);
					}
				}

				//	rearrange items
				if (itms.total < opts.items.visible+nI)
				{
					$cfs.children().slice(0, (opts.items.visible+nI)-itms.total).clone(true).appendTo($cfs);
				}

				//	the needed items
				var a_itm = $cfs.children(),
					i_old = gi_getOldItemsNext(a_itm, opts),
					i_new = gi_getNewItemsNext(a_itm, opts, nI),
					i_cur_l = a_itm.eq(nI-1),
					i_old_l = i_old.last(),
					i_new_l = i_new.last();

				sz_resetMargin(a_itm, opts);

				var pL = 0,
					pR = 0;

				if (opts.align)
				{
					var p = cf_getAlignPadding(i_new, opts);
					pL = p[0];
					pR = p[1];
				}

				//	hide items for fx directscroll
				var hiddenitems = false,
					i_skp = $();
				if (opts.items.visibleConf.old < nI)
				{
					i_skp = a_itm.slice(opts.items.visibleConf.old, nI);
					if (sO.fx == 'directscroll')
					{
						var orgW = opts.items[opts.d['width']];
						hiddenitems = i_skp;
						i_cur_l = i_old_l;
						sc_hideHiddenItems(hiddenitems);
						opts.items[opts.d['width']] = 'variable';
					}
				}

				//	save new sizes
				var $cf2 = false,
					i_siz = ms_getTotalSize(a_itm.slice(0, nI), opts, 'width'),
					w_siz = cf_mapWrapperSizes(ms_getSizes(i_new, opts, true), opts, !opts.usePadding),
					i_siz_vis = 0,
					a_cfs = {},
					a_cfs_vis = {},
					a_cur = {},
					a_old = {},
					a_lef = {},
					a_dur = sc_getDuration(sO, opts, nI, i_siz);

				switch(sO.fx)
				{
					case 'uncover':
					case 'uncover-fade':
						i_siz_vis = ms_getTotalSize(a_itm.slice(0, opts.items.visibleConf.old), opts, 'width');
						break;
				}

				if (hiddenitems)
				{
					opts.items[opts.d['width']] = orgW;
				}

				if (opts.align)
				{
					if (opts.padding[opts.d[1]] < 0)
					{
						opts.padding[opts.d[1]] = 0;
					}
				}
				sz_resetMargin(a_itm, opts, true);
				sz_resetMargin(i_old_l, opts, opts.padding[opts.d[1]]);

				if (opts.align)
				{
					opts.padding[opts.d[1]] = pR;
					opts.padding[opts.d[3]] = pL;
				}

				a_lef[opts.d['left']] = (opts.usePadding) ? opts.padding[opts.d[3]] : 0;

				//	scrolling functions
				var _s_wrapper = function() {},
					_a_wrapper = function() {},
					_s_paddingold = function() {},
					_a_paddingold = function() {},
					_s_paddingcur = function() {},
					_a_paddingcur = function() {},
					_onafter = function() {},
					_moveitems = function() {},
					_position = function() {};

				//	clone carousel
				switch(sO.fx)
				{
					case 'crossfade':
					case 'cover':
					case 'cover-fade':
					case 'uncover':
					case 'uncover-fade':
						$cf2 = $cfs.clone(true).appendTo($wrp);
						$cf2.children().slice(opts.items.visibleConf.old).remove();
						break;
				}
				switch(sO.fx)
				{
					case 'crossfade':
					case 'cover':
					case 'cover-fade':
						$cfs.css('zIndex', 1);
						$cf2.css('zIndex', 0);
						break;
				}

				//	reset all scrolls
				scrl = sc_setScroll(a_dur, sO.easing, conf);

				//	animate / set carousel
				a_cfs[opts.d['left']] = -i_siz;
				a_cfs_vis[opts.d['left']] = -i_siz_vis;

				if (pL < 0)
				{
					a_cfs[opts.d['left']] += pL;
				}

				//	animate / set wrapper
				if (opts[opts.d['width']] == 'variable' || opts[opts.d['height']] == 'variable')
				{
					_s_wrapper = function() {
						$wrp.css(w_siz);
					};
					_a_wrapper = function() {
						scrl.anims.push([$wrp, w_siz]);
					};
				}

				//	animate / set items
				if (opts.usePadding)
				{
					var i_new_l_m = i_new_l.data('_cfs_origCssMargin');

					if (pR >= 0)
					{
						i_new_l_m += opts.padding[opts.d[1]];
					}
					i_new_l.css(opts.d['marginRight'], i_new_l_m);

					if (i_cur_l.not(i_old_l).length)
					{
						a_old[opts.d['marginRight']] = i_old_l.data('_cfs_origCssMargin');
					}
					_s_paddingold = function() {
						i_old_l.css(a_old);
					};
					_a_paddingold = function() {
						scrl.anims.push([i_old_l, a_old]);
					};

					var i_cur_l_m = i_cur_l.data('_cfs_origCssMargin');
					if (pL > 0)
					{
						i_cur_l_m += opts.padding[opts.d[3]];
					}

					a_cur[opts.d['marginRight']] = i_cur_l_m;

					_s_paddingcur = function() {
						i_cur_l.css(a_cur);
					};
					_a_paddingcur = function() {
						scrl.anims.push([i_cur_l, a_cur]);
					};
				}

				//	set position
				_position = function() {
					$cfs.css(a_lef);
				};


				var overFill = opts.items.visible+nI-itms.total;

				//	rearrange items
				_moveitems = function() {
					if (overFill > 0)
					{
						$cfs.children().slice(itms.total).remove();
					}
					var l_itm = $cfs.children().slice(0, nI).appendTo($cfs).last();
					if (overFill > 0)
					{
						i_new = gi_getCurrentItems(a_itm, opts);
					}
					sc_showHiddenItems(hiddenitems);

					if (opts.usePadding)
					{
						if (itms.total < opts.items.visible+nI) {
							var i_cur_l = $cfs.children().eq(opts.items.visible-1);
							i_cur_l.css(opts.d['marginRight'], i_cur_l.data('_cfs_origCssMargin') + opts.padding[opts.d[1]]);
						}
						l_itm.css(opts.d['marginRight'], l_itm.data('_cfs_origCssMargin'));
					}
				};


				var cb_arguments = sc_mapCallbackArguments(i_old, i_skp, i_new, nI, 'next', a_dur, w_siz);

				//	fire onAfter callbacks
				_onafter = function() {
					$cfs.css('zIndex', $cfs.data('_cfs_origCssZindex'));
					sc_afterScroll($cfs, $cf2, sO);
					crsl.isScrolling = false;
					clbk.onAfter = sc_fireCallbacks($tt0, sO, 'onAfter', cb_arguments, clbk);
					queu = sc_fireQueue($cfs, queu, conf);
					
					if (!crsl.isPaused)
					{
						$cfs.trigger(cf_e('play', conf));
					}
				};

				//	fire onBefore callbacks
				crsl.isScrolling = true;
				tmrs = sc_clearTimers(tmrs);
				clbk.onBefore = sc_fireCallbacks($tt0, sO, 'onBefore', cb_arguments, clbk);

				switch(sO.fx)
				{
					case 'none':
						$cfs.css(a_cfs);
						_s_wrapper();
						_s_paddingold();
						_s_paddingcur();
						_position();
						_moveitems();
						_onafter();
						break;

					case 'fade':
						scrl.anims.push([$cfs, { 'opacity': 0 }, function() {
							_s_wrapper();
							_s_paddingold();
							_s_paddingcur();
							_position();
							_moveitems();
							scrl = sc_setScroll(a_dur, sO.easing, conf);
							scrl.anims.push([$cfs, { 'opacity': 1 }, _onafter]);
							sc_startScroll(scrl, conf);
						}]);
						break;

					case 'crossfade':
						$cfs.css({ 'opacity': 0 });
						scrl.anims.push([$cf2, { 'opacity': 0 }]);
						scrl.anims.push([$cfs, { 'opacity': 1 }, _onafter]);
						_a_wrapper();
						_s_paddingold();
						_s_paddingcur();
						_position();
						_moveitems();
						break;

					case 'cover':
						$cfs.css(opts.d['left'], $wrp[opts.d['width']]());
						scrl.anims.push([$cfs, a_lef, _onafter]);
						_a_wrapper();
						_s_paddingold();
						_s_paddingcur();
						_moveitems();
						break;

					case 'cover-fade':
						$cfs.css(opts.d['left'], $wrp[opts.d['width']]());
						scrl.anims.push([$cf2, { 'opacity': 0 }]);
						scrl.anims.push([$cfs, a_lef, _onafter]);
						_a_wrapper();
						_s_paddingold();
						_s_paddingcur();
						_moveitems();
						break;

					case 'uncover':
						scrl.anims.push([$cf2, a_cfs_vis, _onafter]);
						_a_wrapper();
						_s_paddingold();
						_s_paddingcur();
						_position();
						_moveitems();
						break;

					case 'uncover-fade':
						$cfs.css({ 'opacity': 0 });
						scrl.anims.push([$cfs, { 'opacity': 1 }]);
						scrl.anims.push([$cf2, a_cfs_vis, _onafter]);
						_a_wrapper();
						_s_paddingold();
						_s_paddingcur();
						_position();
						_moveitems();
						break;

					default:
						scrl.anims.push([$cfs, a_cfs, function() {
							_position();
							_moveitems();
							_onafter();
						}]);
						_a_wrapper();
						_a_paddingold();
						_a_paddingcur();
						break;
				}

				sc_startScroll(scrl, conf);
				cf_setCookie(opts.cookie, $cfs, conf);

				$cfs.trigger(cf_e('updatePageStatus', conf), [false, w_siz]);

				return true;
			});


			//	slideTo event
			$cfs.bind(cf_e('slideTo', conf), function(e, num, dev, org, obj, dir, clb) {
				e.stopPropagation();

				var v = [num, dev, org, obj, dir, clb],
					t = ['string/number/object', 'number', 'boolean', 'object', 'string', 'function'],
					a = cf_sortParams(v, t);

				obj = a[3];
				dir = a[4];
				clb = a[5];

				num = gn_getItemIndex(a[0], a[1], a[2], itms, $cfs);

				if (num == 0)
				{
					return false;
				}
				if (!is_object(obj))
				{
					obj = false;
				}

				if (dir != 'prev' && dir != 'next')
				{
					if (opts.circular)
					{
						dir = (num <= itms.total / 2) ? 'next' : 'prev';
					}
					else
					{
						dir = (itms.first == 0 || itms.first > num) ? 'next' : 'prev';
					}
				}

				if (dir == 'prev')
				{
					num = itms.total-num;
				}
				$cfs.trigger(cf_e(dir, conf), [obj, num, clb]);

				return true;
			});


			//	prevPage event
			$cfs.bind(cf_e('prevPage', conf), function(e, obj, clb) {
				e.stopPropagation();
				var cur = $cfs.triggerHandler(cf_e('currentPage', conf));
				return $cfs.triggerHandler(cf_e('slideToPage', conf), [cur-1, obj, 'prev', clb]);
			});


			//	nextPage event
			$cfs.bind(cf_e('nextPage', conf), function(e, obj, clb) {
				e.stopPropagation();
				var cur = $cfs.triggerHandler(cf_e('currentPage', conf));
				return $cfs.triggerHandler(cf_e('slideToPage', conf), [cur+1, obj, 'next', clb]);
			});


			//	slideToPage event
			$cfs.bind(cf_e('slideToPage', conf), function(e, pag, obj, dir, clb) {
				e.stopPropagation();
				if (!is_number(pag))
				{
					pag = $cfs.triggerHandler(cf_e('currentPage', conf));
				}
				var ipp = opts.pagination.items || opts.items.visible,
					max = Math.ceil(itms.total / ipp)-1;

				if (pag < 0)
				{
					pag = max;
				}
				if (pag > max)
				{
					pag = 0;
				}
				return $cfs.triggerHandler(cf_e('slideTo', conf), [pag*ipp, 0, true, obj, dir, clb]);
			});

			//	jumpToStart event
			$cfs.bind(cf_e('jumpToStart', conf), function(e, s) {
				e.stopPropagation();
				if (s)
				{
					s = gn_getItemIndex(s, 0, true, itms, $cfs);
				}
				else
				{
					s = 0;
				}

				s += itms.first;
				if (s != 0)
				{
					if (itms.total > 0)
					{
						while (s > itms.total)
						{
							s -= itms.total;
						}
					}
					$cfs.prepend($cfs.children().slice(s, itms.total));
				}
				return true;
			});


			//	synchronise event
			$cfs.bind(cf_e('synchronise', conf), function(e, s) {
				e.stopPropagation();
				if (s)
				{
					s = cf_getSynchArr(s);
				}
				else if (opts.synchronise)
				{
					s = opts.synchronise;
				}
				else
				{
					return debug(conf, 'No carousel to synchronise.');
				}

				var n = $cfs.triggerHandler(cf_e('currentPosition', conf)),
					x = true;

				for (var j = 0, l = s.length; j < l; j++)
				{
					if (!s[j][0].triggerHandler(cf_e('slideTo', conf), [n, s[j][3], true]))
					{
						x = false;
					}
				}
				return x;
			});


			//	queue event
			$cfs.bind(cf_e('queue', conf), function(e, dir, opt) {
				e.stopPropagation();
				if (is_function(dir))
				{
					dir.call($tt0, queu);
				}
				else if (is_array(dir))
				{
					queu = dir;
				}
				else if (!is_undefined(dir))
				{
					queu.push([dir, opt]);
				}
				return queu;
			});


			//	insertItem event
			$cfs.bind(cf_e('insertItem', conf), function(e, itm, num, org, dev) {
				e.stopPropagation();

				var v = [itm, num, org, dev],
					t = ['string/object', 'string/number/object', 'boolean', 'number'],
					a = cf_sortParams(v, t);

				itm = a[0];
				num = a[1];
				org = a[2];
				dev = a[3];

				if (is_object(itm) && !is_jquery(itm))
				{ 
					itm = $(itm);
				}
				else if (is_string(itm))
				{
					itm = $(itm);
				}
				if (!is_jquery(itm) || itm.length == 0)
				{
					return debug(conf, 'Not a valid object.');
				}

				if (is_undefined(num))
				{
					num = 'end';
				}

				sz_storeMargin(itm, opts);
				sz_storeOrigCss(itm);

				var orgNum = num,
					before = 'before';

				if (num == 'end')
				{
					if (org)
					{
						if (itms.first == 0)
						{
							num = itms.total-1;
							before = 'after';
						}
						else
						{
							num = itms.first;
							itms.first += itm.length;
						}
						if (num < 0)
						{
							num = 0;
						}
					}
					else
					{
						num = itms.total-1;
						before = 'after';
					}
				}
				else
				{
					num = gn_getItemIndex(num, dev, org, itms, $cfs);
				}

				var $cit = $cfs.children().eq(num);
				if ($cit.length)
				{
					$cit[before](itm);
				}
				else
				{
					debug(conf, 'Correct insert-position not found! Appending item to the end.');
					$cfs.append(itm);
				}

				if (orgNum != 'end' && !org)
				{
					if (num < itms.first)
					{
						itms.first += itm.length;
					}
				}
				itms.total = $cfs.children().length;
				if (itms.first >= itms.total)
				{
					itms.first -= itms.total;
				}

				$cfs.trigger(cf_e('updateSizes', conf));
				$cfs.trigger(cf_e('linkAnchors', conf));

				return true;
			});


			//	removeItem event
			$cfs.bind(cf_e('removeItem', conf), function(e, num, org, dev) {
				e.stopPropagation();

				var v = [num, org, dev],
					t = ['string/number/object', 'boolean', 'number'],
					a = cf_sortParams(v, t);

				num = a[0];
				org = a[1];
				dev = a[2];

				var removed = false;

				if (num instanceof $ && num.length > 1)
				{
					$removed = $();
					num.each(function(i, el) {
						var $rem = $cfs.trigger(cf_e('removeItem', conf), [$(this), org, dev]);
						if ( $rem ) 
						{
							$removed = $removed.add($rem);
						}
					});
					return $removed;
				}

				if (is_undefined(num) || num == 'end')
				{
					$removed = $cfs.children().last();
				}
				else
				{
					num = gn_getItemIndex(num, dev, org, itms, $cfs);
					var $removed = $cfs.children().eq(num);
					if ( $removed.length )
					{
						if (num < itms.first)
						{
							itms.first -= $removed.length;
						}
					}
				}
				if ( $removed && $removed.length )
				{
					$removed.detach();
					itms.total = $cfs.children().length;
					$cfs.trigger(cf_e('updateSizes', conf));
				}

				return $removed;
			});


			//	onBefore and onAfter event
			$cfs.bind(cf_e('onBefore', conf)+' '+cf_e('onAfter', conf), function(e, fn) {
				e.stopPropagation();
				var eType = e.type.slice(conf.events.prefix.length);
				if (is_array(fn))
				{
					clbk[eType] = fn;
				}
				if (is_function(fn))
				{
					clbk[eType].push(fn);
				}
				return clbk[eType];
			});


			//	currentPosition event
			$cfs.bind(cf_e('currentPosition', conf), function(e, fn) {
				e.stopPropagation();
				if (itms.first == 0)
				{
					var val = 0;
				}
				else
				{
					var val = itms.total - itms.first;
				}
				if (is_function(fn))
				{
					fn.call($tt0, val);
				}
				return val;
			});


			//	currentPage event
			$cfs.bind(cf_e('currentPage', conf), function(e, fn) {
				e.stopPropagation();
				var ipp = opts.pagination.items || opts.items.visible,
					max = Math.ceil(itms.total/ipp-1),
					nr;
				if (itms.first == 0)
				{
					nr = 0;
				}
				else if (itms.first < itms.total % ipp)
				{
					nr = 0;
				}
				else if (itms.first == ipp && !opts.circular)
				{
					nr = max;
				}
				else 
				{
					 nr = Math.round((itms.total-itms.first)/ipp);
				}
				if (nr < 0)
				{
					nr = 0;
				}
				if (nr > max)
				{
					nr = max;
				}
				if (is_function(fn))
				{
					fn.call($tt0, nr);
				}
				return nr;
			});


			//	currentVisible event
			$cfs.bind(cf_e('currentVisible', conf), function(e, fn) {
				e.stopPropagation();
				var $i = gi_getCurrentItems($cfs.children(), opts);
				if (is_function(fn))
				{
					fn.call($tt0, $i);
				}
				return $i;
			});


			//	slice event
			$cfs.bind(cf_e('slice', conf), function(e, f, l, fn) {
				e.stopPropagation();

				if (itms.total == 0)
				{
					return false;
				}

				var v = [f, l, fn],
					t = ['number', 'number', 'function'],
					a = cf_sortParams(v, t);

				f = (is_number(a[0])) ? a[0] : 0;
				l = (is_number(a[1])) ? a[1] : itms.total;
				fn = a[2];

				f += itms.first;
				l += itms.first;

				if (items.total > 0)
				{
					while (f > itms.total)
					{
						f -= itms.total;
					}
					while (l > itms.total)
					{
						l -= itms.total;
					}
					while (f < 0)
					{
						f += itms.total;
					}
					while (l < 0)
					{
						l += itms.total;
					}
				}
				var $iA = $cfs.children(),
					$i;

				if (l > f)
				{
					$i = $iA.slice(f, l);
				}
				else
				{
					$i = $( $iA.slice(f, itms.total).get().concat( $iA.slice(0, l).get() ) );
				}

				if (is_function(fn))
				{
					fn.call($tt0, $i);
				}
				return $i;
			});


			//	isPaused, isStopped and isScrolling events
			$cfs.bind(cf_e('isPaused', conf)+' '+cf_e('isStopped', conf)+' '+cf_e('isScrolling', conf), function(e, fn) {
				e.stopPropagation();
				var eType = e.type.slice(conf.events.prefix.length),
					value = crsl[eType];
				if (is_function(fn))
				{
					fn.call($tt0, value);
				}
				return value;
			});


			//	configuration event
			$cfs.bind(cf_e('configuration', conf), function(e, a, b, c) {
				e.stopPropagation();
				var reInit = false;

				//	return entire configuration-object
				if (is_function(a))
				{
					a.call($tt0, opts);
				}
				//	set multiple options via object
				else if (is_object(a))
				{
					opts_orig = $.extend(true, {}, opts_orig, a);
					if (b !== false) reInit = true;
					else opts = $.extend(true, {}, opts, a);

				}
				else if (!is_undefined(a))
				{

					//	callback function for specific option
					if (is_function(b))
					{
						var val = eval('opts.'+a);
						if (is_undefined(val))
						{
							val = '';
						}
						b.call($tt0, val);
					}
					//	set individual option
					else if (!is_undefined(b))
					{
						if (typeof c !== 'boolean') c = true;
						eval('opts_orig.'+a+' = b');
						if (c !== false) reInit = true;
						else eval('opts.'+a+' = b');
					}
					//	return value for specific option
					else
					{
						return eval('opts.'+a);
					}
				}
				if (reInit)
				{
					sz_resetMargin($cfs.children(), opts);
					FN._cfs_init(opts_orig);
					FN._cfs_bind_buttons();
					var sz = sz_setSizes($cfs, opts);
					$cfs.trigger(cf_e('updatePageStatus', conf), [true, sz]);
				}
				return opts;
			});


			//	linkAnchors event
			$cfs.bind(cf_e('linkAnchors', conf), function(e, $con, sel) {
				e.stopPropagation();

				if (is_undefined($con))
				{
					$con = $('body');
				}
				else if (is_string($con))
				{
					$con = $($con);
				}
				if (!is_jquery($con) || $con.length == 0)
				{
					return debug(conf, 'Not a valid object.');
				}
				if (!is_string(sel))
				{
					sel = 'a.caroufredsel';
				}

				$con.find(sel).each(function() {
					var h = this.hash || '';
					if (h.length > 0 && $cfs.children().index($(h)) != -1)
					{
						$(this).unbind('click').click(function(e) {
							e.preventDefault();
							$cfs.trigger(cf_e('slideTo', conf), h);
						});
					}
				});
				return true;
			});


			//	updatePageStatus event
			$cfs.bind(cf_e('updatePageStatus', conf), function(e, build, sizes) {
				e.stopPropagation();
				if (!opts.pagination.container)
				{
					return;
				}

				var ipp = opts.pagination.items || opts.items.visible,
					pgs = Math.ceil(itms.total/ipp);

				if (build)
				{
					if (opts.pagination.anchorBuilder)
					{
						opts.pagination.container.children().remove();
						opts.pagination.container.each(function() {
							for (var a = 0; a < pgs; a++)
							{
								var i = $cfs.children().eq( gn_getItemIndex(a*ipp, 0, true, itms, $cfs) );
								$(this).append(opts.pagination.anchorBuilder.call(i[0], a+1));
							}
						});
					}
					opts.pagination.container.each(function() {
						$(this).children().unbind(opts.pagination.event).each(function(a) {
							$(this).bind(opts.pagination.event, function(e) {
								e.preventDefault();
								$cfs.trigger(cf_e('slideTo', conf), [a*ipp, -opts.pagination.deviation, true, opts.pagination]);
							});
						});
					});
				}

				var selected = $cfs.triggerHandler(cf_e('currentPage', conf)) + opts.pagination.deviation;
				if (selected >= pgs)
				{
					selected = 0;
				}
				if (selected < 0)
				{
					selected = pgs-1;
				}
				opts.pagination.container.each(function() {
					$(this).children().removeClass(cf_c('selected', conf)).eq(selected).addClass(cf_c('selected', conf));
				});
				return true;
			});


			//	updateSizes event
			$cfs.bind(cf_e('updateSizes', conf), function(e) {
				var vI = opts.items.visible,
					a_itm = $cfs.children(),
					avail_primary = ms_getParentSize($wrp, opts, 'width');

				itms.total = a_itm.length;

				if (crsl.primarySizePercentage)
				{
					opts.maxDimension = avail_primary;
					opts[opts.d['width']] = ms_getPercentage(avail_primary, crsl.primarySizePercentage);
				}
				else
				{
					opts.maxDimension = ms_getMaxDimension(opts, avail_primary);
				}

				if (opts.responsive)
				{
					opts.items.width = opts.items.sizesConf.width;
					opts.items.height = opts.items.sizesConf.height;
					opts = in_getResponsiveValues(opts, a_itm, avail_primary);
					vI = opts.items.visible;
					sz_setResponsiveSizes(opts, a_itm);
				}
				else if (opts.items.visibleConf.variable)
				{
					vI = gn_getVisibleItemsNext(a_itm, opts, 0);
				}
				else if (opts.items.filter != '*')
				{
					vI = gn_getVisibleItemsNextFilter(a_itm, opts, 0);
				}

				if (!opts.circular && itms.first != 0 && vI > itms.first) {
					if (opts.items.visibleConf.variable)
					{
						var nI = gn_getVisibleItemsPrev(a_itm, opts, itms.first) - itms.first;
					}
					else if (opts.items.filter != '*')
					{
						var nI = gn_getVisibleItemsPrevFilter(a_itm, opts, itms.first) - itms.first;
					}
					else
					{
						var nI = opts.items.visible - itms.first;
					}
					debug(conf, 'Preventing non-circular: sliding '+nI+' items backward.');
					$cfs.trigger(cf_e('prev', conf), nI);
				}

				opts.items.visible = cf_getItemsAdjust(vI, opts, opts.items.visibleConf.adjust, $tt0);
				opts.items.visibleConf.old = opts.items.visible;
				opts = in_getAlignPadding(opts, a_itm);

				var sz = sz_setSizes($cfs, opts);
				$cfs.trigger(cf_e('updatePageStatus', conf), [true, sz]);
				nv_showNavi(opts, itms.total, conf);
				nv_enableNavi(opts, itms.first, conf);

				return sz;
			});


			//	destroy event
			$cfs.bind(cf_e('destroy', conf), function(e, orgOrder) {
				e.stopPropagation();
				tmrs = sc_clearTimers(tmrs);

				$cfs.data('_cfs_isCarousel', false);
				$cfs.trigger(cf_e('finish', conf));
				if (orgOrder)
				{
					$cfs.trigger(cf_e('jumpToStart', conf));
				}
				sz_restoreOrigCss($cfs.children());
				sz_restoreOrigCss($cfs);
				FN._cfs_unbind_events();
				FN._cfs_unbind_buttons();
				if (conf.wrapper == 'parent')
				{
					sz_restoreOrigCss($wrp);
				}
				else
				{
					$wrp.replaceWith($cfs);
				}

				return true;
			});


			//	debug event
			$cfs.bind(cf_e('debug', conf), function(e) {
				debug(conf, 'Carousel width: ' + opts.width);
				debug(conf, 'Carousel height: ' + opts.height);
				debug(conf, 'Item widths: ' + opts.items.width);
				debug(conf, 'Item heights: ' + opts.items.height);
				debug(conf, 'Number of items visible: ' + opts.items.visible);
				if (opts.auto.play)
				{
					debug(conf, 'Number of items scrolled automatically: ' + opts.auto.items);
				}
				if (opts.prev.button)
				{
					debug(conf, 'Number of items scrolled backward: ' + opts.prev.items);
				}
				if (opts.next.button)
				{
					debug(conf, 'Number of items scrolled forward: ' + opts.next.items);
				}
				return conf.debug;
			});


			//	triggerEvent, making prefixed and namespaced events accessible from outside
			$cfs.bind('_cfs_triggerEvent', function(e, n, o) {
				e.stopPropagation();
				return $cfs.triggerHandler(cf_e(n, conf), o);
			});
		};	//	/bind_events


		FN._cfs_unbind_events = function() {
			$cfs.unbind(cf_e('', conf));
			$cfs.unbind(cf_e('', conf, false));
			$cfs.unbind('_cfs_triggerEvent');
		};	//	/unbind_events


		FN._cfs_bind_buttons = function() {
			FN._cfs_unbind_buttons();
			nv_showNavi(opts, itms.total, conf);
			nv_enableNavi(opts, itms.first, conf);

			if (opts.auto.pauseOnHover)
			{
				var pC = bt_pauseOnHoverConfig(opts.auto.pauseOnHover);
				$wrp.bind(cf_e('mouseenter', conf, false), function() { $cfs.trigger(cf_e('pause', conf), pC);	})
					.bind(cf_e('mouseleave', conf, false), function() { $cfs.trigger(cf_e('resume', conf));		});
			}

			//	play button
			if (opts.auto.button)
			{
				opts.auto.button.bind(cf_e(opts.auto.event, conf, false), function(e) {
					e.preventDefault();
					var ev = false,
						pC = null;

					if (crsl.isPaused)
					{
						ev = 'play';
					}
					else if (opts.auto.pauseOnEvent)
					{
						ev = 'pause';
						pC = bt_pauseOnHoverConfig(opts.auto.pauseOnEvent);
					}
					if (ev)
					{
						$cfs.trigger(cf_e(ev, conf), pC);
					}
				});
			}

			//	prev button
			if (opts.prev.button)
			{
				opts.prev.button.bind(cf_e(opts.prev.event, conf, false), function(e) {
					e.preventDefault();
					$cfs.trigger(cf_e('prev', conf));
				});
				if (opts.prev.pauseOnHover)
				{
					var pC = bt_pauseOnHoverConfig(opts.prev.pauseOnHover);
					opts.prev.button.bind(cf_e('mouseenter', conf, false), function() { $cfs.trigger(cf_e('pause', conf), pC);	})
									.bind(cf_e('mouseleave', conf, false), function() { $cfs.trigger(cf_e('resume', conf));		});
				}
			}

			//	next butotn
			if (opts.next.button)
			{
				opts.next.button.bind(cf_e(opts.next.event, conf, false), function(e) {
					e.preventDefault();
					$cfs.trigger(cf_e('next', conf));
				});
				if (opts.next.pauseOnHover)
				{
					var pC = bt_pauseOnHoverConfig(opts.next.pauseOnHover);
					opts.next.button.bind(cf_e('mouseenter', conf, false), function() { $cfs.trigger(cf_e('pause', conf), pC); 	})
									.bind(cf_e('mouseleave', conf, false), function() { $cfs.trigger(cf_e('resume', conf));		});
				}
			}

			//	pagination
			if (opts.pagination.container)
			{
				if (opts.pagination.pauseOnHover)
				{
					var pC = bt_pauseOnHoverConfig(opts.pagination.pauseOnHover);
					opts.pagination.container.bind(cf_e('mouseenter', conf, false), function() { $cfs.trigger(cf_e('pause', conf), pC);	})
											 .bind(cf_e('mouseleave', conf, false), function() { $cfs.trigger(cf_e('resume', conf));	});
				}
			}

			//	prev/next keys
			if (opts.prev.key || opts.next.key)
			{
				$(document).bind(cf_e('keyup', conf, false, true, true), function(e) {
					var k = e.keyCode;
					if (k == opts.next.key)
					{
						e.preventDefault();
						$cfs.trigger(cf_e('next', conf));
					}
					if (k == opts.prev.key)
					{
						e.preventDefault();
						$cfs.trigger(cf_e('prev', conf));
					}
				});
			}

			//	pagination keys
			if (opts.pagination.keys)
			{
				$(document).bind(cf_e('keyup', conf, false, true, true), function(e) {
					var k = e.keyCode;
					if (k >= 49 && k < 58)
					{
						k = (k-49) * opts.items.visible;
						if (k <= itms.total)
						{
							e.preventDefault();
							$cfs.trigger(cf_e('slideTo', conf), [k, 0, true, opts.pagination]);
						}
					}
				});
			}

			//	swipe
			if ($.fn.swipe)
			{
				var isTouch = 'ontouchstart' in window;
				if ((isTouch && opts.swipe.onTouch) || (!isTouch && opts.swipe.onMouse))
				{
					var scP = $.extend(true, {}, opts.prev, opts.swipe),
						scN = $.extend(true, {}, opts.next, opts.swipe),
						swP = function() { $cfs.trigger(cf_e('prev', conf), [scP]) },
						swN = function() { $cfs.trigger(cf_e('next', conf), [scN]) };

					switch (opts.direction)
					{
						case 'up':
						case 'down':
							opts.swipe.options.swipeUp = swN;
							opts.swipe.options.swipeDown = swP;
							break;
						default:
							opts.swipe.options.swipeLeft = swN;
							opts.swipe.options.swipeRight = swP;
					}
					if (crsl.swipe)
					{
						$cfs.swipe('destroy');
					}
					$wrp.swipe(opts.swipe.options);
					$wrp.css('cursor', 'move');
					crsl.swipe = true;
				}
			}

			//	mousewheel
			if ($.fn.mousewheel)
			{

				if (opts.mousewheel)
				{
					var mcP = $.extend(true, {}, opts.prev, opts.mousewheel),
						mcN = $.extend(true, {}, opts.next, opts.mousewheel);

					if (crsl.mousewheel)
					{
						$wrp.unbind(cf_e('mousewheel', conf, false));
					}
					$wrp.bind(cf_e('mousewheel', conf, false), function(e, delta) { 
						e.preventDefault();
						if (delta > 0)
						{
							$cfs.trigger(cf_e('prev', conf), [mcP]);
						}
						else
						{
							$cfs.trigger(cf_e('next', conf), [mcN]);
						}
					});
					crsl.mousewheel = true;
				}
			}

			if (opts.auto.play)
			{
				$cfs.trigger(cf_e('play', conf), opts.auto.delay);
			}

			if (crsl.upDateOnWindowResize)
			{
				var resizeFn = function(e) {
					$cfs.trigger(cf_e('finish', conf));
					if (opts.auto.pauseOnResize && !crsl.isPaused)
					{
						$cfs.trigger(cf_e('play', conf));
					}
					sz_resetMargin($cfs.children(), opts);
					$cfs.trigger(cf_e('updateSizes', conf));
				};

				var $w = $(window),
					onResize = null;

				if ($.debounce && conf.onWindowResize == 'debounce')
				{
					onResize = $.debounce(200, resizeFn);
				}
				else if ($.throttle && conf.onWindowResize == 'throttle')
				{
					onResize = $.throttle(300, resizeFn);
				}
				else
				{
					var _windowWidth = 0,
						_windowHeight = 0;

					onResize = function() {
						var nw = $w.width(),
							nh = $w.height();

						if (nw != _windowWidth || nh != _windowHeight)
						{
							resizeFn();
							_windowWidth = nw;
							_windowHeight = nh;
						}
					};
				}
				$w.bind(cf_e('resize', conf, false, true, true), onResize);
			}
		};	//	/bind_buttons


		FN._cfs_unbind_buttons = function() {
			var ns1 = cf_e('', conf),
				ns2 = cf_e('', conf, false);
				ns3 = cf_e('', conf, false, true, true);

			$(document).unbind(ns3);
			$(window).unbind(ns3);
			$wrp.unbind(ns2);

			if (opts.auto.button)
			{
				opts.auto.button.unbind(ns2);
			}
			if (opts.prev.button)
			{
				opts.prev.button.unbind(ns2);
			}
			if (opts.next.button)
			{
				opts.next.button.unbind(ns2);
			}
			if (opts.pagination.container)
			{
				opts.pagination.container.unbind(ns2);
				if (opts.pagination.anchorBuilder)
				{
					opts.pagination.container.children().remove();
				}
			}
			if (crsl.swipe)
			{
				$cfs.swipe('destroy');
				$wrp.css('cursor', 'default');
				crsl.swipe = false;
			}
			if (crsl.mousewheel)
			{
				crsl.mousewheel = false;
			}

			nv_showNavi(opts, 'hide', conf);
			nv_enableNavi(opts, 'removeClass', conf);

		};	//	/unbind_buttons



		//	START

		if (is_boolean(configs))
		{
			configs = {
				'debug': configs
			};
		}

		//	set vars
		var crsl = {
				'direction'		: 'next',
				'isPaused'		: true,
				'isScrolling'	: false,
				'isStopped'		: false,
				'mousewheel'	: false,
				'swipe'			: false
			},
			itms = {
				'total'			: $cfs.children().length,
				'first'			: 0
			},
			tmrs = {
				'auto'			: null,
				'progress'		: null,
				'startTime'		: getTime(),
				'timePassed'	: 0
			},
			scrl = {
				'isStopped'		: false,
				'duration'		: 0,
				'startTime'		: 0,
				'easing'		: '',
				'anims'			: []
			},
			clbk = {
				'onBefore'		: [],
				'onAfter'		: []
			},
			queu = [],
			conf = $.extend(true, {}, $.fn.carouFredSel.configs, configs),
			opts = {},
			opts_orig = $.extend(true, {}, options),
			$wrp = (conf.wrapper == 'parent')
				? $cfs.parent()
				: $cfs.wrap('<'+conf.wrapper.element+' class="'+conf.wrapper.classname+'" />').parent();


		conf.selector		= $cfs.selector;
		conf.serialNumber	= $.fn.carouFredSel.serialNumber++;

		conf.transition = (conf.transition && $.fn.transition) ? 'transition' : 'animate';

		//	create carousel
		FN._cfs_init(opts_orig, true, starting_position);
		FN._cfs_build();
		FN._cfs_bind_events();
		FN._cfs_bind_buttons();

		//	find item to start
		if (is_array(opts.items.start))
		{
			var start_arr = opts.items.start;
		}
		else
		{
			var start_arr = [];
			if (opts.items.start != 0)
			{
				start_arr.push(opts.items.start);
			}
		}
		if (opts.cookie)
		{
			start_arr.unshift(parseInt(cf_getCookie(opts.cookie), 10));
		}

		if (start_arr.length > 0)
		{
			for (var a = 0, l = start_arr.length; a < l; a++)
			{
				var s = start_arr[a];
				if (s == 0)
				{
					continue;
				}
				if (s === true)
				{
					s = window.location.hash;
					if (s.length < 1)
					{
						continue;
					}
				}
				else if (s === 'random')
				{
					s = Math.floor(Math.random()*itms.total);
				}
				if ($cfs.triggerHandler(cf_e('slideTo', conf), [s, 0, true, { fx: 'none' }]))
				{
					break;
				}
			}
		}
		var siz = sz_setSizes($cfs, opts),
			itm = gi_getCurrentItems($cfs.children(), opts);

		if (opts.onCreate)
		{
			opts.onCreate.call($tt0, {
				'width': siz.width,
				'height': siz.height,
				'items': itm
			});
		}

		$cfs.trigger(cf_e('updatePageStatus', conf), [true, siz]);
		$cfs.trigger(cf_e('linkAnchors', conf));

		if (conf.debug)
		{
			$cfs.trigger(cf_e('debug', conf));
		}

		return $cfs;
	};



	//	GLOBAL PUBLIC

	$.fn.carouFredSel.serialNumber = 1;
	$.fn.carouFredSel.defaults = {
		'synchronise'	: false,
		'infinite'		: true,
		'circular'		: true,
		'responsive'	: false,
		'direction'		: 'left',
		'items'			: {
			'start'			: 0
		},
		'scroll'		: {
			'easing'		: 'swing',
			'duration'		: 500,
			'pauseOnHover'	: false,
			'event'			: 'click',
			'queue'			: false
		}
	};
	$.fn.carouFredSel.configs = {
		'debug'			: false,
		'transition'	: false,
		'onWindowResize': 'throttle',
		'events'		: {
			'prefix'		: '',
			'namespace'		: 'cfs'
		},
		'wrapper'		: {
			'element'		: 'div',
			'classname'		: 'caroufredsel_wrapper'
		},
		'classnames'	: {}
	};
	$.fn.carouFredSel.pageAnchorBuilder = function(nr) {
		return '<a href="#"><span>'+nr+'</span></a>';
	};
	$.fn.carouFredSel.progressbarUpdater = function(perc) {
		$(this).css('width', perc+'%');
	};

	$.fn.carouFredSel.cookie = {
		get: function(n) {
			n += '=';
			var ca = document.cookie.split(';');
			for (var a = 0, l = ca.length; a < l; a++)
			{
				var c = ca[a];
				while (c.charAt(0) == ' ')
				{
					c = c.slice(1);
				}
				if (c.indexOf(n) == 0)
				{
					return c.slice(n.length);
				}
			}
			return 0;
		},
		set: function(n, v, d) {
			var e = "";
			if (d)
			{
				var date = new Date();
				date.setTime(date.getTime() + (d * 24 * 60 * 60 * 1000));
				e = "; expires=" + date.toGMTString();
			}
			document.cookie = n + '=' + v + e + '; path=/';
		},
		remove: function(n) {
			$.fn.carouFredSel.cookie.set(n, "", -1);
		}
	};


	//	GLOBAL PRIVATE

	//	scrolling functions
	function sc_setScroll(d, e, c) {
		if (c.transition == 'transition')
		{
			if (e == 'swing')
			{
				e = 'ease';
			}
		}
		return {
			anims: [],
			duration: d,
			orgDuration: d,
			easing: e,
			startTime: getTime()
		};
	}
	function sc_startScroll(s, c) {
		for (var a = 0, l = s.anims.length; a < l; a++)
		{
			var b = s.anims[a];
			if (!b)
			{
				continue;
			}
			b[0][c.transition](b[1], s.duration, s.easing, b[2]);
		}
	}
	function sc_stopScroll(s, finish) {
		if (!is_boolean(finish))
		{
			finish = true;
		}
		if (is_object(s.pre))
		{
			sc_stopScroll(s.pre, finish);
		}
		for (var a = 0, l = s.anims.length; a < l; a++)
		{
			var b = s.anims[a];
			b[0].stop(true);
			if (finish)
			{
				b[0].css(b[1]);
				if (is_function(b[2]))
				{
					b[2]();
				}
			}
		}
		if (is_object(s.post))
		{
			sc_stopScroll(s.post, finish);
		}
	}
	function sc_afterScroll( $c, $c2, o ) {
		if ($c2)
		{
			$c2.remove();
		}

		switch(o.fx) {
			case 'fade':
			case 'crossfade':
			case 'cover-fade':
			case 'uncover-fade':
				$c.css('filter', '');
				$c.css('opacity', 1);
				break;
		}
	}
	function sc_fireCallbacks($t, o, b, a, c) {
		if (o[b])
		{
			o[b].call($t, a);
		}
		if (c[b].length)
		{
			for (var i = 0, l = c[b].length; i < l; i++)
			{
				c[b][i].call($t, a);
			}
		}
		return [];
	}
	function sc_fireQueue($c, q, c) {

		if (q.length)
		{
			$c.trigger(cf_e(q[0][0], c), q[0][1]);
			q.shift();
		}
		return q;
	}
	function sc_hideHiddenItems(hiddenitems) {
		hiddenitems.each(function() {
			var hi = $(this);
			hi.data('_cfs_isHidden', hi.is(':hidden')).hide();
		});
	}
	function sc_showHiddenItems(hiddenitems) {
		if (hiddenitems)
		{
			hiddenitems.each(function() {
				var hi = $(this);
				if (!hi.data('_cfs_isHidden'))
				{
					hi.show();
				}
			});
		}
	}
	function sc_clearTimers(t) {
		if (t.auto)
		{
			clearTimeout(t.auto);
		}
		if (t.progress)
		{
			clearInterval(t.progress);
		}
		return t;
	}
	function sc_mapCallbackArguments(i_old, i_skp, i_new, s_itm, s_dir, s_dur, w_siz) {
		return {
			'width': w_siz.width,
			'height': w_siz.height,
			'items': {
				'old': i_old,
				'skipped': i_skp,
				'visible': i_new
			},
			'scroll': {
				'items': s_itm,
				'direction': s_dir,
				'duration': s_dur
			}
		};
	}
	function sc_getDuration( sO, o, nI, siz ) {
		var dur = sO.duration;
		if (sO.fx == 'none')
		{
			return 0;
		}
		if (dur == 'auto')
		{
			dur = o.scroll.duration / o.scroll.items * nI;
		}
		else if (dur < 10)
		{
			dur = siz / dur;
		}
		if (dur < 1)
		{
			return 0;
		}
		if (sO.fx == 'fade')
		{
			dur = dur / 2;
		}
		return Math.round(dur);
	}

	//	navigation functions
	function nv_showNavi(o, t, c) {
		var minimum = (is_number(o.items.minimum)) ? o.items.minimum : o.items.visible + 1;
		if (t == 'show' || t == 'hide')
		{
			var f = t;
		}
		else if (minimum > t)
		{
			debug(c, 'Not enough items ('+t+' total, '+minimum+' needed): Hiding navigation.');
			var f = 'hide';
		}
		else
		{
			var f = 'show';
		}
		var s = (f == 'show') ? 'removeClass' : 'addClass',
			h = cf_c('hidden', c);

		if (o.auto.button)
		{
			o.auto.button[f]()[s](h);
		}
		if (o.prev.button)
		{
			o.prev.button[f]()[s](h);
		}
		if (o.next.button)
		{
			o.next.button[f]()[s](h);
		}
		if (o.pagination.container)
		{
			o.pagination.container[f]()[s](h);
		}
	}
	function nv_enableNavi(o, f, c) {
		if (o.circular || o.infinite) return;
		var fx = (f == 'removeClass' || f == 'addClass') ? f : false,
			di = cf_c('disabled', c);

		if (o.auto.button && fx)
		{
			o.auto.button[fx](di);
		}
		if (o.prev.button)
		{
			var fn = fx || (f == 0) ? 'addClass' : 'removeClass';
			o.prev.button[fn](di);
		}
		if (o.next.button)
		{
			var fn = fx || (f == o.items.visible) ? 'addClass' : 'removeClass';
			o.next.button[fn](di);
		}
	}

	//	get object functions
	function go_getObject($tt, obj) {
		if (is_function(obj))
		{
			obj = obj.call($tt);
		}
		else if (is_undefined(obj))
		{
			obj = {};
		}
		return obj;
	}
	function go_getItemsObject($tt, obj) {
		obj = go_getObject($tt, obj);
		if (is_number(obj))
		{
			obj	= {
				'visible': obj
			};
		}
		else if (obj == 'variable')
		{
			obj = {
				'visible': obj,
				'width': obj, 
				'height': obj
			};
		}
		else if (!is_object(obj))
		{
			obj = {};
		}
		return obj;
	}
	function go_getScrollObject($tt, obj) {
		obj = go_getObject($tt, obj);
		if (is_number(obj))
		{
			if (obj <= 50)
			{
				obj = {
					'items': obj
				};
			}
			else
			{
				obj = {
					'duration': obj
				};
			}
		}
		else if (is_string(obj))
		{
			obj = {
				'easing': obj
			};
		}
		else if (!is_object(obj))
		{
			obj = {};
		}
		return obj;
	}
	function go_getNaviObject($tt, obj) {
		obj = go_getObject($tt, obj);
		if (is_string(obj))
		{
			var temp = cf_getKeyCode(obj);
			if (temp == -1)
			{
				obj = $(obj);
			}
			else
			{
				obj = temp;
			}
		}
		return obj;
	}

	function go_getAutoObject($tt, obj) {
		obj = go_getNaviObject($tt, obj);
		if (is_jquery(obj))
		{
			obj = {
				'button': obj
			};
		}
		else if (is_boolean(obj))
		{
			obj = {
				'play': obj
			};
		}
		else if (is_number(obj))
		{
			obj = {
				'timeoutDuration': obj
			};
		}
		if (obj.progress)
		{
			if (is_string(obj.progress) || is_jquery(obj.progress))
			{
				obj.progress = {
					'bar': obj.progress
				};
			}
		}
		return obj;
	}
	function go_complementAutoObject($tt, obj) {
		if (is_function(obj.button))
		{
			obj.button = obj.button.call($tt);
		}
		if (is_string(obj.button))
		{
			obj.button = $(obj.button);
		}
		if (!is_boolean(obj.play))
		{
			obj.play = true;
		}
		if (!is_number(obj.delay))
		{
			obj.delay = 0;
		}
		if (is_undefined(obj.pauseOnEvent))
		{
			obj.pauseOnEvent = true;
		}
		if (!is_boolean(obj.pauseOnResize))
		{
			obj.pauseOnResize = true;
		}
		if (!is_number(obj.timeoutDuration))
		{
			obj.timeoutDuration = (obj.duration < 10)
				? 2500
				: obj.duration * 5;
		}
		if (obj.progress)
		{
			if (is_function(obj.progress.bar))
			{
				obj.progress.bar = obj.progress.bar.call($tt);
			}
			if (is_string(obj.progress.bar))
			{
				obj.progress.bar = $(obj.progress.bar);
			}
			if (obj.progress.bar)
			{
				if (!is_function(obj.progress.updater))
				{
					obj.progress.updater = $.fn.carouFredSel.progressbarUpdater;
				}
				if (!is_number(obj.progress.interval))
				{
					obj.progress.interval = 50;
				}
			}
			else
			{
				obj.progress = false;
			}
		}
		return obj;
	}

	function go_getPrevNextObject($tt, obj) {
		obj = go_getNaviObject($tt, obj);
		if (is_jquery(obj))
		{
			obj = {
				'button': obj
			};
		}
		else if (is_number(obj))
		{
			obj = {
				'key': obj
			};
		}
		return obj;
	}
	function go_complementPrevNextObject($tt, obj) {
		if (is_function(obj.button))
		{
			obj.button = obj.button.call($tt);
		}
		if (is_string(obj.button))
		{
			obj.button = $(obj.button);
		}
		if (is_string(obj.key))
		{
			obj.key = cf_getKeyCode(obj.key);
		}
		return obj;
	}

	function go_getPaginationObject($tt, obj) {
		obj = go_getNaviObject($tt, obj);
		if (is_jquery(obj))
		{
			obj = {
				'container': obj
			};
		}
		else if (is_boolean(obj))
		{
			obj = {
				'keys': obj
			};
		}
		return obj;
	}
	function go_complementPaginationObject($tt, obj) {
		if (is_function(obj.container))
		{
			obj.container = obj.container.call($tt);
		}
		if (is_string(obj.container))
		{
			obj.container = $(obj.container);
		}
		if (!is_number(obj.items))
		{
			obj.items = false;
		}
		if (!is_boolean(obj.keys))
		{
			obj.keys = false;
		}
		if (!is_function(obj.anchorBuilder) && !is_false(obj.anchorBuilder))
		{
			obj.anchorBuilder = $.fn.carouFredSel.pageAnchorBuilder;
		}
		if (!is_number(obj.deviation))
		{
			obj.deviation = 0;
		}
		return obj;
	}

	function go_getSwipeObject($tt, obj) {
		if (is_function(obj))
		{
			obj = obj.call($tt);
		}
		if (is_undefined(obj))
		{
			obj = {
				'onTouch': false
			};
		}
		if (is_true(obj))
		{
			obj = {
				'onTouch': obj
			};
		}
		else if (is_number(obj))
		{
			obj = {
				'items': obj
			};
		}
		return obj;
	}
	function go_complementSwipeObject($tt, obj) {
		if (!is_boolean(obj.onTouch))
		{
			obj.onTouch = true;
		}
		if (!is_boolean(obj.onMouse))
		{
			obj.onMouse = false;
		}
		if (!is_object(obj.options))
		{
			obj.options = {};
		}
		if (!is_boolean(obj.options.triggerOnTouchEnd))
		{
			obj.options.triggerOnTouchEnd = false;
		}
		return obj;
	}
	function go_getMousewheelObject($tt, obj) {
		if (is_function(obj))
		{
			obj = obj.call($tt);
		}
		if (is_true(obj))
		{
			obj = {};
		}
		else if (is_number(obj))
		{
			obj = {
				'items': obj
			};
		}
		else if (is_undefined(obj))
		{
			obj = false;
		}
		return obj;
	}
	function go_complementMousewheelObject($tt, obj) {
		return obj;
	}

	//	get number functions
	function gn_getItemIndex(num, dev, org, items, $cfs) {
		if (is_string(num))
		{
			num = $(num, $cfs);
		}

		if (is_object(num))
		{
			num = $(num, $cfs);
		}
		if (is_jquery(num))
		{
			num = $cfs.children().index(num);
			if (!is_boolean(org))
			{
				org = false;
			}
		}
		else
		{
			if (!is_boolean(org))
			{
				org = true;
			}
		}
		if (!is_number(num))
		{
			num = 0;
		}
		if (!is_number(dev))
		{
			dev = 0;
		}

		if (org)
		{
			num += items.first;
		}
		num += dev;
		if (items.total > 0)
		{
			while (num >= items.total)
			{
				num -= items.total;
			}
			while (num < 0)
			{
				num += items.total;
			}
		}
		return num;
	}

	//	items prev
	function gn_getVisibleItemsPrev(i, o, s) {
		var t = 0,
			x = 0;

		for (var a = s; a >= 0; a--)
		{
			var j = i.eq(a);
			t += (j.is(':visible')) ? j[o.d['outerWidth']](true) : 0;
			if (t > o.maxDimension)
			{
				return x;
			}
			if (a == 0)
			{
				a = i.length;
			}
			x++;
		}
	}
	function gn_getVisibleItemsPrevFilter(i, o, s) {
		return gn_getItemsPrevFilter(i, o.items.filter, o.items.visibleConf.org, s);
	}
	function gn_getScrollItemsPrevFilter(i, o, s, m) {
		return gn_getItemsPrevFilter(i, o.items.filter, m, s);
	}
	function gn_getItemsPrevFilter(i, f, m, s) {
		var t = 0,
			x = 0;

		for (var a = s, l = i.length; a >= 0; a--)
		{
			x++;
			if (x == l)
			{
				return x;
			}

			var j = i.eq(a);
			if (j.is(f))
			{
				t++;
				if (t == m)
				{
					return x;
				}
			}
			if (a == 0)
			{
				a = l;
			}
		}
	}

	function gn_getVisibleOrg($c, o) {
		return o.items.visibleConf.org || $c.children().slice(0, o.items.visible).filter(o.items.filter).length;
	}

	//	items next
	function gn_getVisibleItemsNext(i, o, s) {
		var t = 0,
			x = 0;

		for (var a = s, l = i.length-1; a <= l; a++)
		{
			var j = i.eq(a);

			t += (j.is(':visible')) ? j[o.d['outerWidth']](true) : 0;
			if (t > o.maxDimension)
			{
				return x;
			}

			x++;
			if (x == l+1)
			{
				return x;
			}
			if (a == l)
			{
				a = -1;
			}
		}
	}
	function gn_getVisibleItemsNextTestCircular(i, o, s, l) {
		var v = gn_getVisibleItemsNext(i, o, s);
		if (!o.circular)
		{
			if (s + v > l)
			{
				v = l - s;
			}
		}
		return v;
	}
	function gn_getVisibleItemsNextFilter(i, o, s) {
		return gn_getItemsNextFilter(i, o.items.filter, o.items.visibleConf.org, s, o.circular);
	}
	function gn_getScrollItemsNextFilter(i, o, s, m) {
		return gn_getItemsNextFilter(i, o.items.filter, m+1, s, o.circular) - 1;
	}
	function gn_getItemsNextFilter(i, f, m, s, c) {
		var t = 0,
			x = 0;

		for (var a = s, l = i.length-1; a <= l; a++)
		{
			x++;
			if (x >= l)
			{
				return x;
			}

			var j = i.eq(a);
			if (j.is(f))
			{
				t++;
				if (t == m)
				{
					return x;
				}
			}
			if (a == l)
			{
				a = -1;
			}
		}
	}

	//	get items functions
	function gi_getCurrentItems(i, o) {
		return i.slice(0, o.items.visible);
	}
	function gi_getOldItemsPrev(i, o, n) {
		return i.slice(n, o.items.visibleConf.old+n);
	}
	function gi_getNewItemsPrev(i, o) {
		return i.slice(0, o.items.visible);
	}
	function gi_getOldItemsNext(i, o) {
		return i.slice(0, o.items.visibleConf.old);
	}
	function gi_getNewItemsNext(i, o, n) {
		return i.slice(n, o.items.visible+n);
	}

	//	sizes functions
	function sz_storeMargin(i, o, d) {
		if (o.usePadding)
		{
			if (!is_string(d))
			{
				d = '_cfs_origCssMargin';
			}
			i.each(function() {
				var j = $(this),
					m = parseInt(j.css(o.d['marginRight']), 10);
				if (!is_number(m)) 
				{
					m = 0;
				}
				j.data(d, m);
			});
		}
	}
	function sz_resetMargin(i, o, m) {
		if (o.usePadding)
		{
			var x = (is_boolean(m)) ? m : false;
			if (!is_number(m))
			{
				m = 0;
			}
			sz_storeMargin(i, o, '_cfs_tempCssMargin');
			i.each(function() {
				var j = $(this);
				j.css(o.d['marginRight'], ((x) ? j.data('_cfs_tempCssMargin') : m + j.data('_cfs_origCssMargin')));
			});
		}
	}
	function sz_storeOrigCss(i) {
		i.each(function() {
			var j = $(this);
			j.data('_cfs_origCss', j.attr('style') || '');
		});
	}
	function sz_restoreOrigCss(i) {
		i.each(function() {
			var j = $(this);
			j.attr('style', j.data('_cfs_origCss') || '');
		});
	}
	function sz_setResponsiveSizes(o, all) {
		var visb = o.items.visible,
			newS = o.items[o.d['width']],
			seco = o[o.d['height']],
			secp = is_percentage(seco);

		all.each(function() {
			var $t = $(this),
				nw = newS - ms_getPaddingBorderMargin($t, o, 'Width');

			$t[o.d['width']](nw);
			if (secp)
			{
				$t[o.d['height']](ms_getPercentage(nw, seco));
			}
		});
	}
	function sz_setSizes($c, o) {
		var $w = $c.parent(),
			$i = $c.children(),
			$v = gi_getCurrentItems($i, o),
			sz = cf_mapWrapperSizes(ms_getSizes($v, o, true), o, false);

		$w.css(sz);

		if (o.usePadding)
		{
			var p = o.padding,
				r = p[o.d[1]];

			if (o.align && r < 0)
			{
				r = 0;
			}
			var $l = $v.last();
			$l.css(o.d['marginRight'], $l.data('_cfs_origCssMargin') + r);
			$c.css(o.d['top'], p[o.d[0]]);
			$c.css(o.d['left'], p[o.d[3]]);
		}

		$c.css(o.d['width'], sz[o.d['width']]+(ms_getTotalSize($i, o, 'width')*2));
		$c.css(o.d['height'], ms_getLargestSize($i, o, 'height'));
		return sz;
	}

	//	measuring functions
	function ms_getSizes(i, o, wrapper) {
		return [ms_getTotalSize(i, o, 'width', wrapper), ms_getLargestSize(i, o, 'height', wrapper)];
	}
	function ms_getLargestSize(i, o, dim, wrapper) {
		if (!is_boolean(wrapper))
		{
			wrapper = false;
		}
		if (is_number(o[o.d[dim]]) && wrapper)
		{
			return o[o.d[dim]];
		}
		if (is_number(o.items[o.d[dim]]))
		{
			return o.items[o.d[dim]];
		}
		dim = (dim.toLowerCase().indexOf('width') > -1) ? 'outerWidth' : 'outerHeight';
		return ms_getTrueLargestSize(i, o, dim);
	}
	function ms_getTrueLargestSize(i, o, dim) {
		var s = 0;

		for (var a = 0, l = i.length; a < l; a++)
		{
			var j = i.eq(a);

			var m = (j.is(':visible')) ? j[o.d[dim]](true) : 0;
			if (s < m)
			{
				s = m;
			}
		}
		return s;
	}

	function ms_getTotalSize(i, o, dim, wrapper) {
		if (!is_boolean(wrapper))
		{
			wrapper = false;
		}
		if (is_number(o[o.d[dim]]) && wrapper)
		{
			return o[o.d[dim]];
		}
		if (is_number(o.items[o.d[dim]]))
		{
			return o.items[o.d[dim]] * i.length;
		}

		var d = (dim.toLowerCase().indexOf('width') > -1) ? 'outerWidth' : 'outerHeight',
			s = 0;

		for (var a = 0, l = i.length; a < l; a++)
		{
			var j = i.eq(a);
			s += (j.is(':visible')) ? j[o.d[d]](true) : 0;
		}
		return s;
	}
	function ms_getParentSize($w, o, d) {
		var isVisible = $w.is(':visible');
		if (isVisible)
		{
			$w.hide();
		}
		var s = $w.parent()[o.d[d]]();
		if (isVisible)
		{
			$w.show();
		}
		return s;
	}
	function ms_getMaxDimension(o, a) {
		return (is_number(o[o.d['width']])) ? o[o.d['width']] : a;
	}
	function ms_hasVariableSizes(i, o, dim) {
		var s = false,
			v = false;

		for (var a = 0, l = i.length; a < l; a++)
		{
			var j = i.eq(a);

			var c = (j.is(':visible')) ? j[o.d[dim]](true) : 0;
			if (s === false)
			{
				s = c;
			}
			else if (s != c)
			{
				v = true;
			}
			if (s == 0)
			{
				v = true;
			}
		}
		return v;
	}
	function ms_getPaddingBorderMargin(i, o, d) {
		return i[o.d['outer'+d]](true) - i[o.d[d.toLowerCase()]]();
	}
	function ms_getPercentage(s, o) {
		if (is_percentage(o))
		{
			o = parseInt( o.slice(0, -1), 10 );
			if (!is_number(o))
			{
				return s;
			}
			s *= o/100;
		}
		return s;
	}

	//	config functions
	function cf_e(n, c, pf, ns, rd) {
		if (!is_boolean(pf))
		{
			pf = true;
		}
		if (!is_boolean(ns))
		{
			ns = true;
		}
		if (!is_boolean(rd))
		{
			rd = false;
		}

		if (pf)
		{
			n = c.events.prefix + n;
		}
		if (ns)
		{
			n = n +'.'+ c.events.namespace;
		}
		if (ns && rd)
		{
			n += c.serialNumber;
		}

		return n;
	}
	function cf_c(n, c) {
		return (is_string(c.classnames[n])) ? c.classnames[n] : n;
	}
	function cf_mapWrapperSizes(ws, o, p) {
		if (!is_boolean(p))
		{
			p = true;
		}
		var pad = (o.usePadding && p) ? o.padding : [0, 0, 0, 0];
		var wra = {};

		wra[o.d['width']] = ws[0] + pad[1] + pad[3];
		wra[o.d['height']] = ws[1] + pad[0] + pad[2];

		return wra;
	}
	function cf_sortParams(vals, typs) {
		var arr = [];
		for (var a = 0, l1 = vals.length; a < l1; a++)
		{
			for (var b = 0, l2 = typs.length; b < l2; b++)
			{
				if (typs[b].indexOf(typeof vals[a]) > -1 && is_undefined(arr[b]))
				{
					arr[b] = vals[a];
					break;
				}
			}
		}
		return arr;
	}
	function cf_getPadding(p) {
		if (is_undefined(p))
		{
			return [0, 0, 0, 0];
		}
		if (is_number(p))
		{
			return [p, p, p, p];
		}
		if (is_string(p))
		{
			p = p.split('px').join('').split('em').join('').split(' ');
		}

		if (!is_array(p))
		{
			return [0, 0, 0, 0];
		}
		for (var i = 0; i < 4; i++)
		{
			p[i] = parseInt(p[i], 10);
		}
		switch (p.length)
		{
			case 0:
				return [0, 0, 0, 0];
			case 1:
				return [p[0], p[0], p[0], p[0]];
			case 2:
				return [p[0], p[1], p[0], p[1]];
			case 3:
				return [p[0], p[1], p[2], p[1]];
			default:
				return [p[0], p[1], p[2], p[3]];
		}
	}
	function cf_getAlignPadding(itm, o) {
		var x = (is_number(o[o.d['width']])) ? Math.ceil(o[o.d['width']] - ms_getTotalSize(itm, o, 'width')) : 0;
		switch (o.align)
		{
			case 'left': 
				return [0, x];
			case 'right':
				return [x, 0];
			case 'center':
			default:
				return [Math.ceil(x/2), Math.floor(x/2)];
		}
	}
	function cf_getDimensions(o) {
		var dm = [
				['width'	, 'innerWidth'	, 'outerWidth'	, 'height'	, 'innerHeight'	, 'outerHeight'	, 'left', 'top'	, 'marginRight'	, 0, 1, 2, 3],
				['height'	, 'innerHeight'	, 'outerHeight'	, 'width'	, 'innerWidth'	, 'outerWidth'	, 'top'	, 'left', 'marginBottom', 3, 2, 1, 0]
			];

		var dl = dm[0].length,
			dx = (o.direction == 'right' || o.direction == 'left') ? 0 : 1;

		var dimensions = {};
		for (var d = 0; d < dl; d++)
		{
			dimensions[dm[0][d]] = dm[dx][d];
		}
		return dimensions;
	}
	function cf_getAdjust(x, o, a, $t) {
		var v = x;
		if (is_function(a))
		{
			v = a.call($t, v);

		}
		else if (is_string(a))
		{
			var p = a.split('+'),
				m = a.split('-');

			if (m.length > p.length)
			{
				var neg = true,
					sta = m[0],
					adj = m[1];
			}
			else
			{
				var neg = false,
					sta = p[0],
					adj = p[1];
			}

			switch(sta)
			{
				case 'even':
					v = (x % 2 == 1) ? x-1 : x;
					break;
				case 'odd':
					v = (x % 2 == 0) ? x-1 : x;
					break;
				default:
					v = x;
					break;
			}
			adj = parseInt(adj, 10);
			if (is_number(adj))
			{
				if (neg)
				{
					adj = -adj;
				}
				v += adj;
			}
		}
		if (!is_number(v) || v < 1)
		{
			v = 1;
		}
		return v;
	}
	function cf_getItemsAdjust(x, o, a, $t) {
		return cf_getItemAdjustMinMax(cf_getAdjust(x, o, a, $t), o.items.visibleConf);
	}
	function cf_getItemAdjustMinMax(v, i) {
		if (is_number(i.min) && v < i.min)
		{
			v = i.min;
		}
		if (is_number(i.max) && v > i.max)
		{
			v = i.max;
		}
		if (v < 1)
		{
			v = 1;
		}
		return v;
	}
	function cf_getSynchArr(s) {
		if (!is_array(s))
		{
			s = [[s]];
		}
		if (!is_array(s[0]))
		{
			s = [s];
		}
		for (var j = 0, l = s.length; j < l; j++)
		{
			if (is_string(s[j][0]))
			{
				s[j][0] = $(s[j][0]);
			}
			if (!is_boolean(s[j][1]))
			{
				s[j][1] = true;
			}
			if (!is_boolean(s[j][2]))
			{
				s[j][2] = true;
			}
			if (!is_number(s[j][3]))
			{
				s[j][3] = 0;
			}
		}
		return s;
	}
	function cf_getKeyCode(k) {
		if (k == 'right')
		{
			return 39;
		}
		if (k == 'left')
		{
			return 37;
		}
		if (k == 'up')
		{
			return 38;
		}
		if (k == 'down')
		{
			return 40;
		}
		return -1;
	}
	function cf_setCookie(n, $c, c) {
		if (n)
		{
			var v = $c.triggerHandler(cf_e('currentPosition', c));
			$.fn.carouFredSel.cookie.set(n, v);
		}
	}
	function cf_getCookie(n) {
		var c = $.fn.carouFredSel.cookie.get(n);
		return (c == '') ? 0 : c;
	}

	//	init function
	function in_mapCss($elem, props) {
		var css = {};
		for (var p = 0, l = props.length; p < l; p++)
		{
			css[props[p]] = $elem.css(props[p]);
		}
		return css;
	}
	function in_complementItems(obj, opt, itm, sta) {
		if (!is_object(obj.visibleConf))
		{
			obj.visibleConf = {};
		}
		if (!is_object(obj.sizesConf))
		{
			obj.sizesConf = {};
		}

		if (obj.start == 0 && is_number(sta))
		{
			obj.start = sta;
		}

		//	visible items
		if (is_object(obj.visible))
		{
			obj.visibleConf.min = obj.visible.min;
			obj.visibleConf.max = obj.visible.max;
			obj.visible = false;
		}
		else if (is_string(obj.visible))
		{
			//	variable visible items
			if (obj.visible == 'variable')
			{
				obj.visibleConf.variable = true;
			}
			//	adjust string visible items
			else
			{
				obj.visibleConf.adjust = obj.visible;
			}
			obj.visible = false;
		}
		else if (is_function(obj.visible))
		{
			obj.visibleConf.adjust = obj.visible;
			obj.visible = false;
		}

		//	set items filter
		if (!is_string(obj.filter))
		{
			obj.filter = (itm.filter(':hidden').length > 0) ? ':visible' : '*';
		}

		//	primary item-size not set
		if (!obj[opt.d['width']])
		{
			//	responsive carousel -> set to largest
			if (opt.responsive)
			{
				debug(true, 'Set a '+opt.d['width']+' for the items!');
				obj[opt.d['width']] = ms_getTrueLargestSize(itm, opt, 'outerWidth');
			}
			//	 non-responsive -> measure it or set to "variable"
			else
			{
				obj[opt.d['width']] = (ms_hasVariableSizes(itm, opt, 'outerWidth')) 
					? 'variable' 
					: itm[opt.d['outerWidth']](true);
			}
		}

		//	secondary item-size not set -> measure it or set to "variable"
		if (!obj[opt.d['height']])
		{
			obj[opt.d['height']] = (ms_hasVariableSizes(itm, opt, 'outerHeight')) 
				? 'variable' 
				: itm[opt.d['outerHeight']](true);
		}

		obj.sizesConf.width = obj.width;
		obj.sizesConf.height = obj.height;
		return obj;
	}
	function in_complementVisibleItems(opt, avl) {
		//	primary item-size variable -> set visible items variable
		if (opt.items[opt.d['width']] == 'variable')
		{
			opt.items.visibleConf.variable = true;
		}
		if (!opt.items.visibleConf.variable) {
			//	primary size is number -> calculate visible-items
			if (is_number(opt[opt.d['width']]))
			{
				opt.items.visible = Math.floor(opt[opt.d['width']] / opt.items[opt.d['width']]);
			}
			//	measure and calculate primary size and visible-items
			else
			{
				opt.items.visible = Math.floor(avl / opt.items[opt.d['width']]);
				opt[opt.d['width']] = opt.items.visible * opt.items[opt.d['width']];
				if (!opt.items.visibleConf.adjust)
				{
					opt.align = false;
				}
			}
			if (opt.items.visible == 'Infinity' || opt.items.visible < 1)
			{
				debug(true, 'Not a valid number of visible items: Set to "variable".');
				opt.items.visibleConf.variable = true;
			}
		}
		return opt;
	}
	function in_complementPrimarySize(obj, opt, all) {
		//	primary size set to auto -> measure largest item-size and set it
		if (obj == 'auto')
		{
			obj = ms_getTrueLargestSize(all, opt, 'outerWidth');
		}
		return obj;
	}
	function in_complementSecondarySize(obj, opt, all) {
		//	secondary size set to auto -> measure largest item-size and set it
		if (obj == 'auto')
		{
			obj = ms_getTrueLargestSize(all, opt, 'outerHeight');
		}
		//	secondary size not set -> set to secondary item-size
		if (!obj)
		{
			obj = opt.items[opt.d['height']];
		}
		return obj;
	}
	function in_getAlignPadding(o, all) {
		var p = cf_getAlignPadding(gi_getCurrentItems(all, o), o);
		o.padding[o.d[1]] = p[1];
		o.padding[o.d[3]] = p[0];
		return o;
	}
	function in_getResponsiveValues(o, all, avl) {

		var visb = cf_getItemAdjustMinMax(Math.ceil(o[o.d['width']] / o.items[o.d['width']]), o.items.visibleConf);
		if (visb > all.length)
		{
			visb = all.length;
		}

		var newS = Math.floor(o[o.d['width']]/visb);

		o.items.visible = visb;
		o.items[o.d['width']] = newS;
		o[o.d['width']] = visb * newS;
		return o;
	}


	//	buttons functions
	function bt_pauseOnHoverConfig(p) {
		if (is_string(p))
		{
			var i = (p.indexOf('immediate') > -1) ? true : false,
				r = (p.indexOf('resume') 	> -1) ? true : false;
		}
		else
		{
			var i = r = false;
		}
		return [i, r];
	}
	function bt_mousesheelNumber(mw) {
		return (is_number(mw)) ? mw : null
	}

	//	helper functions
	function is_null(a) {
		return (a === null);
	}
	function is_undefined(a) {
		return (is_null(a) || typeof a == 'undefined' || a === '' || a === 'undefined');
	}
	function is_array(a) {
		return (a instanceof Array);
	}
	function is_jquery(a) {
		return (a instanceof jQuery);
	}
	function is_object(a) {
		return ((a instanceof Object || typeof a == 'object') && !is_null(a) && !is_jquery(a) && !is_array(a));
	}
	function is_number(a) {
		return ((a instanceof Number || typeof a == 'number') && !isNaN(a));
	}
	function is_string(a) {
		return ((a instanceof String || typeof a == 'string') && !is_undefined(a) && !is_true(a) && !is_false(a));
	}
	function is_function(a) {
		return (a instanceof Function || typeof a == 'function');
	}
	function is_boolean(a) {
		return (a instanceof Boolean || typeof a == 'boolean' || is_true(a) || is_false(a));
	}
	function is_true(a) {
		return (a === true || a === 'true');
	}
	function is_false(a) {
		return (a === false || a === 'false');
	}
	function is_percentage(x) {
		return (is_string(x) && x.slice(-1) == '%');
	}


	function getTime() {
		return new Date().getTime();
	}

	function deprecated( o, n ) {
		debug(true, o+' is DEPRECATED, support for it will be removed. Use '+n+' instead.');
	}
	function debug(d, m) {
		if (!is_undefined(window.console) && !is_undefined(window.console.log))
		{
			if (is_object(d))
			{
				var s = ' ('+d.selector+')';
				d = d.debug;
			}
			else
			{
				var s = '';
			}
			if (!d)
			{
				return false;
			}
	
			if (is_string(m))
			{
				m = 'carouFredSel'+s+': ' + m;
			}
			else
			{
				m = ['carouFredSel'+s+':', m];
			}
			window.console.log(m);
		}
		return false;
	}



	//	EASING FUNCTIONS
	$.extend($.easing, {
		'quadratic': function(t) {
			var t2 = t * t;
			return t * (-t2 * t + 4 * t2 - 6 * t + 4);
		},
		'cubic': function(t) {
			return t * (4 * t * t - 9 * t + 6);
		},
		'elastic': function(t) {
			var t2 = t * t;
			return t * (33 * t2 * t2 - 106 * t2 * t + 126 * t2 - 67 * t + 15);
		}
	});


})(jQuery);
 /*
  Custom Jimdo design
  http://www.hembarevskyy.com
 */
 
 
!function ($) {

var $j = jQuery.noConflict(); 

$j(function() {

	var dur = 1200;
	var pDur = 3600;

	$j('#bottomCarousel').carouFredSel({
		items: {
			visible: 1,
			width: 500,
			height: 300,
			items: 1
		},
		scroll: {
			fx: 'fade',
			easing: 'linear',
			duration: dur,
			timeoutDuration: pDur,
			onBefore: function( data ) {
				animate1( data.items.visible, pDur + ( dur * 3 ) );
			},
			onAfter: function( data ) {
				data.items.old.find( 'img' ).stop().css({
					width: 500,
					height: 300,
					marginTop: 0,
					marginLeft: 0
				});
			}
		},
		onCreate: function( data ) {
			animate1( data.items, pDur + ( dur * 2 ) );
		}
	});

	function animate1( item, dur ) {
		var obj = {
			width: 700,
			height: 420
		};
		switch( Math.ceil( Math.random() * 2 ) ) {
			case 1:
				obj.marginTop = 0;
				break;
			case 2:
				obj.marginTop = -120
				break;
		}
		switch( Math.ceil( Math.random() * 2 ) ) {
			case 1:
				obj.marginLeft = 0;
				break;
			case 2:
				obj.marginLeft = -200
			break;
		}
		item.find( 'img' ).animate(obj, dur, 'linear' );
	}


	$j('#commentCarousel').carouFredSel({
		items: {
			visible: 1,
			width: 700,
			height: 500,
			items: 1
		},
		scroll: {
			fx: 'fade',
			easing: 'linear',
			duration: dur*3,
			timeoutDuration: pDur*3,
			onBefore: function( data ) {
				animate2( data.items.visible, pDur*3 + ( dur * 9 ) );
			},
			onAfter: function( data ) {
				data.items.old.find( 'img' ).stop().css({
					width: 700,
					height: 500,
					marginTop: 0,
					marginLeft: 0
				});
			}
		},
		onCreate: function( data ) {
			animate2( data.items, pDur*3 + ( dur * 6 ) );
		}
	});

	function animate2( item, dur ) {
		var obj = {
			width: 820,
			height: 590
		};
		switch( Math.ceil( Math.random() * 2 ) ) {
			case 1:
				obj.marginTop = 0;
				break;
			case 2:
				obj.marginTop = -90
				break;
		}
		switch( Math.ceil( Math.random() * 2 ) ) {
			case 1:
				obj.marginLeft = 0;
				break;
			case 2:
				obj.marginLeft = -120
			break;
		}
		item.find( 'img' ).animate(obj, dur, 'linear' );
	}


});

}(window.jQuery);
/*

Holder - 1.9 - client side image placeholders
(c) 2012-2013 Ivan Malopinsky / http://imsky.co

Provided under the Apache 2.0 License: http://www.apache.org/licenses/LICENSE-2.0
Commercial use requires attribution.

*/

var Holder = Holder || {};
(function (app, win) {

var preempted = false,
fallback = false,
canvas = document.createElement('canvas');

//getElementsByClassName polyfill
document.getElementsByClassName||(document.getElementsByClassName=function(e){var t=document,n,r,i,s=[];if(t.querySelectorAll)return t.querySelectorAll("."+e);if(t.evaluate){r=".//*[contains(concat(' ', @class, ' '), ' "+e+" ')]",n=t.evaluate(r,t,null,0,null);while(i=n.iterateNext())s.push(i)}else{n=t.getElementsByTagName("*"),r=new RegExp("(^|\\s)"+e+"(\\s|$)");for(i=0;i<n.length;i++)r.test(n[i].className)&&s.push(n[i])}return s})

//getComputedStyle polyfill
window.getComputedStyle||(window.getComputedStyle=function(e,t){return this.el=e,this.getPropertyValue=function(t){var n=/(\-([a-z]){1})/g;return t=="float"&&(t="styleFloat"),n.test(t)&&(t=t.replace(n,function(){return arguments[2].toUpperCase()})),e.currentStyle[t]?e.currentStyle[t]:null},this})

//http://javascript.nwbox.com/ContentLoaded by Diego Perini with modifications
function contentLoaded(n,t){var l="complete",s="readystatechange",u=!1,h=u,c=!0,i=n.document,a=i.documentElement,e=i.addEventListener?"addEventListener":"attachEvent",v=i.addEventListener?"removeEventListener":"detachEvent",f=i.addEventListener?"":"on",r=function(e){(e.type!=s||i.readyState==l)&&((e.type=="load"?n:i)[v](f+e.type,r,u),!h&&(h=!0)&&t.call(n,null))},o=function(){try{a.doScroll("left")}catch(n){setTimeout(o,50);return}r("poll")};if(i.readyState==l)t.call(n,"lazy");else{if(i.createEventObject&&a.doScroll){try{c=!n.frameElement}catch(y){}c&&o()}i[e](f+"DOMContentLoaded",r,u),i[e](f+s,r,u),n[e](f+"load",r,u)}};

//https://gist.github.com/991057 by Jed Schmidt with modifications
function selector(a){
	a=a.match(/^(\W)?(.*)/);var b=document["getElement"+(a[1]?a[1]=="#"?"ById":"sByClassName":"sByTagName")](a[2]);
	var ret=[];	b!=null&&(b.length?ret=b:b.length==0?ret=b:ret=[b]);	return ret;
}

//shallow object property extend
function extend(a,b){var c={};for(var d in a)c[d]=a[d];for(var e in b)c[e]=b[e];return c}

//hasOwnProperty polyfill
if (!Object.prototype.hasOwnProperty)
	Object.prototype.hasOwnProperty = function(prop) {
		var proto = this.__proto__ || this.constructor.prototype;
		return (prop in this) && (!(prop in proto) || proto[prop] !== this[prop]);
	}

function text_size(width, height, template) {
	var dimension_arr = [height, width].sort();
	var maxFactor = Math.round(dimension_arr[1] / 16),
		minFactor = Math.round(dimension_arr[0] / 16);
	var text_height = Math.max(template.size, maxFactor);
	return {
		height: text_height
	}
}

function draw(ctx, dimensions, template, ratio) {
	var ts = text_size(dimensions.width, dimensions.height, template);
	var text_height = ts.height;
	var width = dimensions.width * ratio, height = dimensions.height * ratio;
	var font = template.font ? template.font : "sans-serif";
	canvas.width = width;
	canvas.height = height;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillStyle = template.background;
	ctx.fillRect(0, 0, width, height);
	ctx.fillStyle = template.foreground;
	ctx.font = "bold " + text_height + "px "+font;
	var text = template.text ? template.text : (dimensions.width + "x" + dimensions.height);
	if (ctx.measureText(text).width / width > 1) {
		text_height = template.size / (ctx.measureText(text).width / width);
	}
	//Resetting font size if necessary
	ctx.font = "bold " + (text_height * ratio) + "px "+font;
	ctx.fillText(text, (width / 2), (height / 2), width);
	return canvas.toDataURL("image/png");
}

function render(mode, el, holder, src) {
	var dimensions = holder.dimensions,
		theme = holder.theme,
		text = holder.text ? decodeURIComponent(holder.text) : holder.text;
	var dimensions_caption = dimensions.width + "x" + dimensions.height;
	theme = (text ? extend(theme, {	text: text }) : theme);
	theme = (holder.font ? extend(theme, {font: holder.font}) : theme);

	var ratio = 1;
	if(window.devicePixelRatio && window.devicePixelRatio > 1){
		ratio = window.devicePixelRatio;
	}

	if (mode == "image") {
		el.setAttribute("data-src", src);
		el.setAttribute("alt", text ? text : theme.text ? theme.text + " [" + dimensions_caption + "]" : dimensions_caption);

		if(fallback || !holder.auto){
		    el.style.width = dimensions.width + "px";
		    el.style.height = dimensions.height + "px";
		}

		if (fallback) {
			el.style.backgroundColor = theme.background;

		}
		else{
			el.setAttribute("src", draw(ctx, dimensions, theme, ratio));
		}
	} else {
		if (!fallback) {
			el.style.backgroundImage = "url(" + draw(ctx, dimensions, theme, ratio) + ")";
			el.style.backgroundSize = dimensions.width+"px "+dimensions.height+"px";
		}
	}
};

function fluid(el, holder, src) {
	var dimensions = holder.dimensions,
		theme = holder.theme,
		text = holder.text;
	var dimensions_caption = dimensions.width + "x" + dimensions.height;
	theme = (text ? extend(theme, {
		text: text
	}) : theme);

	var fluid = document.createElement("div");

	fluid.style.backgroundColor = theme.background;
	fluid.style.color = theme.foreground;
	fluid.className = el.className + " holderjs-fluid";
	fluid.style.width = holder.dimensions.width + (holder.dimensions.width.indexOf("%")>0?"":"px");
	fluid.style.height = holder.dimensions.height + (holder.dimensions.height.indexOf("%")>0?"":"px");
	fluid.id = el.id;

	el.style.width=0;
	el.style.height=0;

	if (theme.text) {
		fluid.appendChild(document.createTextNode(theme.text))
	} else {
		fluid.appendChild(document.createTextNode(dimensions_caption))
		fluid_images.push(fluid);
		setTimeout(fluid_update, 0);
	}

	el.parentNode.insertBefore(fluid, el.nextSibling)

	if(window.jQuery){
	    jQuery(function($){
		$(el).on("load", function(){
		   el.style.width = fluid.style.width;
		   el.style.height = fluid.style.height;
		   $(el).show();
		   $(fluid).remove();
		});
	    })
	}
}

function fluid_update() {
	for (i in fluid_images) {
		if(!fluid_images.hasOwnProperty(i)) continue;
		var el = fluid_images[i],
			label = el.firstChild;

		el.style.lineHeight = el.offsetHeight+"px";
		label.data = el.offsetWidth + "x" + el.offsetHeight;
	}
}

function parse_flags(flags, options) {

	var ret = {
		theme: settings.themes.gray
	}, render = false;

	for (sl = flags.length, j = 0; j < sl; j++) {
		var flag = flags[j];
		if (app.flags.dimensions.match(flag)) {
			render = true;
			ret.dimensions = app.flags.dimensions.output(flag);
		} else if (app.flags.fluid.match(flag)) {
			render = true;
			ret.dimensions = app.flags.fluid.output(flag);
			ret.fluid = true;
		} else if (app.flags.colors.match(flag)) {
			ret.theme = app.flags.colors.output(flag);
		} else if (options.themes[flag]) {
			//If a theme is specified, it will override custom colors
			ret.theme = options.themes[flag];
		} else if (app.flags.text.match(flag)) {
			ret.text = app.flags.text.output(flag);
		} else if(app.flags.font.match(flag)){
			ret.font = app.flags.font.output(flag);
		}
		else if(app.flags.auto.match(flag)){
			ret.auto = true;
		}
	}

	return render ? ret : false;

};

if (!canvas.getContext) {
	fallback = true;
} else {
	if (canvas.toDataURL("image/png")
		.indexOf("data:image/png") < 0) {
		//Android doesn't support data URI
		fallback = true;
	} else {
		var ctx = canvas.getContext("2d");
	}
}

var fluid_images = [];

var settings = {
	domain: "holder.js",
	images: "img",
	bgnodes: ".holderjs",
	themes: {
		"gray": {
			background: "#eee",
			foreground: "#aaa",
			size: 12
		},
			"social": {
			background: "#3a5a97",
			foreground: "#fff",
			size: 12
		},
			"industrial": {
			background: "#434A52",
			foreground: "#C2F200",
			size: 12
		}
	},
	stylesheet: ".holderjs-fluid {font-size:16px;font-weight:bold;text-align:center;font-family:sans-serif;margin:0}"
};


app.flags = {
	dimensions: {
		regex: /^(\d+)x(\d+)$/,
		output: function (val) {
			var exec = this.regex.exec(val);
			return {
				width: +exec[1],
				height: +exec[2]
			}
		}
	},
	fluid: {
		regex: /^([0-9%]+)x([0-9%]+)$/,
		output: function (val) {
			var exec = this.regex.exec(val);
			return {
				width: exec[1],
				height: exec[2]
			}
		}
	},
	colors: {
		regex: /#([0-9a-f]{3,})\:#([0-9a-f]{3,})/i,
		output: function (val) {
			var exec = this.regex.exec(val);
			return {
				size: settings.themes.gray.size,
				foreground: "#" + exec[2],
				background: "#" + exec[1]
			}
		}
	},
	text: {
		regex: /text\:(.*)/,
		output: function (val) {
			return this.regex.exec(val)[1];
		}
	},
	font: {
	    regex: /font\:(.*)/,
	    output: function(val){
		return this.regex.exec(val)[1];
	    }
	},
	auto: {
	    regex: /^auto$/
	}
}

for (var flag in app.flags) {
	if(!app.flags.hasOwnProperty(flag)) continue;
	app.flags[flag].match = function (val) {
		return val.match(this.regex)
	}
}

app.add_theme = function (name, theme) {
	name != null && theme != null && (settings.themes[name] = theme);
	return app;
};

app.add_image = function (src, el) {
	var node = selector(el);
	if (node.length) {
		for (var i = 0, l = node.length; i < l; i++) {
			var img = document.createElement("img")
			img.setAttribute("data-src", src);
			node[i].appendChild(img);
		}
	}
	return app;
};

app.run = function (o) {
	var options = extend(settings, o), images = [];

	if(options.images instanceof window.NodeList){
	    imageNodes = options.images;
	}
	else if(options.images instanceof window.Node){
	    imageNodes = [options.images];
	}
	else{
	    imageNodes = selector(options.images);
	}

	if(options.elements instanceof window.NodeList){
	    bgnodes = options.bgnodes;
	}
	else if(options.bgnodes instanceof window.Node){
	    bgnodes = [options.bgnodes];
	}
	else{
	    bgnodes = selector(options.bgnodes);
	}

	preempted = true;

	for (i = 0, l = imageNodes.length; i < l; i++) images.push(imageNodes[i]);

	var holdercss = document.getElementById("holderjs-style");

	if(!holdercss){
	    holdercss = document.createElement("style");
	    holdercss.setAttribute("id", "holderjs-style");
	    holdercss.type = "text/css";
	    document.getElementsByTagName("head")[0].appendChild(holdercss);
	}

	if(holdercss.styleSheet){
	    holdercss.styleSheet += options.stylesheet;
	}
	else{
	    holdercss.textContent+= options.stylesheet;
	}

	var cssregex = new RegExp(options.domain + "\/(.*?)\"?\\)");

	for (var l = bgnodes.length, i = 0; i < l; i++) {
		var src = window.getComputedStyle(bgnodes[i], null)
			.getPropertyValue("background-image");
		var flags = src.match(cssregex);
		if (flags) {
			var holder = parse_flags(flags[1].split("/"), options);
			if (holder) {
				render("background", bgnodes[i], holder, src);
			}
		}
	}

	for (var l = images.length, i = 0; i < l; i++) {
		var src = images[i].getAttribute("src") || images[i].getAttribute("data-src");
		if (src != null && src.indexOf(options.domain) >= 0) {
			var holder = parse_flags(src.substr(src.lastIndexOf(options.domain) + options.domain.length + 1)
				.split("/"), options);
			if (holder) {
				if (holder.fluid) {
					fluid(images[i], holder, src);
				} else {
					render("image", images[i], holder, src);
				}
			}
		}
	}
	return app;
};

contentLoaded(win, function () {
	if (window.addEventListener) {
		window.addEventListener("resize", fluid_update, false);
		window.addEventListener("orientationchange", fluid_update, false);
	} else {
		window.attachEvent("onresize", fluid_update)
	}
	preempted || app.run();
});

if ( typeof define === "function" && define.amd ) {
	define( "Holder", [], function () { return app; } );
}

})(Holder, window);

!function ($) {
	$(function(){
		$('#topCarousel').carousel();
	})
}(window.jQuery)

