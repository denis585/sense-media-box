define(["jquery","underscore","angular","./properties","./initialproperties","./lib/js/extensionUtils","text!./lib/partials/qsMediaBox.ng.html","text!./lib/css/style.css","./lib/directives/qsMbImage/qsMbImage","./lib/directives/qsMbVideo/qsMbVideo","./lib/directives/qsMbWebsite/qsMbWebsite","./lib/directives/qsMbHtml/qsMbHtml"],function($,_,angular,props,initProps,extensionUtils,ngTemplate,cssContent){"use strict";return extensionUtils.addStyleToHeader(cssContent),{definition:props,initialProperties:initProps,snapshot:{canTakeSnapshot:!0},template:ngTemplate,controller:["$scope",function(){angular.noop()}]}});