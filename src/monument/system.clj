(ns monument.system
  (:require [com.stuartsierra.component :as component]
            [monument.server :as server]
            [monument.database :as database]
            [environ.core :refer [env]]))


(def port (Integer. (or (env :port) 8080)))


(defn create-system []
  (component/system-map
    :database (database/create-database)
    :server (component/using
              (server/create-server port)
              [:database])))