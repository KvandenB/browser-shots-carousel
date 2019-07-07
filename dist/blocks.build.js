!function(e){function t(r){if(s[r])return s[r].exports;var n=s[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var s={};t.m=e,t.c=s,t.d=function(e,s,r){t.o(e,s)||Object.defineProperty(e,s,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s(1)},function(e,t,s){"use strict";var r=s(2),n=(s.n(r),s(3)),l=(s.n(n),s(4)),__=wp.i18n.__;(0,wp.blocks.registerBlockType)("browser-shots/browser-shots-carousel",{title:__("Browser Shots Carousel","browser-shots-carousel"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},wp.element.createElement("g",{"fill-rule":"evenodd"},wp.element.createElement("path",{d:"M18,5 L4,5 L4,19 L2,19 L2,5 C2,3.8954305 2.8954305,3 4,3 L18,3 L18,5 Z"}),wp.element.createElement("path",{"fill-rule":"nonzero",d:"M10,9 L11,7 L17,7 L18,9 L20,9 C21.1045695,9 22,9.8954305 22,11 L22,19 C22,20.1045695 21.1045695,21 20,21 L8,21 C6.8954305,21 6,20.1045695 6,19 L6,11 C6,9.8954305 6.8954305,9 8,9 L10,9 Z M12,9 L11,11 L8,11 L8,19 L20,19 L20,11 L17,11 L16,9 L12,9 Z"}),wp.element.createElement("path",{"fill-rule":"nonzero",d:"M14,18 C15.6568542,18 17,16.6568542 17,15 C17,13.3431458 15.6568542,12 14,12 C12.3431458,12 11,13.3431458 11,15 C11,16.6568542 12.3431458,18 14,18 Z M14,16 C13.4477153,16 13,15.5522847 13,15 C13,14.4477153 13.4477153,14 14,14 C14.5522847,14 15,14.4477153 15,15 C15,15.5522847 14.5522847,16 14,16 Z"}))),category:"embed",keywords:[__("Browser Shots","browser-shots-carousel"),__("website","browser-shots-carousel"),__("screenshot","browser-shots-carousel")],supports:{align:["left","center","right"]},edit:l.a,save:function(){return null}})},function(e,t){},function(e,t){},function(e,t,s){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,s=Array(e.length);t<e.length;t++)s[t]=e[t];return s}return Array.from(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=s(5),a=s.n(i),c=function(){function e(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,s,r){return s&&e(t.prototype,s),r&&e(t,r),t}}(),u=wp.element,p=u.Component,m=u.Fragment,h=wp.i18n,__=h.__,_x=h._x,w=wp.components,b=w.PanelBody,d=w.SelectControl,f=w.TextControl,v=(w.TextareaControl,w.Toolbar),g=w.ToggleControl,E=w.Button,C=w.ButtonGroup,y=w.PanelRow,k=(w.ExternalLink,wp.editor),L=k.InspectorControls,S=k.BlockControls,_=wp.blockEditor.RichText,x=function(e){function t(){n(this,t);var e=l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.refresh=function(){var t=parseInt(e.state.version)+1;e.setState({version:t})},e.showSlides=function(){return e.state.slides.map(function(t,s){return wp.element.createElement("div",{key:s},wp.element.createElement("div",{className:"browser-shots-carousel-input-row",style:{position:"relative"}},wp.element.createElement("div",null,wp.element.createElement("label",null,__("Image Url","browser-shots-carousel"),wp.element.createElement("br",null),wp.element.createElement("input",{type:"text",value:void 0!=e.props.attributes.slides[s]?e.props.attributes.slides[s].title:"",placeholder:"http://",onChange:e.handleChange.bind(e,s)}))),wp.element.createElement("div",null,wp.element.createElement("label",null,__("Link Url (Optional)","browser-shots-carousel"),wp.element.createElement("br",null),wp.element.createElement("input",{type:"text",value:void 0!=e.props.attributes.slides[s]?e.props.attributes.slides[s].link:"",placeholder:"http://",onChange:e.handleLinkChange.bind(e,s)}))),wp.element.createElement("div",null,wp.element.createElement("label",null,__("Image Caption","browser-shots-carousel")),wp.element.createElement("br",null),wp.element.createElement(_,{tagName:"div",className:"wp-caption-text",placeholder:__("Write caption...","browser-shots"),value:void 0!=e.props.attributes.slides[s]?e.props.attributes.slides[s].caption:"",onChange:e.handleCaptionChange.bind(e,s)})),wp.element.createElement("div",{className:"browser-shots-carousel-remove"},wp.element.createElement("input",{type:"button",value:__("Remove","browser-shots-carousel"),onClick:e.removeClick.bind(e,s)}))))})},e.addClick=function(){e.setState(function(e){return{slides:[].concat(r(e.slides),[""])}})},e.handleCaptionChange=function(t,s){if(void 0!=s){var n=[].concat(r(e.state.slides));0!=n.length&&(n[t]={link:n[t].link||"",caption:s||"",title:n[t].title||""},e.props.setAttributes({slides:n}),e.setState({slides:n}))}},e.handleChange=function(t,s){if(void 0!=s){var n=[].concat(r(e.state.slides));0!=n.length&&(n[t]={link:n[t].link||"",title:s.target.value||"",caption:n[t].caption||""},e.props.setAttributes({slides:n}),e.setState({slides:n}))}},e.handleLinkChange=function(t,s){if(void 0!=s){var n=[].concat(r(e.state.slides));0!=n.length&&(n[t]={link:s.target.value,title:n[t].title||"",caption:n[t].caption||""},e.props.setAttributes({slides:n}),e.setState({slides:n}))}},e.createPreviewImage=function(){var t=e.props.attributes,s=t.width,r=t.height;return t.slides.map(function(t,n){return wp.element.createElement("img",{src:"https://s0.wordpress.com/mshots/v1/"+encodeURI(e.state.slides[n].title)+"?w="+s+"&h="+r+"&version="+e.state.version,alt:""+e.props.attributes.alt,width:""+s,height:""+r,title:e.state.slides[n].caption,key:n})})},e.state={slides:e.props.attributes.slides||[""],directionNav:e.props.attributes.directionNav,controlNav:e.props.attributes.controlNav,lightbox:e.props.attributes.lightbox,welcome:!0,version:"1",width:e.props.attributes.width,height:e.props.attributes.height,link:e.props.attributes.link,target:e.props.attributes.target,rel:e.props.attributes.rel,image_class:e.props.attributes.image_class,image_size:e.props.attributes.image_size,display_link:"undefined"===typeof e.props.attributes.display_link||e.props.attributes.display_link},e.props.attributes.slides=e.state.slides,e}return o(t,e),c(t,[{key:"removeClick",value:function(e){var t=[].concat(r(this.state.slides));t.splice(e,1),this.props.setAttributes({slides:t}),this.setState({slides:t})}},{key:"render",value:function(){var e=this,t=this.props.attributes,s=t.effect,r=(t.directionNav,t.controlNav,t.lightbox,t.theme),n=t.width,l=t.height,o=(t.alt,t.link,t.target),i=t.rel,c=t.image_size,u=(t.content,t.display_link,t.post_links,__("None","browser-shots"),__("No Follow","browser-shots"),[{value:"default",label:__("Default","browser-shots-carousel")},{value:"bar",label:__("Bar","browser-shots-carousel")},{value:"dark",label:__("Dark","browser-shots-carousel")},{value:"light",label:__("Light","browser-shots-carousel")}]),p=[{value:"sliceDown",label:__("Slide Down","browser-shots-carousel")},{value:"sliceDownLeft",label:__("Slide Down Left","browser-shots-carousel")},{value:"sliceUp",label:__("Slice Up","browser-shots-carousel")},{value:"sliceUpLeft",label:__("Slice Up Left","browser-shots-carousel")},{value:"sliceUpDown",label:__("Slice Up Down","browser-shots-carousel")},{value:"sliceUpDownLeft",label:__("Slice Up Down Left","browser-shots-carousel")},{value:"fold",label:__("Fold","browser-shots-carousel")},{value:"fade",label:__("Fade","browser-shots-carousel")},{value:"random",label:__("Random","browser-shots-carousel")},{value:"slideInRight",label:__("Slide In Right","browser-shots-carousel")},{value:"slideInLeft",label:__("Slide In Left","browser-shots-carousel")},{value:"boxRandom",label:__("Box Random","browser-shots-carousel")},{value:"boxRain",label:__("Box Rain","browser-shots-carousel")},{value:"boxRainGrow",label:__("Box Rain Grow","browser-shots-carousel")},{value:"boxRainGrowReverse",label:__("Box Rain Grow Reverse","browser-shots-carousel")}],h=[{icon:"edit",title:__("Edit URL","browser-shots"),onClick:function(){return e.setState({welcome:!0})}},{icon:"update",title:__("Refresh Image","browser-shots"),onClick:function(t){return e.refresh()}}],w=wp.element.createElement(L,null,wp.element.createElement(b,{title:__("Browser Shots Settings","browser-shots")},wp.element.createElement("p",null,__("Image Dimensions","browser-shots")),wp.element.createElement(y,{className:"browser-shots-dimensions"},wp.element.createElement(f,{type:"number",label:__("Width","browser-shots"),value:n,min:100,max:1280,onChange:function(t){t>1280&&(t=1280),e.props.setAttributes({width:t,image_size:"custom"})}}),wp.element.createElement(f,{type:"number",label:__("Height","browser-shots"),value:l,min:100,max:960,onChange:function(t){t>960&&(t=960),e.props.setAttributes({height:t,image_size:"custom"})}})),wp.element.createElement(y,{className:"browser-shots-dimensions-options"},wp.element.createElement(C,null,wp.element.createElement(E,{isDefault:!0,isPrimary:"small"==c,onClick:function(t){e.props.setAttributes({width:320,height:240,image_size:"small"})}},_x("S","Small Image Size","browser-shots")),wp.element.createElement(E,{isDefault:!0,isPrimary:"medium"==c,onClick:function(t){e.props.setAttributes({width:640,height:480,image_size:"medium"})}},_x("M","Medium Image Size","browser-shots")),wp.element.createElement(E,{isDefault:!0,isPrimary:"large"==c,onClick:function(t){e.props.setAttributes({width:960,height:720,image_size:"large"})}},_x("L","Large Image Size","browser-shots")),wp.element.createElement(E,{isDefault:!0,isPrimary:"full"==c,onClick:function(t){e.props.setAttributes({width:1280,height:960,image_size:"full"})}},_x("XL","Extra Large Image Size","browser-shots"))),wp.element.createElement(E,{isDefault:!0,onClick:function(t){e.props.setAttributes({width:600,height:450,image_size:"medium"})}},_x("Reset","Reset Image Size to Default","browser-shots"))),wp.element.createElement(E,{onClick:function(t){e.refresh()},isDefault:!0},__("Refresh Image","browser-shots"))),wp.element.createElement(b,{title:__("Slider Settings","browser-shots"),initialOpen:!1},wp.element.createElement("p",null,wp.element.createElement("em",null,__("This is previewed using the default theme with bullets and navigation available. You can change these on the front-end by adjusting your slider settings.","browser-shots-carousel"))),wp.element.createElement(d,{label:__("Theme","wp-plugin-info-card"),options:u,value:r,onChange:function(t){e.props.setAttributes({theme:t}),e.props.attributes.theme=t,e.setState({theme:t})}}),wp.element.createElement(d,{label:__("Effect","wp-plugin-info-card"),options:p,value:s,onChange:function(t){e.props.setAttributes({effect:t}),e.props.attributes.effect=t,e.setState({effect:t})}}),wp.element.createElement(g,{label:__("Allow Next/Prev Nav","browser-shots"),onChange:function(t){e.props.setAttributes({directionNav:t}),e.setState({directionNav:t})},checked:this.state.directionNav}),wp.element.createElement(g,{label:__("Allow Bullets","browser-shots"),onChange:function(t){e.props.setAttributes({controlNav:t}),e.setState({controlNav:t})},checked:this.state.controlNav}),wp.element.createElement(g,{label:__("Pop images in a lightbox","browser-shots"),onChange:function(t){e.props.setAttributes({lightbox:t}),e.setState({lightbox:t})},checked:this.state.lightbox})),wp.element.createElement(b,{title:__("Link Settings","browser-shots"),initialOpen:!1},wp.element.createElement(g,{label:__("Use link","browser-shots"),onChange:function(t){e.props.setAttributes({display_link:t}),e.setState({display_link:t})},checked:this.state.display_link}),this.state.display_link&&wp.element.createElement(m,null,wp.element.createElement(g,{label:__("Open in New Tab","browser-shots"),onChange:function(t){var s=t?"_blank":"none";e.props.setAttributes({target:s})},checked:"_blank"===o}),wp.element.createElement(g,{label:__("Set Nofollow","browser-shots"),onChange:function(t){var s=t?"nofollow":"";e.props.setAttributes({rel:s})},checked:"nofollow"===i}))));return wp.element.createElement(m,null,this.state.welcome&&wp.element.createElement("div",{className:"browsershots-block-carousel"},wp.element.createElement("div",{className:"browsershots-svg"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 24 24"},wp.element.createElement("g",{fill:"none","fill-rule":"evenodd"},wp.element.createElement("path",{fill:"#000000",d:"M18,5 L4,5 L4,19 C2.8954305,19 2,18.1045695 2,17 L2,5 C2,3.8954305 2.8954305,3 4,3 L16,3 C17.1045695,3 18,3.8954305 18,5 Z"}),wp.element.createElement("path",{stroke:"#000000","stroke-width":"2",d:"M16.6666667,8 L11.3333333,8 L10.5,10 L8,10 C7.44771525,10 7,10.4477153 7,11 L7,19 C7,19.5522847 7.44771525,20 8,20 L20,20 C20.5522847,20 21,19.5522847 21,19 L21,11 C21,10.4477153 20.5522847,10 20,10 L17.5,10 L16.6666667,8 Z"}),wp.element.createElement("circle",{cx:"14",cy:"15",r:"2",stroke:"#000000","stroke-width":"2"})))),this.showSlides(),wp.element.createElement("div",{className:"browser-shots-carousel-actions"},wp.element.createElement("a",{href:"#",title:__("Add Slide","browser-shots-carousel"),className:"add-slide",onClick:function(t){t.preventDefault(),e.addClick()}},wp.element.createElement("span",{className:"dashicons dashicons-plus"})),wp.element.createElement("input",{type:"submit",id:"browsershots-input-preview",value:__("Preview","browser-shots-carousel"),onClick:function(t){e.setState({welcome:!1})}}))),!this.state.welcome&&wp.element.createElement(m,null,w,wp.element.createElement(S,null,wp.element.createElement(v,{controls:h})),wp.element.createElement("div",{className:"browser-shots-gutenberg-wrapper",style:{overflow:"hidden",maxWidth:"100%"}},wp.element.createElement("div",{className:"section slideshow"},wp.element.createElement("div",{className:"slider-wrapper theme-default"},wp.element.createElement("div",{className:"ribbon"}),wp.element.createElement("div",{id:"bsc-slideshow",className:"nivoSlider"},this.createPreviewImage(),a()(browser_shots_nivo.location,function(){})))))))}}]),t}(p);t.a=x},function(e,t,s){var r,n,l;!function(s,o){n=[],r=o,void 0!==(l="function"===typeof r?r.apply(t,n):r)&&(e.exports=l)}(0,function(){function e(e,t){e=e.push?e:[e];var s,r,n,l,o=[],i=e.length,u=i;for(s=function(e,s){s.length&&o.push(e),--u||t(o)};i--;)r=e[i],n=a[r],n?s(r,n):(l=c[r]=c[r]||[],l.push(s))}function t(e,t){if(e){var s=c[e];if(a[e]=t,s)for(;s.length;)s[0](e,t),s.splice(0,1)}}function s(e,t){e.call&&(e={success:e}),t.length?(e.error||o)(t):(e.success||o)(e)}function r(e,t,s,n){var l,i,a=document,c=s.async,u=(s.numRetries||0)+1,p=s.before||o,m=e.replace(/^(css|img)!/,"");n=n||0,/(^css!|\.css$)/.test(e)?(i=a.createElement("link"),i.rel="stylesheet",i.href=m,(l="hideFocus"in i)&&i.relList&&(l=0,i.rel="preload",i.as="style")):/(^img!|\.(png|gif|jpg|svg)$)/.test(e)?(i=a.createElement("img"),i.src=m):(i=a.createElement("script"),i.src=e,i.async=void 0===c||c),i.onload=i.onerror=i.onbeforeload=function(o){var a=o.type[0];if(l)try{i.sheet.cssText.length||(a="e")}catch(e){18!=e.code&&(a="e")}if("e"==a){if((n+=1)<u)return r(e,t,s,n)}else if("preload"==i.rel&&"style"==i.as)return i.rel="stylesheet";t(e,a,o.defaultPrevented)},!1!==p(e,i)&&a.head.appendChild(i)}function n(e,t,s){e=e.push?e:[e];var n,l,o=e.length,i=o,a=[];for(n=function(e,s,r){if("e"==s&&a.push(e),"b"==s){if(!r)return;a.push(e)}--o||t(a)},l=0;l<i;l++)r(e[l],n,s)}function l(e,r,l){function o(r,l){n(e,function(e){s(c,e),r&&s({success:r,error:l},e),t(a,e)},c)}var a,c;if(r&&r.trim&&(a=r),c=(a?l:r)||{},a){if(a in i)throw"LoadJS";i[a]=!0}if(c.returnPromise)return new Promise(o);o()}var o=function(){},i={},a={},c={};return l.ready=function(t,r){return e(t,function(e){s(r,e)}),l},l.done=function(e){t(e,[])},l.reset=function(){i={},a={},c={}},l.isDefined=function(e){return e in i},l})}]);