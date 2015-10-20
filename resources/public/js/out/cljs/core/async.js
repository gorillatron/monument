// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async27442 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27442 = (function (fn_handler,f,meta27443){
this.fn_handler = fn_handler;
this.f = f;
this.meta27443 = meta27443;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27444,meta27443__$1){
var self__ = this;
var _27444__$1 = this;
return (new cljs.core.async.t_cljs$core$async27442(self__.fn_handler,self__.f,meta27443__$1));
});

cljs.core.async.t_cljs$core$async27442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27444){
var self__ = this;
var _27444__$1 = this;
return self__.meta27443;
});

cljs.core.async.t_cljs$core$async27442.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27442.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27442.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27442.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta27443","meta27443",-1620913637,null)], null);
});

cljs.core.async.t_cljs$core$async27442.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27442.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27442";

cljs.core.async.t_cljs$core$async27442.cljs$lang$ctorPrWriter = (function (this__23287__auto__,writer__23288__auto__,opt__23289__auto__){
return cljs.core._write.call(null,writer__23288__auto__,"cljs.core.async/t_cljs$core$async27442");
});

cljs.core.async.__GT_t_cljs$core$async27442 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async27442(fn_handler__$1,f__$1,meta27443){
return (new cljs.core.async.t_cljs$core$async27442(fn_handler__$1,f__$1,meta27443));
});

}

return (new cljs.core.async.t_cljs$core$async27442(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27447 = [];
var len__23747__auto___27450 = arguments.length;
var i__23748__auto___27451 = (0);
while(true){
if((i__23748__auto___27451 < len__23747__auto___27450)){
args27447.push((arguments[i__23748__auto___27451]));

var G__27452 = (i__23748__auto___27451 + (1));
i__23748__auto___27451 = G__27452;
continue;
} else {
}
break;
}

var G__27449 = args27447.length;
switch (G__27449) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27447.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27454 = [];
var len__23747__auto___27457 = arguments.length;
var i__23748__auto___27458 = (0);
while(true){
if((i__23748__auto___27458 < len__23747__auto___27457)){
args27454.push((arguments[i__23748__auto___27458]));

var G__27459 = (i__23748__auto___27458 + (1));
i__23748__auto___27458 = G__27459;
continue;
} else {
}
break;
}

var G__27456 = args27454.length;
switch (G__27456) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27454.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27461 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27461);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27461,ret){
return (function (){
return fn1.call(null,val_27461);
});})(val_27461,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27462 = [];
var len__23747__auto___27465 = arguments.length;
var i__23748__auto___27466 = (0);
while(true){
if((i__23748__auto___27466 < len__23747__auto___27465)){
args27462.push((arguments[i__23748__auto___27466]));

var G__27467 = (i__23748__auto___27466 + (1));
i__23748__auto___27466 = G__27467;
continue;
} else {
}
break;
}

var G__27464 = args27462.length;
switch (G__27464) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27462.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__23592__auto___27469 = n;
var x_27470 = (0);
while(true){
if((x_27470 < n__23592__auto___27469)){
(a[x_27470] = (0));

var G__27471 = (x_27470 + (1));
x_27470 = G__27471;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27472 = (i + (1));
i = G__27472;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27476 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27476 = (function (alt_flag,flag,meta27477){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27477 = meta27477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27478,meta27477__$1){
var self__ = this;
var _27478__$1 = this;
return (new cljs.core.async.t_cljs$core$async27476(self__.alt_flag,self__.flag,meta27477__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27476.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27478){
var self__ = this;
var _27478__$1 = this;
return self__.meta27477;
});})(flag))
;

cljs.core.async.t_cljs$core$async27476.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27476.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27476.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27476.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27477","meta27477",-1464961940,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27476.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27476.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27476";

cljs.core.async.t_cljs$core$async27476.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__23287__auto__,writer__23288__auto__,opt__23289__auto__){
return cljs.core._write.call(null,writer__23288__auto__,"cljs.core.async/t_cljs$core$async27476");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27476 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27476(alt_flag__$1,flag__$1,meta27477){
return (new cljs.core.async.t_cljs$core$async27476(alt_flag__$1,flag__$1,meta27477));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27476(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27482 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27482 = (function (alt_handler,flag,cb,meta27483){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27483 = meta27483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27484,meta27483__$1){
var self__ = this;
var _27484__$1 = this;
return (new cljs.core.async.t_cljs$core$async27482(self__.alt_handler,self__.flag,self__.cb,meta27483__$1));
});

cljs.core.async.t_cljs$core$async27482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27484){
var self__ = this;
var _27484__$1 = this;
return self__.meta27483;
});

cljs.core.async.t_cljs$core$async27482.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27482.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27482.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27482.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27483","meta27483",746770243,null)], null);
});

cljs.core.async.t_cljs$core$async27482.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27482";

cljs.core.async.t_cljs$core$async27482.cljs$lang$ctorPrWriter = (function (this__23287__auto__,writer__23288__auto__,opt__23289__auto__){
return cljs.core._write.call(null,writer__23288__auto__,"cljs.core.async/t_cljs$core$async27482");
});

cljs.core.async.__GT_t_cljs$core$async27482 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27482(alt_handler__$1,flag__$1,cb__$1,meta27483){
return (new cljs.core.async.t_cljs$core$async27482(alt_handler__$1,flag__$1,cb__$1,meta27483));
});

}

return (new cljs.core.async.t_cljs$core$async27482(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27485_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27485_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27486_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27486_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__22689__auto__ = wport;
if(cljs.core.truth_(or__22689__auto__)){
return or__22689__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27487 = (i + (1));
i = G__27487;
continue;
}
} else {
return null;
}
break;
}
})();
var or__22689__auto__ = ret;
if(cljs.core.truth_(or__22689__auto__)){
return or__22689__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__22677__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__22677__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__22677__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__23754__auto__ = [];
var len__23747__auto___27493 = arguments.length;
var i__23748__auto___27494 = (0);
while(true){
if((i__23748__auto___27494 < len__23747__auto___27493)){
args__23754__auto__.push((arguments[i__23748__auto___27494]));

var G__27495 = (i__23748__auto___27494 + (1));
i__23748__auto___27494 = G__27495;
continue;
} else {
}
break;
}

var argseq__23755__auto__ = ((((1) < args__23754__auto__.length))?(new cljs.core.IndexedSeq(args__23754__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23755__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27490){
var map__27491 = p__27490;
var map__27491__$1 = ((((!((map__27491 == null)))?((((map__27491.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27491.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27491):map__27491);
var opts = map__27491__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27488){
var G__27489 = cljs.core.first.call(null,seq27488);
var seq27488__$1 = cljs.core.next.call(null,seq27488);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27489,seq27488__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27496 = [];
var len__23747__auto___27546 = arguments.length;
var i__23748__auto___27547 = (0);
while(true){
if((i__23748__auto___27547 < len__23747__auto___27546)){
args27496.push((arguments[i__23748__auto___27547]));

var G__27548 = (i__23748__auto___27547 + (1));
i__23748__auto___27547 = G__27548;
continue;
} else {
}
break;
}

var G__27498 = args27496.length;
switch (G__27498) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27496.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25166__auto___27550 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25166__auto___27550){
return (function (){
var f__25167__auto__ = (function (){var switch__25101__auto__ = ((function (c__25166__auto___27550){
return (function (state_27522){
var state_val_27523 = (state_27522[(1)]);
if((state_val_27523 === (7))){
var inst_27518 = (state_27522[(2)]);
var state_27522__$1 = state_27522;
var statearr_27524_27551 = state_27522__$1;
(statearr_27524_27551[(2)] = inst_27518);

(statearr_27524_27551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27523 === (1))){
var state_27522__$1 = state_27522;
var statearr_27525_27552 = state_27522__$1;
(statearr_27525_27552[(2)] = null);

(statearr_27525_27552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27523 === (4))){
var inst_27501 = (state_27522[(7)]);
var inst_27501__$1 = (state_27522[(2)]);
var inst_27502 = (inst_27501__$1 == null);
var state_27522__$1 = (function (){var statearr_27526 = state_27522;
(statearr_27526[(7)] = inst_27501__$1);

return statearr_27526;
})();
if(cljs.core.truth_(inst_27502)){
var statearr_27527_27553 = state_27522__$1;
(statearr_27527_27553[(1)] = (5));

} else {
var statearr_27528_27554 = state_27522__$1;
(statearr_27528_27554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27523 === (13))){
var state_27522__$1 = state_27522;
var statearr_27529_27555 = state_27522__$1;
(statearr_27529_27555[(2)] = null);

(statearr_27529_27555[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27523 === (6))){
var inst_27501 = (state_27522[(7)]);
var state_27522__$1 = state_27522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27522__$1,(11),to,inst_27501);
} else {
if((state_val_27523 === (3))){
var inst_27520 = (state_27522[(2)]);
var state_27522__$1 = state_27522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27522__$1,inst_27520);
} else {
if((state_val_27523 === (12))){
var state_27522__$1 = state_27522;
var statearr_27530_27556 = state_27522__$1;
(statearr_27530_27556[(2)] = null);

(statearr_27530_27556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27523 === (2))){
var state_27522__$1 = state_27522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27522__$1,(4),from);
} else {
if((state_val_27523 === (11))){
var inst_27511 = (state_27522[(2)]);
var state_27522__$1 = state_27522;
if(cljs.core.truth_(inst_27511)){
var statearr_27531_27557 = state_27522__$1;
(statearr_27531_27557[(1)] = (12));

} else {
var statearr_27532_27558 = state_27522__$1;
(statearr_27532_27558[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27523 === (9))){
var state_27522__$1 = state_27522;
var statearr_27533_27559 = state_27522__$1;
(statearr_27533_27559[(2)] = null);

(statearr_27533_27559[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27523 === (5))){
var state_27522__$1 = state_27522;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27534_27560 = state_27522__$1;
(statearr_27534_27560[(1)] = (8));

} else {
var statearr_27535_27561 = state_27522__$1;
(statearr_27535_27561[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27523 === (14))){
var inst_27516 = (state_27522[(2)]);
var state_27522__$1 = state_27522;
var statearr_27536_27562 = state_27522__$1;
(statearr_27536_27562[(2)] = inst_27516);

(statearr_27536_27562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27523 === (10))){
var inst_27508 = (state_27522[(2)]);
var state_27522__$1 = state_27522;
var statearr_27537_27563 = state_27522__$1;
(statearr_27537_27563[(2)] = inst_27508);

(statearr_27537_27563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27523 === (8))){
var inst_27505 = cljs.core.async.close_BANG_.call(null,to);
var state_27522__$1 = state_27522;
var statearr_27538_27564 = state_27522__$1;
(statearr_27538_27564[(2)] = inst_27505);

(statearr_27538_27564[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25166__auto___27550))
;
return ((function (switch__25101__auto__,c__25166__auto___27550){
return (function() {
var cljs$core$async$state_machine__25102__auto__ = null;
var cljs$core$async$state_machine__25102__auto____0 = (function (){
var statearr_27542 = [null,null,null,null,null,null,null,null];
(statearr_27542[(0)] = cljs$core$async$state_machine__25102__auto__);

(statearr_27542[(1)] = (1));

return statearr_27542;
});
var cljs$core$async$state_machine__25102__auto____1 = (function (state_27522){
while(true){
var ret_value__25103__auto__ = (function (){try{while(true){
var result__25104__auto__ = switch__25101__auto__.call(null,state_27522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25104__auto__;
}
break;
}
}catch (e27543){if((e27543 instanceof Object)){
var ex__25105__auto__ = e27543;
var statearr_27544_27565 = state_27522;
(statearr_27544_27565[(5)] = ex__25105__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27566 = state_27522;
state_27522 = G__27566;
continue;
} else {
return ret_value__25103__auto__;
}
break;
}
});
cljs$core$async$state_machine__25102__auto__ = function(state_27522){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25102__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25102__auto____1.call(this,state_27522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25102__auto____0;
cljs$core$async$state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25102__auto____1;
return cljs$core$async$state_machine__25102__auto__;
})()
;})(switch__25101__auto__,c__25166__auto___27550))
})();
var state__25168__auto__ = (function (){var statearr_27545 = f__25167__auto__.call(null);
(statearr_27545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25166__auto___27550);

return statearr_27545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25168__auto__);
});})(c__25166__auto___27550))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27750){
var vec__27751 = p__27750;
var v = cljs.core.nth.call(null,vec__27751,(0),null);
var p = cljs.core.nth.call(null,vec__27751,(1),null);
var job = vec__27751;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25166__auto___27933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25166__auto___27933,res,vec__27751,v,p,job,jobs,results){
return (function (){
var f__25167__auto__ = (function (){var switch__25101__auto__ = ((function (c__25166__auto___27933,res,vec__27751,v,p,job,jobs,results){
return (function (state_27756){
var state_val_27757 = (state_27756[(1)]);
if((state_val_27757 === (1))){
var state_27756__$1 = state_27756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27756__$1,(2),res,v);
} else {
if((state_val_27757 === (2))){
var inst_27753 = (state_27756[(2)]);
var inst_27754 = cljs.core.async.close_BANG_.call(null,res);
var state_27756__$1 = (function (){var statearr_27758 = state_27756;
(statearr_27758[(7)] = inst_27753);

return statearr_27758;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27756__$1,inst_27754);
} else {
return null;
}
}
});})(c__25166__auto___27933,res,vec__27751,v,p,job,jobs,results))
;
return ((function (switch__25101__auto__,c__25166__auto___27933,res,vec__27751,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25102__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25102__auto____0 = (function (){
var statearr_27762 = [null,null,null,null,null,null,null,null];
(statearr_27762[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25102__auto__);

(statearr_27762[(1)] = (1));

return statearr_27762;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25102__auto____1 = (function (state_27756){
while(true){
var ret_value__25103__auto__ = (function (){try{while(true){
var result__25104__auto__ = switch__25101__auto__.call(null,state_27756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25104__auto__;
}
break;
}
}catch (e27763){if((e27763 instanceof Object)){
var ex__25105__auto__ = e27763;
var statearr_27764_27934 = state_27756;
(statearr_27764_27934[(5)] = ex__25105__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27935 = state_27756;
state_27756 = G__27935;
continue;
} else {
return ret_value__25103__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25102__auto__ = function(state_27756){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25102__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25102__auto____1.call(this,state_27756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25102__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25102__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25102__auto__;
})()
;})(switch__25101__auto__,c__25166__auto___27933,res,vec__27751,v,p,job,jobs,results))
})();
var state__25168__auto__ = (function (){var statearr_27765 = f__25167__auto__.call(null);
(statearr_27765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25166__auto___27933);

return statearr_27765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25168__auto__);
});})(c__25166__auto___27933,res,vec__27751,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27766){
var vec__27767 = p__27766;
var v = cljs.core.nth.call(null,vec__27767,(0),null);
var p = cljs.core.nth.call(null,vec__27767,(1),null);
var job = vec__27767;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__23592__auto___27936 = n;
var __27937 = (0);
while(true){
if((__27937 < n__23592__auto___27936)){
var G__27768_27938 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27768_27938) {
case "compute":
var c__25166__auto___27940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27937,c__25166__auto___27940,G__27768_27938,n__23592__auto___27936,jobs,results,process,async){
return (function (){
var f__25167__auto__ = (function (){var switch__25101__auto__ = ((function (__27937,c__25166__auto___27940,G__27768_27938,n__23592__auto___27936,jobs,results,process,async){
return (function (state_27781){
var state_val_27782 = (state_27781[(1)]);
if((state_val_27782 === (1))){
var state_27781__$1 = state_27781;
var statearr_27783_27941 = state_27781__$1;
(statearr_27783_27941[(2)] = null);

(statearr_27783_27941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27782 === (2))){
var state_27781__$1 = state_27781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27781__$1,(4),jobs);
} else {
if((state_val_27782 === (3))){
var inst_27779 = (state_27781[(2)]);
var state_27781__$1 = state_27781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27781__$1,inst_27779);
} else {
if((state_val_27782 === (4))){
var inst_27771 = (state_27781[(2)]);
var inst_27772 = process.call(null,inst_27771);
var state_27781__$1 = state_27781;
if(cljs.core.truth_(inst_27772)){
var statearr_27784_27942 = state_27781__$1;
(statearr_27784_27942[(1)] = (5));

} else {
var statearr_27785_27943 = state_27781__$1;
(statearr_27785_27943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27782 === (5))){
var state_27781__$1 = state_27781;
var statearr_27786_27944 = state_27781__$1;
(statearr_27786_27944[(2)] = null);

(statearr_27786_27944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27782 === (6))){
var state_27781__$1 = state_27781;
var statearr_27787_27945 = state_27781__$1;
(statearr_27787_27945[(2)] = null);

(statearr_27787_27945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27782 === (7))){
var inst_27777 = (state_27781[(2)]);
var state_27781__$1 = state_27781;
var statearr_27788_27946 = state_27781__$1;
(statearr_27788_27946[(2)] = inst_27777);

(statearr_27788_27946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27937,c__25166__auto___27940,G__27768_27938,n__23592__auto___27936,jobs,results,process,async))
;
return ((function (__27937,switch__25101__auto__,c__25166__auto___27940,G__27768_27938,n__23592__auto___27936,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25102__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25102__auto____0 = (function (){
var statearr_27792 = [null,null,null,null,null,null,null];
(statearr_27792[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25102__auto__);

(statearr_27792[(1)] = (1));

return statearr_27792;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25102__auto____1 = (function (state_27781){
while(true){
var ret_value__25103__auto__ = (function (){try{while(true){
var result__25104__auto__ = switch__25101__auto__.call(null,state_27781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25104__auto__;
}
break;
}
}catch (e27793){if((e27793 instanceof Object)){
var ex__25105__auto__ = e27793;
var statearr_27794_27947 = state_27781;
(statearr_27794_27947[(5)] = ex__25105__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27948 = state_27781;
state_27781 = G__27948;
continue;
} else {
return ret_value__25103__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25102__auto__ = function(state_27781){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25102__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25102__auto____1.call(this,state_27781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25102__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25102__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25102__auto__;
})()
;})(__27937,switch__25101__auto__,c__25166__auto___27940,G__27768_27938,n__23592__auto___27936,jobs,results,process,async))
})();
var state__25168__auto__ = (function (){var statearr_27795 = f__25167__auto__.call(null);
(statearr_27795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25166__auto___27940);

return statearr_27795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25168__auto__);
});})(__27937,c__25166__auto___27940,G__27768_27938,n__23592__auto___27936,jobs,results,process,async))
);


break;
case "async":
var c__25166__auto___27949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27937,c__25166__auto___27949,G__27768_27938,n__23592__auto___27936,jobs,results,process,async){
return (function (){
var f__25167__auto__ = (function (){var switch__25101__auto__ = ((function (__27937,c__25166__auto___27949,G__27768_27938,n__23592__auto___27936,jobs,results,process,async){
return (function (state_27808){
var state_val_27809 = (state_27808[(1)]);
if((state_val_27809 === (1))){
var state_27808__$1 = state_27808;
var statearr_27810_27950 = state_27808__$1;
(statearr_27810_27950[(2)] = null);

(statearr_27810_27950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27809 === (2))){
var state_27808__$1 = state_27808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27808__$1,(4),jobs);
} else {
if((state_val_27809 === (3))){
var inst_27806 = (state_27808[(2)]);
var state_27808__$1 = state_27808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27808__$1,inst_27806);
} else {
if((state_val_27809 === (4))){
var inst_27798 = (state_27808[(2)]);
var inst_27799 = async.call(null,inst_27798);
var state_27808__$1 = state_27808;
if(cljs.core.truth_(inst_27799)){
var statearr_27811_27951 = state_27808__$1;
(statearr_27811_27951[(1)] = (5));

} else {
var statearr_27812_27952 = state_27808__$1;
(statearr_27812_27952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27809 === (5))){
var state_27808__$1 = state_27808;
var statearr_27813_27953 = state_27808__$1;
(statearr_27813_27953[(2)] = null);

(statearr_27813_27953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27809 === (6))){
var state_27808__$1 = state_27808;
var statearr_27814_27954 = state_27808__$1;
(statearr_27814_27954[(2)] = null);

(statearr_27814_27954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27809 === (7))){
var inst_27804 = (state_27808[(2)]);
var state_27808__$1 = state_27808;
var statearr_27815_27955 = state_27808__$1;
(statearr_27815_27955[(2)] = inst_27804);

(statearr_27815_27955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27937,c__25166__auto___27949,G__27768_27938,n__23592__auto___27936,jobs,results,process,async))
;
return ((function (__27937,switch__25101__auto__,c__25166__auto___27949,G__27768_27938,n__23592__auto___27936,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25102__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25102__auto____0 = (function (){
var statearr_27819 = [null,null,null,null,null,null,null];
(statearr_27819[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25102__auto__);

(statearr_27819[(1)] = (1));

return statearr_27819;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25102__auto____1 = (function (state_27808){
while(true){
var ret_value__25103__auto__ = (function (){try{while(true){
var result__25104__auto__ = switch__25101__auto__.call(null,state_27808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25104__auto__;
}
break;
}
}catch (e27820){if((e27820 instanceof Object)){
var ex__25105__auto__ = e27820;
var statearr_27821_27956 = state_27808;
(statearr_27821_27956[(5)] = ex__25105__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27957 = state_27808;
state_27808 = G__27957;
continue;
} else {
return ret_value__25103__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25102__auto__ = function(state_27808){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25102__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25102__auto____1.call(this,state_27808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25102__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25102__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25102__auto__;
})()
;})(__27937,switch__25101__auto__,c__25166__auto___27949,G__27768_27938,n__23592__auto___27936,jobs,results,process,async))
})();
var state__25168__auto__ = (function (){var statearr_27822 = f__25167__auto__.call(null);
(statearr_27822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25166__auto___27949);

return statearr_27822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25168__auto__);
});})(__27937,c__25166__auto___27949,G__27768_27938,n__23592__auto___27936,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27958 = (__27937 + (1));
__27937 = G__27958;
continue;
} else {
}
break;
}

var c__25166__auto___27959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25166__auto___27959,jobs,results,process,async){
return (function (){
var f__25167__auto__ = (function (){var switch__25101__auto__ = ((function (c__25166__auto___27959,jobs,results,process,async){
return (function (state_27844){
var state_val_27845 = (state_27844[(1)]);
if((state_val_27845 === (1))){
var state_27844__$1 = state_27844;
var statearr_27846_27960 = state_27844__$1;
(statearr_27846_27960[(2)] = null);

(statearr_27846_27960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (2))){
var state_27844__$1 = state_27844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27844__$1,(4),from);
} else {
if((state_val_27845 === (3))){
var inst_27842 = (state_27844[(2)]);
var state_27844__$1 = state_27844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27844__$1,inst_27842);
} else {
if((state_val_27845 === (4))){
var inst_27825 = (state_27844[(7)]);
var inst_27825__$1 = (state_27844[(2)]);
var inst_27826 = (inst_27825__$1 == null);
var state_27844__$1 = (function (){var statearr_27847 = state_27844;
(statearr_27847[(7)] = inst_27825__$1);

return statearr_27847;
})();
if(cljs.core.truth_(inst_27826)){
var statearr_27848_27961 = state_27844__$1;
(statearr_27848_27961[(1)] = (5));

} else {
var statearr_27849_27962 = state_27844__$1;
(statearr_27849_27962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (5))){
var inst_27828 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27844__$1 = state_27844;
var statearr_27850_27963 = state_27844__$1;
(statearr_27850_27963[(2)] = inst_27828);

(statearr_27850_27963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (6))){
var inst_27825 = (state_27844[(7)]);
var inst_27830 = (state_27844[(8)]);
var inst_27830__$1 = cljs.core.async.chan.call(null,(1));
var inst_27831 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27832 = [inst_27825,inst_27830__$1];
var inst_27833 = (new cljs.core.PersistentVector(null,2,(5),inst_27831,inst_27832,null));
var state_27844__$1 = (function (){var statearr_27851 = state_27844;
(statearr_27851[(8)] = inst_27830__$1);

return statearr_27851;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27844__$1,(8),jobs,inst_27833);
} else {
if((state_val_27845 === (7))){
var inst_27840 = (state_27844[(2)]);
var state_27844__$1 = state_27844;
var statearr_27852_27964 = state_27844__$1;
(statearr_27852_27964[(2)] = inst_27840);

(statearr_27852_27964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (8))){
var inst_27830 = (state_27844[(8)]);
var inst_27835 = (state_27844[(2)]);
var state_27844__$1 = (function (){var statearr_27853 = state_27844;
(statearr_27853[(9)] = inst_27835);

return statearr_27853;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27844__$1,(9),results,inst_27830);
} else {
if((state_val_27845 === (9))){
var inst_27837 = (state_27844[(2)]);
var state_27844__$1 = (function (){var statearr_27854 = state_27844;
(statearr_27854[(10)] = inst_27837);

return statearr_27854;
})();
var statearr_27855_27965 = state_27844__$1;
(statearr_27855_27965[(2)] = null);

(statearr_27855_27965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__25166__auto___27959,jobs,results,process,async))
;
return ((function (switch__25101__auto__,c__25166__auto___27959,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25102__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25102__auto____0 = (function (){
var statearr_27859 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27859[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25102__auto__);

(statearr_27859[(1)] = (1));

return statearr_27859;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25102__auto____1 = (function (state_27844){
while(true){
var ret_value__25103__auto__ = (function (){try{while(true){
var result__25104__auto__ = switch__25101__auto__.call(null,state_27844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25104__auto__;
}
break;
}
}catch (e27860){if((e27860 instanceof Object)){
var ex__25105__auto__ = e27860;
var statearr_27861_27966 = state_27844;
(statearr_27861_27966[(5)] = ex__25105__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27967 = state_27844;
state_27844 = G__27967;
continue;
} else {
return ret_value__25103__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25102__auto__ = function(state_27844){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25102__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25102__auto____1.call(this,state_27844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25102__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25102__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25102__auto__;
})()
;})(switch__25101__auto__,c__25166__auto___27959,jobs,results,process,async))
})();
var state__25168__auto__ = (function (){var statearr_27862 = f__25167__auto__.call(null);
(statearr_27862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25166__auto___27959);

return statearr_27862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25168__auto__);
});})(c__25166__auto___27959,jobs,results,process,async))
);


var c__25166__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25166__auto__,jobs,results,process,async){
return (function (){
var f__25167__auto__ = (function (){var switch__25101__auto__ = ((function (c__25166__auto__,jobs,results,process,async){
return (function (state_27900){
var state_val_27901 = (state_27900[(1)]);
if((state_val_27901 === (7))){
var inst_27896 = (state_27900[(2)]);
var state_27900__$1 = state_27900;
var statearr_27902_27968 = state_27900__$1;
(statearr_27902_27968[(2)] = inst_27896);

(statearr_27902_27968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (20))){
var state_27900__$1 = state_27900;
var statearr_27903_27969 = state_27900__$1;
(statearr_27903_27969[(2)] = null);

(statearr_27903_27969[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (1))){
var state_27900__$1 = state_27900;
var statearr_27904_27970 = state_27900__$1;
(statearr_27904_27970[(2)] = null);

(statearr_27904_27970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (4))){
var inst_27865 = (state_27900[(7)]);
var inst_27865__$1 = (state_27900[(2)]);
var inst_27866 = (inst_27865__$1 == null);
var state_27900__$1 = (function (){var statearr_27905 = state_27900;
(statearr_27905[(7)] = inst_27865__$1);

return statearr_27905;
})();
if(cljs.core.truth_(inst_27866)){
var statearr_27906_27971 = state_27900__$1;
(statearr_27906_27971[(1)] = (5));

} else {
var statearr_27907_27972 = state_27900__$1;
(statearr_27907_27972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (15))){
var inst_27878 = (state_27900[(8)]);
var state_27900__$1 = state_27900;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27900__$1,(18),to,inst_27878);
} else {
if((state_val_27901 === (21))){
var inst_27891 = (state_27900[(2)]);
var state_27900__$1 = state_27900;
var statearr_27908_27973 = state_27900__$1;
(statearr_27908_27973[(2)] = inst_27891);

(statearr_27908_27973[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (13))){
var inst_27893 = (state_27900[(2)]);
var state_27900__$1 = (function (){var statearr_27909 = state_27900;
(statearr_27909[(9)] = inst_27893);

return statearr_27909;
})();
var statearr_27910_27974 = state_27900__$1;
(statearr_27910_27974[(2)] = null);

(statearr_27910_27974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (6))){
var inst_27865 = (state_27900[(7)]);
var state_27900__$1 = state_27900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27900__$1,(11),inst_27865);
} else {
if((state_val_27901 === (17))){
var inst_27886 = (state_27900[(2)]);
var state_27900__$1 = state_27900;
if(cljs.core.truth_(inst_27886)){
var statearr_27911_27975 = state_27900__$1;
(statearr_27911_27975[(1)] = (19));

} else {
var statearr_27912_27976 = state_27900__$1;
(statearr_27912_27976[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (3))){
var inst_27898 = (state_27900[(2)]);
var state_27900__$1 = state_27900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27900__$1,inst_27898);
} else {
if((state_val_27901 === (12))){
var inst_27875 = (state_27900[(10)]);
var state_27900__$1 = state_27900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27900__$1,(14),inst_27875);
} else {
if((state_val_27901 === (2))){
var state_27900__$1 = state_27900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27900__$1,(4),results);
} else {
if((state_val_27901 === (19))){
var state_27900__$1 = state_27900;
var statearr_27913_27977 = state_27900__$1;
(statearr_27913_27977[(2)] = null);

(statearr_27913_27977[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (11))){
var inst_27875 = (state_27900[(2)]);
var state_27900__$1 = (function (){var statearr_27914 = state_27900;
(statearr_27914[(10)] = inst_27875);

return statearr_27914;
})();
var statearr_27915_27978 = state_27900__$1;
(statearr_27915_27978[(2)] = null);

(statearr_27915_27978[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (9))){
var state_27900__$1 = state_27900;
var statearr_27916_27979 = state_27900__$1;
(statearr_27916_27979[(2)] = null);

(statearr_27916_27979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (5))){
var state_27900__$1 = state_27900;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27917_27980 = state_27900__$1;
(statearr_27917_27980[(1)] = (8));

} else {
var statearr_27918_27981 = state_27900__$1;
(statearr_27918_27981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (14))){
var inst_27880 = (state_27900[(11)]);
var inst_27878 = (state_27900[(8)]);
var inst_27878__$1 = (state_27900[(2)]);
var inst_27879 = (inst_27878__$1 == null);
var inst_27880__$1 = cljs.core.not.call(null,inst_27879);
var state_27900__$1 = (function (){var statearr_27919 = state_27900;
(statearr_27919[(11)] = inst_27880__$1);

(statearr_27919[(8)] = inst_27878__$1);

return statearr_27919;
})();
if(inst_27880__$1){
var statearr_27920_27982 = state_27900__$1;
(statearr_27920_27982[(1)] = (15));

} else {
var statearr_27921_27983 = state_27900__$1;
(statearr_27921_27983[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (16))){
var inst_27880 = (state_27900[(11)]);
var state_27900__$1 = state_27900;
var statearr_27922_27984 = state_27900__$1;
(statearr_27922_27984[(2)] = inst_27880);

(statearr_27922_27984[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (10))){
var inst_27872 = (state_27900[(2)]);
var state_27900__$1 = state_27900;
var statearr_27923_27985 = state_27900__$1;
(statearr_27923_27985[(2)] = inst_27872);

(statearr_27923_27985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (18))){
var inst_27883 = (state_27900[(2)]);
var state_27900__$1 = state_27900;
var statearr_27924_27986 = state_27900__$1;
(statearr_27924_27986[(2)] = inst_27883);

(statearr_27924_27986[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (8))){
var inst_27869 = cljs.core.async.close_BANG_.call(null,to);
var state_27900__$1 = state_27900;
var statearr_27925_27987 = state_27900__$1;
(statearr_27925_27987[(2)] = inst_27869);

(statearr_27925_27987[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25166__auto__,jobs,results,process,async))
;
return ((function (switch__25101__auto__,c__25166__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25102__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25102__auto____0 = (function (){
var statearr_27929 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27929[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25102__auto__);

(statearr_27929[(1)] = (1));

return statearr_27929;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25102__auto____1 = (function (state_27900){
while(true){
var ret_value__25103__auto__ = (function (){try{while(true){
var result__25104__auto__ = switch__25101__auto__.call(null,state_27900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25104__auto__;
}
break;
}
}catch (e27930){if((e27930 instanceof Object)){
var ex__25105__auto__ = e27930;
var statearr_27931_27988 = state_27900;
(statearr_27931_27988[(5)] = ex__25105__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27989 = state_27900;
state_27900 = G__27989;
continue;
} else {
return ret_value__25103__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25102__auto__ = function(state_27900){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25102__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25102__auto____1.call(this,state_27900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25102__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25102__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25102__auto__;
})()
;})(switch__25101__auto__,c__25166__auto__,jobs,results,process,async))
})();
var state__25168__auto__ = (function (){var statearr_27932 = f__25167__auto__.call(null);
(statearr_27932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25166__auto__);

return statearr_27932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25168__auto__);
});})(c__25166__auto__,jobs,results,process,async))
);

return c__25166__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args27990 = [];
var len__23747__auto___27993 = arguments.length;
var i__23748__auto___27994 = (0);
while(true){
if((i__23748__auto___27994 < len__23747__auto___27993)){
args27990.push((arguments[i__23748__auto___27994]));

var G__27995 = (i__23748__auto___27994 + (1));
i__23748__auto___27994 = G__27995;
continue;
} else {
}
break;
}

var G__27992 = args27990.length;
switch (G__27992) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27990.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args27997 = [];
var len__23747__auto___28000 = arguments.length;
var i__23748__auto___28001 = (0);
while(true){
if((i__23748__auto___28001 < len__23747__auto___28000)){
args27997.push((arguments[i__23748__auto___28001]));

var G__28002 = (i__23748__auto___28001 + (1));
i__23748__auto___28001 = G__28002;
continue;
} else {
}
break;
}

var G__27999 = args27997.length;
switch (G__27999) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27997.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args28004 = [];
var len__23747__auto___28057 = arguments.length;
var i__23748__auto___28058 = (0);
while(true){
if((i__23748__auto___28058 < len__23747__auto___28057)){
args28004.push((arguments[i__23748__auto___28058]));

var G__28059 = (i__23748__auto___28058 + (1));
i__23748__auto___28058 = G__28059;
continue;
} else {
}
break;
}

var G__28006 = args28004.length;
switch (G__28006) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28004.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__25166__auto___28061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25166__auto___28061,tc,fc){
return (function (){
var f__25167__auto__ = (function (){var switch__25101__auto__ = ((function (c__25166__auto___28061,tc,fc){
return (function (state_28032){
var state_val_28033 = (state_28032[(1)]);
if((state_val_28033 === (7))){
var inst_28028 = (state_28032[(2)]);
var state_28032__$1 = state_28032;
var statearr_28034_28062 = state_28032__$1;
(statearr_28034_28062[(2)] = inst_28028);

(statearr_28034_28062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28033 === (1))){
var state_28032__$1 = state_28032;
var statearr_28035_28063 = state_28032__$1;
(statearr_28035_28063[(2)] = null);

(statearr_28035_28063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28033 === (4))){
var inst_28009 = (state_28032[(7)]);
var inst_28009__$1 = (state_28032[(2)]);
var inst_28010 = (inst_28009__$1 == null);
var state_28032__$1 = (function (){var statearr_28036 = state_28032;
(statearr_28036[(7)] = inst_28009__$1);

return statearr_28036;
})();
if(cljs.core.truth_(inst_28010)){
var statearr_28037_28064 = state_28032__$1;
(statearr_28037_28064[(1)] = (5));

} else {
var statearr_28038_28065 = state_28032__$1;
(statearr_28038_28065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28033 === (13))){
var state_28032__$1 = state_28032;
var statearr_28039_28066 = state_28032__$1;
(statearr_28039_28066[(2)] = null);

(statearr_28039_28066[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28033 === (6))){
var inst_28009 = (state_28032[(7)]);
var inst_28015 = p.call(null,inst_28009);
var state_28032__$1 = state_28032;
if(cljs.core.truth_(inst_28015)){
var statearr_28040_28067 = state_28032__$1;
(statearr_28040_28067[(1)] = (9));

} else {
var statearr_28041_28068 = state_28032__$1;
(statearr_28041_28068[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28033 === (3))){
var inst_28030 = (state_28032[(2)]);
var state_28032__$1 = state_28032;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28032__$1,inst_28030);
} else {
if((state_val_28033 === (12))){
var state_28032__$1 = state_28032;
var statearr_28042_28069 = state_28032__$1;
(statearr_28042_28069[(2)] = null);

(statearr_28042_28069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28033 === (2))){
var state_28032__$1 = state_28032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28032__$1,(4),ch);
} else {
if((state_val_28033 === (11))){
var inst_28009 = (state_28032[(7)]);
var inst_28019 = (state_28032[(2)]);
var state_28032__$1 = state_28032;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28032__$1,(8),inst_28019,inst_28009);
} else {
if((state_val_28033 === (9))){
var state_28032__$1 = state_28032;
var statearr_28043_28070 = state_28032__$1;
(statearr_28043_28070[(2)] = tc);

(statearr_28043_28070[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28033 === (5))){
var inst_28012 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28013 = cljs.core.async.close_BANG_.call(null,fc);
var state_28032__$1 = (function (){var statearr_28044 = state_28032;
(statearr_28044[(8)] = inst_28012);

return statearr_28044;
})();
var statearr_28045_28071 = state_28032__$1;
(statearr_28045_28071[(2)] = inst_28013);

(statearr_28045_28071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28033 === (14))){
var inst_28026 = (state_28032[(2)]);
var state_28032__$1 = state_28032;
var statearr_28046_28072 = state_28032__$1;
(statearr_28046_28072[(2)] = inst_28026);

(statearr_28046_28072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28033 === (10))){
var state_28032__$1 = state_28032;
var statearr_28047_28073 = state_28032__$1;
(statearr_28047_28073[(2)] = fc);

(statearr_28047_28073[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28033 === (8))){
var inst_28021 = (state_28032[(2)]);
var state_28032__$1 = state_28032;
if(cljs.core.truth_(inst_28021)){
var statearr_28048_28074 = state_28032__$1;
(statearr_28048_28074[(1)] = (12));

} else {
var statearr_28049_28075 = state_28032__$1;
(statearr_28049_28075[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25166__auto___28061,tc,fc))
;
return ((function (switch__25101__auto__,c__25166__auto___28061,tc,fc){
return (function() {
var cljs$core$async$state_machine__25102__auto__ = null;
var cljs$core$async$state_machine__25102__auto____0 = (function (){
var statearr_28053 = [null,null,null,null,null,null,null,null,null];
(statearr_28053[(0)] = cljs$core$async$state_machine__25102__auto__);

(statearr_28053[(1)] = (1));

return statearr_28053;
});
var cljs$core$async$state_machine__25102__auto____1 = (function (state_28032){
while(true){
var ret_value__25103__auto__ = (function (){try{while(true){
var result__25104__auto__ = switch__25101__auto__.call(null,state_28032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25104__auto__;
}
break;
}
}catch (e28054){if((e28054 instanceof Object)){
var ex__25105__auto__ = e28054;
var statearr_28055_28076 = state_28032;
(statearr_28055_28076[(5)] = ex__25105__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28077 = state_28032;
state_28032 = G__28077;
continue;
} else {
return ret_value__25103__auto__;
}
break;
}
});
cljs$core$async$state_machine__25102__auto__ = function(state_28032){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25102__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25102__auto____1.call(this,state_28032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25102__auto____0;
cljs$core$async$state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25102__auto____1;
return cljs$core$async$state_machine__25102__auto__;
})()
;})(switch__25101__auto__,c__25166__auto___28061,tc,fc))
})();
var state__25168__auto__ = (function (){var statearr_28056 = f__25167__auto__.call(null);
(statearr_28056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25166__auto___28061);

return statearr_28056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25168__auto__);
});})(c__25166__auto___28061,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__25166__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25166__auto__){
return (function (){
var f__25167__auto__ = (function (){var switch__25101__auto__ = ((function (c__25166__auto__){
return (function (state_28124){
var state_val_28125 = (state_28124[(1)]);
if((state_val_28125 === (1))){
var inst_28110 = init;
var state_28124__$1 = (function (){var statearr_28126 = state_28124;
(statearr_28126[(7)] = inst_28110);

return statearr_28126;
})();
var statearr_28127_28142 = state_28124__$1;
(statearr_28127_28142[(2)] = null);

(statearr_28127_28142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (2))){
var state_28124__$1 = state_28124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28124__$1,(4),ch);
} else {
if((state_val_28125 === (3))){
var inst_28122 = (state_28124[(2)]);
var state_28124__$1 = state_28124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28124__$1,inst_28122);
} else {
if((state_val_28125 === (4))){
var inst_28113 = (state_28124[(8)]);
var inst_28113__$1 = (state_28124[(2)]);
var inst_28114 = (inst_28113__$1 == null);
var state_28124__$1 = (function (){var statearr_28128 = state_28124;
(statearr_28128[(8)] = inst_28113__$1);

return statearr_28128;
})();
if(cljs.core.truth_(inst_28114)){
var statearr_28129_28143 = state_28124__$1;
(statearr_28129_28143[(1)] = (5));

} else {
var statearr_28130_28144 = state_28124__$1;
(statearr_28130_28144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (5))){
var inst_28110 = (state_28124[(7)]);
var state_28124__$1 = state_28124;
var statearr_28131_28145 = state_28124__$1;
(statearr_28131_28145[(2)] = inst_28110);

(statearr_28131_28145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (6))){
var inst_28110 = (state_28124[(7)]);
var inst_28113 = (state_28124[(8)]);
var inst_28117 = f.call(null,inst_28110,inst_28113);
var inst_28110__$1 = inst_28117;
var state_28124__$1 = (function (){var statearr_28132 = state_28124;
(statearr_28132[(7)] = inst_28110__$1);

return statearr_28132;
})();
var statearr_28133_28146 = state_28124__$1;
(statearr_28133_28146[(2)] = null);

(statearr_28133_28146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (7))){
var inst_28120 = (state_28124[(2)]);
var state_28124__$1 = state_28124;
var statearr_28134_28147 = state_28124__$1;
(statearr_28134_28147[(2)] = inst_28120);

(statearr_28134_28147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__25166__auto__))
;
return ((function (switch__25101__auto__,c__25166__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25102__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25102__auto____0 = (function (){
var statearr_28138 = [null,null,null,null,null,null,null,null,null];
(statearr_28138[(0)] = cljs$core$async$reduce_$_state_machine__25102__auto__);

(statearr_28138[(1)] = (1));

return statearr_28138;
});
var cljs$core$async$reduce_$_state_machine__25102__auto____1 = (function (state_28124){
while(true){
var ret_value__25103__auto__ = (function (){try{while(true){
var result__25104__auto__ = switch__25101__auto__.call(null,state_28124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25104__auto__;
}
break;
}
}catch (e28139){if((e28139 instanceof Object)){
var ex__25105__auto__ = e28139;
var statearr_28140_28148 = state_28124;
(statearr_28140_28148[(5)] = ex__25105__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28149 = state_28124;
state_28124 = G__28149;
continue;
} else {
return ret_value__25103__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25102__auto__ = function(state_28124){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25102__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25102__auto____1.call(this,state_28124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25102__auto____0;
cljs$core$async$reduce_$_state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25102__auto____1;
return cljs$core$async$reduce_$_state_machine__25102__auto__;
})()
;})(switch__25101__auto__,c__25166__auto__))
})();
var state__25168__auto__ = (function (){var statearr_28141 = f__25167__auto__.call(null);
(statearr_28141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25166__auto__);

return statearr_28141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25168__auto__);
});})(c__25166__auto__))
);

return c__25166__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args28150 = [];
var len__23747__auto___28202 = arguments.length;
var i__23748__auto___28203 = (0);
while(true){
if((i__23748__auto___28203 < len__23747__auto___28202)){
args28150.push((arguments[i__23748__auto___28203]));

var G__28204 = (i__23748__auto___28203 + (1));
i__23748__auto___28203 = G__28204;
continue;
} else {
}
break;
}

var G__28152 = args28150.length;
switch (G__28152) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28150.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25166__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25166__auto__){
return (function (){
var f__25167__auto__ = (function (){var switch__25101__auto__ = ((function (c__25166__auto__){
return (function (state_28177){
var state_val_28178 = (state_28177[(1)]);
if((state_val_28178 === (7))){
var inst_28159 = (state_28177[(2)]);
var state_28177__$1 = state_28177;
var statearr_28179_28206 = state_28177__$1;
(statearr_28179_28206[(2)] = inst_28159);

(statearr_28179_28206[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (1))){
var inst_28153 = cljs.core.seq.call(null,coll);
var inst_28154 = inst_28153;
var state_28177__$1 = (function (){var statearr_28180 = state_28177;
(statearr_28180[(7)] = inst_28154);

return statearr_28180;
})();
var statearr_28181_28207 = state_28177__$1;
(statearr_28181_28207[(2)] = null);

(statearr_28181_28207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (4))){
var inst_28154 = (state_28177[(7)]);
var inst_28157 = cljs.core.first.call(null,inst_28154);
var state_28177__$1 = state_28177;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28177__$1,(7),ch,inst_28157);
} else {
if((state_val_28178 === (13))){
var inst_28171 = (state_28177[(2)]);
var state_28177__$1 = state_28177;
var statearr_28182_28208 = state_28177__$1;
(statearr_28182_28208[(2)] = inst_28171);

(statearr_28182_28208[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (6))){
var inst_28162 = (state_28177[(2)]);
var state_28177__$1 = state_28177;
if(cljs.core.truth_(inst_28162)){
var statearr_28183_28209 = state_28177__$1;
(statearr_28183_28209[(1)] = (8));

} else {
var statearr_28184_28210 = state_28177__$1;
(statearr_28184_28210[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (3))){
var inst_28175 = (state_28177[(2)]);
var state_28177__$1 = state_28177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28177__$1,inst_28175);
} else {
if((state_val_28178 === (12))){
var state_28177__$1 = state_28177;
var statearr_28185_28211 = state_28177__$1;
(statearr_28185_28211[(2)] = null);

(statearr_28185_28211[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (2))){
var inst_28154 = (state_28177[(7)]);
var state_28177__$1 = state_28177;
if(cljs.core.truth_(inst_28154)){
var statearr_28186_28212 = state_28177__$1;
(statearr_28186_28212[(1)] = (4));

} else {
var statearr_28187_28213 = state_28177__$1;
(statearr_28187_28213[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (11))){
var inst_28168 = cljs.core.async.close_BANG_.call(null,ch);
var state_28177__$1 = state_28177;
var statearr_28188_28214 = state_28177__$1;
(statearr_28188_28214[(2)] = inst_28168);

(statearr_28188_28214[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (9))){
var state_28177__$1 = state_28177;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28189_28215 = state_28177__$1;
(statearr_28189_28215[(1)] = (11));

} else {
var statearr_28190_28216 = state_28177__$1;
(statearr_28190_28216[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (5))){
var inst_28154 = (state_28177[(7)]);
var state_28177__$1 = state_28177;
var statearr_28191_28217 = state_28177__$1;
(statearr_28191_28217[(2)] = inst_28154);

(statearr_28191_28217[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (10))){
var inst_28173 = (state_28177[(2)]);
var state_28177__$1 = state_28177;
var statearr_28192_28218 = state_28177__$1;
(statearr_28192_28218[(2)] = inst_28173);

(statearr_28192_28218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28178 === (8))){
var inst_28154 = (state_28177[(7)]);
var inst_28164 = cljs.core.next.call(null,inst_28154);
var inst_28154__$1 = inst_28164;
var state_28177__$1 = (function (){var statearr_28193 = state_28177;
(statearr_28193[(7)] = inst_28154__$1);

return statearr_28193;
})();
var statearr_28194_28219 = state_28177__$1;
(statearr_28194_28219[(2)] = null);

(statearr_28194_28219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25166__auto__))
;
return ((function (switch__25101__auto__,c__25166__auto__){
return (function() {
var cljs$core$async$state_machine__25102__auto__ = null;
var cljs$core$async$state_machine__25102__auto____0 = (function (){
var statearr_28198 = [null,null,null,null,null,null,null,null];
(statearr_28198[(0)] = cljs$core$async$state_machine__25102__auto__);

(statearr_28198[(1)] = (1));

return statearr_28198;
});
var cljs$core$async$state_machine__25102__auto____1 = (function (state_28177){
while(true){
var ret_value__25103__auto__ = (function (){try{while(true){
var result__25104__auto__ = switch__25101__auto__.call(null,state_28177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25104__auto__;
}
break;
}
}catch (e28199){if((e28199 instanceof Object)){
var ex__25105__auto__ = e28199;
var statearr_28200_28220 = state_28177;
(statearr_28200_28220[(5)] = ex__25105__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28221 = state_28177;
state_28177 = G__28221;
continue;
} else {
return ret_value__25103__auto__;
}
break;
}
});
cljs$core$async$state_machine__25102__auto__ = function(state_28177){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25102__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25102__auto____1.call(this,state_28177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25102__auto____0;
cljs$core$async$state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25102__auto____1;
return cljs$core$async$state_machine__25102__auto__;
})()
;})(switch__25101__auto__,c__25166__auto__))
})();
var state__25168__auto__ = (function (){var statearr_28201 = f__25167__auto__.call(null);
(statearr_28201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25166__auto__);

return statearr_28201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25168__auto__);
});})(c__25166__auto__))
);

return c__25166__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__23344__auto__ = (((_ == null))?null:_);
var m__23345__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__23344__auto__)]);
if(!((m__23345__auto__ == null))){
return m__23345__auto__.call(null,_);
} else {
var m__23345__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__23345__auto____$1 == null))){
return m__23345__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__23344__auto__ = (((m == null))?null:m);
var m__23345__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__23344__auto__)]);
if(!((m__23345__auto__ == null))){
return m__23345__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__23345__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__23345__auto____$1 == null))){
return m__23345__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__23344__auto__ = (((m == null))?null:m);
var m__23345__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__23344__auto__)]);
if(!((m__23345__auto__ == null))){
return m__23345__auto__.call(null,m,ch);
} else {
var m__23345__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__23345__auto____$1 == null))){
return m__23345__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__23344__auto__ = (((m == null))?null:m);
var m__23345__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__23344__auto__)]);
if(!((m__23345__auto__ == null))){
return m__23345__auto__.call(null,m);
} else {
var m__23345__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__23345__auto____$1 == null))){
return m__23345__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28443 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28443 = (function (mult,ch,cs,meta28444){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28444 = meta28444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28445,meta28444__$1){
var self__ = this;
var _28445__$1 = this;
return (new cljs.core.async.t_cljs$core$async28443(self__.mult,self__.ch,self__.cs,meta28444__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28443.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28445){
var self__ = this;
var _28445__$1 = this;
return self__.meta28444;
});})(cs))
;

cljs.core.async.t_cljs$core$async28443.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28443.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28443.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28443.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28443.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28443.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28443.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28444","meta28444",-1510791915,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28443.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28443.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28443";

cljs.core.async.t_cljs$core$async28443.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__23287__auto__,writer__23288__auto__,opt__23289__auto__){
return cljs.core._write.call(null,writer__23288__auto__,"cljs.core.async/t_cljs$core$async28443");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28443 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28443(mult__$1,ch__$1,cs__$1,meta28444){
return (new cljs.core.async.t_cljs$core$async28443(mult__$1,ch__$1,cs__$1,meta28444));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28443(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__25166__auto___28664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25166__auto___28664,cs,m,dchan,dctr,done){
return (function (){
var f__25167__auto__ = (function (){var switch__25101__auto__ = ((function (c__25166__auto___28664,cs,m,dchan,dctr,done){
return (function (state_28576){
var state_val_28577 = (state_28576[(1)]);
if((state_val_28577 === (7))){
var inst_28572 = (state_28576[(2)]);
var state_28576__$1 = state_28576;
var statearr_28578_28665 = state_28576__$1;
(statearr_28578_28665[(2)] = inst_28572);

(statearr_28578_28665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (20))){
var inst_28477 = (state_28576[(7)]);
var inst_28487 = cljs.core.first.call(null,inst_28477);
var inst_28488 = cljs.core.nth.call(null,inst_28487,(0),null);
var inst_28489 = cljs.core.nth.call(null,inst_28487,(1),null);
var state_28576__$1 = (function (){var statearr_28579 = state_28576;
(statearr_28579[(8)] = inst_28488);

return statearr_28579;
})();
if(cljs.core.truth_(inst_28489)){
var statearr_28580_28666 = state_28576__$1;
(statearr_28580_28666[(1)] = (22));

} else {
var statearr_28581_28667 = state_28576__$1;
(statearr_28581_28667[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (27))){
var inst_28448 = (state_28576[(9)]);
var inst_28524 = (state_28576[(10)]);
var inst_28519 = (state_28576[(11)]);
var inst_28517 = (state_28576[(12)]);
var inst_28524__$1 = cljs.core._nth.call(null,inst_28517,inst_28519);
var inst_28525 = cljs.core.async.put_BANG_.call(null,inst_28524__$1,inst_28448,done);
var state_28576__$1 = (function (){var statearr_28582 = state_28576;
(statearr_28582[(10)] = inst_28524__$1);

return statearr_28582;
})();
if(cljs.core.truth_(inst_28525)){
var statearr_28583_28668 = state_28576__$1;
(statearr_28583_28668[(1)] = (30));

} else {
var statearr_28584_28669 = state_28576__$1;
(statearr_28584_28669[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (1))){
var state_28576__$1 = state_28576;
var statearr_28585_28670 = state_28576__$1;
(statearr_28585_28670[(2)] = null);

(statearr_28585_28670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (24))){
var inst_28477 = (state_28576[(7)]);
var inst_28494 = (state_28576[(2)]);
var inst_28495 = cljs.core.next.call(null,inst_28477);
var inst_28457 = inst_28495;
var inst_28458 = null;
var inst_28459 = (0);
var inst_28460 = (0);
var state_28576__$1 = (function (){var statearr_28586 = state_28576;
(statearr_28586[(13)] = inst_28460);

(statearr_28586[(14)] = inst_28494);

(statearr_28586[(15)] = inst_28459);

(statearr_28586[(16)] = inst_28457);

(statearr_28586[(17)] = inst_28458);

return statearr_28586;
})();
var statearr_28587_28671 = state_28576__$1;
(statearr_28587_28671[(2)] = null);

(statearr_28587_28671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (39))){
var state_28576__$1 = state_28576;
var statearr_28591_28672 = state_28576__$1;
(statearr_28591_28672[(2)] = null);

(statearr_28591_28672[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (4))){
var inst_28448 = (state_28576[(9)]);
var inst_28448__$1 = (state_28576[(2)]);
var inst_28449 = (inst_28448__$1 == null);
var state_28576__$1 = (function (){var statearr_28592 = state_28576;
(statearr_28592[(9)] = inst_28448__$1);

return statearr_28592;
})();
if(cljs.core.truth_(inst_28449)){
var statearr_28593_28673 = state_28576__$1;
(statearr_28593_28673[(1)] = (5));

} else {
var statearr_28594_28674 = state_28576__$1;
(statearr_28594_28674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (15))){
var inst_28460 = (state_28576[(13)]);
var inst_28459 = (state_28576[(15)]);
var inst_28457 = (state_28576[(16)]);
var inst_28458 = (state_28576[(17)]);
var inst_28473 = (state_28576[(2)]);
var inst_28474 = (inst_28460 + (1));
var tmp28588 = inst_28459;
var tmp28589 = inst_28457;
var tmp28590 = inst_28458;
var inst_28457__$1 = tmp28589;
var inst_28458__$1 = tmp28590;
var inst_28459__$1 = tmp28588;
var inst_28460__$1 = inst_28474;
var state_28576__$1 = (function (){var statearr_28595 = state_28576;
(statearr_28595[(13)] = inst_28460__$1);

(statearr_28595[(15)] = inst_28459__$1);

(statearr_28595[(16)] = inst_28457__$1);

(statearr_28595[(17)] = inst_28458__$1);

(statearr_28595[(18)] = inst_28473);

return statearr_28595;
})();
var statearr_28596_28675 = state_28576__$1;
(statearr_28596_28675[(2)] = null);

(statearr_28596_28675[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (21))){
var inst_28498 = (state_28576[(2)]);
var state_28576__$1 = state_28576;
var statearr_28600_28676 = state_28576__$1;
(statearr_28600_28676[(2)] = inst_28498);

(statearr_28600_28676[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (31))){
var inst_28524 = (state_28576[(10)]);
var inst_28528 = done.call(null,null);
var inst_28529 = cljs.core.async.untap_STAR_.call(null,m,inst_28524);
var state_28576__$1 = (function (){var statearr_28601 = state_28576;
(statearr_28601[(19)] = inst_28528);

return statearr_28601;
})();
var statearr_28602_28677 = state_28576__$1;
(statearr_28602_28677[(2)] = inst_28529);

(statearr_28602_28677[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (32))){
var inst_28518 = (state_28576[(20)]);
var inst_28519 = (state_28576[(11)]);
var inst_28517 = (state_28576[(12)]);
var inst_28516 = (state_28576[(21)]);
var inst_28531 = (state_28576[(2)]);
var inst_28532 = (inst_28519 + (1));
var tmp28597 = inst_28518;
var tmp28598 = inst_28517;
var tmp28599 = inst_28516;
var inst_28516__$1 = tmp28599;
var inst_28517__$1 = tmp28598;
var inst_28518__$1 = tmp28597;
var inst_28519__$1 = inst_28532;
var state_28576__$1 = (function (){var statearr_28603 = state_28576;
(statearr_28603[(22)] = inst_28531);

(statearr_28603[(20)] = inst_28518__$1);

(statearr_28603[(11)] = inst_28519__$1);

(statearr_28603[(12)] = inst_28517__$1);

(statearr_28603[(21)] = inst_28516__$1);

return statearr_28603;
})();
var statearr_28604_28678 = state_28576__$1;
(statearr_28604_28678[(2)] = null);

(statearr_28604_28678[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (40))){
var inst_28544 = (state_28576[(23)]);
var inst_28548 = done.call(null,null);
var inst_28549 = cljs.core.async.untap_STAR_.call(null,m,inst_28544);
var state_28576__$1 = (function (){var statearr_28605 = state_28576;
(statearr_28605[(24)] = inst_28548);

return statearr_28605;
})();
var statearr_28606_28679 = state_28576__$1;
(statearr_28606_28679[(2)] = inst_28549);

(statearr_28606_28679[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (33))){
var inst_28535 = (state_28576[(25)]);
var inst_28537 = cljs.core.chunked_seq_QMARK_.call(null,inst_28535);
var state_28576__$1 = state_28576;
if(inst_28537){
var statearr_28607_28680 = state_28576__$1;
(statearr_28607_28680[(1)] = (36));

} else {
var statearr_28608_28681 = state_28576__$1;
(statearr_28608_28681[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (13))){
var inst_28467 = (state_28576[(26)]);
var inst_28470 = cljs.core.async.close_BANG_.call(null,inst_28467);
var state_28576__$1 = state_28576;
var statearr_28609_28682 = state_28576__$1;
(statearr_28609_28682[(2)] = inst_28470);

(statearr_28609_28682[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (22))){
var inst_28488 = (state_28576[(8)]);
var inst_28491 = cljs.core.async.close_BANG_.call(null,inst_28488);
var state_28576__$1 = state_28576;
var statearr_28610_28683 = state_28576__$1;
(statearr_28610_28683[(2)] = inst_28491);

(statearr_28610_28683[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (36))){
var inst_28535 = (state_28576[(25)]);
var inst_28539 = cljs.core.chunk_first.call(null,inst_28535);
var inst_28540 = cljs.core.chunk_rest.call(null,inst_28535);
var inst_28541 = cljs.core.count.call(null,inst_28539);
var inst_28516 = inst_28540;
var inst_28517 = inst_28539;
var inst_28518 = inst_28541;
var inst_28519 = (0);
var state_28576__$1 = (function (){var statearr_28611 = state_28576;
(statearr_28611[(20)] = inst_28518);

(statearr_28611[(11)] = inst_28519);

(statearr_28611[(12)] = inst_28517);

(statearr_28611[(21)] = inst_28516);

return statearr_28611;
})();
var statearr_28612_28684 = state_28576__$1;
(statearr_28612_28684[(2)] = null);

(statearr_28612_28684[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (41))){
var inst_28535 = (state_28576[(25)]);
var inst_28551 = (state_28576[(2)]);
var inst_28552 = cljs.core.next.call(null,inst_28535);
var inst_28516 = inst_28552;
var inst_28517 = null;
var inst_28518 = (0);
var inst_28519 = (0);
var state_28576__$1 = (function (){var statearr_28613 = state_28576;
(statearr_28613[(20)] = inst_28518);

(statearr_28613[(27)] = inst_28551);

(statearr_28613[(11)] = inst_28519);

(statearr_28613[(12)] = inst_28517);

(statearr_28613[(21)] = inst_28516);

return statearr_28613;
})();
var statearr_28614_28685 = state_28576__$1;
(statearr_28614_28685[(2)] = null);

(statearr_28614_28685[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (43))){
var state_28576__$1 = state_28576;
var statearr_28615_28686 = state_28576__$1;
(statearr_28615_28686[(2)] = null);

(statearr_28615_28686[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (29))){
var inst_28560 = (state_28576[(2)]);
var state_28576__$1 = state_28576;
var statearr_28616_28687 = state_28576__$1;
(statearr_28616_28687[(2)] = inst_28560);

(statearr_28616_28687[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (44))){
var inst_28569 = (state_28576[(2)]);
var state_28576__$1 = (function (){var statearr_28617 = state_28576;
(statearr_28617[(28)] = inst_28569);

return statearr_28617;
})();
var statearr_28618_28688 = state_28576__$1;
(statearr_28618_28688[(2)] = null);

(statearr_28618_28688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (6))){
var inst_28508 = (state_28576[(29)]);
var inst_28507 = cljs.core.deref.call(null,cs);
var inst_28508__$1 = cljs.core.keys.call(null,inst_28507);
var inst_28509 = cljs.core.count.call(null,inst_28508__$1);
var inst_28510 = cljs.core.reset_BANG_.call(null,dctr,inst_28509);
var inst_28515 = cljs.core.seq.call(null,inst_28508__$1);
var inst_28516 = inst_28515;
var inst_28517 = null;
var inst_28518 = (0);
var inst_28519 = (0);
var state_28576__$1 = (function (){var statearr_28619 = state_28576;
(statearr_28619[(29)] = inst_28508__$1);

(statearr_28619[(20)] = inst_28518);

(statearr_28619[(30)] = inst_28510);

(statearr_28619[(11)] = inst_28519);

(statearr_28619[(12)] = inst_28517);

(statearr_28619[(21)] = inst_28516);

return statearr_28619;
})();
var statearr_28620_28689 = state_28576__$1;
(statearr_28620_28689[(2)] = null);

(statearr_28620_28689[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (28))){
var inst_28535 = (state_28576[(25)]);
var inst_28516 = (state_28576[(21)]);
var inst_28535__$1 = cljs.core.seq.call(null,inst_28516);
var state_28576__$1 = (function (){var statearr_28621 = state_28576;
(statearr_28621[(25)] = inst_28535__$1);

return statearr_28621;
})();
if(inst_28535__$1){
var statearr_28622_28690 = state_28576__$1;
(statearr_28622_28690[(1)] = (33));

} else {
var statearr_28623_28691 = state_28576__$1;
(statearr_28623_28691[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (25))){
var inst_28518 = (state_28576[(20)]);
var inst_28519 = (state_28576[(11)]);
var inst_28521 = (inst_28519 < inst_28518);
var inst_28522 = inst_28521;
var state_28576__$1 = state_28576;
if(cljs.core.truth_(inst_28522)){
var statearr_28624_28692 = state_28576__$1;
(statearr_28624_28692[(1)] = (27));

} else {
var statearr_28625_28693 = state_28576__$1;
(statearr_28625_28693[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (34))){
var state_28576__$1 = state_28576;
var statearr_28626_28694 = state_28576__$1;
(statearr_28626_28694[(2)] = null);

(statearr_28626_28694[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (17))){
var state_28576__$1 = state_28576;
var statearr_28627_28695 = state_28576__$1;
(statearr_28627_28695[(2)] = null);

(statearr_28627_28695[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (3))){
var inst_28574 = (state_28576[(2)]);
var state_28576__$1 = state_28576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28576__$1,inst_28574);
} else {
if((state_val_28577 === (12))){
var inst_28503 = (state_28576[(2)]);
var state_28576__$1 = state_28576;
var statearr_28628_28696 = state_28576__$1;
(statearr_28628_28696[(2)] = inst_28503);

(statearr_28628_28696[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (2))){
var state_28576__$1 = state_28576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28576__$1,(4),ch);
} else {
if((state_val_28577 === (23))){
var state_28576__$1 = state_28576;
var statearr_28629_28697 = state_28576__$1;
(statearr_28629_28697[(2)] = null);

(statearr_28629_28697[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (35))){
var inst_28558 = (state_28576[(2)]);
var state_28576__$1 = state_28576;
var statearr_28630_28698 = state_28576__$1;
(statearr_28630_28698[(2)] = inst_28558);

(statearr_28630_28698[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (19))){
var inst_28477 = (state_28576[(7)]);
var inst_28481 = cljs.core.chunk_first.call(null,inst_28477);
var inst_28482 = cljs.core.chunk_rest.call(null,inst_28477);
var inst_28483 = cljs.core.count.call(null,inst_28481);
var inst_28457 = inst_28482;
var inst_28458 = inst_28481;
var inst_28459 = inst_28483;
var inst_28460 = (0);
var state_28576__$1 = (function (){var statearr_28631 = state_28576;
(statearr_28631[(13)] = inst_28460);

(statearr_28631[(15)] = inst_28459);

(statearr_28631[(16)] = inst_28457);

(statearr_28631[(17)] = inst_28458);

return statearr_28631;
})();
var statearr_28632_28699 = state_28576__$1;
(statearr_28632_28699[(2)] = null);

(statearr_28632_28699[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (11))){
var inst_28457 = (state_28576[(16)]);
var inst_28477 = (state_28576[(7)]);
var inst_28477__$1 = cljs.core.seq.call(null,inst_28457);
var state_28576__$1 = (function (){var statearr_28633 = state_28576;
(statearr_28633[(7)] = inst_28477__$1);

return statearr_28633;
})();
if(inst_28477__$1){
var statearr_28634_28700 = state_28576__$1;
(statearr_28634_28700[(1)] = (16));

} else {
var statearr_28635_28701 = state_28576__$1;
(statearr_28635_28701[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (9))){
var inst_28505 = (state_28576[(2)]);
var state_28576__$1 = state_28576;
var statearr_28636_28702 = state_28576__$1;
(statearr_28636_28702[(2)] = inst_28505);

(statearr_28636_28702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (5))){
var inst_28455 = cljs.core.deref.call(null,cs);
var inst_28456 = cljs.core.seq.call(null,inst_28455);
var inst_28457 = inst_28456;
var inst_28458 = null;
var inst_28459 = (0);
var inst_28460 = (0);
var state_28576__$1 = (function (){var statearr_28637 = state_28576;
(statearr_28637[(13)] = inst_28460);

(statearr_28637[(15)] = inst_28459);

(statearr_28637[(16)] = inst_28457);

(statearr_28637[(17)] = inst_28458);

return statearr_28637;
})();
var statearr_28638_28703 = state_28576__$1;
(statearr_28638_28703[(2)] = null);

(statearr_28638_28703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (14))){
var state_28576__$1 = state_28576;
var statearr_28639_28704 = state_28576__$1;
(statearr_28639_28704[(2)] = null);

(statearr_28639_28704[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (45))){
var inst_28566 = (state_28576[(2)]);
var state_28576__$1 = state_28576;
var statearr_28640_28705 = state_28576__$1;
(statearr_28640_28705[(2)] = inst_28566);

(statearr_28640_28705[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (26))){
var inst_28508 = (state_28576[(29)]);
var inst_28562 = (state_28576[(2)]);
var inst_28563 = cljs.core.seq.call(null,inst_28508);
var state_28576__$1 = (function (){var statearr_28641 = state_28576;
(statearr_28641[(31)] = inst_28562);

return statearr_28641;
})();
if(inst_28563){
var statearr_28642_28706 = state_28576__$1;
(statearr_28642_28706[(1)] = (42));

} else {
var statearr_28643_28707 = state_28576__$1;
(statearr_28643_28707[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (16))){
var inst_28477 = (state_28576[(7)]);
var inst_28479 = cljs.core.chunked_seq_QMARK_.call(null,inst_28477);
var state_28576__$1 = state_28576;
if(inst_28479){
var statearr_28644_28708 = state_28576__$1;
(statearr_28644_28708[(1)] = (19));

} else {
var statearr_28645_28709 = state_28576__$1;
(statearr_28645_28709[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (38))){
var inst_28555 = (state_28576[(2)]);
var state_28576__$1 = state_28576;
var statearr_28646_28710 = state_28576__$1;
(statearr_28646_28710[(2)] = inst_28555);

(statearr_28646_28710[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (30))){
var state_28576__$1 = state_28576;
var statearr_28647_28711 = state_28576__$1;
(statearr_28647_28711[(2)] = null);

(statearr_28647_28711[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (10))){
var inst_28460 = (state_28576[(13)]);
var inst_28458 = (state_28576[(17)]);
var inst_28466 = cljs.core._nth.call(null,inst_28458,inst_28460);
var inst_28467 = cljs.core.nth.call(null,inst_28466,(0),null);
var inst_28468 = cljs.core.nth.call(null,inst_28466,(1),null);
var state_28576__$1 = (function (){var statearr_28648 = state_28576;
(statearr_28648[(26)] = inst_28467);

return statearr_28648;
})();
if(cljs.core.truth_(inst_28468)){
var statearr_28649_28712 = state_28576__$1;
(statearr_28649_28712[(1)] = (13));

} else {
var statearr_28650_28713 = state_28576__$1;
(statearr_28650_28713[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (18))){
var inst_28501 = (state_28576[(2)]);
var state_28576__$1 = state_28576;
var statearr_28651_28714 = state_28576__$1;
(statearr_28651_28714[(2)] = inst_28501);

(statearr_28651_28714[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (42))){
var state_28576__$1 = state_28576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28576__$1,(45),dchan);
} else {
if((state_val_28577 === (37))){
var inst_28544 = (state_28576[(23)]);
var inst_28535 = (state_28576[(25)]);
var inst_28448 = (state_28576[(9)]);
var inst_28544__$1 = cljs.core.first.call(null,inst_28535);
var inst_28545 = cljs.core.async.put_BANG_.call(null,inst_28544__$1,inst_28448,done);
var state_28576__$1 = (function (){var statearr_28652 = state_28576;
(statearr_28652[(23)] = inst_28544__$1);

return statearr_28652;
})();
if(cljs.core.truth_(inst_28545)){
var statearr_28653_28715 = state_28576__$1;
(statearr_28653_28715[(1)] = (39));

} else {
var statearr_28654_28716 = state_28576__$1;
(statearr_28654_28716[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (8))){
var inst_28460 = (state_28576[(13)]);
var inst_28459 = (state_28576[(15)]);
var inst_28462 = (inst_28460 < inst_28459);
var inst_28463 = inst_28462;
var state_28576__$1 = state_28576;
if(cljs.core.truth_(inst_28463)){
var statearr_28655_28717 = state_28576__$1;
(statearr_28655_28717[(1)] = (10));

} else {
var statearr_28656_28718 = state_28576__$1;
(statearr_28656_28718[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25166__auto___28664,cs,m,dchan,dctr,done))
;
return ((function (switch__25101__auto__,c__25166__auto___28664,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25102__auto__ = null;
var cljs$core$async$mult_$_state_machine__25102__auto____0 = (function (){
var statearr_28660 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28660[(0)] = cljs$core$async$mult_$_state_machine__25102__auto__);

(statearr_28660[(1)] = (1));

return statearr_28660;
});
var cljs$core$async$mult_$_state_machine__25102__auto____1 = (function (state_28576){
while(true){
var ret_value__25103__auto__ = (function (){try{while(true){
var result__25104__auto__ = switch__25101__auto__.call(null,state_28576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25104__auto__;
}
break;
}
}catch (e28661){if((e28661 instanceof Object)){
var ex__25105__auto__ = e28661;
var statearr_28662_28719 = state_28576;
(statearr_28662_28719[(5)] = ex__25105__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28720 = state_28576;
state_28576 = G__28720;
continue;
} else {
return ret_value__25103__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25102__auto__ = function(state_28576){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25102__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25102__auto____1.call(this,state_28576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25102__auto____0;
cljs$core$async$mult_$_state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25102__auto____1;
return cljs$core$async$mult_$_state_machine__25102__auto__;
})()
;})(switch__25101__auto__,c__25166__auto___28664,cs,m,dchan,dctr,done))
})();
var state__25168__auto__ = (function (){var statearr_28663 = f__25167__auto__.call(null);
(statearr_28663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25166__auto___28664);

return statearr_28663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25168__auto__);
});})(c__25166__auto___28664,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args28721 = [];
var len__23747__auto___28724 = arguments.length;
var i__23748__auto___28725 = (0);
while(true){
if((i__23748__auto___28725 < len__23747__auto___28724)){
args28721.push((arguments[i__23748__auto___28725]));

var G__28726 = (i__23748__auto___28725 + (1));
i__23748__auto___28725 = G__28726;
continue;
} else {
}
break;
}

var G__28723 = args28721.length;
switch (G__28723) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28721.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__23344__auto__ = (((m == null))?null:m);
var m__23345__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__23344__auto__)]);
if(!((m__23345__auto__ == null))){
return m__23345__auto__.call(null,m,ch);
} else {
var m__23345__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__23345__auto____$1 == null))){
return m__23345__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__23344__auto__ = (((m == null))?null:m);
var m__23345__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__23344__auto__)]);
if(!((m__23345__auto__ == null))){
return m__23345__auto__.call(null,m,ch);
} else {
var m__23345__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__23345__auto____$1 == null))){
return m__23345__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__23344__auto__ = (((m == null))?null:m);
var m__23345__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__23344__auto__)]);
if(!((m__23345__auto__ == null))){
return m__23345__auto__.call(null,m);
} else {
var m__23345__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__23345__auto____$1 == null))){
return m__23345__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__23344__auto__ = (((m == null))?null:m);
var m__23345__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__23344__auto__)]);
if(!((m__23345__auto__ == null))){
return m__23345__auto__.call(null,m,state_map);
} else {
var m__23345__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__23345__auto____$1 == null))){
return m__23345__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__23344__auto__ = (((m == null))?null:m);
var m__23345__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__23344__auto__)]);
if(!((m__23345__auto__ == null))){
return m__23345__auto__.call(null,m,mode);
} else {
var m__23345__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__23345__auto____$1 == null))){
return m__23345__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__23754__auto__ = [];
var len__23747__auto___28738 = arguments.length;
var i__23748__auto___28739 = (0);
while(true){
if((i__23748__auto___28739 < len__23747__auto___28738)){
args__23754__auto__.push((arguments[i__23748__auto___28739]));

var G__28740 = (i__23748__auto___28739 + (1));
i__23748__auto___28739 = G__28740;
continue;
} else {
}
break;
}

var argseq__23755__auto__ = ((((3) < args__23754__auto__.length))?(new cljs.core.IndexedSeq(args__23754__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23755__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28732){
var map__28733 = p__28732;
var map__28733__$1 = ((((!((map__28733 == null)))?((((map__28733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28733):map__28733);
var opts = map__28733__$1;
var statearr_28735_28741 = state;
(statearr_28735_28741[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__28733,map__28733__$1,opts){
return (function (val){
var statearr_28736_28742 = state;
(statearr_28736_28742[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28733,map__28733__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_28737_28743 = state;
(statearr_28737_28743[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28728){
var G__28729 = cljs.core.first.call(null,seq28728);
var seq28728__$1 = cljs.core.next.call(null,seq28728);
var G__28730 = cljs.core.first.call(null,seq28728__$1);
var seq28728__$2 = cljs.core.next.call(null,seq28728__$1);
var G__28731 = cljs.core.first.call(null,seq28728__$2);
var seq28728__$3 = cljs.core.next.call(null,seq28728__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28729,G__28730,G__28731,seq28728__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28907 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28907 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28908){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28908 = meta28908;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28909,meta28908__$1){
var self__ = this;
var _28909__$1 = this;
return (new cljs.core.async.t_cljs$core$async28907(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28908__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28907.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28909){
var self__ = this;
var _28909__$1 = this;
return self__.meta28908;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28907.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28907.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28907.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async28907.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28907.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28907.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28907.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28907.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28907.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28908","meta28908",641419638,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28907.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28907.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28907";

cljs.core.async.t_cljs$core$async28907.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__23287__auto__,writer__23288__auto__,opt__23289__auto__){
return cljs.core._write.call(null,writer__23288__auto__,"cljs.core.async/t_cljs$core$async28907");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28907 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28907(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28908){
return (new cljs.core.async.t_cljs$core$async28907(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28908));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28907(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25166__auto___29070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25166__auto___29070,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25167__auto__ = (function (){var switch__25101__auto__ = ((function (c__25166__auto___29070,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29007){
var state_val_29008 = (state_29007[(1)]);
if((state_val_29008 === (7))){
var inst_28925 = (state_29007[(2)]);
var state_29007__$1 = state_29007;
var statearr_29009_29071 = state_29007__$1;
(statearr_29009_29071[(2)] = inst_28925);

(statearr_29009_29071[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29008 === (20))){
var inst_28937 = (state_29007[(7)]);
var state_29007__$1 = state_29007;
var statearr_29010_29072 = state_29007__$1;
(statearr_29010_29072[(2)] = inst_28937);

(statearr_29010_29072[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29008 === (27))){
var state_29007__$1 = state_29007;
var statearr_29011_29073 = state_29007__$1;
(statearr_29011_29073[(2)] = null);

(statearr_29011_29073[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29008 === (1))){
var inst_28913 = (state_29007[(8)]);
var inst_28913__$1 = calc_state.call(null);
var inst_28915 = (inst_28913__$1 == null);
var inst_28916 = cljs.core.not.call(null,inst_28915);
var state_29007__$1 = (function (){var statearr_29012 = state_29007;
(statearr_29012[(8)] = inst_28913__$1);

return statearr_29012;
})();
if(inst_28916){
var statearr_29013_29074 = state_29007__$1;
(statearr_29013_29074[(1)] = (2));

} else {
var statearr_29014_29075 = state_29007__$1;
(statearr_29014_29075[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29008 === (24))){
var inst_28960 = (state_29007[(9)]);
var inst_28967 = (state_29007[(10)]);
var inst_28981 = (state_29007[(11)]);
var inst_28981__$1 = inst_28960.call(null,inst_28967);
var state_29007__$1 = (function (){var statearr_29015 = state_29007;
(statearr_29015[(11)] = inst_28981__$1);

return statearr_29015;
})();
if(cljs.core.truth_(inst_28981__$1)){
var statearr_29016_29076 = state_29007__$1;
(statearr_29016_29076[(1)] = (29));

} else {
var statearr_29017_29077 = state_29007__$1;
(statearr_29017_29077[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29008 === (4))){
var inst_28928 = (state_29007[(2)]);
var state_29007__$1 = state_29007;
if(cljs.core.truth_(inst_28928)){
var statearr_29018_29078 = state_29007__$1;
(statearr_29018_29078[(1)] = (8));

} else {
var statearr_29019_29079 = state_29007__$1;
(statearr_29019_29079[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29008 === (15))){
var inst_28954 = (state_29007[(2)]);
var state_29007__$1 = state_29007;
if(cljs.core.truth_(inst_28954)){
var statearr_29020_29080 = state_29007__$1;
(statearr_29020_29080[(1)] = (19));

} else {
var statearr_29021_29081 = state_29007__$1;
(statearr_29021_29081[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29008 === (21))){
var inst_28959 = (state_29007[(12)]);
var inst_28959__$1 = (state_29007[(2)]);
var inst_28960 = cljs.core.get.call(null,inst_28959__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28961 = cljs.core.get.call(null,inst_28959__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28962 = cljs.core.get.call(null,inst_28959__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29007__$1 = (function (){var statearr_29022 = state_29007;
(statearr_29022[(9)] = inst_28960);

(statearr_29022[(12)] = inst_28959__$1);

(statearr_29022[(13)] = inst_28961);

return statearr_29022;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29007__$1,(22),inst_28962);
} else {
if((state_val_29008 === (31))){
var inst_28989 = (state_29007[(2)]);
var state_29007__$1 = state_29007;
if(cljs.core.truth_(inst_28989)){
var statearr_29023_29082 = state_29007__$1;
(statearr_29023_29082[(1)] = (32));

} else {
var statearr_29024_29083 = state_29007__$1;
(statearr_29024_29083[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29008 === (32))){
var inst_28966 = (state_29007[(14)]);
var state_29007__$1 = state_29007;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29007__$1,(35),out,inst_28966);
} else {
if((state_val_29008 === (33))){
var inst_28959 = (state_29007[(12)]);
var inst_28937 = inst_28959;
var state_29007__$1 = (function (){var statearr_29025 = state_29007;
(statearr_29025[(7)] = inst_28937);

return statearr_29025;
})();
var statearr_29026_29084 = state_29007__$1;
(statearr_29026_29084[(2)] = null);

(statearr_29026_29084[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29008 === (13))){
var inst_28937 = (state_29007[(7)]);
var inst_28944 = inst_28937.cljs$lang$protocol_mask$partition0$;
var inst_28945 = (inst_28944 & (64));
var inst_28946 = inst_28937.cljs$core$ISeq$;
var inst_28947 = (inst_28945) || (inst_28946);
var state_29007__$1 = state_29007;
if(cljs.core.truth_(inst_28947)){
var statearr_29027_29085 = state_29007__$1;
(statearr_29027_29085[(1)] = (16));

} else {
var statearr_29028_29086 = state_29007__$1;
(statearr_29028_29086[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29008 === (22))){
var inst_28967 = (state_29007[(10)]);
var inst_28966 = (state_29007[(14)]);
var inst_28965 = (state_29007[(2)]);
var inst_28966__$1 = cljs.core.nth.call(null,inst_28965,(0),null);
var inst_28967__$1 = cljs.core.nth.call(null,inst_28965,(1),null);
var inst_28968 = (inst_28966__$1 == null);
var inst_28969 = cljs.core._EQ_.call(null,inst_28967__$1,change);
var inst_28970 = (inst_28968) || (inst_28969);
var state_29007__$1 = (function (){var statearr_29029 = state_29007;
(statearr_29029[(10)] = inst_28967__$1);

(statearr_29029[(14)] = inst_28966__$1);

return statearr_29029;
})();
if(cljs.core.truth_(inst_28970)){
var statearr_29030_29087 = state_29007__$1;
(statearr_29030_29087[(1)] = (23));

} else {
var statearr_29031_29088 = state_29007__$1;
(statearr_29031_29088[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29008 === (36))){
var inst_28959 = (state_29007[(12)]);
var inst_28937 = inst_28959;
var state_29007__$1 = (function (){var statearr_29032 = state_29007;
(statearr_29032[(7)] = inst_28937);

return statearr_29032;
})();
var statearr_29033_29089 = state_29007__$1;
(statearr_29033_29089[(2)] = null);

(statearr_29033_29089[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29008 === (29))){
var inst_28981 = (state_29007[(11)]);
var state_29007__$1 = state_29007;
var statearr_29034_29090 = state_29007__$1;
(statearr_29034_29090[(2)] = inst_28981);

(statearr_29034_29090[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29008 === (6))){
var state_29007__$1 = state_29007;
var statearr_29035_29091 = state_29007__$1;
(statearr_29035_29091[(2)] = false);

(statearr_29035_29091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29008 === (28))){
var inst_28977 = (state_29007[(2)]);
var inst_28978 = calc_state.call(null);
var inst_28937 = inst_28978;
var state_29007__$1 = (function (){var statearr_29036 = state_29007;
(statearr_29036[(15)] = inst_28977);

(statearr_29036[(7)] = inst_28937);

return statearr_29036;
})();
var statearr_29037_29092 = state_29007__$1;
(statearr_29037_29092[(2)] = null);

(statearr_29037_29092[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29008 === (25))){
var inst_29003 = (state_29007[(2)]);
var state_29007__$1 = state_29007;
var statearr_29038_29093 = state_29007__$1;
(statearr_29038_29093[(2)] = inst_29003);

(statearr_29038_29093[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29008 === (34))){
var inst_29001 = (state_29007[(2)]);
var state_29007__$1 = state_29007;
var statearr_29039_29094 = state_29007__$1;
(statearr_29039_29094[(2)] = inst_29001);

(statearr_29039_29094[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29008 === (17))){
var state_29007__$1 = state_29007;
var statearr_29040_29095 = state_29007__$1;
(statearr_29040_29095[(2)] = false);

(statearr_29040_29095[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29008 === (3))){
var state_29007__$1 = state_29007;
var statearr_29041_29096 = state_29007__$1;
(statearr_29041_29096[(2)] = false);

(statearr_29041_29096[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29008 === (12))){
var inst_29005 = (state_29007[(2)]);
var state_29007__$1 = state_29007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29007__$1,inst_29005);
} else {
if((state_val_29008 === (2))){
var inst_28913 = (state_29007[(8)]);
var inst_28918 = inst_28913.cljs$lang$protocol_mask$partition0$;
var inst_28919 = (inst_28918 & (64));
var inst_28920 = inst_28913.cljs$core$ISeq$;
var inst_28921 = (inst_28919) || (inst_28920);
var state_29007__$1 = state_29007;
if(cljs.core.truth_(inst_28921)){
var statearr_29042_29097 = state_29007__$1;
(statearr_29042_29097[(1)] = (5));

} else {
var statearr_29043_29098 = state_29007__$1;
(statearr_29043_29098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29008 === (23))){
var inst_28966 = (state_29007[(14)]);
var inst_28972 = (inst_28966 == null);
var state_29007__$1 = state_29007;
if(cljs.core.truth_(inst_28972)){
var statearr_29044_29099 = state_29007__$1;
(statearr_29044_29099[(1)] = (26));

} else {
var statearr_29045_29100 = state_29007__$1;
(statearr_29045_29100[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29008 === (35))){
var inst_28992 = (state_29007[(2)]);
var state_29007__$1 = state_29007;
if(cljs.core.truth_(inst_28992)){
var statearr_29046_29101 = state_29007__$1;
(statearr_29046_29101[(1)] = (36));

} else {
var statearr_29047_29102 = state_29007__$1;
(statearr_29047_29102[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29008 === (19))){
var inst_28937 = (state_29007[(7)]);
var inst_28956 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28937);
var state_29007__$1 = state_29007;
var statearr_29048_29103 = state_29007__$1;
(statearr_29048_29103[(2)] = inst_28956);

(statearr_29048_29103[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29008 === (11))){
var inst_28937 = (state_29007[(7)]);
var inst_28941 = (inst_28937 == null);
var inst_28942 = cljs.core.not.call(null,inst_28941);
var state_29007__$1 = state_29007;
if(inst_28942){
var statearr_29049_29104 = state_29007__$1;
(statearr_29049_29104[(1)] = (13));

} else {
var statearr_29050_29105 = state_29007__$1;
(statearr_29050_29105[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29008 === (9))){
var inst_28913 = (state_29007[(8)]);
var state_29007__$1 = state_29007;
var statearr_29051_29106 = state_29007__$1;
(statearr_29051_29106[(2)] = inst_28913);

(statearr_29051_29106[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29008 === (5))){
var state_29007__$1 = state_29007;
var statearr_29052_29107 = state_29007__$1;
(statearr_29052_29107[(2)] = true);

(statearr_29052_29107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29008 === (14))){
var state_29007__$1 = state_29007;
var statearr_29053_29108 = state_29007__$1;
(statearr_29053_29108[(2)] = false);

(statearr_29053_29108[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29008 === (26))){
var inst_28967 = (state_29007[(10)]);
var inst_28974 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28967);
var state_29007__$1 = state_29007;
var statearr_29054_29109 = state_29007__$1;
(statearr_29054_29109[(2)] = inst_28974);

(statearr_29054_29109[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29008 === (16))){
var state_29007__$1 = state_29007;
var statearr_29055_29110 = state_29007__$1;
(statearr_29055_29110[(2)] = true);

(statearr_29055_29110[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29008 === (38))){
var inst_28997 = (state_29007[(2)]);
var state_29007__$1 = state_29007;
var statearr_29056_29111 = state_29007__$1;
(statearr_29056_29111[(2)] = inst_28997);

(statearr_29056_29111[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29008 === (30))){
var inst_28960 = (state_29007[(9)]);
var inst_28967 = (state_29007[(10)]);
var inst_28961 = (state_29007[(13)]);
var inst_28984 = cljs.core.empty_QMARK_.call(null,inst_28960);
var inst_28985 = inst_28961.call(null,inst_28967);
var inst_28986 = cljs.core.not.call(null,inst_28985);
var inst_28987 = (inst_28984) && (inst_28986);
var state_29007__$1 = state_29007;
var statearr_29057_29112 = state_29007__$1;
(statearr_29057_29112[(2)] = inst_28987);

(statearr_29057_29112[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29008 === (10))){
var inst_28913 = (state_29007[(8)]);
var inst_28933 = (state_29007[(2)]);
var inst_28934 = cljs.core.get.call(null,inst_28933,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28935 = cljs.core.get.call(null,inst_28933,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28936 = cljs.core.get.call(null,inst_28933,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28937 = inst_28913;
var state_29007__$1 = (function (){var statearr_29058 = state_29007;
(statearr_29058[(16)] = inst_28934);

(statearr_29058[(17)] = inst_28935);

(statearr_29058[(18)] = inst_28936);

(statearr_29058[(7)] = inst_28937);

return statearr_29058;
})();
var statearr_29059_29113 = state_29007__$1;
(statearr_29059_29113[(2)] = null);

(statearr_29059_29113[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29008 === (18))){
var inst_28951 = (state_29007[(2)]);
var state_29007__$1 = state_29007;
var statearr_29060_29114 = state_29007__$1;
(statearr_29060_29114[(2)] = inst_28951);

(statearr_29060_29114[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29008 === (37))){
var state_29007__$1 = state_29007;
var statearr_29061_29115 = state_29007__$1;
(statearr_29061_29115[(2)] = null);

(statearr_29061_29115[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29008 === (8))){
var inst_28913 = (state_29007[(8)]);
var inst_28930 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28913);
var state_29007__$1 = state_29007;
var statearr_29062_29116 = state_29007__$1;
(statearr_29062_29116[(2)] = inst_28930);

(statearr_29062_29116[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25166__auto___29070,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25101__auto__,c__25166__auto___29070,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25102__auto__ = null;
var cljs$core$async$mix_$_state_machine__25102__auto____0 = (function (){
var statearr_29066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29066[(0)] = cljs$core$async$mix_$_state_machine__25102__auto__);

(statearr_29066[(1)] = (1));

return statearr_29066;
});
var cljs$core$async$mix_$_state_machine__25102__auto____1 = (function (state_29007){
while(true){
var ret_value__25103__auto__ = (function (){try{while(true){
var result__25104__auto__ = switch__25101__auto__.call(null,state_29007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25104__auto__;
}
break;
}
}catch (e29067){if((e29067 instanceof Object)){
var ex__25105__auto__ = e29067;
var statearr_29068_29117 = state_29007;
(statearr_29068_29117[(5)] = ex__25105__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29118 = state_29007;
state_29007 = G__29118;
continue;
} else {
return ret_value__25103__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25102__auto__ = function(state_29007){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25102__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25102__auto____1.call(this,state_29007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25102__auto____0;
cljs$core$async$mix_$_state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25102__auto____1;
return cljs$core$async$mix_$_state_machine__25102__auto__;
})()
;})(switch__25101__auto__,c__25166__auto___29070,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25168__auto__ = (function (){var statearr_29069 = f__25167__auto__.call(null);
(statearr_29069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25166__auto___29070);

return statearr_29069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25168__auto__);
});})(c__25166__auto___29070,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__23344__auto__ = (((p == null))?null:p);
var m__23345__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__23344__auto__)]);
if(!((m__23345__auto__ == null))){
return m__23345__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__23345__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__23345__auto____$1 == null))){
return m__23345__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__23344__auto__ = (((p == null))?null:p);
var m__23345__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__23344__auto__)]);
if(!((m__23345__auto__ == null))){
return m__23345__auto__.call(null,p,v,ch);
} else {
var m__23345__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__23345__auto____$1 == null))){
return m__23345__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29119 = [];
var len__23747__auto___29122 = arguments.length;
var i__23748__auto___29123 = (0);
while(true){
if((i__23748__auto___29123 < len__23747__auto___29122)){
args29119.push((arguments[i__23748__auto___29123]));

var G__29124 = (i__23748__auto___29123 + (1));
i__23748__auto___29123 = G__29124;
continue;
} else {
}
break;
}

var G__29121 = args29119.length;
switch (G__29121) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29119.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__23344__auto__ = (((p == null))?null:p);
var m__23345__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__23344__auto__)]);
if(!((m__23345__auto__ == null))){
return m__23345__auto__.call(null,p);
} else {
var m__23345__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__23345__auto____$1 == null))){
return m__23345__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__23344__auto__ = (((p == null))?null:p);
var m__23345__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__23344__auto__)]);
if(!((m__23345__auto__ == null))){
return m__23345__auto__.call(null,p,v);
} else {
var m__23345__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__23345__auto____$1 == null))){
return m__23345__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args29127 = [];
var len__23747__auto___29252 = arguments.length;
var i__23748__auto___29253 = (0);
while(true){
if((i__23748__auto___29253 < len__23747__auto___29252)){
args29127.push((arguments[i__23748__auto___29253]));

var G__29254 = (i__23748__auto___29253 + (1));
i__23748__auto___29253 = G__29254;
continue;
} else {
}
break;
}

var G__29129 = args29127.length;
switch (G__29129) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29127.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__22689__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__22689__auto__)){
return or__22689__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__22689__auto__,mults){
return (function (p1__29126_SHARP_){
if(cljs.core.truth_(p1__29126_SHARP_.call(null,topic))){
return p1__29126_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29126_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__22689__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29130 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29130 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29131){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29131 = meta29131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29132,meta29131__$1){
var self__ = this;
var _29132__$1 = this;
return (new cljs.core.async.t_cljs$core$async29130(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29131__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29130.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29132){
var self__ = this;
var _29132__$1 = this;
return self__.meta29131;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29130.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29130.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29130.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async29130.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29130.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29130.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29130.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29130.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29131","meta29131",-244446234,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29130.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29130";

cljs.core.async.t_cljs$core$async29130.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__23287__auto__,writer__23288__auto__,opt__23289__auto__){
return cljs.core._write.call(null,writer__23288__auto__,"cljs.core.async/t_cljs$core$async29130");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29130 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29130(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29131){
return (new cljs.core.async.t_cljs$core$async29130(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29131));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29130(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25166__auto___29256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25166__auto___29256,mults,ensure_mult,p){
return (function (){
var f__25167__auto__ = (function (){var switch__25101__auto__ = ((function (c__25166__auto___29256,mults,ensure_mult,p){
return (function (state_29204){
var state_val_29205 = (state_29204[(1)]);
if((state_val_29205 === (7))){
var inst_29200 = (state_29204[(2)]);
var state_29204__$1 = state_29204;
var statearr_29206_29257 = state_29204__$1;
(statearr_29206_29257[(2)] = inst_29200);

(statearr_29206_29257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29205 === (20))){
var state_29204__$1 = state_29204;
var statearr_29207_29258 = state_29204__$1;
(statearr_29207_29258[(2)] = null);

(statearr_29207_29258[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29205 === (1))){
var state_29204__$1 = state_29204;
var statearr_29208_29259 = state_29204__$1;
(statearr_29208_29259[(2)] = null);

(statearr_29208_29259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29205 === (24))){
var inst_29183 = (state_29204[(7)]);
var inst_29192 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29183);
var state_29204__$1 = state_29204;
var statearr_29209_29260 = state_29204__$1;
(statearr_29209_29260[(2)] = inst_29192);

(statearr_29209_29260[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29205 === (4))){
var inst_29135 = (state_29204[(8)]);
var inst_29135__$1 = (state_29204[(2)]);
var inst_29136 = (inst_29135__$1 == null);
var state_29204__$1 = (function (){var statearr_29210 = state_29204;
(statearr_29210[(8)] = inst_29135__$1);

return statearr_29210;
})();
if(cljs.core.truth_(inst_29136)){
var statearr_29211_29261 = state_29204__$1;
(statearr_29211_29261[(1)] = (5));

} else {
var statearr_29212_29262 = state_29204__$1;
(statearr_29212_29262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29205 === (15))){
var inst_29177 = (state_29204[(2)]);
var state_29204__$1 = state_29204;
var statearr_29213_29263 = state_29204__$1;
(statearr_29213_29263[(2)] = inst_29177);

(statearr_29213_29263[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29205 === (21))){
var inst_29197 = (state_29204[(2)]);
var state_29204__$1 = (function (){var statearr_29214 = state_29204;
(statearr_29214[(9)] = inst_29197);

return statearr_29214;
})();
var statearr_29215_29264 = state_29204__$1;
(statearr_29215_29264[(2)] = null);

(statearr_29215_29264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29205 === (13))){
var inst_29159 = (state_29204[(10)]);
var inst_29161 = cljs.core.chunked_seq_QMARK_.call(null,inst_29159);
var state_29204__$1 = state_29204;
if(inst_29161){
var statearr_29216_29265 = state_29204__$1;
(statearr_29216_29265[(1)] = (16));

} else {
var statearr_29217_29266 = state_29204__$1;
(statearr_29217_29266[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29205 === (22))){
var inst_29189 = (state_29204[(2)]);
var state_29204__$1 = state_29204;
if(cljs.core.truth_(inst_29189)){
var statearr_29218_29267 = state_29204__$1;
(statearr_29218_29267[(1)] = (23));

} else {
var statearr_29219_29268 = state_29204__$1;
(statearr_29219_29268[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29205 === (6))){
var inst_29183 = (state_29204[(7)]);
var inst_29135 = (state_29204[(8)]);
var inst_29185 = (state_29204[(11)]);
var inst_29183__$1 = topic_fn.call(null,inst_29135);
var inst_29184 = cljs.core.deref.call(null,mults);
var inst_29185__$1 = cljs.core.get.call(null,inst_29184,inst_29183__$1);
var state_29204__$1 = (function (){var statearr_29220 = state_29204;
(statearr_29220[(7)] = inst_29183__$1);

(statearr_29220[(11)] = inst_29185__$1);

return statearr_29220;
})();
if(cljs.core.truth_(inst_29185__$1)){
var statearr_29221_29269 = state_29204__$1;
(statearr_29221_29269[(1)] = (19));

} else {
var statearr_29222_29270 = state_29204__$1;
(statearr_29222_29270[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29205 === (25))){
var inst_29194 = (state_29204[(2)]);
var state_29204__$1 = state_29204;
var statearr_29223_29271 = state_29204__$1;
(statearr_29223_29271[(2)] = inst_29194);

(statearr_29223_29271[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29205 === (17))){
var inst_29159 = (state_29204[(10)]);
var inst_29168 = cljs.core.first.call(null,inst_29159);
var inst_29169 = cljs.core.async.muxch_STAR_.call(null,inst_29168);
var inst_29170 = cljs.core.async.close_BANG_.call(null,inst_29169);
var inst_29171 = cljs.core.next.call(null,inst_29159);
var inst_29145 = inst_29171;
var inst_29146 = null;
var inst_29147 = (0);
var inst_29148 = (0);
var state_29204__$1 = (function (){var statearr_29224 = state_29204;
(statearr_29224[(12)] = inst_29147);

(statearr_29224[(13)] = inst_29146);

(statearr_29224[(14)] = inst_29148);

(statearr_29224[(15)] = inst_29145);

(statearr_29224[(16)] = inst_29170);

return statearr_29224;
})();
var statearr_29225_29272 = state_29204__$1;
(statearr_29225_29272[(2)] = null);

(statearr_29225_29272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29205 === (3))){
var inst_29202 = (state_29204[(2)]);
var state_29204__$1 = state_29204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29204__$1,inst_29202);
} else {
if((state_val_29205 === (12))){
var inst_29179 = (state_29204[(2)]);
var state_29204__$1 = state_29204;
var statearr_29226_29273 = state_29204__$1;
(statearr_29226_29273[(2)] = inst_29179);

(statearr_29226_29273[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29205 === (2))){
var state_29204__$1 = state_29204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29204__$1,(4),ch);
} else {
if((state_val_29205 === (23))){
var state_29204__$1 = state_29204;
var statearr_29227_29274 = state_29204__$1;
(statearr_29227_29274[(2)] = null);

(statearr_29227_29274[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29205 === (19))){
var inst_29135 = (state_29204[(8)]);
var inst_29185 = (state_29204[(11)]);
var inst_29187 = cljs.core.async.muxch_STAR_.call(null,inst_29185);
var state_29204__$1 = state_29204;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29204__$1,(22),inst_29187,inst_29135);
} else {
if((state_val_29205 === (11))){
var inst_29159 = (state_29204[(10)]);
var inst_29145 = (state_29204[(15)]);
var inst_29159__$1 = cljs.core.seq.call(null,inst_29145);
var state_29204__$1 = (function (){var statearr_29228 = state_29204;
(statearr_29228[(10)] = inst_29159__$1);

return statearr_29228;
})();
if(inst_29159__$1){
var statearr_29229_29275 = state_29204__$1;
(statearr_29229_29275[(1)] = (13));

} else {
var statearr_29230_29276 = state_29204__$1;
(statearr_29230_29276[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29205 === (9))){
var inst_29181 = (state_29204[(2)]);
var state_29204__$1 = state_29204;
var statearr_29231_29277 = state_29204__$1;
(statearr_29231_29277[(2)] = inst_29181);

(statearr_29231_29277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29205 === (5))){
var inst_29142 = cljs.core.deref.call(null,mults);
var inst_29143 = cljs.core.vals.call(null,inst_29142);
var inst_29144 = cljs.core.seq.call(null,inst_29143);
var inst_29145 = inst_29144;
var inst_29146 = null;
var inst_29147 = (0);
var inst_29148 = (0);
var state_29204__$1 = (function (){var statearr_29232 = state_29204;
(statearr_29232[(12)] = inst_29147);

(statearr_29232[(13)] = inst_29146);

(statearr_29232[(14)] = inst_29148);

(statearr_29232[(15)] = inst_29145);

return statearr_29232;
})();
var statearr_29233_29278 = state_29204__$1;
(statearr_29233_29278[(2)] = null);

(statearr_29233_29278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29205 === (14))){
var state_29204__$1 = state_29204;
var statearr_29237_29279 = state_29204__$1;
(statearr_29237_29279[(2)] = null);

(statearr_29237_29279[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29205 === (16))){
var inst_29159 = (state_29204[(10)]);
var inst_29163 = cljs.core.chunk_first.call(null,inst_29159);
var inst_29164 = cljs.core.chunk_rest.call(null,inst_29159);
var inst_29165 = cljs.core.count.call(null,inst_29163);
var inst_29145 = inst_29164;
var inst_29146 = inst_29163;
var inst_29147 = inst_29165;
var inst_29148 = (0);
var state_29204__$1 = (function (){var statearr_29238 = state_29204;
(statearr_29238[(12)] = inst_29147);

(statearr_29238[(13)] = inst_29146);

(statearr_29238[(14)] = inst_29148);

(statearr_29238[(15)] = inst_29145);

return statearr_29238;
})();
var statearr_29239_29280 = state_29204__$1;
(statearr_29239_29280[(2)] = null);

(statearr_29239_29280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29205 === (10))){
var inst_29147 = (state_29204[(12)]);
var inst_29146 = (state_29204[(13)]);
var inst_29148 = (state_29204[(14)]);
var inst_29145 = (state_29204[(15)]);
var inst_29153 = cljs.core._nth.call(null,inst_29146,inst_29148);
var inst_29154 = cljs.core.async.muxch_STAR_.call(null,inst_29153);
var inst_29155 = cljs.core.async.close_BANG_.call(null,inst_29154);
var inst_29156 = (inst_29148 + (1));
var tmp29234 = inst_29147;
var tmp29235 = inst_29146;
var tmp29236 = inst_29145;
var inst_29145__$1 = tmp29236;
var inst_29146__$1 = tmp29235;
var inst_29147__$1 = tmp29234;
var inst_29148__$1 = inst_29156;
var state_29204__$1 = (function (){var statearr_29240 = state_29204;
(statearr_29240[(17)] = inst_29155);

(statearr_29240[(12)] = inst_29147__$1);

(statearr_29240[(13)] = inst_29146__$1);

(statearr_29240[(14)] = inst_29148__$1);

(statearr_29240[(15)] = inst_29145__$1);

return statearr_29240;
})();
var statearr_29241_29281 = state_29204__$1;
(statearr_29241_29281[(2)] = null);

(statearr_29241_29281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29205 === (18))){
var inst_29174 = (state_29204[(2)]);
var state_29204__$1 = state_29204;
var statearr_29242_29282 = state_29204__$1;
(statearr_29242_29282[(2)] = inst_29174);

(statearr_29242_29282[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29205 === (8))){
var inst_29147 = (state_29204[(12)]);
var inst_29148 = (state_29204[(14)]);
var inst_29150 = (inst_29148 < inst_29147);
var inst_29151 = inst_29150;
var state_29204__$1 = state_29204;
if(cljs.core.truth_(inst_29151)){
var statearr_29243_29283 = state_29204__$1;
(statearr_29243_29283[(1)] = (10));

} else {
var statearr_29244_29284 = state_29204__$1;
(statearr_29244_29284[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25166__auto___29256,mults,ensure_mult,p))
;
return ((function (switch__25101__auto__,c__25166__auto___29256,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25102__auto__ = null;
var cljs$core$async$state_machine__25102__auto____0 = (function (){
var statearr_29248 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29248[(0)] = cljs$core$async$state_machine__25102__auto__);

(statearr_29248[(1)] = (1));

return statearr_29248;
});
var cljs$core$async$state_machine__25102__auto____1 = (function (state_29204){
while(true){
var ret_value__25103__auto__ = (function (){try{while(true){
var result__25104__auto__ = switch__25101__auto__.call(null,state_29204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25104__auto__;
}
break;
}
}catch (e29249){if((e29249 instanceof Object)){
var ex__25105__auto__ = e29249;
var statearr_29250_29285 = state_29204;
(statearr_29250_29285[(5)] = ex__25105__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29286 = state_29204;
state_29204 = G__29286;
continue;
} else {
return ret_value__25103__auto__;
}
break;
}
});
cljs$core$async$state_machine__25102__auto__ = function(state_29204){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25102__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25102__auto____1.call(this,state_29204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25102__auto____0;
cljs$core$async$state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25102__auto____1;
return cljs$core$async$state_machine__25102__auto__;
})()
;})(switch__25101__auto__,c__25166__auto___29256,mults,ensure_mult,p))
})();
var state__25168__auto__ = (function (){var statearr_29251 = f__25167__auto__.call(null);
(statearr_29251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25166__auto___29256);

return statearr_29251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25168__auto__);
});})(c__25166__auto___29256,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args29287 = [];
var len__23747__auto___29290 = arguments.length;
var i__23748__auto___29291 = (0);
while(true){
if((i__23748__auto___29291 < len__23747__auto___29290)){
args29287.push((arguments[i__23748__auto___29291]));

var G__29292 = (i__23748__auto___29291 + (1));
i__23748__auto___29291 = G__29292;
continue;
} else {
}
break;
}

var G__29289 = args29287.length;
switch (G__29289) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29287.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args29294 = [];
var len__23747__auto___29297 = arguments.length;
var i__23748__auto___29298 = (0);
while(true){
if((i__23748__auto___29298 < len__23747__auto___29297)){
args29294.push((arguments[i__23748__auto___29298]));

var G__29299 = (i__23748__auto___29298 + (1));
i__23748__auto___29298 = G__29299;
continue;
} else {
}
break;
}

var G__29296 = args29294.length;
switch (G__29296) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29294.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args29301 = [];
var len__23747__auto___29372 = arguments.length;
var i__23748__auto___29373 = (0);
while(true){
if((i__23748__auto___29373 < len__23747__auto___29372)){
args29301.push((arguments[i__23748__auto___29373]));

var G__29374 = (i__23748__auto___29373 + (1));
i__23748__auto___29373 = G__29374;
continue;
} else {
}
break;
}

var G__29303 = args29301.length;
switch (G__29303) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29301.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__25166__auto___29376 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25166__auto___29376,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25167__auto__ = (function (){var switch__25101__auto__ = ((function (c__25166__auto___29376,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29342){
var state_val_29343 = (state_29342[(1)]);
if((state_val_29343 === (7))){
var state_29342__$1 = state_29342;
var statearr_29344_29377 = state_29342__$1;
(statearr_29344_29377[(2)] = null);

(statearr_29344_29377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29343 === (1))){
var state_29342__$1 = state_29342;
var statearr_29345_29378 = state_29342__$1;
(statearr_29345_29378[(2)] = null);

(statearr_29345_29378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29343 === (4))){
var inst_29306 = (state_29342[(7)]);
var inst_29308 = (inst_29306 < cnt);
var state_29342__$1 = state_29342;
if(cljs.core.truth_(inst_29308)){
var statearr_29346_29379 = state_29342__$1;
(statearr_29346_29379[(1)] = (6));

} else {
var statearr_29347_29380 = state_29342__$1;
(statearr_29347_29380[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29343 === (15))){
var inst_29338 = (state_29342[(2)]);
var state_29342__$1 = state_29342;
var statearr_29348_29381 = state_29342__$1;
(statearr_29348_29381[(2)] = inst_29338);

(statearr_29348_29381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29343 === (13))){
var inst_29331 = cljs.core.async.close_BANG_.call(null,out);
var state_29342__$1 = state_29342;
var statearr_29349_29382 = state_29342__$1;
(statearr_29349_29382[(2)] = inst_29331);

(statearr_29349_29382[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29343 === (6))){
var state_29342__$1 = state_29342;
var statearr_29350_29383 = state_29342__$1;
(statearr_29350_29383[(2)] = null);

(statearr_29350_29383[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29343 === (3))){
var inst_29340 = (state_29342[(2)]);
var state_29342__$1 = state_29342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29342__$1,inst_29340);
} else {
if((state_val_29343 === (12))){
var inst_29328 = (state_29342[(8)]);
var inst_29328__$1 = (state_29342[(2)]);
var inst_29329 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29328__$1);
var state_29342__$1 = (function (){var statearr_29351 = state_29342;
(statearr_29351[(8)] = inst_29328__$1);

return statearr_29351;
})();
if(cljs.core.truth_(inst_29329)){
var statearr_29352_29384 = state_29342__$1;
(statearr_29352_29384[(1)] = (13));

} else {
var statearr_29353_29385 = state_29342__$1;
(statearr_29353_29385[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29343 === (2))){
var inst_29305 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29306 = (0);
var state_29342__$1 = (function (){var statearr_29354 = state_29342;
(statearr_29354[(7)] = inst_29306);

(statearr_29354[(9)] = inst_29305);

return statearr_29354;
})();
var statearr_29355_29386 = state_29342__$1;
(statearr_29355_29386[(2)] = null);

(statearr_29355_29386[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29343 === (11))){
var inst_29306 = (state_29342[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29342,(10),Object,null,(9));
var inst_29315 = chs__$1.call(null,inst_29306);
var inst_29316 = done.call(null,inst_29306);
var inst_29317 = cljs.core.async.take_BANG_.call(null,inst_29315,inst_29316);
var state_29342__$1 = state_29342;
var statearr_29356_29387 = state_29342__$1;
(statearr_29356_29387[(2)] = inst_29317);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29342__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29343 === (9))){
var inst_29306 = (state_29342[(7)]);
var inst_29319 = (state_29342[(2)]);
var inst_29320 = (inst_29306 + (1));
var inst_29306__$1 = inst_29320;
var state_29342__$1 = (function (){var statearr_29357 = state_29342;
(statearr_29357[(7)] = inst_29306__$1);

(statearr_29357[(10)] = inst_29319);

return statearr_29357;
})();
var statearr_29358_29388 = state_29342__$1;
(statearr_29358_29388[(2)] = null);

(statearr_29358_29388[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29343 === (5))){
var inst_29326 = (state_29342[(2)]);
var state_29342__$1 = (function (){var statearr_29359 = state_29342;
(statearr_29359[(11)] = inst_29326);

return statearr_29359;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29342__$1,(12),dchan);
} else {
if((state_val_29343 === (14))){
var inst_29328 = (state_29342[(8)]);
var inst_29333 = cljs.core.apply.call(null,f,inst_29328);
var state_29342__$1 = state_29342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29342__$1,(16),out,inst_29333);
} else {
if((state_val_29343 === (16))){
var inst_29335 = (state_29342[(2)]);
var state_29342__$1 = (function (){var statearr_29360 = state_29342;
(statearr_29360[(12)] = inst_29335);

return statearr_29360;
})();
var statearr_29361_29389 = state_29342__$1;
(statearr_29361_29389[(2)] = null);

(statearr_29361_29389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29343 === (10))){
var inst_29310 = (state_29342[(2)]);
var inst_29311 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29342__$1 = (function (){var statearr_29362 = state_29342;
(statearr_29362[(13)] = inst_29310);

return statearr_29362;
})();
var statearr_29363_29390 = state_29342__$1;
(statearr_29363_29390[(2)] = inst_29311);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29342__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29343 === (8))){
var inst_29324 = (state_29342[(2)]);
var state_29342__$1 = state_29342;
var statearr_29364_29391 = state_29342__$1;
(statearr_29364_29391[(2)] = inst_29324);

(statearr_29364_29391[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25166__auto___29376,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25101__auto__,c__25166__auto___29376,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25102__auto__ = null;
var cljs$core$async$state_machine__25102__auto____0 = (function (){
var statearr_29368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29368[(0)] = cljs$core$async$state_machine__25102__auto__);

(statearr_29368[(1)] = (1));

return statearr_29368;
});
var cljs$core$async$state_machine__25102__auto____1 = (function (state_29342){
while(true){
var ret_value__25103__auto__ = (function (){try{while(true){
var result__25104__auto__ = switch__25101__auto__.call(null,state_29342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25104__auto__;
}
break;
}
}catch (e29369){if((e29369 instanceof Object)){
var ex__25105__auto__ = e29369;
var statearr_29370_29392 = state_29342;
(statearr_29370_29392[(5)] = ex__25105__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29393 = state_29342;
state_29342 = G__29393;
continue;
} else {
return ret_value__25103__auto__;
}
break;
}
});
cljs$core$async$state_machine__25102__auto__ = function(state_29342){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25102__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25102__auto____1.call(this,state_29342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25102__auto____0;
cljs$core$async$state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25102__auto____1;
return cljs$core$async$state_machine__25102__auto__;
})()
;})(switch__25101__auto__,c__25166__auto___29376,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25168__auto__ = (function (){var statearr_29371 = f__25167__auto__.call(null);
(statearr_29371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25166__auto___29376);

return statearr_29371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25168__auto__);
});})(c__25166__auto___29376,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29395 = [];
var len__23747__auto___29451 = arguments.length;
var i__23748__auto___29452 = (0);
while(true){
if((i__23748__auto___29452 < len__23747__auto___29451)){
args29395.push((arguments[i__23748__auto___29452]));

var G__29453 = (i__23748__auto___29452 + (1));
i__23748__auto___29452 = G__29453;
continue;
} else {
}
break;
}

var G__29397 = args29395.length;
switch (G__29397) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29395.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25166__auto___29455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25166__auto___29455,out){
return (function (){
var f__25167__auto__ = (function (){var switch__25101__auto__ = ((function (c__25166__auto___29455,out){
return (function (state_29427){
var state_val_29428 = (state_29427[(1)]);
if((state_val_29428 === (7))){
var inst_29407 = (state_29427[(7)]);
var inst_29406 = (state_29427[(8)]);
var inst_29406__$1 = (state_29427[(2)]);
var inst_29407__$1 = cljs.core.nth.call(null,inst_29406__$1,(0),null);
var inst_29408 = cljs.core.nth.call(null,inst_29406__$1,(1),null);
var inst_29409 = (inst_29407__$1 == null);
var state_29427__$1 = (function (){var statearr_29429 = state_29427;
(statearr_29429[(7)] = inst_29407__$1);

(statearr_29429[(9)] = inst_29408);

(statearr_29429[(8)] = inst_29406__$1);

return statearr_29429;
})();
if(cljs.core.truth_(inst_29409)){
var statearr_29430_29456 = state_29427__$1;
(statearr_29430_29456[(1)] = (8));

} else {
var statearr_29431_29457 = state_29427__$1;
(statearr_29431_29457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29428 === (1))){
var inst_29398 = cljs.core.vec.call(null,chs);
var inst_29399 = inst_29398;
var state_29427__$1 = (function (){var statearr_29432 = state_29427;
(statearr_29432[(10)] = inst_29399);

return statearr_29432;
})();
var statearr_29433_29458 = state_29427__$1;
(statearr_29433_29458[(2)] = null);

(statearr_29433_29458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29428 === (4))){
var inst_29399 = (state_29427[(10)]);
var state_29427__$1 = state_29427;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29427__$1,(7),inst_29399);
} else {
if((state_val_29428 === (6))){
var inst_29423 = (state_29427[(2)]);
var state_29427__$1 = state_29427;
var statearr_29434_29459 = state_29427__$1;
(statearr_29434_29459[(2)] = inst_29423);

(statearr_29434_29459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29428 === (3))){
var inst_29425 = (state_29427[(2)]);
var state_29427__$1 = state_29427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29427__$1,inst_29425);
} else {
if((state_val_29428 === (2))){
var inst_29399 = (state_29427[(10)]);
var inst_29401 = cljs.core.count.call(null,inst_29399);
var inst_29402 = (inst_29401 > (0));
var state_29427__$1 = state_29427;
if(cljs.core.truth_(inst_29402)){
var statearr_29436_29460 = state_29427__$1;
(statearr_29436_29460[(1)] = (4));

} else {
var statearr_29437_29461 = state_29427__$1;
(statearr_29437_29461[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29428 === (11))){
var inst_29399 = (state_29427[(10)]);
var inst_29416 = (state_29427[(2)]);
var tmp29435 = inst_29399;
var inst_29399__$1 = tmp29435;
var state_29427__$1 = (function (){var statearr_29438 = state_29427;
(statearr_29438[(10)] = inst_29399__$1);

(statearr_29438[(11)] = inst_29416);

return statearr_29438;
})();
var statearr_29439_29462 = state_29427__$1;
(statearr_29439_29462[(2)] = null);

(statearr_29439_29462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29428 === (9))){
var inst_29407 = (state_29427[(7)]);
var state_29427__$1 = state_29427;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29427__$1,(11),out,inst_29407);
} else {
if((state_val_29428 === (5))){
var inst_29421 = cljs.core.async.close_BANG_.call(null,out);
var state_29427__$1 = state_29427;
var statearr_29440_29463 = state_29427__$1;
(statearr_29440_29463[(2)] = inst_29421);

(statearr_29440_29463[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29428 === (10))){
var inst_29419 = (state_29427[(2)]);
var state_29427__$1 = state_29427;
var statearr_29441_29464 = state_29427__$1;
(statearr_29441_29464[(2)] = inst_29419);

(statearr_29441_29464[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29428 === (8))){
var inst_29407 = (state_29427[(7)]);
var inst_29408 = (state_29427[(9)]);
var inst_29399 = (state_29427[(10)]);
var inst_29406 = (state_29427[(8)]);
var inst_29411 = (function (){var cs = inst_29399;
var vec__29404 = inst_29406;
var v = inst_29407;
var c = inst_29408;
return ((function (cs,vec__29404,v,c,inst_29407,inst_29408,inst_29399,inst_29406,state_val_29428,c__25166__auto___29455,out){
return (function (p1__29394_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29394_SHARP_);
});
;})(cs,vec__29404,v,c,inst_29407,inst_29408,inst_29399,inst_29406,state_val_29428,c__25166__auto___29455,out))
})();
var inst_29412 = cljs.core.filterv.call(null,inst_29411,inst_29399);
var inst_29399__$1 = inst_29412;
var state_29427__$1 = (function (){var statearr_29442 = state_29427;
(statearr_29442[(10)] = inst_29399__$1);

return statearr_29442;
})();
var statearr_29443_29465 = state_29427__$1;
(statearr_29443_29465[(2)] = null);

(statearr_29443_29465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__25166__auto___29455,out))
;
return ((function (switch__25101__auto__,c__25166__auto___29455,out){
return (function() {
var cljs$core$async$state_machine__25102__auto__ = null;
var cljs$core$async$state_machine__25102__auto____0 = (function (){
var statearr_29447 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29447[(0)] = cljs$core$async$state_machine__25102__auto__);

(statearr_29447[(1)] = (1));

return statearr_29447;
});
var cljs$core$async$state_machine__25102__auto____1 = (function (state_29427){
while(true){
var ret_value__25103__auto__ = (function (){try{while(true){
var result__25104__auto__ = switch__25101__auto__.call(null,state_29427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25104__auto__;
}
break;
}
}catch (e29448){if((e29448 instanceof Object)){
var ex__25105__auto__ = e29448;
var statearr_29449_29466 = state_29427;
(statearr_29449_29466[(5)] = ex__25105__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29467 = state_29427;
state_29427 = G__29467;
continue;
} else {
return ret_value__25103__auto__;
}
break;
}
});
cljs$core$async$state_machine__25102__auto__ = function(state_29427){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25102__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25102__auto____1.call(this,state_29427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25102__auto____0;
cljs$core$async$state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25102__auto____1;
return cljs$core$async$state_machine__25102__auto__;
})()
;})(switch__25101__auto__,c__25166__auto___29455,out))
})();
var state__25168__auto__ = (function (){var statearr_29450 = f__25167__auto__.call(null);
(statearr_29450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25166__auto___29455);

return statearr_29450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25168__auto__);
});})(c__25166__auto___29455,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args29468 = [];
var len__23747__auto___29517 = arguments.length;
var i__23748__auto___29518 = (0);
while(true){
if((i__23748__auto___29518 < len__23747__auto___29517)){
args29468.push((arguments[i__23748__auto___29518]));

var G__29519 = (i__23748__auto___29518 + (1));
i__23748__auto___29518 = G__29519;
continue;
} else {
}
break;
}

var G__29470 = args29468.length;
switch (G__29470) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29468.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25166__auto___29521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25166__auto___29521,out){
return (function (){
var f__25167__auto__ = (function (){var switch__25101__auto__ = ((function (c__25166__auto___29521,out){
return (function (state_29494){
var state_val_29495 = (state_29494[(1)]);
if((state_val_29495 === (7))){
var inst_29476 = (state_29494[(7)]);
var inst_29476__$1 = (state_29494[(2)]);
var inst_29477 = (inst_29476__$1 == null);
var inst_29478 = cljs.core.not.call(null,inst_29477);
var state_29494__$1 = (function (){var statearr_29496 = state_29494;
(statearr_29496[(7)] = inst_29476__$1);

return statearr_29496;
})();
if(inst_29478){
var statearr_29497_29522 = state_29494__$1;
(statearr_29497_29522[(1)] = (8));

} else {
var statearr_29498_29523 = state_29494__$1;
(statearr_29498_29523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29495 === (1))){
var inst_29471 = (0);
var state_29494__$1 = (function (){var statearr_29499 = state_29494;
(statearr_29499[(8)] = inst_29471);

return statearr_29499;
})();
var statearr_29500_29524 = state_29494__$1;
(statearr_29500_29524[(2)] = null);

(statearr_29500_29524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29495 === (4))){
var state_29494__$1 = state_29494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29494__$1,(7),ch);
} else {
if((state_val_29495 === (6))){
var inst_29489 = (state_29494[(2)]);
var state_29494__$1 = state_29494;
var statearr_29501_29525 = state_29494__$1;
(statearr_29501_29525[(2)] = inst_29489);

(statearr_29501_29525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29495 === (3))){
var inst_29491 = (state_29494[(2)]);
var inst_29492 = cljs.core.async.close_BANG_.call(null,out);
var state_29494__$1 = (function (){var statearr_29502 = state_29494;
(statearr_29502[(9)] = inst_29491);

return statearr_29502;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29494__$1,inst_29492);
} else {
if((state_val_29495 === (2))){
var inst_29471 = (state_29494[(8)]);
var inst_29473 = (inst_29471 < n);
var state_29494__$1 = state_29494;
if(cljs.core.truth_(inst_29473)){
var statearr_29503_29526 = state_29494__$1;
(statearr_29503_29526[(1)] = (4));

} else {
var statearr_29504_29527 = state_29494__$1;
(statearr_29504_29527[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29495 === (11))){
var inst_29471 = (state_29494[(8)]);
var inst_29481 = (state_29494[(2)]);
var inst_29482 = (inst_29471 + (1));
var inst_29471__$1 = inst_29482;
var state_29494__$1 = (function (){var statearr_29505 = state_29494;
(statearr_29505[(8)] = inst_29471__$1);

(statearr_29505[(10)] = inst_29481);

return statearr_29505;
})();
var statearr_29506_29528 = state_29494__$1;
(statearr_29506_29528[(2)] = null);

(statearr_29506_29528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29495 === (9))){
var state_29494__$1 = state_29494;
var statearr_29507_29529 = state_29494__$1;
(statearr_29507_29529[(2)] = null);

(statearr_29507_29529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29495 === (5))){
var state_29494__$1 = state_29494;
var statearr_29508_29530 = state_29494__$1;
(statearr_29508_29530[(2)] = null);

(statearr_29508_29530[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29495 === (10))){
var inst_29486 = (state_29494[(2)]);
var state_29494__$1 = state_29494;
var statearr_29509_29531 = state_29494__$1;
(statearr_29509_29531[(2)] = inst_29486);

(statearr_29509_29531[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29495 === (8))){
var inst_29476 = (state_29494[(7)]);
var state_29494__$1 = state_29494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29494__$1,(11),out,inst_29476);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__25166__auto___29521,out))
;
return ((function (switch__25101__auto__,c__25166__auto___29521,out){
return (function() {
var cljs$core$async$state_machine__25102__auto__ = null;
var cljs$core$async$state_machine__25102__auto____0 = (function (){
var statearr_29513 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29513[(0)] = cljs$core$async$state_machine__25102__auto__);

(statearr_29513[(1)] = (1));

return statearr_29513;
});
var cljs$core$async$state_machine__25102__auto____1 = (function (state_29494){
while(true){
var ret_value__25103__auto__ = (function (){try{while(true){
var result__25104__auto__ = switch__25101__auto__.call(null,state_29494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25104__auto__;
}
break;
}
}catch (e29514){if((e29514 instanceof Object)){
var ex__25105__auto__ = e29514;
var statearr_29515_29532 = state_29494;
(statearr_29515_29532[(5)] = ex__25105__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29533 = state_29494;
state_29494 = G__29533;
continue;
} else {
return ret_value__25103__auto__;
}
break;
}
});
cljs$core$async$state_machine__25102__auto__ = function(state_29494){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25102__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25102__auto____1.call(this,state_29494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25102__auto____0;
cljs$core$async$state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25102__auto____1;
return cljs$core$async$state_machine__25102__auto__;
})()
;})(switch__25101__auto__,c__25166__auto___29521,out))
})();
var state__25168__auto__ = (function (){var statearr_29516 = f__25167__auto__.call(null);
(statearr_29516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25166__auto___29521);

return statearr_29516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25168__auto__);
});})(c__25166__auto___29521,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29541 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29541 = (function (map_LT_,f,ch,meta29542){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29542 = meta29542;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29543,meta29542__$1){
var self__ = this;
var _29543__$1 = this;
return (new cljs.core.async.t_cljs$core$async29541(self__.map_LT_,self__.f,self__.ch,meta29542__$1));
});

cljs.core.async.t_cljs$core$async29541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29543){
var self__ = this;
var _29543__$1 = this;
return self__.meta29542;
});

cljs.core.async.t_cljs$core$async29541.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29541.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29541.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29541.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29541.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29544 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29544 = (function (map_LT_,f,ch,meta29542,_,fn1,meta29545){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29542 = meta29542;
this._ = _;
this.fn1 = fn1;
this.meta29545 = meta29545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29546,meta29545__$1){
var self__ = this;
var _29546__$1 = this;
return (new cljs.core.async.t_cljs$core$async29544(self__.map_LT_,self__.f,self__.ch,self__.meta29542,self__._,self__.fn1,meta29545__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29544.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29546){
var self__ = this;
var _29546__$1 = this;
return self__.meta29545;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29544.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29544.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29544.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29534_SHARP_){
return f1.call(null,(((p1__29534_SHARP_ == null))?null:self__.f.call(null,p1__29534_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29544.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29542","meta29542",1128351920,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29541","cljs.core.async/t_cljs$core$async29541",1479515040,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29545","meta29545",2144876896,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29544.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29544.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29544";

cljs.core.async.t_cljs$core$async29544.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__23287__auto__,writer__23288__auto__,opt__23289__auto__){
return cljs.core._write.call(null,writer__23288__auto__,"cljs.core.async/t_cljs$core$async29544");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29544 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29544(map_LT___$1,f__$1,ch__$1,meta29542__$1,___$2,fn1__$1,meta29545){
return (new cljs.core.async.t_cljs$core$async29544(map_LT___$1,f__$1,ch__$1,meta29542__$1,___$2,fn1__$1,meta29545));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29544(self__.map_LT_,self__.f,self__.ch,self__.meta29542,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__22677__auto__ = ret;
if(cljs.core.truth_(and__22677__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__22677__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29541.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29541.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29541.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29542","meta29542",1128351920,null)], null);
});

cljs.core.async.t_cljs$core$async29541.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29541.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29541";

cljs.core.async.t_cljs$core$async29541.cljs$lang$ctorPrWriter = (function (this__23287__auto__,writer__23288__auto__,opt__23289__auto__){
return cljs.core._write.call(null,writer__23288__auto__,"cljs.core.async/t_cljs$core$async29541");
});

cljs.core.async.__GT_t_cljs$core$async29541 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29541(map_LT___$1,f__$1,ch__$1,meta29542){
return (new cljs.core.async.t_cljs$core$async29541(map_LT___$1,f__$1,ch__$1,meta29542));
});

}

return (new cljs.core.async.t_cljs$core$async29541(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29550 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29550 = (function (map_GT_,f,ch,meta29551){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29551 = meta29551;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29552,meta29551__$1){
var self__ = this;
var _29552__$1 = this;
return (new cljs.core.async.t_cljs$core$async29550(self__.map_GT_,self__.f,self__.ch,meta29551__$1));
});

cljs.core.async.t_cljs$core$async29550.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29552){
var self__ = this;
var _29552__$1 = this;
return self__.meta29551;
});

cljs.core.async.t_cljs$core$async29550.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29550.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29550.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29550.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29550.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29550.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29550.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29551","meta29551",1790508543,null)], null);
});

cljs.core.async.t_cljs$core$async29550.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29550.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29550";

cljs.core.async.t_cljs$core$async29550.cljs$lang$ctorPrWriter = (function (this__23287__auto__,writer__23288__auto__,opt__23289__auto__){
return cljs.core._write.call(null,writer__23288__auto__,"cljs.core.async/t_cljs$core$async29550");
});

cljs.core.async.__GT_t_cljs$core$async29550 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29550(map_GT___$1,f__$1,ch__$1,meta29551){
return (new cljs.core.async.t_cljs$core$async29550(map_GT___$1,f__$1,ch__$1,meta29551));
});

}

return (new cljs.core.async.t_cljs$core$async29550(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29556 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29556 = (function (filter_GT_,p,ch,meta29557){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29557 = meta29557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29558,meta29557__$1){
var self__ = this;
var _29558__$1 = this;
return (new cljs.core.async.t_cljs$core$async29556(self__.filter_GT_,self__.p,self__.ch,meta29557__$1));
});

cljs.core.async.t_cljs$core$async29556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29558){
var self__ = this;
var _29558__$1 = this;
return self__.meta29557;
});

cljs.core.async.t_cljs$core$async29556.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29556.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29556.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29556.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29556.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29556.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29556.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29556.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29557","meta29557",-1726701423,null)], null);
});

cljs.core.async.t_cljs$core$async29556.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29556.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29556";

cljs.core.async.t_cljs$core$async29556.cljs$lang$ctorPrWriter = (function (this__23287__auto__,writer__23288__auto__,opt__23289__auto__){
return cljs.core._write.call(null,writer__23288__auto__,"cljs.core.async/t_cljs$core$async29556");
});

cljs.core.async.__GT_t_cljs$core$async29556 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29556(filter_GT___$1,p__$1,ch__$1,meta29557){
return (new cljs.core.async.t_cljs$core$async29556(filter_GT___$1,p__$1,ch__$1,meta29557));
});

}

return (new cljs.core.async.t_cljs$core$async29556(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args29559 = [];
var len__23747__auto___29603 = arguments.length;
var i__23748__auto___29604 = (0);
while(true){
if((i__23748__auto___29604 < len__23747__auto___29603)){
args29559.push((arguments[i__23748__auto___29604]));

var G__29605 = (i__23748__auto___29604 + (1));
i__23748__auto___29604 = G__29605;
continue;
} else {
}
break;
}

var G__29561 = args29559.length;
switch (G__29561) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29559.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25166__auto___29607 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25166__auto___29607,out){
return (function (){
var f__25167__auto__ = (function (){var switch__25101__auto__ = ((function (c__25166__auto___29607,out){
return (function (state_29582){
var state_val_29583 = (state_29582[(1)]);
if((state_val_29583 === (7))){
var inst_29578 = (state_29582[(2)]);
var state_29582__$1 = state_29582;
var statearr_29584_29608 = state_29582__$1;
(statearr_29584_29608[(2)] = inst_29578);

(statearr_29584_29608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29583 === (1))){
var state_29582__$1 = state_29582;
var statearr_29585_29609 = state_29582__$1;
(statearr_29585_29609[(2)] = null);

(statearr_29585_29609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29583 === (4))){
var inst_29564 = (state_29582[(7)]);
var inst_29564__$1 = (state_29582[(2)]);
var inst_29565 = (inst_29564__$1 == null);
var state_29582__$1 = (function (){var statearr_29586 = state_29582;
(statearr_29586[(7)] = inst_29564__$1);

return statearr_29586;
})();
if(cljs.core.truth_(inst_29565)){
var statearr_29587_29610 = state_29582__$1;
(statearr_29587_29610[(1)] = (5));

} else {
var statearr_29588_29611 = state_29582__$1;
(statearr_29588_29611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29583 === (6))){
var inst_29564 = (state_29582[(7)]);
var inst_29569 = p.call(null,inst_29564);
var state_29582__$1 = state_29582;
if(cljs.core.truth_(inst_29569)){
var statearr_29589_29612 = state_29582__$1;
(statearr_29589_29612[(1)] = (8));

} else {
var statearr_29590_29613 = state_29582__$1;
(statearr_29590_29613[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29583 === (3))){
var inst_29580 = (state_29582[(2)]);
var state_29582__$1 = state_29582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29582__$1,inst_29580);
} else {
if((state_val_29583 === (2))){
var state_29582__$1 = state_29582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29582__$1,(4),ch);
} else {
if((state_val_29583 === (11))){
var inst_29572 = (state_29582[(2)]);
var state_29582__$1 = state_29582;
var statearr_29591_29614 = state_29582__$1;
(statearr_29591_29614[(2)] = inst_29572);

(statearr_29591_29614[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29583 === (9))){
var state_29582__$1 = state_29582;
var statearr_29592_29615 = state_29582__$1;
(statearr_29592_29615[(2)] = null);

(statearr_29592_29615[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29583 === (5))){
var inst_29567 = cljs.core.async.close_BANG_.call(null,out);
var state_29582__$1 = state_29582;
var statearr_29593_29616 = state_29582__$1;
(statearr_29593_29616[(2)] = inst_29567);

(statearr_29593_29616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29583 === (10))){
var inst_29575 = (state_29582[(2)]);
var state_29582__$1 = (function (){var statearr_29594 = state_29582;
(statearr_29594[(8)] = inst_29575);

return statearr_29594;
})();
var statearr_29595_29617 = state_29582__$1;
(statearr_29595_29617[(2)] = null);

(statearr_29595_29617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29583 === (8))){
var inst_29564 = (state_29582[(7)]);
var state_29582__$1 = state_29582;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29582__$1,(11),out,inst_29564);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__25166__auto___29607,out))
;
return ((function (switch__25101__auto__,c__25166__auto___29607,out){
return (function() {
var cljs$core$async$state_machine__25102__auto__ = null;
var cljs$core$async$state_machine__25102__auto____0 = (function (){
var statearr_29599 = [null,null,null,null,null,null,null,null,null];
(statearr_29599[(0)] = cljs$core$async$state_machine__25102__auto__);

(statearr_29599[(1)] = (1));

return statearr_29599;
});
var cljs$core$async$state_machine__25102__auto____1 = (function (state_29582){
while(true){
var ret_value__25103__auto__ = (function (){try{while(true){
var result__25104__auto__ = switch__25101__auto__.call(null,state_29582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25104__auto__;
}
break;
}
}catch (e29600){if((e29600 instanceof Object)){
var ex__25105__auto__ = e29600;
var statearr_29601_29618 = state_29582;
(statearr_29601_29618[(5)] = ex__25105__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29619 = state_29582;
state_29582 = G__29619;
continue;
} else {
return ret_value__25103__auto__;
}
break;
}
});
cljs$core$async$state_machine__25102__auto__ = function(state_29582){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25102__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25102__auto____1.call(this,state_29582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25102__auto____0;
cljs$core$async$state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25102__auto____1;
return cljs$core$async$state_machine__25102__auto__;
})()
;})(switch__25101__auto__,c__25166__auto___29607,out))
})();
var state__25168__auto__ = (function (){var statearr_29602 = f__25167__auto__.call(null);
(statearr_29602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25166__auto___29607);

return statearr_29602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25168__auto__);
});})(c__25166__auto___29607,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29620 = [];
var len__23747__auto___29623 = arguments.length;
var i__23748__auto___29624 = (0);
while(true){
if((i__23748__auto___29624 < len__23747__auto___29623)){
args29620.push((arguments[i__23748__auto___29624]));

var G__29625 = (i__23748__auto___29624 + (1));
i__23748__auto___29624 = G__29625;
continue;
} else {
}
break;
}

var G__29622 = args29620.length;
switch (G__29622) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29620.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__25166__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25166__auto__){
return (function (){
var f__25167__auto__ = (function (){var switch__25101__auto__ = ((function (c__25166__auto__){
return (function (state_29792){
var state_val_29793 = (state_29792[(1)]);
if((state_val_29793 === (7))){
var inst_29788 = (state_29792[(2)]);
var state_29792__$1 = state_29792;
var statearr_29794_29835 = state_29792__$1;
(statearr_29794_29835[(2)] = inst_29788);

(statearr_29794_29835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29793 === (20))){
var inst_29758 = (state_29792[(7)]);
var inst_29769 = (state_29792[(2)]);
var inst_29770 = cljs.core.next.call(null,inst_29758);
var inst_29744 = inst_29770;
var inst_29745 = null;
var inst_29746 = (0);
var inst_29747 = (0);
var state_29792__$1 = (function (){var statearr_29795 = state_29792;
(statearr_29795[(8)] = inst_29746);

(statearr_29795[(9)] = inst_29769);

(statearr_29795[(10)] = inst_29744);

(statearr_29795[(11)] = inst_29747);

(statearr_29795[(12)] = inst_29745);

return statearr_29795;
})();
var statearr_29796_29836 = state_29792__$1;
(statearr_29796_29836[(2)] = null);

(statearr_29796_29836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29793 === (1))){
var state_29792__$1 = state_29792;
var statearr_29797_29837 = state_29792__$1;
(statearr_29797_29837[(2)] = null);

(statearr_29797_29837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29793 === (4))){
var inst_29733 = (state_29792[(13)]);
var inst_29733__$1 = (state_29792[(2)]);
var inst_29734 = (inst_29733__$1 == null);
var state_29792__$1 = (function (){var statearr_29798 = state_29792;
(statearr_29798[(13)] = inst_29733__$1);

return statearr_29798;
})();
if(cljs.core.truth_(inst_29734)){
var statearr_29799_29838 = state_29792__$1;
(statearr_29799_29838[(1)] = (5));

} else {
var statearr_29800_29839 = state_29792__$1;
(statearr_29800_29839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29793 === (15))){
var state_29792__$1 = state_29792;
var statearr_29804_29840 = state_29792__$1;
(statearr_29804_29840[(2)] = null);

(statearr_29804_29840[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29793 === (21))){
var state_29792__$1 = state_29792;
var statearr_29805_29841 = state_29792__$1;
(statearr_29805_29841[(2)] = null);

(statearr_29805_29841[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29793 === (13))){
var inst_29746 = (state_29792[(8)]);
var inst_29744 = (state_29792[(10)]);
var inst_29747 = (state_29792[(11)]);
var inst_29745 = (state_29792[(12)]);
var inst_29754 = (state_29792[(2)]);
var inst_29755 = (inst_29747 + (1));
var tmp29801 = inst_29746;
var tmp29802 = inst_29744;
var tmp29803 = inst_29745;
var inst_29744__$1 = tmp29802;
var inst_29745__$1 = tmp29803;
var inst_29746__$1 = tmp29801;
var inst_29747__$1 = inst_29755;
var state_29792__$1 = (function (){var statearr_29806 = state_29792;
(statearr_29806[(8)] = inst_29746__$1);

(statearr_29806[(10)] = inst_29744__$1);

(statearr_29806[(11)] = inst_29747__$1);

(statearr_29806[(14)] = inst_29754);

(statearr_29806[(12)] = inst_29745__$1);

return statearr_29806;
})();
var statearr_29807_29842 = state_29792__$1;
(statearr_29807_29842[(2)] = null);

(statearr_29807_29842[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29793 === (22))){
var state_29792__$1 = state_29792;
var statearr_29808_29843 = state_29792__$1;
(statearr_29808_29843[(2)] = null);

(statearr_29808_29843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29793 === (6))){
var inst_29733 = (state_29792[(13)]);
var inst_29742 = f.call(null,inst_29733);
var inst_29743 = cljs.core.seq.call(null,inst_29742);
var inst_29744 = inst_29743;
var inst_29745 = null;
var inst_29746 = (0);
var inst_29747 = (0);
var state_29792__$1 = (function (){var statearr_29809 = state_29792;
(statearr_29809[(8)] = inst_29746);

(statearr_29809[(10)] = inst_29744);

(statearr_29809[(11)] = inst_29747);

(statearr_29809[(12)] = inst_29745);

return statearr_29809;
})();
var statearr_29810_29844 = state_29792__$1;
(statearr_29810_29844[(2)] = null);

(statearr_29810_29844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29793 === (17))){
var inst_29758 = (state_29792[(7)]);
var inst_29762 = cljs.core.chunk_first.call(null,inst_29758);
var inst_29763 = cljs.core.chunk_rest.call(null,inst_29758);
var inst_29764 = cljs.core.count.call(null,inst_29762);
var inst_29744 = inst_29763;
var inst_29745 = inst_29762;
var inst_29746 = inst_29764;
var inst_29747 = (0);
var state_29792__$1 = (function (){var statearr_29811 = state_29792;
(statearr_29811[(8)] = inst_29746);

(statearr_29811[(10)] = inst_29744);

(statearr_29811[(11)] = inst_29747);

(statearr_29811[(12)] = inst_29745);

return statearr_29811;
})();
var statearr_29812_29845 = state_29792__$1;
(statearr_29812_29845[(2)] = null);

(statearr_29812_29845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29793 === (3))){
var inst_29790 = (state_29792[(2)]);
var state_29792__$1 = state_29792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29792__$1,inst_29790);
} else {
if((state_val_29793 === (12))){
var inst_29778 = (state_29792[(2)]);
var state_29792__$1 = state_29792;
var statearr_29813_29846 = state_29792__$1;
(statearr_29813_29846[(2)] = inst_29778);

(statearr_29813_29846[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29793 === (2))){
var state_29792__$1 = state_29792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29792__$1,(4),in$);
} else {
if((state_val_29793 === (23))){
var inst_29786 = (state_29792[(2)]);
var state_29792__$1 = state_29792;
var statearr_29814_29847 = state_29792__$1;
(statearr_29814_29847[(2)] = inst_29786);

(statearr_29814_29847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29793 === (19))){
var inst_29773 = (state_29792[(2)]);
var state_29792__$1 = state_29792;
var statearr_29815_29848 = state_29792__$1;
(statearr_29815_29848[(2)] = inst_29773);

(statearr_29815_29848[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29793 === (11))){
var inst_29744 = (state_29792[(10)]);
var inst_29758 = (state_29792[(7)]);
var inst_29758__$1 = cljs.core.seq.call(null,inst_29744);
var state_29792__$1 = (function (){var statearr_29816 = state_29792;
(statearr_29816[(7)] = inst_29758__$1);

return statearr_29816;
})();
if(inst_29758__$1){
var statearr_29817_29849 = state_29792__$1;
(statearr_29817_29849[(1)] = (14));

} else {
var statearr_29818_29850 = state_29792__$1;
(statearr_29818_29850[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29793 === (9))){
var inst_29780 = (state_29792[(2)]);
var inst_29781 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29792__$1 = (function (){var statearr_29819 = state_29792;
(statearr_29819[(15)] = inst_29780);

return statearr_29819;
})();
if(cljs.core.truth_(inst_29781)){
var statearr_29820_29851 = state_29792__$1;
(statearr_29820_29851[(1)] = (21));

} else {
var statearr_29821_29852 = state_29792__$1;
(statearr_29821_29852[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29793 === (5))){
var inst_29736 = cljs.core.async.close_BANG_.call(null,out);
var state_29792__$1 = state_29792;
var statearr_29822_29853 = state_29792__$1;
(statearr_29822_29853[(2)] = inst_29736);

(statearr_29822_29853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29793 === (14))){
var inst_29758 = (state_29792[(7)]);
var inst_29760 = cljs.core.chunked_seq_QMARK_.call(null,inst_29758);
var state_29792__$1 = state_29792;
if(inst_29760){
var statearr_29823_29854 = state_29792__$1;
(statearr_29823_29854[(1)] = (17));

} else {
var statearr_29824_29855 = state_29792__$1;
(statearr_29824_29855[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29793 === (16))){
var inst_29776 = (state_29792[(2)]);
var state_29792__$1 = state_29792;
var statearr_29825_29856 = state_29792__$1;
(statearr_29825_29856[(2)] = inst_29776);

(statearr_29825_29856[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29793 === (10))){
var inst_29747 = (state_29792[(11)]);
var inst_29745 = (state_29792[(12)]);
var inst_29752 = cljs.core._nth.call(null,inst_29745,inst_29747);
var state_29792__$1 = state_29792;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29792__$1,(13),out,inst_29752);
} else {
if((state_val_29793 === (18))){
var inst_29758 = (state_29792[(7)]);
var inst_29767 = cljs.core.first.call(null,inst_29758);
var state_29792__$1 = state_29792;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29792__$1,(20),out,inst_29767);
} else {
if((state_val_29793 === (8))){
var inst_29746 = (state_29792[(8)]);
var inst_29747 = (state_29792[(11)]);
var inst_29749 = (inst_29747 < inst_29746);
var inst_29750 = inst_29749;
var state_29792__$1 = state_29792;
if(cljs.core.truth_(inst_29750)){
var statearr_29826_29857 = state_29792__$1;
(statearr_29826_29857[(1)] = (10));

} else {
var statearr_29827_29858 = state_29792__$1;
(statearr_29827_29858[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25166__auto__))
;
return ((function (switch__25101__auto__,c__25166__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25102__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25102__auto____0 = (function (){
var statearr_29831 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29831[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25102__auto__);

(statearr_29831[(1)] = (1));

return statearr_29831;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25102__auto____1 = (function (state_29792){
while(true){
var ret_value__25103__auto__ = (function (){try{while(true){
var result__25104__auto__ = switch__25101__auto__.call(null,state_29792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25104__auto__;
}
break;
}
}catch (e29832){if((e29832 instanceof Object)){
var ex__25105__auto__ = e29832;
var statearr_29833_29859 = state_29792;
(statearr_29833_29859[(5)] = ex__25105__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29860 = state_29792;
state_29792 = G__29860;
continue;
} else {
return ret_value__25103__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25102__auto__ = function(state_29792){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25102__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25102__auto____1.call(this,state_29792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25102__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25102__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25102__auto__;
})()
;})(switch__25101__auto__,c__25166__auto__))
})();
var state__25168__auto__ = (function (){var statearr_29834 = f__25167__auto__.call(null);
(statearr_29834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25166__auto__);

return statearr_29834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25168__auto__);
});})(c__25166__auto__))
);

return c__25166__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29861 = [];
var len__23747__auto___29864 = arguments.length;
var i__23748__auto___29865 = (0);
while(true){
if((i__23748__auto___29865 < len__23747__auto___29864)){
args29861.push((arguments[i__23748__auto___29865]));

var G__29866 = (i__23748__auto___29865 + (1));
i__23748__auto___29865 = G__29866;
continue;
} else {
}
break;
}

var G__29863 = args29861.length;
switch (G__29863) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29861.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args29868 = [];
var len__23747__auto___29871 = arguments.length;
var i__23748__auto___29872 = (0);
while(true){
if((i__23748__auto___29872 < len__23747__auto___29871)){
args29868.push((arguments[i__23748__auto___29872]));

var G__29873 = (i__23748__auto___29872 + (1));
i__23748__auto___29872 = G__29873;
continue;
} else {
}
break;
}

var G__29870 = args29868.length;
switch (G__29870) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29868.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args29875 = [];
var len__23747__auto___29926 = arguments.length;
var i__23748__auto___29927 = (0);
while(true){
if((i__23748__auto___29927 < len__23747__auto___29926)){
args29875.push((arguments[i__23748__auto___29927]));

var G__29928 = (i__23748__auto___29927 + (1));
i__23748__auto___29927 = G__29928;
continue;
} else {
}
break;
}

var G__29877 = args29875.length;
switch (G__29877) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29875.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25166__auto___29930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25166__auto___29930,out){
return (function (){
var f__25167__auto__ = (function (){var switch__25101__auto__ = ((function (c__25166__auto___29930,out){
return (function (state_29901){
var state_val_29902 = (state_29901[(1)]);
if((state_val_29902 === (7))){
var inst_29896 = (state_29901[(2)]);
var state_29901__$1 = state_29901;
var statearr_29903_29931 = state_29901__$1;
(statearr_29903_29931[(2)] = inst_29896);

(statearr_29903_29931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29902 === (1))){
var inst_29878 = null;
var state_29901__$1 = (function (){var statearr_29904 = state_29901;
(statearr_29904[(7)] = inst_29878);

return statearr_29904;
})();
var statearr_29905_29932 = state_29901__$1;
(statearr_29905_29932[(2)] = null);

(statearr_29905_29932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29902 === (4))){
var inst_29881 = (state_29901[(8)]);
var inst_29881__$1 = (state_29901[(2)]);
var inst_29882 = (inst_29881__$1 == null);
var inst_29883 = cljs.core.not.call(null,inst_29882);
var state_29901__$1 = (function (){var statearr_29906 = state_29901;
(statearr_29906[(8)] = inst_29881__$1);

return statearr_29906;
})();
if(inst_29883){
var statearr_29907_29933 = state_29901__$1;
(statearr_29907_29933[(1)] = (5));

} else {
var statearr_29908_29934 = state_29901__$1;
(statearr_29908_29934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29902 === (6))){
var state_29901__$1 = state_29901;
var statearr_29909_29935 = state_29901__$1;
(statearr_29909_29935[(2)] = null);

(statearr_29909_29935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29902 === (3))){
var inst_29898 = (state_29901[(2)]);
var inst_29899 = cljs.core.async.close_BANG_.call(null,out);
var state_29901__$1 = (function (){var statearr_29910 = state_29901;
(statearr_29910[(9)] = inst_29898);

return statearr_29910;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29901__$1,inst_29899);
} else {
if((state_val_29902 === (2))){
var state_29901__$1 = state_29901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29901__$1,(4),ch);
} else {
if((state_val_29902 === (11))){
var inst_29881 = (state_29901[(8)]);
var inst_29890 = (state_29901[(2)]);
var inst_29878 = inst_29881;
var state_29901__$1 = (function (){var statearr_29911 = state_29901;
(statearr_29911[(7)] = inst_29878);

(statearr_29911[(10)] = inst_29890);

return statearr_29911;
})();
var statearr_29912_29936 = state_29901__$1;
(statearr_29912_29936[(2)] = null);

(statearr_29912_29936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29902 === (9))){
var inst_29881 = (state_29901[(8)]);
var state_29901__$1 = state_29901;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29901__$1,(11),out,inst_29881);
} else {
if((state_val_29902 === (5))){
var inst_29878 = (state_29901[(7)]);
var inst_29881 = (state_29901[(8)]);
var inst_29885 = cljs.core._EQ_.call(null,inst_29881,inst_29878);
var state_29901__$1 = state_29901;
if(inst_29885){
var statearr_29914_29937 = state_29901__$1;
(statearr_29914_29937[(1)] = (8));

} else {
var statearr_29915_29938 = state_29901__$1;
(statearr_29915_29938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29902 === (10))){
var inst_29893 = (state_29901[(2)]);
var state_29901__$1 = state_29901;
var statearr_29916_29939 = state_29901__$1;
(statearr_29916_29939[(2)] = inst_29893);

(statearr_29916_29939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29902 === (8))){
var inst_29878 = (state_29901[(7)]);
var tmp29913 = inst_29878;
var inst_29878__$1 = tmp29913;
var state_29901__$1 = (function (){var statearr_29917 = state_29901;
(statearr_29917[(7)] = inst_29878__$1);

return statearr_29917;
})();
var statearr_29918_29940 = state_29901__$1;
(statearr_29918_29940[(2)] = null);

(statearr_29918_29940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__25166__auto___29930,out))
;
return ((function (switch__25101__auto__,c__25166__auto___29930,out){
return (function() {
var cljs$core$async$state_machine__25102__auto__ = null;
var cljs$core$async$state_machine__25102__auto____0 = (function (){
var statearr_29922 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29922[(0)] = cljs$core$async$state_machine__25102__auto__);

(statearr_29922[(1)] = (1));

return statearr_29922;
});
var cljs$core$async$state_machine__25102__auto____1 = (function (state_29901){
while(true){
var ret_value__25103__auto__ = (function (){try{while(true){
var result__25104__auto__ = switch__25101__auto__.call(null,state_29901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25104__auto__;
}
break;
}
}catch (e29923){if((e29923 instanceof Object)){
var ex__25105__auto__ = e29923;
var statearr_29924_29941 = state_29901;
(statearr_29924_29941[(5)] = ex__25105__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29942 = state_29901;
state_29901 = G__29942;
continue;
} else {
return ret_value__25103__auto__;
}
break;
}
});
cljs$core$async$state_machine__25102__auto__ = function(state_29901){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25102__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25102__auto____1.call(this,state_29901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25102__auto____0;
cljs$core$async$state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25102__auto____1;
return cljs$core$async$state_machine__25102__auto__;
})()
;})(switch__25101__auto__,c__25166__auto___29930,out))
})();
var state__25168__auto__ = (function (){var statearr_29925 = f__25167__auto__.call(null);
(statearr_29925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25166__auto___29930);

return statearr_29925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25168__auto__);
});})(c__25166__auto___29930,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29943 = [];
var len__23747__auto___30013 = arguments.length;
var i__23748__auto___30014 = (0);
while(true){
if((i__23748__auto___30014 < len__23747__auto___30013)){
args29943.push((arguments[i__23748__auto___30014]));

var G__30015 = (i__23748__auto___30014 + (1));
i__23748__auto___30014 = G__30015;
continue;
} else {
}
break;
}

var G__29945 = args29943.length;
switch (G__29945) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29943.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25166__auto___30017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25166__auto___30017,out){
return (function (){
var f__25167__auto__ = (function (){var switch__25101__auto__ = ((function (c__25166__auto___30017,out){
return (function (state_29983){
var state_val_29984 = (state_29983[(1)]);
if((state_val_29984 === (7))){
var inst_29979 = (state_29983[(2)]);
var state_29983__$1 = state_29983;
var statearr_29985_30018 = state_29983__$1;
(statearr_29985_30018[(2)] = inst_29979);

(statearr_29985_30018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (1))){
var inst_29946 = (new Array(n));
var inst_29947 = inst_29946;
var inst_29948 = (0);
var state_29983__$1 = (function (){var statearr_29986 = state_29983;
(statearr_29986[(7)] = inst_29947);

(statearr_29986[(8)] = inst_29948);

return statearr_29986;
})();
var statearr_29987_30019 = state_29983__$1;
(statearr_29987_30019[(2)] = null);

(statearr_29987_30019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (4))){
var inst_29951 = (state_29983[(9)]);
var inst_29951__$1 = (state_29983[(2)]);
var inst_29952 = (inst_29951__$1 == null);
var inst_29953 = cljs.core.not.call(null,inst_29952);
var state_29983__$1 = (function (){var statearr_29988 = state_29983;
(statearr_29988[(9)] = inst_29951__$1);

return statearr_29988;
})();
if(inst_29953){
var statearr_29989_30020 = state_29983__$1;
(statearr_29989_30020[(1)] = (5));

} else {
var statearr_29990_30021 = state_29983__$1;
(statearr_29990_30021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (15))){
var inst_29973 = (state_29983[(2)]);
var state_29983__$1 = state_29983;
var statearr_29991_30022 = state_29983__$1;
(statearr_29991_30022[(2)] = inst_29973);

(statearr_29991_30022[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (13))){
var state_29983__$1 = state_29983;
var statearr_29992_30023 = state_29983__$1;
(statearr_29992_30023[(2)] = null);

(statearr_29992_30023[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (6))){
var inst_29948 = (state_29983[(8)]);
var inst_29969 = (inst_29948 > (0));
var state_29983__$1 = state_29983;
if(cljs.core.truth_(inst_29969)){
var statearr_29993_30024 = state_29983__$1;
(statearr_29993_30024[(1)] = (12));

} else {
var statearr_29994_30025 = state_29983__$1;
(statearr_29994_30025[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (3))){
var inst_29981 = (state_29983[(2)]);
var state_29983__$1 = state_29983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29983__$1,inst_29981);
} else {
if((state_val_29984 === (12))){
var inst_29947 = (state_29983[(7)]);
var inst_29971 = cljs.core.vec.call(null,inst_29947);
var state_29983__$1 = state_29983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29983__$1,(15),out,inst_29971);
} else {
if((state_val_29984 === (2))){
var state_29983__$1 = state_29983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29983__$1,(4),ch);
} else {
if((state_val_29984 === (11))){
var inst_29963 = (state_29983[(2)]);
var inst_29964 = (new Array(n));
var inst_29947 = inst_29964;
var inst_29948 = (0);
var state_29983__$1 = (function (){var statearr_29995 = state_29983;
(statearr_29995[(7)] = inst_29947);

(statearr_29995[(8)] = inst_29948);

(statearr_29995[(10)] = inst_29963);

return statearr_29995;
})();
var statearr_29996_30026 = state_29983__$1;
(statearr_29996_30026[(2)] = null);

(statearr_29996_30026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (9))){
var inst_29947 = (state_29983[(7)]);
var inst_29961 = cljs.core.vec.call(null,inst_29947);
var state_29983__$1 = state_29983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29983__$1,(11),out,inst_29961);
} else {
if((state_val_29984 === (5))){
var inst_29956 = (state_29983[(11)]);
var inst_29947 = (state_29983[(7)]);
var inst_29948 = (state_29983[(8)]);
var inst_29951 = (state_29983[(9)]);
var inst_29955 = (inst_29947[inst_29948] = inst_29951);
var inst_29956__$1 = (inst_29948 + (1));
var inst_29957 = (inst_29956__$1 < n);
var state_29983__$1 = (function (){var statearr_29997 = state_29983;
(statearr_29997[(12)] = inst_29955);

(statearr_29997[(11)] = inst_29956__$1);

return statearr_29997;
})();
if(cljs.core.truth_(inst_29957)){
var statearr_29998_30027 = state_29983__$1;
(statearr_29998_30027[(1)] = (8));

} else {
var statearr_29999_30028 = state_29983__$1;
(statearr_29999_30028[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (14))){
var inst_29976 = (state_29983[(2)]);
var inst_29977 = cljs.core.async.close_BANG_.call(null,out);
var state_29983__$1 = (function (){var statearr_30001 = state_29983;
(statearr_30001[(13)] = inst_29976);

return statearr_30001;
})();
var statearr_30002_30029 = state_29983__$1;
(statearr_30002_30029[(2)] = inst_29977);

(statearr_30002_30029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (10))){
var inst_29967 = (state_29983[(2)]);
var state_29983__$1 = state_29983;
var statearr_30003_30030 = state_29983__$1;
(statearr_30003_30030[(2)] = inst_29967);

(statearr_30003_30030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29984 === (8))){
var inst_29956 = (state_29983[(11)]);
var inst_29947 = (state_29983[(7)]);
var tmp30000 = inst_29947;
var inst_29947__$1 = tmp30000;
var inst_29948 = inst_29956;
var state_29983__$1 = (function (){var statearr_30004 = state_29983;
(statearr_30004[(7)] = inst_29947__$1);

(statearr_30004[(8)] = inst_29948);

return statearr_30004;
})();
var statearr_30005_30031 = state_29983__$1;
(statearr_30005_30031[(2)] = null);

(statearr_30005_30031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25166__auto___30017,out))
;
return ((function (switch__25101__auto__,c__25166__auto___30017,out){
return (function() {
var cljs$core$async$state_machine__25102__auto__ = null;
var cljs$core$async$state_machine__25102__auto____0 = (function (){
var statearr_30009 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30009[(0)] = cljs$core$async$state_machine__25102__auto__);

(statearr_30009[(1)] = (1));

return statearr_30009;
});
var cljs$core$async$state_machine__25102__auto____1 = (function (state_29983){
while(true){
var ret_value__25103__auto__ = (function (){try{while(true){
var result__25104__auto__ = switch__25101__auto__.call(null,state_29983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25104__auto__;
}
break;
}
}catch (e30010){if((e30010 instanceof Object)){
var ex__25105__auto__ = e30010;
var statearr_30011_30032 = state_29983;
(statearr_30011_30032[(5)] = ex__25105__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30033 = state_29983;
state_29983 = G__30033;
continue;
} else {
return ret_value__25103__auto__;
}
break;
}
});
cljs$core$async$state_machine__25102__auto__ = function(state_29983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25102__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25102__auto____1.call(this,state_29983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25102__auto____0;
cljs$core$async$state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25102__auto____1;
return cljs$core$async$state_machine__25102__auto__;
})()
;})(switch__25101__auto__,c__25166__auto___30017,out))
})();
var state__25168__auto__ = (function (){var statearr_30012 = f__25167__auto__.call(null);
(statearr_30012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25166__auto___30017);

return statearr_30012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25168__auto__);
});})(c__25166__auto___30017,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30034 = [];
var len__23747__auto___30108 = arguments.length;
var i__23748__auto___30109 = (0);
while(true){
if((i__23748__auto___30109 < len__23747__auto___30108)){
args30034.push((arguments[i__23748__auto___30109]));

var G__30110 = (i__23748__auto___30109 + (1));
i__23748__auto___30109 = G__30110;
continue;
} else {
}
break;
}

var G__30036 = args30034.length;
switch (G__30036) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30034.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25166__auto___30112 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25166__auto___30112,out){
return (function (){
var f__25167__auto__ = (function (){var switch__25101__auto__ = ((function (c__25166__auto___30112,out){
return (function (state_30078){
var state_val_30079 = (state_30078[(1)]);
if((state_val_30079 === (7))){
var inst_30074 = (state_30078[(2)]);
var state_30078__$1 = state_30078;
var statearr_30080_30113 = state_30078__$1;
(statearr_30080_30113[(2)] = inst_30074);

(statearr_30080_30113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30079 === (1))){
var inst_30037 = [];
var inst_30038 = inst_30037;
var inst_30039 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30078__$1 = (function (){var statearr_30081 = state_30078;
(statearr_30081[(7)] = inst_30038);

(statearr_30081[(8)] = inst_30039);

return statearr_30081;
})();
var statearr_30082_30114 = state_30078__$1;
(statearr_30082_30114[(2)] = null);

(statearr_30082_30114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30079 === (4))){
var inst_30042 = (state_30078[(9)]);
var inst_30042__$1 = (state_30078[(2)]);
var inst_30043 = (inst_30042__$1 == null);
var inst_30044 = cljs.core.not.call(null,inst_30043);
var state_30078__$1 = (function (){var statearr_30083 = state_30078;
(statearr_30083[(9)] = inst_30042__$1);

return statearr_30083;
})();
if(inst_30044){
var statearr_30084_30115 = state_30078__$1;
(statearr_30084_30115[(1)] = (5));

} else {
var statearr_30085_30116 = state_30078__$1;
(statearr_30085_30116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30079 === (15))){
var inst_30068 = (state_30078[(2)]);
var state_30078__$1 = state_30078;
var statearr_30086_30117 = state_30078__$1;
(statearr_30086_30117[(2)] = inst_30068);

(statearr_30086_30117[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30079 === (13))){
var state_30078__$1 = state_30078;
var statearr_30087_30118 = state_30078__$1;
(statearr_30087_30118[(2)] = null);

(statearr_30087_30118[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30079 === (6))){
var inst_30038 = (state_30078[(7)]);
var inst_30063 = inst_30038.length;
var inst_30064 = (inst_30063 > (0));
var state_30078__$1 = state_30078;
if(cljs.core.truth_(inst_30064)){
var statearr_30088_30119 = state_30078__$1;
(statearr_30088_30119[(1)] = (12));

} else {
var statearr_30089_30120 = state_30078__$1;
(statearr_30089_30120[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30079 === (3))){
var inst_30076 = (state_30078[(2)]);
var state_30078__$1 = state_30078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30078__$1,inst_30076);
} else {
if((state_val_30079 === (12))){
var inst_30038 = (state_30078[(7)]);
var inst_30066 = cljs.core.vec.call(null,inst_30038);
var state_30078__$1 = state_30078;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30078__$1,(15),out,inst_30066);
} else {
if((state_val_30079 === (2))){
var state_30078__$1 = state_30078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30078__$1,(4),ch);
} else {
if((state_val_30079 === (11))){
var inst_30046 = (state_30078[(10)]);
var inst_30042 = (state_30078[(9)]);
var inst_30056 = (state_30078[(2)]);
var inst_30057 = [];
var inst_30058 = inst_30057.push(inst_30042);
var inst_30038 = inst_30057;
var inst_30039 = inst_30046;
var state_30078__$1 = (function (){var statearr_30090 = state_30078;
(statearr_30090[(11)] = inst_30056);

(statearr_30090[(7)] = inst_30038);

(statearr_30090[(8)] = inst_30039);

(statearr_30090[(12)] = inst_30058);

return statearr_30090;
})();
var statearr_30091_30121 = state_30078__$1;
(statearr_30091_30121[(2)] = null);

(statearr_30091_30121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30079 === (9))){
var inst_30038 = (state_30078[(7)]);
var inst_30054 = cljs.core.vec.call(null,inst_30038);
var state_30078__$1 = state_30078;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30078__$1,(11),out,inst_30054);
} else {
if((state_val_30079 === (5))){
var inst_30039 = (state_30078[(8)]);
var inst_30046 = (state_30078[(10)]);
var inst_30042 = (state_30078[(9)]);
var inst_30046__$1 = f.call(null,inst_30042);
var inst_30047 = cljs.core._EQ_.call(null,inst_30046__$1,inst_30039);
var inst_30048 = cljs.core.keyword_identical_QMARK_.call(null,inst_30039,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30049 = (inst_30047) || (inst_30048);
var state_30078__$1 = (function (){var statearr_30092 = state_30078;
(statearr_30092[(10)] = inst_30046__$1);

return statearr_30092;
})();
if(cljs.core.truth_(inst_30049)){
var statearr_30093_30122 = state_30078__$1;
(statearr_30093_30122[(1)] = (8));

} else {
var statearr_30094_30123 = state_30078__$1;
(statearr_30094_30123[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30079 === (14))){
var inst_30071 = (state_30078[(2)]);
var inst_30072 = cljs.core.async.close_BANG_.call(null,out);
var state_30078__$1 = (function (){var statearr_30096 = state_30078;
(statearr_30096[(13)] = inst_30071);

return statearr_30096;
})();
var statearr_30097_30124 = state_30078__$1;
(statearr_30097_30124[(2)] = inst_30072);

(statearr_30097_30124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30079 === (10))){
var inst_30061 = (state_30078[(2)]);
var state_30078__$1 = state_30078;
var statearr_30098_30125 = state_30078__$1;
(statearr_30098_30125[(2)] = inst_30061);

(statearr_30098_30125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30079 === (8))){
var inst_30038 = (state_30078[(7)]);
var inst_30046 = (state_30078[(10)]);
var inst_30042 = (state_30078[(9)]);
var inst_30051 = inst_30038.push(inst_30042);
var tmp30095 = inst_30038;
var inst_30038__$1 = tmp30095;
var inst_30039 = inst_30046;
var state_30078__$1 = (function (){var statearr_30099 = state_30078;
(statearr_30099[(7)] = inst_30038__$1);

(statearr_30099[(8)] = inst_30039);

(statearr_30099[(14)] = inst_30051);

return statearr_30099;
})();
var statearr_30100_30126 = state_30078__$1;
(statearr_30100_30126[(2)] = null);

(statearr_30100_30126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25166__auto___30112,out))
;
return ((function (switch__25101__auto__,c__25166__auto___30112,out){
return (function() {
var cljs$core$async$state_machine__25102__auto__ = null;
var cljs$core$async$state_machine__25102__auto____0 = (function (){
var statearr_30104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30104[(0)] = cljs$core$async$state_machine__25102__auto__);

(statearr_30104[(1)] = (1));

return statearr_30104;
});
var cljs$core$async$state_machine__25102__auto____1 = (function (state_30078){
while(true){
var ret_value__25103__auto__ = (function (){try{while(true){
var result__25104__auto__ = switch__25101__auto__.call(null,state_30078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25104__auto__;
}
break;
}
}catch (e30105){if((e30105 instanceof Object)){
var ex__25105__auto__ = e30105;
var statearr_30106_30127 = state_30078;
(statearr_30106_30127[(5)] = ex__25105__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30128 = state_30078;
state_30078 = G__30128;
continue;
} else {
return ret_value__25103__auto__;
}
break;
}
});
cljs$core$async$state_machine__25102__auto__ = function(state_30078){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25102__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25102__auto____1.call(this,state_30078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25102__auto____0;
cljs$core$async$state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25102__auto____1;
return cljs$core$async$state_machine__25102__auto__;
})()
;})(switch__25101__auto__,c__25166__auto___30112,out))
})();
var state__25168__auto__ = (function (){var statearr_30107 = f__25167__auto__.call(null);
(statearr_30107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25166__auto___30112);

return statearr_30107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25168__auto__);
});})(c__25166__auto___30112,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map