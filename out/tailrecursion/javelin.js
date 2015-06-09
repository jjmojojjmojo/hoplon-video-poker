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

var G__6188 = ((!(diff_QMARK_))?popq:cljs.core.reduce.call(null,((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4126__auto__){
return (function (p1__6186_SHARP_,p2__6187_SHARP_){
return cljs.core.assoc.call(null,p1__6186_SHARP_,p2__6187_SHARP_,p2__6187_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4126__auto__))
,popq,next.sinks));
pri_map = G__6188;
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
}catch (e6190){if((e6190 instanceof Error)){
var _ = e6190;
return null;
} else {
throw e6190;

}
}});
tailrecursion.javelin.propagate_BANG_ = (function tailrecursion$javelin$propagate_BANG_(c){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
var G__6193 = c;
tailrecursion.javelin.add_sync_BANG_.call(null,G__6193);

return G__6193;
} else {
var G__6194 = c;
tailrecursion.javelin.propagate_STAR_.call(null,tailrecursion.javelin.cell__GT_pm.call(null,G__6194));

return G__6194;
}
});
tailrecursion.javelin.destroy_cell_BANG_ = (function tailrecursion$javelin$destroy_cell_BANG_(){
var argseq__5207__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5207__auto__);
});

tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__6197){
var vec__6198 = p__6197;
var keep_watches_QMARK_ = cljs.core.nth.call(null,vec__6198,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__6199 = cljs.core.seq.call(null,srcs);
var chunk__6200 = null;
var count__6201 = (0);
var i__6202 = (0);
while(true){
if((i__6202 < count__6201)){
var src = cljs.core._nth.call(null,chunk__6200,i__6202);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__6203 = seq__6199;
var G__6204 = chunk__6200;
var G__6205 = count__6201;
var G__6206 = (i__6202 + (1));
seq__6199 = G__6203;
chunk__6200 = G__6204;
count__6201 = G__6205;
i__6202 = G__6206;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__6199);
if(temp__4126__auto__){
var seq__6199__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6199__$1)){
var c__4952__auto__ = cljs.core.chunk_first.call(null,seq__6199__$1);
var G__6207 = cljs.core.chunk_rest.call(null,seq__6199__$1);
var G__6208 = c__4952__auto__;
var G__6209 = cljs.core.count.call(null,c__4952__auto__);
var G__6210 = (0);
seq__6199 = G__6207;
chunk__6200 = G__6208;
count__6201 = G__6209;
i__6202 = G__6210;
continue;
} else {
var src = cljs.core.first.call(null,seq__6199__$1);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__6211 = cljs.core.next.call(null,seq__6199__$1);
var G__6212 = null;
var G__6213 = (0);
var G__6214 = (0);
seq__6199 = G__6211;
chunk__6200 = G__6212;
count__6201 = G__6213;
i__6202 = G__6214;
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

tailrecursion.javelin.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq6195){
var G__6196 = cljs.core.first.call(null,seq6195);
var seq6195__$1 = cljs.core.next.call(null,seq6195);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6196,seq6195__$1);
});
tailrecursion.javelin.set_formula_BANG_ = (function tailrecursion$javelin$set_formula_BANG_(){
var argseq__5207__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5207__auto__);
});

tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__6219){
var vec__6220 = p__6219;
var f = cljs.core.nth.call(null,vec__6220,(0),null);
var sources = cljs.core.nth.call(null,vec__6220,(1),null);
tailrecursion.javelin.destroy_cell_BANG_.call(null,this$,true);

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.call(null,cljs.core.vec.call(null,sources),f);

var seq__6221_6233 = cljs.core.seq.call(null,this$.sources);
var chunk__6222_6234 = null;
var count__6223_6235 = (0);
var i__6224_6236 = (0);
while(true){
if((i__6224_6236 < count__6223_6235)){
var source_6237 = cljs.core._nth.call(null,chunk__6222_6234,i__6224_6236);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,source_6237))){
source_6237.sinks = cljs.core.conj.call(null,source_6237.sinks,this$);

if((source_6237.rank > this$.rank)){
var seq__6225_6238 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__6221_6233,chunk__6222_6234,count__6223_6235,i__6224_6236,source_6237,vec__6220,f,sources){
return (function (p1__6215_SHARP_){
return p1__6215_SHARP_.sinks;
});})(seq__6221_6233,chunk__6222_6234,count__6223_6235,i__6224_6236,source_6237,vec__6220,f,sources))
,source_6237));
var chunk__6226_6239 = null;
var count__6227_6240 = (0);
var i__6228_6241 = (0);
while(true){
if((i__6228_6241 < count__6227_6240)){
var dep_6242 = cljs.core._nth.call(null,chunk__6226_6239,i__6228_6241);
dep_6242.rank = tailrecursion.javelin.next_rank.call(null);

var G__6243 = seq__6225_6238;
var G__6244 = chunk__6226_6239;
var G__6245 = count__6227_6240;
var G__6246 = (i__6228_6241 + (1));
seq__6225_6238 = G__6243;
chunk__6226_6239 = G__6244;
count__6227_6240 = G__6245;
i__6228_6241 = G__6246;
continue;
} else {
var temp__4126__auto___6247 = cljs.core.seq.call(null,seq__6225_6238);
if(temp__4126__auto___6247){
var seq__6225_6248__$1 = temp__4126__auto___6247;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6225_6248__$1)){
var c__4952__auto___6249 = cljs.core.chunk_first.call(null,seq__6225_6248__$1);
var G__6250 = cljs.core.chunk_rest.call(null,seq__6225_6248__$1);
var G__6251 = c__4952__auto___6249;
var G__6252 = cljs.core.count.call(null,c__4952__auto___6249);
var G__6253 = (0);
seq__6225_6238 = G__6250;
chunk__6226_6239 = G__6251;
count__6227_6240 = G__6252;
i__6228_6241 = G__6253;
continue;
} else {
var dep_6254 = cljs.core.first.call(null,seq__6225_6248__$1);
dep_6254.rank = tailrecursion.javelin.next_rank.call(null);

var G__6255 = cljs.core.next.call(null,seq__6225_6248__$1);
var G__6256 = null;
var G__6257 = (0);
var G__6258 = (0);
seq__6225_6238 = G__6255;
chunk__6226_6239 = G__6256;
count__6227_6240 = G__6257;
i__6228_6241 = G__6258;
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

var G__6259 = seq__6221_6233;
var G__6260 = chunk__6222_6234;
var G__6261 = count__6223_6235;
var G__6262 = (i__6224_6236 + (1));
seq__6221_6233 = G__6259;
chunk__6222_6234 = G__6260;
count__6223_6235 = G__6261;
i__6224_6236 = G__6262;
continue;
} else {
var temp__4126__auto___6263 = cljs.core.seq.call(null,seq__6221_6233);
if(temp__4126__auto___6263){
var seq__6221_6264__$1 = temp__4126__auto___6263;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6221_6264__$1)){
var c__4952__auto___6265 = cljs.core.chunk_first.call(null,seq__6221_6264__$1);
var G__6266 = cljs.core.chunk_rest.call(null,seq__6221_6264__$1);
var G__6267 = c__4952__auto___6265;
var G__6268 = cljs.core.count.call(null,c__4952__auto___6265);
var G__6269 = (0);
seq__6221_6233 = G__6266;
chunk__6222_6234 = G__6267;
count__6223_6235 = G__6268;
i__6224_6236 = G__6269;
continue;
} else {
var source_6270 = cljs.core.first.call(null,seq__6221_6264__$1);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,source_6270))){
source_6270.sinks = cljs.core.conj.call(null,source_6270.sinks,this$);

if((source_6270.rank > this$.rank)){
var seq__6229_6271 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__6221_6233,chunk__6222_6234,count__6223_6235,i__6224_6236,source_6270,seq__6221_6264__$1,temp__4126__auto___6263,vec__6220,f,sources){
return (function (p1__6215_SHARP_){
return p1__6215_SHARP_.sinks;
});})(seq__6221_6233,chunk__6222_6234,count__6223_6235,i__6224_6236,source_6270,seq__6221_6264__$1,temp__4126__auto___6263,vec__6220,f,sources))
,source_6270));
var chunk__6230_6272 = null;
var count__6231_6273 = (0);
var i__6232_6274 = (0);
while(true){
if((i__6232_6274 < count__6231_6273)){
var dep_6275 = cljs.core._nth.call(null,chunk__6230_6272,i__6232_6274);
dep_6275.rank = tailrecursion.javelin.next_rank.call(null);

var G__6276 = seq__6229_6271;
var G__6277 = chunk__6230_6272;
var G__6278 = count__6231_6273;
var G__6279 = (i__6232_6274 + (1));
seq__6229_6271 = G__6276;
chunk__6230_6272 = G__6277;
count__6231_6273 = G__6278;
i__6232_6274 = G__6279;
continue;
} else {
var temp__4126__auto___6280__$1 = cljs.core.seq.call(null,seq__6229_6271);
if(temp__4126__auto___6280__$1){
var seq__6229_6281__$1 = temp__4126__auto___6280__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6229_6281__$1)){
var c__4952__auto___6282 = cljs.core.chunk_first.call(null,seq__6229_6281__$1);
var G__6283 = cljs.core.chunk_rest.call(null,seq__6229_6281__$1);
var G__6284 = c__4952__auto___6282;
var G__6285 = cljs.core.count.call(null,c__4952__auto___6282);
var G__6286 = (0);
seq__6229_6271 = G__6283;
chunk__6230_6272 = G__6284;
count__6231_6273 = G__6285;
i__6232_6274 = G__6286;
continue;
} else {
var dep_6287 = cljs.core.first.call(null,seq__6229_6281__$1);
dep_6287.rank = tailrecursion.javelin.next_rank.call(null);

var G__6288 = cljs.core.next.call(null,seq__6229_6281__$1);
var G__6289 = null;
var G__6290 = (0);
var G__6291 = (0);
seq__6229_6271 = G__6288;
chunk__6230_6272 = G__6289;
count__6231_6273 = G__6290;
i__6232_6274 = G__6291;
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

var G__6292 = cljs.core.next.call(null,seq__6221_6264__$1);
var G__6293 = null;
var G__6294 = (0);
var G__6295 = (0);
seq__6221_6233 = G__6292;
chunk__6222_6234 = G__6293;
count__6223_6235 = G__6294;
i__6224_6236 = G__6295;
continue;
}
} else {
}
}
break;
}

var compute_6296 = ((function (vec__6220,f,sources){
return (function (p1__6216_SHARP_){
return cljs.core.apply.call(null,tailrecursion.javelin.deref_STAR_.call(null,cljs.core.peek.call(null,p1__6216_SHARP_)),cljs.core.map.call(null,tailrecursion.javelin.deref_STAR_,cljs.core.pop.call(null,p1__6216_SHARP_)));
});})(vec__6220,f,sources))
;
this$.thunk = ((function (compute_6296,vec__6220,f,sources){
return (function (){
return this$.state = compute_6296.call(null,this$.sources);
});})(compute_6296,vec__6220,f,sources))
;
} else {
}

return tailrecursion.javelin.propagate_BANG_.call(null,this$);
});

tailrecursion.javelin.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

tailrecursion.javelin.set_formula_BANG_.cljs$lang$applyTo = (function (seq6217){
var G__6218 = cljs.core.first.call(null,seq6217);
var seq6217__$1 = cljs.core.next.call(null,seq6217);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6218,seq6217__$1);
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
var seq__6297 = cljs.core.seq.call(null,self__.watches);
var chunk__6298 = null;
var count__6299 = (0);
var i__6300 = (0);
while(true){
if((i__6300 < count__6299)){
var vec__6301 = cljs.core._nth.call(null,chunk__6298,i__6300);
var key = cljs.core.nth.call(null,vec__6301,(0),null);
var f = cljs.core.nth.call(null,vec__6301,(1),null);
f.call(null,key,this$__$1,o,n);

var G__6303 = seq__6297;
var G__6304 = chunk__6298;
var G__6305 = count__6299;
var G__6306 = (i__6300 + (1));
seq__6297 = G__6303;
chunk__6298 = G__6304;
count__6299 = G__6305;
i__6300 = G__6306;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__6297);
if(temp__4126__auto__){
var seq__6297__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6297__$1)){
var c__4952__auto__ = cljs.core.chunk_first.call(null,seq__6297__$1);
var G__6307 = cljs.core.chunk_rest.call(null,seq__6297__$1);
var G__6308 = c__4952__auto__;
var G__6309 = cljs.core.count.call(null,c__4952__auto__);
var G__6310 = (0);
seq__6297 = G__6307;
chunk__6298 = G__6308;
count__6299 = G__6309;
i__6300 = G__6310;
continue;
} else {
var vec__6302 = cljs.core.first.call(null,seq__6297__$1);
var key = cljs.core.nth.call(null,vec__6302,(0),null);
var f = cljs.core.nth.call(null,vec__6302,(1),null);
f.call(null,key,this$__$1,o,n);

var G__6311 = cljs.core.next.call(null,seq__6297__$1);
var G__6312 = null;
var G__6313 = (0);
var G__6314 = (0);
seq__6297 = G__6311;
chunk__6298 = G__6312;
count__6299 = G__6313;
i__6300 = G__6314;
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
var G__6315__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.call(null,tailrecursion.javelin.cell.call(null,new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",273761139)),f,sources);
};
var G__6315 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__6316__i = 0, G__6316__a = new Array(arguments.length -  0);
while (G__6316__i < G__6316__a.length) {G__6316__a[G__6316__i] = arguments[G__6316__i + 0]; ++G__6316__i;}
  sources = new cljs.core.IndexedSeq(G__6316__a,0);
} 
return G__6315__delegate.call(this,sources);};
G__6315.cljs$lang$maxFixedArity = 0;
G__6315.cljs$lang$applyTo = (function (arglist__6317){
var sources = cljs.core.seq(arglist__6317);
return G__6315__delegate(sources);
});
G__6315.cljs$core$IFn$_invoke$arity$variadic = G__6315__delegate;
return G__6315;
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
var bind = (function (p1__6318_SHARP_){
var _STAR_tx_STAR_6321 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = cljs.core.atom.call(null,tailrecursion.priority_map.priority_map.call(null));

try{return p1__6318_SHARP_.call(null);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_6321;
}});
var prop = ((function (bind){
return (function (){
var tx = cljs.core.deref.call(null,tailrecursion.javelin._STAR_tx_STAR_);
var _STAR_tx_STAR_6322 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = null;

try{return tailrecursion.javelin.propagate_STAR_.call(null,tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_6322;
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
return (function (p1__6323_SHARP_,p2__6324_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__6323_SHARP_,p2__6324_SHARP_),p2__6324_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__6326_SHARP_,p2__6325_SHARP_){
return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__6326_SHARP_,p2__6325_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__6329__delegate = function (rest__6327_SHARP_){
var news = diff.call(null,cljs.core.deref.call(null,olds),rest__6327_SHARP_);
cljs.core.reset_BANG_.call(null,olds,rest__6327_SHARP_);

return news;
};
var G__6329 = function (var_args){
var rest__6327_SHARP_ = null;
if (arguments.length > 0) {
var G__6330__i = 0, G__6330__a = new Array(arguments.length -  0);
while (G__6330__i < G__6330__a.length) {G__6330__a[G__6330__i] = arguments[G__6330__i + 0]; ++G__6330__i;}
  rest__6327_SHARP_ = new cljs.core.IndexedSeq(G__6330__a,0);
} 
return G__6329__delegate.call(this,rest__6327_SHARP_);};
G__6329.cljs$lang$maxFixedArity = 0;
G__6329.cljs$lang$applyTo = (function (arglist__6331){
var rest__6327_SHARP_ = cljs.core.seq(arglist__6331);
return G__6329__delegate(rest__6327_SHARP_);
});
G__6329.cljs$core$IFn$_invoke$arity$variadic = G__6329__delegate;
return G__6329;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.call(null,tailrecursion.javelin.formula.call(null,proc),cells);
});

tailrecursion.javelin.alts_BANG_.cljs$lang$maxFixedArity = (0);

tailrecursion.javelin.alts_BANG_.cljs$lang$applyTo = (function (seq6328){
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6328));
});
tailrecursion.javelin.cell_map = (function tailrecursion$javelin$cell_map(f,c){
var cseq = tailrecursion.javelin.formula.call(null,cljs.core.seq).call(null,c);
return cljs.core.map.call(null,((function (cseq){
return (function (p1__6332_SHARP_){
return tailrecursion.javelin.formula.call(null,cljs.core.comp.call(null,f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__6332_SHARP_);
});})(cseq))
,cljs.core.range.call(null,(0),cljs.core.count.call(null,cljs.core.deref.call(null,cseq))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function tailrecursion$javelin$cell_doseq_STAR_(items_seq,f){
var pool_size = tailrecursion.javelin.cell.call(null,(0));
var cur_count = tailrecursion.javelin.formula.call(null,cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__6333_SHARP_){
return tailrecursion.javelin.formula.call(null,tailrecursion.javelin.safe_nth).call(null,items_seq,p1__6333_SHARP_);
});})(pool_size,cur_count))
;
return tailrecursion.javelin.formula.call(null,((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__6338_6342 = cljs.core.seq.call(null,cljs.core.range.call(null,pool_size__$1,cur_count__$1));
var chunk__6339_6343 = null;
var count__6340_6344 = (0);
var i__6341_6345 = (0);
while(true){
if((i__6341_6345 < count__6340_6344)){
var i_6346 = cljs.core._nth.call(null,chunk__6339_6343,i__6341_6345);
f__$1.call(null,ith_item__$1.call(null,i_6346));

var G__6347 = seq__6338_6342;
var G__6348 = chunk__6339_6343;
var G__6349 = count__6340_6344;
var G__6350 = (i__6341_6345 + (1));
seq__6338_6342 = G__6347;
chunk__6339_6343 = G__6348;
count__6340_6344 = G__6349;
i__6341_6345 = G__6350;
continue;
} else {
var temp__4126__auto___6351 = cljs.core.seq.call(null,seq__6338_6342);
if(temp__4126__auto___6351){
var seq__6338_6352__$1 = temp__4126__auto___6351;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6338_6352__$1)){
var c__4952__auto___6353 = cljs.core.chunk_first.call(null,seq__6338_6352__$1);
var G__6354 = cljs.core.chunk_rest.call(null,seq__6338_6352__$1);
var G__6355 = c__4952__auto___6353;
var G__6356 = cljs.core.count.call(null,c__4952__auto___6353);
var G__6357 = (0);
seq__6338_6342 = G__6354;
chunk__6339_6343 = G__6355;
count__6340_6344 = G__6356;
i__6341_6345 = G__6357;
continue;
} else {
var i_6358 = cljs.core.first.call(null,seq__6338_6352__$1);
f__$1.call(null,ith_item__$1.call(null,i_6358));

var G__6359 = cljs.core.next.call(null,seq__6338_6352__$1);
var G__6360 = null;
var G__6361 = (0);
var G__6362 = (0);
seq__6338_6342 = G__6359;
chunk__6339_6343 = G__6360;
count__6340_6344 = G__6361;
i__6341_6345 = G__6362;
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