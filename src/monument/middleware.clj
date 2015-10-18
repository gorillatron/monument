(ns monument.middleware)

(defn provide [app things]
  (fn [req]
    (app (merge req things))))