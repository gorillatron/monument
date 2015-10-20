// Compiled by ClojureScript 1.7.145 {}
goog.provide('monument.pages.podcasts.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
monument.pages.podcasts.core.__GT_Array = (function monument$pages$podcasts$core$__GT_Array(array_like){
return Array.prototype.slice.call(array_like);
});
monument.pages.podcasts.core.render_chan = cljs.core.async.chan.call(null);
var c__25166__auto___31710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25166__auto___31710){
return (function (){
var f__25167__auto__ = (function (){var switch__25101__auto__ = ((function (c__25166__auto___31710){
return (function (state_31680){
var state_val_31681 = (state_31680[(1)]);
if((state_val_31681 === (1))){
var state_31680__$1 = state_31680;
var statearr_31682_31711 = state_31680__$1;
(statearr_31682_31711[(2)] = null);

(statearr_31682_31711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31681 === (2))){
var state_31680__$1 = state_31680;
var statearr_31683_31712 = state_31680__$1;
(statearr_31683_31712[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31681 === (3))){
var inst_31678 = (state_31680[(2)]);
var state_31680__$1 = state_31680;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31680__$1,inst_31678);
} else {
if((state_val_31681 === (4))){
var inst_31668 = cljs.core.async.timeout.call(null,(66));
var state_31680__$1 = state_31680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31680__$1,(7),inst_31668);
} else {
if((state_val_31681 === (5))){
var state_31680__$1 = state_31680;
var statearr_31685_31713 = state_31680__$1;
(statearr_31685_31713[(2)] = null);

(statearr_31685_31713[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31681 === (6))){
var inst_31676 = (state_31680[(2)]);
var state_31680__$1 = state_31680;
var statearr_31686_31714 = state_31680__$1;
(statearr_31686_31714[(2)] = inst_31676);

(statearr_31686_31714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31681 === (7))){
var inst_31670 = (state_31680[(2)]);
var inst_31671 = (function (){return ((function (inst_31670,state_val_31681,c__25166__auto___31710){
return (function (){
var c__25166__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25166__auto____$1,inst_31670,state_val_31681,c__25166__auto___31710){
return (function (){
var f__25167__auto__ = (function (){var switch__25101__auto__ = ((function (c__25166__auto____$1,inst_31670,state_val_31681,c__25166__auto___31710){
return (function (state_31692){
var state_val_31693 = (state_31692[(1)]);
if((state_val_31693 === (1))){
var state_31692__$1 = state_31692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31692__$1,(2),monument.pages.podcasts.core.render_chan);
} else {
if((state_val_31693 === (2))){
var inst_31688 = (state_31692[(2)]);
var inst_31689 = (inst_31688["classList"]);
var inst_31690 = inst_31689.add("show");
var state_31692__$1 = state_31692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31692__$1,inst_31690);
} else {
return null;
}
}
});})(c__25166__auto____$1,inst_31670,state_val_31681,c__25166__auto___31710))
;
return ((function (switch__25101__auto__,c__25166__auto____$1,inst_31670,state_val_31681,c__25166__auto___31710){
return (function() {
var monument$pages$podcasts$core$state_machine__25102__auto__ = null;
var monument$pages$podcasts$core$state_machine__25102__auto____0 = (function (){
var statearr_31697 = [null,null,null,null,null,null,null];
(statearr_31697[(0)] = monument$pages$podcasts$core$state_machine__25102__auto__);

(statearr_31697[(1)] = (1));

return statearr_31697;
});
var monument$pages$podcasts$core$state_machine__25102__auto____1 = (function (state_31692){
while(true){
var ret_value__25103__auto__ = (function (){try{while(true){
var result__25104__auto__ = switch__25101__auto__.call(null,state_31692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25104__auto__;
}
break;
}
}catch (e31698){if((e31698 instanceof Object)){
var ex__25105__auto__ = e31698;
var statearr_31699_31715 = state_31692;
(statearr_31699_31715[(5)] = ex__25105__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31716 = state_31692;
state_31692 = G__31716;
continue;
} else {
return ret_value__25103__auto__;
}
break;
}
});
monument$pages$podcasts$core$state_machine__25102__auto__ = function(state_31692){
switch(arguments.length){
case 0:
return monument$pages$podcasts$core$state_machine__25102__auto____0.call(this);
case 1:
return monument$pages$podcasts$core$state_machine__25102__auto____1.call(this,state_31692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
monument$pages$podcasts$core$state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$0 = monument$pages$podcasts$core$state_machine__25102__auto____0;
monument$pages$podcasts$core$state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$1 = monument$pages$podcasts$core$state_machine__25102__auto____1;
return monument$pages$podcasts$core$state_machine__25102__auto__;
})()
;})(switch__25101__auto__,c__25166__auto____$1,inst_31670,state_val_31681,c__25166__auto___31710))
})();
var state__25168__auto__ = (function (){var statearr_31700 = f__25167__auto__.call(null);
(statearr_31700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25166__auto____$1);

return statearr_31700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25168__auto__);
});})(c__25166__auto____$1,inst_31670,state_val_31681,c__25166__auto___31710))
);

return c__25166__auto____$1;
});
;})(inst_31670,state_val_31681,c__25166__auto___31710))
})();
var inst_31672 = requestAnimationFrame(inst_31671);
var state_31680__$1 = (function (){var statearr_31701 = state_31680;
(statearr_31701[(7)] = inst_31672);

(statearr_31701[(8)] = inst_31670);

return statearr_31701;
})();
var statearr_31702_31717 = state_31680__$1;
(statearr_31702_31717[(2)] = null);

(statearr_31702_31717[(1)] = (2));


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
});})(c__25166__auto___31710))
;
return ((function (switch__25101__auto__,c__25166__auto___31710){
return (function() {
var monument$pages$podcasts$core$state_machine__25102__auto__ = null;
var monument$pages$podcasts$core$state_machine__25102__auto____0 = (function (){
var statearr_31706 = [null,null,null,null,null,null,null,null,null];
(statearr_31706[(0)] = monument$pages$podcasts$core$state_machine__25102__auto__);

(statearr_31706[(1)] = (1));

return statearr_31706;
});
var monument$pages$podcasts$core$state_machine__25102__auto____1 = (function (state_31680){
while(true){
var ret_value__25103__auto__ = (function (){try{while(true){
var result__25104__auto__ = switch__25101__auto__.call(null,state_31680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25104__auto__;
}
break;
}
}catch (e31707){if((e31707 instanceof Object)){
var ex__25105__auto__ = e31707;
var statearr_31708_31718 = state_31680;
(statearr_31708_31718[(5)] = ex__25105__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31719 = state_31680;
state_31680 = G__31719;
continue;
} else {
return ret_value__25103__auto__;
}
break;
}
});
monument$pages$podcasts$core$state_machine__25102__auto__ = function(state_31680){
switch(arguments.length){
case 0:
return monument$pages$podcasts$core$state_machine__25102__auto____0.call(this);
case 1:
return monument$pages$podcasts$core$state_machine__25102__auto____1.call(this,state_31680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
monument$pages$podcasts$core$state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$0 = monument$pages$podcasts$core$state_machine__25102__auto____0;
monument$pages$podcasts$core$state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$1 = monument$pages$podcasts$core$state_machine__25102__auto____1;
return monument$pages$podcasts$core$state_machine__25102__auto__;
})()
;})(switch__25101__auto__,c__25166__auto___31710))
})();
var state__25168__auto__ = (function (){var statearr_31709 = f__25167__auto__.call(null);
(statearr_31709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25166__auto___31710);

return statearr_31709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25168__auto__);
});})(c__25166__auto___31710))
);

var seq__31720_31748 = cljs.core.seq.call(null,monument.pages.podcasts.core.__GT_Array.call(null,document.querySelectorAll(".podcast")));
var chunk__31721_31749 = null;
var count__31722_31750 = (0);
var i__31723_31751 = (0);
while(true){
if((i__31723_31751 < count__31722_31750)){
var el_31752 = cljs.core._nth.call(null,chunk__31721_31749,i__31723_31751);
var c__25166__auto___31753 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__31720_31748,chunk__31721_31749,count__31722_31750,i__31723_31751,c__25166__auto___31753,el_31752){
return (function (){
var f__25167__auto__ = (function (){var switch__25101__auto__ = ((function (seq__31720_31748,chunk__31721_31749,count__31722_31750,i__31723_31751,c__25166__auto___31753,el_31752){
return (function (state_31727){
var state_val_31728 = (state_31727[(1)]);
if((state_val_31728 === (1))){
var state_31727__$1 = state_31727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31727__$1,(2),monument.pages.podcasts.core.render_chan,el_31752);
} else {
if((state_val_31728 === (2))){
var inst_31725 = (state_31727[(2)]);
var state_31727__$1 = state_31727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31727__$1,inst_31725);
} else {
return null;
}
}
});})(seq__31720_31748,chunk__31721_31749,count__31722_31750,i__31723_31751,c__25166__auto___31753,el_31752))
;
return ((function (seq__31720_31748,chunk__31721_31749,count__31722_31750,i__31723_31751,switch__25101__auto__,c__25166__auto___31753,el_31752){
return (function() {
var monument$pages$podcasts$core$state_machine__25102__auto__ = null;
var monument$pages$podcasts$core$state_machine__25102__auto____0 = (function (){
var statearr_31732 = [null,null,null,null,null,null,null];
(statearr_31732[(0)] = monument$pages$podcasts$core$state_machine__25102__auto__);

(statearr_31732[(1)] = (1));

return statearr_31732;
});
var monument$pages$podcasts$core$state_machine__25102__auto____1 = (function (state_31727){
while(true){
var ret_value__25103__auto__ = (function (){try{while(true){
var result__25104__auto__ = switch__25101__auto__.call(null,state_31727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25104__auto__;
}
break;
}
}catch (e31733){if((e31733 instanceof Object)){
var ex__25105__auto__ = e31733;
var statearr_31734_31754 = state_31727;
(statearr_31734_31754[(5)] = ex__25105__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31755 = state_31727;
state_31727 = G__31755;
continue;
} else {
return ret_value__25103__auto__;
}
break;
}
});
monument$pages$podcasts$core$state_machine__25102__auto__ = function(state_31727){
switch(arguments.length){
case 0:
return monument$pages$podcasts$core$state_machine__25102__auto____0.call(this);
case 1:
return monument$pages$podcasts$core$state_machine__25102__auto____1.call(this,state_31727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
monument$pages$podcasts$core$state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$0 = monument$pages$podcasts$core$state_machine__25102__auto____0;
monument$pages$podcasts$core$state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$1 = monument$pages$podcasts$core$state_machine__25102__auto____1;
return monument$pages$podcasts$core$state_machine__25102__auto__;
})()
;})(seq__31720_31748,chunk__31721_31749,count__31722_31750,i__31723_31751,switch__25101__auto__,c__25166__auto___31753,el_31752))
})();
var state__25168__auto__ = (function (){var statearr_31735 = f__25167__auto__.call(null);
(statearr_31735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25166__auto___31753);

return statearr_31735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25168__auto__);
});})(seq__31720_31748,chunk__31721_31749,count__31722_31750,i__31723_31751,c__25166__auto___31753,el_31752))
);


var G__31756 = seq__31720_31748;
var G__31757 = chunk__31721_31749;
var G__31758 = count__31722_31750;
var G__31759 = (i__31723_31751 + (1));
seq__31720_31748 = G__31756;
chunk__31721_31749 = G__31757;
count__31722_31750 = G__31758;
i__31723_31751 = G__31759;
continue;
} else {
var temp__4425__auto___31760 = cljs.core.seq.call(null,seq__31720_31748);
if(temp__4425__auto___31760){
var seq__31720_31761__$1 = temp__4425__auto___31760;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31720_31761__$1)){
var c__23492__auto___31762 = cljs.core.chunk_first.call(null,seq__31720_31761__$1);
var G__31763 = cljs.core.chunk_rest.call(null,seq__31720_31761__$1);
var G__31764 = c__23492__auto___31762;
var G__31765 = cljs.core.count.call(null,c__23492__auto___31762);
var G__31766 = (0);
seq__31720_31748 = G__31763;
chunk__31721_31749 = G__31764;
count__31722_31750 = G__31765;
i__31723_31751 = G__31766;
continue;
} else {
var el_31767 = cljs.core.first.call(null,seq__31720_31761__$1);
var c__25166__auto___31768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__31720_31748,chunk__31721_31749,count__31722_31750,i__31723_31751,c__25166__auto___31768,el_31767,seq__31720_31761__$1,temp__4425__auto___31760){
return (function (){
var f__25167__auto__ = (function (){var switch__25101__auto__ = ((function (seq__31720_31748,chunk__31721_31749,count__31722_31750,i__31723_31751,c__25166__auto___31768,el_31767,seq__31720_31761__$1,temp__4425__auto___31760){
return (function (state_31739){
var state_val_31740 = (state_31739[(1)]);
if((state_val_31740 === (1))){
var state_31739__$1 = state_31739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31739__$1,(2),monument.pages.podcasts.core.render_chan,el_31767);
} else {
if((state_val_31740 === (2))){
var inst_31737 = (state_31739[(2)]);
var state_31739__$1 = state_31739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31739__$1,inst_31737);
} else {
return null;
}
}
});})(seq__31720_31748,chunk__31721_31749,count__31722_31750,i__31723_31751,c__25166__auto___31768,el_31767,seq__31720_31761__$1,temp__4425__auto___31760))
;
return ((function (seq__31720_31748,chunk__31721_31749,count__31722_31750,i__31723_31751,switch__25101__auto__,c__25166__auto___31768,el_31767,seq__31720_31761__$1,temp__4425__auto___31760){
return (function() {
var monument$pages$podcasts$core$state_machine__25102__auto__ = null;
var monument$pages$podcasts$core$state_machine__25102__auto____0 = (function (){
var statearr_31744 = [null,null,null,null,null,null,null];
(statearr_31744[(0)] = monument$pages$podcasts$core$state_machine__25102__auto__);

(statearr_31744[(1)] = (1));

return statearr_31744;
});
var monument$pages$podcasts$core$state_machine__25102__auto____1 = (function (state_31739){
while(true){
var ret_value__25103__auto__ = (function (){try{while(true){
var result__25104__auto__ = switch__25101__auto__.call(null,state_31739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25104__auto__;
}
break;
}
}catch (e31745){if((e31745 instanceof Object)){
var ex__25105__auto__ = e31745;
var statearr_31746_31769 = state_31739;
(statearr_31746_31769[(5)] = ex__25105__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31770 = state_31739;
state_31739 = G__31770;
continue;
} else {
return ret_value__25103__auto__;
}
break;
}
});
monument$pages$podcasts$core$state_machine__25102__auto__ = function(state_31739){
switch(arguments.length){
case 0:
return monument$pages$podcasts$core$state_machine__25102__auto____0.call(this);
case 1:
return monument$pages$podcasts$core$state_machine__25102__auto____1.call(this,state_31739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
monument$pages$podcasts$core$state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$0 = monument$pages$podcasts$core$state_machine__25102__auto____0;
monument$pages$podcasts$core$state_machine__25102__auto__.cljs$core$IFn$_invoke$arity$1 = monument$pages$podcasts$core$state_machine__25102__auto____1;
return monument$pages$podcasts$core$state_machine__25102__auto__;
})()
;})(seq__31720_31748,chunk__31721_31749,count__31722_31750,i__31723_31751,switch__25101__auto__,c__25166__auto___31768,el_31767,seq__31720_31761__$1,temp__4425__auto___31760))
})();
var state__25168__auto__ = (function (){var statearr_31747 = f__25167__auto__.call(null);
(statearr_31747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25166__auto___31768);

return statearr_31747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25168__auto__);
});})(seq__31720_31748,chunk__31721_31749,count__31722_31750,i__31723_31751,c__25166__auto___31768,el_31767,seq__31720_31761__$1,temp__4425__auto___31760))
);


var G__31771 = cljs.core.next.call(null,seq__31720_31761__$1);
var G__31772 = null;
var G__31773 = (0);
var G__31774 = (0);
seq__31720_31748 = G__31771;
chunk__31721_31749 = G__31772;
count__31722_31750 = G__31773;
i__31723_31751 = G__31774;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=core.js.map