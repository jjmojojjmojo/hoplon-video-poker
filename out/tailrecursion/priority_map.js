// Compiled by ClojureScript 0.0-3196 {}
goog.provide('tailrecursion.priority_map');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core');

/**
* @constructor
*/
tailrecursion.priority_map.PersistentPriorityMap = (function (priority__GT_set_of_items,item__GT_priority,meta,__hash){
this.priority__GT_set_of_items = priority__GT_set_of_items;
this.item__GT_priority = item__GT_priority;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2565220111;
})
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,self__.item__GT_priority,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,item,not_found){
var self__ = this;
var coll__$1 = this;
return cljs.core.get.call(null,self__.item__GT_priority,item,not_found);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
var pr_pair = ((function (coll__$1){
return (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});})(coll__$1))
;
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"#tailrecursion.priority-map {",", ","}",opts,coll__$1);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.count.call(null,self__.item__GT_priority);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.item__GT_priority) === (0))){
return null;
} else {
var f = cljs.core.first.call(null,self__.priority__GT_set_of_items);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cljs.core.val.call(null,f)),cljs.core.key.call(null,f)], null);
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.item__GT_priority) === (0))){
throw (new Error("Can't pop empty priority map"));
} else {
var f = cljs.core.first.call(null,self__.priority__GT_set_of_items);
var item_set = cljs.core.val.call(null,f);
var item = cljs.core.first.call(null,item_set);
var priority = cljs.core.key.call(null,f);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,priority),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority,cljs.core.disj.call(null,item_set,item)),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null));
}
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq.call(null,(function (){var iter__4921__auto__ = ((function (coll__$1){
return (function tailrecursion$priority_map$iter__6496(s__6497){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__6497__$1 = s__6497;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6497__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var vec__6503 = cljs.core.first.call(null,xs__4624__auto__);
var priority = cljs.core.nth.call(null,vec__6503,(0),null);
var item_set = cljs.core.nth.call(null,vec__6503,(1),null);
var iterys__4917__auto__ = ((function (s__6497__$1,vec__6503,priority,item_set,xs__4624__auto__,temp__4126__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__6496_$_iter__6498(s__6499){
return (new cljs.core.LazySeq(null,((function (s__6497__$1,vec__6503,priority,item_set,xs__4624__auto__,temp__4126__auto__,coll__$1){
return (function (){
var s__6499__$1 = s__6499;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__6499__$1);
if(temp__4126__auto____$1){
var s__6499__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6499__$2)){
var c__4919__auto__ = cljs.core.chunk_first.call(null,s__6499__$2);
var size__4920__auto__ = cljs.core.count.call(null,c__4919__auto__);
var b__6501 = cljs.core.chunk_buffer.call(null,size__4920__auto__);
if((function (){var i__6500 = (0);
while(true){
if((i__6500 < size__4920__auto__)){
var item = cljs.core._nth.call(null,c__4919__auto__,i__6500);
cljs.core.chunk_append.call(null,b__6501,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__6520 = (i__6500 + (1));
i__6500 = G__6520;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6501),tailrecursion$priority_map$iter__6496_$_iter__6498.call(null,cljs.core.chunk_rest.call(null,s__6499__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6501),null);
}
} else {
var item = cljs.core.first.call(null,s__6499__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__6496_$_iter__6498.call(null,cljs.core.rest.call(null,s__6499__$2)));
}
} else {
return null;
}
break;
}
});})(s__6497__$1,vec__6503,priority,item_set,xs__4624__auto__,temp__4126__auto__,coll__$1))
,null,null));
});})(s__6497__$1,vec__6503,priority,item_set,xs__4624__auto__,temp__4126__auto__,coll__$1))
;
var fs__4918__auto__ = cljs.core.seq.call(null,iterys__4917__auto__.call(null,item_set));
if(fs__4918__auto__){
return cljs.core.concat.call(null,fs__4918__auto__,tailrecursion$priority_map$iter__6496.call(null,cljs.core.rest.call(null,s__6497__$1)));
} else {
var G__6521 = cljs.core.rest.call(null,s__6497__$1);
s__6497__$1 = G__6521;
continue;
}
} else {
return null;
}
break;
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;
return iter__4921__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__4583__auto__ = self__.__hash;
if(!((h__4583__auto__ == null))){
return h__4583__auto__;
} else {
var h__4583__auto____$1 = cljs.core.hash_imap.call(null,this$__$1);
self__.__hash = h__4583__auto____$1;

return h__4583__auto____$1;
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return cljs.core._equiv.call(null,self__.item__GT_priority,other);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.with_meta.call(null,tailrecursion.priority_map.PersistentPriorityMap.EMPTY,self__.meta);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
var priority = self__.item__GT_priority.call(null,item,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517));
if(cljs.core._EQ_.call(null,priority,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517))){
return this$__$1;
} else {
var item_set = self__.priority__GT_set_of_items.call(null,priority);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,priority),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority,cljs.core.disj.call(null,item_set,item)),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null));
}
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,item,priority){
var self__ = this;
var this$__$1 = this;
var temp__4124__auto__ = cljs.core.get.call(null,self__.item__GT_priority,item,null);
if(cljs.core.truth_(temp__4124__auto__)){
var current_priority = temp__4124__auto__;
if(cljs.core._EQ_.call(null,current_priority,priority)){
return this$__$1;
} else {
var item_set = cljs.core.get.call(null,self__.priority__GT_set_of_items,current_priority);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,current_priority),priority,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,current_priority,cljs.core.disj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,current_priority),item),priority,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,null));
}
}
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,null));
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.contains_QMARK_.call(null,self__.item__GT_priority,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.seq.call(null,(function (){var iter__4921__auto__ = ((function (this$__$1){
return (function tailrecursion$priority_map$iter__6504(s__6505){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__6505__$1 = s__6505;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6505__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var vec__6511 = cljs.core.first.call(null,xs__4624__auto__);
var priority = cljs.core.nth.call(null,vec__6511,(0),null);
var item_set = cljs.core.nth.call(null,vec__6511,(1),null);
var iterys__4917__auto__ = ((function (s__6505__$1,vec__6511,priority,item_set,xs__4624__auto__,temp__4126__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__6504_$_iter__6506(s__6507){
return (new cljs.core.LazySeq(null,((function (s__6505__$1,vec__6511,priority,item_set,xs__4624__auto__,temp__4126__auto__,this$__$1){
return (function (){
var s__6507__$1 = s__6507;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__6507__$1);
if(temp__4126__auto____$1){
var s__6507__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6507__$2)){
var c__4919__auto__ = cljs.core.chunk_first.call(null,s__6507__$2);
var size__4920__auto__ = cljs.core.count.call(null,c__4919__auto__);
var b__6509 = cljs.core.chunk_buffer.call(null,size__4920__auto__);
if((function (){var i__6508 = (0);
while(true){
if((i__6508 < size__4920__auto__)){
var item = cljs.core._nth.call(null,c__4919__auto__,i__6508);
cljs.core.chunk_append.call(null,b__6509,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__6522 = (i__6508 + (1));
i__6508 = G__6522;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6509),tailrecursion$priority_map$iter__6504_$_iter__6506.call(null,cljs.core.chunk_rest.call(null,s__6507__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6509),null);
}
} else {
var item = cljs.core.first.call(null,s__6507__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__6504_$_iter__6506.call(null,cljs.core.rest.call(null,s__6507__$2)));
}
} else {
return null;
}
break;
}
});})(s__6505__$1,vec__6511,priority,item_set,xs__4624__auto__,temp__4126__auto__,this$__$1))
,null,null));
});})(s__6505__$1,vec__6511,priority,item_set,xs__4624__auto__,temp__4126__auto__,this$__$1))
;
var fs__4918__auto__ = cljs.core.seq.call(null,iterys__4917__auto__.call(null,item_set));
if(fs__4918__auto__){
return cljs.core.concat.call(null,fs__4918__auto__,tailrecursion$priority_map$iter__6504.call(null,cljs.core.rest.call(null,s__6505__$1)));
} else {
var G__6523 = cljs.core.rest.call(null,s__6505__$1);
s__6505__$1 = G__6523;
continue;
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__4921__auto__.call(null,self__.priority__GT_set_of_items);
})());
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new tailrecursion.priority_map.PersistentPriorityMap(self__.priority__GT_set_of_items,self__.item__GT_priority,meta__$1,self__.__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry)){
return cljs.core._assoc.call(null,this$__$1,cljs.core._nth.call(null,entry,(0)),cljs.core._nth.call(null,entry,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this$__$1,entry);
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.call = (function() {
var G__6524 = null;
var G__6524__2 = (function (self__,item){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item);
});
var G__6524__3 = (function (self__,item,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item,not_found);
});
G__6524 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__6524__2.call(this,self__,item);
case 3:
return G__6524__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__6524.cljs$core$IFn$_invoke$arity$2 = G__6524__2;
G__6524.cljs$core$IFn$_invoke$arity$3 = G__6524__3;
return G__6524;
})()
;

tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args6495){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args6495)));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (item){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (item,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,item,not_found);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
return (cljs.core.truth_(ascending_QMARK_)?cljs.core.seq:cljs.core.rseq).call(null,this$__$1);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
var sets = (cljs.core.truth_(ascending_QMARK_)?cljs.core.subseq.call(null,self__.priority__GT_set_of_items,cljs.core._GT__EQ_,k):cljs.core.rsubseq.call(null,self__.priority__GT_set_of_items,cljs.core._LT__EQ_,k));
return cljs.core.seq.call(null,(function (){var iter__4921__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__6512(s__6513){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__6513__$1 = s__6513;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6513__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var vec__6519 = cljs.core.first.call(null,xs__4624__auto__);
var priority = cljs.core.nth.call(null,vec__6519,(0),null);
var item_set = cljs.core.nth.call(null,vec__6519,(1),null);
var iterys__4917__auto__ = ((function (s__6513__$1,vec__6519,priority,item_set,xs__4624__auto__,temp__4126__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__6512_$_iter__6514(s__6515){
return (new cljs.core.LazySeq(null,((function (s__6513__$1,vec__6519,priority,item_set,xs__4624__auto__,temp__4126__auto__,sets,this$__$1){
return (function (){
var s__6515__$1 = s__6515;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__6515__$1);
if(temp__4126__auto____$1){
var s__6515__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6515__$2)){
var c__4919__auto__ = cljs.core.chunk_first.call(null,s__6515__$2);
var size__4920__auto__ = cljs.core.count.call(null,c__4919__auto__);
var b__6517 = cljs.core.chunk_buffer.call(null,size__4920__auto__);
if((function (){var i__6516 = (0);
while(true){
if((i__6516 < size__4920__auto__)){
var item = cljs.core._nth.call(null,c__4919__auto__,i__6516);
cljs.core.chunk_append.call(null,b__6517,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__6525 = (i__6516 + (1));
i__6516 = G__6525;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6517),tailrecursion$priority_map$iter__6512_$_iter__6514.call(null,cljs.core.chunk_rest.call(null,s__6515__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6517),null);
}
} else {
var item = cljs.core.first.call(null,s__6515__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__6512_$_iter__6514.call(null,cljs.core.rest.call(null,s__6515__$2)));
}
} else {
return null;
}
break;
}
});})(s__6513__$1,vec__6519,priority,item_set,xs__4624__auto__,temp__4126__auto__,sets,this$__$1))
,null,null));
});})(s__6513__$1,vec__6519,priority,item_set,xs__4624__auto__,temp__4126__auto__,sets,this$__$1))
;
var fs__4918__auto__ = cljs.core.seq.call(null,iterys__4917__auto__.call(null,item_set));
if(fs__4918__auto__){
return cljs.core.concat.call(null,fs__4918__auto__,tailrecursion$priority_map$iter__6512.call(null,cljs.core.rest.call(null,s__6513__$1)));
} else {
var G__6526 = cljs.core.rest.call(null,s__6513__$1);
s__6513__$1 = G__6526;
continue;
}
} else {
return null;
}
break;
}
});})(sets,this$__$1))
,null,null));
});})(sets,this$__$1))
;
return iter__4921__auto__.call(null,sets);
})());
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
return cljs.core.val.call(null,entry);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare;
});

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$type = true;

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorStr = "tailrecursion.priority-map/PersistentPriorityMap";

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__4746__auto__,writer__4747__auto__,opt__4748__auto__){
return cljs.core._write.call(null,writer__4747__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
});

tailrecursion.priority_map.__GT_PersistentPriorityMap = (function tailrecursion$priority_map$__GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,__hash){
return (new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map.call(null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null));
tailrecursion.priority_map.pm_empty_by = (function tailrecursion$priority_map$pm_empty_by(comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by.call(null,comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null));
});
tailrecursion.priority_map.read_priority_map = (function tailrecursion$priority_map$read_priority_map(elems){
if(cljs.core.map_QMARK_.call(null,elems)){
return cljs.core.into.call(null,tailrecursion.priority_map.PersistentPriorityMap.EMPTY,elems);
} else {
return cljs.reader.reader_error.call(null,null,"Priority map literal expects a map for its elements.");
}
});
cljs.reader.register_tag_parser_BANG_.call(null,"tailrecursion.priority-map",tailrecursion.priority_map.read_priority_map);
/**
 * keyval => key val
 * Returns a new priority map with supplied mappings.
 */
tailrecursion.priority_map.priority_map = (function tailrecursion$priority_map$priority_map(){
var argseq__5207__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(argseq__5207__auto__);
});

tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;
while(true){
if(in$){
var G__6528 = cljs.core.nnext.call(null,in$);
var G__6529 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__6528;
out = G__6529;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0);

tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq6527){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6527));
});
/**
 * keyval => key val
 * Returns a new priority map with supplied
 * mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(){
var argseq__5207__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5207__auto__);
});

tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic = (function (comparator,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_by.call(null,comparator);
while(true){
if(in$){
var G__6532 = cljs.core.nnext.call(null,in$);
var G__6533 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__6532;
out = G__6533;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq6530){
var G__6531 = cljs.core.first.call(null,seq6530);
var seq6530__$1 = cljs.core.next.call(null,seq6530);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic(G__6531,seq6530__$1);
});

//# sourceMappingURL=priority_map.js.map