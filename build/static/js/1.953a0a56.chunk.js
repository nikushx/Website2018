webpackJsonp([1],{133:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=(n.n(o),n(136)),i=n(137),c=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),u={padding:"10px"},p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={log:[]},e}return c(e,t),e.prototype.componentDidMount=function(){this.setState({log:this.state.log.concat(["please type /help for list of commands"])})},e.prototype.addToLog=function(t){""!==t&&this.setState({log:this.state.log.concat([t])})},e.prototype.render=function(){return o.createElement("div",{style:u},o.createElement(r.a,null,"Nikush Dalia"),o.createElement(r.a,null,"Web Developer, Entrepreneur, Creative"),o.createElement(r.a,null,"Welcome To My Portfolio Website"),o.createElement(r.a,null,"Built in React, Redux, Typescript"),this.state.log.map(function(t,e){return o.createElement(i.a,{key:e,cmd:t})}))},e}(o.Component);e.default=p},136:function(t,e,n){"use strict";var o=n(0),r=(n.n(o),this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}()),i={color:"#777"},c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.render=function(){return o.createElement("p",{style:i},this.props.children)},e}(o.Component);e.a=c},137:function(t,e,n){"use strict";var o=n(0),r=(n.n(o),this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}()),i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.render=function(){return o.createElement("p",null,"> ",this.props.cmd)},e}(o.Component);e.a=i}});
//# sourceMappingURL=1.953a0a56.chunk.js.map