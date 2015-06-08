// Compiled by ClojureScript 0.0-3196 {}
goog.provide('tailrecursion.hoplon.app_pages._scoringtest_DOT_html');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('tailrecursion.hoplon');
goog.require('video_poker.core');
/**
 * Deal a hand, then reset the deck
 */
tailrecursion.hoplon.app_pages._scoringtest_DOT_html.deal_and_reset = (function tailrecursion$hoplon$app_pages$_scoringtest_DOT_html$deal_and_reset(){
var argseq__5207__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return tailrecursion.hoplon.app_pages._scoringtest_DOT_html.deal_and_reset.cljs$core$IFn$_invoke$arity$variadic(argseq__5207__auto__);
});

tailrecursion.hoplon.app_pages._scoringtest_DOT_html.deal_and_reset.cljs$core$IFn$_invoke$arity$variadic = (function (p__6893){
var map__6894 = p__6893;
var map__6894__$1 = ((cljs.core.seq_QMARK_.call(null,map__6894))?cljs.core.apply.call(null,cljs.core.hash_map,map__6894):map__6894);
var fixed = cljs.core.get.call(null,map__6894__$1,new cljs.core.Keyword(null,"fixed","fixed",-562004358));
var hand = video_poker.core.deal_hand.call(null,new cljs.core.Keyword(null,"fixed","fixed",-562004358),fixed);
video_poker.core.reset_deck.call(null);

return hand;
});

tailrecursion.hoplon.app_pages._scoringtest_DOT_html.deal_and_reset.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.app_pages._scoringtest_DOT_html.deal_and_reset.cljs$lang$applyTo = (function (seq6892){
return tailrecursion.hoplon.app_pages._scoringtest_DOT_html.deal_and_reset.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6892));
});
tailrecursion.hoplon.app_pages._scoringtest_DOT_html.hands = tailrecursion.javelin.cell.call(null,cljs.core.PersistentHashMap.fromArrays(["Straight - middle","Straight - ace high","Full house","Three of a kind","Straight flush, ace low","High Card - Bug shows up as straight","Flush","Royal flush","Straight flush, middle","Pair","Four of a kind","Straight - ace low","Two pair"],[tailrecursion.hoplon.app_pages._scoringtest_DOT_html.deal_and_reset.call(null,new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["S3","D4","C5","H6","D7"], null)),tailrecursion.hoplon.app_pages._scoringtest_DOT_html.deal_and_reset.call(null,new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SA","DJ","C10","HQ","DK"], null)),tailrecursion.hoplon.app_pages._scoringtest_DOT_html.deal_and_reset.call(null,new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SQ","D10","C10","HQ","DQ"], null)),tailrecursion.hoplon.app_pages._scoringtest_DOT_html.deal_and_reset.call(null,new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["S10","D10","C10","HQ","D2"], null)),tailrecursion.hoplon.app_pages._scoringtest_DOT_html.deal_and_reset.call(null,new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SA","S2","S3","S4","S5"], null)),tailrecursion.hoplon.app_pages._scoringtest_DOT_html.deal_and_reset.call(null,new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["HA","HK","SQ","DJ","D6"], null)),tailrecursion.hoplon.app_pages._scoringtest_DOT_html.deal_and_reset.call(null,new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["S3","S10","SJ","SQ","S2"], null)),tailrecursion.hoplon.app_pages._scoringtest_DOT_html.deal_and_reset.call(null,new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["HA","HJ","H10","HQ","HK"], null)),tailrecursion.hoplon.app_pages._scoringtest_DOT_html.deal_and_reset.call(null,new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["D4","D6","D8","D5","D7"], null)),tailrecursion.hoplon.app_pages._scoringtest_DOT_html.deal_and_reset.call(null,new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["S3","D10","C10","HQ","D2"], null)),tailrecursion.hoplon.app_pages._scoringtest_DOT_html.deal_and_reset.call(null,new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["S10","D10","C10","H10","D2"], null)),tailrecursion.hoplon.app_pages._scoringtest_DOT_html.deal_and_reset.call(null,new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SA","D2","C3","H4","D5"], null)),tailrecursion.hoplon.app_pages._scoringtest_DOT_html.deal_and_reset.call(null,new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["S3","D10","C10","HQ","DQ"], null))]));
tailrecursion.hoplon.html.call(null,tailrecursion.hoplon.head.call(null,tailrecursion.hoplon.title.call(null,"Hoplon Video Poker - Hand Scoring Test"),tailrecursion.hoplon.link.call(null,new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet",new cljs.core.Keyword(null,"href","href",-793805698),"css/style.css",new cljs.core.Keyword(null,"type","type",1174270348),"text/css")),tailrecursion.hoplon.body.call(null,tailrecursion.hoplon.h1.call(null,"Video Poker Testing!"),tailrecursion.hoplon.div.call(null,tailrecursion.hoplon.loop_tpl_STAR_.call(null,tailrecursion.hoplon.app_pages._scoringtest_DOT_html.hands,null,(function (item__5671__auto__){
var vec__6895 = tailrecursion.javelin.cell_map.call(null,cljs.core.identity,tailrecursion.javelin.formula.call(null,(function (p__6896){
var vec__6897 = p__6896;
var expected = cljs.core.nth.call(null,vec__6897,(0),null);
var hand = cljs.core.nth.call(null,vec__6897,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expected,hand], null);
})).call(null,item__5671__auto__));
var expected = cljs.core.nth.call(null,vec__6895,(0),null);
var hand = cljs.core.nth.call(null,vec__6895,(1),null);
var score = video_poker.core.read_hand.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,hand)));
cljs.core.prn.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,hand)));

return tailrecursion.hoplon.div.call(null,tailrecursion.hoplon.h1.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),expected),tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"hand",tailrecursion.hoplon.div.call(null,tailrecursion.hoplon.span.call(null,"Hand: "),tailrecursion.hoplon.span.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),tailrecursion.javelin.formula.call(null,((function (score,vec__6895,expected,hand){
return (function (G__6898,G__6899){
return G__6898.call(null,G__6899);
});})(score,vec__6895,expected,hand))
).call(null,cljs.core.first,score))),tailrecursion.hoplon.div.call(null,tailrecursion.hoplon.span.call(null,"Score: "),tailrecursion.hoplon.span.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),tailrecursion.javelin.formula.call(null,((function (score,vec__6895,expected,hand){
return (function (G__6900,G__6901){
return G__6900.call(null,G__6901);
});})(score,vec__6895,expected,hand))
).call(null,cljs.core.second,score))),tailrecursion.hoplon.div.call(null,tailrecursion.hoplon.span.call(null,"Cards involved:"),tailrecursion.hoplon.span.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),tailrecursion.javelin.formula.call(null,((function (score,vec__6895,expected,hand){
return (function (G__6902,G__6903){
return G__6902.call(null,G__6903,(2));
});})(score,vec__6895,expected,hand))
).call(null,cljs.core.nth,score))),tailrecursion.hoplon.loop_tpl_STAR_.call(null,hand,null,((function (score,vec__6895,expected,hand){
return (function (item__5671__auto____$1){
var vec__6904 = tailrecursion.javelin.cell_map.call(null,cljs.core.identity,tailrecursion.javelin.formula.call(null,((function (score,vec__6895,expected,hand){
return (function (p__6905){
var vec__6906 = p__6905;
var card = cljs.core.nth.call(null,vec__6906,(0),null);
var info = cljs.core.nth.call(null,vec__6906,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [card,info], null);
});})(score,vec__6895,expected,hand))
).call(null,item__5671__auto____$1));
var card = cljs.core.nth.call(null,vec__6904,(0),null);
var info = cljs.core.nth.call(null,vec__6904,(1),null);
return tailrecursion.hoplon.img.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),tailrecursion.javelin.formula.call(null,((function (vec__6904,card,info,score,vec__6895,expected,hand){
return (function (G__6907){
return new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__6907);
});})(vec__6904,card,info,score,vec__6895,expected,hand))
).call(null,info));
});})(score,vec__6895,expected,hand))
)));
})))));

//# sourceMappingURL=_scoringtest_DOT_html.js.map