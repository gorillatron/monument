(ns monument.system
  (:require [com.stuartsierra.component :as component]
            [monument.server :as server]))


(defn create-system []
  (component/system-map
    :server (server/create-server)))