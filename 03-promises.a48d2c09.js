!function(){function e(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()<.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();for(var t=parseInt(document.querySelector("input[name='delay']").value),o=parseInt(document.querySelector("input[name='step']").value),c=parseInt(document.querySelector("input[name='amount']").value),a=0;a<c;a++)e(a,t+o).then((function(e){console.log("Promise ".concat(e.position," resolved with delay ").concat(e.delay))})).catch((function(e){console.log("Promise ".concat(e.position," rejected with delay ").concat(e.delay))}))}))}();
//# sourceMappingURL=03-promises.a48d2c09.js.map
