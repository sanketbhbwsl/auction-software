!function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=2)}([function(t,e){t.exports=window.wp.element},function(t,e){t.exports=function(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e,o){"use strict";o.r(e);var n=o(1),i=o.n(n),c=o(0),a=wp.blocks.registerBlockType,__=(wp.components.Placeholder,wp.i18n.__);o(3).forEach((function(t){a("auction-software/"+t.registerBlockType,{title:__(t.title,"auction-software"),description:__(t.description,"auction-software"),icon:"flag",category:"auction-software",attributes:{title:{type:"text",default:t.attributesTitleDefault},num_of_auctions:{type:"text",default:5},hide_time_left:{type:"boolean",default:!1}},edit:function(e){var o=function(t,o){e.setAttributes(i()({},t,"hide_time_left"===t?o.target.checked:o.target.value))};return e.isSelected?Object(c.createElement)("div",{style:{padding:"10px"}},Object(c.createElement)("div",{style:{marginBottom:"10px"}},Object(c.createElement)("span",{style:{marginBottom:"5px",display:"block"}},__("Title:","auction-software")),Object(c.createElement)("input",{style:{width:"35%"},type:"text",value:e.attributes.title,onChange:function(t){o("title",t)}})),Object(c.createElement)("div",{style:{marginBottom:"10px"}},Object(c.createElement)("span",{style:{marginBottom:"5px",display:"block"}},__("Number of auctions to show:","auction-software")),Object(c.createElement)("input",{style:{width:"35%"},type:"number",value:e.attributes.num_of_auctions,onChange:function(t){o("num_of_auctions",t)}})),Object(c.createElement)("div",{style:{marginBottom:"10px"}},Object(c.createElement)("span",{style:{marginRight:"10px"}},__("Hide Time Left:","auction-software")),Object(c.createElement)("input",{type:"checkbox",checked:e.attributes.hide_time_left,onChange:function(t){o("hide_time_left",t)}}))):Object(c.createElement)("div",{style:{padding:"10px",border:"1px solid black"}},Object(c.createElement)("p",{style:{alignItems:"center"}},__(t.fallbackTitleIfNotSelected,"auction-software")))},save:function(){return null}})}))},function(t){t.exports=JSON.parse('[{"registerBlockType":"coming-soon-auctions","title":"Auction Software Coming Soon Auctions","description":"Shows the list of coming soon auctions","attributesTitleDefault":"Coming Soon Auctions","fallbackTitleIfNotSelected":"Auction Software Coming Soon Auctions Block","renderCallback":"auction_software_coming_soon_callback"},{"registerBlockType":"ending-soon-auctions","title":"Auction Software Ending Soon Auctions","description":"Shows the list of ending soon auctions","attributesTitleDefault":"Ending Soon Auctions","fallbackTitleIfNotSelected":"Auction Software Ending Soon Auctions Block","renderCallback":"auction_software_ending_soon_callback"},{"registerBlockType":"featured-auctions","title":"Auction Software Featured Auctions","description":"Shows the list of featured auctions","attributesTitleDefault":"Featured Auctions","fallbackTitleIfNotSelected":"Auction Software Featured Auctions Block","renderCallback":"auction_software_featured_auction_callback"},{"registerBlockType":"my-auctions","title":"Auction Software My Auctions","description":"Shows the list of My auctions","attributesTitleDefault":"My Auctions","fallbackTitleIfNotSelected":"Auction Software My Auctions Block","renderCallback":"auction_software_my_auction_callback"},{"registerBlockType":"random-auctions","title":"Auction Software Random Auctions","description":"Shows the list of Random auctions","attributesTitleDefault":"Random Auctions","fallbackTitleIfNotSelected":"Auction Software Random Auctions Block","renderCallback":"auction_software_random_auction_callback"},{"registerBlockType":"recent-auctions","title":"Auction Software Recent Auctions","description":"Shows the list of Recent auctions","attributesTitleDefault":"Recent Auctions","fallbackTitleIfNotSelected":"Auction Software Recent Auctions Block","renderCallback":"auction_software_recent_auction_callback"},{"registerBlockType":"recently-viewed-auctions","title":"Auction Software Recently Viewed Auctions","description":"Shows the list of Recently Viewed auctions","attributesTitleDefault":"Recently Viewed Auctions","fallbackTitleIfNotSelected":"Auction Software Recently Viewed Auctions Block","renderCallback":"auction_software_recently_viewed_auction_callback"},{"registerBlockType":"watchlist-auctions","title":"Auction Software Watchlist Auctions","description":"Shows the list of Watchlist auctions","attributesTitleDefault":"Watchlist Auctions","fallbackTitleIfNotSelected":"Auction Software Watchlist Auctions Block","renderCallback":"auction_software_watchlist_auction_callback"}]')}]);
