(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[9706],{64210:(t,e,r)=>{"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||i(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){if(t){if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var s=r(87883),u=r(44020),l=r(74851);function c(t,e){return e.encode?e.strict?s(t):encodeURIComponent(t):t}function h(t,e){return e.decode?u(t):t}function f(t){return Array.isArray(t)?t.sort():"object"===n(t)?f(Object.keys(t)).sort((function(t,e){return Number(t)-Number(e)})).map((function(e){return t[e]})):t}function d(t){var e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function p(t){var e=(t=d(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function b(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function y(t,e){var r=function(t){var e;switch(t.arrayFormat){case"index":return function(t,r,n){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=r):n[t]=r};case"bracket":return function(t,r,n){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"comma":return function(t,e,r){var n="string"==typeof e&&e.split("").indexOf(",")>-1?e.split(","):e;r[t]=n};default:return function(t,e,r){void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}(e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",parseNumbers:!1,parseBooleans:!1},e)),o=Object.create(null);if("string"!=typeof t)return o;if(!(t=t.trim().replace(/^[?#&]/,"")))return o;var a,s,u,c=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=i(t))){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return s=t.done,t},e:function(t){u=!0,a=t},f:function(){try{s||null==r.return||r.return()}finally{if(u)throw a}}}}(t.split("&"));try{for(c.s();!(a=c.n()).done;){var d=a.value,p=(s=l(e.decode?d.replace(/\+/g," "):d,"="),u=2,function(t){if(Array.isArray(t))return t}(s)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],a=!0,s=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(t){s=!0,o=t}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return i}}(s,u)||i(s,u)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),y=p[0],v=p[1];v=void 0===v?null:h(v,e),r(h(y,e),v,o)}}catch(t){c.e(t)}finally{c.f()}for(var m=0,g=Object.keys(o);m<g.length;m++){var S=g[m],w=o[S];if("object"===n(w)&&null!==w)for(var T=0,k=Object.keys(w);T<k.length;T++){var C=k[T];w[C]=b(w[C],e)}else o[S]=b(w,e)}return!1===e.sort?o:(!0===e.sort?Object.keys(o).sort():Object.keys(o).sort(e.sort)).reduce((function(t,e){var r=o[e];return Boolean(r)&&"object"===n(r)&&!Array.isArray(r)?t[e]=f(r):t[e]=r,t}),Object.create(null))}e.extract=p,e.parse=y,e.stringify=function(t,e){if(!t)return"";var r=function(t){switch(t.arrayFormat){case"index":return function(e){return function(r,n){var i=r.length;return void 0===n||t.skipNull&&null===n?r:[].concat(o(r),null===n?[[c(e,t),"[",i,"]"].join("")]:[[c(e,t),"[",c(i,t),"]=",c(n,t)].join("")])}};case"bracket":return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n?r:[].concat(o(r),null===n?[[c(e,t),"[]"].join("")]:[[c(e,t),"[]=",c(n,t)].join("")])}};case"comma":return function(e){return function(r,n){return null==n||0===n.length?r:0===r.length?[[c(e,t),"=",c(n,t)].join("")]:[[r,c(n,t)].join(",")]}};default:return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n?r:[].concat(o(r),null===n?[c(e,t)]:[[c(e,t),"=",c(n,t)].join("")])}}}}(e=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},e)),n=Object.assign({},t);if(e.skipNull)for(var i=0,a=Object.keys(n);i<a.length;i++){var s=a[i];void 0!==n[s]&&null!==n[s]||delete n[s]}var u=Object.keys(n);return!1!==e.sort&&u.sort(e.sort),u.map((function(n){var o=t[n];return void 0===o?"":null===o?c(n,e):Array.isArray(o)?o.reduce(r(n),[]).join("&"):c(n,e)+"="+c(o,e)})).filter((function(t){return t.length>0})).join("&")},e.parseUrl=function(t,e){return{url:d(t).split("?")[0]||"",query:y(p(t),e)}}},87883:t=>{"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},74851:t=>{"use strict";t.exports=function(t,e){if("string"!=typeof t||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];var r=t.indexOf(e);return-1===r?[t]:[t.slice(0,r),t.slice(r+e.length)]}},44020:t=>{"use strict";var e="%[a-f0-9]{2}",r=new RegExp(e,"gi"),n=new RegExp("("+e+")+","gi");function o(t,e){try{return decodeURIComponent(t.join(""))}catch(t){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],o(r),o(n))}function i(t){try{return decodeURIComponent(t)}catch(i){for(var e=t.match(r),n=1;n<e.length;n++)e=(t=o(e,n).join("")).match(r);return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},r=n.exec(t);r;){try{e[r[0]]=decodeURIComponent(r[0])}catch(t){var o=i(r[0]);o!==r[0]&&(e[r[0]]=o)}r=n.exec(t)}e["%C2"]="�";for(var a=Object.keys(e),s=0;s<a.length;s++){var u=a[s];t=t.replace(new RegExp(u,"g"),e[u])}return t}(t)}}},10240:(t,e,r)=>{var n=r(29750),o=r(80531),i=r(40554),a=r(79833);t.exports=function(t,e,r){return t=a(t),r=null==r?0:n(i(r),0,t.length),e=o(e),t.slice(r,r+e.length)==e}},19081:(t,e,r)=>{"use strict";t.exports=r(1174)},6806:(t,e,r)=>{"use strict";var n,o=(n=r(15132))&&n.__esModule?n:{default:n};e.Z=o.default},15132:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=r(24852),s=l(a),u=l(r(45697));function l(t){return t&&t.__esModule?t:{default:t}}var c={position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"hidden"},h={zIndex:2,position:"absolute",top:0,bottom:0,transition:"transform .3s ease-out",WebkitTransition:"-webkit-transform .3s ease-out",willChange:"transform",overflowY:"auto"},f={position:"absolute",top:0,left:0,right:0,bottom:0,overflowY:"scroll",WebkitOverflowScrolling:"touch",transition:"left .3s ease-out, right .3s ease-out"},d={zIndex:1,position:"fixed",top:0,left:0,right:0,bottom:0,opacity:0,visibility:"hidden",transition:"opacity .3s ease-out, visibility .3s ease-out",backgroundColor:"rgba(0,0,0,.3)"},p={zIndex:1,position:"fixed",top:0,bottom:0},b=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.state={sidebarWidth:t.defaultSidebarWidth,touchIdentifier:null,touchStartX:null,touchStartY:null,touchCurrentX:null,touchCurrentY:null,dragSupported:!1},r.overlayClicked=r.overlayClicked.bind(r),r.onTouchStart=r.onTouchStart.bind(r),r.onTouchMove=r.onTouchMove.bind(r),r.onTouchEnd=r.onTouchEnd.bind(r),r.onScroll=r.onScroll.bind(r),r.saveSidebarRef=r.saveSidebarRef.bind(r),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),i(e,[{key:"componentDidMount",value:function(){this.setState({dragSupported:"object"===("undefined"==typeof window?"undefined":o(window))&&"ontouchstart"in window}),this.saveSidebarWidth()}},{key:"componentDidUpdate",value:function(){this.isTouching()||this.saveSidebarWidth()}},{key:"onTouchStart",value:function(t){if(!this.isTouching()){var e=t.targetTouches[0];this.setState({touchIdentifier:e.identifier,touchStartX:e.clientX,touchStartY:e.clientY,touchCurrentX:e.clientX,touchCurrentY:e.clientY})}}},{key:"onTouchMove",value:function(t){if(this.isTouching())for(var e=0;e<t.targetTouches.length;e++)if(t.targetTouches[e].identifier===this.state.touchIdentifier){this.setState({touchCurrentX:t.targetTouches[e].clientX,touchCurrentY:t.targetTouches[e].clientY});break}}},{key:"onTouchEnd",value:function(){if(this.isTouching()){var t=this.touchSidebarWidth();(this.props.open&&t<this.state.sidebarWidth-this.props.dragToggleDistance||!this.props.open&&t>this.props.dragToggleDistance)&&this.props.onSetOpen(!this.props.open),this.setState({touchIdentifier:null,touchStartX:null,touchStartY:null,touchCurrentX:null,touchCurrentY:null})}}},{key:"onScroll",value:function(){this.isTouching()&&this.inCancelDistanceOnScroll()&&this.setState({touchIdentifier:null,touchStartX:null,touchStartY:null,touchCurrentX:null,touchCurrentY:null})}},{key:"inCancelDistanceOnScroll",value:function(){return this.props.pullRight?Math.abs(this.state.touchCurrentX-this.state.touchStartX)<20:Math.abs(this.state.touchStartX-this.state.touchCurrentX)<20}},{key:"isTouching",value:function(){return null!==this.state.touchIdentifier}},{key:"overlayClicked",value:function(){this.props.open&&this.props.onSetOpen(!1)}},{key:"saveSidebarWidth",value:function(){var t=this.sidebar.offsetWidth;t!==this.state.sidebarWidth&&this.setState({sidebarWidth:t})}},{key:"saveSidebarRef",value:function(t){this.sidebar=t}},{key:"touchSidebarWidth",value:function(){return this.props.pullRight?this.props.open&&window.innerWidth-this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth+this.state.touchStartX-this.state.touchCurrentX:this.state.sidebarWidth:Math.min(window.innerWidth-this.state.touchCurrentX,this.state.sidebarWidth):this.props.open&&this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth:this.state.sidebarWidth-this.state.touchStartX+this.state.touchCurrentX:Math.min(this.state.touchCurrentX,this.state.sidebarWidth)}},{key:"render",value:function(){var t=n({},h,this.props.styles.sidebar),e=n({},f,this.props.styles.content),r=n({},d,this.props.styles.overlay),o=this.state.dragSupported&&this.props.touch,i=this.isTouching(),a={className:this.props.rootClassName,style:n({},c,this.props.styles.root),role:"navigation"},u=void 0;if(this.props.pullRight?(t.right=0,t.transform="translateX(100%)",t.WebkitTransform="translateX(100%)",this.props.shadow&&(t.boxShadow="-2px 2px 4px rgba(0, 0, 0, 0.15)")):(t.left=0,t.transform="translateX(-100%)",t.WebkitTransform="translateX(-100%)",this.props.shadow&&(t.boxShadow="2px 2px 4px rgba(0, 0, 0, 0.15)")),i){var l=this.touchSidebarWidth()/this.state.sidebarWidth;this.props.pullRight?(t.transform="translateX("+100*(1-l)+"%)",t.WebkitTransform="translateX("+100*(1-l)+"%)"):(t.transform="translateX(-"+100*(1-l)+"%)",t.WebkitTransform="translateX(-"+100*(1-l)+"%)"),r.opacity=l,r.visibility="visible"}else this.props.docked?(0!==this.state.sidebarWidth&&(t.transform="translateX(0%)",t.WebkitTransform="translateX(0%)"),this.props.pullRight?e.right=this.state.sidebarWidth+"px":e.left=this.state.sidebarWidth+"px"):this.props.open&&(t.transform="translateX(0%)",t.WebkitTransform="translateX(0%)",r.opacity=1,r.visibility="visible");if(!i&&this.props.transitions||(t.transition="none",t.WebkitTransition="none",e.transition="none",r.transition="none"),o)if(this.props.open)a.onTouchStart=this.onTouchStart,a.onTouchMove=this.onTouchMove,a.onTouchEnd=this.onTouchEnd,a.onTouchCancel=this.onTouchEnd,a.onScroll=this.onScroll;else{var b=n({},p,this.props.styles.dragHandle);b.width=this.props.touchHandleWidth,this.props.pullRight?b.right=0:b.left=0,u=s.default.createElement("div",{style:b,onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchEnd})}return s.default.createElement("div",a,s.default.createElement("div",{className:this.props.sidebarClassName,style:t,ref:this.saveSidebarRef},this.props.sidebar),s.default.createElement("div",{className:this.props.overlayClassName,style:r,role:"presentation",tabIndex:"0",onClick:this.overlayClicked}),s.default.createElement("div",{className:this.props.contentClassName,style:e},u,this.props.children))}}]),e}(a.Component);b.propTypes={children:u.default.node.isRequired,styles:u.default.shape({root:u.default.object,sidebar:u.default.object,content:u.default.object,overlay:u.default.object,dragHandle:u.default.object}),rootClassName:u.default.string,sidebarClassName:u.default.string,contentClassName:u.default.string,overlayClassName:u.default.string,sidebar:u.default.node.isRequired,docked:u.default.bool,open:u.default.bool,transitions:u.default.bool,touch:u.default.bool,touchHandleWidth:u.default.number,pullRight:u.default.bool,shadow:u.default.bool,dragToggleDistance:u.default.number,onSetOpen:u.default.func,defaultSidebarWidth:u.default.number},b.defaultProps={docked:!1,open:!1,transitions:!0,touch:!0,touchHandleWidth:20,pullRight:!1,shadow:!0,dragToggleDistance:30,onSetOpen:function(){},styles:{},defaultSidebarWidth:0},e.default=b},93054:(t,e,r)=>{"use strict";e.__esModule=!0,e.default=function(t){if("function"!=typeof t)throw new TypeError("You must provide a valid moment object");var e="function"==typeof t().locale?"locale":"lang";if(!t.localeData)throw new TypeError("The Moment localizer depends on the `localeData` api, please provide a moment object v2.2.0 or higher");function r(r,n,o){return r?t(n,o)[e](r):t(n,o)}var n={formats:{date:"L",time:"LT",default:"lll",header:"MMMM YYYY",footer:"LL",weekday:"dd",dayOfMonth:"DD",month:"MMM",year:"YYYY",decade:function(e,r,n){return n.format(e,"YYYY",r)+" - "+n.format(function(e){return t(e).add(10,"year").add(-1,"millisecond").toDate()}(e),"YYYY",r)},century:function(e,r,n){return n.format(e,"YYYY",r)+" - "+n.format(function(e){return t(e).add(100,"year").add(-1,"millisecond").toDate()}(e),"YYYY",r)}},firstOfWeek:function(e){return t.localeData(e).firstDayOfWeek()},parse:function(t,e,n){if(!t)return null;var o=r(n,t,e);return o.isValid()?o.toDate():null},format:function(t,e,n){return r(n,t).format(e)}};return o.default.setDateLocalizer(n),n};var n,o=(n=r(77036))&&n.__esModule?n:{default:n};t.exports=e.default},28878:(t,e,r)=>{"use strict";var n,o={fromESObservable:((n=r(49977))&&n.__esModule?n:{default:n}).default.Observable.from,toESObservable:function(t){return t}};e.Z=o},19412:(t,e,r)=>{var n=r(98098);t.exports=function(t,e){var r=new n.io.GeoJSONReader,o=r.read(JSON.stringify(t.geometry)),i=r.read(JSON.stringify(e.geometry)),a=o.union(i);return{type:"Feature",geometry:a=(new n.io.GeoJSONWriter).write(a),properties:t.properties}}}}]);