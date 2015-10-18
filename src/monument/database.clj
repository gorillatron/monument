(ns monument.database
  (:require [com.stuartsierra.component :as component]
            [monger.core :as mg]))


(def db-uri "mongodb://heroku_4v0ws37t:q9qgcrk8n92kta32ocu35kt8hr@ds033734.mongolab.com:33734/heroku_4v0ws37t")


(defrecord Database []
  component/Lifecycle
  (start [component]
    (let [{:keys [conn db]} (mg/connect-via-uri db-uri)]
      (merge component {:conn conn :db db})))
  (stop [component]
    (do
      (mg/disconnect (:conn component))
      (dissoc component [:conn :db]))))


(defn create-database []
  (map->Database nil))