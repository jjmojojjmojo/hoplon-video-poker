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

var G__6318 = ((!(diff_QMARK_))?popq:cljs.core.reduce.call(null,((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4126__auto__){
return (function (p1__6316_SHARP_,p2__6317_SHARP_){
return cljs.core.assoc.call(null,p1__6316_SHARP_,p2__6317_SHARP_,p2__6317_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4126__auto__))
,popq,next.sinks));
pri_map = G__6318;
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
}catch (e6320){if((e6320 instanceof Error)){
var _ = e6320;
return null;
} else {
throw e6320;

}
}});
tailrecursion.javelin.propagate_BANG_ = (function tailrecursion$javelin$propagate_BANG_(c){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
var G__6323 = c;
tailrecursion.javelin.add_sync_BANG_.call(null,G__6323);

return G__6323;
} else {
var G__6324 = c;
tailrecursion.javelin.propagate_STAR_.call(null,tailrecursion.javelin.cell__GT_pm.call(null,G__6324));

return G__6324;
}
});
tailrecursion.javelin.destroy_cell_BANG_ = (function tailrecursion$javelin$destroy_cell_BANG_(){
var argseq__5207__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5207__auto__);
});

tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__6327){
var vec__6328 = p__6327;
var keep_watches_QMARK_ = cljs.core.nth.call(null,vec__6328,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__6329 = cljs.core.seq.call(null,srcs);
var chunk__6330 = null;
var count__6331 = (0);
var i__6332 = (0);
while(true){
if((i__6332 < count__6331)){
var src = cljs.core._nth.call(null,chunk__6330,i__6332);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__6333 = seq__6329;
var G__6334 = chunk__6330;
var G__6335 = count__6331;
var G__6336 = (i__6332 + (1));
seq__6329 = G__6333;
chunk__6330 = G__6334;
count__6331 = G__6335;
i__6332 = G__6336;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__6329);
if(temp__4126__auto__){
var seq__6329__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6329__$1)){
var c__4952__auto__ = cljs.core.chunk_first.call(null,seq__6329__$1);
var G__6337 = cljs.core.chunk_rest.call(null,seq__6329__$1);
var G__6338 = c__4952__auto__;
var G__6339 = cljs.core.count.call(null,c__4952__auto__);
var G__6340 = (0);
seq__6329 = G__6337;
chunk__6330 = G__6338;
count__6331 = G__6339;
i__6332 = G__6340;
continue;
} else {
var src = cljs.core.first.call(null,seq__6329__$1);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__6341 = cljs.core.next.call(null,seq__6329__$1);
var G__6342 = null;
var G__6343 = (0);
var G__6344 = (0);
seq__6329 = G__6341;
chunk__6330 = G__6342;
count__6331 = G__6343;
i__6332 = G__6344;
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

tailrecursion.javelin.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq6325){
var G__6326 = cljs.core.first.call(null,seq6325);
var seq6325__$1 = cljs.core.next.call(null,seq6325);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6326,seq6325__$1);
});
tailrecursion.javelin.set_formula_BANG_ = (function tailrecursion$javelin$set_formula_BANG_(){
var argseq__5207__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5207__auto__);
});

tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__6349){
var vec__6350 = p__6349;
var f = cljs.core.nth.call(null,vec__6350,(0),null);
var sources = cljs.core.nth.call(null,vec__6350,(1),null);
tailrecursion.javelin.destroy_cell_BANG_.call(null,this$,true);

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.call(null,cljs.core.vec.call(null,sources),f);

var seq__6351_6363 = cljs.core.seq.call(null,this$.sources);
var chunk__6352_6364 = null;
var count__6353_6365 = (0);
var i__6354_6366 = (0);
while(true){
if((i__6354_6366 < count__6353_6365)){
var source_6367 = cljs.core._nth.call(null,chunk__6352_6364,i__6354_6366);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,source_6367))){
source_6367.sinks = cljs.core.conj.call(null,source_6367.sinks,this$);

if((source_6367.rank > this$.rank)){
var seq__6355_6368 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__6351_6363,chunk__6352_6364,count__6353_6365,i__6354_6366,source_6367,vec__6350,f,sources){
return (function (p1__6345_SHARP_){
return p1__6345_SHARP_.sinks;
});})(seq__6351_6363,chunk__6352_6364,count__6353_6365,i__6354_6366,source_6367,vec__6350,f,sources))
,source_6367));
var chunk__6356_6369 = null;
var count__6357_6370 = (0);
var i__6358_6371 = (0);
while(true){
if((i__6358_6371 < count__6357_6370)){
var dep_6372 = cljs.core._nth.call(null,chunk__6356_6369,i__6358_6371);
dep_6372.rank = tailrecursion.javelin.next_rank.call(null);

var G__6373 = seq__6355_6368;
var G__6374 = chunk__6356_6369;
var G__6375 = count__6357_6370;
var G__6376 = (i__6358_6371 + (1));
seq__6355_6368 = G__6373;
chunk__6356_6369 = G__6374;
count__6357_6370 = G__6375;
i__6358_6371 = G__6376;
continue;
} else {
var temp__4126__auto___6377 = cljs.core.seq.call(null,seq__6355_6368);
if(temp__4126__auto___6377){
var seq__6355_6378__$1 = temp__4126__auto___6377;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6355_6378__$1)){
var c__4952__auto___6379 = cljs.core.chunk_first.call(null,seq__6355_6378__$1);
var G__6380 = cljs.core.chunk_rest.call(null,seq__6355_6378__$1);
var G__6381 = c__4952__auto___6379;
var G__6382 = cljs.core.count.call(null,c__4952__auto___6379);
var G__6383 = (0);
seq__6355_6368 = G__6380;
chunk__6356_6369 = G__6381;
count__6357_6370 = G__6382;
i__6358_6371 = G__6383;
continue;
} else {
var dep_6384 = cljs.core.first.call(null,seq__6355_6378__$1);
dep_6384.rank = tailrecursion.javelin.next_rank.call(null);

var G__6385 = cljs.core.next.call(null,seq__6355_6378__$1);
var G__6386 = null;
var G__6387 = (0);
var G__6388 = (0);
seq__6355_6368 = G__6385;
chunk__6356_6369 = G__6386;
count__6357_6370 = G__6387;
i__6358_6371 = G__6388;
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

var G__6389 = seq__6351_6363;
var G__6390 = chunk__6352_6364;
var G__6391 = count__6353_6365;
var G__6392 = (i__6354_6366 + (1));
seq__6351_6363 = G__6389;
chunk__6352_6364 = G__6390;
count__6353_6365 = G__6391;
i__6354_6366 = G__6392;
continue;
} else {
var temp__4126__auto___6393 = cljs.core.seq.call(null,seq__6351_6363);
if(temp__4126__auto___6393){
var seq__6351_6394__$1 = temp__4126__auto___6393;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6351_6394__$1)){
var c__4952__auto___6395 = cljs.core.chunk_first.call(null,seq__6351_6394__$1);
var G__6396 = cljs.core.chunk_rest.call(null,seq__6351_6394__$1);
var G__6397 = c__4952__auto___6395;
var G__6398 = cljs.core.count.call(null,c__4952__auto___6395);
var G__6399 = (0);
seq__6351_6363 = G__6396;
chunk__6352_6364 = G__6397;
count__6353_6365 = G__6398;
i__6354_6366 = G__6399;
continue;
} else {
var source_6400 = cljs.core.first.call(null,seq__6351_6394__$1);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,source_6400))){
source_6400.sinks = cljs.core.conj.call(null,source_6400.sinks,this$);

if((source_6400.rank > this$.rank)){
var seq__6359_6401 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__6351_6363,chunk__6352_6364,count__6353_6365,i__6354_6366,source_6400,seq__6351_6394__$1,temp__4126__auto___6393,vec__6350,f,sources){
return (function (p1__6345_SHARP_){
return p1__6345_SHARP_.sinks;
});})(seq__6351_6363,chunk__6352_6364,count__6353_6365,i__6354_6366,source_6400,seq__6351_6394__$1,temp__4126__auto___6393,vec__6350,f,sources))
,source_6400));
var chunk__6360_6402 = null;
var count__6361_6403 = (0);
var i__6362_6404 = (0);
while(true){
if((i__6362_6404 < count__6361_6403)){
var dep_6405 = cljs.core._nth.call(null,chunk__6360_6402,i__6362_6404);
dep_6405.rank = tailrecursion.javelin.next_rank.call(null);

var G__6406 = seq__6359_6401;
var G__6407 = chunk__6360_6402;
var G__6408 = count__6361_6403;
var G__6409 = (i__6362_6404 + (1));
seq__6359_6401 = G__6406;
chunk__6360_6402 = G__6407;
count__6361_6403 = G__6408;
i__6362_6404 = G__6409;
continue;
} else {
var temp__4126__auto___6410__$1 = cljs.core.seq.call(null,seq__6359_6401);
if(temp__4126__auto___6410__$1){
var seq__6359_6411__$1 = temp__4126__auto___6410__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6359_6411__$1)){
var c__4952__auto___6412 = cljs.core.chunk_first.call(null,seq__6359_6411__$1);
var G__6413 = cljs.core.chunk_rest.call(null,seq__6359_6411__$1);
var G__6414 = c__4952__auto___6412;
var G__6415 = cljs.core.count.call(null,c__4952__auto___6412);
var G__6416 = (0);
seq__6359_6401 = G__6413;
chunk__6360_6402 = G__6414;
count__6361_6403 = G__6415;
i__6362_6404 = G__6416;
continue;
} else {
var dep_6417 = cljs.core.first.call(null,seq__6359_6411__$1);
dep_6417.rank = tailrecursion.javelin.next_rank.call(null);

var G__6418 = cljs.core.next.call(null,seq__6359_6411__$1);
var G__6419 = null;
var G__6420 = (0);
var G__6421 = (0);
seq__6359_6401 = G__6418;
chunk__6360_6402 = G__6419;
count__6361_6403 = G__6420;
i__6362_6404 = G__6421;
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

var G__6422 = cljs.core.next.call(null,seq__6351_6394__$1);
var G__6423 = null;
var G__6424 = (0);
var G__6425 = (0);
seq__6351_6363 = G__6422;
chunk__6352_6364 = G__6423;
count__6353_6365 = G__6424;
i__6354_6366 = G__6425;
continue;
}
} else {
}
}
break;
}

var compute_6426 = ((function (vec__6350,f,sources){
return (function (p1__6346_SHARP_){
return cljs.core.apply.call(null,tailrecursion.javelin.deref_STAR_.call(null,cljs.core.peek.call(null,p1__6346_SHARP_)),cljs.core.map.call(null,tailrecursion.javelin.deref_STAR_,cljs.core.pop.call(null,p1__6346_SHARP_)));
});})(vec__6350,f,sources))
;
this$.thunk = ((function (compute_6426,vec__6350,f,sources){
return (function (){
return this$.state = compute_6426.call(null,this$.sources);
});})(compute_6426,vec__6350,f,sources))
;
} else {
}

return tailrecursion.javelin.propagate_BANG_.call(null,this$);
});

tailrecursion.javelin.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

tailrecursion.javelin.set_formula_BANG_.cljs$lang$applyTo = (function (seq6347){
var G__6348 = cljs.core.first.call(null,seq6347);
var seq6347__$1 = cljs.core.next.call(null,seq6347);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6348,seq6347__$1);
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
var seq__6427 = cljs.core.seq.call(null,self__.watches);
var chunk__6428 = null;
var count__6429 = (0);
var i__6430 = (0);
while(true){
if((i__6430 < count__6429)){
var vec__6431 = cljs.core._nth.call(null,chunk__6428,i__6430);
var key = cljs.core.nth.call(null,vec__6431,(0),null);
var f = cljs.core.nth.call(null,vec__6431,(1),null);
f.call(null,key,this$__$1,o,n);

var G__6433 = seq__6427;
var G__6434 = chunk__6428;
var G__6435 = count__6429;
var G__6436 = (i__6430 + (1));
seq__6427 = G__6433;
chunk__6428 = G__6434;
count__6429 = G__6435;
i__6430 = G__6436;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__6427);
if(temp__4126__auto__){
var seq__6427__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6427__$1)){
var c__4952__auto__ = cljs.core.chunk_first.call(null,seq__6427__$1);
var G__6437 = cljs.core.chunk_rest.call(null,seq__6427__$1);
var G__6438 = c__4952__auto__;
var G__6439 = cljs.core.count.call(null,c__4952__auto__);
var G__6440 = (0);
seq__6427 = G__6437;
chunk__6428 = G__6438;
count__6429 = G__6439;
i__6430 = G__6440;
continue;
} else {
var vec__6432 = cljs.core.first.call(null,seq__6427__$1);
var key = cljs.core.nth.call(null,vec__6432,(0),null);
var f = cljs.core.nth.call(null,vec__6432,(1),null);
f.call(null,key,this$__$1,o,n);

var G__6441 = cljs.core.next.call(null,seq__6427__$1);
var G__6442 = null;
var G__6443 = (0);
var G__6444 = (0);
seq__6427 = G__6441;
chunk__6428 = G__6442;
count__6429 = G__6443;
i__6430 = G__6444;
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
var G__6445__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.call(null,tailrecursion.javelin.cell.call(null,new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",273761139)),f,sources);
};
var G__6445 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__6446__i = 0, G__6446__a = new Array(arguments.length -  0);
while (G__6446__i < G__6446__a.length) {G__6446__a[G__6446__i] = arguments[G__6446__i + 0]; ++G__6446__i;}
  sources = new cljs.core.IndexedSeq(G__6446__a,0);
} 
return G__6445__delegate.call(this,sources);};
G__6445.cljs$lang$maxFixedArity = 0;
G__6445.cljs$lang$applyTo = (function (arglist__6447){
var sources = cljs.core.seq(arglist__6447);
return G__6445__delegate(sources);
});
G__6445.cljs$core$IFn$_invoke$arity$variadic = G__6445__delegate;
return G__6445;
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
var bind = (function (p1__6448_SHARP_){
var _STAR_tx_STAR_6451 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = cljs.core.atom.call(null,tailrecursion.priority_map.priority_map.call(null));

try{return p1__6448_SHARP_.call(null);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_6451;
}});
var prop = ((function (bind){
return (function (){
var tx = cljs.core.deref.call(null,tailrecursion.javelin._STAR_tx_STAR_);
var _STAR_tx_STAR_6452 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = null;

try{return tailrecursion.javelin.propagate_STAR_.call(null,tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_6452;
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
return (function (p1__6453_SHARP_,p2__6454_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__6453_SHARP_,p2__6454_SHARP_),p2__6454_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__6456_SHARP_,p2__6455_SHARP_){
return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__6456_SHARP_,p2__6455_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__6459__delegate = function (rest__6457_SHARP_){
var news = diff.call(null,cljs.core.deref.call(null,olds),rest__6457_SHARP_);
cljs.core.reset_BANG_.call(null,olds,rest__6457_SHARP_);

return news;
};
var G__6459 = function (var_args){
var rest__6457_SHARP_ = null;
if (arguments.length > 0) {
var G__6460__i = 0, G__6460__a = new Array(arguments.length -  0);
while (G__6460__i < G__6460__a.length) {G__6460__a[G__6460__i] = arguments[G__6460__i + 0]; ++G__6460__i;}
  rest__6457_SHARP_ = new cljs.core.IndexedSeq(G__6460__a,0);
} 
return G__6459__delegate.call(this,rest__6457_SHARP_);};
G__6459.cljs$lang$maxFixedArity = 0;
G__6459.cljs$lang$applyTo = (function (arglist__6461){
var rest__6457_SHARP_ = cljs.core.seq(arglist__6461);
return G__6459__delegate(rest__6457_SHARP_);
});
G__6459.cljs$core$IFn$_invoke$arity$variadic = G__6459__delegate;
return G__6459;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.call(null,tailrecursion.javelin.formula.call(null,proc),cells);
});

tailrecursion.javelin.alts_BANG_.cljs$lang$maxFixedArity = (0);

tailrecursion.javelin.alts_BANG_.cljs$lang$applyTo = (function (seq6458){
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6458));
});
tailrecursion.javelin.cell_map = (function tailrecursion$javelin$cell_map(f,c){
var cseq = tailrecursion.javelin.formula.call(null,cljs.core.seq).call(null,c);
return cljs.core.map.call(null,((function (cseq){
return (function (p1__6462_SHARP_){
return tailrecursion.javelin.formula.call(null,cljs.core.comp.call(null,f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__6462_SHARP_);
});})(cseq))
,cljs.core.range.call(null,(0),cljs.core.count.call(null,cljs.core.deref.call(null,cseq))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function tailrecursion$javelin$cell_doseq_STAR_(items_seq,f){
var pool_size = tailrecursion.javelin.cell.call(null,(0));
var cur_count = tailrecursion.javelin.formula.call(null,cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__6463_SHARP_){
return tailrecursion.javelin.formula.call(null,tailrecursion.javelin.safe_nth).call(null,items_seq,p1__6463_SHARP_);
});})(pool_size,cur_count))
;
return tailrecursion.javelin.formula.call(null,((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__6468_6472 = cljs.core.seq.call(null,cljs.core.range.call(null,pool_size__$1,cur_count__$1));
var chunk__6469_6473 = null;
var count__6470_6474 = (0);
var i__6471_6475 = (0);
while(true){
if((i__6471_6475 < count__6470_6474)){
var i_6476 = cljs.core._nth.call(null,chunk__6469_6473,i__6471_6475);
f__$1.call(null,ith_item__$1.call(null,i_6476));

var G__6477 = seq__6468_6472;
var G__6478 = chunk__6469_6473;
var G__6479 = count__6470_6474;
var G__6480 = (i__6471_6475 + (1));
seq__6468_6472 = G__6477;
chunk__6469_6473 = G__6478;
count__6470_6474 = G__6479;
i__6471_6475 = G__6480;
continue;
} else {
var temp__4126__auto___6481 = cljs.core.seq.call(null,seq__6468_6472);
if(temp__4126__auto___6481){
var seq__6468_6482__$1 = temp__4126__auto___6481;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6468_6482__$1)){
var c__4952__auto___6483 = cljs.core.chunk_first.call(null,seq__6468_6482__$1);
var G__6484 = cljs.core.chunk_rest.call(null,seq__6468_6482__$1);
var G__6485 = c__4952__auto___6483;
var G__6486 = cljs.core.count.call(null,c__4952__auto___6483);
var G__6487 = (0);
seq__6468_6472 = G__6484;
chunk__6469_6473 = G__6485;
count__6470_6474 = G__6486;
i__6471_6475 = G__6487;
continue;
} else {
var i_6488 = cljs.core.first.call(null,seq__6468_6482__$1);
f__$1.call(null,ith_item__$1.call(null,i_6488));

var G__6489 = cljs.core.next.call(null,seq__6468_6482__$1);
var G__6490 = null;
var G__6491 = (0);
var G__6492 = (0);
seq__6468_6472 = G__6489;
chunk__6469_6473 = G__6490;
count__6470_6474 = G__6491;
i__6471_6475 = G__6492;
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