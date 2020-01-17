!function(e){function t(l){if(s[l])return s[l].exports;var r=s[l]={i:l,l:!1,exports:{}};return e[l].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var s={};t.m=e,t.c=s,t.d=function(e,s,l){t.o(e,s)||Object.defineProperty(e,s,{configurable:!1,enumerable:!0,get:l})},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s(1)},function(e,t,s){"use strict";var l=s(2),r=(s.n(l),s(3)),n=(s.n(r),s(4)),__=wp.i18n.__,o=["full"];(0,wp.blocks.registerBlockType)("browser-shots/browser-shots-carousel",{title:__("Browser Shots Carousel","browser-shots-carousel"),icon:wp.element.createElement("svg",{width:"72",height:"72",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("rect",{width:"24",height:"24",fill:"none",rx:"0",ry:"0"}),wp.element.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M19.4003 5.6001H4.60034V14.4001H19.4003V5.6001Z",fill:"#ffffff"}),wp.element.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.50015 3.3999H20.5001C21.1101 3.3999 21.6001 3.8899 21.6001 4.4999V15.4999C21.6001 16.1099 21.1101 16.5999 20.5001 16.5999H14.0002V19.3999H17.0001C17.3301 19.3999 17.6001 19.6699 17.6001 19.9999C17.6001 20.3299 17.3301 20.5999 17.0001 20.5999H7.00015C6.67015 20.5999 6.40015 20.3299 6.40015 19.9999C6.40015 19.6699 6.67015 19.3999 7.00015 19.3999H10.0002V16.5999H3.50015C2.89015 16.5999 2.40015 16.1099 2.40015 15.4999V4.4999C2.40015 3.8899 2.89015 3.3999 3.50015 3.3999ZM3.60015 15.3999H20.4001V4.5999H3.60015V15.3999Z",fill:"#000000"}),wp.element.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M17.0001 19.3999H7.00015C6.67015 19.3999 6.40015 19.6699 6.40015 19.9999C6.40015 20.3299 6.67015 20.5999 7.00015 20.5999H17.0001C17.3301 20.5999 17.6001 20.3299 17.6001 19.9999C17.6001 19.6699 17.3301 19.3999 17.0001 19.3999Z",fill:"black","fill-opacity":"0.2"})),category:"embed",keywords:[__("Browser Shots","browser-shots-carousel"),__("website","browser-shots-carousel"),__("screenshot","browser-shots-carousel"),__("slide","browser-shots-carousel")],getEditWrapperProps:function(e){var t=e.align;if(-1!==o.indexOf(t))return{"data-align":t}},edit:n.a,save:function(){return null}})},function(e,t){},function(e,t){},function(e,t,s){"use strict";function l(e){if(Array.isArray(e)){for(var t=0,s=Array(e.length);t<e.length;t++)s[t]=e[t];return s}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=s(5),a=s.n(i),c=function(){function e(e,t){for(var s=0;s<t.length;s++){var l=t[s];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,s,l){return s&&e(t.prototype,s),l&&e(t,l),t}}(),u=wp.element,p=u.Component,m=u.Fragment,h=wp.i18n,__=h.__,_x=h._x,w=wp.components,d=w.PanelBody,b=w.SelectControl,f=w.TextControl,v=(w.TextareaControl,w.Toolbar),g=w.ToggleControl,E=w.Button,C=w.ButtonGroup,y=w.PanelRow,k=(w.ExternalLink,wp.editor),S=k.InspectorControls,x=k.BlockControls,_=wp.blockEditor.RichText,N=function(e){function t(){r(this,t);var e=n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.refresh=function(){var t=parseInt(e.state.version)+1;e.setState({version:t})},e.showSlides=function(){return e.state.slides.map(function(t,s){return wp.element.createElement("div",{key:s},wp.element.createElement("div",{className:"browser-shots-carousel-input-row",style:{position:"relative"}},wp.element.createElement("div",null,wp.element.createElement("label",null,__("URL to Preview","browser-shots-carousel"),wp.element.createElement("br",null),wp.element.createElement("input",{type:"text",value:void 0!=e.props.attributes.slides[s]?e.props.attributes.slides[s].title:"",placeholder:"https://",onChange:e.handleChange.bind(e,s)}))),wp.element.createElement("div",null,wp.element.createElement("label",null,__("Slide URL (Optional)","browser-shots-carousel"),wp.element.createElement("br",null),wp.element.createElement("input",{type:"text",value:void 0!=e.props.attributes.slides[s]?e.props.attributes.slides[s].link:"",placeholder:"https://",onChange:e.handleLinkChange.bind(e,s)}))),wp.element.createElement("div",null,wp.element.createElement("label",null,__("Image Caption","browser-shots-carousel")),wp.element.createElement("br",null),wp.element.createElement(_,{tagName:"div",className:"wp-caption-text",placeholder:__("Write caption...","browser-shots"),value:void 0!=e.props.attributes.slides[s]?e.props.attributes.slides[s].caption:"",onChange:e.handleCaptionChange.bind(e,s)})),wp.element.createElement("div",{className:"browser-shots-carousel-remove"},wp.element.createElement("button",{class:"button button-link-delete",value:__("Remove","browser-shots-carousel"),onClick:e.removeClick.bind(e,s)},__("Remove Slide","browser-shots-carousel")),wp.element.createElement("button",{class:"button button-secondary",value:__("Preview","browser-shots-carousel"),onClick:function(t){e.refresh.bind(e,s),e.previewImage(s)}},__("Preview Image","browser-shots-carousel")))))})},e.addClick=function(){e.setState(function(e){return{slides:[].concat(l(e.slides),[""])}})},e.handleCaptionChange=function(t,s){if(void 0!=s){var r=[].concat(l(e.state.slides));0!=r.length&&(r[t]={link:r[t].link||"",caption:s||"",title:r[t].title||""},e.props.setAttributes({slides:r}),e.setState({slides:r}))}},e.handleChange=function(t,s){if(void 0!=s){var r=[].concat(l(e.state.slides));0!=r.length&&(r[t]={link:r[t].link||"",title:s.target.value||"",caption:r[t].caption||""},e.props.setAttributes({slides:r}),e.setState({slides:r}))}},e.handleLinkChange=function(t,s){if(void 0!=s){var r=[].concat(l(e.state.slides));0!=r.length&&(r[t]={link:s.target.value,title:r[t].title||"",caption:r[t].caption||""},e.props.setAttributes({slides:r}),e.setState({slides:r}))}},e.createPreviewImage=function(){var t=e.props.attributes,s=t.width,l=t.height;return t.slides.map(function(t,r){return wp.element.createElement("img",{src:"https://s0.wordpress.com/mshots/v1/"+encodeURI(e.state.slides[r].title)+"?w="+s+"&h="+l+"&version="+e.state.version,alt:""+e.props.attributes.alt,width:""+s,height:""+l,title:e.state.slides[r].caption,key:r})})},e.previewImage=function(t){e.setState({preview:!0,previewSlide:t})},e.state={slides:e.props.attributes.slides||[""],directionNav:e.props.attributes.directionNav,controlNav:e.props.attributes.controlNav,lightbox:e.props.attributes.lightbox,align:e.props.attributes.align,welcome:!0,version:"1",width:e.props.attributes.width,height:e.props.attributes.height,link:e.props.attributes.link,target:e.props.attributes.target,rel:e.props.attributes.rel,image_class:e.props.attributes.image_class,image_size:e.props.attributes.image_size,display_link:"undefined"===typeof e.props.attributes.display_link||e.props.attributes.display_link,preview:!1,previewSlide:0},e.props.attributes.slides=e.state.slides,e}return o(t,e),c(t,[{key:"removeClick",value:function(e){var t=[].concat(l(this.state.slides));t.splice(e,1),this.props.setAttributes({slides:t}),this.setState({slides:t})}},{key:"render",value:function(){var e=this,t=this.props.attributes,s=t.effect,l=t.align,r=(t.directionNav,t.controlNav,t.lightbox,t.theme),n=t.width,o=t.height,i=(t.alt,t.link,t.target),c=t.rel,u=t.image_size,p=(t.content,t.display_link,t.post_links,__("None","browser-shots"),__("No Follow","browser-shots"),[{value:"default",label:__("Default","browser-shots-carousel")},{value:"bar",label:__("Bar","browser-shots-carousel")},{value:"dark",label:__("Dark","browser-shots-carousel")},{value:"light",label:__("Light","browser-shots-carousel")}]),h=[{value:"sliceDown",label:__("Slide Down","browser-shots-carousel")},{value:"sliceDownLeft",label:__("Slide Down Left","browser-shots-carousel")},{value:"sliceUp",label:__("Slice Up","browser-shots-carousel")},{value:"sliceUpLeft",label:__("Slice Up Left","browser-shots-carousel")},{value:"sliceUpDown",label:__("Slice Up Down","browser-shots-carousel")},{value:"sliceUpDownLeft",label:__("Slice Up Down Left","browser-shots-carousel")},{value:"fold",label:__("Fold","browser-shots-carousel")},{value:"fade",label:__("Fade","browser-shots-carousel")},{value:"random",label:__("Random","browser-shots-carousel")},{value:"slideInRight",label:__("Slide In Right","browser-shots-carousel")},{value:"slideInLeft",label:__("Slide In Left","browser-shots-carousel")},{value:"boxRandom",label:__("Box Random","browser-shots-carousel")},{value:"boxRain",label:__("Box Rain","browser-shots-carousel")},{value:"boxRainGrow",label:__("Box Rain Grow","browser-shots-carousel")},{value:"boxRainGrowReverse",label:__("Box Rain Grow Reverse","browser-shots-carousel")}],w=[{value:"left",label:__("Align Left","browser-shots-carousel")},{value:"center",label:__("Align Center","browser-shots-carousel")},{value:"right",label:__("Align Right","browser-shots-carousel")}],k=[{icon:"edit",title:__("Edit URL","browser-shots"),onClick:function(){return e.setState({welcome:!0,preview:!1})}},{icon:"update",title:__("Refresh Image","browser-shots"),onClick:function(t){return e.refresh()}}],_=wp.element.createElement(S,null,wp.element.createElement(d,{title:__("Browser Shots Settings","browser-shots")},this.state.preview&&wp.element.createElement(E,{className:"button button-secondary",onClick:function(t){e.setState({welcome:!0,preview:!1})}},_x("Close Preview","Close preview image button text","browser-shots")),!this.state.welcome&&wp.element.createElement(E,{className:"button button-secondary",onClick:function(t){e.setState({welcome:!0,preview:!1})}},_x("Close Preview","Close preview image button text","browser-shots")),wp.element.createElement("p",null,__("Image Dimensions","browser-shots")),wp.element.createElement(y,{className:"browser-shots-dimensions"},wp.element.createElement(f,{type:"number",label:__("Width","browser-shots"),value:n,min:100,max:1280,onChange:function(t){t>1280&&(t=1280),e.props.setAttributes({width:t,image_size:"custom"})}}),wp.element.createElement(f,{type:"number",label:__("Height","browser-shots"),value:o,min:100,max:960,onChange:function(t){t>960&&(t=960),e.props.setAttributes({height:t,image_size:"custom"})}})),wp.element.createElement(y,{className:"browser-shots-dimensions-options"},wp.element.createElement(C,null,wp.element.createElement(E,{isDefault:!0,isPrimary:"small"==u,onClick:function(t){e.props.setAttributes({width:320,height:240,image_size:"small"})}},_x("S","Small Image Size","browser-shots")),wp.element.createElement(E,{isDefault:!0,isPrimary:"medium"==u,onClick:function(t){e.props.setAttributes({width:640,height:480,image_size:"medium"})}},_x("M","Medium Image Size","browser-shots")),wp.element.createElement(E,{isDefault:!0,isPrimary:"large"==u,onClick:function(t){e.props.setAttributes({width:960,height:720,image_size:"large"})}},_x("L","Large Image Size","browser-shots")),wp.element.createElement(E,{isDefault:!0,isPrimary:"full"==u,onClick:function(t){e.props.setAttributes({width:1280,height:960,image_size:"full"})}},_x("XL","Extra Large Image Size","browser-shots"))),wp.element.createElement(E,{isDefault:!0,onClick:function(t){e.props.setAttributes({width:600,height:450,image_size:"medium"})}},_x("Reset","Reset Image Size to Default","browser-shots"))),wp.element.createElement(E,{onClick:function(t){e.refresh()},isDefault:!0},__("Refresh Image","browser-shots"))),wp.element.createElement(d,{title:__("Slider Settings","browser-shots"),initialOpen:!1},wp.element.createElement("p",null,wp.element.createElement("em",null,__("This is previewed using the default theme with bullets and navigation available. You can change these on the front-end by adjusting your slider settings.","browser-shots-carousel"))),wp.element.createElement(b,{label:__("Theme","wp-plugin-info-card"),options:p,value:r,onChange:function(t){e.props.setAttributes({theme:t}),e.props.attributes.theme=t,e.setState({theme:t})}}),wp.element.createElement(b,{label:__("Effect","wp-plugin-info-card"),options:h,value:s,onChange:function(t){e.props.setAttributes({effect:t}),e.props.attributes.effect=t,e.setState({effect:t})}}),wp.element.createElement(b,{label:__("Align","wp-plugin-info-card"),options:w,value:l,onChange:function(t){e.props.setAttributes({align:t}),e.props.attributes.align=t,e.setState({align:t})}}),wp.element.createElement(g,{label:__("Allow Next/Prev Nav","browser-shots"),onChange:function(t){e.props.setAttributes({directionNav:t}),e.setState({directionNav:t})},checked:this.state.directionNav}),wp.element.createElement(g,{label:__("Allow Bullets","browser-shots"),onChange:function(t){e.props.setAttributes({controlNav:t}),e.setState({controlNav:t})},checked:this.state.controlNav}),wp.element.createElement(g,{label:__("Pop images in a lightbox","browser-shots"),onChange:function(t){e.props.setAttributes({lightbox:t}),e.setState({lightbox:t})},checked:this.state.lightbox})),wp.element.createElement(d,{title:__("Link Settings","browser-shots"),initialOpen:!1},wp.element.createElement(g,{label:__("Use link","browser-shots"),onChange:function(t){e.props.setAttributes({display_link:t}),e.setState({display_link:t})},checked:this.state.display_link}),this.state.display_link&&wp.element.createElement(m,null,wp.element.createElement(g,{label:__("Open in New Tab","browser-shots"),onChange:function(t){var s=t?"_blank":"none";e.props.setAttributes({target:s})},checked:"_blank"===i}),wp.element.createElement(g,{label:__("Set Nofollow","browser-shots"),onChange:function(t){var s=t?"nofollow":"";e.props.setAttributes({rel:s})},checked:"nofollow"===c}))));return wp.element.createElement(m,null,this.state.preview&&wp.element.createElement(m,null,wp.element.createElement(x,null,wp.element.createElement(v,{controls:k})),_,wp.element.createElement("div",{style:{backgroundImage:"url(https://s0.wordpress.com/mshots/v1/"+encodeURI(this.state.slides[this.state.previewSlide].title)+"?w="+n+"&h="+o+"&version="+this.state.version+")",backgroundSize:"cover",width:"100%",minHeight:"100vh"}},wp.element.createElement("button",{class:"button button-primary",value:__("Close Preview","browser-shots-carousel"),onClick:function(t){e.setState({welcome:!0,preview:!1})}},__("Close Preview","browser-shots-carousel")))),this.state.welcome&&!this.state.preview&&wp.element.createElement(m,null,_,wp.element.createElement("div",{className:"browsershots-block-carousel"},wp.element.createElement("div",{className:"browsershots-svg"},wp.element.createElement("svg",{width:"72",height:"72",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("rect",{width:"24",height:"24",fill:"none",rx:"0",ry:"0"}),wp.element.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M19.4003 5.6001H4.60034V14.4001H19.4003V5.6001Z",fill:"#ffffff"}),wp.element.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.50015 3.3999H20.5001C21.1101 3.3999 21.6001 3.8899 21.6001 4.4999V15.4999C21.6001 16.1099 21.1101 16.5999 20.5001 16.5999H14.0002V19.3999H17.0001C17.3301 19.3999 17.6001 19.6699 17.6001 19.9999C17.6001 20.3299 17.3301 20.5999 17.0001 20.5999H7.00015C6.67015 20.5999 6.40015 20.3299 6.40015 19.9999C6.40015 19.6699 6.67015 19.3999 7.00015 19.3999H10.0002V16.5999H3.50015C2.89015 16.5999 2.40015 16.1099 2.40015 15.4999V4.4999C2.40015 3.8899 2.89015 3.3999 3.50015 3.3999ZM3.60015 15.3999H20.4001V4.5999H3.60015V15.3999Z",fill:"#000000"}),wp.element.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M17.0001 19.3999H7.00015C6.67015 19.3999 6.40015 19.6699 6.40015 19.9999C6.40015 20.3299 6.67015 20.5999 7.00015 20.5999H17.0001C17.3301 20.5999 17.6001 20.3299 17.6001 19.9999C17.6001 19.6699 17.3301 19.3999 17.0001 19.3999Z",fill:"black","fill-opacity":"0.2"})),wp.element.createElement("h4",null,__("Browser Shots Carousel","browser-shots-carousel"))),this.showSlides(),wp.element.createElement("div",{className:"browser-shots-carousel-actions"},wp.element.createElement("a",{href:"#",title:__("Add Slide","browser-shots-carousel"),className:"add-slide",onClick:function(t){t.preventDefault(),e.addClick()}},wp.element.createElement("span",{className:"dashicons dashicons-plus"})),wp.element.createElement("br",null),wp.element.createElement("button",{class:"button button-primary",id:"browsershots-input-preview",onClick:function(t){e.setState({welcome:!1})}},__("Preview Slideshow","browser-shots-carousel"))))),!this.state.welcome&&wp.element.createElement(m,null,_,wp.element.createElement(x,null,wp.element.createElement(v,{controls:k})),wp.element.createElement("div",{className:"browser-shots-gutenberg-wrapper",style:{overflow:"hidden",maxWidth:"100%"}},wp.element.createElement("div",{className:"section slideshow"},wp.element.createElement("div",{className:"slider-wrapper theme-default"},wp.element.createElement("div",{className:"ribbon"}),wp.element.createElement("div",{id:"bsc-slideshow",className:"nivoSlider"},this.createPreviewImage(),a()(browser_shots_nivo.location,function(){})))))))}}]),t}(p);t.a=N},function(e,t,s){var l,r,n;!function(s,o){r=[],l=o,void 0!==(n="function"===typeof l?l.apply(t,r):l)&&(e.exports=n)}(0,function(){function e(e,t){e=e.push?e:[e];var s,l,r,n,o=[],i=e.length,u=i;for(s=function(e,s){s.length&&o.push(e),--u||t(o)};i--;)l=e[i],r=a[l],r?s(l,r):(n=c[l]=c[l]||[],n.push(s))}function t(e,t){if(e){var s=c[e];if(a[e]=t,s)for(;s.length;)s[0](e,t),s.splice(0,1)}}function s(e,t){e.call&&(e={success:e}),t.length?(e.error||o)(t):(e.success||o)(e)}function l(e,t,s,r){var n,i,a=document,c=s.async,u=(s.numRetries||0)+1,p=s.before||o,m=e.replace(/^(css|img)!/,"");r=r||0,/(^css!|\.css$)/.test(e)?(i=a.createElement("link"),i.rel="stylesheet",i.href=m,(n="hideFocus"in i)&&i.relList&&(n=0,i.rel="preload",i.as="style")):/(^img!|\.(png|gif|jpg|svg)$)/.test(e)?(i=a.createElement("img"),i.src=m):(i=a.createElement("script"),i.src=e,i.async=void 0===c||c),i.onload=i.onerror=i.onbeforeload=function(o){var a=o.type[0];if(n)try{i.sheet.cssText.length||(a="e")}catch(e){18!=e.code&&(a="e")}if("e"==a){if((r+=1)<u)return l(e,t,s,r)}else if("preload"==i.rel&&"style"==i.as)return i.rel="stylesheet";t(e,a,o.defaultPrevented)},!1!==p(e,i)&&a.head.appendChild(i)}function r(e,t,s){e=e.push?e:[e];var r,n,o=e.length,i=o,a=[];for(r=function(e,s,l){if("e"==s&&a.push(e),"b"==s){if(!l)return;a.push(e)}--o||t(a)},n=0;n<i;n++)l(e[n],r,s)}function n(e,l,n){function o(l,n){r(e,function(e){s(c,e),l&&s({success:l,error:n},e),t(a,e)},c)}var a,c;if(l&&l.trim&&(a=l),c=(a?n:l)||{},a){if(a in i)throw"LoadJS";i[a]=!0}if(c.returnPromise)return new Promise(o);o()}var o=function(){},i={},a={},c={};return n.ready=function(t,l){return e(t,function(e){s(l,e)}),n},n.done=function(e){t(e,[])},n.reset=function(){i={},a={},c={}},n.isDefined=function(e){return e in i},n})}]);