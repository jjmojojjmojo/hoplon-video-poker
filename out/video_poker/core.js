// Compiled by ClojureScript 0.0-3196 {}
goog.provide('video_poker.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.set');
video_poker.core.suit_range = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A",(2),(3),(4),(5),(6),(7),(8),(9),(10),"J","Q","K"], null);
video_poker.core.suit_code = (function video_poker$core$suit_code(code){

return clojure.string.upper_case.call(null,[cljs.core.str(cljs.core.first.call(null,code))].join(''));
});
/**
 * Construct a vector of urls corresponding to each card in the given suit
 */
video_poker.core.suit_urls = (function video_poker$core$suit_urls(suit){
var suit_code = clojure.string.upper_case.call(null,cljs.core.first.call(null,suit));
return cljs.core.map.call(null,((function (suit_code){
return (function (v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(suit_code),cljs.core.str(v)].join(''),[cljs.core.str("cards/"),cljs.core.str(suit),cljs.core.str("/"),cljs.core.str(v),cljs.core.str(".svg")].join('')], null);
});})(suit_code))
,video_poker.core.suit_range);
});
/**
 * Creates a deck
 */
video_poker.core.deck = (function video_poker$core$deck(){
var clubs = video_poker.core.suit_urls.call(null,"clubs");
var hearts = video_poker.core.suit_urls.call(null,"hearts");
var spades = video_poker.core.suit_urls.call(null,"spades");
var diamonds = video_poker.core.suit_urls.call(null,"diamonds");
return cljs.core.concat.call(null,clubs,hearts,spades,diamonds);
});
/**
 * Creates a deck as a map
 */
video_poker.core.deck_map = (function video_poker$core$deck_map(){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,video_poker.core.deck.call(null));
});
video_poker.core.discarded = tailrecursion.javelin.cell.call(null,cljs.core.PersistentVector.EMPTY);
video_poker.core.available = tailrecursion.javelin.cell.call(null,video_poker.core.deck_map.call(null));
/**
 * Resets all of the cells regarding cards dealt and available
 */
video_poker.core.reset_deck = (function video_poker$core$reset_deck(){
cljs.core.reset_BANG_.call(null,video_poker.core.discarded,cljs.core.PersistentVector.EMPTY);

return cljs.core.reset_BANG_.call(null,video_poker.core.available,video_poker.core.deck_map.call(null));
});
video_poker.core.card_values = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,(i + (1))], null);
}),video_poker.core.suit_range));
/**
 * Return a random card and update the available atom
 */
video_poker.core.deal = (function video_poker$core$deal(){
var G__5980 = arguments.length;
switch (G__5980) {
case 0:
return video_poker.core.deal.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return video_poker.core.deal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

video_poker.core.deal.cljs$core$IFn$_invoke$arity$0 = (function (){
var card = cljs.core.rand_nth.call(null,cljs.core.vec.call(null,cljs.core.deref.call(null,video_poker.core.available)));
var idx = cljs.core.first.call(null,card);
var url = cljs.core.second.call(null,card);
cljs.core.swap_BANG_.call(null,video_poker.core.available,cljs.core.dissoc,idx);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"held","held",-1064528277),false], null)], null);
});

video_poker.core.deal.cljs$core$IFn$_invoke$arity$1 = (function (pick){
var url = cljs.core.get.call(null,cljs.core.deref.call(null,video_poker.core.available),pick);
cljs.core.swap_BANG_.call(null,video_poker.core.available,cljs.core.dissoc,pick);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pick,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"held","held",-1064528277),false], null)], null);
});

video_poker.core.deal.cljs$lang$maxFixedArity = 1;
/**
 * Put a card in the discard pile
 */
video_poker.core.discard = (function video_poker$core$discard(card){
return cljs.core.swap_BANG_.call(null,video_poker.core.discarded,cljs.core.conj,card);
});
/**
 * Return a random vector of card codes and their corresponding image urls
 */
video_poker.core.deal_hand = (function video_poker$core$deal_hand(){
var argseq__5207__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return video_poker.core.deal_hand.cljs$core$IFn$_invoke$arity$variadic(argseq__5207__auto__);
});

video_poker.core.deal_hand.cljs$core$IFn$_invoke$arity$variadic = (function (p__5983){
var map__5984 = p__5983;
var map__5984__$1 = ((cljs.core.seq_QMARK_.call(null,map__5984))?cljs.core.apply.call(null,cljs.core.hash_map,map__5984):map__5984);
var num = cljs.core.get.call(null,map__5984__$1,new cljs.core.Keyword(null,"num","num",1985240673),(5));
var fixed = cljs.core.get.call(null,map__5984__$1,new cljs.core.Keyword(null,"fixed","fixed",-562004358),null);
return cljs.core.vec.call(null,((!((fixed == null)))?cljs.core.map.call(null,video_poker.core.deal,fixed):cljs.core.repeatedly.call(null,num,((function (map__5984,map__5984__$1,num,fixed){
return (function (){
return video_poker.core.deal.call(null);
});})(map__5984,map__5984__$1,num,fixed))
)));
});

video_poker.core.deal_hand.cljs$lang$maxFixedArity = (0);

video_poker.core.deal_hand.cljs$lang$applyTo = (function (seq5982){
return video_poker.core.deal_hand.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5982));
});
/**
 * Return the value code (A, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, K, Q) for the
 * given card-code
 */
video_poker.core.value_code = (function video_poker$core$value_code(code){
var value = cljs.reader.read_string.call(null,cljs.core.subs.call(null,code,(1)));
if(cljs.core.integer_QMARK_.call(null,value)){
return value;
} else {
return [cljs.core.str(value)].join('');
}
});
/**
 * Given a card code, like H1 or CA, return a numeric value for sorting
 */
video_poker.core.card_value = (function video_poker$core$card_value(code){
var value = video_poker.core.value_code.call(null,code);
return cljs.core.get.call(null,video_poker.core.card_values,value);
});
video_poker.core.count_same_value = (function video_poker$core$count_same_value(hand){

return cljs.core.group_by.call(null,(function (p1__5985_SHARP_){
return video_poker.core.value_code.call(null,p1__5985_SHARP_);
}),hand);
});
video_poker.core.count_same_suit = (function video_poker$core$count_same_suit(hand){

return cljs.core.group_by.call(null,(function (p1__5986_SHARP_){
return video_poker.core.suit_code.call(null,p1__5986_SHARP_);
}),hand);
});
video_poker.core.pairs = (function video_poker$core$pairs(hand){

var counts = video_poker.core.count_same_value.call(null,hand);
return cljs.core.filter.call(null,((function (counts){
return (function (p1__5987_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.second.call(null,p1__5987_SHARP_)),(2));
});})(counts))
,counts);
});
video_poker.core.pair_QMARK_ = (function video_poker$core$pair_QMARK_(hand){

var pairs = video_poker.core.pairs.call(null,hand);
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,pairs))){
return cljs.core.second.call(null,cljs.core.first.call(null,pairs));
} else {
return false;
}
});
video_poker.core.two_pair_QMARK_ = (function video_poker$core$two_pair_QMARK_(hand){

var pairs = video_poker.core.pairs.call(null,hand);
if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,pairs))){
return cljs.core.flatten.call(null,cljs.core.vals.call(null,pairs));
} else {
return false;
}
});
video_poker.core.three_of_a_kind_QMARK_ = (function video_poker$core$three_of_a_kind_QMARK_(hand){

var counts = video_poker.core.count_same_value.call(null,hand);
var trips = cljs.core.filter.call(null,((function (counts){
return (function (p1__5988_SHARP_){
return cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,p1__5988_SHARP_));
});})(counts))
,cljs.core.vals.call(null,counts));
if((cljs.core.count.call(null,trips) > (0))){
return cljs.core.flatten.call(null,trips);
} else {
return false;
}
});
video_poker.core.int_sequence_QMARK_ = (function video_poker$core$int_sequence_QMARK_(s){

try{cljs.core.reduce.call(null,(function (x,y){
if(cljs.core._EQ_.call(null,(x - y),(-1))){
return y;
} else {
throw (new Error("Not Sequential"));
}
}),s);

return true;
}catch (e5990){if((e5990 instanceof Error)){
var e = e5990;
return false;
} else {
throw e5990;

}
}});
video_poker.core.ace_QMARK_ = (function video_poker$core$ace_QMARK_(code){

return cljs.core._EQ_.call(null,video_poker.core.value_code.call(null,code),"A");
});
video_poker.core.king_QMARK_ = (function video_poker$core$king_QMARK_(code){

return cljs.core._EQ_.call(null,video_poker.core.value_code.call(null,code),"K");
});
video_poker.core.straight_QMARK_ = (function video_poker$core$straight_QMARK_(hand){

var sorted = cljs.core.sort_by.call(null,(function (p1__5991_SHARP_){
return video_poker.core.card_value.call(null,p1__5991_SHARP_);
}),hand);
var numeric = cljs.core.map.call(null,video_poker.core.card_value,sorted);
var aces = cljs.core.filterv.call(null,video_poker.core.ace_QMARK_,sorted);
cljs.core.prn.call(null,"straight?",sorted,numeric,aces,video_poker.core.int_sequence_QMARK_.call(null,numeric));

if(cljs.core.truth_(video_poker.core.int_sequence_QMARK_.call(null,numeric))){
return hand;
} else {
if(cljs.core._EQ_.call(null,numeric,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(10),(11),(12),(13)], null))){
return hand;
} else {
return false;
}
}
});
video_poker.core.flush_QMARK_ = (function video_poker$core$flush_QMARK_(hand){

var counts = video_poker.core.count_same_suit.call(null,hand);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,counts),(1))){
return hand;
} else {
return false;
}
});
video_poker.core.full_house_QMARK_ = (function video_poker$core$full_house_QMARK_(hand){

if(cljs.core.truth_((function (){var and__4155__auto__ = video_poker.core.three_of_a_kind_QMARK_.call(null,hand);
if(cljs.core.truth_(and__4155__auto__)){
return video_poker.core.pair_QMARK_.call(null,hand);
} else {
return and__4155__auto__;
}
})())){
return hand;
} else {
return false;
}
});
video_poker.core.four_of_a_kind_QMARK_ = (function video_poker$core$four_of_a_kind_QMARK_(hand){

var counts = video_poker.core.count_same_value.call(null,hand);
var quads = cljs.core.filter.call(null,((function (counts){
return (function (p1__5992_SHARP_){
return cljs.core._EQ_.call(null,(4),cljs.core.count.call(null,p1__5992_SHARP_));
});})(counts))
,cljs.core.vals.call(null,counts));
if((cljs.core.count.call(null,quads) > (0))){
return cljs.core.flatten.call(null,quads);
} else {
return false;
}
});
video_poker.core.straight_flush_QMARK_ = (function video_poker$core$straight_flush_QMARK_(hand){

if(cljs.core.truth_((function (){var and__4155__auto__ = video_poker.core.straight_QMARK_.call(null,hand);
if(cljs.core.truth_(and__4155__auto__)){
return video_poker.core.flush_QMARK_.call(null,hand);
} else {
return and__4155__auto__;
}
})())){
return hand;
} else {
return false;
}
});
video_poker.core.royal_flush_QMARK_ = (function video_poker$core$royal_flush_QMARK_(hand){

if(cljs.core.truth_((function (){var and__4155__auto__ = video_poker.core.straight_flush_QMARK_.call(null,hand);
if(cljs.core.truth_(and__4155__auto__)){
var and__4155__auto____$1 = cljs.core.some.call(null,((function (and__4155__auto__){
return (function (p1__5993_SHARP_){
return cljs.core._EQ_.call(null,video_poker.core.value_code.call(null,p1__5993_SHARP_),"A");
});})(and__4155__auto__))
,hand);
if(cljs.core.truth_(and__4155__auto____$1)){
return cljs.core.some.call(null,((function (and__4155__auto____$1,and__4155__auto__){
return (function (p1__5994_SHARP_){
return cljs.core._EQ_.call(null,video_poker.core.value_code.call(null,p1__5994_SHARP_),"K");
});})(and__4155__auto____$1,and__4155__auto__))
,hand);
} else {
return and__4155__auto____$1;
}
} else {
return and__4155__auto__;
}
})())){
return hand;
} else {
return false;
}
});
video_poker.core.high_card_QMARK_ = (function video_poker$core$high_card_QMARK_(hand){

var sorted = cljs.core.sort_by.call(null,(function (p1__5995_SHARP_){
return video_poker.core.card_value.call(null,p1__5995_SHARP_);
}),hand);
var high = cljs.core.last.call(null,sorted);
var lead = cljs.core.first.call(null,sorted);
if(cljs.core.truth_(video_poker.core.ace_QMARK_.call(null,lead))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lead], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [high], null);
}
});
video_poker.core.hands = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),video_poker.core.full_house_QMARK_,"Full House"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),video_poker.core.pair_QMARK_,"Pair"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),video_poker.core.two_pair_QMARK_,"Two Pair"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),video_poker.core.three_of_a_kind_QMARK_,"Three of a Kind"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80),video_poker.core.royal_flush_QMARK_,"Royal Flush"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(70),video_poker.core.straight_flush_QMARK_,"Straight Flush"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(30),video_poker.core.straight_QMARK_,"Straight"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),video_poker.core.flush_QMARK_,"Flush"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(60),video_poker.core.four_of_a_kind_QMARK_,"Four of a Kind"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),video_poker.core.high_card_QMARK_,"High Card"], null)], null);
video_poker.core.read_hand = (function video_poker$core$read_hand(hand){

var to_inspect = video_poker.core.hands;
while(true){
var vec__5997 = cljs.core.first.call(null,to_inspect);
var value = cljs.core.nth.call(null,vec__5997,(0),null);
var check = cljs.core.nth.call(null,vec__5997,(1),null);
var name = cljs.core.nth.call(null,vec__5997,(2),null);
var temp__4124__auto__ = check.call(null,hand);
if(cljs.core.truth_(temp__4124__auto__)){
var matches = temp__4124__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value,cljs.core.vec.call(null,matches)], null);
} else {
var G__5998 = cljs.core.rest.call(null,to_inspect);
to_inspect = G__5998;
continue;
}
break;
}
});

//# sourceMappingURL=core.js.map