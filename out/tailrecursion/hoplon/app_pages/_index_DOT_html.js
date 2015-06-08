// Compiled by ClojureScript 0.0-3196 {}
goog.provide('tailrecursion.hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('tailrecursion.hoplon');
goog.require('video_poker.core');
tailrecursion.hoplon.app_pages._index_DOT_html.deal_count = tailrecursion.javelin.cell.call(null,(0));
tailrecursion.hoplon.app_pages._index_DOT_html.current_hand = tailrecursion.javelin.cell.call(null,video_poker.core.deal_hand.call(null));
tailrecursion.hoplon.app_pages._index_DOT_html.current_info = tailrecursion.javelin.formula.call(null,(function (G__8303,G__8301,G__8302){
return G__8301.call(null,G__8302.call(null,G__8303));
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.current_hand,video_poker.core.read_hand,cljs.core.keys);
tailrecursion.hoplon.app_pages._index_DOT_html.current_hand_index = tailrecursion.javelin.formula.call(null,(function (G__8306,G__8307){
return G__8306.call(null,(function (p1__8304_SHARP_,p2__8305_SHARP_){
return (new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__8304_SHARP_,p2__8305_SHARP_],null));
}),G__8307);
})).call(null,cljs.core.map_indexed,tailrecursion.hoplon.app_pages._index_DOT_html.current_hand);
tailrecursion.javelin.formula.call(null,(function (G__8308,G__8309){
return G__8308.call(null,G__8309);
})).call(null,cljs.core.prn,tailrecursion.hoplon.app_pages._index_DOT_html.current_info);
tailrecursion.hoplon.app_pages._index_DOT_html.what_do_i_have = tailrecursion.javelin.formula.call(null,(function (G__8310,G__8311){
return G__8310.call(null,G__8311);
})).call(null,cljs.core.first,tailrecursion.hoplon.app_pages._index_DOT_html.current_info);
tailrecursion.hoplon.app_pages._index_DOT_html.score = tailrecursion.javelin.formula.call(null,(function (G__8312,G__8313){
return G__8312.call(null,G__8313);
})).call(null,cljs.core.second,tailrecursion.hoplon.app_pages._index_DOT_html.current_info);
tailrecursion.hoplon.app_pages._index_DOT_html.scored_cards = tailrecursion.javelin.formula.call(null,(function (G__8314,G__8315){
return G__8314.call(null,G__8315,(2));
})).call(null,cljs.core.nth,tailrecursion.hoplon.app_pages._index_DOT_html.current_info);
tailrecursion.hoplon.app_pages._index_DOT_html.total = tailrecursion.javelin.cell.call(null,(0));
tailrecursion.hoplon.app_pages._index_DOT_html.held_cards = tailrecursion.javelin.formula.call(null,(function (G__8317,G__8319,G__8318){
return G__8317.call(null,(function (p1__8316_SHARP_){
return G__8318.call(null,p1__8316_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),new cljs.core.Keyword(null,"held","held",-1064528277)], null));
}),G__8319);
})).call(null,cljs.core.map,tailrecursion.hoplon.app_pages._index_DOT_html.current_hand_index,cljs.core.get_in);
tailrecursion.hoplon.app_pages._index_DOT_html.game_state = tailrecursion.javelin.formula.call(null,(function (G__8321){
var G__8320 = G__8321;
switch (G__8320) {
case (0):
return new cljs.core.Keyword(null,"first-deal","first-deal",457973491);

break;
case (1):
return new cljs.core.Keyword(null,"second-deal","second-deal",-840212900);

break;
default:
return new cljs.core.Keyword(null,"game-over","game-over",-607322695);

}
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.deal_count);
tailrecursion.hoplon.app_pages._index_DOT_html.deal_label = tailrecursion.javelin.formula.call(null,(function (G__8324,G__8325){
var G__8323 = (cljs.core.truth_((G__8324 instanceof cljs.core.Keyword))?G__8324.fqn:null);
switch (G__8323) {
case "game-over":
return "try again";

break;
case "second-deal":
return "deal";

break;
case "first-deal":
return "deal";

break;
default:
throw (new G__8325([cljs.core.str("No matching clause: "),cljs.core.str(G__8324)].join('')));

}
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.game_state,Error);
tailrecursion.hoplon.app_pages._index_DOT_html.lock_holds = tailrecursion.javelin.formula.call(null,(function (G__8328){
var G__8327 = (cljs.core.truth_((G__8328 instanceof cljs.core.Keyword))?G__8328.fqn:null);
switch (G__8327) {
case "game-over":
return true;

break;
default:
return false;

}
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.game_state);
/**
 * Add the score from the current hand to the total
 */
tailrecursion.hoplon.app_pages._index_DOT_html.record_score = (function tailrecursion$hoplon$app_pages$_index_DOT_html$record_score(){
return cljs.core.swap_BANG_.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.total,(function (p1__8330_SHARP_){
return (p1__8330_SHARP_ + cljs.core.deref.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.score));
}));
});
/**
 * Discard the entire hand, reset the deck, re-deal, clear holds
 */
tailrecursion.hoplon.app_pages._index_DOT_html.muck = (function tailrecursion$hoplon$app_pages$_index_DOT_html$muck(){
return tailrecursion.javelin.dosync_STAR_.call(null,(function (){
cljs.core.reset_BANG_.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.deal_count,(0));

video_poker.core.reset_deck.call(null);

return cljs.core.reset_BANG_.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.current_hand,video_poker.core.deal_hand.call(null));
}));
});
/**
 * Set the hold state on a card
 */
tailrecursion.hoplon.app_pages._index_DOT_html.hold_state = (function tailrecursion$hoplon$app_pages$_index_DOT_html$hold_state(idx,state){
return cljs.core.swap_BANG_.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.current_hand,(function (value){
return cljs.core.assoc_in.call(null,cljs.core.vec.call(null,value),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,(1),new cljs.core.Keyword(null,"held","held",-1064528277)], null),state);
}));
});
/**
 * Run the given function against all cards in the hand
 * 
 * Func takes three arguments:
 * - the index of the card
 * - the card code
 * - info about the card (map of url, held state)
 * 
 */
tailrecursion.hoplon.app_pages._index_DOT_html.apply_to_hand = (function tailrecursion$hoplon$app_pages$_index_DOT_html$apply_to_hand(func){
var seq__8339 = cljs.core.seq.call(null,cljs.core.deref.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.current_hand_index));
var chunk__8340 = null;
var count__8341 = (0);
var i__8342 = (0);
while(true){
if((i__8342 < count__8341)){
var vec__8343 = cljs.core._nth.call(null,chunk__8340,i__8342);
var idx = cljs.core.nth.call(null,vec__8343,(0),null);
var vec__8344 = cljs.core.nth.call(null,vec__8343,(1),null);
var card = cljs.core.nth.call(null,vec__8344,(0),null);
var info = cljs.core.nth.call(null,vec__8344,(1),null);
func.call(null,idx,card,info);

var G__8347 = seq__8339;
var G__8348 = chunk__8340;
var G__8349 = count__8341;
var G__8350 = (i__8342 + (1));
seq__8339 = G__8347;
chunk__8340 = G__8348;
count__8341 = G__8349;
i__8342 = G__8350;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__8339);
if(temp__4126__auto__){
var seq__8339__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8339__$1)){
var c__4952__auto__ = cljs.core.chunk_first.call(null,seq__8339__$1);
var G__8351 = cljs.core.chunk_rest.call(null,seq__8339__$1);
var G__8352 = c__4952__auto__;
var G__8353 = cljs.core.count.call(null,c__4952__auto__);
var G__8354 = (0);
seq__8339 = G__8351;
chunk__8340 = G__8352;
count__8341 = G__8353;
i__8342 = G__8354;
continue;
} else {
var vec__8345 = cljs.core.first.call(null,seq__8339__$1);
var idx = cljs.core.nth.call(null,vec__8345,(0),null);
var vec__8346 = cljs.core.nth.call(null,vec__8345,(1),null);
var card = cljs.core.nth.call(null,vec__8346,(0),null);
var info = cljs.core.nth.call(null,vec__8346,(1),null);
func.call(null,idx,card,info);

var G__8355 = cljs.core.next.call(null,seq__8339__$1);
var G__8356 = null;
var G__8357 = (0);
var G__8358 = (0);
seq__8339 = G__8355;
chunk__8340 = G__8356;
count__8341 = G__8357;
i__8342 = G__8358;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Hold/Unhold a card, but only when the user is allowed to
 * do so (they get two chances)
 */
tailrecursion.hoplon.app_pages._index_DOT_html.toggle_hold = (function tailrecursion$hoplon$app_pages$_index_DOT_html$toggle_hold(idx){
if(cljs.core.not.call(null,cljs.core.deref.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.lock_holds))){
return cljs.core.swap_BANG_.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.current_hand,(function (value){
return cljs.core.update_in.call(null,cljs.core.vec.call(null,value),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,(1),new cljs.core.Keyword(null,"held","held",-1064528277)], null),cljs.core.not);
}));
} else {
return null;
}
});
/**
 * Discard the card at the given index, and replace it with a new one
 */
tailrecursion.hoplon.app_pages._index_DOT_html.new_card = (function tailrecursion$hoplon$app_pages$_index_DOT_html$new_card(idx){
video_poker.core.discard.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.current_hand),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,(0)], null)));

return cljs.core.reset_BANG_.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.current_hand,cljs.core.assoc_in.call(null,cljs.core.deref.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.current_hand),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx], null),video_poker.core.deal.call(null)));
});
/**
 * Replace all of the held cards with new ones
 */
tailrecursion.hoplon.app_pages._index_DOT_html.replace_hold_cards = (function tailrecursion$hoplon$app_pages$_index_DOT_html$replace_hold_cards(){
return tailrecursion.hoplon.app_pages._index_DOT_html.apply_to_hand.call(null,(function (p1__8360_SHARP_,p2__8361_SHARP_,p3__8359_SHARP_){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"held","held",-1064528277).cljs$core$IFn$_invoke$arity$1(p3__8359_SHARP_))){
return tailrecursion.hoplon.app_pages._index_DOT_html.new_card.call(null,p1__8360_SHARP_);
} else {
return null;
}
}));
});
/**
 * Clear the hold state on all cards
 */
tailrecursion.hoplon.app_pages._index_DOT_html.clear_hold_cards = (function tailrecursion$hoplon$app_pages$_index_DOT_html$clear_hold_cards(){
return tailrecursion.hoplon.app_pages._index_DOT_html.apply_to_hand.call(null,(function (p1__8362_SHARP_){
return tailrecursion.hoplon.app_pages._index_DOT_html.hold_state.call(null,p1__8362_SHARP_,false);
}));
});
/**
 * Discard the unheld cards, get new ones from the deck
 */
tailrecursion.hoplon.app_pages._index_DOT_html.new_cards = (function tailrecursion$hoplon$app_pages$_index_DOT_html$new_cards(){
var G__8364 = (((cljs.core.deref.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.game_state) instanceof cljs.core.Keyword))?cljs.core.deref.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.game_state).fqn:null);
switch (G__8364) {
case "second-deal":
return tailrecursion.javelin.dosync_STAR_.call(null,((function (G__8364){
return (function (){
tailrecursion.hoplon.app_pages._index_DOT_html.replace_hold_cards.call(null);

tailrecursion.hoplon.app_pages._index_DOT_html.clear_hold_cards.call(null);

return cljs.core.swap_BANG_.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.deal_count,cljs.core.inc);
});})(G__8364))
);

break;
case "game-over":
return tailrecursion.javelin.dosync_STAR_.call(null,((function (G__8364){
return (function (){
tailrecursion.hoplon.app_pages._index_DOT_html.record_score.call(null);

return tailrecursion.hoplon.app_pages._index_DOT_html.muck.call(null);
});})(G__8364))
);

break;
default:
return tailrecursion.javelin.dosync_STAR_.call(null,((function (G__8364){
return (function (){
cljs.core.swap_BANG_.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.deal_count,cljs.core.inc);

return tailrecursion.hoplon.app_pages._index_DOT_html.replace_hold_cards.call(null);
});})(G__8364))
);

}
});
tailrecursion.hoplon.html.call(null,tailrecursion.hoplon.head.call(null,tailrecursion.hoplon.title.call(null,"Hoplon Video Poker"),tailrecursion.hoplon.link.call(null,new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet",new cljs.core.Keyword(null,"href","href",-793805698),"css/style.css",new cljs.core.Keyword(null,"type","type",1174270348),"text/css")),tailrecursion.hoplon.body.call(null,tailrecursion.hoplon.h1.call(null,"Video Poker!"),tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),tailrecursion.hoplon.app_pages._index_DOT_html.total),tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"current-hand",new cljs.core.Keyword(null,"text","text",-1790561697),tailrecursion.hoplon.app_pages._index_DOT_html.what_do_i_have),tailrecursion.hoplon.div.call(null,tailrecursion.hoplon.button.call(null,new cljs.core.Keyword(null,"click","click",1912301393),tailrecursion.hoplon.app_pages._index_DOT_html.new_cards,new cljs.core.Keyword(null,"text","text",-1790561697),tailrecursion.javelin.formula.call(null,(function (G__8366){
return G__8366;
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.deal_label))),tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"hand",tailrecursion.hoplon.loop_tpl_STAR_.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.current_hand_index,null,(function (item__5671__auto__){
var vec__8367 = tailrecursion.javelin.cell_map.call(null,cljs.core.identity,tailrecursion.javelin.formula.call(null,(function (p__8368){
var vec__8369 = p__8368;
var idx = cljs.core.nth.call(null,vec__8369,(0),null);
var vec__8370 = cljs.core.nth.call(null,vec__8369,(1),null);
var card = cljs.core.nth.call(null,vec__8370,(0),null);
var info = cljs.core.nth.call(null,vec__8370,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,card,info], null);
})).call(null,item__5671__auto__));
var idx = cljs.core.nth.call(null,vec__8367,(0),null);
var card = cljs.core.nth.call(null,vec__8367,(1),null);
var info = cljs.core.nth.call(null,vec__8367,(2),null);
return tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"card",tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"indicator",new cljs.core.Keyword(null,"do-class","do-class",-1987249763),tailrecursion.javelin.formula.call(null,((function (vec__8367,idx,card,info){
return (function (G__8371,G__8372,G__8374,G__8373){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"part-of-hand","part-of-hand",-5726131),G__8371.call(null,G__8372.call(null,cljs.core.PersistentHashSet.fromArray([G__8373], true),G__8374))], null);
});})(vec__8367,idx,card,info))
).call(null,cljs.core.boolean$,cljs.core.some,tailrecursion.hoplon.app_pages._index_DOT_html.scored_cards,card),tailrecursion.hoplon.img.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),tailrecursion.javelin.formula.call(null,((function (vec__8367,idx,card,info){
return (function (G__8375){
return new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__8375);
});})(vec__8367,idx,card,info))
).call(null,info),new cljs.core.Keyword(null,"do-class","do-class",-1987249763),tailrecursion.javelin.formula.call(null,((function (vec__8367,idx,card,info){
return (function (G__8378,G__8377,G__8376){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),G__8376.call(null,G__8377,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__8378,(1),new cljs.core.Keyword(null,"held","held",-1064528277)], null))], null);
});})(vec__8367,idx,card,info))
).call(null,idx,tailrecursion.hoplon.app_pages._index_DOT_html.current_hand,cljs.core.get_in),new cljs.core.Keyword(null,"click","click",1912301393),((function (vec__8367,idx,card,info){
return (function (){
return tailrecursion.hoplon.app_pages._index_DOT_html.toggle_hold.call(null,cljs.core.deref.call(null,idx));
});})(vec__8367,idx,card,info))
)));
})))));

//# sourceMappingURL=_index_DOT_html.js.map