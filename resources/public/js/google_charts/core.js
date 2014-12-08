// Compiled by ClojureScript 0.0-2322
goog.provide('google_charts.core');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
google_charts.core.draw_chart = (function() { 
var draw_chart__delegate = function (columns,vectors,options,chart,p__5009){var map__5013 = p__5009;var map__5013__$1 = ((cljs.core.seq_QMARK_.call(null,map__5013))?cljs.core.apply.call(null,cljs.core.hash_map,map__5013):map__5013);var tooltip = cljs.core.get.call(null,map__5013__$1,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),false);var data = (new google.visualization.DataTable());cljs.core.doall.call(null,cljs.core.map.call(null,((function (data,map__5013,map__5013__$1,tooltip){
return (function (p__5014){var vec__5015 = p__5014;var type = cljs.core.nth.call(null,vec__5015,(0),null);var name = cljs.core.nth.call(null,vec__5015,(1),null);return data.addColumn(type,name);
});})(data,map__5013,map__5013__$1,tooltip))
,columns));
if(cljs.core.truth_(tooltip))
{data.addColumn(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"role","role",-736691072),"tooltip"], null)));
} else
{}
data.addRows(vectors);
return chart.draw(data,options);
};
var draw_chart = function (columns,vectors,options,chart,var_args){
var p__5009 = null;if (arguments.length > 4) {
  p__5009 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return draw_chart__delegate.call(this,columns,vectors,options,chart,p__5009);};
draw_chart.cljs$lang$maxFixedArity = 4;
draw_chart.cljs$lang$applyTo = (function (arglist__5016){
var columns = cljs.core.first(arglist__5016);
arglist__5016 = cljs.core.next(arglist__5016);
var vectors = cljs.core.first(arglist__5016);
arglist__5016 = cljs.core.next(arglist__5016);
var options = cljs.core.first(arglist__5016);
arglist__5016 = cljs.core.next(arglist__5016);
var chart = cljs.core.first(arglist__5016);
var p__5009 = cljs.core.rest(arglist__5016);
return draw_chart__delegate(columns,vectors,options,chart,p__5009);
});
draw_chart.cljs$core$IFn$_invoke$arity$variadic = draw_chart__delegate;
return draw_chart;
})()
;

//# sourceMappingURL=core.js.map