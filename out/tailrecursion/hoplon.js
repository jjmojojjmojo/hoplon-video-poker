// Compiled by ClojureScript 0.0-3196 {}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('tailrecursion.javelin');
goog.require('cljsjs.jquery');



tailrecursion.hoplon.is_ie8 = cljs.core.not.call(null,(window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__6406_SHARP_){
return (p1__6406_SHARP_ instanceof Node);
}):(function (p1__6407_SHARP_){
try{return p1__6407_SHARP_.nodeType;
}catch (e6408){if((e6408 instanceof Error)){
var _ = e6408;
return null;
} else {
throw e6408;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__6409_SHARP_){
try{return cljs.core.vector_QMARK_.call(null,p1__6409_SHARP_);
}catch (e6410){if((e6410 instanceof Error)){
var _ = e6410;
return null;
} else {
throw e6410;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__6411_SHARP_){
try{return cljs.core.seq_QMARK_.call(null,p1__6411_SHARP_);
}catch (e6412){if((e6412 instanceof Error)){
var _ = e6412;
return null;
} else {
throw e6412;

}
}}));
cljs.core.set_print_fn_BANG_.call(null,(function (p1__6413_SHARP_){
if(cljs.core.truth_((function (){var and__4155__auto__ = console;
if(cljs.core.truth_(and__4155__auto__)){
return console.log;
} else {
return and__4155__auto__;
}
})())){
return console.log(p1__6413_SHARP_);
} else {
return null;
}
}));
tailrecursion.hoplon.safe_nth = (function tailrecursion$hoplon$safe_nth(){
var G__6415 = arguments.length;
switch (G__6415) {
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
}catch (e6416){if((e6416 instanceof Error)){
var _ = e6416;
return not_found;
} else {
throw e6416;

}
}});

tailrecursion.hoplon.safe_nth.cljs$lang$maxFixedArity = 3;
tailrecursion.hoplon.timeout = (function tailrecursion$hoplon$timeout(){
var G__6419 = arguments.length;
switch (G__6419) {
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
return cljs.core.mapcat.call(null,(function (p1__6421_SHARP_){
if(cljs.core.truth_((function (){var or__4167__auto__ = tailrecursion.hoplon.seq_QMARK__STAR_.call(null,p1__6421_SHARP_);
if(cljs.core.truth_(or__4167__auto__)){
return or__4167__auto__;
} else {
return tailrecursion.hoplon.vector_QMARK__STAR_.call(null,p1__6421_SHARP_);
}
})())){
return tailrecursion$hoplon$unsplice.call(null,p1__6421_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6421_SHARP_], null);
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
tailrecursion.hoplon.parse_args = (function tailrecursion$hoplon$parse_args(p__6424){
var vec__6426 = p__6424;
var head = cljs.core.nth.call(null,vec__6426,(0),null);
var tail = cljs.core.nthnext.call(null,vec__6426,(1));
var args = vec__6426;
var kw1_QMARK_ = cljs.core.comp.call(null,cljs.core.keyword_QMARK_,cljs.core.first);
var mkkw = ((function (kw1_QMARK_,vec__6426,head,tail,args){
return (function (p1__6422_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.take_while.call(null,kw1_QMARK_,cljs.core.partition.call(null,(2),p1__6422_SHARP_)));
});})(kw1_QMARK_,vec__6426,head,tail,args))
;
var drkw = ((function (kw1_QMARK_,mkkw,vec__6426,head,tail,args){
return (function (p1__6423_SHARP_){
return cljs.core.mapcat.call(null,cljs.core.identity,cljs.core.drop_while.call(null,kw1_QMARK_,cljs.core.partition.call(null,(2),(2),cljs.core.PersistentVector.EMPTY,p1__6423_SHARP_)));
});})(kw1_QMARK_,mkkw,vec__6426,head,tail,args))
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
var key_STAR_ = (function (p1__6428_SHARP_,p2__6427_SHARP_){
var n = (function (){var s = cljs.core.name.call(null,p2__6427_SHARP_);
var c = cljs.core.last.call(null,s);
if(!(cljs.core._EQ_.call(null,"=",c))){
return s;
} else {
return s.slice((0),(-1));
}
})();
var p = n.substr((0),(3));
return cljs.core.keyword.call(null,cljs.core.namespace.call(null,p2__6427_SHARP_),((!(cljs.core._EQ_.call(null,p1__6428_SHARP_,p)))?n:n.substr((3))));
});
var dokey = cljs.core.partial.call(null,key_STAR_,"do-");
var onkey = cljs.core.partial.call(null,key_STAR_,"on-");
var dos = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ons = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var addcls = ((function (key_STAR_,dokey,onkey,dos,ons){
return (function (p1__6429_SHARP_,p2__6430_SHARP_){
return clojure.string.join.call(null," ",cljs.core.into.call(null,cljs.core.set.call(null,clojure.string.split.call(null,p1__6429_SHARP_,/ /)),clojure.string.split.call(null,p2__6430_SHARP_,/ /)));
});})(key_STAR_,dokey,onkey,dos,ons))
;
var seq__6453_6471 = cljs.core.seq.call(null,attr);
var chunk__6454_6472 = null;
var count__6455_6473 = (0);
var i__6456_6474 = (0);
while(true){
if((i__6456_6474 < count__6455_6473)){
var vec__6457_6475 = cljs.core._nth.call(null,chunk__6454_6472,i__6456_6474);
var k_6476 = cljs.core.nth.call(null,vec__6457_6475,(0),null);
var v_6477 = cljs.core.nth.call(null,vec__6457_6475,(1),null);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,v_6477))){
cljs.core.swap_BANG_.call(null,dos,cljs.core.assoc,dokey.call(null,k_6476),v_6477);
} else {
if(cljs.core.fn_QMARK_.call(null,v_6477)){
cljs.core.swap_BANG_.call(null,ons,cljs.core.assoc,onkey.call(null,k_6476),v_6477);
} else {
tailrecursion.hoplon.do_BANG_.call(null,this$,dokey.call(null,k_6476),v_6477);

}
}

var G__6478 = seq__6453_6471;
var G__6479 = chunk__6454_6472;
var G__6480 = count__6455_6473;
var G__6481 = (i__6456_6474 + (1));
seq__6453_6471 = G__6478;
chunk__6454_6472 = G__6479;
count__6455_6473 = G__6480;
i__6456_6474 = G__6481;
continue;
} else {
var temp__4126__auto___6482 = cljs.core.seq.call(null,seq__6453_6471);
if(temp__4126__auto___6482){
var seq__6453_6483__$1 = temp__4126__auto___6482;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6453_6483__$1)){
var c__4952__auto___6484 = cljs.core.chunk_first.call(null,seq__6453_6483__$1);
var G__6485 = cljs.core.chunk_rest.call(null,seq__6453_6483__$1);
var G__6486 = c__4952__auto___6484;
var G__6487 = cljs.core.count.call(null,c__4952__auto___6484);
var G__6488 = (0);
seq__6453_6471 = G__6485;
chunk__6454_6472 = G__6486;
count__6455_6473 = G__6487;
i__6456_6474 = G__6488;
continue;
} else {
var vec__6458_6489 = cljs.core.first.call(null,seq__6453_6483__$1);
var k_6490 = cljs.core.nth.call(null,vec__6458_6489,(0),null);
var v_6491 = cljs.core.nth.call(null,vec__6458_6489,(1),null);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,v_6491))){
cljs.core.swap_BANG_.call(null,dos,cljs.core.assoc,dokey.call(null,k_6490),v_6491);
} else {
if(cljs.core.fn_QMARK_.call(null,v_6491)){
cljs.core.swap_BANG_.call(null,ons,cljs.core.assoc,onkey.call(null,k_6490),v_6491);
} else {
tailrecursion.hoplon.do_BANG_.call(null,this$,dokey.call(null,k_6490),v_6491);

}
}

var G__6492 = cljs.core.next.call(null,seq__6453_6483__$1);
var G__6493 = null;
var G__6494 = (0);
var G__6495 = (0);
seq__6453_6471 = G__6492;
chunk__6454_6472 = G__6493;
count__6455_6473 = G__6494;
i__6456_6474 = G__6495;
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
var seq__6459 = cljs.core.seq.call(null,cljs.core.deref.call(null,dos));
var chunk__6460 = null;
var count__6461 = (0);
var i__6462 = (0);
while(true){
if((i__6462 < count__6461)){
var vec__6463 = cljs.core._nth.call(null,chunk__6460,i__6462);
var k = cljs.core.nth.call(null,vec__6463,(0),null);
var v = cljs.core.nth.call(null,vec__6463,(1),null);
tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref.call(null,v));

cljs.core.add_watch.call(null,v,cljs.core.gensym.call(null),((function (seq__6459,chunk__6460,count__6461,i__6462,vec__6463,k,v,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__6432_SHARP_,p2__6433_SHARP_,p3__6434_SHARP_,p4__6431_SHARP_){
return tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__6431_SHARP_);
});})(seq__6459,chunk__6460,count__6461,i__6462,vec__6463,k,v,key_STAR_,dokey,onkey,dos,ons,addcls))
);

var G__6496 = seq__6459;
var G__6497 = chunk__6460;
var G__6498 = count__6461;
var G__6499 = (i__6462 + (1));
seq__6459 = G__6496;
chunk__6460 = G__6497;
count__6461 = G__6498;
i__6462 = G__6499;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__6459);
if(temp__4126__auto__){
var seq__6459__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6459__$1)){
var c__4952__auto__ = cljs.core.chunk_first.call(null,seq__6459__$1);
var G__6500 = cljs.core.chunk_rest.call(null,seq__6459__$1);
var G__6501 = c__4952__auto__;
var G__6502 = cljs.core.count.call(null,c__4952__auto__);
var G__6503 = (0);
seq__6459 = G__6500;
chunk__6460 = G__6501;
count__6461 = G__6502;
i__6462 = G__6503;
continue;
} else {
var vec__6464 = cljs.core.first.call(null,seq__6459__$1);
var k = cljs.core.nth.call(null,vec__6464,(0),null);
var v = cljs.core.nth.call(null,vec__6464,(1),null);
tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref.call(null,v));

cljs.core.add_watch.call(null,v,cljs.core.gensym.call(null),((function (seq__6459,chunk__6460,count__6461,i__6462,vec__6464,k,v,seq__6459__$1,temp__4126__auto__,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__6432_SHARP_,p2__6433_SHARP_,p3__6434_SHARP_,p4__6431_SHARP_){
return tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__6431_SHARP_);
});})(seq__6459,chunk__6460,count__6461,i__6462,vec__6464,k,v,seq__6459__$1,temp__4126__auto__,key_STAR_,dokey,onkey,dos,ons,addcls))
);

var G__6504 = cljs.core.next.call(null,seq__6459__$1);
var G__6505 = null;
var G__6506 = (0);
var G__6507 = (0);
seq__6459 = G__6504;
chunk__6460 = G__6505;
count__6461 = G__6506;
i__6462 = G__6507;
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
var seq__6465 = cljs.core.seq.call(null,cljs.core.deref.call(null,ons));
var chunk__6466 = null;
var count__6467 = (0);
var i__6468 = (0);
while(true){
if((i__6468 < count__6467)){
var vec__6469 = cljs.core._nth.call(null,chunk__6466,i__6468);
var k = cljs.core.nth.call(null,vec__6469,(0),null);
var v = cljs.core.nth.call(null,vec__6469,(1),null);
tailrecursion.hoplon.on_BANG_.call(null,this$,k,v);

var G__6508 = seq__6465;
var G__6509 = chunk__6466;
var G__6510 = count__6467;
var G__6511 = (i__6468 + (1));
seq__6465 = G__6508;
chunk__6466 = G__6509;
count__6467 = G__6510;
i__6468 = G__6511;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__6465);
if(temp__4126__auto__){
var seq__6465__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6465__$1)){
var c__4952__auto__ = cljs.core.chunk_first.call(null,seq__6465__$1);
var G__6512 = cljs.core.chunk_rest.call(null,seq__6465__$1);
var G__6513 = c__4952__auto__;
var G__6514 = cljs.core.count.call(null,c__4952__auto__);
var G__6515 = (0);
seq__6465 = G__6512;
chunk__6466 = G__6513;
count__6467 = G__6514;
i__6468 = G__6515;
continue;
} else {
var vec__6470 = cljs.core.first.call(null,seq__6465__$1);
var k = cljs.core.nth.call(null,vec__6470,(0),null);
var v = cljs.core.nth.call(null,vec__6470,(1),null);
tailrecursion.hoplon.on_BANG_.call(null,this$,k,v);

var G__6516 = cljs.core.next.call(null,seq__6465__$1);
var G__6517 = null;
var G__6518 = (0);
var G__6519 = (0);
seq__6465 = G__6516;
chunk__6466 = G__6517;
count__6467 = G__6518;
i__6468 = G__6519;
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
tailrecursion.hoplon.append_child = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__6520_SHARP_,p2__6521_SHARP_){
return p1__6520_SHARP_.appendChild(p2__6521_SHARP_);
}):(function (p1__6522_SHARP_,p2__6523_SHARP_){
try{return p1__6522_SHARP_.appendChild(p2__6523_SHARP_);
}catch (e6524){if((e6524 instanceof Error)){
var _ = e6524;
return null;
} else {
throw e6524;

}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function tailrecursion$hoplon$replace_children_BANG_(this$,new_children){
jQuery(this$).empty();

return tailrecursion.hoplon.add_children_BANG_.call(null,this$,((cljs.core.sequential_QMARK_.call(null,new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null)));
});
tailrecursion.hoplon.add_children_BANG_ = (function tailrecursion$hoplon$add_children_BANG_(this$,p__6530){
var vec__6536 = p__6530;
var child_cell = cljs.core.nth.call(null,vec__6536,(0),null);
var _ = cljs.core.nthnext.call(null,vec__6536,(1));
var kids = vec__6536;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,child_cell))){
tailrecursion.hoplon.replace_children_BANG_.call(null,this$,cljs.core.deref.call(null,child_cell));

cljs.core.add_watch.call(null,child_cell,cljs.core.gensym.call(null),((function (vec__6536,child_cell,_,kids){
return (function (p1__6526_SHARP_,p2__6527_SHARP_,p3__6528_SHARP_,p4__6525_SHARP_){
return tailrecursion.hoplon.replace_children_BANG_.call(null,this$,p4__6525_SHARP_);
});})(vec__6536,child_cell,_,kids))
);
} else {
var node_6541 = ((function (vec__6536,child_cell,_,kids){
return (function (p1__6529_SHARP_){
if(typeof p1__6529_SHARP_ === 'string'){
return tailrecursion.hoplon.$text.call(null,p1__6529_SHARP_);
} else {
if(cljs.core.truth_(tailrecursion.hoplon.node_QMARK_.call(null,p1__6529_SHARP_))){
return p1__6529_SHARP_;
} else {
return null;
}
}
});})(vec__6536,child_cell,_,kids))
;
var seq__6537_6542 = cljs.core.seq.call(null,cljs.core.keep.call(null,node_6541,tailrecursion.hoplon.unsplice.call(null,kids)));
var chunk__6538_6543 = null;
var count__6539_6544 = (0);
var i__6540_6545 = (0);
while(true){
if((i__6540_6545 < count__6539_6544)){
var x_6546 = cljs.core._nth.call(null,chunk__6538_6543,i__6540_6545);
tailrecursion.hoplon.append_child.call(null,this$,x_6546);

var G__6547 = seq__6537_6542;
var G__6548 = chunk__6538_6543;
var G__6549 = count__6539_6544;
var G__6550 = (i__6540_6545 + (1));
seq__6537_6542 = G__6547;
chunk__6538_6543 = G__6548;
count__6539_6544 = G__6549;
i__6540_6545 = G__6550;
continue;
} else {
var temp__4126__auto___6551 = cljs.core.seq.call(null,seq__6537_6542);
if(temp__4126__auto___6551){
var seq__6537_6552__$1 = temp__4126__auto___6551;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6537_6552__$1)){
var c__4952__auto___6553 = cljs.core.chunk_first.call(null,seq__6537_6552__$1);
var G__6554 = cljs.core.chunk_rest.call(null,seq__6537_6552__$1);
var G__6555 = c__4952__auto___6553;
var G__6556 = cljs.core.count.call(null,c__4952__auto___6553);
var G__6557 = (0);
seq__6537_6542 = G__6554;
chunk__6538_6543 = G__6555;
count__6539_6544 = G__6556;
i__6540_6545 = G__6557;
continue;
} else {
var x_6558 = cljs.core.first.call(null,seq__6537_6552__$1);
tailrecursion.hoplon.append_child.call(null,this$,x_6558);

var G__6559 = cljs.core.next.call(null,seq__6537_6552__$1);
var G__6560 = null;
var G__6561 = (0);
var G__6562 = (0);
seq__6537_6542 = G__6559;
chunk__6538_6543 = G__6560;
count__6539_6544 = G__6561;
i__6540_6545 = G__6562;
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
var G__6570__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__6564 = tailrecursion.hoplon.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__6564,(0),null);
var kids = cljs.core.nth.call(null,vec__6564,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__6565 = this$;
G__6565.hoplonIFn(attr,kids);

return G__6565;
} else {
var G__6566 = this$;
tailrecursion.hoplon.add_attributes_BANG_.call(null,G__6566,attr);

tailrecursion.hoplon.add_children_BANG_.call(null,G__6566,kids);

return G__6566;
}
};
var G__6570 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__6571__i = 0, G__6571__a = new Array(arguments.length -  1);
while (G__6571__i < G__6571__a.length) {G__6571__a[G__6571__i] = arguments[G__6571__i + 1]; ++G__6571__i;}
  args = new cljs.core.IndexedSeq(G__6571__a,0);
} 
return G__6570__delegate.call(this,self__,args);};
G__6570.cljs$lang$maxFixedArity = 1;
G__6570.cljs$lang$applyTo = (function (arglist__6572){
var self__ = cljs.core.first(arglist__6572);
var args = cljs.core.rest(arglist__6572);
return G__6570__delegate(self__,args);
});
G__6570.cljs$core$IFn$_invoke$arity$variadic = G__6570__delegate;
return G__6570;
})()
;

Element.prototype.apply = (function (self__,args6563){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args6563)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__6573__delegate = function (args){
var this$ = this;
var vec__6567 = tailrecursion.hoplon.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__6567,(0),null);
var kids = cljs.core.nth.call(null,vec__6567,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__6568 = this$;
G__6568.hoplonIFn(attr,kids);

return G__6568;
} else {
var G__6569 = this$;
tailrecursion.hoplon.add_attributes_BANG_.call(null,G__6569,attr);

tailrecursion.hoplon.add_children_BANG_.call(null,G__6569,kids);

return G__6569;
}
};
var G__6573 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6574__i = 0, G__6574__a = new Array(arguments.length -  0);
while (G__6574__i < G__6574__a.length) {G__6574__a[G__6574__i] = arguments[G__6574__i + 0]; ++G__6574__i;}
  args = new cljs.core.IndexedSeq(G__6574__a,0);
} 
return G__6573__delegate.call(this,args);};
G__6573.cljs$lang$maxFixedArity = 0;
G__6573.cljs$lang$applyTo = (function (arglist__6575){
var args = cljs.core.seq(arglist__6575);
return G__6573__delegate(args);
});
G__6573.cljs$core$IFn$_invoke$arity$variadic = G__6573__delegate;
return G__6573;
})()
;

Element.prototype.cljs$core$IPrintWithWriter$ = true;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.call(null,writer,"#<Element: ",this$__$1.tagName,">");
});
tailrecursion.hoplon.make_singleton_ctor = (function tailrecursion$hoplon$make_singleton_ctor(tag){
return (function() { 
var G__6586__delegate = function (args){
var vec__6581 = tailrecursion.hoplon.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__6581,(0),null);
var kids = cljs.core.nth.call(null,vec__6581,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
tailrecursion.hoplon.add_attributes_BANG_.call(null,elem,attrs);

jQuery(elem).empty();

var seq__6582 = cljs.core.seq.call(null,kids);
var chunk__6583 = null;
var count__6584 = (0);
var i__6585 = (0);
while(true){
if((i__6585 < count__6584)){
var k = cljs.core._nth.call(null,chunk__6583,i__6585);
elem.appendChild(k);

var G__6587 = seq__6582;
var G__6588 = chunk__6583;
var G__6589 = count__6584;
var G__6590 = (i__6585 + (1));
seq__6582 = G__6587;
chunk__6583 = G__6588;
count__6584 = G__6589;
i__6585 = G__6590;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__6582);
if(temp__4126__auto__){
var seq__6582__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6582__$1)){
var c__4952__auto__ = cljs.core.chunk_first.call(null,seq__6582__$1);
var G__6591 = cljs.core.chunk_rest.call(null,seq__6582__$1);
var G__6592 = c__4952__auto__;
var G__6593 = cljs.core.count.call(null,c__4952__auto__);
var G__6594 = (0);
seq__6582 = G__6591;
chunk__6583 = G__6592;
count__6584 = G__6593;
i__6585 = G__6594;
continue;
} else {
var k = cljs.core.first.call(null,seq__6582__$1);
elem.appendChild(k);

var G__6595 = cljs.core.next.call(null,seq__6582__$1);
var G__6596 = null;
var G__6597 = (0);
var G__6598 = (0);
seq__6582 = G__6595;
chunk__6583 = G__6596;
count__6584 = G__6597;
i__6585 = G__6598;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__6586 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6599__i = 0, G__6599__a = new Array(arguments.length -  0);
while (G__6599__i < G__6599__a.length) {G__6599__a[G__6599__i] = arguments[G__6599__i + 0]; ++G__6599__i;}
  args = new cljs.core.IndexedSeq(G__6599__a,0);
} 
return G__6586__delegate.call(this,args);};
G__6586.cljs$lang$maxFixedArity = 0;
G__6586.cljs$lang$applyTo = (function (arglist__6600){
var args = cljs.core.seq(arglist__6600);
return G__6586__delegate(args);
});
G__6586.cljs$core$IFn$_invoke$arity$variadic = G__6586__delegate;
return G__6586;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function tailrecursion$hoplon$make_elem_ctor(tag){
return (function() { 
var G__6601__delegate = function (args){
return cljs.core.apply.call(null,document.createElement(tag),args);
};
var G__6601 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6602__i = 0, G__6602__a = new Array(arguments.length -  0);
while (G__6602__i < G__6602__a.length) {G__6602__a[G__6602__i] = arguments[G__6602__i + 0]; ++G__6602__i;}
  args = new cljs.core.IndexedSeq(G__6602__a,0);
} 
return G__6601__delegate.call(this,args);};
G__6601.cljs$lang$maxFixedArity = 0;
G__6601.cljs$lang$applyTo = (function (arglist__6603){
var args = cljs.core.seq(arglist__6603);
return G__6601__delegate(args);
});
G__6601.cljs$core$IFn$_invoke$arity$variadic = G__6601__delegate;
return G__6601;
})()
;
});
tailrecursion.hoplon.html = (function tailrecursion$hoplon$html(){
var argseq__5207__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5207__auto__);
});

tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__6605 = tailrecursion.hoplon.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__6605,(0),null);
var _ = cljs.core.nth.call(null,vec__6605,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_.call(null,(document.getElementsByTagName("html")[(0)]),attrs);
});

tailrecursion.hoplon.html.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.html.cljs$lang$applyTo = (function (seq6604){
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6604));
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
tailrecursion.hoplon.$text = (function tailrecursion$hoplon$$text(p1__6606_SHARP_){
return document.createTextNode(p1__6606_SHARP_);
});
tailrecursion.hoplon.$comment = (function tailrecursion$hoplon$$comment(p1__6607_SHARP_){
return document.createComment(p1__6607_SHARP_);
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
return jQuery("body").on("submit",(function (p1__6608_SHARP_){
var e = jQuery(p1__6608_SHARP_.target);
if(cljs.core.truth_((function (){var or__4167__auto__ = e.attr("action");
if(cljs.core.truth_(or__4167__auto__)){
return or__4167__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__6608_SHARP_.preventDefault();
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
var G__6610 = arguments.length;
switch (G__6610) {
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
var G__6613 = arguments.length;
switch (G__6613) {
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
var G__6615__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__6615 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__6616__i = 0, G__6616__a = new Array(arguments.length -  2);
while (G__6616__i < G__6616__a.length) {G__6616__a[G__6616__i] = arguments[G__6616__i + 2]; ++G__6616__i;}
  args = new cljs.core.IndexedSeq(G__6616__a,0);
} 
return G__6615__delegate.call(this,elem,_,args);};
G__6615.cljs$lang$maxFixedArity = 2;
G__6615.cljs$lang$applyTo = (function (arglist__6617){
var elem = cljs.core.first(arglist__6617);
arglist__6617 = cljs.core.next(arglist__6617);
var _ = cljs.core.first(arglist__6617);
var args = cljs.core.rest(arglist__6617);
return G__6615__delegate(elem,_,args);
});
G__6615.cljs$core$IFn$_invoke$arity$variadic = G__6615__delegate;
return G__6615;
})()
);
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (elem,_,kvs){
var e = jQuery(elem);
var seq__6618 = cljs.core.seq.call(null,kvs);
var chunk__6619 = null;
var count__6620 = (0);
var i__6621 = (0);
while(true){
if((i__6621 < count__6620)){
var vec__6622 = cljs.core._nth.call(null,chunk__6619,i__6621);
var k = cljs.core.nth.call(null,vec__6622,(0),null);
var v = cljs.core.nth.call(null,vec__6622,(1),null);
var k_6624__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_6624__$1);
} else {
e.attr(k_6624__$1,((cljs.core._EQ_.call(null,true,v))?k_6624__$1:v));
}

var G__6625 = seq__6618;
var G__6626 = chunk__6619;
var G__6627 = count__6620;
var G__6628 = (i__6621 + (1));
seq__6618 = G__6625;
chunk__6619 = G__6626;
count__6620 = G__6627;
i__6621 = G__6628;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__6618);
if(temp__4126__auto__){
var seq__6618__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6618__$1)){
var c__4952__auto__ = cljs.core.chunk_first.call(null,seq__6618__$1);
var G__6629 = cljs.core.chunk_rest.call(null,seq__6618__$1);
var G__6630 = c__4952__auto__;
var G__6631 = cljs.core.count.call(null,c__4952__auto__);
var G__6632 = (0);
seq__6618 = G__6629;
chunk__6619 = G__6630;
count__6620 = G__6631;
i__6621 = G__6632;
continue;
} else {
var vec__6623 = cljs.core.first.call(null,seq__6618__$1);
var k = cljs.core.nth.call(null,vec__6623,(0),null);
var v = cljs.core.nth.call(null,vec__6623,(1),null);
var k_6633__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_6633__$1);
} else {
e.attr(k_6633__$1,((cljs.core._EQ_.call(null,true,v))?k_6633__$1:v));
}

var G__6634 = cljs.core.next.call(null,seq__6618__$1);
var G__6635 = null;
var G__6636 = (0);
var G__6637 = (0);
seq__6618 = G__6634;
chunk__6619 = G__6635;
count__6620 = G__6636;
i__6621 = G__6637;
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
return (function (p1__6638_SHARP_){
return cljs.core.zipmap.call(null,p1__6638_SHARP_,cljs.core.repeat.call(null,true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_.call(null,kvs))?kvs:__GT_map.call(null,((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq.call(null,kvs))));
var seq__6639 = cljs.core.seq.call(null,clmap);
var chunk__6640 = null;
var count__6641 = (0);
var i__6642 = (0);
while(true){
if((i__6642 < count__6641)){
var vec__6643 = cljs.core._nth.call(null,chunk__6640,i__6642);
var c = cljs.core.nth.call(null,vec__6643,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__6643,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__6645 = seq__6639;
var G__6646 = chunk__6640;
var G__6647 = count__6641;
var G__6648 = (i__6642 + (1));
seq__6639 = G__6645;
chunk__6640 = G__6646;
count__6641 = G__6647;
i__6642 = G__6648;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__6639);
if(temp__4126__auto__){
var seq__6639__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6639__$1)){
var c__4952__auto__ = cljs.core.chunk_first.call(null,seq__6639__$1);
var G__6649 = cljs.core.chunk_rest.call(null,seq__6639__$1);
var G__6650 = c__4952__auto__;
var G__6651 = cljs.core.count.call(null,c__4952__auto__);
var G__6652 = (0);
seq__6639 = G__6649;
chunk__6640 = G__6650;
count__6641 = G__6651;
i__6642 = G__6652;
continue;
} else {
var vec__6644 = cljs.core.first.call(null,seq__6639__$1);
var c = cljs.core.nth.call(null,vec__6644,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__6644,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__6653 = cljs.core.next.call(null,seq__6639__$1);
var G__6654 = null;
var G__6655 = (0);
var G__6656 = (0);
seq__6639 = G__6653;
chunk__6640 = G__6654;
count__6641 = G__6655;
i__6642 = G__6656;
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
var seq__6657 = cljs.core.seq.call(null,kvs);
var chunk__6658 = null;
var count__6659 = (0);
var i__6660 = (0);
while(true){
if((i__6660 < count__6659)){
var vec__6661 = cljs.core._nth.call(null,chunk__6658,i__6660);
var k = cljs.core.nth.call(null,vec__6661,(0),null);
var v = cljs.core.nth.call(null,vec__6661,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__6663 = seq__6657;
var G__6664 = chunk__6658;
var G__6665 = count__6659;
var G__6666 = (i__6660 + (1));
seq__6657 = G__6663;
chunk__6658 = G__6664;
count__6659 = G__6665;
i__6660 = G__6666;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__6657);
if(temp__4126__auto__){
var seq__6657__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6657__$1)){
var c__4952__auto__ = cljs.core.chunk_first.call(null,seq__6657__$1);
var G__6667 = cljs.core.chunk_rest.call(null,seq__6657__$1);
var G__6668 = c__4952__auto__;
var G__6669 = cljs.core.count.call(null,c__4952__auto__);
var G__6670 = (0);
seq__6657 = G__6667;
chunk__6658 = G__6668;
count__6659 = G__6669;
i__6660 = G__6670;
continue;
} else {
var vec__6662 = cljs.core.first.call(null,seq__6657__$1);
var k = cljs.core.nth.call(null,vec__6662,(0),null);
var v = cljs.core.nth.call(null,vec__6662,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__6671 = cljs.core.next.call(null,seq__6657__$1);
var G__6672 = null;
var G__6673 = (0);
var G__6674 = (0);
seq__6657 = G__6671;
chunk__6658 = G__6672;
count__6659 = G__6673;
i__6660 = G__6674;
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
return (function (G__6700,G__6701){
return G__6700.call(null,G__6701);
});})(pool_size))
).call(null,cljs.core.seq,items);
var cur_count = tailrecursion.javelin.formula.call(null,((function (pool_size,items_seq){
return (function (G__6703,G__6702){
return G__6702.call(null,G__6703);
});})(pool_size,items_seq))
).call(null,items_seq,cljs.core.count);
var show_ith_QMARK_ = ((function (pool_size,items_seq,cur_count){
return (function (p1__6675_SHARP_){
return tailrecursion.javelin.formula.call(null,((function (pool_size,items_seq,cur_count){
return (function (G__6704,G__6705){
return (G__6704 < G__6705);
});})(pool_size,items_seq,cur_count))
).call(null,p1__6675_SHARP_,cur_count);
});})(pool_size,items_seq,cur_count))
;
var ith_item = ((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (p1__6676_SHARP_){
return tailrecursion.javelin.formula.call(null,((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (G__6707,G__6708,G__6706){
return G__6706.call(null,G__6707,G__6708);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
).call(null,items_seq,p1__6676_SHARP_,tailrecursion.hoplon.safe_nth);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
;
var d = tailrecursion.hoplon.span.call(null);
tailrecursion.hoplon.when_dom.call(null,d,((function (d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (){
var p = d.parentNode;
p.removeChild(d);

return tailrecursion.javelin.formula.call(null,((function (p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (G__6722,G__6720,G__6715,G__6713,G__6714,G__6719,G__6721,G__6716,G__6718,G__6717){
if(cljs.core.truth_((G__6713 < G__6714))){
var seq__6709_6723 = cljs.core.seq.call(null,G__6715.call(null,G__6713,G__6714));
var chunk__6710_6724 = null;
var count__6711_6725 = (0);
var i__6712_6726 = (0);
while(true){
if(cljs.core.truth_((i__6712_6726 < count__6711_6725))){
var i_6727 = cljs.core._nth.call(null,chunk__6710_6724,i__6712_6726);
var e_6728 = G__6716.call(null,G__6717.call(null,i_6727)).call(null,new cljs.core.Keyword(null,"do-toggle","do-toggle",-570648102),G__6718.call(null,i_6727));
if(cljs.core.not.call(null,G__6719)){
G__6720.appendChild(e_6728);
} else {
G__6720.insertBefore(e_6728,G__6720.firstChild);
}

var G__6729 = seq__6709_6723;
var G__6730 = chunk__6710_6724;
var G__6731 = count__6711_6725;
var G__6732 = (i__6712_6726 + (1));
seq__6709_6723 = G__6729;
chunk__6710_6724 = G__6730;
count__6711_6725 = G__6731;
i__6712_6726 = G__6732;
continue;
} else {
var temp__4126__auto___6733 = cljs.core.seq.call(null,seq__6709_6723);
if(temp__4126__auto___6733){
var seq__6709_6734__$1 = temp__4126__auto___6733;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6709_6734__$1)){
var c__4952__auto___6735 = cljs.core.chunk_first.call(null,seq__6709_6734__$1);
var G__6736 = cljs.core.chunk_rest.call(null,seq__6709_6734__$1);
var G__6737 = c__4952__auto___6735;
var G__6738 = cljs.core.count.call(null,c__4952__auto___6735);
var G__6739 = (0);
seq__6709_6723 = G__6736;
chunk__6710_6724 = G__6737;
count__6711_6725 = G__6738;
i__6712_6726 = G__6739;
continue;
} else {
var i_6740 = cljs.core.first.call(null,seq__6709_6734__$1);
var e_6741 = G__6716.call(null,G__6717.call(null,i_6740)).call(null,new cljs.core.Keyword(null,"do-toggle","do-toggle",-570648102),G__6718.call(null,i_6740));
if(cljs.core.not.call(null,G__6719)){
G__6720.appendChild(e_6741);
} else {
G__6720.insertBefore(e_6741,G__6720.firstChild);
}

var G__6742 = cljs.core.next.call(null,seq__6709_6734__$1);
var G__6743 = null;
var G__6744 = (0);
var G__6745 = (0);
seq__6709_6723 = G__6742;
chunk__6710_6724 = G__6743;
count__6711_6725 = G__6744;
i__6712_6726 = G__6745;
continue;
}
} else {
}
}
break;
}

return G__6721.call(null,G__6722,G__6714);
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
var G__6747 = arguments.length;
switch (G__6747) {
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
return (function (G__6748){
return G__6748;
});})(ret__5457__auto__))
).call(null,ret__5457__auto__);
})();
return tailrecursion.javelin.formula.call(null,((function (r){
return (function (G__6750,G__6749){
if(cljs.core.truth_(G__6749.call(null,"",G__6750))){
return G__6750;
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
return (function (G__6752,G__6751){
return G__6751.location.hash = G__6752;
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
return (function (G__6753,G__6754){
var or__4167__auto__ = G__6753;
if(cljs.core.truth_(or__4167__auto__)){
return or__4167__auto__;
} else {
return G__6754;
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
return (function (G__6756,G__6755){
return G__6755.location.hash = G__6756;
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