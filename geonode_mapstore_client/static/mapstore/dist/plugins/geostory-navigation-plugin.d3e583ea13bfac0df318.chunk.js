(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[8710],{34990:(e,t,n)=>{"use strict";n.d(t,{D7:()=>l,mN:()=>s,vb:()=>u,KT:()=>d,QK:()=>f,cc:()=>p,Gx:()=>m,XH:()=>y,lX:()=>v,tP:()=>g,Dq:()=>h,LE:()=>b,SW:()=>O,si:()=>E,i2:()=>S,IY:()=>C,Zf:()=>T,ij:()=>w,Hb:()=>R,Mk:()=>P,c:()=>N,NZ:()=>j,Cx:()=>I,wb:()=>G,km:()=>_,un:()=>D,Ro:()=>A,jr:()=>k,ZY:()=>x,EQ:()=>Y,W7:()=>L,Ym:()=>U,iU:()=>z,W$:()=>M,OJ:()=>Z,IH:()=>B,rp:()=>F,D_:()=>H,zJ:()=>q,wJ:()=>V,OS:()=>W,YP:()=>K,Ct:()=>$,Od:()=>Q,y6:()=>X,g5:()=>J,_e:()=>ee,DF:()=>te,GD:()=>ne,K0:()=>re,kB:()=>oe,Xn:()=>ie,G5:()=>ae,Vx:()=>ce,RZ:()=>le,pB:()=>se,$A:()=>ue,m7:()=>de,YM:()=>fe,o2:()=>pe,ql:()=>me,c0:()=>ye,nL:()=>ve,Fu:()=>ge,WE:()=>he,uj:()=>be,jw:()=>Oe,Ml:()=>Ee,fD:()=>Se,Ak:()=>Ce});var r=n(47037),o=n.n(r),i=n(55877),a=n.n(i),c=n(92579),l="GEOSTORY:ADD",s="GEOSTORY:ADD_RESOURCE",u="GEOSTORY:CHANGE_MODE",d="GEOSTORY:CLEAR_SAVE_ERROR",f="GEOSTORY:EDIT_RESOURCE",p="GEOSTORY:EDIT_WEBPAGE",m="GEOSTORY:SCROLLING",y="GEOSTORY:LOAD_GEOSTORY",v="GEOSTORY:LOADING_GEOSTORY",g="GEOSTORY:MOVE",h="GEOSTORY:REMOVE",b="GEOSTORY:SAVE_STORY",O="GEOSTORY:SAVE_ERROR",E="GEOSTORY:STORY_SAVED",S="GEOSTORY:SELECT_CARD",C="GEOSTORY:SET_CONTROL",T="GEOSTORY:SET_RESOURCE",w="GEOSTORY:SET_CURRENT_STORY",R="GEOSTORY:SET_WEBPAGE_URL",P="GEOSTORY:TOGGLE_CARD_PREVIEW",N="GEOSTORY:TOGGLE_SETTINGS_PANEL",j="GEOSTORY:TOGGLE_SETTING",I="GEOSTORY:TOGGLE_CONTENT_FOCUS",G="GEOSTORY:UPDATE",_="GEOSTORY:UPDATE_SETTING",D="GEOSTORY:UPDATE_CURRENT_PAGE",A="GEOSTORY:REMOVE_RESOURCE",k="GEOSTORY:SET_PENDING_CHANGES",x="GEOSTORY:SET_UPDATE_URL_SCROLL",Y="GEOSTORY:UPDATE_MEDIA_EDITOR_SETTINGS",L="GEOSTORY:DRAWING_FEATURE",U="GEOSTORY:SIDE_EFFECT",z="GEOSTORY:UPDATE_GEO_CAROUSEL_SETTINGS",M="GEOSTORY:HIDE_CAROUSEL_ITEMS",Z="GEOSTORY:SYNC_CAROUSEL_MAP",B=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e){return e};return{type:l,id:n&&n.id||a()(),path:e,position:t,element:o()(n)&&(0,c.nq)(n,r)||n}},F=function(e,t,n){return{type:s,id:e,mediaType:t,data:n}},H=function(e){return{type:u,mode:e?c.nl.EDIT:c.nl.VIEW}},q=function(e,t,n){return{type:f,id:e,mediaType:t,data:n}},V=function(e,t){return{type:y,id:e,options:t}},W=function(e){return{type:"GEOSTORY:GEOSTORY_LOADED",id:e}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"loading";return{type:v,value:e,name:t}},$=function(e){return{type:"GEOSTORY:LOAD_GEOSTORY_ERROR",error:e}},Q=function(e){return{type:h,path:e}},X=function(e){return{type:O,error:e}},J=function(e,t){return{type:C,control:e,value:t}},ee=function(e){return{type:S,card:e}},te=function(e){return{type:T,resource:e}},ne=function(e){return{type:E,id:e}},re=function(e){return{type:w,story:e}},oe=function(){return{type:P}},ie=function(e){return{type:j,option:e}},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{type:N,withSave:e}},ce=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"replace";return{type:G,path:e,element:t,mode:n}},le=function(e){var t=e.sectionId,n=e.columnId;return{type:D,sectionId:t,columnId:n}},se=function(e,t,n){return{type:g,source:e,target:t,position:n}},ue=function(e,t,n,r,o){return{type:I,status:e,target:t,selector:n,hideContent:r,path:o}},de=function(e,t){return{type:_,prop:e,value:t}},fe=function(e){return{type:R,src:e}},pe=function(e){var t=e.path,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GEOSTORY";return{type:p,path:t,owner:n}},me=function(e,t){return{type:A,id:e,mediaType:t}},ye=function(e){return{type:k,value:e}},ve=function(e){return{type:x,value:e}},ge=function(e){return{type:Y,mediaEditorSettings:e}},he=function(e){return{type:m,status:e}},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:L,features:e}},Oe=function(e){return{type:U,status:e}},Ee=function(e){return{type:z,geoCarouselSettings:e}},Se=function(e,t){return{type:M,sectionId:e,showContentId:t}},Ce=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.hideContentId,r=t.layers,o=t.resourceId;return{type:Z,layers:r,sectionId:e,hideContentId:n,resourceId:o}}},7472:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var r=n(27418),o=n.n(r),i=n(45697),a=n.n(i),c=n(24852),l=n.n(c),s=n(85294),u=n.n(s),d=n(72986),f=n.n(d),p=n(5346);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){C(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?E(e):t}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(c,e);var t,n,r,i,a=(r=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(i){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function c(){var e;g(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return C(E(e=a.call.apply(a,[this].concat(n))),"renderLoading",(function(){return e.props.maskLoading?l().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},l().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},l().createElement(p.Z,{msgId:"loading"}),l().createElement(f(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),C(E(e),"renderRole",(function(t){return l().Children.toArray(e.props.children).filter((function(e){return e.props.role===t}))})),C(E(e),"hasRole",(function(t){return l().Children.toArray(e.props.children).filter((function(e){return e.props.role===t})).length>0})),C(E(e),"onClickOut",(function(t){e.props.onClickOut&&e.mask===t.target&&e.props.onClickOut(t)})),e}return t=c,(n=[{key:"render",value:function(){var e=this,t=l().createElement("div",{id:this.props.id,style:v({zIndex:3},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},l().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),l().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?l().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):l().createElement("span",null)),n=this.props.draggable?l().createElement(u(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},t):t,r=o()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?l().createElement("div",{ref:function(t){e.mask=t},onClick:this.onClickOut,style:r,className:"fade in modal "+this.props.containerClassName,role:"dialog"},n):n}}])&&h(t.prototype,n),c}(l().Component);C(T,"propTypes",{id:a().string.isRequired,style:a().object,backgroundStyle:a().object,className:a().string,maskLoading:a().bool,containerClassName:a().string,headerClassName:a().string,bodyClassName:a().string,footerClassName:a().string,onClickOut:a().func,modal:a().bool,start:a().object,draggable:a().bool,bounds:a().oneOfType([a().string,a().object])}),C(T,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const w=T},75480:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(24852),o=n.n(r);const i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.style,n=void 0===t?{display:"inline-block"}:t;return o().createElement("div",{style:n,className:"mapstore-inline-loader"})}},94745:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(24852),o=n.n(r),i=n(57588),a=n(7472),c=n(80717),l=n(67076),s=n(19081),u=n.n(s),d=n(75480),f={xs:" ms-xs",sm:" ms-sm",md:"",lg:" ms-lg"},p={className:{vertical:" ms-fullscreen-v",horizontal:" ms-fullscreen-h",full:" ms-fullscreen"},glyph:{expanded:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-small"},collapsed:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-full"}}};const m=(0,l.withState)("fullscreenState","onFullscreen",(function(e){var t=e.initialFullscreenState;return void 0===t?"collapsed":t}))((function(e){var t=e.show,n=void 0!==t&&t,r=e.loading,l=e.loadingText,s=e.onClose,m=void 0===s?function(){}:s,y=e.title,v=void 0===y?"":y,g=e.clickOutEnabled,h=void 0===g||g,b=e.showClose,O=void 0===b||b,E=e.disabledClose,S=void 0!==E&&E,C=e.showFullscreen,T=void 0!==C&&C,w=e.fullscreenType,R=void 0===w?"full":w,P=e.buttons,N=void 0===P?[]:P,j=e.size,I=void 0===j?"":j,G=e.bodyClassName,_=void 0===G?"":G,D=e.children,A=e.draggable,k=void 0!==A&&A,x=e.fullscreenState,Y=e.onFullscreen,L=e.fade,U=void 0!==L&&L,z=e.fitContent,M=e.modalClassName,Z=void 0===M?"":M,B=e.dialogClassName,F=void 0===B?"":B,H=e.enableFooter,q=void 0===H||H,V=f[I]||"",W=T&&"expanded"===x&&p.className[R]||"",K=n?o().createElement("div",{className:"modal-fixed ".concat(Z," ")+(k?"ms-draggable":"")},o().createElement(a.Z,{id:"ms-resizable-modal",style:{display:"flex"},onClickOut:h?m:function(){},containerClassName:"ms-resizable-modal",draggable:k,modal:!0,className:"modal-dialog modal-content"+V+W+F+(z?" ms-fit-content":"")},o().createElement("span",{role:"header"},o().createElement("h4",{className:"modal-title"},o().createElement("div",{className:"ms-title"},v),T&&p.className[R]&&o().createElement(i.Glyphicon,{className:"ms-header-btn",onClick:function(){return Y("expanded"===x?"collapsed":"expanded")},glyph:p.glyph[x][R]}),O&&m&&o().createElement(i.Glyphicon,{glyph:"1-close",className:"ms-header-btn",onClick:m,disabled:S}))),o().createElement("div",{role:"body",className:_},D),q&&o().createElement("div",{style:{display:"flex"},role:"footer"},o().createElement("div",{className:"ms-resizable-modal-loading-spinner-container"},r?o().createElement(d.Z,null):null),o().createElement("div",{className:"ms-resizable-modal-loading-text"},r?l:null),o().createElement(c.Z,{buttons:N})))):null;return U?o().createElement(u(),{transitionName:"ms-resizable-modal-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},K):K}))},26538:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Q});var r=n(24852),o=n.n(r),i=n(71703),a=n(22222),c=n(22843),l=n(92579),s=n(66113),u=n(24684),d=n(66190),f=n(80717),p=n(57588),m=n(23279),y=n.n(m),v=n(45338),g=n(80628),h=n(38560);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var w=function(e){var t=e.tabindex,n=e.text,r=e.selected,i=e.style;return o().createElement(h.Z,{tabindex:t,className:"".concat(r?"active":"btn-tray"," btn-xs btn-default"),style:i},n)};const R=(0,g.Z)((function(e){var t=e.currentPage,n=e.items,i=e.scrollTo,a=void 0===i?function(){}:i,c=e.width,l=e.height,s=e.deltaSwipeSize,u=void 0===s?200:s,d=e.transition,f=void 0===d?300:d,m=e.updateTimeDebounceTime,g=void 0===m?500:m,O=e.getItemStyle,T=void 0===O?function(){return{}}:O,R=function(e){var t=e.direction,n=void 0===t?"horizontal":t,o=e.deltaScroll,i=e.width,a=e.height,c=e.transition,l=C((0,r.useState)(0),2),s=l[0],u=l[1],d=C((0,r.useState)(0),2),f=d[0],p=d[1],m=(0,r.useRef)({x:0,y:0}),y=C((0,r.useState)(!1),2),g=y[0],h=y[1],b=C((0,r.useState)("start"),2),O=b[0],T=b[1],w=C((0,r.useState)(),2),R=w[0],P=w[1],N=(0,r.useRef)(),j=(0,r.useRef)({});function I(e,t){P("move:start");var r=N.current,o=r.parentNode,i=r.getBoundingClientRect(),a=o.getBoundingClientRect();if("horizontal"===n){var l=e+i.width;e<0&&l>a.width?(u(e),m.current.x=e,T("center")):e>=0?(u(0),m.current.x=0,T("start")):l<=a.width&&(u(a.width-i.width),m.current.x=a.width-i.width,T("end"))}if("vertical"===n){var s=t+i.height;t<0&&s>a.height?(p(t),m.current.y=t,T("center")):t>=0?(p(0),m.current.y=0,T("start")):s<=a.height&&(p(a.height-i.height),m.current.y=a.height-i.height,T("end"))}setTimeout((function(){P("move:end")}),c)}function G(){var e=N.current,t=e.parentNode,r=e.getBoundingClientRect(),o=t.getBoundingClientRect();return!("horizontal"===n&&o.width>=r.width||"vertical"===n&&o.height>=r.height)}(0,r.useEffect)((function(){function e(e){var t=G();return h(G()),t?I(m.current.x-(e.deltaY>0?o:-o),m.current.y-(e.deltaY>0?o:-o)):null}var t=G();h(t);var n=N.current.parentNode;return t&&I(m.current.x,m.current.y),t&&n&&n.addEventListener&&n.addEventListener("wheel",e),function(){t&&n&&n.removeEventListener&&n.removeEventListener("wheel",e)}}),[i,a]);var _=(0,v.QS)({onSwiping:function(e){e.event.stopPropagation();var t=G();return h(G()),t?I(s-e.deltaX*e.velocity,f-e.deltaY*e.velocity):null},trackTouch:!0,trackMouse:!0});function D(e,t){j.current=E(E({},j.current),{},S({},e,t))}function A(e){var t=j.current[e];if(t){var r=N.current,o=(r&&r.parentNode).getBoundingClientRect(),i=t.getBoundingClientRect();if("horizontal"===n){var a=o.width,c=o.left,l=i.width,s=i.left,u=c+a,d=s+l;return c<=s&&u>=s||c<=d&&u>=d}}return!1}return{status:R,canSwipe:g,isStartControlActive:g&&("end"===O||"center"===O),isEndControlActive:g&&("start"===O||"center"===O),positionLabel:O,coordinates:{x:s,y:f},containerPropsHandlers:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).style,t=void 0===e?{}:e;return E(E({},_),{},{style:E({position:"relative",overflow:"hidden",width:"100%",height:"100%"},t)})},contentPropsHandlers:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).style,t=void 0===e?{}:e;return{ref:N,style:E(E(E(E({position:"absolute",display:"flex"},c&&{transition:"transform ".concat(c,"ms ease 0s")}),{},{flexDirection:"horizontal"===n?"row":"column"},g&&"horizontal"===n&&{transform:"translateX(".concat(s,"px)")}),g&&"vertical"===n&&{transform:"translateY(".concat(f,"px)")}),t)}},itemPropsHandlers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.onClick;return E({key:t,ref:function(e){return e&&D(t,e)}},n?{onClick:n,tabindex:A(t)?0:-1,onKeyDown:function(e){"Enter"===e.key&&n()}}:{tabindex:-1})},updateCoordinates:I,moveItemInViewById:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).margin,r=void 0===t?0:t,o=j.current[e];if(o){var i=N.current,a=(i&&i.parentNode).getBoundingClientRect(),c=o.getBoundingClientRect();if("horizontal"===n){var l=a.width,s=a.left,u=c.width,d=c.left;s<=d&&s+l>=d+u||I(-(d-i.getBoundingClientRect().left)+r,void 0)}}},moveToDeltaSize:function(e){I(s+e,f+e)}}}({direction:"horizontal",width:c,height:l,transition:f,deltaScroll:u}),P=R.isStartControlActive,N=R.isEndControlActive,j=R.containerPropsHandlers,I=R.contentPropsHandlers,G=R.itemPropsHandlers,_=R.moveToDeltaSize,D=R.moveItemInViewById,A=t&&t.columns&&t.sectionId&&t.columns[t.sectionId]||t&&t.sectionId,k=(0,r.useRef)(null);return(0,r.useEffect)((function(){return k.current=y()((function(e){D(e,{margin:32})}),g),function(){k.current&&(k.current.cancel(),k.current=null)}}),[]),(0,r.useEffect)((function(){k.current&&(k.current.cancel(),k.current(A))}),[A]),o().createElement("div",b({},j(),{className:"ms-horizontal-menu"}),o().createElement("div",I(),n.map((function(e){var n=e.title,r=e.id,i=G({id:r,onClick:function(){t&&t.sectionId!==r&&a(r)}});return o().createElement("div",b({},i,{className:"ms-menu-item"}),o().createElement(w,{tabindex:"-1",id:r,text:n||"title",selected:r===A,style:T(r===A)}))}))),P&&o().createElement(h.Z,{className:"square-button-md no-border",style:{position:"absolute"},onClick:function(){return _(u)}},o().createElement(p.Glyphicon,{glyph:"chevron-left"})),N&&o().createElement(h.Z,{className:"square-button-md no-border",style:{position:"absolute",right:0},onClick:function(){return _(-u)}},o().createElement(p.Glyphicon,{glyph:"chevron-right"})))}));var P=n(45697),N=n.n(P),j=n(50966),I=n(5346),G=n(94745);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var D=["tooltipPosition"];function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Y(e,t){return(Y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?U(e):t}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Y(e,t)}(c,e);var t,n,r,i,a=(r=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=z(r);if(i){var n=z(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function c(){var e;k(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return M(U(e=a.call.apply(a,[this].concat(n))),"checkUnsavedChanges",(function(){e.props.renderUnsavedMapChangesDialog?e.props.onCheckMapChanges(e.goHome):(e.props.onCloseUnsavedDialog(),e.goHome())})),M(U(e),"goHome",(function(){e.context.router.history.push("/")})),e}return t=c,(n=[{key:"render",value:function(){var e=this.props,t=e.tooltipPosition,n=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,D),r=o().createElement(p.Tooltip,{id:"toolbar-home-button"},o().createElement(I.Z,{msgId:"gohome"}));return o().createElement(o().Fragment,null,o().createElement(j.Z,{overlay:r,placement:t},o().createElement(h.Z,A({id:"home-button",className:"square-button",bsStyle:"primary",onClick:this.checkUnsavedChanges,tooltip:r},n),this.props.icon)),o().createElement(G.Z,{ref:"unsavedMapModal",show:this.props.displayUnsavedDialog||!1,onClose:this.props.onCloseUnsavedDialog,title:o().createElement(I.Z,{msgId:"resources.maps.unsavedMapConfirmTitle"}),buttons:[{bsStyle:"primary",text:o().createElement(I.Z,{msgId:"resources.maps.unsavedMapConfirmButtonText"}),onClick:this.goHome},{text:o().createElement(I.Z,{msgId:"resources.maps.unsavedMapCancelButtonText"}),onClick:this.props.onCloseUnsavedDialog}],fitContent:!0},o().createElement("div",{className:"ms-detail-body"},o().createElement(I.Z,{msgId:"resources.maps.unsavedMapConfirmMessage"}))))}}])&&x(t.prototype,n),c}(o().Component);M(Z,"propTypes",{icon:N().node,onCheckMapChanges:N().func,onCloseUnsavedDialog:N().func,displayUnsavedDialog:N().bool,renderUnsavedMapChangesDialog:N().bool,tooltipPosition:N().string}),M(Z,"contextTypes",{router:N().object,messages:N().object}),M(Z,"defaultProps",{icon:o().createElement(p.Glyphicon,{glyph:"home"}),onCheckMapChanges:function(){},onCloseUnsavedDialog:function(){},renderUnsavedMapChangesDialog:!0,tooltipPosition:"left"});const B=Z;var F=n(11847),H=n(13218),q=n.n(H);function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){K(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function K(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const $=function(e){var t,n=e.settings,r=e.scrollTo,i=void 0===r?function(){}:r,a=e.navigableItems,c=void 0===a?[]:a,l=e.currentPage,s=void 0===l?{}:l,u=e.totalItems,d=void 0===u?1:u,p=e.currentPosition,m=void 0===p?0:p,y=e.router,v=e.buttons,g=void 0===v?[]:v,h=null==n||null===(t=n.theme)||void 0===t?void 0:t.general,b=q()(h)&&h||{},O=b.fontFamily,E=b.borderColor,S=b.color,C=b.backgroundColor,T=n||{},w=T.isTitleEnabled,P=T.isLogoEnabled,N=T.isNavbarEnabled,j=g.length>0,I=y&&y.pathname&&y.search&&"true"===(0,F.vl)(y.search).showHome&&y.pathname.includes("/geostory/shared"),G=N&&(null==c?void 0:c.length)>0,_=w||P||G||j||I;return o().createElement("div",{className:"ms-geostory-navigation-bar",style:W(W({color:S,backgroundColor:C},E&&{borderBottom:"1px solid ".concat(E)}),{},{fontFamily:O})},o().createElement("div",{className:"progress-bar",key:"progress-bar",style:{backgroundColor:E}},o().createElement("div",{className:"progress-percent",style:{width:"".concat((m+1)/d*100,"%"),backgroundColor:S}})),_&&o().createElement("div",{className:"ms-geostory-navigation-tools"},o().createElement("div",{className:"ms-geostory-navigation-toolbar"},o().createElement(f.Z,{buttons:g}),I&&o().createElement(B,{bsStyle:"default",className:"square-button-md no-border",tooltipPosition:"right",renderUnsavedMapChangesDialog:!1})),o().createElement("div",{className:"ms-geostory-navigation-elements"},G?o().createElement("div",{className:"ms-geostory-navigation-navigable-items"},o().createElement(R,{items:c,currentPage:s,scrollTo:i,getItemStyle:function(e){return e?{color:C,backgroundColor:S}:{outlineColor:S,borderColor:S}}})):null,o().createElement("div",{className:"ms-geostory-navigation-metadata"},w&&o().createElement("div",{className:"ms-geostory-navigation-title",style:{fontSize:n.storyTitleFontSize||"14px"}},n.storyTitle),P&&o().createElement("div",{className:"ms-geostory-navigation-logo"},o().createElement("img",{src:n.thumbnail&&(n.thumbnail.data||n.thumbnail.url)||"",height:32}))))))},Q=(0,c.rx)("GeoStoryNavigation",{component:(0,i.connect)((0,a.zB)({mode:s.eK,settings:s.TQ,currentPage:s.PR,currentPosition:s.u5,totalItems:s.CK,navigableItems:(0,s.w)({includeAlways:!1}),pathname:u.F,search:u.y}))((function(e){var t=e.mode,n=void 0===t?l.nl.VIEW:t,r=e.currentPage,i=e.currentPosition,a=e.totalItems,c=e.settings,s=e.navigableItems,u=void 0===s?[]:s,d=e.pathname,f=e.search,p=e.items,m=(void 0===p?[]:p).filter((function(e){return e.tool})).map((function(e){return{Element:e.tool}}));return n===l.nl.VIEW?o().createElement("div",{key:"geostory-navigation",className:"ms-geostory-navigation",style:{width:"100%",position:"relative"}},o().createElement($,{settings:c,currentPage:r,currentPosition:i,totalItems:a,scrollTo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{behavior:"smooth"};(0,l.M1)(e,t)},navigableItems:u,router:{pathname:d,search:f},buttons:m})):null})),reducers:{geostory:d.Z}})},66190:(e,t,n)=>{"use strict";n.d(t,{Z:()=>A});var r=n(27361),o=n.n(r),i=n(47037),a=n.n(i),c=n(81763),l=n.n(c),s=n(30998),u=n.n(s),d=n(13311),f=n.n(d),p=n(68630),m=n.n(p),y=n(1469),v=n.n(y),g=n(84596),h=n.n(g),b=n(19155),O=n.n(b),E=n(41609),S=n.n(E),C=n(61868),T=n(92579),w=n(34990);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e){return function(e){if(Array.isArray(e))return I(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var G=function(e,t){var n=e.length,r=0;return t||0===t||(r=n),a()(t)?r=u()(e,{id:t})+1:l()(t)&&(r=Math.min(t,e.length)),r},_=function e(t,n,r){var o=r.contents,i=r.background,a=r.id,c=r.resourceId,l=[],s=n+'{"id": "'.concat(a,'"}]');return c===t?[s]:(i&&i.resourceId===t&&l.push(s+".background"),o?o.reduce((function(n,r){return[].concat(j(n),j(e(t,s+".contents[",r)))}),l):l)},D={mode:"view",isCollapsed:!1,focusedContent:{},currentPage:{},settings:{},oldSettings:{},updateUrlOnScroll:!1};const A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w.D7:var n=t.id,r=t.path,i=t.position,c=t.element,l=(0,T.Ll)("currentStory.".concat(r),e),s=o()(e,l,[]),u=G(s,i),d=s.slice();return d.splice(u,0,P({id:n},c)),(0,C.t8)(l,d,e);case w.mN:var p=t.id,y=t.mediaType,g=t.data;return(0,C.t8)("currentStory.resources",O()([{id:p,type:y,data:g}].concat(j(e.currentStory&&e.currentStory.resources||[])),"id"),e);case w.vb:return(0,C.t8)("mode",t.mode,e);case w.QK:var b=t.id,E=t.mediaType,R=t.data,I=(0,C.cc)("currentStory.resources",{id:b,type:E,data:R},{id:b},e);return E===T.Tr.MAP&&e.currentStory.sections.filter((function(e){return e.type!==T.ID.CAROUSEL})).reduce((function(e,t){return[].concat(j(e),j(_(b,"sections[",t)))}),[]).map((function(t){var n=(0,T.Ll)("currentStory.".concat(t,".map"),e);I=(0,C.t8)(n,void 0,I)})),I;case w.Ro:var A=t.id,k=t.mediaType,x=(0,C.z6)("currentStory.resources",{id:A},e);return e.currentStory.sections.reduce((function(e,t){return[].concat(j(e),j(_(A,"sections[",t)))}),[]).map((function(t){var n=(0,T.Ll)("currentStory.".concat(t,".resourceId"),e);if(x=(0,C.zN)(n,x),k===T.Tr.MAP){var r=(0,T.Ll)("currentStory.".concat(t,".map"),e);x=(0,C.zN)(r,x)}})),x;case w.lX:return(0,C.t8)("loading"===t.name?"loading":"loadFlags.".concat(t.name),t.value,(0,C.t8)("loading",t.value,e));case w.Dq:var Y=t.path,L=(0,T.Ll)("currentStory.".concat(Y),e),U=j(L),z=U.pop(),M=o()(e,U);return v()(M)?(a()(z)&&(z=parseInt(z,10)),(0,C.t8)(U,[].concat(j(M.slice(0,z)),j(M.slice(z+1))),e)):(0,C.zN)(L,e);case w.ij:var Z,B,F,H,q,V=e.defaultSettings||{},W=t.story.settings||V,K=(null===(Z=W)||void 0===Z||null===(B=Z.theme)||void 0===B?void 0:B.fontFamilies)||[],$=null===(F=e.currentStory)||void 0===F||null===(H=F.settings)||void 0===H||null===(q=H.theme)||void 0===q?void 0:q.fontFamilies;return $&&$.length>0&&(W=(0,C.t8)("theme.fontFamilies",O()([].concat(j($),j(K)),"family"),W)),(0,C.t8)("currentStory",P(P({},t.story),{},{settings:W}),e);case w.i2:return(0,C.t8)("selectedCard",e.selectedCard===t.card?"":t.card,e);case w.IY:var Q=t.control,X=t.value;return(0,C.t8)("controls.".concat(Q),X,e);case w.Zf:var J=t.resource,ee=e.currentStory&&e.currentStory.settings||{};return(0,C.qC)((0,C.t8)("resource",J),(0,C.t8)("currentStory.settings.storyTitle",ee.storyTitle||J.name))(e);case w.si:case w.KT:return(0,C.zN)("errors.save",e);case w.SW:return(0,C.t8)("errors.save",h()(t.error),e);case w.Mk:return(0,C.t8)("isCollapsed",!e.isCollapsed,e);case w.NZ:var te=o()(e,"currentStory.settings.".concat(t.option));return(0,C.t8)("currentStory.settings.".concat(t.option),!te,e);case w.c:var ne=!e.isSettingsEnabled,re=e.currentStory&&e.currentStory.settings||{};return(0,C.qC)((0,C.t8)("isSettingsEnabled",ne),(0,C.t8)("oldSettings",ne?re:{}),(0,C.t8)("currentStory.settings",ne?P({},re):t.withSave?re:e.oldSettings))(e);case w.wb:var oe=t.path,ie=t.mode,ae=t.element,ce=(0,T.Ll)("currentStory.".concat(oe),e),le=o()(e,ce);return m()(le)&&m()(ae)&&"merge"===ie&&(ae=P(P({},le),ae)),v()(le)&&v()(ae)&&"merge"===ie&&(ae=[].concat(j(le),j(ae))),(0,C.t8)(ce,ae,e);case w.km:return(0,C.t8)("currentStory.settings.".concat(t.prop),t.value,e);case w.un:if(t.columnId){var se=f()(e.currentStory.sections,(function(e){return f()(e.contents,{id:t.columnId})}));return se&&f()(se.contents,{id:t.columnId})?(0,C.t8)("currentPage",P(P({},e.currentPage),{},{columns:P(P({},e.currentPage.columns),{},N({},se.id,t.columnId))}),e):e}return(0,C.t8)("currentPage",P(P({},e.currentPage),{},{sectionId:t.sectionId}),e);case w.Cx:var ue=t.status,de=t.target,fe=t.selector,pe=void 0===fe?"":fe,me=t.hideContent,ye=void 0!==me&&me,ve=t.path,ge=ue?{target:de,selector:pe,hideContent:ye,path:ve}:void 0;return(0,C.t8)("focusedContent",ge,e);case w.jr:return(0,C.t8)("pendingChanges",t.value,e);case w.ZY:return(0,C.t8)("updateUrlOnScroll",t.value,e);case w.EQ:return(0,C.t8)("mediaEditorSettings",t.mediaEditorSettings,e);case w.Ym:return(0,C.t8)("sideEffect",t.status,e);case w.iU:return(0,C.t8)("geoCarouselSettings",t.geoCarouselSettings,e);case w.W$:if(t.sectionId){var he=f()(e.currentStory.sections,(function(e){return f()(e.contents,{id:t.showContentId})}));return he&&f()(he.contents,{id:t.showContentId})?(0,C.t8)("currentStory",P(P({},e.currentStory),{},{sections:(0,T.eI)([],e.currentStory.sections,t,"content")}),e):e}return e;case w.OJ:if(t.sectionId){var be=e.currentStory.sections.filter((function(e){return e.type===T.ID.CAROUSEL})),Oe=e.currentStory||{},Ee=Oe.resources,Se=Oe.sections;return S()(be)?e:(0,C.t8)("currentStory",P(P({},e.currentStory),{},{sections:(0,T.eI)(Ee,Se,t)}),e)}return e;default:return e}}},24684:(e,t,n)=>{"use strict";n.d(t,{F:()=>i,y:()=>a});var r=n(27361),o=n.n(r),i=function(e){return o()(e,"router.location.pathname")||"/"},a=function(e){return o()(e,"router.location.search")||""}},74621:(e,t,n)=>{"use strict";n.d(t,{np:()=>r,L3:()=>o,jl:()=>i,y8:()=>a,qg:()=>c}),n(27418),n(27361);var r=function(e){return e&&e.security&&e.security.user},o=function(e){return r(e)&&r(e).role},i=function(e){return e&&e.security&&e.security.user},a=function(e){return e.security&&e.security.token},c=function(e){return"ADMIN"===o(e)}},11847:(e,t,n)=>{"use strict";n.d(t,{ij:()=>g,w0:()=>h,vl:()=>b,K2:()=>O,Nw:()=>E});var r=n(72500),o=n.n(r),i=n(1469),a=n.n(i),c=n(47037),l=n.n(c),s=n(18446),u=n.n(s),d=n(89734),f=n.n(d),p=n(13311),m=n.n(p),y=n(64210);function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var g=function(e){if(!e)return{};var t=!(0===e.indexOf("http")),n=t?[]:e.match(/([^:]*:)\/\/([^:]*:?[^@]*@)?([^:\/\?]*):?([^\/\?]*)/);if(t){var r=window.location;n[1]=r.protocol,n[3]=r.hostname,n[4]=r.port,n[5]=e}n[4]=""!==n[4]&&n[4]?n[4]:"https:"===n[1]?"443":"80",n[5]=n[5]?n[5]:e.slice(n[0].length);var o,i,a=(i=6,function(e){if(Array.isArray(e))return e}(o=n)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(o,i)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}(o,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=a[1],l=a[3],s=a[4],u=a[5],d=0===u.indexOf("/")?u.split("/")[1]:"";return{protocol:c,domain:l,port:s,rootPath:u,applicationRootPath:d}},h=function(e,t){var n=a()(e)?e[0]:e,r=a()(t)?t[0]:t;if(n===r)return!0;if(!n||!r)return!1;if(!l()(n)||!l()(r))return!1;var i=o().parse(n),c=o().parse(r),s=g(n),d=g(r),p=s.protocol===d.protocol,m=s.domain===d.domain,y=s.port===d.port,v=i.pathname===c.pathname,h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(e===t)return!0;if(!e&&!t)return!0;var n=e?e.split("&").filter((function(e){return!!e})):[],r=t?t.split("&").filter((function(e){return!!e})):[];return u()(f()(n),f()(r))}(i.query,c.query);return p&&y&&m&&v&&h},b=function(e){return y.Qc(e)},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:/^(http(s{0,1}):\/\/)+?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,n=new RegExp(t);return n.test(e)},E=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/^(http(s{0,1}):\/\/)+?[\w.\-{}]+(?:\.[\w\.-]+)+[\w\-\._~\/\;\.\%\:\&\=\?{}]+$/,r=new RegExp(n),o=r.test(e);if(!o)return!1;if(o&&!t)return!0;if(o&&t){var i=/\{(.*?)\}/.test(e);return 0===t.filter((function(e){return m()(i,e)})).length}return!1}}}]);