(ns monument.server
  (:require [com.stuartsierra.component :as component]
            [aleph.http :as http]
            [compojure.core :refer [GET POST defroutes]]
            [compojure.handler :refer [site]]
            [compojure.route :as route]
            [ring.middleware.reload :as reload]
            [monument.middleware :as middleware]
            [monger.collection :as mc]
            [hiccup.page :refer [html5]]
            [monger.conversion :refer [from-db-object]]))


(defn index-handler [req]
  (let [podcasts (mc/find-maps (:db req) "podcast")
        body (html5
               [:ul (for [podcast podcasts]
                      [:li (:title (:soundcloudTrack podcast))])])]
    {:status 200
     :body body}))


(defroutes all-routes
           (route/resources "/")
           (GET "/" [] index-handler)
           (route/not-found "<h1>Page not found</h1>"))


(defn app [db]
  (-> (site #'all-routes)
      (reload/wrap-reload)
      (middleware/provide {:db db})))


(defn create-server-handler [port db]
  (http/start-server (app db) {:port port}))


(defrecord Server [port]
  component/Lifecycle
  (start [component]
    (let [server (create-server-handler port (:db (:database component)))]
      (assoc component :server server)))
  (stop [component]
    (let [server (:server component)]
      (.close server))))


(defn create-server [port]
  (map->Server {:port port}))