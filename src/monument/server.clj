(ns monument.server
  (:require [com.stuartsierra.component :as component]
            [aleph.http :as http]
            [compojure.core :refer [GET POST defroutes]]
            [compojure.handler :refer [site]]
            [compojure.route :as route]
            [ring.middleware.reload :as reload]))

(defroutes routes
           (GET "/" [] "index")
           (route/not-found "<h1>Page not found</h1>"))


(defn create-server-handler [routes port]
  (http/start-server (reload/wrap-reload (site routes)) {:port port}))


(defrecord Server []
  component/Lifecycle
  (start [component]
    (let [server (create-server-handler #'routes 3000)]
      (assoc component :server server)))
  (stop [component]
    (let [server (:server component)]
      (.close server))))

(defn create-server []
  (map->Server nil))