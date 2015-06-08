// Compiled by ClojureScript 0.0-3196 {}
goog.provide('tailrecursion.javelin');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');




tailrecursion.javelin._STAR_tx_STAR_ = null;
tailrecursion.javelin.last_rank = cljs.core.atom.call(null,(0));
/**
 * Like tree-seq but traversal is breadth-first instead of depth-first.
 */
tailrecursion.javelin.bf_seq = (function tailrecursion$javelin$bf_seq(branch_QMARK_,children,root){
var walk = (function tailrecursion$javelin$bf_seq_$_walk(queue){
var temp__4126__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__4126__auto__)){
var node = temp__4126__auto__;
return (new cljs.core.LazySeq(null,((function (node,temp__4126__auto__){
return (function (){
return cljs.core.cons.call(null,node,tailrecursion$javelin$bf_seq_$_walk.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(cljs.core.truth_(branch_QMARK_.call(null,node))?children.call(null,node):null))));
});})(node,temp__4126__auto__))
,null,null));
} else {
return null;
}
});
return walk.call(null,cljs.core.conj.call(null,cljs.core.PersistentQueue.EMPTY,root));
});
tailrecursion.javelin.propagate_STAR_ = (function tailrecursion$javelin$propagate_STAR_(pri_map){
while(true){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.peek.call(null,pri_map));
if(cljs.core.truth_(temp__4126__auto__)){
var next = temp__4126__auto__;
var popq = cljs.core.pop.call(null,pri_map);
var old = next.prev;
var new$ = (function (){var temp__4124__auto__ = next.thunk;
if(cljs.core.truth_(temp__4124__auto__)){
var f = temp__4124__auto__;
return f.call(null);
} else {
return next.state;
}
})();
var diff_QMARK_ = cljs.core.not_EQ_.call(null,new$,old);
if(diff_QMARK_){
next.prev = new$;

cljs.core._notify_watches.call(null,next,old,new$);
} else {
}

var G__6302 = ((!(diff_QMARK_))?popq:cljs.core.reduce.call(null,((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4126__auto__){
return (function (p1__6300_SHARP_,p2__6301_SHARP_){
return cljs.core.assoc.call(null,p1__6300_SHARP_,p2__6301_SHARP_,p2__6301_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4126__auto__))
,popq,next.sinks));
pri_map = G__6302;
continue;
} else {
return null;
}
break;
}
});
tailrecursion.javelin.deref_STAR_ = (function tailrecursion$javelin$deref_STAR_(x){
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,x))){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
tailrecursion.javelin.next_rank = (function tailrecursion$javelin$next_rank(){
return cljs.core.swap_BANG_.call(null,tailrecursion.javelin.last_rank,cljs.core.inc);
});
tailrecursion.javelin.cell__GT_pm = (function tailrecursion$javelin$cell__GT_pm(c){
return tailrecursion.priority_map.priority_map.call(null,c,c.rank);
});
tailrecursion.javelin.add_sync_BANG_ = (function tailrecursion$javelin$add_sync_BANG_(c){
return cljs.core.swap_BANG_.call(null,tailrecursion.javelin._STAR_tx_STAR_,cljs.core.assoc,c,c.rank);
});
tailrecursion.javelin.safe_nth = (function tailrecursion$javelin$safe_nth(c,i){
try{return cljs.core.nth.call(null,c,i);
}catch (e6304){if((e6304 instanceof Error)){
var _ = e6304;
return null;
} else {
throw e6304;

}
}});
tailrecursion.javelin.propagate_BANG_ = (function tailrecursion$javelin$propagate_BANG_(c){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
var G__6307 = c;
tailrecursion.javelin.add_sync_BANG_.call(null,G__6307);

return G__6307;
} else {
var G__6308 = c;
tailrecursion.javelin.propagate_STAR_.call(null,tailrecursion.javelin.cell__GT_pm.call(null,G__6308));

return G__6308;
}
});
tailrecursion.javelin.destroy_cell_BANG_ = (function tailrecursion$javelin$destroy_cell_BANG_(){
var argseq__5207__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5207__auto__);
});

tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__6311){
var vec__6312 = p__6311;
var keep_watches_QMARK_ = cljs.core.nth.call(null,vec__6312,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__6313 = cljs.core.seq.call(null,srcs);
var chunk__6314 = null;
var count__6315 = (0);
var i__6316 = (0);
while(true){
if((i__6316 < count__6315)){
var src = cljs.core._nth.call(null,chunk__6314,i__6316);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__6317 = seq__6313;
var G__6318 = chunk__6314;
var G__6319 = count__6315;
var G__6320 = (i__6316 + (1));
seq__6313 = G__6317;
chunk__6314 = G__6318;
count__6315 = G__6319;
i__6316 = G__6320;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__6313);
if(temp__4126__auto__){
var seq__6313__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6313__$1)){
var c__4952__auto__ = cljs.core.chunk_first.call(null,seq__6313__$1);
var G__6321 = cljs.core.chunk_rest.call(null,seq__6313__$1);
var G__6322 = c__4952__auto__;
var G__6323 = cljs.core.count.call(null,c__4952__auto__);
var G__6324 = (0);
seq__6313 = G__6321;
chunk__6314 = G__6322;
count__6315 = G__6323;
i__6316 = G__6324;
continue;
} else {
var src = cljs.core.first.call(null,seq__6313__$1);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__6325 = cljs.core.next.call(null,seq__6313__$1);
var G__6326 = null;
var G__6327 = (0);
var G__6328 = (0);
seq__6313 = G__6325;
chunk__6314 = G__6326;
count__6315 = G__6327;
i__6316 = G__6328;
continue;
}
} else {
return null;
}
}
break;
}
});

tailrecursion.javelin.destroy_cell_BANG_.cljs$lang$maxFixedArity = (1);

tailrecursion.javelin.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq6309){
var G__6310 = cljs.core.first.call(null,seq6309);
var seq6309__$1 = cljs.core.next.call(null,seq6309);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6310,seq6309__$1);
});
tailrecursion.javelin.set_formula_BANG_ = (function tailrecursion$javelin$set_formula_BANG_(){
var argseq__5207__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5207__auto__);
});

tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__6333){
var vec__6334 = p__6333;
var f = cljs.core.nth.call(null,vec__6334,(0),null);
var sources = cljs.core.nth.call(null,vec__6334,(1),null);
tailrecursion.javelin.destroy_cell_BANG_.call(null,this$,true);

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.call(null,cljs.core.vec.call(null,sources),f);

var seq__6335_6347 = cljs.core.seq.call(null,this$.sources);
var chunk__6336_6348 = null;
var count__6337_6349 = (0);
var i__6338_6350 = (0);
while(true){
if((i__6338_6350 < count__6337_6349)){
var source_6351 = cljs.core._nth.call(null,chunk__6336_6348,i__6338_6350);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,source_6351))){
source_6351.sinks = cljs.core.conj.call(null,source_6351.sinks,this$);

if((source_6351.rank > this$.rank)){
var seq__6339_6352 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__6335_6347,chunk__6336_6348,count__6337_6349,i__6338_6350,source_6351,vec__6334,f,sources){
return (function (p1__6329_SHARP_){
return p1__6329_SHARP_.sinks;
});})(seq__6335_6347,chunk__6336_6348,count__6337_6349,i__6338_6350,source_6351,vec__6334,f,sources))
,source_6351));
var chunk__6340_6353 = null;
var count__6341_6354 = (0);
var i__6342_6355 = (0);
while(true){
if((i__6342_6355 < count__6341_6354)){
var dep_6356 = cljs.core._nth.call(null,chunk__6340_6353,i__6342_6355);
dep_6356.rank = tailrecursion.javelin.next_rank.call(null);

var G__6357 = seq__6339_6352;
var G__6358 = chunk__6340_6353;
var G__6359 = count__6341_6354;
var G__6360 = (i__6342_6355 + (1));
seq__6339_6352 = G__6357;
chunk__6340_6353 = G__6358;
count__6341_6354 = G__6359;
i__6342_6355 = G__6360;
continue;
} else {
var temp__4126__auto___6361 = cljs.core.seq.call(null,seq__6339_6352);
if(temp__4126__auto___6361){
var seq__6339_6362__$1 = temp__4126__auto___6361;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6339_6362__$1)){
var c__4952__auto___6363 = cljs.core.chunk_first.call(null,seq__6339_6362__$1);
var G__6364 = cljs.core.chunk_rest.call(null,seq__6339_6362__$1);
var G__6365 = c__4952__auto___6363;
var G__6366 = cljs.core.count.call(null,c__4952__auto___6363);
var G__6367 = (0);
seq__6339_6352 = G__6364;
chunk__6340_6353 = G__6365;
count__6341_6354 = G__6366;
i__6342_6355 = G__6367;
continue;
} else {
var dep_6368 = cljs.core.first.call(null,seq__6339_6362__$1);
dep_6368.rank = tailrecursion.javelin.next_rank.call(null);

var G__6369 = cljs.core.next.call(null,seq__6339_6362__$1);
var G__6370 = null;
var G__6371 = (0);
var G__6372 = (0);
seq__6339_6352 = G__6369;
chunk__6340_6353 = G__6370;
count__6341_6354 = G__6371;
i__6342_6355 = G__6372;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__6373 = seq__6335_6347;
var G__6374 = chunk__6336_6348;
var G__6375 = count__6337_6349;
var G__6376 = (i__6338_6350 + (1));
seq__6335_6347 = G__6373;
chunk__6336_6348 = G__6374;
count__6337_6349 = G__6375;
i__6338_6350 = G__6376;
continue;
} else {
var temp__4126__auto___6377 = cljs.core.seq.call(null,seq__6335_6347);
if(temp__4126__auto___6377){
var seq__6335_6378__$1 = temp__4126__auto___6377;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6335_6378__$1)){
var c__4952__auto___6379 = cljs.core.chunk_first.call(null,seq__6335_6378__$1);
var G__6380 = cljs.core.chunk_rest.call(null,seq__6335_6378__$1);
var G__6381 = c__4952__auto___6379;
var G__6382 = cljs.core.count.call(null,c__4952__auto___6379);
var G__6383 = (0);
seq__6335_6347 = G__6380;
chunk__6336_6348 = G__6381;
count__6337_6349 = G__6382;
i__6338_6350 = G__6383;
continue;
} else {
var source_6384 = cljs.core.first.call(null,seq__6335_6378__$1);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,source_6384))){
source_6384.sinks = cljs.core.conj.call(null,source_6384.sinks,this$);

if((source_6384.rank > this$.rank)){
var seq__6343_6385 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__6335_6347,chunk__6336_6348,count__6337_6349,i__6338_6350,source_6384,seq__6335_6378__$1,temp__4126__auto___6377,vec__6334,f,sources){
return (function (p1__6329_SHARP_){
return p1__6329_SHARP_.sinks;
});})(seq__6335_6347,chunk__6336_6348,count__6337_6349,i__6338_6350,source_6384,seq__6335_6378__$1,temp__4126__auto___6377,vec__6334,f,sources))
,source_6384));
var chunk__6344_6386 = null;
var count__6345_6387 = (0);
var i__6346_6388 = (0);
while(true){
if((i__6346_6388 < count__6345_6387)){
var dep_6389 = cljs.core._nth.call(null,chunk__6344_6386,i__6346_6388);
dep_6389.rank = tailrecursion.javelin.next_rank.call(null);

var G__6390 = seq__6343_6385;
var G__6391 = chunk__6344_6386;
var G__6392 = count__6345_6387;
var G__6393 = (i__6346_6388 + (1));
seq__6343_6385 = G__6390;
chunk__6344_6386 = G__6391;
count__6345_6387 = G__6392;
i__6346_6388 = G__6393;
continue;
} else {
var temp__4126__auto___6394__$1 = cljs.core.seq.call(null,seq__6343_6385);
if(temp__4126__auto___6394__$1){
var seq__6343_6395__$1 = temp__4126__auto___6394__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6343_6395__$1)){
var c__4952__auto___6396 = cljs.core.chunk_first.call(null,seq__6343_6395__$1);
var G__6397 = cljs.core.chunk_rest.call(null,seq__6343_6395__$1);
var G__6398 = c__4952__auto___6396;
var G__6399 = cljs.core.count.call(null,c__4952__auto___6396);
var G__6400 = (0);
seq__6343_6385 = G__6397;
chunk__6344_6386 = G__6398;
count__6345_6387 = G__6399;
i__6346_6388 = G__6400;
continue;
} else {
var dep_6401 = cljs.core.first.call(null,seq__6343_6395__$1);
dep_6401.rank = tailrecursion.javelin.next_rank.call(null);

var G__6402 = cljs.core.next.call(null,seq__6343_6395__$1);
var G__6403 = null;
var G__6404 = (0);
var G__6405 = (0);
seq__6343_6385 = G__6402;
chunk__6344_6386 = G__6403;
count__6345_6387 = G__6404;
i__6346_6388 = G__6405;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__6406 = cljs.core.next.call(null,seq__6335_6378__$1);
var G__6407 = null;
var G__6408 = (0);
var G__6409 = (0);
seq__6335_6347 = G__6406;
chunk__6336_6348 = G__6407;
count__6337_6349 = G__6408;
i__6338_6350 = G__6409;
continue;
}
} else {
}
}
break;
}

var compute_6410 = ((function (vec__6334,f,sources){
return (function (p1__6330_SHARP_){
return cljs.core.apply.call(null,tailrecursion.javelin.deref_STAR_.call(null,cljs.core.peek.call(null,p1__6330_SHARP_)),cljs.core.map.call(null,tailrecursion.javelin.deref_STAR_,cljs.core.pop.call(null,p1__6330_SHARP_)));
});})(vec__6334,f,sources))
;
this$.thunk = ((function (compute_6410,vec__6334,f,sources){
return (function (){
return this$.state = compute_6410.call(null,this$.sources);
});})(compute_6410,vec__6334,f,sources))
;
} else {
}

return tailrecursion.javelin.propagate_BANG_.call(null,this$);
});

tailrecursion.javelin.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

tailrecursion.javelin.set_formula_BANG_.cljs$lang$applyTo = (function (seq6331){
var G__6332 = cljs.core.first.call(null,seq6331);
var seq6331__$1 = cljs.core.next.call(null,seq6331);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6332,seq6331__$1);
});

/**
* @constructor
*/
tailrecursion.javelin.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,update){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.update = update;
this.cljs$lang$protocol_mask$partition1$ = 98306;
this.cljs$lang$protocol_mask$partition0$ = 2147647488;
})
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__6411 = cljs.core.seq.call(null,self__.watches);
var chunk__6412 = null;
var count__6413 = (0);
var i__6414 = (0);
while(true){
if((i__6414 < count__6413)){
var vec__6415 = cljs.core._nth.call(null,chunk__6412,i__6414);
var key = cljs.core.nth.call(null,vec__6415,(0),null);
var f = cljs.core.nth.call(null,vec__6415,(1),null);
f.call(null,key,this$__$1,o,n);

var G__6417 = seq__6411;
var G__6418 = chunk__6412;
var G__6419 = count__6413;
var G__6420 = (i__6414 + (1));
seq__6411 = G__6417;
chunk__6412 = G__6418;
count__6413 = G__6419;
i__6414 = G__6420;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__6411);
if(temp__4126__auto__){
var seq__6411__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6411__$1)){
var c__4952__auto__ = cljs.core.chunk_first.call(null,seq__6411__$1);
var G__6421 = cljs.core.chunk_rest.call(null,seq__6411__$1);
var G__6422 = c__4952__auto__;
var G__6423 = cljs.core.count.call(null,c__4952__auto__);
var G__6424 = (0);
seq__6411 = G__6421;
chunk__6412 = G__6422;
count__6413 = G__6423;
i__6414 = G__6424;
continue;
} else {
var vec__6416 = cljs.core.first.call(null,seq__6411__$1);
var key = cljs.core.nth.call(null,vec__6416,(0),null);
var f = cljs.core.nth.call(null,vec__6416,(1),null);
f.call(null,key,this$__$1,o,n);

var G__6425 = cljs.core.next.call(null,seq__6411__$1);
var G__6426 = null;
var G__6427 = (0);
var G__6428 = (0);
seq__6411 = G__6425;
chunk__6412 = G__6426;
count__6413 = G__6427;
i__6414 = G__6428;
continue;
}
} else {
return null;
}
}
break;
}
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,f){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,k,f);
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,k);
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a,b));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,this$__$1.state,a,b,xs));
});

tailrecursion.javelin.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(tailrecursion.javelin.lens_QMARK_.call(null,this$__$1))){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_(tailrecursion.javelin.input_QMARK_.call(null,this$__$1))){
this$__$1.state = x;

tailrecursion.javelin.propagate_BANG_.call(null,this$__$1);
} else {
throw (new Error("can't swap! or reset! formula cell"));

}
}

return this$__$1.state;
});

tailrecursion.javelin.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.state;
});

tailrecursion.javelin.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

tailrecursion.javelin.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,w,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.call(null,w,"#<Cell: ",cljs.core.pr_str.call(null,self__.state),">");
});

tailrecursion.javelin.Cell.cljs$lang$type = true;

tailrecursion.javelin.Cell.cljs$lang$ctorStr = "tailrecursion.javelin/Cell";

tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter = (function (this__4746__auto__,writer__4747__auto__,opt__4748__auto__){
return cljs.core._write.call(null,writer__4747__auto__,"tailrecursion.javelin/Cell");
});

tailrecursion.javelin.__GT_Cell = (function tailrecursion$javelin$__GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update){
return (new tailrecursion.javelin.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update));
});

tailrecursion.javelin.cell_QMARK_ = (function tailrecursion$javelin$cell_QMARK_(c){
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,c),tailrecursion.javelin.Cell)){
return c;
} else {
return null;
}
});
tailrecursion.javelin.formula_QMARK_ = (function tailrecursion$javelin$formula_QMARK_(c){
if(cljs.core.truth_((function (){var and__4155__auto__ = tailrecursion.javelin.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__4155__auto__)){
return c.thunk;
} else {
return and__4155__auto__;
}
})())){
return c;
} else {
return null;
}
});
tailrecursion.javelin.lens_QMARK_ = (function tailrecursion$javelin$lens_QMARK_(c){
if(cljs.core.truth_((function (){var and__4155__auto__ = tailrecursion.javelin.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__4155__auto__)){
return c.update;
} else {
return and__4155__auto__;
}
})())){
return c;
} else {
return null;
}
});
tailrecursion.javelin.input_QMARK_ = (function tailrecursion$javelin$input_QMARK_(c){
if(cljs.core.truth_((function (){var and__4155__auto__ = tailrecursion.javelin.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__4155__auto__)){
return cljs.core.not.call(null,tailrecursion.javelin.formula_QMARK_.call(null,c));
} else {
return and__4155__auto__;
}
})())){
return c;
} else {
return null;
}
});
tailrecursion.javelin.set_cell_BANG_ = (function tailrecursion$javelin$set_cell_BANG_(c,x){
c.state = x;

return tailrecursion.javelin.set_formula_BANG_.call(null,c);
});
tailrecursion.javelin.formula = (function tailrecursion$javelin$formula(f){
return (function() { 
var G__6429__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.call(null,tailrecursion.javelin.cell.call(null,new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",273761139)),f,sources);
};
var G__6429 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__6430__i = 0, G__6430__a = new Array(arguments.length -  0);
while (G__6430__i < G__6430__a.length) {G__6430__a[G__6430__i] = arguments[G__6430__i + 0]; ++G__6430__i;}
  sources = new cljs.core.IndexedSeq(G__6430__a,0);
} 
return G__6429__delegate.call(this,sources);};
G__6429.cljs$lang$maxFixedArity = 0;
G__6429.cljs$lang$applyTo = (function (arglist__6431){
var sources = cljs.core.seq(arglist__6431);
return G__6429__delegate(sources);
});
G__6429.cljs$core$IFn$_invoke$arity$variadic = G__6429__delegate;
return G__6429;
})()
;
});
tailrecursion.javelin.lens = (function tailrecursion$javelin$lens(c,f){
var c__$1 = tailrecursion.javelin.formula.call(null,cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
tailrecursion.javelin.cell = (function tailrecursion$javelin$cell(x){
return tailrecursion.javelin.set_formula_BANG_.call(null,(new tailrecursion.javelin.Cell(cljs.core.PersistentArrayMap.EMPTY,x,tailrecursion.javelin.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});
tailrecursion.javelin.lift = tailrecursion.javelin.formula;
tailrecursion.javelin.dosync_STAR_ = (function tailrecursion$javelin$dosync_STAR_(thunk){
var bind = (function (p1__6432_SHARP_){
var _STAR_tx_STAR_6435 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = cljs.core.atom.call(null,tailrecursion.priority_map.priority_map.call(null));

try{return p1__6432_SHARP_.call(null);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_6435;
}});
var prop = ((function (bind){
return (function (){
var tx = cljs.core.deref.call(null,tailrecursion.javelin._STAR_tx_STAR_);
var _STAR_tx_STAR_6436 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = null;

try{return tailrecursion.javelin.propagate_STAR_.call(null,tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_6436;
}});})(bind))
;
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
return thunk.call(null);
} else {
return bind.call(null,((function (bind,prop){
return (function (){
thunk.call(null);

return prop.call(null);
});})(bind,prop))
);
}
});
tailrecursion.javelin.alts_BANG_ = (function tailrecursion$javelin$alts_BANG_(){
var argseq__5207__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5207__auto__);
});

tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = cljs.core.atom.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,cells),new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",273761139)));
var tag_neq = ((function (olds){
return (function (p1__6437_SHARP_,p2__6438_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__6437_SHARP_,p2__6438_SHARP_),p2__6438_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__6440_SHARP_,p2__6439_SHARP_){
return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__6440_SHARP_,p2__6439_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__6443__delegate = function (rest__6441_SHARP_){
var news = diff.call(null,cljs.core.deref.call(null,olds),rest__6441_SHARP_);
cljs.core.reset_BANG_.call(null,olds,rest__6441_SHARP_);

return news;
};
var G__6443 = function (var_args){
var rest__6441_SHARP_ = null;
if (arguments.length > 0) {
var G__6444__i = 0, G__6444__a = new Array(arguments.length -  0);
while (G__6444__i < G__6444__a.length) {G__6444__a[G__6444__i] = arguments[G__6444__i + 0]; ++G__6444__i;}
  rest__6441_SHARP_ = new cljs.core.IndexedSeq(G__6444__a,0);
} 
return G__6443__delegate.call(this,rest__6441_SHARP_);};
G__6443.cljs$lang$maxFixedArity = 0;
G__6443.cljs$lang$applyTo = (function (arglist__6445){
var rest__6441_SHARP_ = cljs.core.seq(arglist__6445);
return G__6443__delegate(rest__6441_SHARP_);
});
G__6443.cljs$core$IFn$_invoke$arity$variadic = G__6443__delegate;
return G__6443;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.call(null,tailrecursion.javelin.formula.call(null,proc),cells);
});

tailrecursion.javelin.alts_BANG_.cljs$lang$maxFixedArity = (0);

tailrecursion.javelin.alts_BANG_.cljs$lang$applyTo = (function (seq6442){
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6442));
});
tailrecursion.javelin.cell_map = (function tailrecursion$javelin$cell_map(f,c){
var cseq = tailrecursion.javelin.formula.call(null,cljs.core.seq).call(null,c);
return cljs.core.map.call(null,((function (cseq){
return (function (p1__6446_SHARP_){
return tailrecursion.javelin.formula.call(null,cljs.core.comp.call(null,f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__6446_SHARP_);
});})(cseq))
,cljs.core.range.call(null,(0),cljs.core.count.call(null,cljs.core.deref.call(null,cseq))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function tailrecursion$javelin$cell_doseq_STAR_(items_seq,f){
var pool_size = tailrecursion.javelin.cell.call(null,(0));
var cur_count = tailrecursion.javelin.formula.call(null,cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__6447_SHARP_){
return tailrecursion.javelin.formula.call(null,tailrecursion.javelin.safe_nth).call(null,items_seq,p1__6447_SHARP_);
});})(pool_size,cur_count))
;
return tailrecursion.javelin.formula.call(null,((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__6452_6456 = cljs.core.seq.call(null,cljs.core.range.call(null,pool_size__$1,cur_count__$1));
var chunk__6453_6457 = null;
var count__6454_6458 = (0);
var i__6455_6459 = (0);
while(true){
if((i__6455_6459 < count__6454_6458)){
var i_6460 = cljs.core._nth.call(null,chunk__6453_6457,i__6455_6459);
f__$1.call(null,ith_item__$1.call(null,i_6460));

var G__6461 = seq__6452_6456;
var G__6462 = chunk__6453_6457;
var G__6463 = count__6454_6458;
var G__6464 = (i__6455_6459 + (1));
seq__6452_6456 = G__6461;
chunk__6453_6457 = G__6462;
count__6454_6458 = G__6463;
i__6455_6459 = G__6464;
continue;
} else {
var temp__4126__auto___6465 = cljs.core.seq.call(null,seq__6452_6456);
if(temp__4126__auto___6465){
var seq__6452_6466__$1 = temp__4126__auto___6465;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6452_6466__$1)){
var c__4952__auto___6467 = cljs.core.chunk_first.call(null,seq__6452_6466__$1);
var G__6468 = cljs.core.chunk_rest.call(null,seq__6452_6466__$1);
var G__6469 = c__4952__auto___6467;
var G__6470 = cljs.core.count.call(null,c__4952__auto___6467);
var G__6471 = (0);
seq__6452_6456 = G__6468;
chunk__6453_6457 = G__6469;
count__6454_6458 = G__6470;
i__6455_6459 = G__6471;
continue;
} else {
var i_6472 = cljs.core.first.call(null,seq__6452_6466__$1);
f__$1.call(null,ith_item__$1.call(null,i_6472));

var G__6473 = cljs.core.next.call(null,seq__6452_6466__$1);
var G__6474 = null;
var G__6475 = (0);
var G__6476 = (0);
seq__6452_6456 = G__6473;
chunk__6453_6457 = G__6474;
count__6454_6458 = G__6475;
i__6455_6459 = G__6476;
continue;
}
} else {
}
}
break;
}

return reset_pool_size_BANG_.call(null,cur_count__$1);
} else {
return null;
}
});})(pool_size,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.call(null,cljs.core.reset_BANG_,pool_size));
});

//# sourceMappingURL=javelin.js.map