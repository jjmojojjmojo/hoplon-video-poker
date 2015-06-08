// Compiled by ClojureScript 0.0-3196 {}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('tailrecursion.javelin');
goog.require('cljsjs.jquery');



tailrecursion.hoplon.is_ie8 = cljs.core.not.call(null,(window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__6536_SHARP_){
return (p1__6536_SHARP_ instanceof Node);
}):(function (p1__6537_SHARP_){
try{return p1__6537_SHARP_.nodeType;
}catch (e6538){if((e6538 instanceof Error)){
var _ = e6538;
return null;
} else {
throw e6538;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__6539_SHARP_){
try{return cljs.core.vector_QMARK_.call(null,p1__6539_SHARP_);
}catch (e6540){if((e6540 instanceof Error)){
var _ = e6540;
return null;
} else {
throw e6540;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__6541_SHARP_){
try{return cljs.core.seq_QMARK_.call(null,p1__6541_SHARP_);
}catch (e6542){if((e6542 instanceof Error)){
var _ = e6542;
return null;
} else {
throw e6542;

}
}}));
cljs.core.set_print_fn_BANG_.call(null,(function (p1__6543_SHARP_){
if(cljs.core.truth_((function (){var and__4155__auto__ = console;
if(cljs.core.truth_(and__4155__auto__)){
return console.log;
} else {
return and__4155__auto__;
}
})())){
return console.log(p1__6543_SHARP_);
} else {
return null;
}
}));
tailrecursion.hoplon.safe_nth = (function tailrecursion$hoplon$safe_nth(){
var G__6545 = arguments.length;
switch (G__6545) {
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
}catch (e6546){if((e6546 instanceof Error)){
var _ = e6546;
return not_found;
} else {
throw e6546;

}
}});

tailrecursion.hoplon.safe_nth.cljs$lang$maxFixedArity = 3;
tailrecursion.hoplon.timeout = (function tailrecursion$hoplon$timeout(){
var G__6549 = arguments.length;
switch (G__6549) {
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
return cljs.core.mapcat.call(null,(function (p1__6551_SHARP_){
if(cljs.core.truth_((function (){var or__4167__auto__ = tailrecursion.hoplon.seq_QMARK__STAR_.call(null,p1__6551_SHARP_);
if(cljs.core.truth_(or__4167__auto__)){
return or__4167__auto__;
} else {
return tailrecursion.hoplon.vector_QMARK__STAR_.call(null,p1__6551_SHARP_);
}
})())){
return tailrecursion$hoplon$unsplice.call(null,p1__6551_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6551_SHARP_], null);
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
tailrecursion.hoplon.parse_args = (function tailrecursion$hoplon$parse_args(p__6554){
var vec__6556 = p__6554;
var head = cljs.core.nth.call(null,vec__6556,(0),null);
var tail = cljs.core.nthnext.call(null,vec__6556,(1));
var args = vec__6556;
var kw1_QMARK_ = cljs.core.comp.call(null,cljs.core.keyword_QMARK_,cljs.core.first);
var mkkw = ((function (kw1_QMARK_,vec__6556,head,tail,args){
return (function (p1__6552_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.take_while.call(null,kw1_QMARK_,cljs.core.partition.call(null,(2),p1__6552_SHARP_)));
});})(kw1_QMARK_,vec__6556,head,tail,args))
;
var drkw = ((function (kw1_QMARK_,mkkw,vec__6556,head,tail,args){
return (function (p1__6553_SHARP_){
return cljs.core.mapcat.call(null,cljs.core.identity,cljs.core.drop_while.call(null,kw1_QMARK_,cljs.core.partition.call(null,(2),(2),cljs.core.PersistentVector.EMPTY,p1__6553_SHARP_)));
});})(kw1_QMARK_,mkkw,vec__6556,head,tail,args))
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
var key_STAR_ = (function (p1__6558_SHARP_,p2__6557_SHARP_){
var n = (function (){var s = cljs.core.name.call(null,p2__6557_SHARP_);
var c = cljs.core.last.call(null,s);
if(!(cljs.core._EQ_.call(null,"=",c))){
return s;
} else {
return s.slice((0),(-1));
}
})();
var p = n.substr((0),(3));
return cljs.core.keyword.call(null,cljs.core.namespace.call(null,p2__6557_SHARP_),((!(cljs.core._EQ_.call(null,p1__6558_SHARP_,p)))?n:n.substr((3))));
});
var dokey = cljs.core.partial.call(null,key_STAR_,"do-");
var onkey = cljs.core.partial.call(null,key_STAR_,"on-");
var dos = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ons = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var addcls = ((function (key_STAR_,dokey,onkey,dos,ons){
return (function (p1__6559_SHARP_,p2__6560_SHARP_){
return clojure.string.join.call(null," ",cljs.core.into.call(null,cljs.core.set.call(null,clojure.string.split.call(null,p1__6559_SHARP_,/ /)),clojure.string.split.call(null,p2__6560_SHARP_,/ /)));
});})(key_STAR_,dokey,onkey,dos,ons))
;
var seq__6583_6601 = cljs.core.seq.call(null,attr);
var chunk__6584_6602 = null;
var count__6585_6603 = (0);
var i__6586_6604 = (0);
while(true){
if((i__6586_6604 < count__6585_6603)){
var vec__6587_6605 = cljs.core._nth.call(null,chunk__6584_6602,i__6586_6604);
var k_6606 = cljs.core.nth.call(null,vec__6587_6605,(0),null);
var v_6607 = cljs.core.nth.call(null,vec__6587_6605,(1),null);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,v_6607))){
cljs.core.swap_BANG_.call(null,dos,cljs.core.assoc,dokey.call(null,k_6606),v_6607);
} else {
if(cljs.core.fn_QMARK_.call(null,v_6607)){
cljs.core.swap_BANG_.call(null,ons,cljs.core.assoc,onkey.call(null,k_6606),v_6607);
} else {
tailrecursion.hoplon.do_BANG_.call(null,this$,dokey.call(null,k_6606),v_6607);

}
}

var G__6608 = seq__6583_6601;
var G__6609 = chunk__6584_6602;
var G__6610 = count__6585_6603;
var G__6611 = (i__6586_6604 + (1));
seq__6583_6601 = G__6608;
chunk__6584_6602 = G__6609;
count__6585_6603 = G__6610;
i__6586_6604 = G__6611;
continue;
} else {
var temp__4126__auto___6612 = cljs.core.seq.call(null,seq__6583_6601);
if(temp__4126__auto___6612){
var seq__6583_6613__$1 = temp__4126__auto___6612;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6583_6613__$1)){
var c__4952__auto___6614 = cljs.core.chunk_first.call(null,seq__6583_6613__$1);
var G__6615 = cljs.core.chunk_rest.call(null,seq__6583_6613__$1);
var G__6616 = c__4952__auto___6614;
var G__6617 = cljs.core.count.call(null,c__4952__auto___6614);
var G__6618 = (0);
seq__6583_6601 = G__6615;
chunk__6584_6602 = G__6616;
count__6585_6603 = G__6617;
i__6586_6604 = G__6618;
continue;
} else {
var vec__6588_6619 = cljs.core.first.call(null,seq__6583_6613__$1);
var k_6620 = cljs.core.nth.call(null,vec__6588_6619,(0),null);
var v_6621 = cljs.core.nth.call(null,vec__6588_6619,(1),null);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,v_6621))){
cljs.core.swap_BANG_.call(null,dos,cljs.core.assoc,dokey.call(null,k_6620),v_6621);
} else {
if(cljs.core.fn_QMARK_.call(null,v_6621)){
cljs.core.swap_BANG_.call(null,ons,cljs.core.assoc,onkey.call(null,k_6620),v_6621);
} else {
tailrecursion.hoplon.do_BANG_.call(null,this$,dokey.call(null,k_6620),v_6621);

}
}

var G__6622 = cljs.core.next.call(null,seq__6583_6613__$1);
var G__6623 = null;
var G__6624 = (0);
var G__6625 = (0);
seq__6583_6601 = G__6622;
chunk__6584_6602 = G__6623;
count__6585_6603 = G__6624;
i__6586_6604 = G__6625;
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
var seq__6589 = cljs.core.seq.call(null,cljs.core.deref.call(null,dos));
var chunk__6590 = null;
var count__6591 = (0);
var i__6592 = (0);
while(true){
if((i__6592 < count__6591)){
var vec__6593 = cljs.core._nth.call(null,chunk__6590,i__6592);
var k = cljs.core.nth.call(null,vec__6593,(0),null);
var v = cljs.core.nth.call(null,vec__6593,(1),null);
tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref.call(null,v));

cljs.core.add_watch.call(null,v,cljs.core.gensym.call(null),((function (seq__6589,chunk__6590,count__6591,i__6592,vec__6593,k,v,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__6562_SHARP_,p2__6563_SHARP_,p3__6564_SHARP_,p4__6561_SHARP_){
return tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__6561_SHARP_);
});})(seq__6589,chunk__6590,count__6591,i__6592,vec__6593,k,v,key_STAR_,dokey,onkey,dos,ons,addcls))
);

var G__6626 = seq__6589;
var G__6627 = chunk__6590;
var G__6628 = count__6591;
var G__6629 = (i__6592 + (1));
seq__6589 = G__6626;
chunk__6590 = G__6627;
count__6591 = G__6628;
i__6592 = G__6629;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__6589);
if(temp__4126__auto__){
var seq__6589__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6589__$1)){
var c__4952__auto__ = cljs.core.chunk_first.call(null,seq__6589__$1);
var G__6630 = cljs.core.chunk_rest.call(null,seq__6589__$1);
var G__6631 = c__4952__auto__;
var G__6632 = cljs.core.count.call(null,c__4952__auto__);
var G__6633 = (0);
seq__6589 = G__6630;
chunk__6590 = G__6631;
count__6591 = G__6632;
i__6592 = G__6633;
continue;
} else {
var vec__6594 = cljs.core.first.call(null,seq__6589__$1);
var k = cljs.core.nth.call(null,vec__6594,(0),null);
var v = cljs.core.nth.call(null,vec__6594,(1),null);
tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref.call(null,v));

cljs.core.add_watch.call(null,v,cljs.core.gensym.call(null),((function (seq__6589,chunk__6590,count__6591,i__6592,vec__6594,k,v,seq__6589__$1,temp__4126__auto__,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__6562_SHARP_,p2__6563_SHARP_,p3__6564_SHARP_,p4__6561_SHARP_){
return tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__6561_SHARP_);
});})(seq__6589,chunk__6590,count__6591,i__6592,vec__6594,k,v,seq__6589__$1,temp__4126__auto__,key_STAR_,dokey,onkey,dos,ons,addcls))
);

var G__6634 = cljs.core.next.call(null,seq__6589__$1);
var G__6635 = null;
var G__6636 = (0);
var G__6637 = (0);
seq__6589 = G__6634;
chunk__6590 = G__6635;
count__6591 = G__6636;
i__6592 = G__6637;
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
var seq__6595 = cljs.core.seq.call(null,cljs.core.deref.call(null,ons));
var chunk__6596 = null;
var count__6597 = (0);
var i__6598 = (0);
while(true){
if((i__6598 < count__6597)){
var vec__6599 = cljs.core._nth.call(null,chunk__6596,i__6598);
var k = cljs.core.nth.call(null,vec__6599,(0),null);
var v = cljs.core.nth.call(null,vec__6599,(1),null);
tailrecursion.hoplon.on_BANG_.call(null,this$,k,v);

var G__6638 = seq__6595;
var G__6639 = chunk__6596;
var G__6640 = count__6597;
var G__6641 = (i__6598 + (1));
seq__6595 = G__6638;
chunk__6596 = G__6639;
count__6597 = G__6640;
i__6598 = G__6641;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__6595);
if(temp__4126__auto__){
var seq__6595__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6595__$1)){
var c__4952__auto__ = cljs.core.chunk_first.call(null,seq__6595__$1);
var G__6642 = cljs.core.chunk_rest.call(null,seq__6595__$1);
var G__6643 = c__4952__auto__;
var G__6644 = cljs.core.count.call(null,c__4952__auto__);
var G__6645 = (0);
seq__6595 = G__6642;
chunk__6596 = G__6643;
count__6597 = G__6644;
i__6598 = G__6645;
continue;
} else {
var vec__6600 = cljs.core.first.call(null,seq__6595__$1);
var k = cljs.core.nth.call(null,vec__6600,(0),null);
var v = cljs.core.nth.call(null,vec__6600,(1),null);
tailrecursion.hoplon.on_BANG_.call(null,this$,k,v);

var G__6646 = cljs.core.next.call(null,seq__6595__$1);
var G__6647 = null;
var G__6648 = (0);
var G__6649 = (0);
seq__6595 = G__6646;
chunk__6596 = G__6647;
count__6597 = G__6648;
i__6598 = G__6649;
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
tailrecursion.hoplon.append_child = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__6650_SHARP_,p2__6651_SHARP_){
return p1__6650_SHARP_.appendChild(p2__6651_SHARP_);
}):(function (p1__6652_SHARP_,p2__6653_SHARP_){
try{return p1__6652_SHARP_.appendChild(p2__6653_SHARP_);
}catch (e6654){if((e6654 instanceof Error)){
var _ = e6654;
return null;
} else {
throw e6654;

}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function tailrecursion$hoplon$replace_children_BANG_(this$,new_children){
jQuery(this$).empty();

return tailrecursion.hoplon.add_children_BANG_.call(null,this$,((cljs.core.sequential_QMARK_.call(null,new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null)));
});
tailrecursion.hoplon.add_children_BANG_ = (function tailrecursion$hoplon$add_children_BANG_(this$,p__6660){
var vec__6666 = p__6660;
var child_cell = cljs.core.nth.call(null,vec__6666,(0),null);
var _ = cljs.core.nthnext.call(null,vec__6666,(1));
var kids = vec__6666;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,child_cell))){
tailrecursion.hoplon.replace_children_BANG_.call(null,this$,cljs.core.deref.call(null,child_cell));

cljs.core.add_watch.call(null,child_cell,cljs.core.gensym.call(null),((function (vec__6666,child_cell,_,kids){
return (function (p1__6656_SHARP_,p2__6657_SHARP_,p3__6658_SHARP_,p4__6655_SHARP_){
return tailrecursion.hoplon.replace_children_BANG_.call(null,this$,p4__6655_SHARP_);
});})(vec__6666,child_cell,_,kids))
);
} else {
var node_6671 = ((function (vec__6666,child_cell,_,kids){
return (function (p1__6659_SHARP_){
if(typeof p1__6659_SHARP_ === 'string'){
return tailrecursion.hoplon.$text.call(null,p1__6659_SHARP_);
} else {
if(cljs.core.truth_(tailrecursion.hoplon.node_QMARK_.call(null,p1__6659_SHARP_))){
return p1__6659_SHARP_;
} else {
return null;
}
}
});})(vec__6666,child_cell,_,kids))
;
var seq__6667_6672 = cljs.core.seq.call(null,cljs.core.keep.call(null,node_6671,tailrecursion.hoplon.unsplice.call(null,kids)));
var chunk__6668_6673 = null;
var count__6669_6674 = (0);
var i__6670_6675 = (0);
while(true){
if((i__6670_6675 < count__6669_6674)){
var x_6676 = cljs.core._nth.call(null,chunk__6668_6673,i__6670_6675);
tailrecursion.hoplon.append_child.call(null,this$,x_6676);

var G__6677 = seq__6667_6672;
var G__6678 = chunk__6668_6673;
var G__6679 = count__6669_6674;
var G__6680 = (i__6670_6675 + (1));
seq__6667_6672 = G__6677;
chunk__6668_6673 = G__6678;
count__6669_6674 = G__6679;
i__6670_6675 = G__6680;
continue;
} else {
var temp__4126__auto___6681 = cljs.core.seq.call(null,seq__6667_6672);
if(temp__4126__auto___6681){
var seq__6667_6682__$1 = temp__4126__auto___6681;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6667_6682__$1)){
var c__4952__auto___6683 = cljs.core.chunk_first.call(null,seq__6667_6682__$1);
var G__6684 = cljs.core.chunk_rest.call(null,seq__6667_6682__$1);
var G__6685 = c__4952__auto___6683;
var G__6686 = cljs.core.count.call(null,c__4952__auto___6683);
var G__6687 = (0);
seq__6667_6672 = G__6684;
chunk__6668_6673 = G__6685;
count__6669_6674 = G__6686;
i__6670_6675 = G__6687;
continue;
} else {
var x_6688 = cljs.core.first.call(null,seq__6667_6682__$1);
tailrecursion.hoplon.append_child.call(null,this$,x_6688);

var G__6689 = cljs.core.next.call(null,seq__6667_6682__$1);
var G__6690 = null;
var G__6691 = (0);
var G__6692 = (0);
seq__6667_6672 = G__6689;
chunk__6668_6673 = G__6690;
count__6669_6674 = G__6691;
i__6670_6675 = G__6692;
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
var G__6700__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__6694 = tailrecursion.hoplon.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__6694,(0),null);
var kids = cljs.core.nth.call(null,vec__6694,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__6695 = this$;
G__6695.hoplonIFn(attr,kids);

return G__6695;
} else {
var G__6696 = this$;
tailrecursion.hoplon.add_attributes_BANG_.call(null,G__6696,attr);

tailrecursion.hoplon.add_children_BANG_.call(null,G__6696,kids);

return G__6696;
}
};
var G__6700 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__6701__i = 0, G__6701__a = new Array(arguments.length -  1);
while (G__6701__i < G__6701__a.length) {G__6701__a[G__6701__i] = arguments[G__6701__i + 1]; ++G__6701__i;}
  args = new cljs.core.IndexedSeq(G__6701__a,0);
} 
return G__6700__delegate.call(this,self__,args);};
G__6700.cljs$lang$maxFixedArity = 1;
G__6700.cljs$lang$applyTo = (function (arglist__6702){
var self__ = cljs.core.first(arglist__6702);
var args = cljs.core.rest(arglist__6702);
return G__6700__delegate(self__,args);
});
G__6700.cljs$core$IFn$_invoke$arity$variadic = G__6700__delegate;
return G__6700;
})()
;

Element.prototype.apply = (function (self__,args6693){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args6693)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__6703__delegate = function (args){
var this$ = this;
var vec__6697 = tailrecursion.hoplon.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__6697,(0),null);
var kids = cljs.core.nth.call(null,vec__6697,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__6698 = this$;
G__6698.hoplonIFn(attr,kids);

return G__6698;
} else {
var G__6699 = this$;
tailrecursion.hoplon.add_attributes_BANG_.call(null,G__6699,attr);

tailrecursion.hoplon.add_children_BANG_.call(null,G__6699,kids);

return G__6699;
}
};
var G__6703 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6704__i = 0, G__6704__a = new Array(arguments.length -  0);
while (G__6704__i < G__6704__a.length) {G__6704__a[G__6704__i] = arguments[G__6704__i + 0]; ++G__6704__i;}
  args = new cljs.core.IndexedSeq(G__6704__a,0);
} 
return G__6703__delegate.call(this,args);};
G__6703.cljs$lang$maxFixedArity = 0;
G__6703.cljs$lang$applyTo = (function (arglist__6705){
var args = cljs.core.seq(arglist__6705);
return G__6703__delegate(args);
});
G__6703.cljs$core$IFn$_invoke$arity$variadic = G__6703__delegate;
return G__6703;
})()
;

Element.prototype.cljs$core$IPrintWithWriter$ = true;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.call(null,writer,"#<Element: ",this$__$1.tagName,">");
});
tailrecursion.hoplon.make_singleton_ctor = (function tailrecursion$hoplon$make_singleton_ctor(tag){
return (function() { 
var G__6716__delegate = function (args){
var vec__6711 = tailrecursion.hoplon.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__6711,(0),null);
var kids = cljs.core.nth.call(null,vec__6711,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
tailrecursion.hoplon.add_attributes_BANG_.call(null,elem,attrs);

jQuery(elem).empty();

var seq__6712 = cljs.core.seq.call(null,kids);
var chunk__6713 = null;
var count__6714 = (0);
var i__6715 = (0);
while(true){
if((i__6715 < count__6714)){
var k = cljs.core._nth.call(null,chunk__6713,i__6715);
elem.appendChild(k);

var G__6717 = seq__6712;
var G__6718 = chunk__6713;
var G__6719 = count__6714;
var G__6720 = (i__6715 + (1));
seq__6712 = G__6717;
chunk__6713 = G__6718;
count__6714 = G__6719;
i__6715 = G__6720;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__6712);
if(temp__4126__auto__){
var seq__6712__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6712__$1)){
var c__4952__auto__ = cljs.core.chunk_first.call(null,seq__6712__$1);
var G__6721 = cljs.core.chunk_rest.call(null,seq__6712__$1);
var G__6722 = c__4952__auto__;
var G__6723 = cljs.core.count.call(null,c__4952__auto__);
var G__6724 = (0);
seq__6712 = G__6721;
chunk__6713 = G__6722;
count__6714 = G__6723;
i__6715 = G__6724;
continue;
} else {
var k = cljs.core.first.call(null,seq__6712__$1);
elem.appendChild(k);

var G__6725 = cljs.core.next.call(null,seq__6712__$1);
var G__6726 = null;
var G__6727 = (0);
var G__6728 = (0);
seq__6712 = G__6725;
chunk__6713 = G__6726;
count__6714 = G__6727;
i__6715 = G__6728;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__6716 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6729__i = 0, G__6729__a = new Array(arguments.length -  0);
while (G__6729__i < G__6729__a.length) {G__6729__a[G__6729__i] = arguments[G__6729__i + 0]; ++G__6729__i;}
  args = new cljs.core.IndexedSeq(G__6729__a,0);
} 
return G__6716__delegate.call(this,args);};
G__6716.cljs$lang$maxFixedArity = 0;
G__6716.cljs$lang$applyTo = (function (arglist__6730){
var args = cljs.core.seq(arglist__6730);
return G__6716__delegate(args);
});
G__6716.cljs$core$IFn$_invoke$arity$variadic = G__6716__delegate;
return G__6716;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function tailrecursion$hoplon$make_elem_ctor(tag){
return (function() { 
var G__6731__delegate = function (args){
return cljs.core.apply.call(null,document.createElement(tag),args);
};
var G__6731 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6732__i = 0, G__6732__a = new Array(arguments.length -  0);
while (G__6732__i < G__6732__a.length) {G__6732__a[G__6732__i] = arguments[G__6732__i + 0]; ++G__6732__i;}
  args = new cljs.core.IndexedSeq(G__6732__a,0);
} 
return G__6731__delegate.call(this,args);};
G__6731.cljs$lang$maxFixedArity = 0;
G__6731.cljs$lang$applyTo = (function (arglist__6733){
var args = cljs.core.seq(arglist__6733);
return G__6731__delegate(args);
});
G__6731.cljs$core$IFn$_invoke$arity$variadic = G__6731__delegate;
return G__6731;
})()
;
});
tailrecursion.hoplon.html = (function tailrecursion$hoplon$html(){
var argseq__5207__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5207__auto__);
});

tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__6735 = tailrecursion.hoplon.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__6735,(0),null);
var _ = cljs.core.nth.call(null,vec__6735,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_.call(null,(document.getElementsByTagName("html")[(0)]),attrs);
});

tailrecursion.hoplon.html.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.html.cljs$lang$applyTo = (function (seq6734){
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6734));
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
tailrecursion.hoplon.$text = (function tailrecursion$hoplon$$text(p1__6736_SHARP_){
return document.createTextNode(p1__6736_SHARP_);
});
tailrecursion.hoplon.$comment = (function tailrecursion$hoplon$$comment(p1__6737_SHARP_){
return document.createComment(p1__6737_SHARP_);
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
return jQuery("body").on("submit",(function (p1__6738_SHARP_){
var e = jQuery(p1__6738_SHARP_.target);
if(cljs.core.truth_((function (){var or__4167__auto__ = e.attr("action");
if(cljs.core.truth_(or__4167__auto__)){
return or__4167__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__6738_SHARP_.preventDefault();
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
var G__6740 = arguments.length;
switch (G__6740) {
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
var G__6743 = arguments.length;
switch (G__6743) {
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
var G__6745__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__6745 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__6746__i = 0, G__6746__a = new Array(arguments.length -  2);
while (G__6746__i < G__6746__a.length) {G__6746__a[G__6746__i] = arguments[G__6746__i + 2]; ++G__6746__i;}
  args = new cljs.core.IndexedSeq(G__6746__a,0);
} 
return G__6745__delegate.call(this,elem,_,args);};
G__6745.cljs$lang$maxFixedArity = 2;
G__6745.cljs$lang$applyTo = (function (arglist__6747){
var elem = cljs.core.first(arglist__6747);
arglist__6747 = cljs.core.next(arglist__6747);
var _ = cljs.core.first(arglist__6747);
var args = cljs.core.rest(arglist__6747);
return G__6745__delegate(elem,_,args);
});
G__6745.cljs$core$IFn$_invoke$arity$variadic = G__6745__delegate;
return G__6745;
})()
);
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (elem,_,kvs){
var e = jQuery(elem);
var seq__6748 = cljs.core.seq.call(null,kvs);
var chunk__6749 = null;
var count__6750 = (0);
var i__6751 = (0);
while(true){
if((i__6751 < count__6750)){
var vec__6752 = cljs.core._nth.call(null,chunk__6749,i__6751);
var k = cljs.core.nth.call(null,vec__6752,(0),null);
var v = cljs.core.nth.call(null,vec__6752,(1),null);
var k_6754__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_6754__$1);
} else {
e.attr(k_6754__$1,((cljs.core._EQ_.call(null,true,v))?k_6754__$1:v));
}

var G__6755 = seq__6748;
var G__6756 = chunk__6749;
var G__6757 = count__6750;
var G__6758 = (i__6751 + (1));
seq__6748 = G__6755;
chunk__6749 = G__6756;
count__6750 = G__6757;
i__6751 = G__6758;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__6748);
if(temp__4126__auto__){
var seq__6748__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6748__$1)){
var c__4952__auto__ = cljs.core.chunk_first.call(null,seq__6748__$1);
var G__6759 = cljs.core.chunk_rest.call(null,seq__6748__$1);
var G__6760 = c__4952__auto__;
var G__6761 = cljs.core.count.call(null,c__4952__auto__);
var G__6762 = (0);
seq__6748 = G__6759;
chunk__6749 = G__6760;
count__6750 = G__6761;
i__6751 = G__6762;
continue;
} else {
var vec__6753 = cljs.core.first.call(null,seq__6748__$1);
var k = cljs.core.nth.call(null,vec__6753,(0),null);
var v = cljs.core.nth.call(null,vec__6753,(1),null);
var k_6763__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_6763__$1);
} else {
e.attr(k_6763__$1,((cljs.core._EQ_.call(null,true,v))?k_6763__$1:v));
}

var G__6764 = cljs.core.next.call(null,seq__6748__$1);
var G__6765 = null;
var G__6766 = (0);
var G__6767 = (0);
seq__6748 = G__6764;
chunk__6749 = G__6765;
count__6750 = G__6766;
i__6751 = G__6767;
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
return (function (p1__6768_SHARP_){
return cljs.core.zipmap.call(null,p1__6768_SHARP_,cljs.core.repeat.call(null,true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_.call(null,kvs))?kvs:__GT_map.call(null,((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq.call(null,kvs))));
var seq__6769 = cljs.core.seq.call(null,clmap);
var chunk__6770 = null;
var count__6771 = (0);
var i__6772 = (0);
while(true){
if((i__6772 < count__6771)){
var vec__6773 = cljs.core._nth.call(null,chunk__6770,i__6772);
var c = cljs.core.nth.call(null,vec__6773,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__6773,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__6775 = seq__6769;
var G__6776 = chunk__6770;
var G__6777 = count__6771;
var G__6778 = (i__6772 + (1));
seq__6769 = G__6775;
chunk__6770 = G__6776;
count__6771 = G__6777;
i__6772 = G__6778;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__6769);
if(temp__4126__auto__){
var seq__6769__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6769__$1)){
var c__4952__auto__ = cljs.core.chunk_first.call(null,seq__6769__$1);
var G__6779 = cljs.core.chunk_rest.call(null,seq__6769__$1);
var G__6780 = c__4952__auto__;
var G__6781 = cljs.core.count.call(null,c__4952__auto__);
var G__6782 = (0);
seq__6769 = G__6779;
chunk__6770 = G__6780;
count__6771 = G__6781;
i__6772 = G__6782;
continue;
} else {
var vec__6774 = cljs.core.first.call(null,seq__6769__$1);
var c = cljs.core.nth.call(null,vec__6774,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__6774,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__6783 = cljs.core.next.call(null,seq__6769__$1);
var G__6784 = null;
var G__6785 = (0);
var G__6786 = (0);
seq__6769 = G__6783;
chunk__6770 = G__6784;
count__6771 = G__6785;
i__6772 = G__6786;
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
var seq__6787 = cljs.core.seq.call(null,kvs);
var chunk__6788 = null;
var count__6789 = (0);
var i__6790 = (0);
while(true){
if((i__6790 < count__6789)){
var vec__6791 = cljs.core._nth.call(null,chunk__6788,i__6790);
var k = cljs.core.nth.call(null,vec__6791,(0),null);
var v = cljs.core.nth.call(null,vec__6791,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__6793 = seq__6787;
var G__6794 = chunk__6788;
var G__6795 = count__6789;
var G__6796 = (i__6790 + (1));
seq__6787 = G__6793;
chunk__6788 = G__6794;
count__6789 = G__6795;
i__6790 = G__6796;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__6787);
if(temp__4126__auto__){
var seq__6787__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6787__$1)){
var c__4952__auto__ = cljs.core.chunk_first.call(null,seq__6787__$1);
var G__6797 = cljs.core.chunk_rest.call(null,seq__6787__$1);
var G__6798 = c__4952__auto__;
var G__6799 = cljs.core.count.call(null,c__4952__auto__);
var G__6800 = (0);
seq__6787 = G__6797;
chunk__6788 = G__6798;
count__6789 = G__6799;
i__6790 = G__6800;
continue;
} else {
var vec__6792 = cljs.core.first.call(null,seq__6787__$1);
var k = cljs.core.nth.call(null,vec__6792,(0),null);
var v = cljs.core.nth.call(null,vec__6792,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__6801 = cljs.core.next.call(null,seq__6787__$1);
var G__6802 = null;
var G__6803 = (0);
var G__6804 = (0);
seq__6787 = G__6801;
chunk__6788 = G__6802;
count__6789 = G__6803;
i__6790 = G__6804;
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
return (function (G__6830,G__6831){
return G__6830.call(null,G__6831);
});})(pool_size))
).call(null,cljs.core.seq,items);
var cur_count = tailrecursion.javelin.formula.call(null,((function (pool_size,items_seq){
return (function (G__6833,G__6832){
return G__6832.call(null,G__6833);
});})(pool_size,items_seq))
).call(null,items_seq,cljs.core.count);
var show_ith_QMARK_ = ((function (pool_size,items_seq,cur_count){
return (function (p1__6805_SHARP_){
return tailrecursion.javelin.formula.call(null,((function (pool_size,items_seq,cur_count){
return (function (G__6834,G__6835){
return (G__6834 < G__6835);
});})(pool_size,items_seq,cur_count))
).call(null,p1__6805_SHARP_,cur_count);
});})(pool_size,items_seq,cur_count))
;
var ith_item = ((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (p1__6806_SHARP_){
return tailrecursion.javelin.formula.call(null,((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (G__6837,G__6838,G__6836){
return G__6836.call(null,G__6837,G__6838);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
).call(null,items_seq,p1__6806_SHARP_,tailrecursion.hoplon.safe_nth);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
;
var d = tailrecursion.hoplon.span.call(null);
tailrecursion.hoplon.when_dom.call(null,d,((function (d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (){
var p = d.parentNode;
p.removeChild(d);

return tailrecursion.javelin.formula.call(null,((function (p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (G__6852,G__6850,G__6845,G__6843,G__6844,G__6849,G__6851,G__6846,G__6848,G__6847){
if(cljs.core.truth_((G__6843 < G__6844))){
var seq__6839_6853 = cljs.core.seq.call(null,G__6845.call(null,G__6843,G__6844));
var chunk__6840_6854 = null;
var count__6841_6855 = (0);
var i__6842_6856 = (0);
while(true){
if(cljs.core.truth_((i__6842_6856 < count__6841_6855))){
var i_6857 = cljs.core._nth.call(null,chunk__6840_6854,i__6842_6856);
var e_6858 = G__6846.call(null,G__6847.call(null,i_6857)).call(null,new cljs.core.Keyword(null,"do-toggle","do-toggle",-570648102),G__6848.call(null,i_6857));
if(cljs.core.not.call(null,G__6849)){
G__6850.appendChild(e_6858);
} else {
G__6850.insertBefore(e_6858,G__6850.firstChild);
}

var G__6859 = seq__6839_6853;
var G__6860 = chunk__6840_6854;
var G__6861 = count__6841_6855;
var G__6862 = (i__6842_6856 + (1));
seq__6839_6853 = G__6859;
chunk__6840_6854 = G__6860;
count__6841_6855 = G__6861;
i__6842_6856 = G__6862;
continue;
} else {
var temp__4126__auto___6863 = cljs.core.seq.call(null,seq__6839_6853);
if(temp__4126__auto___6863){
var seq__6839_6864__$1 = temp__4126__auto___6863;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6839_6864__$1)){
var c__4952__auto___6865 = cljs.core.chunk_first.call(null,seq__6839_6864__$1);
var G__6866 = cljs.core.chunk_rest.call(null,seq__6839_6864__$1);
var G__6867 = c__4952__auto___6865;
var G__6868 = cljs.core.count.call(null,c__4952__auto___6865);
var G__6869 = (0);
seq__6839_6853 = G__6866;
chunk__6840_6854 = G__6867;
count__6841_6855 = G__6868;
i__6842_6856 = G__6869;
continue;
} else {
var i_6870 = cljs.core.first.call(null,seq__6839_6864__$1);
var e_6871 = G__6846.call(null,G__6847.call(null,i_6870)).call(null,new cljs.core.Keyword(null,"do-toggle","do-toggle",-570648102),G__6848.call(null,i_6870));
if(cljs.core.not.call(null,G__6849)){
G__6850.appendChild(e_6871);
} else {
G__6850.insertBefore(e_6871,G__6850.firstChild);
}

var G__6872 = cljs.core.next.call(null,seq__6839_6864__$1);
var G__6873 = null;
var G__6874 = (0);
var G__6875 = (0);
seq__6839_6853 = G__6872;
chunk__6840_6854 = G__6873;
count__6841_6855 = G__6874;
i__6842_6856 = G__6875;
continue;
}
} else {
}
}
break;
}

return G__6851.call(null,G__6852,G__6844);
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
var G__6877 = arguments.length;
switch (G__6877) {
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
return (function (G__6878){
return G__6878;
});})(ret__5457__auto__))
).call(null,ret__5457__auto__);
})();
return tailrecursion.javelin.formula.call(null,((function (r){
return (function (G__6880,G__6879){
if(cljs.core.truth_(G__6879.call(null,"",G__6880))){
return G__6880;
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
return (function (G__6882,G__6881){
return G__6881.location.hash = G__6882;
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
return (function (G__6883,G__6884){
var or__4167__auto__ = G__6883;
if(cljs.core.truth_(or__4167__auto__)){
return or__4167__auto__;
} else {
return G__6884;
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
return (function (G__6886,G__6885){
return G__6885.location.hash = G__6886;
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