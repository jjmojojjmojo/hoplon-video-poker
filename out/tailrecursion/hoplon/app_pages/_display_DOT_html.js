// Compiled by ClojureScript 0.0-3196 {}
goog.provide('tailrecursion.hoplon.app_pages._display_DOT_html');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('tailrecursion.hoplon');
goog.require('video_poker.core');
tailrecursion.javelin.formula.call(null,(function (G__5972,G__5973){
return G__5972.call(null,G__5973.call(null));
})).call(null,cljs.core.prn,video_poker.core.deck);
tailrecursion.hoplon.html.call(null,tailrecursion.hoplon.head.call(null,tailrecursion.hoplon.title.call(null,"Hoplon Video Poker - Display All Cards In The Deck"),tailrecursion.hoplon.link.call(null,new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet",new cljs.core.Keyword(null,"href","href",-793805698),"css/style.css",new cljs.core.Keyword(null,"type","type",1174270348),"text/css")),tailrecursion.hoplon.body.call(null,tailrecursion.hoplon.h1.call(null,"Deck"),tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"hand",tailrecursion.hoplon.loop_tpl_STAR_.call(null,video_poker.core.deck.call(null),null,(function (item__5671__auto__){
var vec__5974 = tailrecursion.javelin.cell_map.call(null,cljs.core.identity,tailrecursion.javelin.formula.call(null,(function (p__5975){
var vec__5976 = p__5975;
var code = cljs.core.nth.call(null,vec__5976,(0),null);
var url = cljs.core.nth.call(null,vec__5976,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [code,url], null);
})).call(null,item__5671__auto__));
var code = cljs.core.nth.call(null,vec__5974,(0),null);
var url = cljs.core.nth.call(null,vec__5974,(1),null);
return tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"card",tailrecursion.hoplon.img.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),url));
})))));

//# sourceMappingURL=_display_DOT_html.js.map