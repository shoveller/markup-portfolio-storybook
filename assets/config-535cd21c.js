var h=Object.defineProperty;var i=(e,t)=>h(e,"name",{value:t,configurable:!0});import{g as v,d as x}from"./iframe-22e0e4ce.js";var a=v.document,y=["application/javascript","application/ecmascript","application/x-ecmascript","application/x-javascript","text/ecmascript","text/javascript","text/javascript1.0","text/javascript1.1","text/javascript1.2","text/javascript1.3","text/javascript1.4","text/javascript1.5","text/jscript","text/livescript","text/x-ecmascript","text/x-javascript","module"],g="script",l="scripts-root";function d(){var e=a.createEvent("Event");e.initEvent("DOMContentLoaded",!0,!0),a.dispatchEvent(e)}i(d,"simulateDOMContentLoaded");function j(e,t,r){var n=a.createElement("script");n.type=e.type==="module"?"module":"text/javascript",e.src?(n.onload=t,n.onerror=t,n.src=e.src):n.textContent=e.innerText,r?r.appendChild(n):a.head.appendChild(n),e.parentNode.removeChild(e),e.src||t()}i(j,"insertScript");function u(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;e[r](function(){r++,r===e.length?t():u(e,t,r)})}i(u,"insertScriptsSequentially");function C(e){var t=a.getElementById(l);t?t.innerHTML="":(t=a.createElement("div"),t.id=l,a.body.appendChild(t));var r=Array.from(e.querySelectorAll(g));if(r.length){var n=[];r.forEach(function(s){var p=s.getAttribute("type");(!p||y.includes(p))&&n.push(function(c){return j(s,c,t)})}),n.length&&u(n,d,void 0)}else d()}i(C,"simulatePageLoad");var f;function M(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}i(M,"_taggedTemplateLiteral");var O=v.Node;function T(e,t){var r=e.storyFn,n=e.kind,s=e.name,p=e.showMain,c=e.showError,m=e.forceRemount,o=r();if(p(),typeof o=="string")t.innerHTML=o,C(t);else if(o instanceof O){if(t.firstChild===o&&m===!1)return;t.innerHTML="",t.appendChild(o),d()}else c({title:'Expecting an HTML snippet or DOM node from the story: "'.concat(s,'" of "').concat(n,'".'),description:x(f||(f=M([`
        Did you forget to return the HTML snippet from the story?
        Use "() => <your snippet or node>" or when defining the story.
      `])))})}i(T,"renderToDOM");var D={framework:"html"};export{D as parameters,T as renderToDOM};
//# sourceMappingURL=config-535cd21c.js.map