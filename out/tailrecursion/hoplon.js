// Compiled by ClojureScript 0.0-3196 {}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('tailrecursion.javelin');
goog.require('cljsjs.jquery');



tailrecursion.hoplon.is_ie8 = cljs.core.not.call(null,(window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__6520_SHARP_){
return (p1__6520_SHARP_ instanceof Node);
}):(function (p1__6521_SHARP_){
try{return p1__6521_SHARP_.nodeType;
}catch (e6522){if((e6522 instanceof Error)){
var _ = e6522;
return null;
} else {
throw e6522;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__6523_SHARP_){
try{return cljs.core.vector_QMARK_.call(null,p1__6523_SHARP_);
}catch (e6524){if((e6524 instanceof Error)){
var _ = e6524;
return null;
} else {
throw e6524;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__6525_SHARP_){
try{return cljs.core.seq_QMARK_.call(null,p1__6525_SHARP_);
}catch (e6526){if((e6526 instanceof Error)){
var _ = e6526;
return null;
} else {
throw e6526;

}
}}));
cljs.core.set_print_fn_BANG_.call(null,(function (p1__6527_SHARP_){
if(cljs.core.truth_((function (){var and__4155__auto__ = console;
if(cljs.core.truth_(and__4155__auto__)){
return console.log;
} else {
return and__4155__auto__;
}
})())){
return console.log(p1__6527_SHARP_);
} else {
return null;
}
}));
tailrecursion.hoplon.safe_nth = (function tailrecursion$hoplon$safe_nth(){
var G__6529 = arguments.length;
switch (G__6529) {
case 2:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return tailrecursion.hoplon.safe_nth.call(null,coll,index,null);
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.call(null,coll,index,not_found);
}catch (e6530){if((e6530 instanceof Error)){
var _ = e6530;
return not_found;
} else {
throw e6530;

}
}});

tailrecursion.hoplon.safe_nth.cljs$lang$maxFixedArity = 3;
tailrecursion.hoplon.timeout = (function tailrecursion$hoplon$timeout(){
var G__6533 = arguments.length;
switch (G__6533) {
case 1:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return tailrecursion.hoplon.timeout.call(null,f,(0));
});

tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

tailrecursion.hoplon.timeout.cljs$lang$maxFixedArity = 2;
tailrecursion.hoplon.unsplice = (function tailrecursion$hoplon$unsplice(forms){
return cljs.core.mapcat.call(null,(function (p1__6535_SHARP_){
if(cljs.core.truth_((function (){var or__4167__auto__ = tailrecursion.hoplon.seq_QMARK__STAR_.call(null,p1__6535_SHARP_);
if(cljs.core.truth_(or__4167__auto__)){
return or__4167__auto__;
} else {
return tailrecursion.hoplon.vector_QMARK__STAR_.call(null,p1__6535_SHARP_);
}
})())){
return tailrecursion$hoplon$unsplice.call(null,p1__6535_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6535_SHARP_], null);
}
}),forms);
});
tailrecursion.hoplon.when_dom = (function tailrecursion$hoplon$when_dom(this$,f){
if(!((this$ instanceof Element))){
return f.call(null);
} else {
return tailrecursion.hoplon.timeout.call(null,(function tailrecursion$hoplon$when_dom_$_doit(){
if(cljs.core.truth_(document.documentElement.contains(this$))){
return f.call(null);
} else {
return tailrecursion.hoplon.timeout.call(null,tailrecursion$hoplon$when_dom_$_doit,(20));
}
}));
}
});
tailrecursion.hoplon.parse_args = (function tailrecursion$hoplon$parse_args(p__6538){
var vec__6540 = p__6538;
var head = cljs.core.nth.call(null,vec__6540,(0),null);
var tail = cljs.core.nthnext.call(null,vec__6540,(1));
var args = vec__6540;
var kw1_QMARK_ = cljs.core.comp.call(null,cljs.core.keyword_QMARK_,cljs.core.first);
var mkkw = ((function (kw1_QMARK_,vec__6540,head,tail,args){
return (function (p1__6536_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.take_while.call(null,kw1_QMARK_,cljs.core.partition.call(null,(2),p1__6536_SHARP_)));
});})(kw1_QMARK_,vec__6540,head,tail,args))
;
var drkw = ((function (kw1_QMARK_,mkkw,vec__6540,head,tail,args){
return (function (p1__6537_SHARP_){
return cljs.core.mapcat.call(null,cljs.core.identity,cljs.core.drop_while.call(null,kw1_QMARK_,cljs.core.partition.call(null,(2),(2),cljs.core.PersistentVector.EMPTY,p1__6537_SHARP_)));
});})(kw1_QMARK_,mkkw,vec__6540,head,tail,args))
;
if(cljs.core.map_QMARK_.call(null,head)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [head,tailrecursion.hoplon.unsplice.call(null,tail)], null);
} else {
if((head instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,mkkw.call(null,args)),tailrecursion.hoplon.unsplice.call(null,drkw.call(null,args))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,tailrecursion.hoplon.unsplice.call(null,args)], null);

}
}
});
tailrecursion.hoplon.add_attributes_BANG_ = (function tailrecursion$hoplon$add_attributes_BANG_(this$,attr){
var key_STAR_ = (function (p1__6542_SHARP_,p2__6541_SHARP_){
var n = (function (){var s = cljs.core.name.call(null,p2__6541_SHARP_);
var c = cljs.core.last.call(null,s);
if(!(cljs.core._EQ_.call(null,"=",c))){
return s;
} else {
return s.slice((0),(-1));
}
})();
var p = n.substr((0),(3));
return cljs.core.keyword.call(null,cljs.core.namespace.call(null,p2__6541_SHARP_),((!(cljs.core._EQ_.call(null,p1__6542_SHARP_,p)))?n:n.substr((3))));
});
var dokey = cljs.core.partial.call(null,key_STAR_,"do-");
var onkey = cljs.core.partial.call(null,key_STAR_,"on-");
var dos = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ons = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var addcls = ((function (key_STAR_,dokey,onkey,dos,ons){
return (function (p1__6543_SHARP_,p2__6544_SHARP_){
return clojure.string.join.call(null," ",cljs.core.into.call(null,cljs.core.set.call(null,clojure.string.split.call(null,p1__6543_SHARP_,/ /)),clojure.string.split.call(null,p2__6544_SHARP_,/ /)));
});})(key_STAR_,dokey,onkey,dos,ons))
;
var seq__6567_6585 = cljs.core.seq.call(null,attr);
var chunk__6568_6586 = null;
var count__6569_6587 = (0);
var i__6570_6588 = (0);
while(true){
if((i__6570_6588 < count__6569_6587)){
var vec__6571_6589 = cljs.core._nth.call(null,chunk__6568_6586,i__6570_6588);
var k_6590 = cljs.core.nth.call(null,vec__6571_6589,(0),null);
var v_6591 = cljs.core.nth.call(null,vec__6571_6589,(1),null);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,v_6591))){
cljs.core.swap_BANG_.call(null,dos,cljs.core.assoc,dokey.call(null,k_6590),v_6591);
} else {
if(cljs.core.fn_QMARK_.call(null,v_6591)){
cljs.core.swap_BANG_.call(null,ons,cljs.core.assoc,onkey.call(null,k_6590),v_6591);
} else {
tailrecursion.hoplon.do_BANG_.call(null,this$,dokey.call(null,k_6590),v_6591);

}
}

var G__6592 = seq__6567_6585;
var G__6593 = chunk__6568_6586;
var G__6594 = count__6569_6587;
var G__6595 = (i__6570_6588 + (1));
seq__6567_6585 = G__6592;
chunk__6568_6586 = G__6593;
count__6569_6587 = G__6594;
i__6570_6588 = G__6595;
continue;
} else {
var temp__4126__auto___6596 = cljs.core.seq.call(null,seq__6567_6585);
if(temp__4126__auto___6596){
var seq__6567_6597__$1 = temp__4126__auto___6596;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6567_6597__$1)){
var c__4952__auto___6598 = cljs.core.chunk_first.call(null,seq__6567_6597__$1);
var G__6599 = cljs.core.chunk_rest.call(null,seq__6567_6597__$1);
var G__6600 = c__4952__auto___6598;
var G__6601 = cljs.core.count.call(null,c__4952__auto___6598);
var G__6602 = (0);
seq__6567_6585 = G__6599;
chunk__6568_6586 = G__6600;
count__6569_6587 = G__6601;
i__6570_6588 = G__6602;
continue;
} else {
var vec__6572_6603 = cljs.core.first.call(null,seq__6567_6597__$1);
var k_6604 = cljs.core.nth.call(null,vec__6572_6603,(0),null);
var v_6605 = cljs.core.nth.call(null,vec__6572_6603,(1),null);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,v_6605))){
cljs.core.swap_BANG_.call(null,dos,cljs.core.assoc,dokey.call(null,k_6604),v_6605);
} else {
if(cljs.core.fn_QMARK_.call(null,v_6605)){
cljs.core.swap_BANG_.call(null,ons,cljs.core.assoc,onkey.call(null,k_6604),v_6605);
} else {
tailrecursion.hoplon.do_BANG_.call(null,this$,dokey.call(null,k_6604),v_6605);

}
}

var G__6606 = cljs.core.next.call(null,seq__6567_6597__$1);
var G__6607 = null;
var G__6608 = (0);
var G__6609 = (0);
seq__6567_6585 = G__6606;
chunk__6568_6586 = G__6607;
count__6569_6587 = G__6608;
i__6570_6588 = G__6609;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq.call(null,cljs.core.deref.call(null,dos))){
setTimeout(((function (key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (){
var seq__6573 = cljs.core.seq.call(null,cljs.core.deref.call(null,dos));
var chunk__6574 = null;
var count__6575 = (0);
var i__6576 = (0);
while(true){
if((i__6576 < count__6575)){
var vec__6577 = cljs.core._nth.call(null,chunk__6574,i__6576);
var k = cljs.core.nth.call(null,vec__6577,(0),null);
var v = cljs.core.nth.call(null,vec__6577,(1),null);
tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref.call(null,v));

cljs.core.add_watch.call(null,v,cljs.core.gensym.call(null),((function (seq__6573,chunk__6574,count__6575,i__6576,vec__6577,k,v,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__6546_SHARP_,p2__6547_SHARP_,p3__6548_SHARP_,p4__6545_SHARP_){
return tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__6545_SHARP_);
});})(seq__6573,chunk__6574,count__6575,i__6576,vec__6577,k,v,key_STAR_,dokey,onkey,dos,ons,addcls))
);

var G__6610 = seq__6573;
var G__6611 = chunk__6574;
var G__6612 = count__6575;
var G__6613 = (i__6576 + (1));
seq__6573 = G__6610;
chunk__6574 = G__6611;
count__6575 = G__6612;
i__6576 = G__6613;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__6573);
if(temp__4126__auto__){
var seq__6573__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6573__$1)){
var c__4952__auto__ = cljs.core.chunk_first.call(null,seq__6573__$1);
var G__6614 = cljs.core.chunk_rest.call(null,seq__6573__$1);
var G__6615 = c__4952__auto__;
var G__6616 = cljs.core.count.call(null,c__4952__auto__);
var G__6617 = (0);
seq__6573 = G__6614;
chunk__6574 = G__6615;
count__6575 = G__6616;
i__6576 = G__6617;
continue;
} else {
var vec__6578 = cljs.core.first.call(null,seq__6573__$1);
var k = cljs.core.nth.call(null,vec__6578,(0),null);
var v = cljs.core.nth.call(null,vec__6578,(1),null);
tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref.call(null,v));

cljs.core.add_watch.call(null,v,cljs.core.gensym.call(null),((function (seq__6573,chunk__6574,count__6575,i__6576,vec__6578,k,v,seq__6573__$1,temp__4126__auto__,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__6546_SHARP_,p2__6547_SHARP_,p3__6548_SHARP_,p4__6545_SHARP_){
return tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__6545_SHARP_);
});})(seq__6573,chunk__6574,count__6575,i__6576,vec__6578,k,v,seq__6573__$1,temp__4126__auto__,key_STAR_,dokey,onkey,dos,ons,addcls))
);

var G__6618 = cljs.core.next.call(null,seq__6573__$1);
var G__6619 = null;
var G__6620 = (0);
var G__6621 = (0);
seq__6573 = G__6618;
chunk__6574 = G__6619;
count__6575 = G__6620;
i__6576 = G__6621;
continue;
}
} else {
return null;
}
}
break;
}
});})(key_STAR_,dokey,onkey,dos,ons,addcls))
,(0));
} else {
}

if(cljs.core.seq.call(null,cljs.core.deref.call(null,ons))){
setTimeout(((function (key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (){
var seq__6579 = cljs.core.seq.call(null,cljs.core.deref.call(null,ons));
var chunk__6580 = null;
var count__6581 = (0);
var i__6582 = (0);
while(true){
if((i__6582 < count__6581)){
var vec__6583 = cljs.core._nth.call(null,chunk__6580,i__6582);
var k = cljs.core.nth.call(null,vec__6583,(0),null);
var v = cljs.core.nth.call(null,vec__6583,(1),null);
tailrecursion.hoplon.on_BANG_.call(null,this$,k,v);

var G__6622 = seq__6579;
var G__6623 = chunk__6580;
var G__6624 = count__6581;
var G__6625 = (i__6582 + (1));
seq__6579 = G__6622;
chunk__6580 = G__6623;
count__6581 = G__6624;
i__6582 = G__6625;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__6579);
if(temp__4126__auto__){
var seq__6579__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6579__$1)){
var c__4952__auto__ = cljs.core.chunk_first.call(null,seq__6579__$1);
var G__6626 = cljs.core.chunk_rest.call(null,seq__6579__$1);
var G__6627 = c__4952__auto__;
var G__6628 = cljs.core.count.call(null,c__4952__auto__);
var G__6629 = (0);
seq__6579 = G__6626;
chunk__6580 = G__6627;
count__6581 = G__6628;
i__6582 = G__6629;
continue;
} else {
var vec__6584 = cljs.core.first.call(null,seq__6579__$1);
var k = cljs.core.nth.call(null,vec__6584,(0),null);
var v = cljs.core.nth.call(null,vec__6584,(1),null);
tailrecursion.hoplon.on_BANG_.call(null,this$,k,v);

var G__6630 = cljs.core.next.call(null,seq__6579__$1);
var G__6631 = null;
var G__6632 = (0);
var G__6633 = (0);
seq__6579 = G__6630;
chunk__6580 = G__6631;
count__6581 = G__6632;
i__6582 = G__6633;
continue;
}
} else {
return null;
}
}
break;
}
});})(key_STAR_,dokey,onkey,dos,ons,addcls))
,(0));
} else {
}

return this$;
});
tailrecursion.hoplon.append_child = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__6634_SHARP_,p2__6635_SHARP_){
return p1__6634_SHARP_.appendChild(p2__6635_SHARP_);
}):(function (p1__6636_SHARP_,p2__6637_SHARP_){
try{return p1__6636_SHARP_.appendChild(p2__6637_SHARP_);
}catch (e6638){if((e6638 instanceof Error)){
var _ = e6638;
return null;
} else {
throw e6638;

}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function tailrecursion$hoplon$replace_children_BANG_(this$,new_children){
jQuery(this$).empty();

return tailrecursion.hoplon.add_children_BANG_.call(null,this$,((cljs.core.sequential_QMARK_.call(null,new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null)));
});
tailrecursion.hoplon.add_children_BANG_ = (function tailrecursion$hoplon$add_children_BANG_(this$,p__6644){
var vec__6650 = p__6644;
var child_cell = cljs.core.nth.call(null,vec__6650,(0),null);
var _ = cljs.core.nthnext.call(null,vec__6650,(1));
var kids = vec__6650;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,child_cell))){
tailrecursion.hoplon.replace_children_BANG_.call(null,this$,cljs.core.deref.call(null,child_cell));

cljs.core.add_watch.call(null,child_cell,cljs.core.gensym.call(null),((function (vec__6650,child_cell,_,kids){
return (function (p1__6640_SHARP_,p2__6641_SHARP_,p3__6642_SHARP_,p4__6639_SHARP_){
return tailrecursion.hoplon.replace_children_BANG_.call(null,this$,p4__6639_SHARP_);
});})(vec__6650,child_cell,_,kids))
);
} else {
var node_6655 = ((function (vec__6650,child_cell,_,kids){
return (function (p1__6643_SHARP_){
if(typeof p1__6643_SHARP_ === 'string'){
return tailrecursion.hoplon.$text.call(null,p1__6643_SHARP_);
} else {
if(cljs.core.truth_(tailrecursion.hoplon.node_QMARK_.call(null,p1__6643_SHARP_))){
return p1__6643_SHARP_;
} else {
return null;
}
}
});})(vec__6650,child_cell,_,kids))
;
var seq__6651_6656 = cljs.core.seq.call(null,cljs.core.keep.call(null,node_6655,tailrecursion.hoplon.unsplice.call(null,kids)));
var chunk__6652_6657 = null;
var count__6653_6658 = (0);
var i__6654_6659 = (0);
while(true){
if((i__6654_6659 < count__6653_6658)){
var x_6660 = cljs.core._nth.call(null,chunk__6652_6657,i__6654_6659);
tailrecursion.hoplon.append_child.call(null,this$,x_6660);

var G__6661 = seq__6651_6656;
var G__6662 = chunk__6652_6657;
var G__6663 = count__6653_6658;
var G__6664 = (i__6654_6659 + (1));
seq__6651_6656 = G__6661;
chunk__6652_6657 = G__6662;
count__6653_6658 = G__6663;
i__6654_6659 = G__6664;
continue;
} else {
var temp__4126__auto___6665 = cljs.core.seq.call(null,seq__6651_6656);
if(temp__4126__auto___6665){
var seq__6651_6666__$1 = temp__4126__auto___6665;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6651_6666__$1)){
var c__4952__auto___6667 = cljs.core.chunk_first.call(null,seq__6651_6666__$1);
var G__6668 = cljs.core.chunk_rest.call(null,seq__6651_6666__$1);
var G__6669 = c__4952__auto___6667;
var G__6670 = cljs.core.count.call(null,c__4952__auto___6667);
var G__6671 = (0);
seq__6651_6656 = G__6668;
chunk__6652_6657 = G__6669;
count__6653_6658 = G__6670;
i__6654_6659 = G__6671;
continue;
} else {
var x_6672 = cljs.core.first.call(null,seq__6651_6666__$1);
tailrecursion.hoplon.append_child.call(null,this$,x_6672);

var G__6673 = cljs.core.next.call(null,seq__6651_6666__$1);
var G__6674 = null;
var G__6675 = (0);
var G__6676 = (0);
seq__6651_6656 = G__6673;
chunk__6652_6657 = G__6674;
count__6653_6658 = G__6675;
i__6654_6659 = G__6676;
continue;
}
} else {
}
}
break;
}
}

return this$;
});
tailrecursion.hoplon.on_append_BANG_ = (function tailrecursion$hoplon$on_append_BANG_(this$,f){
return this$.hoplonIFn = f;
});
Element.prototype.cljs$core$IFn$ = true;

Element.prototype.call = (function() { 
var G__6684__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__6678 = tailrecursion.hoplon.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__6678,(0),null);
var kids = cljs.core.nth.call(null,vec__6678,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__6679 = this$;
G__6679.hoplonIFn(attr,kids);

return G__6679;
} else {
var G__6680 = this$;
tailrecursion.hoplon.add_attributes_BANG_.call(null,G__6680,attr);

tailrecursion.hoplon.add_children_BANG_.call(null,G__6680,kids);

return G__6680;
}
};
var G__6684 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__6685__i = 0, G__6685__a = new Array(arguments.length -  1);
while (G__6685__i < G__6685__a.length) {G__6685__a[G__6685__i] = arguments[G__6685__i + 1]; ++G__6685__i;}
  args = new cljs.core.IndexedSeq(G__6685__a,0);
} 
return G__6684__delegate.call(this,self__,args);};
G__6684.cljs$lang$maxFixedArity = 1;
G__6684.cljs$lang$applyTo = (function (arglist__6686){
var self__ = cljs.core.first(arglist__6686);
var args = cljs.core.rest(arglist__6686);
return G__6684__delegate(self__,args);
});
G__6684.cljs$core$IFn$_invoke$arity$variadic = G__6684__delegate;
return G__6684;
})()
;

Element.prototype.apply = (function (self__,args6677){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args6677)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__6687__delegate = function (args){
var this$ = this;
var vec__6681 = tailrecursion.hoplon.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__6681,(0),null);
var kids = cljs.core.nth.call(null,vec__6681,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__6682 = this$;
G__6682.hoplonIFn(attr,kids);

return G__6682;
} else {
var G__6683 = this$;
tailrecursion.hoplon.add_attributes_BANG_.call(null,G__6683,attr);

tailrecursion.hoplon.add_children_BANG_.call(null,G__6683,kids);

return G__6683;
}
};
var G__6687 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6688__i = 0, G__6688__a = new Array(arguments.length -  0);
while (G__6688__i < G__6688__a.length) {G__6688__a[G__6688__i] = arguments[G__6688__i + 0]; ++G__6688__i;}
  args = new cljs.core.IndexedSeq(G__6688__a,0);
} 
return G__6687__delegate.call(this,args);};
G__6687.cljs$lang$maxFixedArity = 0;
G__6687.cljs$lang$applyTo = (function (arglist__6689){
var args = cljs.core.seq(arglist__6689);
return G__6687__delegate(args);
});
G__6687.cljs$core$IFn$_invoke$arity$variadic = G__6687__delegate;
return G__6687;
})()
;

Element.prototype.cljs$core$IPrintWithWriter$ = true;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.call(null,writer,"#<Element: ",this$__$1.tagName,">");
});
tailrecursion.hoplon.make_singleton_ctor = (function tailrecursion$hoplon$make_singleton_ctor(tag){
return (function() { 
var G__6700__delegate = function (args){
var vec__6695 = tailrecursion.hoplon.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__6695,(0),null);
var kids = cljs.core.nth.call(null,vec__6695,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
tailrecursion.hoplon.add_attributes_BANG_.call(null,elem,attrs);

jQuery(elem).empty();

var seq__6696 = cljs.core.seq.call(null,kids);
var chunk__6697 = null;
var count__6698 = (0);
var i__6699 = (0);
while(true){
if((i__6699 < count__6698)){
var k = cljs.core._nth.call(null,chunk__6697,i__6699);
elem.appendChild(k);

var G__6701 = seq__6696;
var G__6702 = chunk__6697;
var G__6703 = count__6698;
var G__6704 = (i__6699 + (1));
seq__6696 = G__6701;
chunk__6697 = G__6702;
count__6698 = G__6703;
i__6699 = G__6704;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__6696);
if(temp__4126__auto__){
var seq__6696__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6696__$1)){
var c__4952__auto__ = cljs.core.chunk_first.call(null,seq__6696__$1);
var G__6705 = cljs.core.chunk_rest.call(null,seq__6696__$1);
var G__6706 = c__4952__auto__;
var G__6707 = cljs.core.count.call(null,c__4952__auto__);
var G__6708 = (0);
seq__6696 = G__6705;
chunk__6697 = G__6706;
count__6698 = G__6707;
i__6699 = G__6708;
continue;
} else {
var k = cljs.core.first.call(null,seq__6696__$1);
elem.appendChild(k);

var G__6709 = cljs.core.next.call(null,seq__6696__$1);
var G__6710 = null;
var G__6711 = (0);
var G__6712 = (0);
seq__6696 = G__6709;
chunk__6697 = G__6710;
count__6698 = G__6711;
i__6699 = G__6712;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__6700 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6713__i = 0, G__6713__a = new Array(arguments.length -  0);
while (G__6713__i < G__6713__a.length) {G__6713__a[G__6713__i] = arguments[G__6713__i + 0]; ++G__6713__i;}
  args = new cljs.core.IndexedSeq(G__6713__a,0);
} 
return G__6700__delegate.call(this,args);};
G__6700.cljs$lang$maxFixedArity = 0;
G__6700.cljs$lang$applyTo = (function (arglist__6714){
var args = cljs.core.seq(arglist__6714);
return G__6700__delegate(args);
});
G__6700.cljs$core$IFn$_invoke$arity$variadic = G__6700__delegate;
return G__6700;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function tailrecursion$hoplon$make_elem_ctor(tag){
return (function() { 
var G__6715__delegate = function (args){
return cljs.core.apply.call(null,document.createElement(tag),args);
};
var G__6715 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6716__i = 0, G__6716__a = new Array(arguments.length -  0);
while (G__6716__i < G__6716__a.length) {G__6716__a[G__6716__i] = arguments[G__6716__i + 0]; ++G__6716__i;}
  args = new cljs.core.IndexedSeq(G__6716__a,0);
} 
return G__6715__delegate.call(this,args);};
G__6715.cljs$lang$maxFixedArity = 0;
G__6715.cljs$lang$applyTo = (function (arglist__6717){
var args = cljs.core.seq(arglist__6717);
return G__6715__delegate(args);
});
G__6715.cljs$core$IFn$_invoke$arity$variadic = G__6715__delegate;
return G__6715;
})()
;
});
tailrecursion.hoplon.html = (function tailrecursion$hoplon$html(){
var argseq__5207__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5207__auto__);
});

tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__6719 = tailrecursion.hoplon.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__6719,(0),null);
var _ = cljs.core.nth.call(null,vec__6719,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_.call(null,(document.getElementsByTagName("html")[(0)]),attrs);
});

tailrecursion.hoplon.html.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.html.cljs$lang$applyTo = (function (seq6718){
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6718));
});
tailrecursion.hoplon.body = tailrecursion.hoplon.make_singleton_ctor.call(null,"body");
tailrecursion.hoplon.head = tailrecursion.hoplon.make_singleton_ctor.call(null,"head");
tailrecursion.hoplon.a = tailrecursion.hoplon.make_elem_ctor.call(null,"a");
tailrecursion.hoplon.abbr = tailrecursion.hoplon.make_elem_ctor.call(null,"abbr");
tailrecursion.hoplon.acronym = tailrecursion.hoplon.make_elem_ctor.call(null,"acronym");
tailrecursion.hoplon.address = tailrecursion.hoplon.make_elem_ctor.call(null,"address");
tailrecursion.hoplon.applet = tailrecursion.hoplon.make_elem_ctor.call(null,"applet");
tailrecursion.hoplon.area = tailrecursion.hoplon.make_elem_ctor.call(null,"area");
tailrecursion.hoplon.article = tailrecursion.hoplon.make_elem_ctor.call(null,"article");
tailrecursion.hoplon.aside = tailrecursion.hoplon.make_elem_ctor.call(null,"aside");
tailrecursion.hoplon.audio = tailrecursion.hoplon.make_elem_ctor.call(null,"audio");
tailrecursion.hoplon.b = tailrecursion.hoplon.make_elem_ctor.call(null,"b");
tailrecursion.hoplon.base = tailrecursion.hoplon.make_elem_ctor.call(null,"base");
tailrecursion.hoplon.basefont = tailrecursion.hoplon.make_elem_ctor.call(null,"basefont");
tailrecursion.hoplon.bdi = tailrecursion.hoplon.make_elem_ctor.call(null,"bdi");
tailrecursion.hoplon.bdo = tailrecursion.hoplon.make_elem_ctor.call(null,"bdo");
tailrecursion.hoplon.big = tailrecursion.hoplon.make_elem_ctor.call(null,"big");
tailrecursion.hoplon.blockquote = tailrecursion.hoplon.make_elem_ctor.call(null,"blockquote");
tailrecursion.hoplon.br = tailrecursion.hoplon.make_elem_ctor.call(null,"br");
tailrecursion.hoplon.button = tailrecursion.hoplon.make_elem_ctor.call(null,"button");
tailrecursion.hoplon.canvas = tailrecursion.hoplon.make_elem_ctor.call(null,"canvas");
tailrecursion.hoplon.caption = tailrecursion.hoplon.make_elem_ctor.call(null,"caption");
tailrecursion.hoplon.center = tailrecursion.hoplon.make_elem_ctor.call(null,"center");
tailrecursion.hoplon.cite = tailrecursion.hoplon.make_elem_ctor.call(null,"cite");
tailrecursion.hoplon.code = tailrecursion.hoplon.make_elem_ctor.call(null,"code");
tailrecursion.hoplon.col = tailrecursion.hoplon.make_elem_ctor.call(null,"col");
tailrecursion.hoplon.colgroup = tailrecursion.hoplon.make_elem_ctor.call(null,"colgroup");
tailrecursion.hoplon.command = tailrecursion.hoplon.make_elem_ctor.call(null,"command");
tailrecursion.hoplon.data = tailrecursion.hoplon.make_elem_ctor.call(null,"data");
tailrecursion.hoplon.datalist = tailrecursion.hoplon.make_elem_ctor.call(null,"datalist");
tailrecursion.hoplon.dd = tailrecursion.hoplon.make_elem_ctor.call(null,"dd");
tailrecursion.hoplon.del = tailrecursion.hoplon.make_elem_ctor.call(null,"del");
tailrecursion.hoplon.details = tailrecursion.hoplon.make_elem_ctor.call(null,"details");
tailrecursion.hoplon.dfn = tailrecursion.hoplon.make_elem_ctor.call(null,"dfn");
tailrecursion.hoplon.dir = tailrecursion.hoplon.make_elem_ctor.call(null,"dir");
tailrecursion.hoplon.div = tailrecursion.hoplon.make_elem_ctor.call(null,"div");
tailrecursion.hoplon.dl = tailrecursion.hoplon.make_elem_ctor.call(null,"dl");
tailrecursion.hoplon.dt = tailrecursion.hoplon.make_elem_ctor.call(null,"dt");
tailrecursion.hoplon.em = tailrecursion.hoplon.make_elem_ctor.call(null,"em");
tailrecursion.hoplon.embed = tailrecursion.hoplon.make_elem_ctor.call(null,"embed");
tailrecursion.hoplon.eventsource = tailrecursion.hoplon.make_elem_ctor.call(null,"eventsource");
tailrecursion.hoplon.fieldset = tailrecursion.hoplon.make_elem_ctor.call(null,"fieldset");
tailrecursion.hoplon.figcaption = tailrecursion.hoplon.make_elem_ctor.call(null,"figcaption");
tailrecursion.hoplon.figure = tailrecursion.hoplon.make_elem_ctor.call(null,"figure");
tailrecursion.hoplon.font = tailrecursion.hoplon.make_elem_ctor.call(null,"font");
tailrecursion.hoplon.footer = tailrecursion.hoplon.make_elem_ctor.call(null,"footer");
tailrecursion.hoplon.form = tailrecursion.hoplon.make_elem_ctor.call(null,"form");
tailrecursion.hoplon.frame = tailrecursion.hoplon.make_elem_ctor.call(null,"frame");
tailrecursion.hoplon.frameset = tailrecursion.hoplon.make_elem_ctor.call(null,"frameset");
tailrecursion.hoplon.h1 = tailrecursion.hoplon.make_elem_ctor.call(null,"h1");
tailrecursion.hoplon.h2 = tailrecursion.hoplon.make_elem_ctor.call(null,"h2");
tailrecursion.hoplon.h3 = tailrecursion.hoplon.make_elem_ctor.call(null,"h3");
tailrecursion.hoplon.h4 = tailrecursion.hoplon.make_elem_ctor.call(null,"h4");
tailrecursion.hoplon.h5 = tailrecursion.hoplon.make_elem_ctor.call(null,"h5");
tailrecursion.hoplon.h6 = tailrecursion.hoplon.make_elem_ctor.call(null,"h6");
tailrecursion.hoplon.header = tailrecursion.hoplon.make_elem_ctor.call(null,"header");
tailrecursion.hoplon.hgroup = tailrecursion.hoplon.make_elem_ctor.call(null,"hgroup");
tailrecursion.hoplon.hr = tailrecursion.hoplon.make_elem_ctor.call(null,"hr");
tailrecursion.hoplon.i = tailrecursion.hoplon.make_elem_ctor.call(null,"i");
tailrecursion.hoplon.iframe = tailrecursion.hoplon.make_elem_ctor.call(null,"iframe");
tailrecursion.hoplon.img = tailrecursion.hoplon.make_elem_ctor.call(null,"img");
tailrecursion.hoplon.input = tailrecursion.hoplon.make_elem_ctor.call(null,"input");
tailrecursion.hoplon.ins = tailrecursion.hoplon.make_elem_ctor.call(null,"ins");
tailrecursion.hoplon.isindex = tailrecursion.hoplon.make_elem_ctor.call(null,"isindex");
tailrecursion.hoplon.kbd = tailrecursion.hoplon.make_elem_ctor.call(null,"kbd");
tailrecursion.hoplon.keygen = tailrecursion.hoplon.make_elem_ctor.call(null,"keygen");
tailrecursion.hoplon.label = tailrecursion.hoplon.make_elem_ctor.call(null,"label");
tailrecursion.hoplon.legend = tailrecursion.hoplon.make_elem_ctor.call(null,"legend");
tailrecursion.hoplon.li = tailrecursion.hoplon.make_elem_ctor.call(null,"li");
tailrecursion.hoplon.link = tailrecursion.hoplon.make_elem_ctor.call(null,"link");
tailrecursion.hoplon.html_map = tailrecursion.hoplon.make_elem_ctor.call(null,"map");
tailrecursion.hoplon.main = tailrecursion.hoplon.make_elem_ctor.call(null,"main");
tailrecursion.hoplon.mark = tailrecursion.hoplon.make_elem_ctor.call(null,"mark");
tailrecursion.hoplon.menu = tailrecursion.hoplon.make_elem_ctor.call(null,"menu");
tailrecursion.hoplon.html_meta = tailrecursion.hoplon.make_elem_ctor.call(null,"meta");
tailrecursion.hoplon.meter = tailrecursion.hoplon.make_elem_ctor.call(null,"meter");
tailrecursion.hoplon.nav = tailrecursion.hoplon.make_elem_ctor.call(null,"nav");
tailrecursion.hoplon.noframes = tailrecursion.hoplon.make_elem_ctor.call(null,"noframes");
tailrecursion.hoplon.noscript = tailrecursion.hoplon.make_elem_ctor.call(null,"noscript");
tailrecursion.hoplon.object = tailrecursion.hoplon.make_elem_ctor.call(null,"object");
tailrecursion.hoplon.ol = tailrecursion.hoplon.make_elem_ctor.call(null,"ol");
tailrecursion.hoplon.optgroup = tailrecursion.hoplon.make_elem_ctor.call(null,"optgroup");
tailrecursion.hoplon.option = tailrecursion.hoplon.make_elem_ctor.call(null,"option");
tailrecursion.hoplon.output = tailrecursion.hoplon.make_elem_ctor.call(null,"output");
tailrecursion.hoplon.p = tailrecursion.hoplon.make_elem_ctor.call(null,"p");
tailrecursion.hoplon.param = tailrecursion.hoplon.make_elem_ctor.call(null,"param");
tailrecursion.hoplon.pre = tailrecursion.hoplon.make_elem_ctor.call(null,"pre");
tailrecursion.hoplon.progress = tailrecursion.hoplon.make_elem_ctor.call(null,"progress");
tailrecursion.hoplon.q = tailrecursion.hoplon.make_elem_ctor.call(null,"q");
tailrecursion.hoplon.rp = tailrecursion.hoplon.make_elem_ctor.call(null,"rp");
tailrecursion.hoplon.rt = tailrecursion.hoplon.make_elem_ctor.call(null,"rt");
tailrecursion.hoplon.ruby = tailrecursion.hoplon.make_elem_ctor.call(null,"ruby");
tailrecursion.hoplon.s = tailrecursion.hoplon.make_elem_ctor.call(null,"s");
tailrecursion.hoplon.samp = tailrecursion.hoplon.make_elem_ctor.call(null,"samp");
tailrecursion.hoplon.script = tailrecursion.hoplon.make_elem_ctor.call(null,"script");
tailrecursion.hoplon.section = tailrecursion.hoplon.make_elem_ctor.call(null,"section");
tailrecursion.hoplon.select = tailrecursion.hoplon.make_elem_ctor.call(null,"select");
tailrecursion.hoplon.small = tailrecursion.hoplon.make_elem_ctor.call(null,"small");
tailrecursion.hoplon.source = tailrecursion.hoplon.make_elem_ctor.call(null,"source");
tailrecursion.hoplon.span = tailrecursion.hoplon.make_elem_ctor.call(null,"span");
tailrecursion.hoplon.strike = tailrecursion.hoplon.make_elem_ctor.call(null,"strike");
tailrecursion.hoplon.strong = tailrecursion.hoplon.make_elem_ctor.call(null,"strong");
tailrecursion.hoplon.style = tailrecursion.hoplon.make_elem_ctor.call(null,"style");
tailrecursion.hoplon.sub = tailrecursion.hoplon.make_elem_ctor.call(null,"sub");
tailrecursion.hoplon.summary = tailrecursion.hoplon.make_elem_ctor.call(null,"summary");
tailrecursion.hoplon.sup = tailrecursion.hoplon.make_elem_ctor.call(null,"sup");
tailrecursion.hoplon.table = tailrecursion.hoplon.make_elem_ctor.call(null,"table");
tailrecursion.hoplon.tbody = tailrecursion.hoplon.make_elem_ctor.call(null,"tbody");
tailrecursion.hoplon.td = tailrecursion.hoplon.make_elem_ctor.call(null,"td");
tailrecursion.hoplon.textarea = tailrecursion.hoplon.make_elem_ctor.call(null,"textarea");
tailrecursion.hoplon.tfoot = tailrecursion.hoplon.make_elem_ctor.call(null,"tfoot");
tailrecursion.hoplon.th = tailrecursion.hoplon.make_elem_ctor.call(null,"th");
tailrecursion.hoplon.thead = tailrecursion.hoplon.make_elem_ctor.call(null,"thead");
tailrecursion.hoplon.html_time = tailrecursion.hoplon.make_elem_ctor.call(null,"time");
tailrecursion.hoplon.title = tailrecursion.hoplon.make_elem_ctor.call(null,"title");
tailrecursion.hoplon.tr = tailrecursion.hoplon.make_elem_ctor.call(null,"tr");
tailrecursion.hoplon.track = tailrecursion.hoplon.make_elem_ctor.call(null,"track");
tailrecursion.hoplon.tt = tailrecursion.hoplon.make_elem_ctor.call(null,"tt");
tailrecursion.hoplon.u = tailrecursion.hoplon.make_elem_ctor.call(null,"u");
tailrecursion.hoplon.ul = tailrecursion.hoplon.make_elem_ctor.call(null,"ul");
tailrecursion.hoplon.html_var = tailrecursion.hoplon.make_elem_ctor.call(null,"var");
tailrecursion.hoplon.video = tailrecursion.hoplon.make_elem_ctor.call(null,"video");
tailrecursion.hoplon.wbr = tailrecursion.hoplon.make_elem_ctor.call(null,"wbr");
tailrecursion.hoplon.spliced = cljs.core.vector;
tailrecursion.hoplon.$text = (function tailrecursion$hoplon$$text(p1__6720_SHARP_){
return document.createTextNode(p1__6720_SHARP_);
});
tailrecursion.hoplon.$comment = (function tailrecursion$hoplon$$comment(p1__6721_SHARP_){
return document.createComment(p1__6721_SHARP_);
});
tailrecursion.hoplon.add_initfn_BANG_ = (function tailrecursion$hoplon$add_initfn_BANG_(f){
return jQuery(f);
});
tailrecursion.hoplon.page_load = (function tailrecursion$hoplon$page_load(){
return jQuery(document).trigger("page-load");
});
tailrecursion.hoplon.on_page_load = (function tailrecursion$hoplon$on_page_load(f){
return jQuery(document).on("page-load",f);
});
tailrecursion.hoplon.add_initfn_BANG_.call(null,(function (){
return jQuery("body").on("submit",(function (p1__6722_SHARP_){
var e = jQuery(p1__6722_SHARP_.target);
if(cljs.core.truth_((function (){var or__4167__auto__ = e.attr("action");
if(cljs.core.truth_(or__4167__auto__)){
return or__4167__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__6722_SHARP_.preventDefault();
}
}));
}));
tailrecursion.hoplon.by_id = (function tailrecursion$hoplon$by_id(id){
return document.getElementById(cljs.core.name.call(null,id));
});
tailrecursion.hoplon.val_id = (function tailrecursion$hoplon$val_id(id){
return tailrecursion.hoplon.do_BANG_.call(null,tailrecursion.hoplon.by_id.call(null,id),new cljs.core.Keyword(null,"value","value",305978217));
});
tailrecursion.hoplon.rel = (function tailrecursion$hoplon$rel(other,event){
var os = cljs.core.js__GT_clj.call(null,jQuery(other).offset());
var ox = os.call(null,"left");
var oy = os.call(null,"top");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(event.pageX - ox),new cljs.core.Keyword(null,"y","y",-1757859776),(event.pageY - oy)], null);
});
tailrecursion.hoplon.relx = (function tailrecursion$hoplon$relx(other,event){
return new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.rel.call(null,other,event));
});
tailrecursion.hoplon.rely = (function tailrecursion$hoplon$rely(other,event){
return new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.rel.call(null,other,event));
});
tailrecursion.hoplon.rel_event = (function tailrecursion$hoplon$rel_event(rel_to,tag,handler){
return (function (event){
(event[[cljs.core.str(tag),cljs.core.str("X")].join('')] = tailrecursion.hoplon.relx.call(null,rel_to,event));

(event[[cljs.core.str(tag),cljs.core.str("Y")].join('')] = tailrecursion.hoplon.rely.call(null,rel_to,event));

return handler.call(null,event);
});
});
tailrecursion.hoplon.text_val_BANG_ = (function tailrecursion$hoplon$text_val_BANG_(){
var G__6724 = arguments.length;
switch (G__6724) {
case 1:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.val();
});

tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.val([cljs.core.str(v)].join(''));
});

tailrecursion.hoplon.text_val_BANG_.cljs$lang$maxFixedArity = 2;
tailrecursion.hoplon.check_val_BANG_ = (function tailrecursion$hoplon$check_val_BANG_(){
var G__6727 = arguments.length;
switch (G__6727) {
case 1:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.is(":checked");
});

tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$.call(null,v));
});

tailrecursion.hoplon.check_val_BANG_.cljs$lang$maxFixedArity = 2;
if(typeof tailrecursion.hoplon.do_BANG_ !== 'undefined'){
} else {
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__5062__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5063__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5064__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5065__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5066__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tailrecursion.hoplon","do!"),((function (method_table__5062__auto__,prefer_table__5063__auto__,method_cache__5064__auto__,cached_hierarchy__5065__auto__,hierarchy__5066__auto__){
return (function (elem,key,val){
return key;
});})(method_table__5062__auto__,prefer_table__5063__auto__,method_cache__5064__auto__,cached_hierarchy__5065__auto__,hierarchy__5066__auto__))
,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534),hierarchy__5066__auto__,method_table__5062__auto__,prefer_table__5063__auto__,method_cache__5064__auto__,cached_hierarchy__5065__auto__));
})();
}
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534),(function (elem,key,val){
return tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap.fromArray([key,val], true, false));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"value","value",305978217),(function() { 
var G__6729__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__6729 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__6730__i = 0, G__6730__a = new Array(arguments.length -  2);
while (G__6730__i < G__6730__a.length) {G__6730__a[G__6730__i] = arguments[G__6730__i + 2]; ++G__6730__i;}
  args = new cljs.core.IndexedSeq(G__6730__a,0);
} 
return G__6729__delegate.call(this,elem,_,args);};
G__6729.cljs$lang$maxFixedArity = 2;
G__6729.cljs$lang$applyTo = (function (arglist__6731){
var elem = cljs.core.first(arglist__6731);
arglist__6731 = cljs.core.next(arglist__6731);
var _ = cljs.core.first(arglist__6731);
var args = cljs.core.rest(arglist__6731);
return G__6729__delegate(elem,_,args);
});
G__6729.cljs$core$IFn$_invoke$arity$variadic = G__6729__delegate;
return G__6729;
})()
);
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (elem,_,kvs){
var e = jQuery(elem);
var seq__6732 = cljs.core.seq.call(null,kvs);
var chunk__6733 = null;
var count__6734 = (0);
var i__6735 = (0);
while(true){
if((i__6735 < count__6734)){
var vec__6736 = cljs.core._nth.call(null,chunk__6733,i__6735);
var k = cljs.core.nth.call(null,vec__6736,(0),null);
var v = cljs.core.nth.call(null,vec__6736,(1),null);
var k_6738__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_6738__$1);
} else {
e.attr(k_6738__$1,((cljs.core._EQ_.call(null,true,v))?k_6738__$1:v));
}

var G__6739 = seq__6732;
var G__6740 = chunk__6733;
var G__6741 = count__6734;
var G__6742 = (i__6735 + (1));
seq__6732 = G__6739;
chunk__6733 = G__6740;
count__6734 = G__6741;
i__6735 = G__6742;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__6732);
if(temp__4126__auto__){
var seq__6732__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6732__$1)){
var c__4952__auto__ = cljs.core.chunk_first.call(null,seq__6732__$1);
var G__6743 = cljs.core.chunk_rest.call(null,seq__6732__$1);
var G__6744 = c__4952__auto__;
var G__6745 = cljs.core.count.call(null,c__4952__auto__);
var G__6746 = (0);
seq__6732 = G__6743;
chunk__6733 = G__6744;
count__6734 = G__6745;
i__6735 = G__6746;
continue;
} else {
var vec__6737 = cljs.core.first.call(null,seq__6732__$1);
var k = cljs.core.nth.call(null,vec__6737,(0),null);
var v = cljs.core.nth.call(null,vec__6737,(1),null);
var k_6747__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_6747__$1);
} else {
e.attr(k_6747__$1,((cljs.core._EQ_.call(null,true,v))?k_6747__$1:v));
}

var G__6748 = cljs.core.next.call(null,seq__6732__$1);
var G__6749 = null;
var G__6750 = (0);
var G__6751 = (0);
seq__6732 = G__6748;
chunk__6733 = G__6749;
count__6734 = G__6750;
i__6735 = G__6751;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var __GT_map = ((function (elem__$1){
return (function (p1__6752_SHARP_){
return cljs.core.zipmap.call(null,p1__6752_SHARP_,cljs.core.repeat.call(null,true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_.call(null,kvs))?kvs:__GT_map.call(null,((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq.call(null,kvs))));
var seq__6753 = cljs.core.seq.call(null,clmap);
var chunk__6754 = null;
var count__6755 = (0);
var i__6756 = (0);
while(true){
if((i__6756 < count__6755)){
var vec__6757 = cljs.core._nth.call(null,chunk__6754,i__6756);
var c = cljs.core.nth.call(null,vec__6757,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__6757,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__6759 = seq__6753;
var G__6760 = chunk__6754;
var G__6761 = count__6755;
var G__6762 = (i__6756 + (1));
seq__6753 = G__6759;
chunk__6754 = G__6760;
count__6755 = G__6761;
i__6756 = G__6762;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__6753);
if(temp__4126__auto__){
var seq__6753__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6753__$1)){
var c__4952__auto__ = cljs.core.chunk_first.call(null,seq__6753__$1);
var G__6763 = cljs.core.chunk_rest.call(null,seq__6753__$1);
var G__6764 = c__4952__auto__;
var G__6765 = cljs.core.count.call(null,c__4952__auto__);
var G__6766 = (0);
seq__6753 = G__6763;
chunk__6754 = G__6764;
count__6755 = G__6765;
i__6756 = G__6766;
continue;
} else {
var vec__6758 = cljs.core.first.call(null,seq__6753__$1);
var c = cljs.core.nth.call(null,vec__6758,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__6758,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__6767 = cljs.core.next.call(null,seq__6753__$1);
var G__6768 = null;
var G__6769 = (0);
var G__6770 = (0);
seq__6753 = G__6767;
chunk__6754 = G__6768;
count__6755 = G__6769;
i__6756 = G__6770;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"css","css",1135045163),(function (elem,_,kvs){
var e = jQuery(elem);
var seq__6771 = cljs.core.seq.call(null,kvs);
var chunk__6772 = null;
var count__6773 = (0);
var i__6774 = (0);
while(true){
if((i__6774 < count__6773)){
var vec__6775 = cljs.core._nth.call(null,chunk__6772,i__6774);
var k = cljs.core.nth.call(null,vec__6775,(0),null);
var v = cljs.core.nth.call(null,vec__6775,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__6777 = seq__6771;
var G__6778 = chunk__6772;
var G__6779 = count__6773;
var G__6780 = (i__6774 + (1));
seq__6771 = G__6777;
chunk__6772 = G__6778;
count__6773 = G__6779;
i__6774 = G__6780;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__6771);
if(temp__4126__auto__){
var seq__6771__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6771__$1)){
var c__4952__auto__ = cljs.core.chunk_first.call(null,seq__6771__$1);
var G__6781 = cljs.core.chunk_rest.call(null,seq__6771__$1);
var G__6782 = c__4952__auto__;
var G__6783 = cljs.core.count.call(null,c__4952__auto__);
var G__6784 = (0);
seq__6771 = G__6781;
chunk__6772 = G__6782;
count__6773 = G__6783;
i__6774 = G__6784;
continue;
} else {
var vec__6776 = cljs.core.first.call(null,seq__6771__$1);
var k = cljs.core.nth.call(null,vec__6776,(0),null);
var v = cljs.core.nth.call(null,vec__6776,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__6785 = cljs.core.next.call(null,seq__6771__$1);
var G__6786 = null;
var G__6787 = (0);
var G__6788 = (0);
seq__6771 = G__6785;
chunk__6772 = G__6786;
count__6773 = G__6787;
i__6774 = G__6788;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"toggle","toggle",1291842030),(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$.call(null,v));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"slide-toggle","slide-toggle",968641513),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"fade-toggle","fade-toggle",-1468421852),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"focus","focus",234677911),(function (elem,_,v){
return setTimeout((function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
}),(0));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"select","select",1147833503),(function (elem,_,___$1){
return jQuery(elem).select();
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"focus-select","focus-select",1107982934),(function (elem,_,v){
if(cljs.core.truth_(v)){
tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"focus","focus",234677911),v);

return tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"select","select",1147833503),v);
} else {
return null;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"text","text",-1790561697),(function (elem,_,v){
return jQuery(elem).text([cljs.core.str(v)].join(''));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"html","html",-998796897),(function (elem,_,v){
return jQuery(elem).html(v);
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"scroll-to","scroll-to",-34957602),(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scrollTop","scrollTop",-1143661921),elem__$1.offset().top], null)));
} else {
return null;
}
}));
if(typeof tailrecursion.hoplon.on_BANG_ !== 'undefined'){
} else {
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__5062__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5063__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5064__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5065__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5066__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tailrecursion.hoplon","on!"),((function (method_table__5062__auto__,prefer_table__5063__auto__,method_cache__5064__auto__,cached_hierarchy__5065__auto__,hierarchy__5066__auto__){
return (function (elem,event,callback){
return event;
});})(method_table__5062__auto__,prefer_table__5063__auto__,method_cache__5064__auto__,cached_hierarchy__5065__auto__,hierarchy__5066__auto__))
,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534),hierarchy__5066__auto__,method_table__5062__auto__,prefer_table__5063__auto__,method_cache__5064__auto__,cached_hierarchy__5065__auto__));
})();
}
jQuery.Event.prototype.cljs$core$IDeref$ = true;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return jQuery(this$__$1.target).val();
});
cljs.core._add_method.call(null,tailrecursion.hoplon.on_BANG_,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534),(function (elem,event,callback){
return tailrecursion.hoplon.when_dom.call(null,elem,(function (){
return jQuery(elem).on(cljs.core.name.call(null,event),callback);
}));
}));
tailrecursion.hoplon.loop_tpl_STAR_ = (function tailrecursion$hoplon$loop_tpl_STAR_(items,reverse_QMARK_,tpl){
var pool_size = tailrecursion.javelin.cell.call(null,(0));
var items_seq = tailrecursion.javelin.formula.call(null,((function (pool_size){
return (function (G__6814,G__6815){
return G__6814.call(null,G__6815);
});})(pool_size))
).call(null,cljs.core.seq,items);
var cur_count = tailrecursion.javelin.formula.call(null,((function (pool_size,items_seq){
return (function (G__6817,G__6816){
return G__6816.call(null,G__6817);
});})(pool_size,items_seq))
).call(null,items_seq,cljs.core.count);
var show_ith_QMARK_ = ((function (pool_size,items_seq,cur_count){
return (function (p1__6789_SHARP_){
return tailrecursion.javelin.formula.call(null,((function (pool_size,items_seq,cur_count){
return (function (G__6818,G__6819){
return (G__6818 < G__6819);
});})(pool_size,items_seq,cur_count))
).call(null,p1__6789_SHARP_,cur_count);
});})(pool_size,items_seq,cur_count))
;
var ith_item = ((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (p1__6790_SHARP_){
return tailrecursion.javelin.formula.call(null,((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (G__6821,G__6822,G__6820){
return G__6820.call(null,G__6821,G__6822);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
).call(null,items_seq,p1__6790_SHARP_,tailrecursion.hoplon.safe_nth);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
;
var d = tailrecursion.hoplon.span.call(null);
tailrecursion.hoplon.when_dom.call(null,d,((function (d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (){
var p = d.parentNode;
p.removeChild(d);

return tailrecursion.javelin.formula.call(null,((function (p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (G__6836,G__6834,G__6829,G__6827,G__6828,G__6833,G__6835,G__6830,G__6832,G__6831){
if(cljs.core.truth_((G__6827 < G__6828))){
var seq__6823_6837 = cljs.core.seq.call(null,G__6829.call(null,G__6827,G__6828));
var chunk__6824_6838 = null;
var count__6825_6839 = (0);
var i__6826_6840 = (0);
while(true){
if(cljs.core.truth_((i__6826_6840 < count__6825_6839))){
var i_6841 = cljs.core._nth.call(null,chunk__6824_6838,i__6826_6840);
var e_6842 = G__6830.call(null,G__6831.call(null,i_6841)).call(null,new cljs.core.Keyword(null,"do-toggle","do-toggle",-570648102),G__6832.call(null,i_6841));
if(cljs.core.not.call(null,G__6833)){
G__6834.appendChild(e_6842);
} else {
G__6834.insertBefore(e_6842,G__6834.firstChild);
}

var G__6843 = seq__6823_6837;
var G__6844 = chunk__6824_6838;
var G__6845 = count__6825_6839;
var G__6846 = (i__6826_6840 + (1));
seq__6823_6837 = G__6843;
chunk__6824_6838 = G__6844;
count__6825_6839 = G__6845;
i__6826_6840 = G__6846;
continue;
} else {
var temp__4126__auto___6847 = cljs.core.seq.call(null,seq__6823_6837);
if(temp__4126__auto___6847){
var seq__6823_6848__$1 = temp__4126__auto___6847;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6823_6848__$1)){
var c__4952__auto___6849 = cljs.core.chunk_first.call(null,seq__6823_6848__$1);
var G__6850 = cljs.core.chunk_rest.call(null,seq__6823_6848__$1);
var G__6851 = c__4952__auto___6849;
var G__6852 = cljs.core.count.call(null,c__4952__auto___6849);
var G__6853 = (0);
seq__6823_6837 = G__6850;
chunk__6824_6838 = G__6851;
count__6825_6839 = G__6852;
i__6826_6840 = G__6853;
continue;
} else {
var i_6854 = cljs.core.first.call(null,seq__6823_6848__$1);
var e_6855 = G__6830.call(null,G__6831.call(null,i_6854)).call(null,new cljs.core.Keyword(null,"do-toggle","do-toggle",-570648102),G__6832.call(null,i_6854));
if(cljs.core.not.call(null,G__6833)){
G__6834.appendChild(e_6855);
} else {
G__6834.insertBefore(e_6855,G__6834.firstChild);
}

var G__6856 = cljs.core.next.call(null,seq__6823_6848__$1);
var G__6857 = null;
var G__6858 = (0);
var G__6859 = (0);
seq__6823_6837 = G__6856;
chunk__6824_6838 = G__6857;
count__6825_6839 = G__6858;
i__6826_6840 = G__6859;
continue;
}
} else {
}
}
break;
}

return G__6835.call(null,G__6836,G__6828);
} else {
return null;
}
});})(p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item))
).call(null,tailrecursion.javelin.cell.call(null,pool_size),p,cljs.core.range,pool_size,cur_count,reverse_QMARK_,cljs.core.reset_BANG_,tpl,show_ith_QMARK_,ith_item);
});})(d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item))
);

return d;
});
/**
 * Manage the URL hash via Javelin cells. There are three arities:
 * 
 * - When called with no arguments this function returns a formula cell whose
 * value is the URL hash or nil.
 * 
 * - When called with a single string argument, the argument is taken as the
 * default value, which is returned in place of nil when there is no hash.
 * 
 * - When a single cell argument is provided, the URL hash is kept synced to the
 * value of the cell.
 * 
 * - When a cell and a callback function are both provided, the URL hash is kept
 * synced to the value of the cell as above, and any attempt to change the hash
 * other than via the setter cell causes the callback to be called. The callback
 * should be a function of one argument, the requested URL hash.
 */
tailrecursion.hoplon.route_cell = (function tailrecursion$hoplon$route_cell(){
var G__6861 = arguments.length;
switch (G__6861) {
case 0:
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$0 = (function (){
var r = (function (){var ret__5457__auto__ = tailrecursion.javelin.cell.call(null,window.location.hash);
setInterval(((function (ret__5457__auto__){
return (function (){
return cljs.core.reset_BANG_.call(null,ret__5457__auto__,window.location.hash);
});})(ret__5457__auto__))
,(100));

return tailrecursion.javelin.formula.call(null,((function (ret__5457__auto__){
return (function (G__6862){
return G__6862;
});})(ret__5457__auto__))
).call(null,ret__5457__auto__);
})();
return tailrecursion.javelin.formula.call(null,((function (r){
return (function (G__6864,G__6863){
if(cljs.core.truth_(G__6863.call(null,"",G__6864))){
return G__6864;
} else {
return null;
}
});})(r))
).call(null,r,cljs.core.not_EQ_);
});

tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$1 = (function (setter_or_dfl){
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,setter_or_dfl))){
var setter__5458__auto__ = setter_or_dfl;
var callback__5459__auto__ = (function (){var or__4167__auto__ = null;
if(cljs.core.truth_(or__4167__auto__)){
return or__4167__auto__;
} else {
return cljs.core.identity;
}
})();
tailrecursion.javelin.formula.call(null,((function (setter__5458__auto__,callback__5459__auto__){
return (function (G__6866,G__6865){
return G__6865.location.hash = G__6866;
});})(setter__5458__auto__,callback__5459__auto__))
).call(null,setter__5458__auto__,window);

setInterval(((function (setter__5458__auto__,callback__5459__auto__){
return (function (){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,setter__5458__auto__),window.location.hash)){
callback__5459__auto__.call(null,window.location.hash);

return window.location.hash = cljs.core.deref.call(null,setter__5458__auto__);
} else {
return null;
}
});})(setter__5458__auto__,callback__5459__auto__))
,(100));

return setter__5458__auto__;
} else {
var r = tailrecursion.hoplon.route_cell.call(null);
return tailrecursion.javelin.formula.call(null,((function (r){
return (function (G__6867,G__6868){
var or__4167__auto__ = G__6867;
if(cljs.core.truth_(or__4167__auto__)){
return or__4167__auto__;
} else {
return G__6868;
}
});})(r))
).call(null,r,setter_or_dfl);
}
});

tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$2 = (function (setter,callback){
var setter__5458__auto__ = setter;
var callback__5459__auto__ = (function (){var or__4167__auto__ = callback;
if(cljs.core.truth_(or__4167__auto__)){
return or__4167__auto__;
} else {
return cljs.core.identity;
}
})();
tailrecursion.javelin.formula.call(null,((function (setter__5458__auto__,callback__5459__auto__){
return (function (G__6870,G__6869){
return G__6869.location.hash = G__6870;
});})(setter__5458__auto__,callback__5459__auto__))
).call(null,setter__5458__auto__,window);

setInterval(((function (setter__5458__auto__,callback__5459__auto__){
return (function (){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,setter__5458__auto__),window.location.hash)){
callback__5459__auto__.call(null,window.location.hash);

return window.location.hash = cljs.core.deref.call(null,setter__5458__auto__);
} else {
return null;
}
});})(setter__5458__auto__,callback__5459__auto__))
,(100));

return setter__5458__auto__;
});

tailrecursion.hoplon.route_cell.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=hoplon.js.map