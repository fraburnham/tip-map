(ns tip-map.core
  (:require [google-charts.core :as chart]
            [clojure.string :as string]))

(def xmlhttp (atom nil))

;*
; Add the latitude longitude and tip to the database
;*
(defn add-to-db [latitude longitude tip]
  (set! (.-onreadystatechange @xmlhttp)
        (fn []
          (if (and (= 4 (.-readyState @xmlhttp)) (= 200 (.-status @xmlhttp)))
            (set! (.-innerHTML (.getElementById js/document "out")) (.-responseText @xmlhttp)))))
  (.open @xmlhttp "GET" (str "tipmap.php?add=true&latitude=" latitude "&longitude=" longitude "&tip=" tip) true)
  (.send @xmlhttp))

(defn get-from-db []
  (set! (.-onreadystatechange @xmlhttp)
        (fn []
          (if (and (= 4 (.-readyState @xmlhttp)) (= 200 (.-status @xmlhttp)))
            (let [vectors (.parse js/JSON (string/replace (.-responseText @xmlhttp) #"<.*>" ""))]
              (chart/draw-chart
               [["number" "Latitude"] ["number" "Longitude"] ["number" "Tip"]]
               vectors
               (clj->js {:displayMode "markers" :region "US"})
               (new js/google.visualization.GeoChart (.getElementById js/document "chart")))))))
  (.open @xmlhttp "GET" "tipmap.php?makemap=1" true)
  (.send @xmlhttp))

;;this will need to be updated to have a simple form that
;;has total, amount collected and the button
(defn get-position [evt]
  (js/navigator.geolocation.getCurrentPosition
   (fn [position]
     (let [latitude (.. position -coords -latitude)
           longitude (.. position -coords -longitude)
           total (js/parseFloat (.-value (.getElementById js/document "total")))
           collected (js/parseFloat (.-value (.getElementById js/document "collected")))]
       (add-to-db latitude longitude (- collected total))))))

(defn show-input [evt]
  (set! (.. (.getElementById js/document "chart") -style -display) "none")
  (set! (.. (.getElementById js/document "input") -style -display) "block"))

(defn show-chart [evt]
  (set! (.. (.getElementById js/document "chart") -style -display) "block")
  (set! (.. (.getElementById js/document "input") -style -display) "none")
  (get-from-db))

(defn init []
  (.addEventListener (.getElementById js/document "btn") "click" get-position false)
  (.addEventListener (.getElementById js/document "input_nav") "click" show-input false)
  (.addEventListener (.getElementById js/document "chart_nav") "click" show-chart false)
  (reset! xmlhttp (new js/XMLHttpRequest)))

(.load js/google "visualization" "1" (clj->js {:packages ["geochart"]}))
(set! (.-onload js/window) init)
