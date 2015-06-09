// Compiled by ClojureScript 0.0-3196 {}
goog.provide('tailrecursion.hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('tailrecursion.hoplon');
goog.require('video_poker.core');
tailrecursion.hoplon.app_pages._index_DOT_html.deal_count = tailrecursion.javelin.cell.call(null,(0));
tailrecursion.hoplon.app_pages._index_DOT_html.current_hand = tailrecursion.javelin.cell.call(null,video_poker.core.deal_hand.call(null,new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CQ","C6","C2","C3","D5"], null)));
tailrecursion.hoplon.app_pages._index_DOT_html.current_info = tailrecursion.javelin.formula.call(null,(function (G__6818,G__6816,G__6817){
return G__6816.call(null,G__6817.call(null,G__6818));
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.current_hand,video_poker.core.read_hand,cljs.core.keys);
tailrecursion.hoplon.app_pages._index_DOT_html.current_hand_index = tailrecursion.javelin.formula.call(null,(function (G__6819,G__6820){
return G__6819.call(null,(function (p1__1702_SHARP_,p2__1703_SHARP_){
return (new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__1702_SHARP_,p2__1703_SHARP_],null));
}),G__6820);
})).call(null,cljs.core.map_indexed,tailrecursion.hoplon.app_pages._index_DOT_html.current_hand);
tailrecursion.javelin.formula.call(null,(function (G__6821,G__6822){
return G__6821.call(null,G__6822);
})).call(null,cljs.core.prn,tailrecursion.hoplon.app_pages._index_DOT_html.current_info);
tailrecursion.hoplon.app_pages._index_DOT_html.what_do_i_have = tailrecursion.javelin.formula.call(null,(function (G__6823,G__6824){
return G__6823.call(null,G__6824);
})).call(null,cljs.core.first,tailrecursion.hoplon.app_pages._index_DOT_html.current_info);
tailrecursion.hoplon.app_pages._index_DOT_html.score = tailrecursion.javelin.formula.call(null,(function (G__6825,G__6826){
return G__6825.call(null,G__6826);
})).call(null,cljs.core.second,tailrecursion.hoplon.app_pages._index_DOT_html.current_info);
tailrecursion.hoplon.app_pages._index_DOT_html.scored_cards = tailrecursion.javelin.formula.call(null,(function (G__6827,G__6828){
return G__6827.call(null,G__6828,(2));
})).call(null,cljs.core.nth,tailrecursion.hoplon.app_pages._index_DOT_html.current_info);
tailrecursion.hoplon.app_pages._index_DOT_html.total = tailrecursion.javelin.cell.call(null,(0));
tailrecursion.hoplon.app_pages._index_DOT_html.held_cards = tailrecursion.javelin.formula.call(null,(function (G__6829,G__6831,G__6830){
return G__6829.call(null,(function (p1__1704_SHARP_){
return G__6830.call(null,p1__1704_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),new cljs.core.Keyword(null,"held","held",-1064528277)], null));
}),G__6831);
})).call(null,cljs.core.map,tailrecursion.hoplon.app_pages._index_DOT_html.current_hand_index,cljs.core.get_in);
tailrecursion.hoplon.app_pages._index_DOT_html.game_state = tailrecursion.javelin.formula.call(null,(function (G__6833){
var G__6832 = G__6833;
switch (G__6832) {
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
tailrecursion.hoplon.app_pages._index_DOT_html.deal_label = tailrecursion.javelin.formula.call(null,(function (G__6836,G__6837){
var G__6835 = (cljs.core.truth_((G__6836 instanceof cljs.core.Keyword))?G__6836.fqn:null);
switch (G__6835) {
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
throw (new G__6837([cljs.core.str("No matching clause: "),cljs.core.str(G__6836)].join('')));

}
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.game_state,Error);
tailrecursion.hoplon.app_pages._index_DOT_html.lock_holds = tailrecursion.javelin.formula.call(null,(function (G__6840){
var G__6839 = (cljs.core.truth_((G__6840 instanceof cljs.core.Keyword))?G__6840.fqn:null);
switch (G__6839) {
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
return cljs.core.swap_BANG_.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.total,(function (p1__1705_SHARP_){
return (p1__1705_SHARP_ + cljs.core.deref.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.score));
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
var seq__6850 = cljs.core.seq.call(null,cljs.core.deref.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.current_hand_index));
var chunk__6851 = null;
var count__6852 = (0);
var i__6853 = (0);
while(true){
if((i__6853 < count__6852)){
var vec__6854 = cljs.core._nth.call(null,chunk__6851,i__6853);
var idx = cljs.core.nth.call(null,vec__6854,(0),null);
var vec__6855 = cljs.core.nth.call(null,vec__6854,(1),null);
var card = cljs.core.nth.call(null,vec__6855,(0),null);
var info = cljs.core.nth.call(null,vec__6855,(1),null);
func.call(null,idx,card,info);

var G__6858 = seq__6850;
var G__6859 = chunk__6851;
var G__6860 = count__6852;
var G__6861 = (i__6853 + (1));
seq__6850 = G__6858;
chunk__6851 = G__6859;
count__6852 = G__6860;
i__6853 = G__6861;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__6850);
if(temp__4126__auto__){
var seq__6850__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6850__$1)){
var c__4952__auto__ = cljs.core.chunk_first.call(null,seq__6850__$1);
var G__6862 = cljs.core.chunk_rest.call(null,seq__6850__$1);
var G__6863 = c__4952__auto__;
var G__6864 = cljs.core.count.call(null,c__4952__auto__);
var G__6865 = (0);
seq__6850 = G__6862;
chunk__6851 = G__6863;
count__6852 = G__6864;
i__6853 = G__6865;
continue;
} else {
var vec__6856 = cljs.core.first.call(null,seq__6850__$1);
var idx = cljs.core.nth.call(null,vec__6856,(0),null);
var vec__6857 = cljs.core.nth.call(null,vec__6856,(1),null);
var card = cljs.core.nth.call(null,vec__6857,(0),null);
var info = cljs.core.nth.call(null,vec__6857,(1),null);
func.call(null,idx,card,info);

var G__6866 = cljs.core.next.call(null,seq__6850__$1);
var G__6867 = null;
var G__6868 = (0);
var G__6869 = (0);
seq__6850 = G__6866;
chunk__6851 = G__6867;
count__6852 = G__6868;
i__6853 = G__6869;
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
return tailrecursion.hoplon.app_pages._index_DOT_html.apply_to_hand.call(null,(function (p1__1707_SHARP_,p2__1708_SHARP_,p3__1706_SHARP_){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"held","held",-1064528277).cljs$core$IFn$_invoke$arity$1(p3__1706_SHARP_))){
return tailrecursion.hoplon.app_pages._index_DOT_html.new_card.call(null,p1__1707_SHARP_);
} else {
return null;
}
}));
});
/**
 * Clear the hold state on all cards
 */
tailrecursion.hoplon.app_pages._index_DOT_html.clear_hold_cards = (function tailrecursion$hoplon$app_pages$_index_DOT_html$clear_hold_cards(){
return tailrecursion.hoplon.app_pages._index_DOT_html.apply_to_hand.call(null,(function (p1__1709_SHARP_){
return tailrecursion.hoplon.app_pages._index_DOT_html.hold_state.call(null,p1__1709_SHARP_,false);
}));
});
/**
 * Discard the unheld cards, get new ones from the deck
 */
tailrecursion.hoplon.app_pages._index_DOT_html.new_cards = (function tailrecursion$hoplon$app_pages$_index_DOT_html$new_cards(){
var G__6871 = (((cljs.core.deref.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.game_state) instanceof cljs.core.Keyword))?cljs.core.deref.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.game_state).fqn:null);
switch (G__6871) {
case "second-deal":
return tailrecursion.javelin.dosync_STAR_.call(null,((function (G__6871){
return (function (){
tailrecursion.hoplon.app_pages._index_DOT_html.replace_hold_cards.call(null);

tailrecursion.hoplon.app_pages._index_DOT_html.clear_hold_cards.call(null);

return cljs.core.swap_BANG_.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.deal_count,cljs.core.inc);
});})(G__6871))
);

break;
case "game-over":
return tailrecursion.javelin.dosync_STAR_.call(null,((function (G__6871){
return (function (){
tailrecursion.hoplon.app_pages._index_DOT_html.record_score.call(null);

return tailrecursion.hoplon.app_pages._index_DOT_html.muck.call(null);
});})(G__6871))
);

break;
default:
return tailrecursion.javelin.dosync_STAR_.call(null,((function (G__6871){
return (function (){
cljs.core.swap_BANG_.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.deal_count,cljs.core.inc);

return tailrecursion.hoplon.app_pages._index_DOT_html.replace_hold_cards.call(null);
});})(G__6871))
);

}
});
tailrecursion.hoplon.html.call(null,tailrecursion.hoplon.head.call(null,tailrecursion.hoplon.title.call(null,"Hoplon Video Poker"),tailrecursion.hoplon.link.call(null,new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet",new cljs.core.Keyword(null,"href","href",-793805698),"css/style.css",new cljs.core.Keyword(null,"type","type",1174270348),"text/css")),tailrecursion.hoplon.body.call(null,tailrecursion.hoplon.h1.call(null,"Video Poker!"),tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),tailrecursion.hoplon.app_pages._index_DOT_html.total),tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"current-hand",new cljs.core.Keyword(null,"text","text",-1790561697),tailrecursion.hoplon.app_pages._index_DOT_html.what_do_i_have),tailrecursion.hoplon.div.call(null,tailrecursion.hoplon.button.call(null,new cljs.core.Keyword(null,"click","click",1912301393),tailrecursion.hoplon.app_pages._index_DOT_html.new_cards,new cljs.core.Keyword(null,"text","text",-1790561697),tailrecursion.javelin.formula.call(null,(function (G__6873){
return G__6873;
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.deal_label))),tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"hand",tailrecursion.hoplon.loop_tpl_STAR_.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.current_hand_index,null,(function (item__5671__auto__){
var vec__6874 = tailrecursion.javelin.cell_map.call(null,cljs.core.identity,tailrecursion.javelin.formula.call(null,(function (p__6875){
var vec__6876 = p__6875;
var idx = cljs.core.nth.call(null,vec__6876,(0),null);
var vec__6877 = cljs.core.nth.call(null,vec__6876,(1),null);
var card = cljs.core.nth.call(null,vec__6877,(0),null);
var info = cljs.core.nth.call(null,vec__6877,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,card,info], null);
})).call(null,item__5671__auto__));
var idx = cljs.core.nth.call(null,vec__6874,(0),null);
var card = cljs.core.nth.call(null,vec__6874,(1),null);
var info = cljs.core.nth.call(null,vec__6874,(2),null);
return tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"card",tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"indicator",new cljs.core.Keyword(null,"do-class","do-class",-1987249763),tailrecursion.javelin.formula.call(null,((function (vec__6874,idx,card,info){
return (function (G__6878,G__6879,G__6881,G__6880){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"part-of-hand","part-of-hand",-5726131),G__6878.call(null,G__6879.call(null,cljs.core.PersistentHashSet.fromArray([G__6880], true),G__6881))], null);
});})(vec__6874,idx,card,info))
).call(null,cljs.core.boolean$,cljs.core.some,tailrecursion.hoplon.app_pages._index_DOT_html.scored_cards,card),tailrecursion.hoplon.img.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),tailrecursion.javelin.formula.call(null,((function (vec__6874,idx,card,info){
return (function (G__6882){
return new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__6882);
});})(vec__6874,idx,card,info))
).call(null,info),new cljs.core.Keyword(null,"do-class","do-class",-1987249763),tailrecursion.javelin.formula.call(null,((function (vec__6874,idx,card,info){
return (function (G__6885,G__6884,G__6883){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),G__6883.call(null,G__6884,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__6885,(1),new cljs.core.Keyword(null,"held","held",-1064528277)], null))], null);
});})(vec__6874,idx,card,info))
).call(null,idx,tailrecursion.hoplon.app_pages._index_DOT_html.current_hand,cljs.core.get_in),new cljs.core.Keyword(null,"click","click",1912301393),((function (vec__6874,idx,card,info){
return (function (){
return tailrecursion.hoplon.app_pages._index_DOT_html.toggle_hold.call(null,cljs.core.deref.call(null,idx));
});})(vec__6874,idx,card,info))
)));
})))));

//# sourceMappingURL=_index_DOT_html.js.map