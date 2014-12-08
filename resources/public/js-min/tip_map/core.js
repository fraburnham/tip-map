// Compiled by ClojureScript 0.0-2322
goog.provide('tip_map.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('google_charts.core');
goog.require('google_charts.core');
tip_map.core.xmlhttp = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
tip_map.core.add_to_db = (function add_to_db(latitude,longitude,tip){(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(tip_map.core.xmlhttp) : cljs.core.deref.call(null,tip_map.core.xmlhttp)).onreadystatechange = (function (){if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(tip_map.core.xmlhttp) : cljs.core.deref.call(null,tip_map.core.xmlhttp)).readyState)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(tip_map.core.xmlhttp) : cljs.core.deref.call(null,tip_map.core.xmlhttp)).status)))
{return document.getElementById("out").innerHTML = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(tip_map.core.xmlhttp) : cljs.core.deref.call(null,tip_map.core.xmlhttp)).responseText;
} else
{return null;
}
});
(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(tip_map.core.xmlhttp) : cljs.core.deref.call(null,tip_map.core.xmlhttp)).open("GET",("tipmap.php?add=true&latitude="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(latitude)+"&longitude="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(longitude)+"&tip="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tip)),true);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(tip_map.core.xmlhttp) : cljs.core.deref.call(null,tip_map.core.xmlhttp)).send();
});
tip_map.core.get_from_db = (function get_from_db(){(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(tip_map.core.xmlhttp) : cljs.core.deref.call(null,tip_map.core.xmlhttp)).onreadystatechange = (function (){if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(tip_map.core.xmlhttp) : cljs.core.deref.call(null,tip_map.core.xmlhttp)).readyState)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(tip_map.core.xmlhttp) : cljs.core.deref.call(null,tip_map.core.xmlhttp)).status)))
{var vectors = JSON.parse(clojure.string.replace((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(tip_map.core.xmlhttp) : cljs.core.deref.call(null,tip_map.core.xmlhttp)).responseText,/<.*>/,""));return google_charts.core.draw_chart(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["number","Latitude"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["number","Longitude"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["number","Tip"], null)], null),vectors,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$18,"markers",cljs.core.constant$keyword$19,"US"], null)),(new google.visualization.GeoChart(document.getElementById("chart"))));
} else
{return null;
}
});
(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(tip_map.core.xmlhttp) : cljs.core.deref.call(null,tip_map.core.xmlhttp)).open("GET","tipmap.php?makemap=1",true);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(tip_map.core.xmlhttp) : cljs.core.deref.call(null,tip_map.core.xmlhttp)).send();
});
tip_map.core.get_position = (function get_position(evt){return navigator.geolocation.getCurrentPosition((function (position){var latitude = position.coords.latitude;var longitude = position.coords.longitude;var total = parseFloat(document.getElementById("total").value);var collected = parseFloat(document.getElementById("collected").value);return tip_map.core.add_to_db(latitude,longitude,(collected - total));
}));
});
tip_map.core.show_input = (function show_input(evt){document.getElementById("chart").style.display = "none";
return document.getElementById("input").style.display = "block";
});
tip_map.core.show_chart = (function show_chart(evt){document.getElementById("chart").style.display = "block";
document.getElementById("input").style.display = "none";
return tip_map.core.get_from_db();
});
tip_map.core.init = (function init(){document.getElementById("btn").addEventListener("click",tip_map.core.get_position,false);
document.getElementById("input_nav").addEventListener("click",tip_map.core.show_input,false);
document.getElementById("chart_nav").addEventListener("click",tip_map.core.show_chart,false);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(tip_map.core.xmlhttp,(new XMLHttpRequest())) : cljs.core.reset_BANG_.call(null,tip_map.core.xmlhttp,(new XMLHttpRequest())));
});
google.load("visualization","1",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$20,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["geochart"], null)], null)));
window.onload = tip_map.core.init;
