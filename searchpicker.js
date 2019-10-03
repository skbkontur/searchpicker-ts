!function(e){var t={};function i(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=2)}([function(e,t,i){"use strict";i.d(t,"a",function(){return s});var s=function(){function e(){}return e.wrapResultText=function(e,t){var i,s=[],n=new RegExp(t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),"i");if(t.length)if((i=e.search(n))<0)s.push(document.createTextNode(e));else{s.push(document.createTextNode(e.substr(0,i)));var o=document.createElement("em");o.appendChild(document.createTextNode(e.substr(0,i+t.length).substr(i))),s.push(o),s.push(document.createTextNode(e.substr(i+t.length)))}else s.push(document.createTextNode(e));return s},e.filterItems=function(t,i,s){i=e.ltrim(i);for(var n=new RegExp("^"+i.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),"i"),o=t.slice(0),r=[],c=0;c<o.length;c++){var h=o[c],l=h.title;if(s.searchInValues&&(l+=" "+h.id.replace(/^\w+\\/g,"")),n.test(h.title))r.push(h);else if(l.indexOf(" ")>=0||0===l.indexOf("[")||l.indexOf("\\")>=0){var a=l.replace(/[\[]/g,"").replace(/\\/g," ").split(" ");if(a.length)for(var u=0;u<a.length;u++){var p=a[u];if(n.test(p)){r.push(h);break}}}}return r},e.parseHtml=function(e){var t=document.createElement("div");return t.innerHTML=e,t.firstChild},e.hasClass=function(e,t){return e.classList?e.classList.contains(t):null!=e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))},e.getAttribute=function(e,t){var i=e.attributes[t];if(i)return i.value},e.htmlEncode=function(e){var t=document.createElement("div"),i=document.createTextNode(e);return t.appendChild(i),t.innerHTML},e.addClass=function(t,i){t.classList?t.classList.add(i):e.hasClass(t,i)||(t.className+=" "+i)},e.removeClass=function(t,i){if(e.hasClass(t,i)){if(t.classList)return void t.classList.remove(i);var s=new RegExp("(\\s|^)"+i+"(\\s|$)");t.className=t.className.replace(s," ")}},e.getCssPropertyValue=function(e,t){return(window.getComputedStyle?window.getComputedStyle(e,null):e.currentStyle).getPropertyValue(t)},e.isArray=function(e){return Array.isArray(e)},e.isString=function(e){return"string"==typeof e},e.trim=function(e){return String.prototype.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},e.ltrim=function(e){return e.replace(/^\s+/,"")},e.insertAfter=function(e,t){var i=t.parentNode,s=t.nextSibling;return s?i.insertBefore(e,s):i.appendChild(e)},e}()},function(e,t,i){"use strict";var s=function(){function e(){}return e.create=function(t,i){var s=new e;return s.title=i,s.id=t,s},e}(),n=i(0),o=function(){function e(){this.pickerItems=null,this.foundItems=[]}return e.prototype.search=function(e,t,i,s){var o=this;this.tmrId&&clearTimeout(this.tmrId),this.tmrId=setTimeout(function(){o.pickerItems||(o.pickerItems=function(e,t){for(var i=[],s=0;s<e.length;s++)i.push(t.pickerItemFactory(e[s]));return i}(t.source,t)),o.foundItems=n.a.filterItems(o.pickerItems,e,t),o.tmrId=null,i(o.foundItems)},50)},e}();i.d(t,"a",function(){return r});var r=function(){this.source=[],this.placeholder="",this.maxSelectedChoices=0,this.minLengthToSearch=1,this.searchInValues=!1,this.pickerItemFactory=function(e){return s.create(e.id,e.title)},this.resultRenderer=function(e,t){var i=document.createElement("a");i.setAttribute("href","#");for(var s=n.a.wrapResultText(e.title,t),o=0;o<s.length;o++)i.appendChild(s[o]);return i},this.noResultsRenderer=function(e){return document.createTextNode('No results found for "'+n.a.htmlEncode(e)+'"')},this.choiceRenderer=function(e,t){var i=document.createElement("span");if(i.appendChild(document.createTextNode(e.title)),t){var s=document.createElement("a");s.href="javascript: void(0);",s.className="search-choice-close",i.appendChild(s)}return i},this.searcher=new o,this.resultFooterRenderer=null}},function(e,t,i){"use strict";i.r(t);var s,n=i(1),o=function(){function e(){this.events={}}return e.prototype.$notifyEvent=function(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];if(this.events[e])for(var s=0;s<this.events[e].length;s++)this.events[e][s].apply(this,t)},e.prototype.on=function(e,t){this.events[e]||(this.events[e]=[]),this.events[e].push(t)},e}(),r=i(0),c=(s=function(e,t){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),h=function(e){function t(t,i,s){var n=e.call(this)||this;return n.container=t,n.options=i,n.selected=[],n.keepActive=!1,n.isActive=!1,n.pendingBackstroke=[],n.isMobile=s,n.sizerElm=document.getElementById("__srchpicker-sizer"),n.sizerElm&&(n.sizerElmText=n.sizerElm.childNodes[0]),n.setup(),n}return c(t,e),t.prototype.addChoice=function(e){var t=this.selected.push(e)-1;this.container.insertBefore(this.$renderChoice(e,t),this.inputJsElmWrap),this.inputElm.value="",this.scaleSearchField(),this.checkEmptiness()},t.prototype.removeChoice=function(e){for(var t=0;t<this.selected.length;t++)if(this.selected[t].id===e.id)return this.selected.splice(t,1),this.removeChoiceElement(e.id.toString()),this.scaleSearchField(),this.$notifyEvent("choiceRemoved",e),void this.checkEmptiness()},t.prototype.removeAll=function(){for(var e=this.selected.length,t=0;t<e;t++)this.removeChoice(this.selected[0])},t.prototype.getSearchText=function(){return this.inputElm.value},t.prototype.setSearchText=function(e){this.inputElm.value=e,this.checkEmptiness()},t.prototype.focus=function(){if(this.canSelectMoreChoices())this.onFocus(),this.inputElm.focus();else{var e=this.container.childNodes.length;if(e>1){var t=this.container.childNodes.item(e-2);t.focus(),t.click()}}},t.prototype.getHeight=function(){return this.container.offsetHeight},t.prototype.canSelectMoreChoices=function(){return!this.inputForbidden&&(this.options.maxSelectedChoices<=0||this.selected.length<this.options.maxSelectedChoices)},t.prototype.setAutocompleteText=function(e){if(this.shouldUpdateAutoComplete&&!this.isMobile){if(e&&this.inputElm.value.length){this.removeAutocompleteText();var t=this.inputElm.value.length,i=this.escapeRegexp(this.inputElm.value);0===e.toUpperCase().search(i.toUpperCase())?this.inputElm.value=e:this.inputElm.value+=" ("+e+")";var s=this.inputElm.value.length;this.inputElm.setSelectionRange(t,s)}this.scaleSearchField()}},t.prototype.removeAutocompleteText=function(){this.inputElm.selectionStart&&(this.inputElm.value=this.inputElm.value.substring(0,this.inputElm.selectionStart))},Object.defineProperty(t.prototype,"forbidInput",{set:function(e){e?(this.inputForbidden=!0,this.disableInput(!0)):(this.inputForbidden=!1,this.disableInput(!1))},enumerable:!0,configurable:!0}),t.prototype.escapeRegexp=function(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},t.prototype.setup=function(){this.applyTemplate(),this.bindEvents(),this.scaleSearchField()},t.prototype.scaleSearchField=function(){if(this.canSelectMoreChoices()){this.disableInput(!1);var e=this.selected.length>0?"":this.options.placeholder;this.inputElm.placeholder=e,this.ensureSizerElement(),this.sizerElmText.nodeValue=this.inputElm.value||e;var t=this.sizerElm.offsetWidth+20;this.inputElm.style.width=t+"px","block"!==this.inputElm.style.display&&(this.inputElm.style.display="block")}else this.disableInput(!0)},t.prototype.disableInput=function(e){e?(this.inputElm.style.display="none",this.keepActive=!1,this.onBlur()):this.inputElm.style.display="block"},t.prototype.ensureSizerElement=function(){if(!this.sizerElm){for(var e=document.createElement("div"),t="position:absolute; left: -1000px; top: -1000px;",i=["font-size","font-style","font-weight","font-family","line-height","text-transform","letter-spacing"],s=0;s<i.length;s++){var n=i[s];t+=n+":"+r.a.getCssPropertyValue(this.inputElm,n)+";"}e.id="__srchpicker-sizer",e.style.cssText=t,this.sizerElmText=document.createTextNode(""),e.appendChild(this.sizerElmText),document.body.appendChild(e),this.sizerElm=e}},t.prototype.bindEvents=function(){var e=this;this.container.onclick=function(){e.onClick()},this.inputElm.onblur=function(t){t.relatedTarget&&t.relatedTarget===e.container||document.activeElement===e.container?e.inputElm.focus():e.onBlur()},this.inputElm.onfocus=function(){e.onFocus()},this.inputElm.onkeyup=function(t){e.onKeyUp(t)},this.inputElm.oninput=function(t){document.activeElement===t.target&&e.onInput(t)},this.inputElm.onkeydown=function(t){e.onKeyDown(t)}},t.prototype.onClick=function(){this.onFocus(),this.canSelectMoreChoices()&&0==this.options.minLengthToSearch&&this.isActive&&(this.clearBackstroke(),this.$notifyEvent("search",this.getSearchText()))},t.prototype.onKeyUp=function(e){switch(e.keyCode){case 46:case 8:this.backstrokeLength<1&&this.selected.length>0?this.keydownBackstroke():!this.pendingBackstroke.length&&this.canSelectMoreChoices()&&this.clearHilightedChoice(),this.scaleSearchField();break;case 13:this.inputElm.value&&e.preventDefault(),this.$notifyEvent("enter",e);break;case 27:this.$notifyEvent("escape",e)}},t.prototype.onInput=function(e){this.shouldUpdateAutoComplete=this.prevInputTextLength<=this.inputElm.value.length,this.prevInputTextLength=this.inputElm.value.length,this.canSelectMoreChoices()&&(this.clearBackstroke(),this.scaleSearchField(),this.$notifyEvent("search",this.getSearchText())),this.checkEmptiness()},t.prototype.onKeyDown=function(e){switch(e.keyCode){case 46:case 8:this.backstrokeLength=this.inputElm.value.length;break;case 9:this.$notifyEvent("tab",e);break;case 13:case 16:case 17:this.inputElm.value&&e.preventDefault();break;case 38:e.preventDefault(),this.shouldUpdateAutoComplete=!0,this.$notifyEvent("arrowUp",e);break;case 40:e.preventDefault(),this.shouldUpdateAutoComplete=!0,this.$notifyEvent("arrowDown",e);break;case 35:case 36:case 37:case 39:this.inputElm.selectionStart!==this.inputElm.selectionEnd&&this.onInput(e);break;default:this.canSelectMoreChoices()?(this.scaleSearchField(),document.activeElement!==this.inputElm&&(this.inputElm.focus(),this.onFocus())):e.preventDefault()}},t.prototype.onRemoveChoiceClick=function(e){var t=r.a.getAttribute(e,"data-id"),i=this.getSelectedChoiceById(t);null!=i&&this.removeChoice(i)},t.prototype.clearHilightedChoice=function(){this.highlightedChoice&&(r.a.removeClass(this.highlightedChoice,"highlighted"),this.highlightedChoice=null)},t.prototype.clearBackstroke=function(){if(this.pendingBackstroke.length){for(var e=0,t=this.pendingBackstroke;e<t.length;e++){var i=t[e];r.a.removeClass(i,"search-choice-focus")}this.pendingBackstroke=[]}},t.prototype.keydownBackstroke=function(){if(this.pendingBackstroke.length){for(var e=0,t=this.pendingBackstroke;e<t.length;e++){var i=t[e],s=r.a.getAttribute(i,"data-id"),n=this.getSelectedChoiceById(s);null!=n&&this.removeChoice(n)}this.clearBackstroke()}else{for(var o=this.container.getElementsByTagName("li"),c=null,h=0;h<o.length;h++)r.a.hasClass(o[h],"search-choice")&&(c=o[h]);this.pendingBackstroke[0]=c,null!=this.pendingBackstroke[0]&&r.a.addClass(this.pendingBackstroke[0],"search-choice-focus")}},t.prototype.onBlur=function(){var e=this;this.inFocus=!1,this.isActive&&setTimeout(function(){e.keepActive||e.inFocus||(r.a.removeClass(e.container,"active"),e.isActive=!1,e.clearBackstroke(),e.$notifyEvent("blur"))},10)},t.prototype.onFocus=function(){var e=this;this.inFocus=!0,this.isActive||(r.a.addClass(this.container,"active"),this.isActive=!0,setTimeout(function(){e.inFocus&&(document.activeElement===e.inputElm||document.activeElement===e.container||e.canSelectMoreChoices()&&r.a.hasClass(document.activeElement,"search-choice"))&&e.$notifyEvent("focus")},10))},t.prototype.removeChoiceElement=function(e){for(var t=this.container.getElementsByTagName("li"),i=0;i<t.length;i++)if(r.a.hasClass(t[i],"search-choice")&&r.a.getAttribute(t[i],"data-id")===e)return void t[i].parentElement.removeChild(t[i])},t.prototype.applyTemplate=function(){r.a.addClass(this.container,"__empty"),this.inputJsElmWrap=document.createElement("li"),this.inputJsElmWrap.className="search-field",this.inputElm=document.createElement("input"),this.inputElm.type="text",this.inputElm.placeholder=this.options.placeholder,this.inputElm.autocomplete="off",this.inputJsElmWrap.appendChild(this.inputElm),this.container.appendChild(this.inputJsElmWrap)},t.prototype.$renderChoice=function(e,t){var i=this,s=document.createElement("li");return s.tabIndex=0,s.className="search-choice",s.setAttribute("data-id",e.id.toString()),1==this.options.maxSelectedChoices&&r.a.addClass(s,"sole-choice"),s.onclick=function(e){if(r.a.hasClass(e.target,"search-choice-close"))i.onRemoveChoiceClick(s);else{if(r.a.addClass(s,"search-choice-focus"),e.metaKey||e.ctrlKey)r.a.addClass(s,"search-choice-focus"),i.pendingBackstroke.push(s);else if(e.shiftKey)for(var t=0,n=i.getChoicesRange(s,i.pendingBackstroke[i.pendingBackstroke.length-1]);t<n.length;t++){var o=n[t];r.a.addClass(o,"search-choice-focus"),i.pendingBackstroke.push(o)}else i.pendingBackstroke.forEach(function(e){e!==s&&r.a.removeClass(e,"search-choice-focus")}),i.pendingBackstroke=[s];e.stopPropagation(),"none"!==i.inputElm.style.display&&i.inputElm.focus()}},s.onkeyup=function(e){i.onKeyUp(e)},s.onkeydown=function(e){i.onKeyDown(e)},s.onblur=function(e){i.onBlur()},s.onfocus=function(e){i.onFocus()},s.appendChild(this.options.choiceRenderer(e,1==this.options.maxSelectedChoices)),s},t.prototype.getSelectedChoiceById=function(e){for(var t=0;t<this.selected.length;t++)if(this.selected[t].id.toString()===e)return this.selected[t];return null},t.prototype.getChoicesRange=function(e,t){for(var i=[],s=!1,n=0,o=this.container.childNodes.item(0);n<this.container.childNodes.length;++n){if(o===e||o===t){if(i.push(o),!(s=!s))break}else s&&r.a.hasClass(o,"search-choice")&&i.push(o);o=o.nextSibling}return i},t.prototype.checkEmptiness=function(){""==this.inputElm.value&&0==this.selected.length?r.a.addClass(this.container,"__empty"):r.a.removeClass(this.container,"__empty")},t}(o),l=function(){var e=function(t,i){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(t,i)};return function(t,i){function s(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(s.prototype=i.prototype,new s)}}(),a=function(e){function t(t,i){var s=e.call(this)||this;return s.sourceElm=t,s.options=i,s.hideOnEmptyResults=!1,s.selectFirstOnDefault=!0,s.isShown=!1,s.trackSelectedItems=!0,s.items=[],s.itemsToHide=[],s.selectedObj={},s.lastSearchQuery=null,s.processSearchResponses=!0,s.setupHtml(),s.bindEvents(),s.highlightedIndex=s.getDefaultHighlightedIndex(),s}return l(t,e),t.prototype.hide=function(){this.isShown&&(this.dropdownElm.style.display="none",this.isShown=!1)},t.prototype.show=function(){this.isShown||(this.dropdownElm.style.display="block",this.isShown=!0,this.invalidateActiveResultByIndex())},t.prototype.search=function(e){this.lastSearchQuery!==e?this.searchInternal(e):this.hideOnEmptyResults&&0===this.items.length?this.hide():this.show()},t.prototype.repositionResults=function(){this.setTop(this.sourceElm.offsetHeight)},t.prototype.moveSelectedDown=function(){this.isShown&&(this.highlightedIndex++,this.highlightedIndex>this.items.length-1&&(this.highlightedIndex=this.items.length-1),this.invalidateActiveResultByIndex())},t.prototype.moveSelectedUp=function(){this.isShown&&(this.highlightedIndex--,this.highlightedIndex<=this.getDefaultHighlightedIndex()&&(this.highlightedIndex=this.getDefaultHighlightedIndex()),this.invalidateActiveResultByIndex())},t.prototype.selectHighlighted=function(e){if(this.highlightedEl){var t=r.a.getAttribute(this.highlightedEl,"data-id"),i=this.getItemById(t);null!=i&&this.$notifyEvent("resultSelected",i,this.lastSearchQuery,e,this.items.indexOf(i)+1,this.items.length),this.setProcessSearchResponses(!1)}},t.prototype.setTop=function(e){e<=0&&(e=0),this.dropdownElm.style.top=e+"px"},t.prototype.addSelectedResult=function(e){this.trackSelectedItems&&(this.selectedObj[e.id]||(this.selectedObj[e.id]=!0,this.invalidateSelectedResults(),this.clearHighlighted()))},t.prototype.removeSelectedResult=function(e){this.trackSelectedItems&&this.isSelected(e.id.toString())&&(delete this.selectedObj[e.id.toString()],this.invalidateSelectedResults())},t.prototype.updateOptions=function(e){this.options=e},t.prototype.addToBlacklist=function(e){var t;e&&(t=Array.isArray(e)?e:[e],this.itemsToHide=this.itemsToHide.concat(t),t.length&&this.invalidateSelectedResults())},t.prototype.removeFromBlacklist=function(e){var t;if(e&&(t=Array.isArray(e)?e:[e]).length){for(var i=0,s=t;i<s.length;i++)for(var n=s[i],o=this.itemsToHide.length-1;o>=0;o--)n.id===this.itemsToHide[o].id&&this.itemsToHide.splice(o,1);this.invalidateSelectedResults()}},t.prototype.getHighlighted=function(){if(this.highlightedEl){var e=this.getItemById(this.highlightedEl.getAttribute("data-id"));if(e)return e}},t.prototype.setProcessSearchResponses=function(e){this.processSearchResponses=e},t.prototype.isSelected=function(e){return void 0!==this.selectedObj[e]},t.prototype.searchInternal=function(e){var t=this;return this.lastSearchQuery=e,this.setProcessSearchResponses(!0),this.options.searcher.search(e,this.options,function(i,s){if(e===t.lastSearchQuery&&t.processSearchResponses){t.resultsElm.innerHTML="",t.items=i;var n=0;if(i.length)for(var o=0;o<i.length;o++)if(!(t.itemsToHide.indexOf(i[o])>-1||t.isSelected(i[o].id))){if(t.options.resultsLimit&&o>=t.options.resultsLimit)break;var r=t.$buildResult(i[o],e);null!=r&&(t.resultsElm.appendChild(r),n++)}if(t.clearHighlighted(),0==n){if(t.hideOnEmptyResults)return void t.hide();t.resultsElm.appendChild(t.$buildNoResults(e))}if(t.options.resultFooterRenderer){var c=t.$buildResultsFooter(e,i,s);null!=c&&t.resultsElm.appendChild(c)}t.$notifyEvent("afterSearch",e,i,n),t.show()}},function(e){t.resultsElm.innerHTML="",t.resultsElm.appendChild(t.$buildErrorResult(e))})},t.prototype.setupHtml=function(){this.dropdownElm=document.createElement("div"),this.dropdownElm.className="dropdown",r.a.insertAfter(this.dropdownElm,this.sourceElm),this.resultsElm=this.$template(),this.dropdownElm.style.left="0",this.dropdownElm.style.display="none",this.dropdownElm.appendChild(this.resultsElm)},t.prototype.bindEvents=function(){var e=this;this.dropdownElm.onclick=function(t){t.preventDefault(),t.stopPropagation();for(var i=t.target;null!=i&&!r.a.hasClass(i,"result");)i=i.parentElement;if(!i||r.a.hasClass(i,"disabled"))return!1;var s=r.a.getAttribute(i,"data-id"),n=e.getItemById(s);return null!=n&&e.$notifyEvent("resultSelected",n,e.lastSearchQuery,"click",e.items.indexOf(n)+1,e.items.length),!1}},t.prototype.$buildResult=function(e,t,i){var s=document.createElement("li");s.className="result";var n=e.id.toString();return s.setAttribute("data-id",n),this.isSelected(n)&&(s.className+=" disabled"),s.appendChild(this.options.resultRenderer(e,t)),s},t.prototype.$buildResultsFooter=function(e,t,i){var s=document.createElement("div");if(s.className="result-footer",this.options.resultFooterRenderer){var n=this.options.resultFooterRenderer(e,t,i);if(!n)return null;s.appendChild(n)}return s},t.prototype.clearHighlighted=function(){this.highlightedIndex=this.getDefaultHighlightedIndex(),this.invalidateActiveResultByIndex()},t.prototype.$buildNoResults=function(e){var t=document.createElement("li");return t.className="no-results",t.appendChild(this.options.noResultsRenderer(e)),t},t.prototype.$buildErrorResult=function(e){var t=document.createElement("li");return t.className="no-results",t.appendChild(document.createTextNode(e)),t},t.prototype.$template=function(){var e=document.createElement("ul");return e.className="dropdown-menu",e},t.prototype.getItemById=function(e){for(var t=0;t<this.items.length;t++)if(this.items[t].id.toString()===e)return this.items[t];return null},t.prototype.invalidateSelectedResults=function(){var e=this;this.$foreachResult(function(t){var i=r.a.getAttribute(t,"data-id");return e.isSelected(i)||e.itemsToHide.some(function(e){return e.id===i})?(r.a.removeClass(t,"highlighted"),r.a.addClass(t,"disabled")):r.a.removeClass(t,"disabled"),!0})},t.prototype.invalidateActiveResultByIndex=function(){var e=this,t=!1,i=!1,s=0,n=this.highlightedEl?this.highlightedEl.getAttribute("data-id"):-1;this.highlightedEl=null,this.$foreachResult(function(n){return!(!r.a.hasClass(n,"disabled")&&!r.a.hasClass(n,"no-results"))||(i||s!==e.highlightedIndex?!t&&r.a.hasClass(n,"highlighted")&&(r.a.removeClass(n,"highlighted"),t=!0):(e.highlightedEl=n,i=!0),(!i||!t)&&(s++,!0))});var o=this.highlightedEl?this.highlightedEl.getAttribute("data-id"):-1;this.$notifyEvent("highlight",{item:o?this.getItemById(o):void 0,hasChanged:n!==o}),this.repositionResults(),this.highlightedEl&&(r.a.addClass(this.highlightedEl,"highlighted"),this.invalidateActiveResultVisible(this.highlightedEl))},t.prototype.invalidateActiveResult=function(){var e=this;if(this.highlightedEl){var t=!1,i=!1,s=0;this.$foreachResult(function(n){return!!r.a.hasClass(n,"disabled")||(i||e.highlightedEl!==n?!t&&r.a.hasClass(n,"highlighted")&&(r.a.removeClass(n,"highlighted"),t=!0):(e.highlightedIndex=s,i=!0),(!i||!t)&&(s++,!0))}),r.a.addClass(this.highlightedEl,"highlighted")}},t.prototype.$foreachResult=function(e){for(var t=this.resultsElm.childNodes,i=0;i<t.length&&e(t[i]);i++);},t.prototype.invalidateActiveResultVisible=function(e){var t=this.resultsElm,i=parseInt(r.a.getCssPropertyValue(t,"maxHeight")||"190px",10),s=t.scrollTop,n=i+s,o=e.offsetTop+e.offsetHeight;o>=n?t.scrollTop=s+(o-n):e.offsetTop<s&&(t.scrollTop=e.offsetTop)},t.prototype.getDefaultHighlightedIndex=function(){return this.selectFirstOnDefault?0:-1},t}(o),u=function(){var e=function(t,i){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(t,i)};return function(t,i){function s(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(s.prototype=i.prototype,new s)}}(),p=function(e){function t(t,i){var s=e.call(this)||this;return s.container=t,s.pickerItems=[],s.searchTmrId=null,s.isMobile=!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)),s.options=s.extendOptions(new n.a,i),s.setupHtml(),s.bindEvents(),s}return u(t,e),t.prototype.getChoices=function(){return this.choices.selected},t.prototype.clearChoices=function(){this.choices.removeAll()},t.prototype.addChoice=function(e){this.choices.addChoice(e),this.results.addSelectedResult(e)},t.prototype.removeChoice=function(e){this.choices.removeChoice(e),this.results.removeSelectedResult(e)},t.prototype.updateSource=function(e){this.options.source=e,this.results.updateOptions(this.options)},t.prototype.focus=function(){this.choices.focus()},t.prototype.allowInput=function(){this.choices.forbidInput=!1},t.prototype.forbidInput=function(){this.choices.forbidInput=!0},t.prototype.setupHtml=function(){r.a.addClass(this.container,"container"),this.applyTemplate(),this.choices=new h(this.choicesElm,this.options,this.isMobile),this.results=new a(this.choicesElm,this.options)},t.prototype.bindEvents=function(){var e=this;this.container.onclick=function(){return e.onClick()},this.container.onmouseleave=function(){e.choices.keepActive=!1},this.container.onmouseenter=function(){e.choices.keepActive=!0},this.choices.on("search",function(t){e.onSearch(t)}),this.choices.on("blur",function(){e.inFocus=!1,e.results.setProcessSearchResponses(!1),e.results.hide()}),this.choices.on("focus",function(){return e.onChoiceFocus()}),this.choices.on("escape",function(){e.onEscape()}),this.choices.on("tab",function(t){e.choices.keepActive=!1,e.onSelect(t,"tab")}),this.choices.on("enter",function(t){e.onSelect(t,"enter")}),this.choices.on("arrowDown",function(){return e.results.moveSelectedDown()}),this.choices.on("arrowUp",function(){return e.results.moveSelectedUp()}),this.choices.on("choiceRemoved",function(t){return e.onChoiceRemoved(t)}),this.results.on("resultSelected",function(t,i,s,n,o){return e.onResultSelected(t,i,s,n,o)}),this.results.on("highlight",function(t){var i=t.item;t.changed;i&&e.choices.setAutocompleteText(i.title)})},t.prototype.onSearch=function(e){e.length<this.options.minLengthToSearch||!this.choices.canSelectMoreChoices()?(this.results.hide(),this.results.setProcessSearchResponses(!1)):this.inFocus&&(this.results.search(e),this.results.setProcessSearchResponses(!0))},t.prototype.onChoiceRemoved=function(e){this.results.removeSelectedResult(e),this.$notifyEvent("choiceRemoved",e),this.results.setTop(this.choices.getHeight()),this.choices.selected.length||this.onChoiceFocus()},t.prototype.onChoiceFocus=function(){this.inFocus=!0,this.onSearch(this.choices.getSearchText())},t.prototype.onClick=function(){this.choices.focus()},t.prototype.onEscape=function(){this.results.hide()},t.prototype.onSelect=function(e,t){this.results.isShown&&(e.preventDefault(),this.results.selectHighlighted(t))},t.prototype.onResultSelected=function(e,t,i,s,n){this.choices.addChoice(e),this.results.hide(),this.results.addSelectedResult(e),this.results.setTop(this.choices.getHeight()),this.$notifyEvent("choiceAdded",e,t,i,s,n)},t.prototype.applyTemplate=function(){this.choicesElm=document.createElement("ul"),this.choicesElm.className="choices form-control",1===this.options.maxSelectedChoices&&r.a.addClass(this.choicesElm,"sole-choice"),this.container.appendChild(this.choicesElm)},t.prototype.extendOptions=function(e,t){var i={};for(var s in t)i[s]=t[s];for(var s in e)void 0===t[s]&&(i[s]=e[s]);return i},t}(o);i.d(t,"DefaultSearchPickerOptions",function(){return n.a}),i.d(t,"EventObject",function(){return o}),i.d(t,"SearchPicker",function(){return p}),i.d(t,"SearchPickerChoices",function(){return h}),i.d(t,"SearchPickerResults",function(){return a}),i.d(t,"Utility",function(){return r.a})}]);
//# sourceMappingURL=searchpicker.js.map