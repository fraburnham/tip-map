(ns google-charts.core)

(defn draw-chart [columns vectors options chart
                  &{:keys [tooltip]
                    :or {tooltip false}}]
  (let [data (new js/google.visualization.DataTable)]
    (doall ;gotta keep the doall on maps. lazy sequence...
     (map (fn [[type name]]
            (.addColumn data type name)) columns))
    (if tooltip
      (.addColumn data (clj->js {:type "string" :role "tooltip"})))
    (.addRows data vectors)
    (.draw chart data options)))
